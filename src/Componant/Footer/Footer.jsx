import { Component } from "react";
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faLinkedin ,faInstagram} from '@fortawesome/free-brands-svg-icons';
export default class Footer extends Component {
    constructor() {

        super()
    }
    render() {
       return <>
       
       <div className="Contact ">
<h2>Contact Me</h2>
       <div className="social-media">
        <a href="https://www.facebook.com/profile.php?id=100006910249034&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://wa.me/+201152871396" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>

       </div>
       
       </>
    }
}



