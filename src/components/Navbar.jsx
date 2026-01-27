import React, { useState, useRef, useEffect } from 'react';
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

  // Optionally, close dropdown on route change (if needed)

  return (
    <nav className='w-full flex fixed top-0 px-6 py-4 bg-cyan-500 text-white justify-between items-center'>
      <h2 className='text-xl font-bold'>Cognizify</h2>
      <div className='flex items-center gap-6'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        {/* PROFILE WRAPPER */}
        <div className="relative h-full flex items-center">
          {/* Trigger */}
          <button
            ref={buttonRef}
            className="flex items-center gap-1 py-2 outline-none"
            onClick={() => setDropdownOpen((open) => !open)}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
            type="button"
          >
            Profile ▾
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

            <Link to="/activity" className="px-4 py-3 hover:bg-cyan-50 hover:text-cyan-600 border-b border-gray-100" onClick={() => setDropdownOpen(false)}>
              My Activity
            </Link>
            <Link to="/history" className="px-4 py-3 hover:bg-cyan-50 hover:text-cyan-600 border-b border-gray-100" onClick={() => setDropdownOpen(false)}>
              History
            </Link>
            <Link to="/profile" className="px-4 py-3 hover:bg-cyan-50 hover:text-cyan-600" onClick={() => setDropdownOpen(false)}>
              View Profile
            </Link>
          </div>
        </div>

        <div className='flex gap-2 items-center'>
          <Link to="/login" className="bg-white text-cyan-600 px-4 py-1 rounded font-bold hover:bg-gray-100 transition-colors">
            Login
          </Link>
          <Link to="/logout" className="bg-cyan-800 text-white px-4 py-1 rounded font-bold hover:bg-cyan-900 transition-colors">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;