import { Layout, SectionLabel } from '../components/Layout'

function AboutPage() {
  return (
    <Layout>
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
              Frontend &amp; React Developer. I like taking an idea and shaping
              it into a responsive, easy-to-use web experience.
            </p>
          </div>
          <div className="about-panel__body">
            <p>
              I work with React, JavaScript, HTML, CSS, and Tailwind CSS, and use
              tools like ChatGPT, GitHub Copilot, and Gemini to learn, debug, and
              improve my development workflow.
            </p>
            <p>
              Right now, I&apos;m exploring the intersection of technology, AI,
              and fitness through personal projects. I&apos;m always looking for the
              next thing to learn and build.
            </p>
          </div>
          <div className="about-panel__footer">
            <span>BASED IN UDAIPUR, INDIA</span>
            <span>EXPLORING NEW IDEAS</span>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage
