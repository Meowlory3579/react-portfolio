import './Portfolio.css';

// Sample data for projects
const projects = [
  {
    title: 'Project 1',
    image: '/assets/images/project1.jpg',
    deployedUrl: 'https://example.com/project1',
    githubUrl: 'https://github.com/yourusername/project1',
    description: 'This is a brief description of Project 1.'
  },
  {
    title: 'Project 2',
    image: '/assets/images/project2.jpg',
    deployedUrl: 'https://example.com/project2',
    githubUrl: 'https://github.com/yourusername/project2',
    description: 'This is a brief description of Project 2.'
  },
  // Add more projects as needed
];

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}>
            <div className="overlay">
              <h3><a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">{project.title}</a></h3>
              <p>{project.description}</p>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github icon"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
