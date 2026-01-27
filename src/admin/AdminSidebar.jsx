import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <aside className="admin-sidebar">
      <h2>Admin Panel</h2>

      <nav>
        <NavLink to="/admin" end>Dashboard</NavLink>
        <NavLink to="/admin/profile">Profile</NavLink>
        <NavLink to="/admin/appointments">Appointments</NavLink>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
