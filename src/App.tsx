import React from "react";
import "./App.css";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function App() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured online store with React and Node.js backend",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      title: "Task Management App",
      description: "Productivity application with real-time collaboration",
      tags: ["React", "Firebase", "Material UI"],
      link: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application with API integration",
      tags: ["JavaScript", "API", "CSS3"],
      link: "#",
    },
  ];

  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "HTML/CSS", level: 100 },
    { name: "Node.js", level: 80 },
    { name: "UI/UX Design", level: 75 },
    { name: "Git", level: 85 },
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="">
          <a href="#home" className="logo">
            KO
          </a>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
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
              exceptional user experiences.
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

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
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
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
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
