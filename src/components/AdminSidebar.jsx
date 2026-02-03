import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const menuItems = [
    { title: "Dashboard", icon: "ri-dashboard-3-line", path: "/admin/dashboard" },
    { title: "Appointments", icon: "ri-calendar-check-line", path: "/admin/appointments" },
    { title: "Clients", icon: "ri-user-heart-line", path: "/admin/clients" },
    { title: "Services", icon: "ri-scissors-2-line", path: "/admin/services" },
    { title: "Staff", icon: "ri-team-line", path: "/admin/staff" },
    { title: "Offers", icon: "ri-gift-line", path: "/admin/offers" },
    { title: "Inbox", icon: "ri-mail-line", path: "/admin/inbox" },
    { title: "Settings", icon: "ri-settings-3-line", path: "/admin/settings" },
  ];

  const isActive = (path) => location.pathname === path;

  const SidebarContent = () => (
    <>
      <div className="p-6 border-b">
        <h3 className="font-bold text-gray-900 text-lg">Admin Panel</h3>
        <p className="text-xs text-gray-500">Skin & Soul Studio</p>
      </div>

      <nav className="p-3">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive(item.path)
                    ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow"
                    : "text-gray-700 hover:bg-rose-50 hover:text-rose-600"
                }`}
              >
                <i className={`${item.icon} text-xl`} />
                <span className="font-medium">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );

  return (
    <>
      {/* ===== Mobile Header ===== */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-white border-b flex items-center px-4 z-50">
        <button onClick={() => setOpen(true)}>
          <i className="ri-menu-2-line text-2xl text-gray-700" />
        </button>
        <h2 className="ml-4 font-semibold">Admin Panel</h2>
      </div>

      {/* ===== Desktop Sidebar ===== */}
      <aside className="hidden lg:flex lg:flex-col fixed left-0 top-0 h-screen w-64 bg-white border-r">
        <SidebarContent />
      </aside>

      {/* ===== Mobile Sidebar Drawer ===== */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition ${
          open ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        <aside
          className={`absolute left-0 top-0 h-full w-64 bg-white transform transition-transform ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <SidebarContent />
        </aside>
      </div>
    </>
  );
};

export default AdminSidebar;
