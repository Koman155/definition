import { useContext } from 'react'
import { UserContext } from '../../context/UserProvider'
import ProtectedRoute from '../../components/ProtectedRoute'
import PageLayout from '../../components/PageLayout'

const ClientDashboard = () => {
  const { user } = useContext(UserContext)

  return (
    <ProtectedRoute allowedRoles={['client']}>
      <PageLayout>
        <section className="section-block">
          <p className="pill pill--success">Client HQ</p>
          <h1 className="section-title">Hi {user?.name}, here’s your logistics pulse</h1>
          <p className="section-subtitle">Stay informed on every shipment, payment, and rating.</p>

          <div className="dashboard-grid">
            {[
              { label: 'Active Shipments', value: '6' },
              { label: 'Awaiting Payment', value: '2' },
              { label: 'Average Rating', value: '4.9' },
            ].map((stat) => (
              <div key={stat.label} className="dashboard-card">
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>

          <div className="card section-block">
            <h2>Your shipments</h2>
            <p>Manage bookings, upload documents, and chat with support directly from this view.</p>
          </div>
        </section>
      </PageLayout>
    </ProtectedRoute>
  )
}

export default ClientDashboard


