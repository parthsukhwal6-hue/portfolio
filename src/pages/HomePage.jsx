import { Link } from 'react-router-dom'
import { ArrowIcon, Layout } from '../components/Layout'

function HomePage() {
  return (
    <Layout>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <p className="section-label">
            <span className="section-label__dot" />
            PERSONAL PORTFOLIO / 2026
          </p>
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
            <Link className="button button--accent" to="/projects">
              Explore my work <ArrowIcon />
            </Link>
            <Link className="button button--quiet" to="/contact">
              Get in touch
            </Link>
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
          <Link to="/projects" className="overview-card__link">
            View projects <ArrowIcon />
          </Link>
        </article>
      </section>
    </Layout>
  )
}

export default HomePage
