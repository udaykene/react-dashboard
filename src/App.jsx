import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import DashboardLayout from "./components/DashboardLayout";
import Home from "./pages/Home";
import Consulting from "./pages/Consulting";
import Contactus from "./pages/Contactus";
import Design from "./pages/Design";
import Development from "./pages/Development";
import Marketing from "./pages/Marketing";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Appointments from "./pages/Appointments";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/development" element={<Development />} />
        <Route path="/design" element={<Design />} />
        <Route path="/consulting" element={<Consulting />} />
        
        {/* Dashboard Routes with Sidebar Layout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="appointments" element={<Appointments />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
