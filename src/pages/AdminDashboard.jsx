import React, { useState } from "react";

const SalonAdminDashboard = () => {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { label: "Dashboard", icon: "📊" },
    { label: "Appointments", icon: "📅" },
    { label: "Clients", icon: "👥" },
    { label: "Services", icon: "✂️" },
    { label: "Gallery", icon: "🖼️" },
    { label: "Revenue", icon: "💰" },
    { label: "Settings", icon: "⚙️" },
  ];

  const stats = [
    {
      title: "Total Appointments",
      value: "48",
      icon: "📅",
      trend: "+12%",
      trendUp: true,
      gradient: "from-rose-500 to-pink-500",
    },
    {
      title: "Active Clients",
      value: "156",
      icon: "👥",
      trend: "+8%",
      trendUp: true,
      gradient: "from-pink-500 to-fuchsia-500",
    },
    {
      title: "Services Today",
      value: "12",
      icon: "✂️",
      trend: "+5%",
      trendUp: true,
      gradient: "from-fuchsia-500 to-purple-500",
    },
    {
      title: "Revenue",
      value: "$3.2K",
      icon: "💰",
      trend: "+18%",
      trendUp: true,
      gradient: "from-purple-500 to-rose-500",
    },
  ];

  const recentActivities = [
    { id: 1, action: "New Appointment Booked", detail: "Bridal Makeup – Sarah J.", time: "2 hours ago", icon: "💇" },
    { id: 2, action: "Client Check-in", detail: "Hair Coloring – Emily D.", time: "3 hours ago", icon: "✨" },
    { id: 3, action: "Service Completed", detail: "Spa Treatment – Lisa M.", time: "5 hours ago", icon: "💆" },
    { id: 4, action: "New Client Registered", detail: "Jessica W. – First Visit", time: "1 day ago", icon: "👤" },
    { id: 5, action: "Payment Received", detail: "$240 – Deluxe Package", time: "1 day ago", icon: "💳" },
  ];

  const upcomingAppointments = [
    { name: "Anna Klein", service: "Hair Styling", time: "10:00 AM", status: "Confirmed" },
    { name: "Maria Santos", service: "Makeup", time: "11:30 AM", status: "Pending" },
    { name: "Rachel Lee", service: "Spa Massage", time: "1:00 PM", status: "Confirmed" },
    { name: "Olivia Chen", service: "Nail Art", time: "3:00 PM", status: "Pending" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 w-full overflow-x-hidden">

      {/* Sidebar Overlay (mobile) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-30 h-full w-64 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white transform transition-transform duration-300 lg:translate-x-0 lg:static lg:z-auto ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-lg shadow-lg">
              ✂️
            </div>
            <div>
              <h1 className="font-bold text-base leading-tight">Skin & Soul Studio</h1>
              <p className="text-xs text-gray-400">Beauty & Wellness</p>
            </div>
          </div>
          <button className="lg:hidden text-gray-400 hover:text-white text-xl" onClick={() => setSidebarOpen(false)}>✕</button>
        </div>

        {/* Nav Links */}
        <nav className="p-4 space-y-1 flex-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => { setActiveNav(item.label); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeNav === item.label
                  ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-500/20"
                  : "text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Sidebar Bottom – User */}
        <div className="p-4 border-t border-white/10 mt-auto">
          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-sm font-bold">A</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate">Admin</p>
              <p className="text-xs text-gray-500 truncate">admin@bella.com</p>
            </div>
            <span className="text-gray-500 text-xs">▼</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Top Navbar */}
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-xl border-b border-gray-200 px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-gray-600 hover:text-rose-500 text-2xl" onClick={() => setSidebarOpen(true)}>☰</button>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Dashboard Overview</h2>
              <p className="text-xs text-gray-500 hidden sm:block">Welcome back! Here's what's happening today.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white text-sm font-bold rounded-lg shadow-md shadow-rose-500/30 transition-all">
              <span>+</span> New Booking
            </button>
            <button className="relative p-2 rounded-xl hover:bg-gray-100 transition">
              <span className="text-xl">🔔</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full"></span>
            </button>
          </div>
        </header>

        {/* Page Body */}
        <main className="flex-1 p-4 sm:p-6 overflow-auto">

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 mb-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-xl shadow-md group-hover:scale-110 transition-transform`}>
                    {stat.icon}
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${stat.trendUp ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"}`}>
                    {stat.trend} ↑
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">{stat.value}</h3>
                <p className="text-sm text-gray-500 mt-1">{stat.title}</p>
              </div>
            ))}
          </div>

          {/* Middle Row: Activities + Upcoming */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">

            {/* Recent Activities */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-gray-100">
                <h3 className="text-base sm:text-lg font-bold text-gray-900">Recent Activities</h3>
                <button className="text-xs sm:text-sm font-semibold text-rose-500 hover:text-rose-600 hover:bg-rose-50 px-3 py-1 rounded-lg transition">View All</button>
              </div>
              <div className="p-4 sm:p-5 space-y-3">
                {recentActivities.map((act) => (
                  <div key={act.id} className="flex items-center gap-3 sm:gap-4 p-3 rounded-xl hover:bg-gray-50 transition group cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center text-lg group-hover:from-rose-200 group-hover:to-pink-200 transition shrink-0">
                      {act.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800 truncate">{act.action}</p>
                      <p className="text-xs text-gray-500 truncate">{act.detail}</p>
                    </div>
                    <span className="text-xs text-gray-400 whitespace-nowrap shrink-0">{act.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-5 pt-5 pb-3 border-b border-gray-100">
                <h3 className="text-base sm:text-lg font-bold text-gray-900">Quick Actions</h3>
              </div>
              <div className="p-4 sm:p-5 space-y-3">
                {[
                  { icon: "📝", label: "Create Report" },
                  { icon: "👤", label: "Add Client" },
                  { icon: "📆", label: "Schedule Meeting" },
                  { icon: "📨", label: "Send Update" },
                  { icon: "💎", label: "New Package" },
                ].map((action, idx) => (
                  <button
                    key={idx}
                    className="w-full flex items-center gap-4 p-3 rounded-xl border border-gray-100 bg-gray-50 hover:border-rose-300 hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 transition-all group"
                  >
                    <span className="text-lg">{action.icon}</span>
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-rose-600 transition">{action.label}</span>
                    <span className="ml-auto text-gray-300 group-hover:text-rose-400 transition">→</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row: Upcoming Appointments + Banner */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">

            {/* Upcoming Appointments Table */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-gray-100">
                <h3 className="text-base sm:text-lg font-bold text-gray-900">Today's Appointments</h3>
                <button className="text-xs sm:text-sm font-semibold text-rose-500 hover:text-rose-600 hover:bg-rose-50 px-3 py-1 rounded-lg transition">Full Schedule</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <th className="px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Client</th>
                      <th className="px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Service</th>
                      <th className="px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Time</th>
                      <th className="px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {upcomingAppointments.map((apt, i) => (
                      <tr key={i} className="border-b border-gray-50 hover:bg-rose-50/40 transition group">
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-white text-xs font-bold">
                              {apt.name.charAt(0)}
                            </div>
                            <span className="text-sm font-semibold text-gray-800">{apt.name}</span>
                          </div>
                        </td>
                        <td className="px-5 py-4 text-sm text-gray-600">{apt.service}</td>
                        <td className="px-5 py-4 text-sm text-gray-600 font-medium">{apt.time}</td>
                        <td className="px-5 py-4">
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                            apt.status === "Confirmed"
                              ? "bg-emerald-50 text-emerald-600"
                              : "bg-amber-50 text-amber-600"
                          }`}>
                            {apt.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Promo / Offer Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-rose-900/85 via-pink-900/80 to-rose-900/90"></div>

              <div className="relative z-10 p-6 flex flex-col h-full min-h-[280px] justify-between">
                <div>
                  <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white mb-4">
                    🎁 Special Offer
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-2">
                    New Client<br />
                    <span className="text-pink-300">20% Off</span>
                  </h3>
                  <p className="text-white/80 text-sm">
                    Share the code with your clients to redeem instantly.
                  </p>
                </div>
                <div className="mt-6">
                  <div className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-xl px-4 py-3 flex items-center justify-between mb-4">
                    <span className="text-white font-bold text-base tracking-widest">BELLA20</span>
                    <button className="text-xs font-bold text-white bg-white/20 hover:bg-white/30 px-3 py-1 rounded-lg transition">Copy</button>
                  </div>
                  <button className="w-full bg-white hover:bg-gray-100 text-rose-600 font-bold py-2.5 rounded-xl text-sm transition-all shadow-md">
                    View Promotions
                  </button>
                </div>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default SalonAdminDashboard;