import { useContext } from 'react'
import { UserContext } from '../../context/UserProvider'
import ProtectedRoute from '../../components/ProtectedRoute'
import PageLayout from '../../components/PageLayout'

const AdminDashboard = () => {
  const { user } = useContext(UserContext)

  return (
    <ProtectedRoute allowedRoles={['admin']}>
      <PageLayout>
        <section className="section-block">
          <p className="pill pill--success">Admin Control Center</p>
          <h1 className="section-title">Welcome back, {user?.name}</h1>
          <p className="section-subtitle">Command the entire logistics network from one serene workspace.</p>

          <div className="dashboard-grid">
            {[
              { label: 'Active Shipments', value: '248' },
              { label: 'Pending Approvals', value: '12' },
              { label: 'Payments Today', value: '$86k' },
            ].map((stat) => (
              <div key={stat.label} className="dashboard-card">
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>

          <div className="card section-block">
            <h2>Admin controls</h2>
            <p>
              Manage roles, approve payments, review escalations, and broadcast updates. Your actions ripple across the
              entire Karasamyambi ecosystem.
            </p>
          </div>
        </section>
      </PageLayout>
    </ProtectedRoute>
  )
}

export default AdminDashboard


