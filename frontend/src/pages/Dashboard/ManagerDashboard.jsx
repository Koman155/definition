import { useContext } from 'react'
import { UserContext } from '../../context/UserProvider'
import ProtectedRoute from '../../components/ProtectedRoute'
import PageLayout from '../../components/PageLayout'

const ManagerDashboard = () => {
  const { user } = useContext(UserContext)

  return (
    <ProtectedRoute allowedRoles={['manager']}>
      <PageLayout>
        <section className="section-block">
          <p className="pill pill--success">Operations Lead</p>
          <h1 className="section-title">Welcome, {user?.name}</h1>
          <p className="section-subtitle">Keep teams synchronized and every shipment moving smoothly.</p>

          <div className="dashboard-grid">
            {[
              { label: 'Team Members', value: '42' },
              { label: 'Routes Today', value: '68' },
              { label: 'Escalations', value: '3' },
            ].map((stat) => (
              <div key={stat.label} className="dashboard-card">
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>

          <div className="card section-block">
            <h2>Management tools</h2>
            <p>Assign staff, optimize routes, and line up resources before demand spikes.</p>
          </div>
        </section>
      </PageLayout>
    </ProtectedRoute>
  )
}

export default ManagerDashboard


