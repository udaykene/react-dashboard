import React from "react";
import AdminLayout from "../components/AdminLayout";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const stats = [
    {
      title: "Total Projects",
      value: "24",
      icon: "ri-building-line",
      color: "#3b82f6",
      trend: "+12%",
    },
    {
      title: "Active Clients",
      value: "156",
      icon: "ri-user-line",
      color: "#10b981",
      trend: "+8%",
    },
    {
      title: "Appointments",
      value: "32",
      icon: "ri-calendar-line",
      color: "#f59e0b",
      trend: "+5%",
    },
    {
      title: "Revenue",
      value: "$125K",
      icon: "ri-money-dollar-circle-line",
      color: "#8b5cf6",
      trend: "+18%",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      action: "New project started",
      project: "Residential Complex A",
      time: "2 hours ago",
    },
    {
      id: 2,
      action: "Client meeting scheduled",
      project: "Commercial Plaza",
      time: "4 hours ago",
    },
    {
      id: 3,
      action: "Project completed",
      project: "Villa Construction",
      time: "1 day ago",
    },
    {
      id: 4,
      action: "New appointment request",
      project: "Office Building",
      time: "2 days ago",
    },
  ];

  return (
    <AdminLayout>
      <div className="admin-dashboard">
        <div className="dashboard-header">
          <div>
            <h1>Dashboard Overview</h1>
            <p>Welcome back! Here's what's happening today.</p>
          </div>
          <button className="btn-primary">
            <i className="ri-add-line"></i>
            New Project
          </button>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card"
              style={{ borderTopColor: stat.color }}
            >
              <div className="stat-icon" style={{ backgroundColor: stat.color }}>
                <i className={stat.icon}></i>
              </div>
              <div className="stat-details">
                <p className="stat-title">{stat.title}</p>
                <h3 className="stat-value">{stat.value}</h3>
                <span className="stat-trend positive">{stat.trend} from last month</span>
              </div>
            </div>
          ))}
        </div>

        <div className="dashboard-content">
          <div className="content-section">
            <div className="section-header">
              <h2>Recent Activities</h2>
              <button className="btn-text">View All</button>
            </div>
            <div className="activities-list">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-icon">
                    <i className="ri-arrow-right-line"></i>
                  </div>
                  <div className="activity-details">
                    <h4>{activity.action}</h4>
                    <p>{activity.project}</p>
                  </div>
                  <span className="activity-time">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="content-section">
            <div className="section-header">
              <h2>Quick Actions</h2>
            </div>
            <div className="quick-actions">
              <button className="action-card">
                <i className="ri-file-add-line"></i>
                <span>Create Report</span>
              </button>
              <button className="action-card">
                <i className="ri-user-add-line"></i>
                <span>Add Client</span>
              </button>
              <button className="action-card">
                <i className="ri-calendar-event-line"></i>
                <span>Schedule Meeting</span>
              </button>
              <button className="action-card">
                <i className="ri-mail-send-line"></i>
                <span>Send Update</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;