import React from "react";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      title: "Dashboard",
      icon: "ri-dashboard-3-line",
      path: "/admin/dashboard",
    },
    {
      title: "Appointments",
      icon: "ri-calendar-check-line",
      path: "/admin/appointments",
    },
    { title: "Clients", icon: "ri-user-heart-line", path: "/admin/clients" },
    { title: "Services", icon: "ri-scissors-2-line", path: "/admin/services" },
    { title: "Staff", icon: "ri-team-line", path: "/admin/staff" },
    { title: "Offers", icon: "ri-gift-line", path: "/admin/offers" },
    { title: "Inbox", icon: "ri-mail-line", path: "/admin/inbox" },
    { title: "Settings", icon: "ri-settings-3-line", path: "/admin/settings" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* ===== Desktop Sidebar ===== */}
      <aside className="hidden lg:flex lg:flex-col lg:sticky left-0 top-20 h-[calc(100vh-5rem)] w-64 bg-gradient-to-b from-gray-50 to-white border-r border-gray-200">

        <div className="p-6 border-b">
          <h3 className="font-bold text-gray-900">Admin Panel</h3>
          <p className="text-xs text-gray-500">Skin & Soul Studio</p>
        </div>

        <nav className="py-4 px-3">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-3 rounded-lg transition ${
                    isActive(item.path)
                      ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white"
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
      </aside>

      {/* ===== Mobile / Tablet Bottom Nav ===== */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 z-50">
        <ul className="flex h-full">
          {menuItems.map((item) => (
            <li key={item.path} className="flex-1">
              <Link
                to={item.path}
                className={`h-full flex flex-col items-center justify-center gap-1 transition ${
                  isActive(item.path) ? "text-rose-600" : "text-gray-400"
                }`}
              >
                <i className={`${item.icon} text-xl`} />
                <span className="text-[11px] leading-none font-medium">
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default AdminSidebar;
