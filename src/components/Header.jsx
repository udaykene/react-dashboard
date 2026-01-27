import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()

  const handleLogout = () => {
    // In a real app, you'd clear auth tokens here
    navigate('/')
  }

  return (
    <header className="header">
      <div className="header-logo">
        <span className="logo-icon">▼</span>
        <span>GreatBuilders</span>
      </div>
      <div className="header-actions">
        <Link to="/login" className="btn btn-text">
          Login
        </Link>
        <Link to="/admin/dashboard" className="btn btn-text">
          Dashboard
        </Link>
        <Link to="/admin/profile" className="btn btn-outline">
          Profile ▼
        </Link>
        <button onClick={handleLogout} className="btn btn-danger">
          Logout
        </button>
      </div>
    </header>
  )
}

export default Header
