import React, { useState } from "react";

const SalonAdminAppointments = () => {
  const [activeNav, setActiveNav] = useState("Appointments");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const navItems = [
    { label: "Dashboard", icon: "📊" },
    { label: "Appointments", icon: "📅" },
    { label: "Clients", icon: "👥" },
    { label: "Services", icon: "✂️" },
    { label: "Gallery", icon: "🖼️" },
    { label: "Revenue", icon: "💰" },
    { label: "Settings", icon: "⚙️" },
  ];

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      clientName: "Sarah Johnson",
      service: "Bridal Makeup",
      date: "2026-02-05",
      time: "10:00 AM",
      status: "confirmed",
      type: "Makeup",
      avatar: "S",
    },
    {
      id: 2,
      clientName: "Emily Davis",
      service: "Hair Coloring",
      date: "2026-02-08",
      time: "2:00 PM",
      status: "pending",
      type: "Hair",
      avatar: "E",
    },
    {
      id: 3,
      clientName: "Lisa Morgan",
      service: "Spa Treatment",
      date: "2026-02-10",
      time: "11:30 AM",
      status: "confirmed",
      type: "Spa",
      avatar: "L",
    },
    {
      id: 4,
      clientName: "Jessica Wright",
      service: "Nail Art",
      date: "2026-02-12",
      time: "3:00 PM",
      status: "cancelled",
      type: "Nails",
      avatar: "J",
    },
    {
      id: 5,
      clientName: "Anna Klein",
      service: "Hair Styling",
      date: "2026-02-14",
      time: "9:30 AM",
      status: "pending",
      type: "Hair",
      avatar: "A",
    },
    {
      id: 6,
      clientName: "Maria Santos",
      service: "Facial Treatment",
      date: "2026-02-15",
      time: "1:00 PM",
      status: "confirmed",
      type: "Spa",
      avatar: "M",
    },
  ]);

  // ── helpers ──────────────────────────────────
  const typeColor = {
    Makeup: "from-rose-500 to-pink-500",
    Hair: "from-pink-500 to-fuchsia-500",
    Spa: "from-fuchsia-500 to-purple-500",
    Nails: "from-purple-500 to-rose-500",
  };

  const typeBadge = {
    Makeup: "bg-rose-100 text-rose-700",
    Hair: "bg-pink-100 text-pink-700",
    Spa: "bg-fuchsia-100 text-fuchsia-700",
    Nails: "bg-purple-100 text-purple-700",
  };

  const statusBadge = (s) => {
    if (s === "confirmed") return "bg-emerald-50 text-emerald-700";
    if (s === "pending")   return "bg-amber-50  text-amber-600";
    return                        "bg-red-50    text-red-600";
  };

  const handleStatusChange = (id, newStatus) => {
    setAppointments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: newStatus } : a))
    );
  };

  const filtered = appointments.filter((a) => {
    const matchStatus = filterStatus === "all" || a.status === filterStatus;
    const matchSearch =
      a.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.service.toLowerCase().includes(searchTerm.toLowerCase());
    return matchStatus && matchSearch;
  });

  // ── summary pills for the top bar ────────────
  const counts = appointments.reduce(
    (acc, a) => { acc[a.status] = (acc[a.status] || 0) + 1; return acc; },
    { confirmed: 0, pending: 0, cancelled: 0 }
  );

  // ══════════════════════════════════════════════
  return (
    <div className="flex min-h-screen bg-gray-100 w-full overflow-x-hidden">

      {/* ── mobile overlay ── */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-20 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* ── sidebar (identical to Dashboard) ── */}
      <aside className={`fixed top-0 left-0 z-30 h-full w-64 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white transform transition-transform duration-300 lg:translate-x-0 lg:static lg:z-auto flex flex-col ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        {/* logo */}
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-lg shadow-lg">✂️</div>
            <div>
              <h1 className="font-bold text-base leading-tight">Skin & Soul Studio</h1>
              <p className="text-xs text-gray-400">Beauty & Wellness</p>
            </div>
          </div>
          <button className="lg:hidden text-gray-400 hover:text-white text-xl" onClick={() => setSidebarOpen(false)}>✕</button>
        </div>

        {/* nav */}
        <nav className="p-4 space-y-1 flex-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => { setActiveNav(item.label); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${activeNav === item.label ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-500/20" : "text-gray-400 hover:text-white hover:bg-white/10"}`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* user */}
        <div className="p-4 border-t border-white/10">
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

      {/* ── main shell ── */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* ── top navbar (identical to Dashboard) ── */}
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-xl border-b border-gray-200 px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-gray-600 hover:text-rose-500 text-2xl" onClick={() => setSidebarOpen(true)}>☰</button>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Appointments</h2>
              <p className="text-xs text-gray-500 hidden sm:block">Manage and track all client bookings</p>
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

        {/* ── page body ── */}
        <main className="flex-1 p-4 sm:p-6 overflow-auto">

          {/* ── summary mini-cards ── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-5">
            {[
              { label: "Total",      val: appointments.length,  gradient: "from-rose-500 to-pink-500",       icon: "📋" },
              { label: "Confirmed", val: counts.confirmed,      gradient: "from-emerald-500 to-teal-500",    icon: "✅" },
              { label: "Pending",   val: counts.pending,        gradient: "from-amber-500 to-orange-500",    icon: "⏳" },
              { label: "Cancelled", val: counts.cancelled,      gradient: "from-red-400 to-rose-500",        icon: "❌" },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-lg shadow-md shrink-0`}>{s.icon}</div>
                <div>
                  <p className="text-xl font-bold text-gray-900 leading-tight">{s.val}</p>
                  <p className="text-xs text-gray-500">{s.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── filter bar ── */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col sm:flex-row gap-3 mb-5">
            {/* status pills */}
            <div className="flex flex-wrap gap-2">
              {["all", "confirmed", "pending", "cancelled"].map((s) => (
                <button
                  key={s}
                  onClick={() => setFilterStatus(s)}
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold border transition-all ${
                    filterStatus === s
                      ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white border-transparent shadow-md shadow-rose-500/25"
                      : "bg-gray-50 text-gray-600 border-gray-200 hover:border-rose-300 hover:bg-rose-50"
                  }`}
                >
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </button>
              ))}
            </div>

            {/* search */}
            <div className="flex items-center bg-gray-50 border border-gray-200 focus-within:border-rose-400 focus-within:ring-2 focus-within:ring-rose-200 rounded-xl px-4 py-2 w-full sm:w-72 ml-auto transition-all">
              <span className="text-gray-400 mr-2">🔍</span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search clients or services…"
                className="bg-transparent outline-none text-sm w-full text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          {/* ── appointment cards ── */}
          <div className="flex flex-col gap-3">
            {filtered.length === 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 text-center">
                <p className="text-4xl mb-3">📭</p>
                <p className="text-gray-500 font-medium">No appointments match your filters.</p>
              </div>
            )}

            {filtered.map((apt) => (
              <div
                key={apt.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-rose-200 transition-all p-4 sm:p-5 flex flex-col sm:flex-row gap-4"
              >
                {/* avatar + details */}
                <div className="flex gap-4 flex-1">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${typeColor[apt.type] || "from-rose-500 to-pink-500"} flex items-center justify-center text-white text-lg font-bold shadow-md shrink-0`}>
                    {apt.avatar}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-bold text-gray-900 text-base">{apt.clientName}</h3>
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${typeBadge[apt.type] || "bg-rose-100 text-rose-700"}`}>{apt.type}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{apt.service}</p>

                    <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-lg">📅 {apt.date}</span>
                      <span className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-lg">🕐 {apt.time}</span>
                    </div>
                  </div>
                </div>

                {/* status + actions */}
                <div className="flex flex-wrap items-center gap-3 sm:flex-col sm:items-end justify-between sm:justify-start">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full capitalize ${statusBadge(apt.status)}`}>
                    {apt.status}
                  </span>

                  <div className="flex gap-2">
                    {apt.status === "pending" && (
                      <>
                        <button
                          onClick={() => handleStatusChange(apt.id, "confirmed")}
                          className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-500 hover:text-white transition flex items-center justify-center text-base"
                        >✓</button>
                        <button
                          onClick={() => handleStatusChange(apt.id, "cancelled")}
                          className="w-9 h-9 rounded-xl bg-red-50 text-red-600 hover:bg-red-500 hover:text-white transition flex items-center justify-center text-base"
                        >✕</button>
                      </>
                    )}
                    <button className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-500 hover:text-white transition flex items-center justify-center text-base">👁</button>
                    <button className="w-9 h-9 rounded-xl bg-pink-50 text-pink-600 hover:bg-pink-500 hover:text-white transition flex items-center justify-center text-base">✎</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </main>
      </div>
    </div>
  );
};

export default SalonAdminAppointments;