import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login submitted:", formData);
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
      {/* Left Side - Login Form */}
      <div className="w-full max-w-md px-6 sm:px-8 py-12 ">
        <div className="w-full max-w-md">
          {/* Logo and Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Welcome Back
            </h2>
            <p className="text-gray-600">
              Sign in to manage your appointments and profile
            </p>
          </div>

          {/* Social Login */}
          <div className="space-y-3 mb-6">
            <button className="w-full flex items-center justify-center gap-3 px-6 py-3 border-2 border-gray-200 rounded-xl hover:border-rose-300 hover:bg-rose-50/50 transition-all group">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="font-semibold text-gray-700 group-hover:text-rose-600 transition-colors">
                Continue with Google
              </span>
            </button>

            <button className="w-full flex items-center justify-center gap-3 px-6 py-3 border-2 border-gray-200 rounded-xl hover:border-rose-300 hover:bg-rose-50/50 transition-all group">
              <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="font-semibold text-gray-700 group-hover:text-rose-600 transition-colors">
                Continue with Facebook
              </span>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <span className="text-sm text-gray-500 font-medium">
              or sign in with email
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
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
                  placeholder="Enter your password"
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
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="w-5 h-5 rounded border-2 border-gray-300 text-rose-600 focus:ring-2 focus:ring-rose-500/20 cursor-pointer"
                />
                <span className="text-sm text-gray-700 group-hover:text-rose-600 transition-colors select-none">
                  Remember me
                </span>
              </label>
              <Link
                to="/forgot-password"
                className="text-sm font-semibold text-rose-600 hover:text-rose-700 transition-colors"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold rounded-xl shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Sign In
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="text-center mt-6 text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-bold text-rose-600 hover:text-rose-700 transition-colors"
            >
              Sign up for free
            </Link>
          </p>

          {/* Footer Links */}
          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-500">
              By signing in, you agree to our{" "}
              <Link to="/terms" className="text-rose-600 hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-rose-600 hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image/Branding */}
    </div>
  );
};

export default LoginPage;
