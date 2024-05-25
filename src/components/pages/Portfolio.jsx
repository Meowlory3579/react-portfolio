import './Portfolio.css';

// Sample data for projects
const projects = [
  {
    title: 'Tech Blog',
    image: '/assets/images/tech-blog-logo.png',
    deployedUrl: 'https://damp-woodland-55117-a1b32ed6e0d9.herokuapp.com/',
    githubUrl: 'https://github.com/Meowlory3579/tech-blog',
    description: 'MVC | Handlebars | Sequelize | Express'
  },
  {
    title: 'Time Tracker',
    image: '/assets/images/time-tracker.png',
    deployedUrl: 'https://best-time-tracker-666990ef70ad.herokuapp.com/',
    githubUrl: 'https://github.com/Meowlory3579/time-tracker',
    description: 'MVC | Handlebars | Sequelize | Express'
  },
  {
    title: 'Note Taker',
    image: '/assets/images/note-taker.webp',
    deployedUrl: 'https://note-taker-2fdz.onrender.com/',
    githubUrl: 'https://github.com/Meowlory3579/note-taker',
    description: 'Express'
  },
  {
    title: 'Weather Dashboard',
    image: '/assets/images/weather-dashboard.png',
    deployedUrl: 'https://meowlory3579.github.io/weather-dashboard/',
    githubUrl: 'https://github.com/Meowlory3579/weather-dashboard',
    description: 'API | jQuery'
  },
  {
    title: 'Work Day Scheduler',
    image: '/assets/images/work-day-scheduler.jpg',
    deployedUrl: 'https://meowlory3579.github.io/work-day-scheduler/',
    githubUrl: 'https://github.com/Meowlory3579/work-day-scheduler',
    description: 'jQuery'
  },
  {
    title: 'Timed Coding Quiz',
    image: '/assets/images/quiz.png',
    deployedUrl: 'https://meowlory3579.github.io/timed-code-quiz/',
    githubUrl: 'https://github.com/Meowlory3579/timed-code-quiz',
    description: ''
  },
];


export default function Portfolio() {
  return (
    <div className="portfolio-container">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <div className="project-image">
            <img src={project.image} alt={project.title} />
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