function Profile() {
  return (
    <div className="profile-container">
      <h1>Admin Profile</h1>
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">JD</div>
          <div className="profile-info">
            <h2>Parth Chavan</h2>
            <p>Administrator</p>
            <p>parthchavan@greatbuilders.com</p>
          </div>
        </div>
        <div className="profile-details">
          <div className="detail-row">
            <span className="detail-label">Full Name:</span>
            <span className="detail-value">Parth Chavan</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Email:</span>
            <span className="detail-value">parthchavan@greatbuilders.com</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Role:</span>
            <span className="detail-value">Administrator</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Phone:</span>
            <span className="detail-value">+91 8433669535</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Department:</span>
            <span className="detail-value">Management</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Joined:</span>
            <span className="detail-value">January 15, 2024</span>
          </div>
        </div>
        <button className="btn btn-primary" style={{ marginTop: '2rem' }}>
          Edit Profile
        </button>
      </div>
    </div>
  )
}

export default Profile
