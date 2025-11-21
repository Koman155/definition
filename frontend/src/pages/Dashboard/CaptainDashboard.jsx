import { useContext } from 'react'
import { UserContext } from '../../context/UserProvider'
import ProtectedRoute from '../../components/ProtectedRoute'
import PageLayout from '../../components/PageLayout'

const CaptainDashboard = () => {
  const { user } = useContext(UserContext)

  return (
    <ProtectedRoute allowedRoles={['captain']}>
      <PageLayout>
        <section className="section-block">
          <p className="pill pill--success">Captain's Bridge</p>
          <h1 className="section-title">Anchors aweigh, {user?.name}</h1>
          <p className="section-subtitle">Navigate vessels, crew, and cargo with calm, data-rich context.</p>

          <div className="dashboard-grid">
            {[
              { label: 'Vessels Assigned', value: '2' },
              { label: 'Containers', value: '1,248' },
              { label: 'Port Calls', value: '6' },
            ].map((stat) => (
              <div key={stat.label} className="dashboard-card">
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>

          <div className="card section-block">
            <h2>Ship assignments</h2>
            <p>Monitor sea conditions, crew checklists, and cargo compliance in one feed.</p>
          </div>
        </section>
      </PageLayout>
    </ProtectedRoute>
  )
}

export default CaptainDashboard


