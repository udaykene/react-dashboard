import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";
import "./AdminAppointments.css";

const AdminClients = () => {
  const [clients] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      phone: "+91 9876543210",
      status: "active",
      location: "Mumbai Central",
    },
    {
      id: 2,
      name: "Anita Desai",
      email: "anita@gmail.com",
      phone: "+91 9123456780",
      status: "inactive",
      location: "Andheri West",
    },
    {
      id: 3,
      name: "Amit Verma",
      email: "amit@gmail.com",
      phone: "+91 9988776655",
      status: "active",
      location: "Bandra East",
    },
  ]);

  const [filterStatus, setFilterStatus] = useState("all");

  const getStatusClass = (status) => {
    switch (status) {
      case "active":
        return "status-confirmed";
      case "inactive":
        return "status-cancelled";
      default:
        return "";
    }
  };

  const filteredClients =
    filterStatus === "all"
      ? clients
      : clients.filter((client) => client.status === filterStatus);

  return (
    <AdminLayout>
      <div className="admin-appointments">
        <div className="appointments-header">
          <div>
            <h1>Clients</h1>
            <p>Manage and track all registered clients</p>
          </div>
          <button className="btn-primary">
            <i className="ri-user-add-line"></i>
            New Client
          </button>
        </div>

        <div className="appointments-filters">
          <div className="filter-group">
            <button
              className={`filter-btn ${filterStatus === "all" ? "active" : ""}`}
              onClick={() => setFilterStatus("all")}
            >
              All ({clients.length})
            </button>
            <button
              className={`filter-btn ${filterStatus === "active" ? "active" : ""}`}
              onClick={() => setFilterStatus("active")}
            >
              Active ({clients.filter((c) => c.status === "active").length})
            </button>
            <button
              className={`filter-btn ${filterStatus === "inactive" ? "active" : ""}`}
              onClick={() => setFilterStatus("inactive")}
            >
              Inactive ({clients.filter((c) => c.status === "inactive").length})
            </button>
          </div>

          <div className="search-box">
            <i className="ri-search-line"></i>
            <input type="text" placeholder="Search clients..." />
          </div>
        </div>

        <div className="appointments-list">
          {filteredClients.length === 0 ? (
            <div className="empty-state">
              <i className="ri-user-line"></i>
              <h3>No clients found</h3>
              <p>There are no {filterStatus} clients at the moment.</p>
            </div>
          ) : (
            filteredClients.map((client) => (
              <div key={client.id} className="appointment-card">
                <div className="appointment-info">
                  <div className="appointment-icon">
                    <i className="ri-user-line"></i>
                  </div>
                  <div className="appointment-details">
                    <h3>{client.name}</h3>
                    <p className="project-name">
                      <i className="ri-map-pin-line"></i>
                      {client.location}
                    </p>
                    <div className="appointment-meta">
                      <span>
                        <i className="ri-mail-line"></i>
                        {client.email}
                      </span>
                      <span>
                        <i className="ri-phone-line"></i>
                        {client.phone}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="appointment-actions">
                  <span
                    className={`status-badge ${getStatusClass(client.status)}`}
                  >
                    {client.status.charAt(0).toUpperCase() +
                      client.status.slice(1)}
                  </span>
                  <div className="action-buttons">
                    <button className="btn-action btn-view">
                      <i className="ri-eye-line"></i>
                    </button>
                    <button className="btn-action btn-edit">
                      <i className="ri-edit-line"></i>
                    </button>
                    <button className="btn-action btn-delete">
                      <i className="ri-delete-bin-line"></i>
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

export default AdminClients;