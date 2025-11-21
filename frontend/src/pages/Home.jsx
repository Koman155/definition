import HeroSection from '../components/HeroSection'
import PageLayout from '../components/PageLayout'

const Home = () => {
  return (
    <PageLayout>
      <HeroSection />
      <section className="section-block">
        <div className="section-lead">
          <h2 className="section-title">Logistics without the chaos</h2>
          <p className="section-subtitle">
            From intercontinental freight to last-mile delivery, orchestrate every movement with clarity and calm.
          </p>
        </div>
        <div className="card-grid">
          {[
            {
              title: 'Unified Tracking',
              detail: 'Live shipment telemetry and predictive ETAs keep teams aligned.',
            },
            {
              title: 'Payment Visibility',
              detail: 'Instant proof-of-payment and automated reconciliation.',
            },
            {
              title: 'Customer Delight',
              detail: 'Ratings, comments, and proactive alerts from a single hub.',
            },
          ].map((service) => (
            <article key={service.title} className="card">
              <h3>{service.title}</h3>
              <p>{service.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block two-column">
        <div>
          <p className="pill pill--pending">Why Karasamyambi?</p>
          <h2 className="section-title">Designed for ambitious logistics teams.</h2>
          <p className="section-subtitle">
            Built in Africa for the world, we merge modern UX with enterprise-grade reliability to keep your cargo
            flowing and your teams informed.
          </p>
        </div>
        <div className="card">
          <h3>Trusted across air, land, and sea.</h3>
          <ul className="bullet-list">
            <li>Predictive exceptions and automated escalations</li>
            <li>Role-aware dashboards for every stakeholder</li>
            <li>Secure document vault and payment proofs</li>
          </ul>
        </div>
      </section>
    </PageLayout>
  )
}

export default Home



