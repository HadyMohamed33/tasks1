import  { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });
  const handelValdition = (ev) => {

    if (ev.target.type=="email") {
      setUser({ ...user,email:ev.target.value });
      setErrors({ ...errors, emailError: (ev.target.value.length == 0) ? 'email is required' : (ev.target.value.includes("@")) ? '' : "invalid email" });
    } else {

      setUser({ ...user, password:ev.target.value });

    }
  };


  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={user.email}  onChange={(e) => {
            handelValdition(e);
          }} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={user.password} onChange={(e) => {
            handelValdition(e);
          }} />
        </Form.Group>


        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

    </>
  )
}
