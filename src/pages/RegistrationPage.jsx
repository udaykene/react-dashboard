import React, { useState } from "react";
import { Link } from "react-router-dom";

const SalonRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    newsletter: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Registration submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      {/* Left Side - Registration Form */}
      <div className="w-full max-w-md px-6 sm:px-8 py-12 ">
        <div className="w-full max-w-md">
          {/* Logo and Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Create Account
            </h2>
            <p className="text-gray-600">
              Join us for exclusive beauty services and rewards
            </p>
          </div>
          
          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 outline-none transition-all placeholder:text-gray-400"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 outline-none transition-all placeholder:text-gray-400"
                  required
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <i className="ri-mail-line text-gray-400 text-lg"></i>
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 outline-none transition-all placeholder:text-gray-400"
                  required
                />
              </div>
            </div>

            {/* Phone Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <i className="ri-phone-line text-gray-400 text-lg"></i>
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 outline-none transition-all placeholder:text-gray-400"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <i className="ri-lock-line text-gray-400 text-lg"></i>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 outline-none transition-all placeholder:text-gray-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-rose-600 transition-colors"
                >
                  <i
                    className={
                      showPassword
                        ? "ri-eye-off-line text-lg"
                        : "ri-eye-line text-lg"
                    }
                  ></i>
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1 ml-1">
                Must be at least 8 characters
              </p>
            </div>

            {/* Confirm Password Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <i className="ri-lock-line text-gray-400 text-lg"></i>
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter your password"
                  className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 outline-none transition-all placeholder:text-gray-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-rose-600 transition-colors"
                >
                  <i
                    className={
                      showConfirmPassword
                        ? "ri-eye-off-line text-lg"
                        : "ri-eye-line text-lg"
                    }
                  ></i>
                </button>
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-3 pt-2">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="w-5 h-5 mt-0.5 rounded border-2 border-gray-300 text-rose-600 focus:ring-2 focus:ring-rose-500/20 cursor-pointer flex-shrink-0"
                  required
                />
                <span className="text-sm text-gray-700 group-hover:text-rose-600 transition-colors select-none">
                  I agree to the{" "}
                  <Link
                    to="/terms"
                    className="text-rose-600 hover:underline font-semibold"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy"
                    className="text-rose-600 hover:underline font-semibold"
                  >
                    Privacy Policy
                  </Link>
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                  className="w-5 h-5 mt-0.5 rounded border-2 border-gray-300 text-rose-600 focus:ring-2 focus:ring-rose-500/20 cursor-pointer flex-shrink-0"
                />
                <span className="text-sm text-gray-700 group-hover:text-rose-600 transition-colors select-none">
                  Send me exclusive beauty tips, offers, and updates
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold rounded-xl shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 transition-all transform hover:scale-[1.02] active:scale-[0.98] mt-6"
            >
              Create Account
            </button>
          </form>

          {/* Sign In Link */}
          <p className="text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-bold text-rose-600 hover:text-rose-700 transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalonRegister;
