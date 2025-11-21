import { useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { authApi } from '../../api/authApi'
import { UserContext } from '../../context/UserProvider'
import PageLayout from '../../components/PageLayout'

const ClientLogin = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { login } = useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const response = await authApi.clientLogin(credentials)
      login(response.data.user, response.data.token)
      navigate('/dashboard/client')
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageLayout variant="muted">
      <section className="auth-section">
        <div className="form-card auth-card">
          <h2>Client Login</h2>
          <p>Access your shipments and payment history.</p>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="client-email">Email</label>
              <input
                id="client-email"
                className="input-field"
                type="email"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="client-password">Password</label>
              <input
                id="client-password"
                className="input-field"
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          <p className="auth-meta">
            Don't have an account? <Link to="/register/client">Register here</Link>
          </p>
        </div>
      </section>
    </PageLayout>
  )
}

export default ClientLogin


