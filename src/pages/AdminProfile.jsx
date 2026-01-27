import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";
import "./AdminProfile.css";

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
    // Here you would typically save to backend
    alert("Profile updated successfully!");
  };

  return (
    <AdminLayout>
      <div className="admin-profile">
        <div className="profile-header">
          <h1>Profile Settings</h1>
          <p>Manage your account information and preferences</p>
        </div>

        <div className="profile-content">
          <div className="profile-card">
            <div className="profile-avatar-section">
              <div className="profile-avatar">
                <i className="ri-user-line"></i>
              </div>
              <button className="btn-upload">
                <i className="ri-camera-line"></i>
                Change Photo
              </button>
            </div>

            <div className="profile-info">
              <div className="info-header">
                <h2>Personal Information</h2>
                <button
                  className="btn-edit"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <i className={isEditing ? "ri-close-line" : "ri-edit-line"}></i>
                  {isEditing ? "Cancel" : "Edit"}
                </button>
              </div>

              <div className="info-grid">
                <div className="info-field">
                  <label>Full Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={profileData.name}
                      onChange={handleInputChange}
                      className="input-field"
                    />
                  ) : (
                    <p>{profileData.name}</p>
                  )}
                </div>

                <div className="info-field">
                  <label>Email Address</label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleInputChange}
                      className="input-field"
                    />
                  ) : (
                    <p>{profileData.email}</p>
                  )}
                </div>

                <div className="info-field">
                  <label>Phone Number</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleInputChange}
                      className="input-field"
                    />
                  ) : (
                    <p>{profileData.phone}</p>
                  )}
                </div>

                <div className="info-field">
                  <label>Role</label>
                  <p>{profileData.role}</p>
                </div>

                <div className="info-field">
                  <label>Department</label>
                  <p>{profileData.department}</p>
                </div>

                <div className="info-field">
                  <label>Member Since</label>
                  <p>{profileData.joinDate}</p>
                </div>
              </div>

              {isEditing && (
                <div className="action-buttons">
                  <button className="btn-save" onClick={handleSave}>
                    <i className="ri-check-line"></i>
                    Save Changes
                  </button>
                  <button
                    className="btn-cancel"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="profile-card">
            <h2>Security Settings</h2>
            <div className="security-section">
              <div className="security-item">
                <div className="security-info">
                  <i className="ri-lock-password-line"></i>
                  <div>
                    <h3>Password</h3>
                    <p>Last changed 2 months ago</p>
                  </div>
                </div>
                <button className="btn-secondary">Change Password</button>
              </div>

              <div className="security-item">
                <div className="security-info">
                  <i className="ri-shield-check-line"></i>
                  <div>
                    <h3>Two-Factor Authentication</h3>
                    <p>Add an extra layer of security</p>
                  </div>
                </div>
                <button className="btn-secondary">Enable</button>
              </div>

              <div className="security-item">
                <div className="security-info">
                  <i className="ri-smartphone-line"></i>
                  <div>
                    <h3>Active Sessions</h3>
                    <p>Manage your active devices</p>
                  </div>
                </div>
                <button className="btn-secondary">View All</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminProfile;