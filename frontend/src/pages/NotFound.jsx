import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'

const NotFound = () => {
  return (
    <PageLayout>
      <section className="not-found">
        <h1>404</h1>
        <h2 className="section-title">Lost in transit.</h2>
        <p>The page you’re looking for has taken a different route.</p>
        <Link to="/" className="btn btn-primary">
          Back to safety
        </Link>
      </section>
    </PageLayout>
  )
}

export default NotFound


