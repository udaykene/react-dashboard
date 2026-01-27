function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Dashboard Overview</h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Welcome back, John! Here's what's happening with your business today.
      </p>
      
      <div className="dashboard-cards">
        <div className="dashboard-card card-users">
          <div className="card-icon">👥</div>
          <div className="card-title">Total Users</div>
          <div className="card-value">1,247</div>
        </div>
        
        <div className="dashboard-card card-appointments">
          <div className="card-icon">📅</div>
          <div className="card-title">Total Appointments</div>
          <div className="card-value">342</div>
        </div>
        
        <div className="dashboard-card card-revenue">
          <div className="card-icon">💰</div>
          <div className="card-title">Revenue</div>
          <div className="card-value">$45,230</div>
        </div>
      </div>

      <div className="profile-card">
        <h2 style={{ marginBottom: '1rem' }}>Recent Activity</h2>
        <div className="detail-row">
          <span className="detail-label">Last Login:</span>
          <span className="detail-value">Today at 10:30 AM</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Active Sessions:</span>
          <span className="detail-value">2 devices</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Pending Tasks:</span>
          <span className="detail-value">8 items</span>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
