import React from "react";
import {
  Routes,
  RouterProvider,
  Outlet,
  Route,
  useLocation
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer.jsx";
import Profile from "./pages/Profile.jsx";
import Contact from "./pages/Contact.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Activity from "./pages/Activity.jsx";
import History from "./pages/History.jsx";
import Projects from "./pages/Projects.jsx";
import Services from "./pages/Services.jsx";
import Team from "./pages/Team";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import AdminProfile from "./pages/AdminProfile";
import AdminAppointments from "./pages/AdminAppointments";
const App = () => {

  const location = useLocation();

  // Check if current route is admin
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (

    <div className="h-screen bg-black">
      <Navbar />
      {/* <div className="mt-6 pt-3 h-full w-screen  "> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/history" element={<History />} />
          <Route path="/team" element={<Team />} />

          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/profile" element={<AdminProfile />} />
          <Route path="/admin/appointments" element={<AdminAppointments />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      {/* </div> */}
         {/* Footer only for NON-admin routes */}
      {!isAdminRoute && <Footer />}
    </div>
  );
};

export default App;
