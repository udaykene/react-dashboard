import React from "react";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Profile", path: "/admin/profile", icon: "ri-user-line" },
    { name: "Dashboard", path: "/admin/dashboard", icon: "ri-dashboard-line" },
    { name: "Appointments", path: "/admin/appointments", icon: "ri-calendar-check-line" },
    { name: "Clients", path: "/admin/clients", icon: "ri-group-line" },
    { name: "Services", path: "/admin/services", icon: "ri-group-line" },
    { name: "Revenue & Reports", path: "/admin/revenue_reports", icon: "ri-group-line" },
    { name: "Receptionist", path: "/admin/receptionist", icon: "ri-group-3-line" },
  ];

  return (
    <div className="sticky top-0 flex h-full w-[280px] flex-col bg-[#0f172a] text-white shadow-2xl border-r border-white/5">

      {/* 1. New Back Button Positioning (Top) */}
      <div className="px-6 pt-6">
        <Link
          to="/"
          className="group flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-[#f59e0b]"
        >
          <i className="ri-arrow-left-s-line text-lg transition-transform group-hover:-translate-x-1"></i>
          <span>Back to Site</span>
        </Link>
      </div>

      {/* Sidebar Header / Brand */}
      <div className="flex flex-col items-center py-8">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f59e0b] to-[#d97706] shadow-lg shadow-amber-900/20">
          <i className="ri-shield-user-line text-2xl text-white"></i>
        </div>
        <h2 className="text-lg font-bold tracking-tight">Admin Panel</h2>
        <div className="mt-1 h-1 w-8 rounded-full bg-amber-500/30"></div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 overflow-y-auto space-y-1 custom-scrollbar">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`group flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 ${isActive
                  ? "bg-amber-500/10 text-[#f59e0b] shadow-sm"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
            >
              <div className={`flex items-center justify-center transition-transform duration-200 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                <i className={`${item.icon} text-xl`}></i>
              </div>
              <span className="font-medium">{item.name}</span>

              {isActive && (
                <div className="ml-auto h-1.5 w-1.5 rounded-full bg-[#f59e0b] shadow-[0_0_8px_#f59e0b]"></div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer / User Profile Summary (Optional replacement for old button) */}
      <div className="border-t border-white/5 p-6">
        <div className="flex items-center gap-3 px-2">
          <div className="h-8 w-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold">
            AD
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white">Administrator</span>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Logged In</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;