import './App.css';
import ramizImage from './ramiz.jpg';

const ContactItem = ({ icon, children }) => (
  <div className="contact-item">
    <span className="icon" role="img" aria-label="contact icon">{icon}</span>
    {children}
  </div>
);

const Section = ({ title, children }) => (
  <section className="section">
    <h2>{title}</h2>
    {children}
  </section>
);

const ExperienceItem = ({ company, period, achievements }) => (
  <div className="experience-item">
    <h3>
      {company} <span className="period">({period})</span>
    </h3>
    <ul>
      {achievements.map((achievement, index) => (
        <li key={index}>{achievement}</li>
      ))}
    </ul>
  </div>
);

function App() {
  return (
    <div className="container">
      <header className="header">
        <img src={ramizImage} alt="Ramiz Khan Profile" className="profile-image" />
        <h1>Ramiz Khan</h1>
        <p className="subtitle">Senior Software Engineer at Cimpress · Bengaluru, India</p>
      </header>

      <Section title="Summary">
        <p className="summary">
          Creative full-stack developer with 5+ years of experience building scalable software used by millions.
          Strong in systems design, product development, and backend architecture.
        </p>
      </Section>

      <Section title="Contact">
        <div className="contact-grid">
          <ContactItem icon="📞">+91 95990 49566</ContactItem>
          <ContactItem icon="📧">ramizuddinboss@gmail.com</ContactItem>
          <ContactItem icon="🔗">
            <a href="https://www.linkedin.com/in/ramiz-khan-993a83103"
               target="_blank"
               rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </ContactItem>
          {/* Add a GitHub link! */}
          {/* <ContactItem icon="🐙">
            <a href="YOUR_GITHUB_URL" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </ContactItem> */}
        </div>
      </Section>

      <Section title="Experience">
        <ExperienceItem
          company="Cimpress"
          period="2020 – Present"
          achievements={[
            "Redesigned the Logo Composer Engine for no-code layout creation, enhancing user flexibility and reducing development time.",
            "Implemented monetized Premium Logos and Monogram features, significantly contributing to revenue growth.",
            "Dockerized services and migrated deployment to AWS ECS, improving scalability and reducing operational overhead."
          ]}
        />
        <ExperienceItem
          company="RIVIGO"
          period="2017 – 2020"
          achievements={[
            "Built a robust truck service marketplace and cashbook system, streamlining logistics operations.",
            "Developed a real-time support portal and chat system, improving customer service efficiency."
          ]}
        />
      </Section>

      <Section title="Skills">
        <div className="skills-grid">
          {["JavaScript", "TypeScript", "React", "Node.js", "Express.js", "Docker", "AWS", "SQL", "PostgreSQL", "MongoDB", "Redis", "Redux", "RESTful APIs", "Microservices", "System Design"]
            .map(skill => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
        </div>
      </Section>

      <Section title="Education">
        <p>B.Tech in Computer Engineering – AMU (2012–2016)</p>
      </Section>

      <Section title="Certifications & Patents">
        <ul>
          <li>Patent: Techniques for Visually Rendering Characters in Design (US Patent)</li>
        </ul>
      </Section>
    </div>
  );
}

export default App;