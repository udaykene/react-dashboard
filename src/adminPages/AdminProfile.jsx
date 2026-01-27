const AdminProfile = () => {
  return (
    <div className="admin-page">
      <h1>Admin Profile</h1>

      <p>
        Manage administrator details and access permissions for the Sakhi
        platform.
      </p>

      <div className="profile-box">
        <p><strong>Name:</strong> Sakhi Admin</p>
        <p><strong>Email:</strong> admin@sakhi.org</p>
        <p><strong>Role:</strong> System Administrator</p>
        <p><strong>Last Login:</strong> 27 January 2026, 4:45 PM</p>
      </div>
    </div>
  );
};

export default AdminProfile;
