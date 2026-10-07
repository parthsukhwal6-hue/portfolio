import { ArrowIcon, ExternalIcon, Layout, SectionLabel } from '../components/Layout'

function ContactPage() {
  return (
    <Layout>
      <section className="contact-section section-wrap" id="contact">
        <div className="contact-panel dashboard-panel">
          <div className="contact-copy">
            <SectionLabel>LET&apos;S CONNECT</SectionLabel>
            <h2>
              Have an idea?
              <br />
              Let&apos;s talk.
            </h2>
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
            <a className="contact-link" href="tel:+919876543210">
              <span className="contact-link__label">PHONE</span>
              <span className="contact-link__value">
                +91 98765 43210 <ArrowIcon />
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
    </Layout>
  )
}

export default ContactPage
