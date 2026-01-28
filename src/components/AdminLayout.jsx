import React from "react";
import AdminSidebar from "./AdminSidebar.jsx";
// import Navbar from "./Navbar.jsx"; 
// import Footer from "./Footer.jsx";

const AdminLayout = ({ children }) => {
  return (
    /* .admin-container */
    <div className="flex min-h-screen w-full">
      
      {/* AdminSidebar contains its own width (260px). 
        We ensure it doesn't shrink in this flex container.
      */}
      <div className="flex-shrink-0">
        <AdminSidebar />
      </div>

      {/* .admin-content */}
      <main className="flex-1 overflow-y-auto bg-[#f4f7fe] py-2 px-8">
        {children} 
        {/* This is where your dashboard/profile pages load */}
      </main>
      
    </div>
  );
};

export default AdminLayout;