const AdminDashboard = () => {
  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      <p>
        Welcome to the Sakhi Admin Panel. This dashboard provides an overview
        of platform activity, emergency alerts, and user engagement.
      </p>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Total Users</h3>
          <p>1,248</p>
        </div>

        <div className="dashboard-card">
          <h3>Active Alerts</h3>
          <p>12</p>
        </div>

        <div className="dashboard-card">
          <h3>Resolved Cases</h3>
          <p>320</p>
        </div>

        <div className="dashboard-card">
          <h3>Appointments Today</h3>
          <p>18</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
