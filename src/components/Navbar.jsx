import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1023);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Track screen size
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1023);
      if (window.innerWidth > 1023) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <nav className="z-50 w-full sticky top-0 bg-white text-black shadow-sm">
      <div className="px-4 sm:px-6 lg:px-12 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex justify-center items-center gap-2">
            <div className="text-xl sm:text-2xl">
              <i className="ri-building-2-fill"></i>
            </div>
            <h1 className="text-lg sm:text-xl font-bold">ParthBuilders</h1>
          </Link>

          {/* Desktop Navigation Links */}
          {isDesktop && (
            <div className="flex gap-4">
              <Link to="/about" className="hover:text-cyan-600 transition">About Us</Link>
              <Link to="/projects" className="hover:text-cyan-600 transition">Projects</Link>
              <Link to="/services" className="hover:text-cyan-600 transition">Services</Link>
              <Link to="/contact" className="hover:text-cyan-600 transition">Contact</Link>
            </div>
          )}

          {/* Desktop Right Section */}
          {isDesktop && (
            <div className="flex items-center gap-6">
              <Link 
                to="/admin/dashboard" 
                className="bg-amber-600 text-white px-4 py-2 rounded font-bold hover:bg-amber-700 transition-colors"
              >
                Dashboard
              </Link>

              <Link
                to="/login"
                className="bg-white text-cyan-600 px-4 py-1 rounded font-bold hover:bg-gray-100 transition-colors"
              >
                Login
              </Link>

              {/* PROFILE WRAPPER */}
              <div className="relative flex items-center">
                <button
                  ref={buttonRef}
                  className="flex items-center gap-2 px-2 py-1 rounded-full hover:bg-gray-100 transition outline-none"
                  onClick={() => setDropdownOpen((open) => !open)}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                  type="button"
                >
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-lg">
                    <i className="ri-user-3-fill"></i>
                  </div>
                  <i className={`ri-arrow-down-s-line transition-transform ${dropdownOpen ? "rotate-180" : ""}`}></i>
                </button>

                {/* DROPDOWN MENU */}
                {dropdownOpen && (
                  <div
                    ref={dropdownRef}
                    className="absolute top-[40px] left-0 flex flex-col bg-white text-black min-w-[160px] shadow-2xl rounded-md border border-gray-200 z-[999]"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
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
                )}
              </div>
            </div>
          )}

          {/* Mobile menu toggle button */}
          {!isDesktop && (
            <button
              className="text-2xl p-2 hover:bg-gray-100 rounded transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className={mobileMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {!isDesktop && mobileMenuOpen && (
          <div>
            <div className="flex flex-col gap-2 mt-4 pb-4 border-t border-gray-200 pt-4">
              <Link 
                to="/about" 
                className="px-3 py-2 hover:bg-gray-100 rounded transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/projects" 
                className="px-3 py-2 hover:bg-gray-100 rounded transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                to="/services" 
                className="px-3 py-2 hover:bg-gray-100 rounded transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className="px-3 py-2 hover:bg-gray-100 rounded transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              <Link 
                to="/admin/dashboard" 
                className="bg-amber-600 text-white px-4 py-2 rounded font-bold hover:bg-amber-700 transition-colors text-center mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>

              <Link
                to="/login"
                className="bg-white text-cyan-600 px-4 py-2 rounded font-bold hover:bg-gray-100 transition-colors border border-cyan-600 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>

              <button
                className="flex items-center justify-center gap-2 px-4 py-2 hover:bg-gray-100 rounded transition"
                onClick={() => setDropdownOpen((open) => !open)}
              >
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-lg">
                  <i className="ri-user-3-fill"></i>
                </div>
                <span>Profile Menu</span>
                <i className={`ri-arrow-down-s-line transition-transform ${dropdownOpen ? "rotate-180" : ""}`}></i>
              </button>

              {dropdownOpen && (
                <div className="flex flex-col bg-gray-50 rounded-md overflow-hidden">
                  <Link
                    to="/activity"
                    className="px-4 py-3 hover:bg-cyan-50 hover:text-cyan-600 border-b border-gray-200"
                    onClick={() => {
                      setDropdownOpen(false);
                      setMobileMenuOpen(false);
                    }}
                  >
                    My Activity
                  </Link>
                  <Link
                    to="/history"
                    className="px-4 py-3 hover:bg-cyan-50 hover:text-cyan-600 border-b border-gray-200"
                    onClick={() => {
                      setDropdownOpen(false);
                      setMobileMenuOpen(false);
                    }}
                  >
                    History
                  </Link>
                  <Link
                    to="/profile"
                    className="px-4 py-3 hover:bg-cyan-50 hover:text-cyan-600"
                    onClick={() => {
                      setDropdownOpen(false);
                      setMobileMenuOpen(false);
                    }}
                  >
                    View Profile
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;