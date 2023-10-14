import React from 'react';
import './Contact.css'; // Create a separate CSS file for the Skills component

function Skills() {
  const skillsList = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Express.js',
    'SQL',
    'Git',
    'Responsive Design',
    'UI/UX Design',
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-content">
        <h2>Skills</h2>
        <ul className="skills-list">
          {skillsList.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
