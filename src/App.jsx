import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Activity from "./pages/Activity";
import History from "./pages/History";
import ViewProfile from "./pages/ViewProfile";

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
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
