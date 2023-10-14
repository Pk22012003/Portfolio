import React from 'react';
import './Projects.css'; // Create a separate CSS file for the Projects component

function Projects() {
  const projectsData = [
    {
      title: 'Calculator',
      description: 'A Simple Calculator will add, subtract, multiply, and divide',
      imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.involve.me%2Fblog%2Fhow-to-create-a-simple-price-calculator-and-capture-more-leads&psig=AOvVaw2qr9JRi-7PTaZTqMsn5qfy&ust=1697350026221000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjHyNvv9IEDFQAAAAAdAAAAABAE', 
      projectUrl: 'https://example.com/project1',
    },
    {
      title: 'Responsive Paragraph Word Counter',
      description: 'An App which can count the number of words in an paragraph',
      imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DOBitP_wUDHU&psig=AOvVaw0DoXnaf9T3G2uMYU4vHiyF&ust=1697350418789000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLjH1Jbx9IEDFQAAAAAdAAAAABAE',
      projectUrl: 'https://example.com/project2',
    },
    // Add more project objects as needed
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <h2>Projects</h2>
        <div className="projects-list">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.imageUrl} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
