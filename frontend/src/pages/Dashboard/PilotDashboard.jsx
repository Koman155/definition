import { useContext } from 'react'
import { UserContext } from '../../context/UserProvider'
import ProtectedRoute from '../../components/ProtectedRoute'
import PageLayout from '../../components/PageLayout'

const PilotDashboard = () => {
  const { user } = useContext(UserContext)

  return (
    <ProtectedRoute allowedRoles={['pilot']}>
      <PageLayout>
        <section className="section-block">
          <p className="pill pill--success">Pilot Deck</p>
          <h1 className="section-title">Clear skies, {user?.name}</h1>
          <p className="section-subtitle">Visualize manifests, crew, and weather intel before every takeoff.</p>

          <div className="dashboard-grid">
            {[
              { label: 'Flights Today', value: '4' },
              { label: 'Cargo Weight', value: '12.4t' },
              { label: 'Fuel Status', value: 'Full' },
            ].map((stat) => (
              <div key={stat.label} className="dashboard-card">
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>

          <div className="card section-block">
            <h2>Flight assignments</h2>
            <p>Coordinate with ground, capture flight logs, and keep customers informed mid-air.</p>
          </div>
        </section>
      </PageLayout>
    </ProtectedRoute>
  )
}

export default PilotDashboard


