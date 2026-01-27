import React from "react";
import {
  createBrowserRouter,
  Routes,
  RouterProvider,
  Outlet,
  Route,
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
const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/profile" element={<Profile />}/>
        <Route path="/activity" element={<Activity />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/history" element={<History/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
