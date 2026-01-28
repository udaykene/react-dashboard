import React from "react";
import "./Dashboard.css";

function Appointments() {
  const appointments = [
    {
      id: 1,
      title: "Marketing Consultation",
      date: "Jan 28, 2026",
      time: "10:00 AM",
      status: "confirmed",
      client: "Sarah Johnson"
    },
    {
      id: 2,
      title: "Design Review",
      date: "Jan 30, 2026",
      time: "2:00 PM",
      status: "pending",
      client: "Mike Peters"
    },
    {
      id: 3,
      title: "Development Meeting",
      date: "Feb 2, 2026",
      time: "11:30 AM",
      status: "confirmed",
      client: "Emily Davis"
    },
    {
      id: 4,
      title: "Product Demo",
      date: "Feb 5, 2026",
      time: "3:00 PM",
      status: "pending",
      client: "Robert Brown"
    }
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="appointments-header">
          <h1 className="dashboard-title">Appointments</h1>
          <button className="btn-primary">New Appointment</button>
        </div>
        
        <div className="appointments-filter">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Upcoming</button>
          <button className="filter-btn">Completed</button>
          <button className="filter-btn">Cancelled</button>
        </div>
        
        <div className="appointments-list">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="appointment-card">
              <div className="appointment-header">
                <h3 className="appointment-title">{appointment.title}</h3>
                <span className={`status-badge ${appointment.status}`}>
                  {appointment.status}
                </span>
              </div>
              <div className="appointment-details">
                <div className="detail-item">
                  <span className="detail-icon">📅</span>
                  <span className="detail-text">{appointment.date}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">🕐</span>
                  <span className="detail-text">{appointment.time}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">👤</span>
                  <span className="detail-text">{appointment.client}</span>
                </div>
              </div>
              <div className="appointment-actions">
                <button className="action-btn btn-edit">Edit</button>
                <button className="action-btn btn-cancel">Cancel</button>
                <button className="action-btn btn-view">View Details</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="appointments-summary">
          <div className="summary-card">
            <h4 className="summary-title">This Week</h4>
            <p className="summary-number">2</p>
            <p className="summary-label">appointments</p>
          </div>
          <div className="summary-card">
            <h4 className="summary-title">This Month</h4>
            <p className="summary-number">8</p>
            <p className="summary-label">appointments</p>
          </div>
          <div className="summary-card">
            <h4 className="summary-title">Total</h4>
            <p className="summary-number">24</p>
            <p className="summary-label">appointments</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointments;
