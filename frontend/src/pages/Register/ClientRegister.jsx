import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { authApi } from '../../api/authApi'
import PageLayout from '../../components/PageLayout'

const ClientRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
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
      await authApi.clientRegister(formData)
      navigate('/login/client')
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
          <h2>Create your client account</h2>
          <p>Book shipments, make payments, and rate deliveries.</p>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="client-name">Full name</label>
              <input
                id="client-name"
                className="input-field"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="client-email">Email</label>
              <input
                id="client-email"
                className="input-field"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="client-phone">Phone</label>
              <input
                id="client-phone"
                className="input-field"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="client-password">Password</label>
              <input
                id="client-password"
                className="input-field"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="client-confirm-password">Confirm password</label>
              <input
                id="client-confirm-password"
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
            Already have an account? <Link to="/login/client">Login here</Link>
          </p>
        </div>
      </section>
    </PageLayout>
  )
}

export default ClientRegister


