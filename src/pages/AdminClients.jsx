import React, { useState } from "react";

const SalonAdminClients = () => {
  const [activeNav, setActiveNav] = useState("Clients");
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

  const [clients] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "+1 (555) 123-4567",
      status: "active",
      location: "Downtown",
      visits: 14,
      spent: "$1,240",
      avatar: "S",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      id: 2,
      name: "Emily Davis",
      email: "emily.d@email.com",
      phone: "+1 (555) 234-5678",
      status: "active",
      location: "Midtown",
      visits: 8,
      spent: "$680",
      avatar: "E",
      gradient: "from-pink-500 to-fuchsia-500",
    },
    {
      id: 3,
      name: "Lisa Morgan",
      email: "lisa.m@email.com",
      phone: "+1 (555) 345-6789",
      status: "inactive",
      location: "Westside",
      visits: 3,
      spent: "$310",
      avatar: "L",
      gradient: "from-fuchsia-500 to-purple-500",
    },
    {
      id: 4,
      name: "Jessica Wright",
      email: "jessica.w@email.com",
      phone: "+1 (555) 456-7890",
      status: "active",
      location: "Eastend",
      visits: 21,
      spent: "$2,100",
      avatar: "J",
      gradient: "from-purple-500 to-rose-500",
    },
    {
      id: 5,
      name: "Anna Klein",
      email: "anna.k@email.com",
      phone: "+1 (555) 567-8901",
      status: "active",
      location: "Uptown",
      visits: 6,
      spent: "$520",
      avatar: "A",
      gradient: "from-rose-400 to-pink-400",
    },
    {
      id: 6,
      name: "Maria Santos",
      email: "maria.s@email.com",
      phone: "+1 (555) 678-9012",
      status: "inactive",
      location: "Harbor",
      visits: 2,
      spent: "$180",
      avatar: "M",
      gradient: "from-pink-400 to-fuchsia-400",
    },
  ]);

  // ── derived ──────────────────────────────────
  const counts = clients.reduce(
    (acc, c) => { acc[c.status] = (acc[c.status] || 0) + 1; return acc; },
    { active: 0, inactive: 0 }
  );

  const filtered = clients.filter((c) => {
    const matchStatus = filterStatus === "all" || c.status === filterStatus;
    const matchSearch =
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchStatus && matchSearch;
  });

  const totalSpent = clients.reduce((sum, c) => {
    return sum + Number(c.spent.replace(/[$,]/g, ""));
  }, 0);

  // ══════════════════════════════════════════════
  return (
    <div className="flex min-h-screen bg-gray-100 w-full overflow-x-hidden">

      {/* ── mobile overlay ── */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-20 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* ── sidebar ── */}
      <aside className={`fixed top-0 left-0 z-30 h-full w-64 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white transform transition-transform duration-300 lg:translate-x-0 lg:static lg:z-auto flex flex-col ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
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

        {/* ── top navbar ── */}
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-xl border-b border-gray-200 px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-gray-600 hover:text-rose-500 text-2xl" onClick={() => setSidebarOpen(true)}>☰</button>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Clients</h2>
              <p className="text-xs text-gray-500 hidden sm:block">Manage and track all registered clients</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white text-sm font-bold rounded-lg shadow-md shadow-rose-500/30 transition-all">
              <span>+</span> New Client
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
              { label: "Total Clients",   val: clients.length,   gradient: "from-rose-500 to-pink-500",      icon: "👥" },
              { label: "Active",          val: counts.active,    gradient: "from-emerald-500 to-teal-500",   icon: "✅" },
              { label: "Inactive",        val: counts.inactive,  gradient: "from-red-400 to-rose-500",       icon: "⚠️" },
              { label: "Total Revenue",   val: `$${totalSpent.toLocaleString()}`, gradient: "from-purple-500 to-fuchsia-500", icon: "💰" },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-3 hover:shadow-md transition-all">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-lg shadow-md shrink-0`}>{s.icon}</div>
                <div className="min-w-0">
                  <p className="text-xl font-bold text-gray-900 leading-tight truncate">{s.val}</p>
                  <p className="text-xs text-gray-500">{s.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── filter bar ── */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col sm:flex-row gap-3 mb-5">
            <div className="flex flex-wrap gap-2">
              {["all", "active", "inactive"].map((s) => (
                <button
                  key={s}
                  onClick={() => setFilterStatus(s)}
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold border transition-all ${
                    filterStatus === s
                      ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white border-transparent shadow-md shadow-rose-500/25"
                      : "bg-gray-50 text-gray-600 border-gray-200 hover:border-rose-300 hover:bg-rose-50"
                  }`}
                >
                  <span className="capitalize">{s}</span>
                  <span className="ml-1.5 opacity-60">
                    ({s === "all" ? clients.length : counts[s]})
                  </span>
                </button>
              ))}
            </div>

            <div className="flex items-center bg-gray-50 border border-gray-200 focus-within:border-rose-400 focus-within:ring-2 focus-within:ring-rose-200 rounded-xl px-4 py-2 w-full sm:w-72 ml-auto transition-all">
              <span className="text-gray-400 mr-2">🔍</span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name, email or location…"
                className="bg-transparent outline-none text-sm w-full text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          {/* ── client cards ── */}
          <div className="flex flex-col gap-3">

            {/* empty state */}
            {filtered.length === 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 text-center">
                <p className="text-5xl mb-3">👤</p>
                <h3 className="text-lg font-bold text-gray-800 mb-1">No clients found</h3>
                <p className="text-gray-500 text-sm">Try adjusting your search or filters.</p>
              </div>
            )}

            {filtered.map((client) => (
              <div
                key={client.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-rose-200 transition-all p-4 sm:p-5 flex flex-col lg:flex-row gap-4"
              >
                {/* avatar + info */}
                <div className="flex gap-4 flex-1">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${client.gradient} flex items-center justify-center text-white text-lg font-bold shadow-md shrink-0`}>
                    {client.avatar}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-bold text-gray-900 text-base">{client.name}</h3>
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full capitalize ${client.status === "active" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-600"}`}>
                        {client.status}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-2">
                      <span className="flex items-center gap-1.5">📍 {client.location}</span>
                      <span className="flex items-center gap-1.5">✉️ {client.email}</span>
                      <span className="flex items-center gap-1.5">📞 {client.phone}</span>
                    </div>

                    {/* mini stats row */}
                    <div className="flex flex-wrap gap-2">
                      <span className="flex items-center gap-1.5 bg-rose-50 text-rose-600 text-xs font-semibold px-2.5 py-1 rounded-lg">
                        💇 {client.visits} visits
                      </span>
                      <span className="flex items-center gap-1.5 bg-pink-50 text-pink-600 text-xs font-semibold px-2.5 py-1 rounded-lg">
                        💰 {client.spent} spent
                      </span>
                    </div>
                  </div>
                </div>

                {/* actions */}
                <div className="flex items-center gap-2 justify-end">
                  <button className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-500 hover:text-white transition flex items-center justify-center text-base">👁</button>
                  <button className="w-9 h-9 rounded-xl bg-pink-50 text-pink-600 hover:bg-pink-500 hover:text-white transition flex items-center justify-center text-base">✎</button>
                  <button className="w-9 h-9 rounded-xl bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition flex items-center justify-center text-base">🗑</button>
                </div>
              </div>
            ))}
          </div>

        </main>
      </div>
    </div>
  );
};

export default SalonAdminClients;