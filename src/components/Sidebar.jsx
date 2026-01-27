import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>GreatBuilders</h2>
        <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Admin Panel</p>
      </div>
      <nav>
        <ul className="sidebar-menu">
          <li>
            <NavLink to="/admin/profile" className={({ isActive }) => isActive ? 'active' : ''}>
              👤 Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>
              📊 Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/appointments" className={({ isActive }) => isActive ? 'active' : ''}>
              📅 Appointments
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
