import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { authApi } from '../../api/authApi'
import PageLayout from '../../components/PageLayout'

const StaffRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    role: 'employee'
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }
    setLoading(true)
    setError('')
    try {
      await authApi.staffRegister(formData)
      navigate('/login/staff')
    } catch (error) {
      setError(error.response?.data?.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageLayout variant="muted">
      <section className="auth-section">
        <div className="form-card auth-card">
          <h2>Join the operations team</h2>
          <p>Managers, drivers, pilots, captains, and employees start here.</p>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="staff-name">Full name</label>
              <input
                id="staff-name"
                className="input-field"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="staff-email">Email</label>
              <input
                id="staff-email"
                className="input-field"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="staff-phone">Phone</label>
              <input
                id="staff-phone"
                className="input-field"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="staff-role">Role</label>
              <select
                id="staff-role"
                className="input-field"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              >
                <option value="employee">Employee</option>
                <option value="manager">Manager</option>
                <option value="driver">Driver</option>
                <option value="pilot">Pilot</option>
                <option value="captain">Captain</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="staff-password">Password</label>
              <input
                id="staff-password"
                className="input-field"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="staff-confirm-password">Confirm password</label>
              <input
                id="staff-confirm-password"
                className="input-field"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
              {loading ? 'Registering...' : 'Register'}
            </button>
          </form>
          <p className="auth-meta">
            Already have an account? <Link to="/login/staff">Login here</Link>
          </p>
        </div>
      </section>
    </PageLayout>
  )
}

export default StaffRegister


