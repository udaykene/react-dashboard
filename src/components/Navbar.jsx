import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="z-50 w-full flex sticky top-0 px-12 py-2 bg-white text-black justify-between items-center">
      <Link to="/" className="flex justify-center items-center gap-2">
        <div className="text-2xl">
          <i className="ri-building-2-fill"></i>
        </div>
        <h1 className="text-xl font-bold flex gap-2">ParthBuilders</h1>
      </Link>

      <div className="flex gap-4">
        <Link to="/about">About Us</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="flex items-center gap-6">
        
        <Link to="/admin/dashboard" className="bg-amber-600 text-white px-4 py-2 rounded font-bold hover:bg-amber-700 transition-colors">
          Dashboard
        </Link>

        <div className="flex gap-2 items-center">
          <Link
            to="/login"
            className="bg-white text-cyan-600 px-4 py-1 rounded font-bold hover:bg-gray-100 transition-colors"
          >
            Login
          </Link>

        </div>

        {/* PROFILE WRAPPER */}
        <div className="relative h-full flex items-center">
          {/* Trigger */}
          <button
            ref={buttonRef}
            className="flex items-center gap-2 px-2 py-1 rounded-full hover:bg-gray-100 transition outline-none"
            onClick={() => setDropdownOpen((open) => !open)}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
            type="button"
          >
            {/* Profile Icon */}
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-lg">
              <i className="ri-user-3-fill"></i>
            </div>

            {/* Dropdown arrow */}
            <i
              className={`ri-arrow-down-s-line transition-transform ${dropdownOpen ? "rotate-180" : ""
                }`}
            ></i>
          </button>

          {/* DROPDOWN MENU */}
          <div
            ref={dropdownRef}
            className={`absolute top-[40px] left-0 ${dropdownOpen ? "flex" : "hidden"} flex-col bg-white text-black min-w-[160px] shadow-2xl rounded-md border border-gray-200 z-[999]`}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            {/* Transparent bridge to prevent losing hover */}
            <div className="absolute -top-4 left-0 w-full h-4 bg-transparent"></div>

            <Link
              to="/activity"
              className="px-4 py-3 hover:bg-cyan-50 hover:text-cyan-600 border-b border-gray-100"
              onClick={() => setDropdownOpen(false)}
            >
              My Activity
            </Link>
            <Link
              to="/history"
              className="px-4 py-3 hover:bg-cyan-50 hover:text-cyan-600 border-b border-gray-100"
              onClick={() => setDropdownOpen(false)}
            >
              History
            </Link>
            <Link
              to="/profile"
              className="px-4 py-3 hover:bg-cyan-50 hover:text-cyan-600"
              onClick={() => setDropdownOpen(false)}
            >
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



