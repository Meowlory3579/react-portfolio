import './Home.css';

export default function Home() {
  return (
    <div className='home-background'>
      <div className='home-columns'>
        <div className='home-content'>
          <p>
            With over 12 years of experience in software integration, I have developed a passion for delivering innovative solutions that enhance partner and client satisfaction, streamline workflows, and increase revenue.
            <br />
            <br />
            In addition to my role as a Software Integration Specialist, I have completed a Full-Stack Web Development Certificate program at the University of Utah, where I learned to build dynamic web applications using various tools and technologies, including HTML, CSS, JavaScript, SQL, Express, and React. Alongside this, I am also working toward Certificates in Applied AI and Machine Learning Specialization. My goal is to leverage my skills in object-oriented programming, application programming interfaces, AI, and machine learning to create user-friendly and scalable web solutions. I am eager to explore new opportunities where I can apply my knowledge and expertise to help businesses grow and thrive.
            <br />
            <br />
            When I'm not at the computer, you can usually find me backpacking, rock climbing, scuba diving, or traveling around the globe with <a href="https://www.instagram.com/the_childs_adventures/" target="_blank" rel="noopener noreferrer">"the child"</a>.
          </p>
        </div>
        <div className='home-image'>
          <img src='/assets/images/Mallory-Headshot.JPG' alt='Photo of Mallory' />
        </div>
      </div>
    </div>
  );
}
