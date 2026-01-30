import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState("general");
  
  // General Settings State
  const [generalSettings, setGeneralSettings] = useState({
    companyName: "Parth Builders",
    email: "info@parthbuilders.com",
    phone: "+91 98765 43210",
    address: "123 Construction Avenue, Mumbai, Maharashtra",
    timezone: "Asia/Kolkata",
    language: "English",
    currency: "INR",
  });

  // Notification Settings State
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    appointmentReminders: true,
    paymentAlerts: true,
    projectUpdates: true,
    weeklyReports: false,
  });

  // Security Settings State
  const [security, setSecurity] = useState({
    twoFactorAuth: false,
    sessionTimeout: "30",
    passwordExpiry: "90",
    loginAttempts: "5",
  });

  // Business Settings State
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
    {
      name: "Google Calendar",
      description: "Sync appointments with Google Calendar",
      icon: "ri-calendar-line",
      status: "connected",
      color: "#3b82f6",
    },
    {
      name: "Stripe Payments",
      description: "Process payments through Stripe",
      icon: "ri-bank-card-line",
      status: "connected",
      color: "#8b5cf6",
    },
    {
      name: "WhatsApp Business",
      description: "Send notifications via WhatsApp",
      icon: "ri-whatsapp-line",
      status: "disconnected",
      color: "#10b981",
    },
    {
      name: "Google Drive",
      description: "Store documents in Google Drive",
      icon: "ri-google-line",
      status: "connected",
      color: "#f59e0b",
    },
    {
      name: "Slack",
      description: "Team communication and alerts",
      icon: "ri-slack-line",
      status: "disconnected",
      color: "#ef4444",
    },
    {
      name: "QuickBooks",
      description: "Accounting and invoicing integration",
      icon: "ri-money-dollar-circle-line",
      status: "disconnected",
      color: "#06b6d4",
    },
  ];

  return (
    <AdminLayout>
      <div className="flex h-screen flex-col overflow-hidden">
        {/* Header Section */}
        <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="m-0 text-[2rem] font-bold text-[#1e293b]">Settings</h1>
            <p className="m-0 text-[1rem] text-[#64748b]">
              Configure your application preferences and settings
            </p>
          </div>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center gap-2 rounded-lg bg-[#f59e0b] px-6 py-3 font-semibold text-white transition-all hover:bg-[#d97706] disabled:opacity-50"
          >
            <i className={isSaving ? "ri-loader-4-line animate-spin" : "ri-save-line"}></i>
            {isSaving ? "Saving..." : "Save Changes"}
          </button>
        </div>

        {/* Tabs Navigation */}
        <div className="mb-6 flex gap-2 overflow-x-auto rounded-[12px] bg-white p-2 shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex min-w-fit items-center gap-2 rounded-lg px-5 py-3 text-[0.875rem] font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-[#fef3c7] text-[#d97706]"
                  : "text-[#64748b] hover:bg-[#f1f5f9]"
              }`}
            >
              <i className={`${tab.icon} text-[1.125rem]`}></i>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="no-scrollbar flex-1 overflow-y-auto">
          {/* General Settings */}
          {activeTab === "general" && (
            <div className="rounded-[12px] bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
              <div className="mb-6 border-b-2 border-[#f1f5f9] pb-4">
                <h2 className="m-0 mb-2 text-[1.5rem] font-bold text-[#1e293b]">
                  General Settings
                </h2>
                <p className="m-0 text-[0.875rem] text-[#64748b]">
                  Manage your basic company information and preferences
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-[0.875rem] font-semibold text-[#1e293b]">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={generalSettings.companyName}
                    onChange={(e) =>
                      setGeneralSettings({ ...generalSettings, companyName: e.target.value })
                    }
                    className="rounded-lg border-2 border-[#e2e8f0] p-3 text-[1rem] text-[#1e293b] outline-none transition-all focus:border-[#f59e0b] focus:ring-4 focus:ring-[#f59e0b]/10"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[0.875rem] font-semibold text-[#1e293b]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={generalSettings.email}
                    onChange={(e) =>
                      setGeneralSettings({ ...generalSettings, email: e.target.value })
                    }
                    className="rounded-lg border-2 border-[#e2e8f0] p-3 text-[1rem] text-[#1e293b] outline-none transition-all focus:border-[#f59e0b] focus:ring-4 focus:ring-[#f59e0b]/10"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[0.875rem] font-semibold text-[#1e293b]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={generalSettings.phone}
                    onChange={(e) =>
                      setGeneralSettings({ ...generalSettings, phone: e.target.value })
                    }
                    className="rounded-lg border-2 border-[#e2e8f0] p-3 text-[1rem] text-[#1e293b] outline-none transition-all focus:border-[#f59e0b] focus:ring-4 focus:ring-[#f59e0b]/10"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[0.875rem] font-semibold text-[#1e293b]">
                    Timezone
                  </label>
                  <select
                    value={generalSettings.timezone}
                    onChange={(e) =>
                      setGeneralSettings({ ...generalSettings, timezone: e.target.value })
                    }
                    className="rounded-lg border-2 border-[#e2e8f0] p-3 text-[1rem] text-[#1e293b] outline-none transition-all focus:border-[#f59e0b] focus:ring-4 focus:ring-[#f59e0b]/10"
                  >
                    <option>Asia/Kolkata</option>
                    <option>America/New_York</option>
                    <option>Europe/London</option>
                    <option>Asia/Tokyo</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-[0.875rem] font-semibold text-[#1e293b]">
                    Address
                  </label>
                  <textarea
                    value={generalSettings.address}
                    onChange={(e) =>
                      setGeneralSettings({ ...generalSettings, address: e.target.value })
                    }
                    rows="3"
                    className="rounded-lg border-2 border-[#e2e8f0] p-3 text-[1rem] text-[#1e293b] outline-none transition-all focus:border-[#f59e0b] focus:ring-4 focus:ring-[#f59e0b]/10"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[0.875rem] font-semibold text-[#1e293b]">
                    Language
                  </label>
                  <select
                    value={generalSettings.language}
                    onChange={(e) =>
                      setGeneralSettings({ ...generalSettings, language: e.target.value })
                    }
                    className="rounded-lg border-2 border-[#e2e8f0] p-3 text-[1rem] text-[#1e293b] outline-none transition-all focus:border-[#f59e0b] focus:ring-4 focus:ring-[#f59e0b]/10"
                  >
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Marathi</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[0.875rem] font-semibold text-[#1e293b]">
                    Currency
                  </label>
                  <select
                    value={generalSettings.currency}
                    onChange={(e) =>
                      setGeneralSettings({ ...generalSettings, currency: e.target.value })
                    }
                    className="rounded-lg border-2 border-[#e2e8f0] p-3 text-[1rem] text-[#1e293b] outline-none transition-all focus:border-[#f59e0b] focus:ring-4 focus:ring-[#f59e0b]/10"
                  >
                    <option>INR (₹)</option>
                    <option>USD ($)</option>
                    <option>EUR (€)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Notifications Settings */}
          {activeTab === "notifications" && (
            <div className="rounded-[12px] bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
              <div className="mb-6 border-b-2 border-[#f1f5f9] pb-4">
                <h2 className="m-0 mb-2 text-[1.5rem] font-bold text-[#1e293b]">
                  Notification Preferences
                </h2>
                <p className="m-0 text-[0.875rem] text-[#64748b]">
                  Control how and when you receive notifications
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {[
                  { key: "emailNotifications", label: "Email Notifications", desc: "Receive notifications via email" },
                  { key: "smsNotifications", label: "SMS Notifications", desc: "Get text message alerts" },
                  { key: "pushNotifications", label: "Push Notifications", desc: "Browser push notifications" },
                  { key: "appointmentReminders", label: "Appointment Reminders", desc: "Reminders for upcoming appointments" },
                  { key: "paymentAlerts", label: "Payment Alerts", desc: "Notifications for payment updates" },
                  { key: "projectUpdates", label: "Project Updates", desc: "Updates on project progress" },
                  { key: "weeklyReports", label: "Weekly Reports", desc: "Receive weekly summary reports" },
                ].map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between rounded-lg border-2 border-[#e2e8f0] bg-[#f8fafc] p-5 transition-all hover:border-[#f59e0b]"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ri-notification-3-line text-[1.5rem] text-[#f59e0b]"></i>
                      <div>
                        <h3 className="m-0 text-[1rem] font-semibold text-[#1e293b]">
                          {item.label}
                        </h3>
                        <p className="m-0 text-[0.875rem] text-[#64748b]">{item.desc}</p>
                      </div>
                    </div>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input
                        type="checkbox"
                        checked={notifications[item.key]}
                        onChange={(e) =>
                          setNotifications({ ...notifications, [item.key]: e.target.checked })
                        }
                        className="peer sr-only"
                      />
                      <div className="peer h-7 w-14 rounded-full bg-[#cbd5e1] after:absolute after:left-[4px] after:top-[4px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:bg-[#f59e0b] peer-checked:after:translate-x-7"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Security Settings */}
          {activeTab === "security" && (
            <div className="rounded-[12px] bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
              <div className="mb-6 border-b-2 border-[#f1f5f9] pb-4">
                <h2 className="m-0 mb-2 text-[1.5rem] font-bold text-[#1e293b]">
                  Security Settings
                </h2>
                <p className="m-0 text-[0.875rem] text-[#64748b]">
                  Manage security and authentication settings
                </p>
              </div>

              <div className="mb-8 flex items-center justify-between rounded-lg border-2 border-[#e2e8f0] bg-[#f8fafc] p-5">
                <div className="flex items-center gap-4">
                  <i className="ri-shield-check-line text-[1.5rem] text-[#10b981]"></i>
                  <div>
                    <h3 className="m-0 text-[1rem] font-semibold text-[#1e293b]">
                      Two-Factor Authentication
                    </h3>
                    <p className="m-0 text-[0.875rem] text-[#64748b]">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    checked={security.twoFactorAuth}
                    onChange={(e) =>
                      setSecurity({ ...security, twoFactorAuth: e.target.checked })
                    }
                    className="peer sr-only"
                  />
                  <div className="peer h-7 w-14 rounded-full bg-[#cbd5e1] after:absolute after:left-[4px] after:top-[4px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:bg-[#10b981] peer-checked:after:translate-x-7"></div>
                </label>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-[0.875rem] font-semibold text-[#1e293b]">
                    Session Timeout (minutes)
                  </label>
                  <input
                    type="number"
                    value={security.sessionTimeout}
                    onChange={(e) =>
                      setSecurity({ ...security, sessionTimeout: e.target.value })
                    }
                    className="rounded-lg border-2 border-[#e2e8f0] p-3 text-[1rem] text-[#1e293b] outline-none transition-all focus:border-[#f59e0b] focus:ring-4 focus:ring-[#f59e0b]/10"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[0.875rem] font-semibold text-[#1e293b]">
                    Password Expiry (days)
                  </label>
                  <input
                    type="number"
                    value={security.passwordExpiry}
                    onChange={(e) =>
                      setSecurity({ ...security, passwordExpiry: e.target.value })
                    }
                    className="rounded-lg border-2 border-[#e2e8f0] p-3 text-[1rem] text-[#1e293b] outline-none transition-all focus:border-[#f59e0b] focus:ring-4 focus:ring-[#f59e0b]/10"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[0.875rem] font-semibold text-[#1e293b]">
                    Max Login Attempts
                  </label>
                  <input
                    type="number"
                    value={security.loginAttempts}
                    onChange={(e) =>
                      setSecurity({ ...security, loginAttempts: e.target.value })
                    }
                    className="rounded-lg border-2 border-[#e2e8f0] p-3 text-[1rem] text-[#1e293b] outline-none transition-all focus:border-[#f59e0b] focus:ring-4 focus:ring-[#f59e0b]/10"
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <button className="flex items-center justify-center gap-2 rounded-lg border-2 border-[#f59e0b] bg-white px-6 py-3 text-[1rem] font-semibold text-[#f59e0b] transition-all hover:bg-[#f59e0b] hover:text-white">
                  <i className="ri-lock-password-line"></i>
                  Change Password
                </button>
                <button className="flex items-center justify-center gap-2 rounded-lg border-2 border-[#ef4444] bg-white px-6 py-3 text-[1rem] font-semibold text-[#ef4444] transition-all hover:bg-[#ef4444] hover:text-white">
                  <i className="ri-logout-box-line"></i>
                  Log Out All Devices
                </button>
              </div>
            </div>
          )}

          {/* Business Settings */}
          {activeTab === "business" && (
            <div className="rounded-[12px] bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
              <div className="mb-6 border-b-2 border-[#f1f5f9] pb-4">
                <h2 className="m-0 mb-2 text-[1.5rem] font-bold text-[#1e293b]">
                  Business Settings
                </h2>
                <p className="m-0 text-[0.875rem] text-[#64748b]">
                  Configure your business hours and policies
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-[0.875rem] font-semibold text-[#1e293b]">
                    Working Hours
                  </label>
                  <input
                    type="text"
                    value={business.workingHours}
                    onChange={(e) =>
                      setBusiness({ ...business, workingHours: e.target.value })
                    }
                    className="rounded-lg border-2 border-[#e2e8f0] p-3 text-[1rem] text-[#1e293b] outline-none transition-all focus:border-[#f59e0b] focus:ring-4 focus:ring-[#f59e0b]/10"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[0.875rem] font-semibold text-[#1e293b]">
                    Working Days
                  </label>
                  <input
                    type="text"
                    value={business.workingDays}
                    onChange={(e) =>
                      setBusiness({ ...business, workingDays: e.target.value })
                    }
                    className="rounded-lg border-2 border-[#e2e8f0] p-3 text-[1rem] text-[#1e293b] outline-none transition-all focus:border-[#f59e0b] focus:ring-4 focus:ring-[#f59e0b]/10"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[0.875rem] font-semibold text-[#1e293b]">
                    Appointment Duration (minutes)
                  </label>
                  <select
                    value={business.appointmentDuration}
                    onChange={(e) =>
                      setBusiness({ ...business, appointmentDuration: e.target.value })
                    }
                    className="rounded-lg border-2 border-[#e2e8f0] p-3 text-[1rem] text-[#1e293b] outline-none transition-all focus:border-[#f59e0b] focus:ring-4 focus:ring-[#f59e0b]/10"
                  >
                    <option value="30">30 minutes</option>
                    <option value="60">60 minutes</option>
                    <option value="90">90 minutes</option>
                    <option value="120">120 minutes</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[0.875rem] font-semibold text-[#1e293b]">
                    Advance Booking (days)
                  </label>
                  <input
                    type="number"
                    value={business.advanceBookingDays}
                    onChange={(e) =>
                      setBusiness({ ...business, advanceBookingDays: e.target.value })
                    }
                    className="rounded-lg border-2 border-[#e2e8f0] p-3 text-[1rem] text-[#1e293b] outline-none transition-all focus:border-[#f59e0b] focus:ring-4 focus:ring-[#f59e0b]/10"
                  />
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-[0.875rem] font-semibold text-[#1e293b]">
                    Cancellation Policy
                  </label>
                  <input
                    type="text"
                    value={business.cancellationPolicy}
                    onChange={(e) =>
                      setBusiness({ ...business, cancellationPolicy: e.target.value })
                    }
                    className="rounded-lg border-2 border-[#e2e8f0] p-3 text-[1rem] text-[#1e293b] outline-none transition-all focus:border-[#f59e0b] focus:ring-4 focus:ring-[#f59e0b]/10"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Integrations */}
          {activeTab === "integrations" && (
            <div className="rounded-[12px] bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
              <div className="mb-6 border-b-2 border-[#f1f5f9] pb-4">
                <h2 className="m-0 mb-2 text-[1.5rem] font-bold text-[#1e293b]">
                  Integrations
                </h2>
                <p className="m-0 text-[0.875rem] text-[#64748b]">
                  Connect your favorite apps and services
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {integrations.map((integration, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-between gap-4 rounded-lg border-2 border-[#e2e8f0] bg-[#f8fafc] p-5 transition-all hover:border-[#f59e0b] hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg text-[1.5rem] text-white"
                        style={{ backgroundColor: integration.color }}
                      >
                        <i className={integration.icon}></i>
                      </div>
                      <div className="flex-1">
                        <h3 className="m-0 mb-1 text-[1rem] font-semibold text-[#1e293b]">
                          {integration.name}
                        </h3>
                        <p className="m-0 text-[0.875rem] text-[#64748b]">
                          {integration.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span
                        className={`rounded-md px-3 py-1 text-[0.75rem] font-semibold ${
                          integration.status === "connected"
                            ? "bg-[#d1fae5] text-[#065f46]"
                            : "bg-[#f1f5f9] text-[#64748b]"
                        }`}
                      >
                        {integration.status === "connected" ? "Connected" : "Not Connected"}
                      </span>
                      <button
                        className={`rounded-lg px-4 py-2 text-[0.875rem] font-semibold transition-all ${
                          integration.status === "connected"
                            ? "border-2 border-[#ef4444] text-[#ef4444] hover:bg-[#ef4444] hover:text-white"
                            : "bg-[#f59e0b] text-white hover:bg-[#d97706]"
                        }`}
                      >
                        {integration.status === "connected" ? "Disconnect" : "Connect"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Billing */}
          {activeTab === "billing" && (
            <div className="rounded-[12px] bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
              <div className="mb-6 border-b-2 border-[#f1f5f9] pb-4">
                <h2 className="m-0 mb-2 text-[1.5rem] font-bold text-[#1e293b]">
                  Billing & Subscription
                </h2>
                <p className="m-0 text-[0.875rem] text-[#64748b]">
                  Manage your subscription and payment methods
                </p>
              </div>

              {/* Current Plan */}
              <div className="mb-8 rounded-lg border-2 border-[#f59e0b] bg-gradient-to-r from-[#fef3c7] to-[#fef9e6] p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="m-0 mb-2 text-[1.25rem] font-bold text-[#1e293b]">
                      Professional Plan
                    </h3>
                    <p className="m-0 text-[0.875rem] text-[#64748b]">
                      Billed monthly • Next billing: Feb 29, 2026
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="m-0 text-[2rem] font-bold text-[#1e293b]">₹4,999</p>
                    <p className="m-0 text-[0.875rem] text-[#64748b]">per month</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button className="rounded-lg bg-[#f59e0b] px-5 py-2.5 text-[0.875rem] font-semibold text-white transition-all hover:bg-[#d97706]">
                    Upgrade Plan
                  </button>
                  <button className="rounded-lg border-2 border-[#f59e0b] bg-white px-5 py-2.5 text-[0.875rem] font-semibold text-[#f59e0b] transition-all hover:bg-[#f59e0b] hover:text-white">
                    Change Plan
                  </button>
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-8">
                <h3 className="mb-4 text-[1.125rem] font-bold text-[#1e293b]">
                  Payment Method
                </h3>
                <div className="flex items-center justify-between rounded-lg border-2 border-[#e2e8f0] bg-[#f8fafc] p-5">
                  <div className="flex items-center gap-4">
                    <i className="ri-bank-card-line text-[2rem] text-[#3b82f6]"></i>
                    <div>
                      <p className="m-0 font-semibold text-[#1e293b]">•••• •••• •••• 4242</p>
                      <p className="m-0 text-[0.875rem] text-[#64748b]">Expires 12/2027</p>
                    </div>
                  </div>
                  <button className="rounded-lg border-2 border-[#f59e0b] bg-white px-5 py-2.5 text-[0.875rem] font-semibold text-[#f59e0b] transition-all hover:bg-[#f59e0b] hover:text-white">
                    Update
                  </button>
                </div>
              </div>

              {/* Billing History */}
              <div>
                <h3 className="mb-4 text-[1.125rem] font-bold text-[#1e293b]">
                  Billing History
                </h3>
                <div className="flex flex-col gap-3">
                  {[
                    { date: "Jan 29, 2026", amount: "₹4,999", status: "Paid" },
                    { date: "Dec 29, 2025", amount: "₹4,999", status: "Paid" },
                    { date: "Nov 29, 2025", amount: "₹4,999", status: "Paid" },
                  ].map((invoice, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-lg border-2 border-[#e2e8f0] bg-[#f8fafc] p-4 transition-all hover:border-[#f59e0b]"
                    >
                      <div className="flex items-center gap-4">
                        <i className="ri-file-text-line text-[1.5rem] text-[#64748b]"></i>
                        <div>
                          <p className="m-0 font-semibold text-[#1e293b]">{invoice.date}</p>
                          <p className="m-0 text-[0.875rem] text-[#64748b]">{invoice.amount}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="rounded-md bg-[#d1fae5] px-3 py-1 text-[0.75rem] font-semibold text-[#065f46]">
                          {invoice.status}
                        </span>
                        <button className="flex h-9 w-9 items-center justify-center rounded-md bg-[#dbeafe] text-[1.125rem] text-[#1e40af] transition-all hover:bg-[#3b82f6] hover:text-white">
                          <i className="ri-download-line"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;
