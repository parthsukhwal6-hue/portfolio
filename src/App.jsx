import './App.css'
 HEAD
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import EducationPage from './pages/EducationPage'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import SkillsPage from './pages/SkillsPage'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  )
}

const projects = [
  {
    number: '01',
    name: 'Shopping Website',
    status: 'In development',
    description:
      'A responsive e-commerce experience with product listings, categories, search, product details, and a shopping cart.',
    focus: 'Building an interactive storefront while deepening my React and modern UI development skills.',
    technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
    aiTools: ['ChatGPT', 'GitHub Copilot Pro', 'Google Gemini'],
  },
  {
    number: '02',
    name: 'Fitness & Bodybuilding Platform',
    status: 'Exploring the idea',
    description:
      'A personal project exploring how technology can make fitness and bodybuilding education more accessible.',
    focus:
      'Planned areas include workouts, exercise and nutrition resources, fitness tracking, articles, AI recommendations, and career information.',
    technologies: ['Technology stack to be decided'],
    aiTools: [],
  },
]

const webSkills = [
  'React',
  'JavaScript',
  'HTML',
  'CSS',
  'Tailwind CSS',
  'Git',
  'GitHub',
  'Vite',
]

const aiTools = ['ChatGPT', 'GitHub Copilot Pro', 'Google Gemini']

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4.5 10h10m-4-4 4 4-4 4" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M11 4.5h4.5V9M15.2 4.8 8.8 11.2" />
      <path d="M14 11v3.5a1 1 0 0 1-1 1H5.5a1 1 0 0 1-1-1V6.5a1 1 0 0 1 1-1H9" />
    </svg>
  )
}

function SectionLabel({ children }) {
  return (
    <p className="section-label">
      <span className="section-label__dot" />
      {children}
    </p>
  )
}

function App() {
  return (
    <div className="portfolio-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Parth Sukhwal home">
          <span className="brand-mark">PS</span>
          <span className="brand-name">PARTH SUKHWAL</span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="topbar-contact" href="mailto:parthsukhwal6@gmail.com">
          Say hello <ArrowIcon />
        </a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <SectionLabel>PERSONAL PORTFOLIO / 2026</SectionLabel>
            <p className="hero-eyebrow">Hello, I&apos;m Parth</p>
            <h1>
              Building thoughtful
              <br />
              <span>web experiences.</span>
            </h1>
            <p className="hero-description">
              Computer Science Engineering student and aspiring Frontend &amp;
              React Developer. I enjoy turning ideas into responsive web
              experiences with code, curiosity, and a little help from AI.
            </p>
            <div className="hero-actions">
              <a className="button button--accent" href="#projects">
                Explore my work <ArrowIcon />
              </a>
              <a className="button button--quiet" href="#contact">
                Get in touch
              </a>
            </div>
          </div>

          <aside className="profile-card" aria-label="Profile summary">
            <div className="profile-card__top">
              <span className="panel-kicker">PROFILE OVERVIEW</span>
              <span className="profile-indicator" aria-label="Portfolio profile">
                <span />
              </span>
            </div>
            <div className="profile-identity">
              <div className="avatar" aria-label="Parth Sukhwal initials">
                PS
              </div>
              <div>
                <h2>Parth Sukhwal</h2>
                <p>Frontend &amp; React Developer</p>
              </div>
            </div>
            <div className="profile-divider" />
            <dl className="profile-details">
              <div>
                <dt>Currently</dt>
                <dd>3rd year · 5th semester</dd>
              </div>
              <div>
                <dt>Studying</dt>
                <dd>Computer Science Engineering</dd>
              </div>
              <div>
                <dt>Based in</dt>
                <dd>Udaipur, India</dd>
              </div>
              <div>
                <dt>Expected graduation</dt>
                <dd>July 2027</dd>
              </div>
            </dl>
            <div className="profile-card__footer">
              <span className="footer-spark">+</span>
              Curious about technology, AI &amp; fitness
            </div>
          </aside>
        </section>

        <section className="overview-grid section-wrap" aria-label="Portfolio highlights">
          <article className="overview-card">
            <span className="overview-card__label">CURRENT FOCUS</span>
            <span className="overview-card__value">Frontend development</span>
            <span className="overview-card__note">React · JavaScript · UI</span>
          </article>
          <article className="overview-card">
            <span className="overview-card__label">LEARNING</span>
            <span className="overview-card__value">Building with AI</span>
            <span className="overview-card__note">Exploring useful workflows</span>
          </article>
          <article className="overview-card">
            <span className="overview-card__label">BEYOND CODE</span>
            <span className="overview-card__value">Fitness &amp; Judo</span>
            <span className="overview-card__note">Sport, discipline &amp; growth</span>
          </article>
          <article className="overview-card overview-card--accent">
            <span className="overview-card__label">FEATURED WORK</span>
            <span className="overview-card__value">Personal projects</span>
            <a href="#projects" className="overview-card__link">
              View projects <ArrowIcon />
            </a>
          </article>
        </section>

        <section className="content-section section-wrap" id="about">
          <div className="section-heading">
            <div>
              <SectionLabel>A LITTLE ABOUT ME</SectionLabel>
              <h2>Learning by making.</h2>
            </div>
            <span className="heading-index">01 / ABOUT</span>
          </div>
          <div className="about-panel dashboard-panel">
            <div className="about-panel__intro">
              <span className="about-monogram">P.</span>
              <p>
                I&apos;m a Computer Science Engineering student and aspiring
                Frontend &amp; React Developer. I like taking an idea and
                shaping it into a responsive, easy-to-use web experience.
              </p>
            </div>
            <div className="about-panel__body">
              <p>
                I work with React, JavaScript, HTML, CSS, and Tailwind CSS, and
                use tools like ChatGPT, GitHub Copilot, and Gemini to learn,
                debug, and improve my development workflow.
              </p>
              <p>
                Right now, I&apos;m exploring the intersection of technology,
                AI, and fitness through personal projects. I&apos;m always
                looking for the next thing to learn and build.
              </p>
            </div>
            <div className="about-panel__footer">
              <span>BASED IN UDAIPUR, INDIA</span>
              <span>EXPLORING NEW IDEAS</span>
            </div>
          </div>
        </section>

        <section className="content-section section-wrap" id="projects">
          <div className="section-heading">
            <div>
              <SectionLabel>SELECTED WORK</SectionLabel>
              <h2>Projects in progress.</h2>
            </div>
            <span className="heading-index">02 / PROJECTS</span>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card dashboard-panel" key={project.number}>
                <div className="project-card__header">
                  <span className="project-number">{project.number}</span>
                  <span className="project-status">
                    <span />
                    {project.status}
                  </span>
                </div>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-focus">{project.focus}</p>
                <div className="project-tags" aria-label="Technologies">
                  {project.technologies.map((technology) => (
                    <span className="tag" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
                {project.aiTools.length > 0 && (
                  <p className="project-ai">
                    <span>AI-ASSISTED</span> {project.aiTools.join(' · ')}
                  </p>
                )}
                <div className="project-card__footer">
                  <span>PERSONAL PROJECT</span>
                  <span className="project-link-muted">Links coming later</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section section-wrap" id="skills">
          <div className="section-heading">
            <div>
              <SectionLabel>TOOLS OF THE TRADE</SectionLabel>
              <h2>Skills &amp; toolkit.</h2>
            </div>
            <span className="heading-index">03 / SKILLS</span>
          </div>
          <div className="skills-grid">
            <article className="skills-panel dashboard-panel">
              <div className="skills-panel__heading">
                <span className="skills-icon skills-icon--orange">01</span>
                <div>
                  <h3>Web development</h3>
                  <p>Technologies I&apos;m learning and building with</p>
                </div>
              </div>
              <div className="skill-list">
                {webSkills.map((skill) => (
                  <span className="skill-chip" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
            <article className="skills-panel dashboard-panel">
              <div className="skills-panel__heading">
                <span className="skills-icon skills-icon--purple">02</span>
                <div>
                  <h3>AI-assisted workflow</h3>
                  <p>Tools I use to learn, debug, and explore ideas</p>
                </div>
              </div>
              <div className="skill-list">
                {aiTools.map((tool) => (
                  <span className="skill-chip" key={tool}>
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="content-section section-wrap" id="education">
          <div className="section-heading">
            <div>
              <SectionLabel>THE FOUNDATION</SectionLabel>
              <h2>Education &amp; recognition.</h2>
            </div>
            <span className="heading-index">04 / JOURNEY</span>
          </div>
          <div className="education-grid">
            <article className="education-card dashboard-panel">
              <span className="education-date">EXPECTED JULY 2027</span>
              <h3>Diploma in Computer Science Engineering</h3>
              <p className="education-school">
                Vidya Bhawan Polytechnic College
              </p>
              <p className="education-location">Udaipur, Rajasthan, India</p>
              <span className="education-current">3rd Year · 5th Semester</span>
            </article>
            <article className="awards-card dashboard-panel">
              <div className="awards-card__heading">
                <span className="award-star">+</span>
                <div>
                  <span className="panel-kicker">PERSONAL ACHIEVEMENTS</span>
                  <h3>Discipline beyond the desk.</h3>
                </div>
              </div>
              <ul className="award-list">
                <li>
                  <span>01</span>
                  <p>District Silver Medal — Judo</p>
                </li>
                <li>
                  <span>02</span>
                  <p>Best Player Award — 1st Year</p>
                </li>
                <li>
                  <span>03</span>
                  <p>Best Player Award — 2nd Year</p>
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-panel dashboard-panel">
            <div className="contact-copy">
              <SectionLabel>LET&apos;S CONNECT</SectionLabel>
              <h2>Have an idea?<br />Let&apos;s talk.</h2>
              <p>
                I&apos;m always happy to connect with people who enjoy building,
                learning, and exploring new ideas.
              </p>
            </div>
            <div className="contact-links">
              <a className="contact-link" href="mailto:parthsukhwal6@gmail.com">
                <span className="contact-link__label">EMAIL</span>
                <span className="contact-link__value">
                  parthsukhwal6@gmail.com <ArrowIcon />
                </span>
              </a>
              <a
                className="contact-link"
                href="https://www.instagram.com/parthhsukhwall?stkn=cmVmN2Qzc2szeXdw"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-link__label">INSTAGRAM</span>
                <span className="contact-link__value">
                  @parthhsukhwall <ExternalIcon />
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand brand--footer" href="#home">
          <span className="brand-mark">PS</span>
          <span className="brand-name">PARTH SUKHWAL</span>
        </a>
        <p>Designed around curiosity. Built with React.</p>
        <a className="back-to-top" href="#home">
          BACK TO TOP ↑
        </a>
      </footer>
    </div>
  )
}

export default App
