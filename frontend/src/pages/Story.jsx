import PageLayout from '../components/PageLayout'

const Story = () => {
  return (
    <PageLayout>
      <section className="section-block">
        <p className="pill pill--pending">Our Heritage</p>
        <h1 className="section-title">The legend of General Karasamyambi</h1>
        <article className="card story-body">
          <p>
            Born with the spirit of exploration, General Karasamyambi charted equitable trade routes across the
            continent long before GPS and satellite links. His obsession with timeliness, fairness, and people-first
            service transformed a modest fleet into a mission that outlived him.
          </p>
          <p>
            Today, we carry that flame forward with sophisticated tools, ethical leadership, and relentless innovation.
            Every pixel and process in this platform honors his belief that logistics can be humane, transparent, and
            awe-inspiring.
          </p>
        </article>
      </section>
    </PageLayout>
  )
}

export default Story



