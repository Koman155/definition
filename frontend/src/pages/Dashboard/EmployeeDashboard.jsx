import { useContext } from 'react'
import { UserContext } from '../../context/UserProvider'
import ProtectedRoute from '../../components/ProtectedRoute'
import PageLayout from '../../components/PageLayout'

const EmployeeDashboard = () => {
  const { user } = useContext(UserContext)

  return (
    <ProtectedRoute allowedRoles={['employee']}>
      <PageLayout>
        <section className="section-block">
          <p className="pill pill--success">Mission Control</p>
          <h1 className="section-title">Hello, {user?.name}</h1>
          <p className="section-subtitle">Everything you need to execute today’s plan with confidence.</p>

          <div className="dashboard-grid">
            {[
              { label: 'Tasks Assigned', value: '9' },
              { label: 'Due Today', value: '3' },
              { label: 'Completed', value: '24' },
            ].map((stat) => (
              <div key={stat.label} className="dashboard-card">
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>

          <div className="card section-block">
            <h2>Your tasks</h2>
            <p>Update statuses, collaborate with teammates, and log blockers effortlessly.</p>
          </div>
        </section>
      </PageLayout>
    </ProtectedRoute>
  )
}

export default EmployeeDashboard


