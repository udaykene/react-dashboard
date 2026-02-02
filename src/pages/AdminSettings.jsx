import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState("general");
  
  // State management (Keeping your logic intact)
  const [generalSettings, setGeneralSettings] = useState({
    companyName: "Parth Builders",
    email: "info@parthbuilders.com",
    phone: "+91 98765 43210",
    address: "123 Construction Avenue, Mumbai, Maharashtra",
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
    projectUpdates: true,
    weeklyReports: false,
  });

  const [security, setSecurity] = useState({
    twoFactorAuth: false,
    sessionTimeout: "30",
    passwordExpiry: "90",
    loginAttempts: "5",
  });

  const [business, setBusiness] = useState({
    workingHours: "9:00 AM - 6:00 PM",
    workingDays: "Monday to Saturday",
    appointmentDuration: "60",
    advanceBookingDays: "30",
    cancellationPolicy: "24 hours",
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("Settings saved successfully!");
    }, 1000);
  };

  const tabs = [
    { id: "general", label: "General", icon: "ri-settings-3-line" },
    { id: "notifications", label: "Notifications", icon: "ri-notification-3-line" },
    { id: "security", label: "Security", icon: "ri-shield-check-line" },
    { id: "business", label: "Business", icon: "ri-briefcase-line" },
    { id: "integrations", label: "Integrations", icon: "ri-plug-line" },
    { id: "billing", label: "Billing", icon: "ri-bank-card-line" },
  ];

  const integrations = [
    { name: "Google Calendar", description: "Sync appointments", icon: "ri-calendar-line", status: "connected", color: "#3b82f6" },
    { name: "Stripe Payments", description: "Process payments", icon: "ri-bank-card-line", status: "connected", color: "#8b5cf6" },
    { name: "WhatsApp Business", description: "Send notifications", icon: "ri-whatsapp-line", status: "disconnected", color: "#10b981" },
    { name: "Google Drive", description: "Store documents", icon: "ri-google-line", status: "connected", color: "#f59e0b" },
    { name: "Slack", description: "Team communication", icon: "ri-slack-line", status: "disconnected", color: "#ef4444" },
    { name: "QuickBooks", description: "Accounting integration", icon: "ri-money-dollar-circle-line", status: "disconnected", color: "#06b6d4" },
  ];

  return (
    <AdminLayout>
      <div className="flex flex-col h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        
        {/* Header Section: Stack on mobile, side-by-side on desktop */}
        <div className="mb-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="space-y-1">
            <h1 className="text-3xl font-extrabold tracking-tight text-[#1e293b] sm:text-4xl">Settings</h1>
            <p className="text-sm text-[#64748b] sm:text-base">
              Configure your application preferences and settings
            </p>
          </div>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="w-full md:w-auto flex items-center justify-center gap-2 rounded-xl bg-[#f59e0b] px-8 py-3.5 font-bold text-white shadow-lg shadow-orange-200 transition-all hover:bg-[#d97706] active:scale-95 disabled:opacity-50"
          >
            <i className={isSaving ? "ri-loader-4-line animate-spin" : "ri-save-line"}></i>
            {isSaving ? "Saving..." : "Save Changes"}
          </button>
        </div>

        {/* Tabs Navigation: Horizontal scroll on mobile */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2 scrollbar-hide rounded-xl bg-white p-2 shadow-sm border border-slate-100">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex min-w-fit items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? "bg-[#fef3c7] text-[#d97706] shadow-sm"
                  : "text-[#64748b] hover:bg-[#f8fafc] hover:text-[#1e293b]"
              }`}
            >
              <i className={`${tab.icon} text-lg`}></i>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 space-y-6">
          
          {/* General Settings */}
          {activeTab === "general" && (
            <div className="rounded-2xl bg-white p-5 sm:p-8 shadow-sm border border-slate-100 animate-in fade-in slide-in-from-bottom-2">
              <div className="mb-8 border-b border-slate-100 pb-5">
                <h2 className="text-xl font-bold text-[#1e293b]">General Settings</h2>
                <p className="text-sm text-[#64748b]">Manage basic company info and regional preferences</p>
              </div>

              <div className="grid grid-cols-1 gap-y-6 gap-x-8 md:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-[#1e293b] px-1">Company Name</label>
                  <input
                    type="text"
                    value={generalSettings.companyName}
                    onChange={(e) => setGeneralSettings({ ...generalSettings, companyName: e.target.value })}
                    className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-3.5 text-slate-700 outline-none transition-all focus:bg-white focus:border-[#f59e0b] focus:ring-4 focus:ring-[#f59e0b]/10"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-[#1e293b] px-1">Email Address</label>
                  <input
                    type="email"
                    value={generalSettings.email}
                    onChange={(e) => setGeneralSettings({ ...generalSettings, email: e.target.value })}
                    className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-3.5 text-slate-700 outline-none transition-all focus:bg-white focus:border-[#f59e0b] focus:ring-4 focus:ring-[#f59e0b]/10"
                  />
                </div>

                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label className="text-sm font-bold text-[#1e293b] px-1">Address</label>
                  <textarea
                    rows="3"
                    value={generalSettings.address}
                    onChange={(e) => setGeneralSettings({ ...generalSettings, address: e.target.value })}
                    className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-3.5 text-slate-700 outline-none transition-all focus:bg-white focus:border-[#f59e0b] focus:ring-4 focus:ring-[#f59e0b]/10"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-[#1e293b] px-1">Currency</label>
                  <select 
                    value={generalSettings.currency}
                    className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-3.5 text-slate-700 outline-none focus:bg-white focus:border-[#f59e0b]"
                  >
                    <option>INR (₹)</option>
                    <option>USD ($)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Integration Grid: Responsive Cards */}
          {activeTab === "integrations" && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {integrations.map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between hover:border-orange-200 transition-colors">
                   <div className="flex items-center gap-4 mb-4">
                      <div className="h-12 w-12 rounded-xl flex items-center justify-center text-white shrink-0" style={{backgroundColor: item.color}}>
                        <i className={`${item.icon} text-xl`}></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">{item.name}</h4>
                        <p className="text-xs text-slate-500">{item.description}</p>
                      </div>
                   </div>
                   <button className={`w-full py-2 rounded-lg text-sm font-bold transition-all ${
                     item.status === 'connected' ? 'bg-red-50 text-red-600 hover:bg-red-100' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                   }`}>
                     {item.status === 'connected' ? 'Disconnect' : 'Connect'}
                   </button>
                </div>
              ))}
            </div>
          )}

          {/* Security & Notification: Toggle Items */}
          {(activeTab === "notifications" || activeTab === "security") && (
            <div className="space-y-4">
                {/* Example of responsive toggle row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-white rounded-2xl border border-slate-100 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
                        <i className="ri-shield-keyhole-line text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-base">Two-Factor Authentication</h4>
                      <p className="text-sm text-slate-500">Secure your account with SMS codes</p>
                    </div>
                  </div>
                  <label className="relative inline-flex cursor-pointer items-center self-end sm:self-center">
                    <input type="checkbox" className="peer sr-only" />
                    <div className="peer h-7 w-14 rounded-full bg-slate-200 after:absolute after:left-[4px] after:top-[4px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:bg-[#10b981] peer-checked:after:translate-x-7"></div>
                  </label>
                </div>
            </div>
          )}

        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;