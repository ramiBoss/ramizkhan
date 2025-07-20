import './App.css';
import ramizImage from './ramiz.jpg';

const profileData = {
  name: "Ramiz Khan",
  title: "Senior Software Engineer at Cimpress · Bengaluru, India",
  image: ramizImage,
  summary: `I’m passionate about building efficient, scalable, and elegant software solutions. With a love for simplicity, 
  I enjoy turning complex problems into solutions that are easy to build, use, and maintain. 
  I’m always eager to learn new skills and explore emerging technologies to enhance my work. 
  I value sharing knowledge, supporting my team, and helping others grow. 
  I thrive in cross-functional environments and am equally confident working independently.`
};

const contactData = [
  { icon: "📞", content: "+91 95990 49566" },
  { icon: "📧", content: "ramizuddinboss@gmail.com" },
  { icon: "🔗", content: "LinkedIn Profile", url: "https://www.linkedin.com/in/ramiz-khan-993a83103" }
];

const experienceData = [
  {
    company: "Cimpress",
    jobTitle: "Senior Software Engineer",
    period: "2021 – Present",
    achievements: [
      "Led the development of a no-code logo design tool, enhancing user experience and reducing design time by 50%.",
      "Architected and implemented a microservices-based backend system, improving scalability and maintainability.",
      "Optimized database queries and introduced caching strategies, resulting in a 30% performance improvement."
    ]
  },
  {
    company: "Cimpress",
    jobTitle: "Software Engineer",
    period: "2020 – 2021",
    achievements: [
      "Redesigned the Logo Composer Engine for no-code layout creation, enhancing user flexibility and reducing development time.",
      "Implemented monetized Premium Logos and Monogram features, significantly contributing to revenue growth.",
      "Dockerized services and migrated deployment to AWS ECS, improving scalability and reducing operational overhead."
    ]
  },
  {
    company: "RIVIGO",
    jobTitle: "Software Engineer",
    period: "2017 – 2020",
    achievements: [
      "Built a robust truck service marketplace and cashbook system, streamlining logistics operations.",
      "Developed a real-time support portal and chat system, improving customer service efficiency."
    ]
  }
];

const skillsData = [
  "JavaScript", "TypeScript", "React", "Node.js", "Express.js", "Docker", 
  "AWS", "SQL", "PostgreSQL", "MongoDB", "Redis", "Redux", 
  "RESTful APIs", "Microservices", "System Design"
];

const ContactItem = ({ icon, children, url }) => (
  <div className="contact-item">
    <span className="icon" role="img" aria-label="contact icon">{icon}</span>
    {url ? (
      <a href={url} target="_blank" rel="noopener noreferrer">{children}</a>
    ) : children}
  </div>
);

const Section = ({ title, children }) => (
  <section className="section">
    <h2>{title}</h2>
    {children}
  </section>
);

const ExperienceItem = ({ company, jobTitle, period, achievements }) => (
  <div className="experience-item">
    <h3>
      {company} <span className="period">({period})</span>
    </h3>
    <p className="job-title">{jobTitle}</p>
    <ul>
      {achievements.map((achievement, index) => (
        <li key={index}>{achievement}</li>
      ))}
    </ul>
  </div>
);

const Header = ({ name, title, image }) => (
  <header className="header">
    <img src={image} alt={`${name} Profile`} className="profile-image" />
    <h1>{name}</h1>
    <p className="subtitle">{title}</p>
  </header>
);

function App() {
  return (
    <div className="container">
      <header className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ textAlign: 'left' }}>{profileData.name}</h1>
          <p className="subtitle" style={{ textAlign: 'left' }}>{profileData.title}</p>
        </div>
        <img 
          src={profileData.image} 
          alt={`${profileData.name} Profile`} 
          className="profile-image" 
          style={{ marginLeft: '2rem' }}
        />
      </header>

      <Section title="Summary">
        <p className="summary">{profileData.summary}</p>
      </Section>

      <Section title="Contact">
        <div className="contact-grid">
          {contactData.map((contact, index) => (
            <ContactItem key={index} icon={contact.icon} url={contact.url}>
              {contact.content}
            </ContactItem>
          ))}
        </div>
      </Section>

      <Section title="Experience">
        {experienceData.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </Section>

      <Section title="Skills">
        <div className="skills-grid">
          {skillsData.map(skill => (
            <span key={skill} className="skill-tag">{skill}</span>
          ))}
        </div>
      </Section>

      <Section title="Education">
        <ul>
          <li>B.Tech in Computer Engineering – AMU (2012–2016)</li>
          <li>Diploma in Computer Engineering – AMU (2009–2012)</li>
        </ul>
      </Section>

      <Section title="Patent">
        <ul>
          <li>Patent: Techniques for Visually Rendering Characters in Design (US Patent)</li>
        </ul>
      </Section>
    </div>
  );
}

export default App;
