import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Ramiz Khan</h1>
      <p className="subtitle">Senior Software Engineer at Cimpress · Bengaluru, India</p>

      <section>
        <h2>Contact</h2>
        <p>📞 +91 95990 49566</p>
        <p>📧 ramizuddinboss@gmail.com</p>
        <p>🔗 <a href="https://www.linkedin.com/in/ramiz-khan-993a83103" target="_blank">LinkedIn</a></p>
      </section>

      <section>
        <h2>Summary</h2>
        <p>
          Creative full-stack developer with 5+ years of experience building scalable software used by millions.
          Strong in systems design, product development, and backend architecture.
        </p>
      </section>

      <section>
        <h2>Experience</h2>
        <h3>Cimpress (2020 – Present)</h3>
        <ul>
          <li>Redesigned the Logo Composer Engine for no-code layout creation</li>
          <li>Implemented monetized Premium Logos and Monogram features</li>
          <li>Dockerized services and migrated deployment to ECS</li>
        </ul>

        <h3>RIVIGO (2017 – 2020)</h3>
        <ul>
          <li>Built truck service marketplace and cashbook system</li>
          <li>Developed real-time support portal and chat system</li>
        </ul>
      </section>

      <section>
        <h2>Education</h2>
        <p>B.Tech in Computer Engineering – AMU (2012–2016)</p>
      </section>

      <section>
        <h2>Skills</h2>
        <p>JavaScript, React, Node.js, Docker, AWS, SQL, Redis, Redux</p>
      </section>

      <section>
        <h2>Certifications & Patents</h2>
        <ul>
          <li>Modern React with Redux</li>
          <li>Patent: Techniques for Visually Rendering Characters in Design</li>
        </ul>
      </section>
    </div>
  );
}

export default App;