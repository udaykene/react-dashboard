import React, { useState } from "react";

const SalonAdminRevenue = () => {
  const [activeNav, setActiveNav] = useState("Revenue");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState("month");

  const navItems = [
    { label: "Dashboard", icon: "📊" },
    { label: "Appointments", icon: "📅" },
    { label: "Clients", icon: "👥" },
    { label: "Services", icon: "✂️" },
    { label: "Gallery", icon: "🖼️" },
    { label: "Revenue", icon: "💰" },
    { label: "Settings", icon: "⚙️" },
  ];

  const revenueStats = [
    {
      title: "Total Revenue",
      value: "$45,250",
      icon: "💰",
      gradient: "from-emerald-500 to-teal-500",
      trend: "+23.5%",
      trendUp: true,
    },
    {
      title: "Services Revenue",
      value: "$32,400",
      icon: "✂️",
      gradient: "from-blue-500 to-cyan-500",
      trend: "+18.2%",
      trendUp: true,
    },
    {
      title: "Pending Payments",
      value: "$5,800",
      icon: "⏳",
      gradient: "from-amber-500 to-orange-500",
      trend: "-5.3%",
      trendUp: false,
    },
    {
      title: "This Month",
      value: "$12,050",
      icon: "📅",
      gradient: "from-purple-500 to-pink-500",
      trend: "+12.8%",
      trendUp: true,
    },
  ];

  const monthlyRevenue = [
    { month: "Jan", revenue: 3500, services: 24 },
    { month: "Feb", revenue: 4200, services: 28 },
    { month: "Mar", revenue: 3800, services: 26 },
    { month: "Apr", revenue: 5100, services: 35 },
    { month: "May", revenue: 4800, services: 32 },
    { month: "Jun", revenue: 6200, services: 42 },
    { month: "Jul", revenue: 5800, services: 38 },
    { month: "Aug", revenue: 6500, services: 44 },
    { month: "Sep", revenue: 7100, services: 48 },
    { month: "Oct", revenue: 6800, services: 45 },
    { month: "Nov", revenue: 7500, services: 50 },
    { month: "Dec", revenue: 8200, services: 55 },
  ];

  const recentTransactions = [
    {
      id: 1,
      client: "Sarah Johnson",
      service: "Bridal Makeup Package",
      amount: "$450",
      date: "2026-02-01",
      status: "completed",
      type: "Service Payment",
      avatar: "S",
    },
    {
      id: 2,
      client: "Emily Davis",
      service: "Hair Coloring & Highlights",
      amount: "$325",
      date: "2026-01-30",
      status: "pending",
      type: "Advance Payment",
      avatar: "E",
    },
    {
      id: 3,
      client: "Lisa Morgan",
      service: "Spa Treatment Package",
      amount: "$580",
      date: "2026-01-28",
      status: "completed",
      type: "Full Payment",
      avatar: "L",
    },
    {
      id: 4,
      client: "Jessica Wright",
      service: "Nail Art & Manicure",
      amount: "$280",
      date: "2026-01-26",
      status: "completed",
      type: "Service Payment",
      avatar: "J",
    },
    {
      id: 5,
      client: "Anna Klein",
      service: "Hair Styling Deluxe",
      amount: "$410",
      date: "2026-01-24",
      status: "pending",
      type: "Service Payment",
      avatar: "A",
    },
  ];

  const serviceRevenueBreakdown = [
    { category: "Hair Services", amount: 15500, percentage: 34.3, gradient: "from-rose-500 to-pink-500" },
    { category: "Makeup", amount: 12800, percentage: 28.3, gradient: "from-pink-500 to-fuchsia-500" },
    { category: "Spa & Wellness", amount: 10200, percentage: 22.5, gradient: "from-fuchsia-500 to-purple-500" },
    { category: "Nails & Beauty", amount: 6750, percentage: 14.9, gradient: "from-purple-500 to-rose-500" },
  ];

  const maxRevenue = Math.max(...monthlyRevenue.map((m) => m.revenue));

  return (
    <div className="flex min-h-screen bg-gray-100 w-full overflow-x-hidden">

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-20 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-30 h-full w-64 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white transform transition-transform duration-300 lg:translate-x-0 lg:static lg:z-auto flex flex-col ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        {/* Logo */}
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

        {/* User Section */}
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

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Top Navbar */}
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-xl border-b border-gray-200 px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-gray-600 hover:text-rose-500 text-2xl" onClick={() => setSidebarOpen(true)}>☰</button>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Revenue & Reports</h2>
              <p className="text-xs text-gray-500 hidden sm:block">Track financial performance and insights</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white text-sm font-bold rounded-lg shadow-md shadow-rose-500/30 transition-all">
              <span>📊</span> Generate Report
            </button>
            <button className="relative p-2 rounded-xl hover:bg-gray-100 transition">
              <span className="text-xl">🔔</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full"></span>
            </button>
          </div>
        </header>

        {/* Page Body */}
        <main className="flex-1 p-4 sm:p-6 overflow-auto">

          {/* Revenue Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 mb-6">
            {revenueStats.map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-xl shadow-md group-hover:scale-110 transition-transform`}>
                    {stat.icon}
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${stat.trendUp ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"}`}>
                    {stat.trend}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">{stat.value}</h3>
                <p className="text-sm text-gray-500 mt-1">{stat.title}</p>
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">

            {/* Revenue Chart - 2 columns */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
              <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4 mb-6 pb-4 border-b border-gray-100">
                <h3 className="text-lg font-bold text-gray-900">Revenue Overview</h3>
                <div className="flex gap-2 w-full sm:w-auto">
                  {["week", "month", "year"].map((period) => (
                    <button
                      key={period}
                      onClick={() => setSelectedPeriod(period)}
                      className={`flex-1 sm:flex-initial rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all capitalize ${
                        selectedPeriod === period
                          ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-md"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bar Chart */}
              <div className="flex h-[240px] sm:h-[280px] items-end justify-between gap-1 sm:gap-2">
                {monthlyRevenue.map((data, index) => (
                  <div key={index} className="group flex flex-1 flex-col items-center gap-2">
                    <div className="relative w-full">
                      <div
                        className="w-full rounded-t-lg bg-gradient-to-t from-rose-500 to-pink-500 transition-all duration-500 hover:from-rose-600 hover:to-pink-600"
                        style={{
                          height: `${(data.revenue / maxRevenue) * 220}px`,
                          minHeight: "20px",
                        }}
                      >
                        <div className="absolute -top-10 left-1/2 hidden -translate-x-1/2 rounded-lg bg-gray-900 px-3 py-2 text-xs font-semibold text-white shadow-lg group-hover:block whitespace-nowrap z-10">
                          ${(data.revenue / 1000).toFixed(1)}K
                          <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-gray-900"></div>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-gray-500">{data.month}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Revenue Breakdown - 1 column */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
              <div className="mb-6 pb-4 border-b border-gray-100">
                <h3 className="text-lg font-bold text-gray-900">Revenue by Service</h3>
              </div>

              <div className="flex flex-col gap-3">
                {serviceRevenueBreakdown.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all group">
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white text-lg shadow-md group-hover:scale-110 transition-transform flex-shrink-0`}>
                        {index === 0 ? "💇" : index === 1 ? "💄" : index === 2 ? "💆" : "💅"}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-bold text-gray-900 truncate">{item.category}</p>
                        <p className="text-xs text-gray-500">{item.percentage}% of total</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-gray-900 flex-shrink-0 ml-2">
                      ${(item.amount / 1000).toFixed(1)}K
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Total Revenue</span>
                  <span className="text-xl font-bold text-gray-900">$45.3K</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">Recent Transactions</h3>
              <button className="text-sm font-semibold text-rose-500 hover:text-rose-600 hover:bg-rose-50 px-3 py-1 rounded-lg transition">
                View All
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex flex-col sm:flex-row items-start justify-between gap-4 p-4 rounded-xl bg-gray-50 hover:bg-white hover:border-rose-200 border border-transparent transition-all"
                >
                  {/* Left Side */}
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white text-lg font-bold shadow-md shrink-0">
                      {transaction.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-gray-900 mb-1">{transaction.client}</h4>
                      <p className="text-xs text-gray-500 mb-2 truncate flex items-center gap-2">
                        <span>✂️</span>
                        {transaction.service}
                      </p>
                      <span className="inline-block rounded-md bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-600">
                        {transaction.type}
                      </span>
                    </div>
                  </div>

                  {/* Right Side */}
                  <div className="flex items-center justify-between gap-4 w-full sm:w-auto sm:flex-shrink-0">
                    <div className="flex flex-col items-start sm:items-end">
                      <span className="text-lg font-bold text-gray-900">{transaction.amount}</span>
                      <span className="text-xs text-gray-400">{transaction.date}</span>
                    </div>
                    <span className={`rounded-lg px-3 py-1.5 text-xs font-bold capitalize whitespace-nowrap ${
                      transaction.status === "completed"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-amber-50 text-amber-600"
                    }`}>
                      {transaction.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-end">
            <button className="flex items-center justify-center gap-2 px-5 py-2.5 border-2 border-gray-200 bg-white text-gray-700 font-semibold rounded-lg hover:border-rose-500 hover:bg-rose-50 hover:text-rose-600 transition-all">
              <span className="text-lg">📥</span>
              Export Report
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold rounded-lg shadow-md shadow-rose-500/30 transition-all">
              <span className="text-lg">📊</span>
              Generate Report
            </button>
          </div>

        </main>
      </div>
    </div>
  );
};

export default SalonAdminRevenue;