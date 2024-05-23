import './Resume.css';

export default function Resume() {
  return (
    <div className="resume-container">
      
      <div className="work-experience">
        <h3>Work Experience</h3>
        
        <div className="job">
          <h4>Software Integration Specialist</h4>
          <p>Docutech | Remote | 2022 - Current</p>
          <ul>
            <li>Conduct detailed analysis of partners' existing systems and processes to identify specific integration requirements.</li>
            <li>Develop strategic plans for integrating the Docutech system with partners’ infrastructure.</li>
            <li>Offer ongoing support to partners, addressing any integration-related issues promptly.</li>
            <li>Act as the primary liaison between technical teams and business stakeholders.</li>
          </ul>
        </div>
        
        <div className="job">
          <h4>Software Integration Specialist</h4>
          <p>International Document Services, Inc | Draper, Utah | 2012 - 2022</p>
          <ul>
            <li>Plan and execute the integration of new Loan Origination Systems into the existing IDS infrastructure.</li>
            <li>Conduct comprehensive testing phases to ensure the integration meets functional requirements.</li>
            <li>Document usability and technical specifications for assigned integrations.</li>
            <li>Foster relationships with integration partners and end users to improve the user experience.</li>
          </ul>
        </div>

        <div className="job">
          <h4>Loan Officer</h4>
          <p>Granite Credit Union | Salt Lake City, Utah | 2006 - 2012</p>
          <ul>
            <li>Evaluate completed loan files, ensure all figures and ratios were correctly determined.</li>
            <li>Perform outstanding customer service while effectively communicating with members with various needs.</li>
            <li>Receive, process, and post loan applications in person, by phone, and by Internet.</li>
            <li>Understand credit union policies, products, and services in order to assess members' needs and make recommendations.</li>
          </ul>
        </div>
      </div>
      
      <div className="education">
        <h3>Education</h3>
        <div className="degree">
          <h4>Machine Learning Specialization Certification</h4>
          <p>Stanford University | In Progress</p>
        </div>
        <div className="degree">
          <h4>AI Developer Professional Certification</h4>
          <p>IBM | In Progress</p>
        </div>
        <div className="degree">
          <h4>Full-Stack Web Development Certification</h4>
          <p>University of Utah | June 2024</p>
        </div>
        <div className="degree">
          <h4>A.S. General Studies</h4>
          <p>Weber State University | April 2016</p>
        </div>
      </div>
      
      <div className="skills">
        <h3>Skills</h3>
        <div className="skills-columns">
          <div className="skill-category">
            <h4>Frontend Development</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Backend Development</h4>
            <ul>
              <li>API (RESTful, GraphQL)</li>
              <li>SQL (MySQL, PostgreSQL)</li>
              <li>MVC (Model-View-Controller)</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Full Stack Development</h4>
            <ul>
              <li>MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Machine Learning & AI</h4>
            <ul>
              <li>IBM Watson</li>
              <li>Machine Learning Algorithms</li>
              <li>Neural Networks</li>
              <li>NLP (Natural Language Processing)</li>
              <li>Python</li>
              <li>TensorFlow</li>
              <li>Scikit-Learn</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Other Technologies</h4>
            <ul>
              <li>MISMO XML</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="languages">
        <h3>Languages</h3>
        <ul>
          <li>English (native proficiency)</li>
          <li>French (limited working proficiency)</li>
        </ul>
      </div>

      <a href="/assets/files/MalloryHowardResume.pdf" target="_blank" rel="noopener noreferrer">
        Download/View Full Resume
      </a>
    </div>
  );
}
