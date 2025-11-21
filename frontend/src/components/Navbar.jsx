import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import logo from '../assets/images/logo.png'

const Navbar = () => {
  const { user, logout } = useContext(UserContext)

  return (
    <header className="site-nav">
      <div className="nav-brand">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="Karasamyambi logo" />
          <div>
            <strong>Karasamyambi Logistics</strong>
            <span>Delivering excellence</span>
          </div>
        </Link>
      </div>
      <div className="nav-links">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/story">
          Story
        </Link>
        <Link className="nav-link" to="/tracking">
          Tracking
        </Link>
        <Link className="nav-link" to="/ratings">
          Ratings
        </Link>
      </div>
      <div className="nav-cta">
        {user ? (
          <>
            <Link className="btn btn-outline" to={`/dashboard/${user.role}`}>
              Dashboard
            </Link>
            <button className="btn btn-text" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="btn btn-outline" to="/login/client">
              Login
            </Link>
            <Link className="btn btn-primary" to="/register/client">
              Create account
            </Link>
          </>
        )}
      </div>
    </header>
  )
}

export default Navbar



