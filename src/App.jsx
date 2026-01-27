import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Activity from "./pages/Activity";
import History from "./pages/History";
import ViewProfile from "./pages/ViewProfile";

import AdminLayout from "./admin/AdminLayout";
import AdminDashboard from "./adminPages/AdminDashboard";
import AdminProfile from "./adminPages/AdminProfile";
import Appointments from "./adminPages/Appointments";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/history" element={<History />} />
          <Route path="/view-profile" element={<ViewProfile />} />

          {/* ADMIN ROUTES */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="profile" element={<AdminProfile />} />
            <Route path="appointments" element={<Appointments />} />
          </Route>
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
