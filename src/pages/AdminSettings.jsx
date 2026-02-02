import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [isSaving, setIsSaving] = useState(false);

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

  return (
    <AdminLayout>
      <div className="flex flex-col min-h-screen px-3 sm:px-6 lg:px-8 pb-10">

        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1e293b]">
              Settings
            </h1>
            <p className="text-sm sm:text-base text-[#64748b]">
              Configure your application preferences
            </p>
          </div>

          <button
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center justify-center gap-2 rounded-lg bg-[#f59e0b] px-5 py-3 text-sm sm:text-base font-semibold text-white hover:bg-[#d97706] disabled:opacity-50"
          >
            <i className={isSaving ? "ri-loader-4-line animate-spin" : "ri-save-line"} />
            {isSaving ? "Saving..." : "Save Changes"}
          </button>
        </div>

        {/* Tabs */}
        <div className="mb-6 flex gap-2 overflow-x-auto rounded-xl bg-white p-2 shadow">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition ${
                activeTab === tab.id
                  ? "bg-[#fef3c7] text-[#d97706]"
                  : "text-[#64748b] hover:bg-[#f1f5f9]"
              }`}
            >
              <i className={`${tab.icon} text-lg`} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 space-y-6">

          {/* GENERAL */}
          {activeTab === "general" && (
            <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow">
              <h2 className="text-lg sm:text-xl font-bold mb-4">
                General Settings
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  ["Company Name", "companyName"],
                  ["Email", "email"],
                  ["Phone", "phone"],
                ].map(([label, key]) => (
                  <div key={key} className="flex flex-col gap-1">
                    <label className="text-sm font-semibold">{label}</label>
                    <input
                      value={generalSettings[key]}
                      onChange={(e) =>
                        setGeneralSettings({ ...generalSettings, [key]: e.target.value })
                      }
                      className="border rounded-lg p-3 focus:ring-2 focus:ring-[#f59e0b]"
                    />
                  </div>
                ))}

                <div className="md:col-span-2">
                  <label className="text-sm font-semibold">Address</label>
                  <textarea
                    rows={3}
                    value={generalSettings.address}
                    onChange={(e) =>
                      setGeneralSettings({ ...generalSettings, address: e.target.value })
                    }
                    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#f59e0b]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* NOTIFICATIONS */}
          {activeTab === "notifications" && (
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow space-y-4">
              {Object.keys(notifications).map((key) => (
                <div
                  key={key}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border rounded-lg p-4"
                >
                  <p className="font-semibold capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </p>
                  <input
                    type="checkbox"
                    checked={notifications[key]}
                    onChange={(e) =>
                      setNotifications({ ...notifications, [key]: e.target.checked })
                    }
                    className="h-5 w-5 accent-[#f59e0b]"
                  />
                </div>
              ))}
            </div>
          )}

          {/* SECURITY */}
          {activeTab === "security" && (
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  ["Session Timeout", "sessionTimeout"],
                  ["Password Expiry", "passwordExpiry"],
                  ["Login Attempts", "loginAttempts"],
                ].map(([label, key]) => (
                  <div key={key} className="flex flex-col gap-1">
                    <label className="text-sm font-semibold">{label}</label>
                    <input
                      value={security[key]}
                      onChange={(e) =>
                        setSecurity({ ...security, [key]: e.target.value })
                      }
                      className="border rounded-lg p-3 focus:ring-2 focus:ring-[#f59e0b]"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* BUSINESS */}
          {activeTab === "business" && (
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {Object.keys(business).map((key) => (
                  <div key={key} className="flex flex-col gap-1">
                    <label className="text-sm font-semibold capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </label>
                    <input
                      value={business[key]}
                      onChange={(e) =>
                        setBusiness({ ...business, [key]: e.target.value })
                      }
                      className="border rounded-lg p-3 focus:ring-2 focus:ring-[#f59e0b]"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* INTEGRATIONS & BILLING KEEP SAME – already responsive */}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;
