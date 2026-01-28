import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

/* Normal Pages */
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";
import MyActivity from "./pages/MyActivity";
import History from "./pages/History";

/* Dashboard Panel */
import DashboardLayout from "./dashboard/DashboardLayout";
import DashboardHome from "./dashboard/DashboardHome";
import DashboardProfile from "./dashboard/DashboardProfile";
import Appointments from "./dashboard/Appointments";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Normal Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/activity" element={<MyActivity />} />
        <Route path="/history" element={<History />} />

        {/* DASHBOARD PANEL ROUTES */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="home" element={<DashboardHome />} />
          <Route path="profile" element={<DashboardProfile />} />
          <Route path="appointments" element={<Appointments />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
