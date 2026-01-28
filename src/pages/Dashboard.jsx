import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h1 className="dashboard-title">Dashboard</h1>
        
        <div className="dashboard-grid">
          <div className="dashboard-card card-primary">
            <div className="card-icon">
              <span>📊</span>
            </div>
            <div className="card-content">
              <h3 className="card-number">1,234</h3>
              <p className="card-label">Total Views</p>
            </div>
          </div>
          
          <div className="dashboard-card card-success">
            <div className="card-icon">
              <span>✓</span>
            </div>
            <div className="card-content">
              <h3 className="card-number">89</h3>
              <p className="card-label">Completed Tasks</p>
            </div>
          </div>
          
          <div className="dashboard-card card-warning">
            <div className="card-icon">
              <span>⏰</span>
            </div>
            <div className="card-content">
              <h3 className="card-number">12</h3>
              <p className="card-label">Pending</p>
            </div>
          </div>
          
          <div className="dashboard-card card-info">
            <div className="card-icon">
              <span>💰</span>
            </div>
            <div className="card-content">
              <h3 className="card-number">$24,567</h3>
              <p className="card-label">Revenue</p>
            </div>
          </div>
        </div>
        
        <div className="activity-section">
          <h2 className="section-title">Recent Activity</h2>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-dot"></div>
              <div className="activity-content">
                <p className="activity-text">New appointment scheduled</p>
                <span className="activity-time">2 hours ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-dot"></div>
              <div className="activity-content">
                <p className="activity-text">Profile updated successfully</p>
                <span className="activity-time">5 hours ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-dot"></div>
              <div className="activity-content">
                <p className="activity-text">Payment processed</p>
                <span className="activity-time">1 day ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-dot"></div>
              <div className="activity-content">
                <p className="activity-text">New message received</p>
                <span className="activity-time">2 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
