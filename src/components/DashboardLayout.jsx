import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./DashboardLayout.css";

function DashboardLayout() {
  const location = useLocation();

  const dashboardMenuItems = [
    {
      id: 1,
      title: "Dashboard",
      path: "/dashboard",
      icon: "📊",
    },
    {
      id: 2,
      title: "Profile",
      path: "/dashboard/profile",
      icon: "👤",
    },
    {
      id: 3,
      title: "Appointments",
      path: "/dashboard/appointments",
      icon: "📅",
    },
  ];

  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <h2 className="sidebar-title">Dashboard Menu</h2>
        </div>
        <nav className="sidebar-nav">
          <ul className="sidebar-menu">
            {dashboardMenuItems.map((item) => (
              <li key={item.id} className="sidebar-menu-item">
                <Link
                  to={item.path}
                  className={`sidebar-link ${
                    location.pathname === item.path ? "active" : ""
                  }`}
                >
                  <span className="sidebar-icon">{item.icon}</span>
                  <span className="sidebar-text">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="dashboard-main">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
