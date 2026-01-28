import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="dashboard-wrapper">
            <aside className="dashboard-sidebar">
                <h3 className="dashboard-title">Dashboard Panel</h3>

                <Link to="/dashboard/home">Dashboard</Link>
                <Link to="/dashboard/profile">Profile</Link>
                <Link to="/dashboard/appointments">Appointments</Link>
            </aside>

            <main className="dashboard-main">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;
