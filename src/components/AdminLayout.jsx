import React from "react";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#f4f7fe]">
      <AdminSidebar />

      <main
        className="
          lg:ml-64
          pt-16 lg:pt-6
          px-4 sm:px-6 lg:px-8
          pb-10
          min-h-screen
        "
      >
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
