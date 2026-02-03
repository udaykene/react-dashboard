import React, { useState } from "react";

const SalonAdminServices = () => {
  const [activeNav, setActiveNav]   = useState("Services");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterStatus,   setFilterStatus]   = useState("all");

  const navItems = [
    { label: "Dashboard",    icon: "📊" },
    { label: "Appointments", icon: "📅" },
    { label: "Clients",      icon: "👥" },
    { label: "Services",     icon: "✂️" },
    { label: "Gallery",      icon: "🖼️" },
    { label: "Revenue",      icon: "💰" },
    { label: "Settings",     icon: "⚙️" },
  ];

  // ── data ──────────────────────────────────────
  const [services, setServices] = useState([
    { id:1, name:"Hair Cut & Style",       category:"Hair",     desc:"Classic cuts, modern styles & blowouts tailored to your look.", price:"$45",     duration:"45 min",   status:"active",   icon:"✂️", gradient:"from-rose-500 to-pink-500",       clients:48, rating:4.9 },
    { id:2, name:"Color & Highlights",     category:"Hair",     desc:"Balayage, ombré, full-colour & highlight treatments.",        price:"$95",     duration:"2 hrs",    status:"active",   icon:"🎨", gradient:"from-pink-500 to-fuchsia-500",    clients:36, rating:4.8 },
    { id:3, name:"Bridal Makeup",          category:"Makeup",   desc:"Full-day bridal packages including trials & touch-ups.",      price:"$250",    duration:"3 hrs",    status:"active",   icon:"👰", gradient:"from-fuchsia-500 to-purple-500",  clients:22, rating:4.9 },
    { id:4, name:"Everyday Makeup",        category:"Makeup",   desc:"Natural or glamorous looks for any occasion.",               price:"$65",     duration:"1 hr",     status:"active",   icon:"💄", gradient:"from-purple-500 to-rose-500",     clients:41, rating:4.7 },
    { id:5, name:"Relaxing Massage",       category:"Spa",      desc:"Swedish, deep-tissue & aromatherapy massage sessions.",      price:"$80",     duration:"60 min",   status:"active",   icon:"💆", gradient:"from-rose-400 to-pink-400",       clients:55, rating:4.8 },
    { id:6, name:"Facial & Skin Care",     category:"Spa",      desc:"Customised facials with premium skincare products.",         price:"$70",     duration:"50 min",   status:"active",   icon:"✨", gradient:"from-pink-400 to-fuchsia-400",    clients:39, rating:4.6 },
    { id:7, name:"Manicure & Nail Art",    category:"Nails",    desc:"Classic manicures, gel sets & creative nail-art designs.",    price:"$55",     duration:"75 min",   status:"active",   icon:"💅", gradient:"from-fuchsia-400 to-purple-400",  clients:44, rating:4.7 },
    { id:8, name:"Pedicure & Foot Spa",    category:"Nails",    desc:"Rejuvenating pedicures with paraffin & foot treatments.",     price:"$60",     duration:"60 min",   status:"inactive", icon:"🧖", gradient:"from-purple-400 to-rose-400",     clients:18, rating:4.5 },
  ]);

  // ── derived ───────────────────────────────────
  const categoryList = ["all","Hair","Makeup","Spa","Nails"];

  const counts = categoryList.reduce((acc, c) => {
    acc[c] = c === "all" ? services.length : services.filter(s => s.category === c).length;
    return acc;
  }, {});

  const statusCounts = {
    active:   services.filter(s => s.status === "active").length,
    inactive: services.filter(s => s.status === "inactive").length,
  };

  const avgRating = (services.reduce((s, sv) => s + sv.rating, 0) / services.length).toFixed(1);
  const totalClients = services.reduce((s, sv) => s + sv.clients, 0);

  const filtered = services.filter(sv => {
    const matchCat    = filterCategory === "all" || sv.category === filterCategory;
    const matchStatus = filterStatus   === "all" || sv.status   === filterStatus;
    return matchCat && matchStatus;
  });

  const handleToggle = (id) => {
    setServices(prev =>
      prev.map(s => s.id === id ? { ...s, status: s.status === "active" ? "inactive" : "active" } : s)
    );
  };

  // ── gradient icon bg per category (for the overview row) ──
  const catMeta = {
    Hair:   { gradient: "from-rose-500 to-pink-500",      icon: "✂️" },
    Makeup: { gradient: "from-pink-500 to-fuchsia-500",   icon: "💄" },
    Spa:    { gradient: "from-fuchsia-500 to-purple-500", icon: "💆" },
    Nails:  { gradient: "from-purple-500 to-rose-500",    icon: "💅" },
  };

  // ═══════════════════════════════════════════════
  return (
    <div className="flex min-h-screen bg-gray-100 w-full overflow-x-hidden">

      {/* overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-20 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* ── sidebar ── */}
      <aside className={`fixed top-0 left-0 z-30 h-full w-64 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white transform transition-transform duration-300 lg:translate-x-0 lg:static lg:z-auto flex flex-col ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-lg shadow-lg">✂️</div>
            <div>
              <h1 className="font-bold text-base leading-tight">Bella</h1>
              <p className="text-xs text-gray-400">Beauty Salon</p>
            </div>
          </div>
          <button className="lg:hidden text-gray-400 hover:text-white text-xl" onClick={() => setSidebarOpen(false)}>✕</button>
        </div>

        <nav className="p-4 space-y-1 flex-1">
          {navItems.map(item => (
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
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Services</h2>
              <p className="text-xs text-gray-500 hidden sm:block">Manage all salon services & packages</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white text-sm font-bold rounded-lg shadow-md shadow-rose-500/30 transition-all">
              <span>+</span> Add Service
            </button>
            <button className="relative p-2 rounded-xl hover:bg-gray-100 transition">
              <span className="text-xl">🔔</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full"></span>
            </button>
          </div>
        </header>

        {/* ── body ── */}
        <main className="flex-1 p-4 sm:p-6 overflow-auto">

          {/* ── summary mini-cards ── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-5">
            {[
              { label:"Total Services", val: services.length,       gradient:"from-rose-500 to-pink-500",      icon:"✂️" },
              { label:"Active",         val: statusCounts.active,   gradient:"from-emerald-500 to-teal-500",   icon:"✅" },
              { label:"Total Clients",  val: totalClients,          gradient:"from-purple-500 to-fuchsia-500", icon:"👥" },
              { label:"Avg Rating",     val: `${avgRating} / 5`,    gradient:"from-amber-500 to-orange-500",   icon:"⭐" },
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
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col gap-4 sm:flex-row sm:items-center mb-5">
            {/* category pills */}
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Category</p>
              <div className="flex flex-wrap gap-2">
                {categoryList.map(c => (
                  <button
                    key={c}
                    onClick={() => setFilterCategory(c)}
                    className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold border transition-all ${
                      filterCategory === c
                        ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white border-transparent shadow-md shadow-rose-500/25"
                        : "bg-gray-50 text-gray-600 border-gray-200 hover:border-rose-300 hover:bg-rose-50"
                    }`}
                  >
                    <span className="capitalize">{c}</span>
                    <span className="ml-1.5 opacity-60">({counts[c]})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* status pills — pushed right on sm+ */}
            <div className="flex flex-col gap-2 sm:ml-auto">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</p>
              <div className="flex flex-wrap gap-2">
                {["all","active","inactive"].map(s => (
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
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── service cards grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 mb-6">

            {filtered.length === 0 && (
              <div className="col-span-full bg-white rounded-2xl border border-gray-100 shadow-sm p-12 text-center">
                <p className="text-5xl mb-3">✂️</p>
                <h3 className="text-lg font-bold text-gray-800 mb-1">No services found</h3>
                <p className="text-gray-500 text-sm">Try adjusting your filters.</p>
              </div>
            )}

            {filtered.map(sv => (
              <div
                key={sv.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-rose-200 transition-all flex flex-col overflow-hidden"
              >
                {/* card header strip */}
                <div className={`h-1.5 bg-gradient-to-r ${sv.gradient}`} />

                <div className="p-5 flex flex-col flex-1">
                  {/* top row: icon + status */}
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${sv.gradient} flex items-center justify-center text-xl shadow-md`}>
                      {sv.icon}
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full capitalize ${sv.status === "active" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-600"}`}>
                      {sv.status}
                    </span>
                  </div>

                  {/* name + category badge */}
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 className="font-bold text-gray-900 text-base">{sv.name}</h3>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-600">{sv.category}</span>
                  </div>

                  <p className="text-sm text-gray-500 leading-relaxed mb-3">{sv.desc}</p>

                  {/* meta row */}
                  <div className="border-t border-gray-100 pt-3 mt-auto space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">💰 Price</span>
                      <span className="font-bold text-gray-900">{sv.price}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">🕐 Duration</span>
                      <span className="font-bold text-gray-900">{sv.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">👥 Clients</span>
                      <span className="font-bold text-gray-900">{sv.clients}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">⭐ Rating</span>
                      <span className="font-bold text-gray-900">{sv.rating} / 5.0</span>
                    </div>
                  </div>

                  {/* actions */}
                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold py-2 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-500 hover:text-white transition">
                      👁 View
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold py-2 rounded-xl bg-pink-50 text-pink-600 hover:bg-pink-500 hover:text-white transition">
                      ✎ Edit
                    </button>
                    <button
                      onClick={() => handleToggle(sv.id)}
                      className={`w-10 flex items-center justify-center text-base rounded-xl transition ${
                        sv.status === "active"
                          ? "bg-red-50 text-red-500 hover:bg-red-500 hover:text-white"
                          : "bg-emerald-50 text-emerald-600 hover:bg-emerald-500 hover:text-white"
                      }`}
                    >
                      {sv.status === "active" ? "⏸" : "▶"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── category overview row ── */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-gray-100">
              <h3 className="text-base sm:text-lg font-bold text-gray-900">Categories Overview</h3>
            </div>

            <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {["Hair","Makeup","Spa","Nails"].map(cat => {
                const meta  = catMeta[cat];
                const count = services.filter(s => s.category === cat).length;
                const activeCount = services.filter(s => s.category === cat && s.status === "active").length;
                return (
                  <div key={cat} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-rose-50 hover:border-rose-200 border border-transparent transition-all cursor-pointer">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${meta.gradient} flex items-center justify-center text-lg shadow-md shrink-0`}>
                      {meta.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-gray-900 text-sm">{cat}</p>
                      <p className="text-xs text-gray-500">{count} services · {activeCount} active</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default SalonAdminServices;