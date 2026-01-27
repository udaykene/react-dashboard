import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";
import "./AdminAppointments.css";

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      clientName: "John Doe",
      project: "Residential Complex A",
      date: "2026-02-05",
      time: "10:00 AM",
      status: "confirmed",
      type: "Site Visit",
    },
    {
      id: 2,
      clientName: "Jane Smith",
      project: "Commercial Plaza",
      date: "2026-02-08",
      time: "2:00 PM",
      status: "pending",
      type: "Consultation",
    },
    {
      id: 3,
      clientName: "Mike Johnson",
      project: "Villa Construction",
      date: "2026-02-10",
      time: "11:30 AM",
      status: "confirmed",
      type: "Progress Review",
    },
    {
      id: 4,
      clientName: "Sarah Williams",
      project: "Office Building",
      date: "2026-02-12",
      time: "3:00 PM",
      status: "cancelled",
      type: "Site Visit",
    },
  ]);

  const [filterStatus, setFilterStatus] = useState("all");

  const getStatusClass = (status) => {
    switch (status) {
      case "confirmed":
        return "status-confirmed";
      case "pending":
        return "status-pending";
      case "cancelled":
        return "status-cancelled";
      default:
        return "";
    }
  };

  const filteredAppointments =
    filterStatus === "all"
      ? appointments
      : appointments.filter((apt) => apt.status === filterStatus);

  const handleStatusChange = (id, newStatus) => {
    setAppointments((prev) =>
      prev.map((apt) => (apt.id === id ? { ...apt, status: newStatus } : apt))
    );
  };

  return (
    <AdminLayout>
      <div className="admin-appointments">
        <div className="appointments-header">
          <div>
            <h1>Appointments</h1>
            <p>Manage and track all client appointments</p>
          </div>
          <button className="btn-primary">
            <i className="ri-calendar-event-line"></i>
            New Appointment
          </button>
        </div>

        <div className="appointments-filters">
          <div className="filter-group">
            <button
              className={`filter-btn ${filterStatus === "all" ? "active" : ""}`}
              onClick={() => setFilterStatus("all")}
            >
              All ({appointments.length})
            </button>
            <button
              className={`filter-btn ${filterStatus === "confirmed" ? "active" : ""}`}
              onClick={() => setFilterStatus("confirmed")}
            >
              Confirmed (
              {appointments.filter((a) => a.status === "confirmed").length})
            </button>
            <button
              className={`filter-btn ${filterStatus === "pending" ? "active" : ""}`}
              onClick={() => setFilterStatus("pending")}
            >
              Pending (
              {appointments.filter((a) => a.status === "pending").length})
            </button>
            <button
              className={`filter-btn ${filterStatus === "cancelled" ? "active" : ""}`}
              onClick={() => setFilterStatus("cancelled")}
            >
              Cancelled (
              {appointments.filter((a) => a.status === "cancelled").length})
            </button>
          </div>

          <div className="search-box">
            <i className="ri-search-line"></i>
            <input type="text" placeholder="Search appointments..." />
          </div>
        </div>

        <div className="appointments-list">
          {filteredAppointments.length === 0 ? (
            <div className="empty-state">
              <i className="ri-calendar-line"></i>
              <h3>No appointments found</h3>
              <p>There are no {filterStatus} appointments at the moment.</p>
            </div>
          ) : (
            filteredAppointments.map((appointment) => (
              <div key={appointment.id} className="appointment-card">
                <div className="appointment-info">
                  <div className="appointment-icon">
                    <i className="ri-user-line"></i>
                  </div>
                  <div className="appointment-details">
                    <h3>{appointment.clientName}</h3>
                    <p className="project-name">
                      <i className="ri-building-line"></i>
                      {appointment.project}
                    </p>
                    <div className="appointment-meta">
                      <span>
                        <i className="ri-calendar-line"></i>
                        {appointment.date}
                      </span>
                      <span>
                        <i className="ri-time-line"></i>
                        {appointment.time}
                      </span>
                      <span className="appointment-type">
                        <i className="ri-map-pin-line"></i>
                        {appointment.type}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="appointment-actions">
                  <span className={`status-badge ${getStatusClass(appointment.status)}`}>
                    {appointment.status.charAt(0).toUpperCase() +
                      appointment.status.slice(1)}
                  </span>
                  <div className="action-buttons">
                    {appointment.status === "pending" && (
                      <>
                        <button
                          className="btn-action btn-confirm"
                          onClick={() =>
                            handleStatusChange(appointment.id, "confirmed")
                          }
                        >
                          <i className="ri-check-line"></i>
                        </button>
                        <button
                          className="btn-action btn-cancel"
                          onClick={() =>
                            handleStatusChange(appointment.id, "cancelled")
                          }
                        >
                          <i className="ri-close-line"></i>
                        </button>
                      </>
                    )}
                    <button className="btn-action btn-view">
                      <i className="ri-eye-line"></i>
                    </button>
                    <button className="btn-action btn-edit">
                      <i className="ri-edit-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminAppointments;