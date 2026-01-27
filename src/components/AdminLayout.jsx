import React from "react";
import AdminSidebar from "./AdminSidebar.jsx";
import Navbar from "./Navbar.jsx"; // Adjust the path to your actual Navbar
import Footer from "./Footer.jsx"; // Adjust the path to your actual Footer
import "./AdminLayout.css";

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-container">
      {/* 1. Navbar at the top */}

      {/* 2. Flex wrapper for the middle section */}
      <AdminSidebar />
      {/* <div className="admin-layout-horizontal-wrapper"> */}
        <main className="admin-content">
          {children} {/* This is where your dashboard/profile pages load */}
        </main>
      {/* </div> */}
    </div>
  );
};

export default AdminLayout;
