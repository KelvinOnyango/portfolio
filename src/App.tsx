import "./App.css";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured online store with React and Node.js backend",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
      category: "web",
      healthImpact: {
        patientsReached: 0,
        efficiencyGain: "0%",
      },
    },
    {
      title: "Task Management App",
      description: "Productivity application with real-time collaboration",
      tags: ["React", "Firebase", "Material UI"],
      link: "#",
      category: "web",
      healthImpact: {
        patientsReached: 0,
        efficiencyGain: "0%",
      },
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application with API integration",
      tags: ["JavaScript", "API", "CSS3"],
      link: "#",
      category: "web",
      healthImpact: {
        patientsReached: 0,
        efficiencyGain: "0%",
      },
    },
    {
      title: "Telemedicine Platform",
      description: "Secure video consultations for doctors and patients",
      tags: ["React", "WebRTC", "Node.js"],
      link: "#",
      category: "health",
      healthImpact: {
        patientsReached: "10,000+",
        efficiencyGain: "40%",
      },
    },
    {
      title: "Patient Records System",
      description: "HIPAA-compliant medical records management",
      tags: ["React", "Blockchain", "AWS"],
      link: "#",
      category: "health",
      healthImpact: {
        patientsReached: "5,000+",
        efficiencyGain: "35%",
      },
    },
  ];

  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "HTML/CSS", level: 100 },
    { name: "Node.js", level: 80 },
    { name: "UI/UX Design", level: 75 },
    { name: "Git", level: 85 },
    { name: "Healthcare IT", level: 85 },
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            KO
          </a>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
            <span className="health-badge">Health Tech Focus</span>
            <button onClick={toggleDarkMode} className="dark-mode-toggle">
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero" id="home">
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Kelvin Onyango</h1>
            <h2 className="hero-subtitle">Professional Web Developer</h2>
            <p className="hero-description">
              I create beautiful, functional websites and applications using
              modern technologies. Focused on React, JavaScript, and delivering
              exceptional user experiences with a specialization in health tech
              solutions.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="/profilepic1.png"
              alt="Kelvin Onyango"
              className="profile-image"
            />
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <section className="section projects-section" id="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>

          <div className="project-filters">
            <button
              className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              All Projects
            </button>
            <button
              className={`filter-btn ${
                activeFilter === "health" ? "active" : ""
              }`}
              onClick={() => setActiveFilter("health")}
            >
              Health Tech
            </button>
            <button
              className={`filter-btn ${activeFilter === "web" ? "active" : ""}`}
              onClick={() => setActiveFilter("web")}
            >
              Web Development
            </button>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  {project.category === "health" && (
                    <div className="health-impact">
                      <div className="impact-metric">
                        <span className="metric-value">
                          {project.healthImpact.patientsReached}
                        </span>
                        <span className="metric-label">Patients Reached</span>
                      </div>
                      <div className="impact-metric">
                        <span className="metric-value">
                          {project.healthImpact.efficiencyGain}
                        </span>
                        <span className="metric-label">Efficiency Gain</span>
                      </div>
                    </div>
                  )}
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project <FiExternalLink />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills-section" id="skills">
        <div className="container">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">Technologies I work with</p>

          <div className="skills-container">
            {skills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section" id="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's work together</p>

          <div className="contact-content">
            <div className="contact-info">
              <p>
                I'm currently available for freelance work or full-time
                positions. If you have a project you'd like to discuss, feel
                free to reach out.
              </p>
              <div className="social-links">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="social-icon" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="social-icon" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="social-icon" />
                </a>
                <a href="mailto:kelvin@example.com">
                  <FaEnvelope className="social-icon" />
                </a>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Kelvin Onyango. All rights
            reserved.
          </p>
          <p>Built with React and ❤️</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
