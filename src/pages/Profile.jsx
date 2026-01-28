import React from "react";
import "./Dashboard.css";

function Profile() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h1 className="dashboard-title">Profile</h1>
        
        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-avatar">
              <span className="avatar-placeholder">JD</span>
            </div>
            <div className="profile-info">
              <h2 className="profile-name">John Doe</h2>
              <p className="profile-email">john.doe@example.com</p>
            </div>
          </div>
          
          <div className="profile-details">
            <div className="detail-row">
              <span className="detail-label">Phone:</span>
              <span className="detail-value">+1 (555) 123-4567</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Location:</span>
              <span className="detail-value">New York, NY</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Member Since:</span>
              <span className="detail-value">January 2024</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Role:</span>
              <span className="detail-value">Premium Member</span>
            </div>
          </div>
          
          <div className="profile-actions">
            <button className="btn-primary">Edit Profile</button>
            <button className="btn-secondary">Change Password</button>
          </div>
        </div>
        
        <div className="profile-stats">
          <div className="stat-card">
            <h3 className="stat-number">24</h3>
            <p className="stat-label">Total Appointments</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">18</h3>
            <p className="stat-label">Completed</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">3</h3>
            <p className="stat-label">Upcoming</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">3</h3>
            <p className="stat-label">Cancelled</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
