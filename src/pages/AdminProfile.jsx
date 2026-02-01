import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";

const AdminProfile = () => {
  const [profileData, setProfileData] = useState({
    name: "Admin User",
    email: "admin@parthbuilders.com",
    phone: "+91 98765 43210",
    role: "Administrator",
    department: "Management",
    joinDate: "January 2023",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <AdminLayout>
      <div className="mx-auto max-w-[1200px] h-full overflow-y-auto no-scrollbar">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="m-0 text-xl sm:text-2xl lg:text-3xl font-bold text-[#1e293b]">
            Profile Settings
          </h1>
          <p className="m-0 mt-1 text-sm sm:text-base text-[#64748b]">
            Manage your account information and preferences
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-6 pb-6 sm:pb-10">
          {/* Personal Information Card */}
          <div className="rounded-lg sm:rounded-xl bg-white p-4 sm:p-6 lg:p-8 shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
            {/* Avatar Section */}
            <div className="mb-6 sm:mb-8 flex flex-col items-center gap-3 sm:gap-4 border-b-2 border-[#f1f5f9] pb-6 sm:pb-8">
              <div className="flex h-20 w-20 sm:h-28 sm:w-28 lg:h-32 lg:w-32 items-center justify-center rounded-full bg-gradient-to-br from-[#f59e0b] to-[#d97706] text-4xl sm:text-5xl lg:text-6xl text-white shadow-[0_8px_20px_rgba(245,158,11,0.3)]">
                <i className="ri-user-line"></i>
              </div>
              <button className="flex items-center gap-2 rounded-lg bg-[#f1f5f9] px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-[#475569] transition-all hover:translate-y-[-2px] hover:bg-[#e2e8f0]">
                <i className="ri-camera-line"></i>
                Change Photo
              </button>
            </div>

            {/* Info Section */}
            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                <h2 className="m-0 text-lg sm:text-xl lg:text-2xl font-bold text-[#1e293b]">
                  Personal Information
                </h2>
                <button
                  className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#f59e0b] text-white shadow-lg transition-all hover:translate-y-[-2px] hover:bg-[#d97706] active:scale-95"
                  onClick={() => setIsEditing(!isEditing)}
                  aria-label={isEditing ? "Close" : "Edit"}
                >
                  <i
                    className={`${isEditing ? "ri-close-line" : "ri-edit-line"} text-lg sm:text-xl`}
                  ></i>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {/* Name Field */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#64748b]">
                    Full Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={profileData.name}
                      onChange={handleInputChange}
                      className="rounded-lg border-2 border-[#e2e8f0] p-2.5 sm:p-3 text-sm sm:text-base text-[#1e293b] outline-none transition-all focus:border-[#f59e0b] focus:ring-4 focus:ring-[#f59e0b]/10"
                    />
                  ) : (
                    <p className="m-0 text-sm sm:text-base font-medium text-[#1e293b]">
                      {profileData.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#64748b]">
                    Email Address
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleInputChange}
                      className="rounded-lg border-2 border-[#e2e8f0] p-2.5 sm:p-3 text-sm sm:text-base text-[#1e293b] outline-none transition-all focus:border-[#f59e0b] focus:ring-4 focus:ring-[#f59e0b]/10"
                    />
                  ) : (
                    <p className="m-0 text-sm sm:text-base font-medium text-[#1e293b] break-words">
                      {profileData.email}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#64748b]">
                    Phone Number
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleInputChange}
                      className="rounded-lg border-2 border-[#e2e8f0] p-2.5 sm:p-3 text-sm sm:text-base text-[#1e293b] outline-none transition-all focus:border-[#f59e0b] focus:ring-4 focus:ring-[#f59e0b]/10"
                    />
                  ) : (
                    <p className="m-0 text-sm sm:text-base font-medium text-[#1e293b]">
                      {profileData.phone}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#64748b]">
                    Role
                  </label>
                  <p className="m-0 text-sm sm:text-base font-medium text-[#1e293b]">
                    {profileData.role}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#64748b]">
                    Department
                  </label>
                  <p className="m-0 text-sm sm:text-base font-medium text-[#1e293b]">
                    {profileData.department}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#64748b]">
                    Member Since
                  </label>
                  <p className="m-0 text-sm sm:text-base font-medium text-[#1e293b]">
                    {profileData.joinDate}
                  </p>
                </div>
              </div>

              {isEditing && (
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 border-t-2 border-[#f1f5f9] pt-4">
                  <button
                    onClick={handleSave}
                    className="flex items-center justify-center gap-2 rounded-lg bg-[#10b981] px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white transition-all hover:translate-y-[-2px] hover:bg-[#059669]"
                  >
                    <i className="ri-check-line"></i>
                    Save Changes
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="rounded-lg bg-[#f1f5f9] px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-[#475569] transition-all hover:bg-[#e2e8f0]"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Security Settings Card */}
          <div className="rounded-lg sm:rounded-xl bg-white p-4 sm:p-6 lg:p-8 shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
            <h2 className="mb-4 sm:mb-6 text-lg sm:text-xl lg:text-2xl font-bold text-[#1e293b]">
              Security Settings
            </h2>
            <div className="flex flex-col gap-4 sm:gap-6">
              {[
                {
                  icon: "ri-lock-password-line",
                  title: "Password",
                  desc: "Last changed 2 months ago",
                  btn: "Change Password",
                },
                {
                  icon: "ri-shield-check-line",
                  title: "Two-Factor Authentication",
                  desc: "Add an extra layer of security",
                  btn: "Enable",
                },
                {
                  icon: "ri-smartphone-line",
                  title: "Active Sessions",
                  desc: "Manage your active devices",
                  btn: "View All",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 rounded-lg border-2 border-[#e2e8f0] bg-[#f8fafc] p-4 sm:p-6 transition-all duration-300 hover:border-[#f59e0b] hover:bg-[#fef3c7]"
                >
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                    <i
                      className={`${item.icon} text-2xl sm:text-3xl text-[#f59e0b] flex-shrink-0 mt-1 sm:mt-0`}
                    ></i>
                    <div className="flex-1 min-w-0">
                      <h3 className="m-0 text-sm sm:text-base font-semibold text-[#1e293b]">
                        {item.title}
                      </h3>
                      <p className="m-0 text-xs sm:text-sm text-[#64748b] mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <button className="w-full sm:w-auto border-2 border-[#f59e0b] rounded-lg bg-white px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-[#f59e0b] transition-all hover:translate-y-[-2px] hover:bg-[#f59e0b] hover:text-white whitespace-nowrap">
                    {item.btn}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminProfile;
