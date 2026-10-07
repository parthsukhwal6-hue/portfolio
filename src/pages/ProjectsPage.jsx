import { Layout, SectionLabel } from '../components/Layout'
import { projects } from '../data/portfolioData'

function ProjectsPage() {
  return (
    <Layout>
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
    </Layout>
  )
}

export default ProjectsPage
