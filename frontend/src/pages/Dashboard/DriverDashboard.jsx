import { useContext } from 'react'
import { UserContext } from '../../context/UserProvider'
import ProtectedRoute from '../../components/ProtectedRoute'
import PageLayout from '../../components/PageLayout'

const DriverDashboard = () => {
  const { user } = useContext(UserContext)

  return (
    <ProtectedRoute allowedRoles={['driver']}>
      <PageLayout>
        <section className="section-block">
          <p className="pill pill--success">Driver Console</p>
          <h1 className="section-title">Ready for the road, {user?.name}</h1>
          <p className="section-subtitle">Get a clean view of your manifest and next-best actions.</p>

          <div className="dashboard-grid">
            {[
              { label: 'Drops Today', value: '14' },
              { label: 'Distance', value: '320 km' },
              { label: 'On-time Rate', value: '98%' },
            ].map((stat) => (
              <div key={stat.label} className="dashboard-card">
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>

          <div className="card section-block">
            <h2>Your deliveries</h2>
            <p>Confirm pickups, update statuses, and capture proof-of-delivery without friction.</p>
          </div>
        </section>
      </PageLayout>
    </ProtectedRoute>
  )
}

export default DriverDashboard


