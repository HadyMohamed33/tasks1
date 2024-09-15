
import './Skills.css';

export default function skills()  {
  const skills = [
    { name: 'UI/UX Design', level: 85 },
    { name: 'Front-end Development', level: 90 },
    { name: 'Mobile App Design', level: 75 },
    { name: 'Web Design', level: 80 },
    { name: 'Prototyping', level: 70 },
  ];


   return <>
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <span>{skill.name}</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  
}


