import React, { useState } from "react";

const SalonAdminSettings = () => {
  const [activeNav, setActiveNav] = useState("Settings");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("general");
  
  // State management
  const [generalSettings, setGeneralSettings] = useState({
    salonName: "Bella Beauty Salon",
    email: "hello@bella.com",
    phone: "+1 (555) 123-4567",
    address: "123 Beauty Avenue, Downtown District, City 12345",
    timezone: "Asia/Kolkata",
    language: "English",
    currency: "INR",
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    appointmentReminders: true,
    paymentAlerts: true,
    serviceUpdates: true,
    weeklyReports: false,
  });

  const [security, setSecurity] = useState({
    twoFactorAuth: false,
    sessionTimeout: "30",
    passwordExpiry: "90",
    loginAttempts: "5",
  });

  const [business, setBusiness] = useState({
    workingHours: "9:00 AM - 8:00 PM",
    workingDays: "Monday to Saturday",
    appointmentDuration: "60",
    advanceBookingDays: "30",
    cancellationPolicy: "24 hours notice required for cancellations",
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("Settings saved successfully!");
    }, 1000);
  };

  const navItems = [
    { label: "Dashboard", icon: "📊" },
    { label: "Appointments", icon: "📅" },
    { label: "Clients", icon: "👥" },
    { label: "Services", icon: "✂️" },
    { label: "Gallery", icon: "🖼️" },
    { label: "Revenue", icon: "💰" },
    { label: "Settings", icon: "⚙️" },
  ];

  const tabs = [
    { id: "general", label: "General", icon: "💅" },
    { id: "notifications", label: "Notifications", icon: "🔔" },
    { id: "security", label: "Security", icon: "🔒" },
    { id: "business", label: "Business", icon: "💼" },
    { id: "integrations", label: "Integrations", icon: "🔗" },
    { id: "billing", label: "Billing", icon: "💳" },
  ];

  const integrations = [
    { name: "Google Calendar", description: "Sync appointments", icon: "📅", status: "connected", gradient: "from-blue-500 to-blue-600" },
    { name: "Payment Gateway", description: "Process payments", icon: "💳", status: "connected", gradient: "from-purple-500 to-pink-500" },
    { name: "WhatsApp Business", description: "Send notifications", icon: "💬", status: "disconnected", gradient: "from-green-500 to-emerald-600" },
    { name: "Instagram", description: "Social media sync", icon: "📸", status: "connected", gradient: "from-pink-500 to-rose-500" },
    { name: "Email Marketing", description: "Customer campaigns", icon: "📧", status: "disconnected", gradient: "from-amber-500 to-orange-500" },
    { name: "SMS Gateway", description: "Text reminders", icon: "📱", status: "connected", gradient: "from-cyan-500 to-blue-500" },
  ];

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
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Settings</h2>
              <p className="text-xs text-gray-500 hidden sm:block">Configure your salon preferences and settings</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white text-sm font-bold rounded-lg shadow-md shadow-rose-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSaving ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Saving...
                </>
              ) : (
                <>
                  <span>💾</span> Save
                </>
              )}
            </button>
            <button className="relative p-2 rounded-xl hover:bg-gray-100 transition">
              <span className="text-xl">🔔</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full"></span>
            </button>
          </div>
        </header>

        {/* Page Body */}
        <main className="flex-1 p-4 sm:p-6 overflow-auto">

          {/* Tabs Navigation */}
          <div className="mb-6">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex min-w-fit items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-500/20"
                      : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="space-y-6">
            
            {/* General Settings */}
            {activeTab === "general" && (
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
                <div className="mb-6 pb-4 border-b border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <span>💅</span> General Settings
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">Manage your salon's basic information</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-700">Salon Name</label>
                    <input
                      type="text"
                      value={generalSettings.salonName}
                      onChange={(e) => setGeneralSettings({ ...generalSettings, salonName: e.target.value })}
                      className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-gray-700 outline-none transition-all focus:bg-white focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-700">Email Address</label>
                    <input
                      type="email"
                      value={generalSettings.email}
                      onChange={(e) => setGeneralSettings({ ...generalSettings, email: e.target.value })}
                      className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-gray-700 outline-none transition-all focus:bg-white focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      value={generalSettings.phone}
                      onChange={(e) => setGeneralSettings({ ...generalSettings, phone: e.target.value })}
                      className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-gray-700 outline-none transition-all focus:bg-white focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-700">Currency</label>
                    <select 
                      value={generalSettings.currency}
                      onChange={(e) => setGeneralSettings({ ...generalSettings, currency: e.target.value })}
                      className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-gray-700 outline-none transition-all focus:bg-white focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                    >
                      <option>INR (₹)</option>
                      <option>USD ($)</option>
                      <option>EUR (€)</option>
                      <option>GBP (£)</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-sm font-bold text-gray-700">Salon Address</label>
                    <textarea
                      rows="3"
                      value={generalSettings.address}
                      onChange={(e) => setGeneralSettings({ ...generalSettings, address: e.target.value })}
                      className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-gray-700 outline-none transition-all focus:bg-white focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Settings */}
            {activeTab === "notifications" && (
              <div className="space-y-3">
                <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
                  <div className="mb-6 pb-4 border-b border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                      <span>🔔</span> Notification Preferences
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">Control how you receive updates and alerts</p>
                  </div>

                  <div className="space-y-4">
                    {[
                      { key: 'emailNotifications', label: 'Email Notifications', desc: 'Receive updates via email', icon: '📧' },
                      { key: 'smsNotifications', label: 'SMS Notifications', desc: 'Text message alerts', icon: '💬' },
                      { key: 'pushNotifications', label: 'Push Notifications', desc: 'Browser push notifications', icon: '🔔' },
                      { key: 'appointmentReminders', label: 'Appointment Reminders', desc: 'Upcoming booking alerts', icon: '📅' },
                      { key: 'paymentAlerts', label: 'Payment Alerts', desc: 'Transaction notifications', icon: '💳' },
                      { key: 'serviceUpdates', label: 'Service Updates', desc: 'New services and offers', icon: '✨' },
                      { key: 'weeklyReports', label: 'Weekly Reports', desc: 'Business analytics summary', icon: '📊' },
                    ].map((item) => (
                      <div key={item.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-rose-200 transition-all">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center text-lg">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-800 text-sm">{item.label}</h4>
                            <p className="text-xs text-gray-500">{item.desc}</p>
                          </div>
                        </div>
                        <label className="relative inline-flex cursor-pointer items-center">
                          <input 
                            type="checkbox" 
                            className="peer sr-only"
                            checked={notifications[item.key]}
                            onChange={(e) => setNotifications({ ...notifications, [item.key]: e.target.checked })}
                          />
                          <div className="peer h-6 w-12 rounded-full bg-gray-300 after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:shadow-sm peer-checked:bg-gradient-to-r peer-checked:from-rose-500 peer-checked:to-pink-500 peer-checked:after:translate-x-6"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Security Settings */}
            {activeTab === "security" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
                  <div className="mb-6 pb-4 border-b border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                      <span>🔒</span> Security Settings
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">Protect your account with advanced security</p>
                  </div>

                  {/* Two-Factor Auth */}
                  <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl border border-purple-100 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-lg text-white">
                        🔐
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm">Two-Factor Authentication</h4>
                        <p className="text-xs text-gray-500">Secure your account with SMS codes</p>
                      </div>
                    </div>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input 
                        type="checkbox" 
                        className="peer sr-only"
                        checked={security.twoFactorAuth}
                        onChange={(e) => setSecurity({ ...security, twoFactorAuth: e.target.checked })}
                      />
                      <div className="peer h-6 w-12 rounded-full bg-gray-300 after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:shadow-sm peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-pink-500 peer-checked:after:translate-x-6"></div>
                    </label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-gray-700">Session Timeout (minutes)</label>
                      <select 
                        value={security.sessionTimeout}
                        onChange={(e) => setSecurity({ ...security, sessionTimeout: e.target.value })}
                        className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-gray-700 outline-none transition-all focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                      >
                        <option value="15">15 minutes</option>
                        <option value="30">30 minutes</option>
                        <option value="60">60 minutes</option>
                        <option value="120">2 hours</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-gray-700">Password Expiry (days)</label>
                      <select 
                        value={security.passwordExpiry}
                        onChange={(e) => setSecurity({ ...security, passwordExpiry: e.target.value })}
                        className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-gray-700 outline-none transition-all focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                      >
                        <option value="30">30 days</option>
                        <option value="60">60 days</option>
                        <option value="90">90 days</option>
                        <option value="never">Never</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Business Settings */}
            {activeTab === "business" && (
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
                <div className="mb-6 pb-4 border-b border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <span>💼</span> Business Hours & Policies
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">Configure operating schedule and policies</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-700">Working Hours</label>
                    <input
                      type="text"
                      value={business.workingHours}
                      onChange={(e) => setBusiness({ ...business, workingHours: e.target.value })}
                      className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-gray-700 outline-none transition-all focus:bg-white focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-700">Working Days</label>
                    <input
                      type="text"
                      value={business.workingDays}
                      onChange={(e) => setBusiness({ ...business, workingDays: e.target.value })}
                      className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-gray-700 outline-none transition-all focus:bg-white focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-700">Appointment Duration (min)</label>
                    <select 
                      value={business.appointmentDuration}
                      onChange={(e) => setBusiness({ ...business, appointmentDuration: e.target.value })}
                      className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-gray-700 outline-none transition-all focus:bg-white focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                    >
                      <option value="30">30 minutes</option>
                      <option value="60">60 minutes</option>
                      <option value="90">90 minutes</option>
                      <option value="120">120 minutes</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-700">Advance Booking (days)</label>
                    <input
                      type="number"
                      value={business.advanceBookingDays}
                      onChange={(e) => setBusiness({ ...business, advanceBookingDays: e.target.value })}
                      className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-gray-700 outline-none transition-all focus:bg-white focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                    />
                  </div>

                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-sm font-bold text-gray-700">Cancellation Policy</label>
                    <textarea
                      rows="3"
                      value={business.cancellationPolicy}
                      onChange={(e) => setBusiness({ ...business, cancellationPolicy: e.target.value })}
                      className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-gray-700 outline-none transition-all focus:bg-white focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Integrations */}
            {activeTab === "integrations" && (
              <div>
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <span>🔗</span> Connected Services
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">Manage third-party integrations</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {integrations.map((item, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-rose-200 transition-all">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`h-12 w-12 rounded-xl flex items-center justify-center text-2xl shrink-0 bg-gradient-to-br ${item.gradient} shadow-md`}>
                          {item.icon}
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-bold text-gray-800 text-sm truncate">{item.name}</h4>
                          <p className="text-xs text-gray-500 truncate">{item.description}</p>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold ${
                          item.status === 'connected' 
                            ? 'bg-emerald-50 text-emerald-700' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {item.status === 'connected' ? '✓ Connected' : '○ Disconnected'}
                        </span>
                      </div>

                      <button className={`w-full py-2 rounded-lg text-xs font-bold transition-all ${
                        item.status === 'connected' 
                          ? 'bg-red-50 text-red-600 hover:bg-red-100 border border-red-200' 
                          : 'bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:from-rose-600 hover:to-pink-600 shadow-sm'
                      }`}>
                        {item.status === 'connected' ? 'Disconnect' : 'Connect'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Billing */}
            {activeTab === "billing" && (
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
                <div className="mb-6 pb-4 border-b border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <span>💳</span> Billing & Subscription
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">Manage subscription and payment methods</p>
                </div>

                {/* Current Plan Card */}
                <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl p-6 text-white mb-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <div className="text-sm opacity-90 mb-1">Current Plan</div>
                      <div className="text-2xl font-bold mb-2">Premium Plan</div>
                      <div className="text-sm opacity-90">Unlimited appointments • Priority support</div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">$2,999</div>
                      <div className="text-sm opacity-90">/month</div>
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="space-y-4">
                  <h4 className="text-base font-bold text-gray-900">Payment Methods</h4>
                  
                  <div className="border border-gray-200 rounded-xl p-4 hover:border-rose-300 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-lg">
                          💳
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 text-sm">•••• •••• •••• 4242</div>
                          <div className="text-xs text-gray-500">Expires 12/25</div>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold">Default</span>
                    </div>
                  </div>

                  <button className="w-full sm:w-auto px-4 py-2 border-2 border-rose-500 text-rose-500 font-bold rounded-xl hover:bg-rose-50 transition-all text-sm">
                    + Add Payment Method
                  </button>
                </div>
              </div>
            )}
          </div>

        </main>
      </div>
    </div>
  );
};

export default SalonAdminSettings;