import React from "react";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const menuItems = [
    { name: "Profile", path: "/admin/profile", icon: "ri-user-line" },
    { name: "Dashboard", path: "/admin/dashboard", icon: "ri-dashboard-line" },
    { name: "Inbox", path: "/admin/inbox", icon: "ri-inbox-line" },
    { name: "Appointments", path: "/admin/appointments", icon: "ri-calendar-check-line" },
    { name: "Clients", path: "/admin/clients", icon: "ri-group-line" },
    { name: "Services", path: "/admin/services", icon: "ri-community-line" },
    { name: "Staff", path: "/admin/staff", icon: "ri-community-line" },
    { name: "Receptionist", path: "/admin/receptionist", icon: "ri-user-6-line" },
    { name: "Revenue & Reports", path: "/admin/revenue_reports", icon: "ri-bar-chart-2-line" },
    { name: "Offers", path: "/admin/offers", icon: "ri-coupon-3-line" },
    { name: "Settings", path: "/admin/settings", icon: "ri-settings-2-line" },
  ];

  const handleLinkClick = () => {
    // Close sidebar on mobile when a link is clicked
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  return (
    <>
      {/* Mobile Overlay - Only shows when sidebar is open on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[60] lg:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed lg:sticky top-0 left-0 h-screen w-[280px] 
          flex flex-col bg-[#0f172a] text-white shadow-2xl border-r border-white/5
          z-[70] lg:z-10 transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Header with Back to Site and Close Button */}
        <div className="flex items-center justify-between px-6 pt-6 lg:block">
          <Link
            to="/"
            className="group flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-[#f59e0b]"
            onClick={handleLinkClick}
          >
            <i className="ri-arrow-left-s-line text-lg transition-transform group-hover:-translate-x-1"></i>
            <span>Back to Site</span>
          </Link>
          
          {/* X button only on mobile */}
          <button
            onClick={onClose}
            className="lg:hidden text-white hover:text-amber-500 transition-colors ml-4"
            aria-label="Close menu"
          >
            <i className="ri-close-line text-2xl"></i>
          </button>
        </div>

        {/* Sidebar Header / Brand */}
        <div className="flex flex-col items-center py-6 sm:py-8">
          <div className="mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f59e0b] to-[#d97706] shadow-lg shadow-amber-900/20">
            <i className="ri-shield-user-line text-xl sm:text-2xl text-white"></i>
          </div>
          <h2 className="text-base sm:text-lg font-bold tracking-tight">Admin Panel</h2>
          <div className="mt-1 h-1 w-8 rounded-full bg-amber-500/30"></div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 sm:px-4 py-4 overflow-y-auto space-y-1 custom-scrollbar">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleLinkClick}
                className={`group flex items-center gap-3 sm:gap-4 px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-amber-500/10 text-[#f59e0b] shadow-sm"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <div
                  className={`flex items-center justify-center transition-transform duration-200 ${
                    isActive ? "scale-110" : "group-hover:scale-110"
                  }`}
                >
                  <i className={`${item.icon} text-lg sm:text-xl`}></i>
                </div>
                <span className="font-medium text-sm sm:text-base">{item.name}</span>

                {isActive && (
                  <div className="ml-auto h-1.5 w-1.5 rounded-full bg-[#f59e0b] shadow-[0_0_8px_#f59e0b]"></div>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default AdminSidebar;