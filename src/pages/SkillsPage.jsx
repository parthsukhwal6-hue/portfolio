import { Layout, SectionLabel } from '../components/Layout'
import { aiTools, webSkills } from '../data/portfolioData'

function SkillsPage() {
  return (
    <Layout>
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
    </Layout>
  )
}

export default SkillsPage
