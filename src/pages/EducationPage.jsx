import { Layout, SectionLabel } from '../components/Layout'

function EducationPage() {
  return (
    <Layout>
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
            <p className="education-school">Vidya Bhawan Polytechnic College</p>
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
    </Layout>
  )
}

export default EducationPage
