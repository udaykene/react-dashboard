import React, { useState, useEffect } from "react";
import AdminSidebar from "./AdminSidebar.jsx";
import AdminMobileHeader from "./AdminMobileHeader.jsx";

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar when screen becomes desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-screen w-full bg-[#f4f7fe]">
      {/* AdminSidebar */}
      <AdminSidebar />
      {/* Main Content Area */}

      {/* Page Content */}
      <main className="flex-1 overflow-y-auto bg-[#f4f7fe] py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
