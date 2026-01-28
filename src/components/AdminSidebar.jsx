import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./AdminSidebar.css";

const AdminSidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      name: "Profile",
      path: "/admin/profile",
      icon: "ri-user-line",
    },
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: "ri-dashboard-line",
    },
    {
      name: "Appointments",
      path: "/admin/appointments",
      icon: "ri-calendar-check-line",
    },
    {
      name: "Clients",
      path:"/admin/clients",
      icon:"ri-group-line",
    }
  ];

  return (
    <div className="admin-sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <i className="ri-shield-user-line"></i>
        </div>
        <h2>Admin Panel</h2>
      </div>

      <nav className="sidebar-nav">
        <ul className="sidebar-menu">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`sidebar-link ${
                  location.pathname === item.path ? "active" : ""
                }`}
              >
                <i className={item.icon}></i>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <Link to="/" className="sidebar-link back-link">
          <i className="ri-arrow-left-line"></i>
          <span>Back to Site</span>
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;