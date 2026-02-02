import React from "react";

const SalonLogin = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1740&auto=format&fit=crop"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      
      {/* Gradient Overlay - matching your salon pages */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>

      {/* Login Container */}
      <div className="relative z-10 w-full max-w-md">
        
        {/* Main Card */}
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          
          {/* Header Section with Gradient */}
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8 sm:py-10 px-6 sm:px-8 text-center">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=1740&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
            
            <div className="relative">
              {/* Badge matching your salon pages */}
              <span className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-300/30 text-rose-200 text-xs sm:text-sm font-medium backdrop-blur-sm">
                ✨ Member Access
              </span>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                Welcome <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-300">Back</span>
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                Sign in to manage your beauty appointments
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-6 sm:p-8 md:p-10">
            <form className="space-y-5 sm:space-y-6">
              
              {/* Email Input */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5 sm:mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all bg-gray-50"
                  placeholder="your@email.com"
                />
              </div>

              {/* Password Input */}
              <div>
                <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                  <label className="text-xs sm:text-sm font-bold text-gray-700">
                    Password
                  </label>
                  <a 
                    href="#" 
                    className="text-xs sm:text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 transition-all"
                  >
                    Forgot Password?
                  </a>
                </div>
                <input 
                  type="password" 
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all bg-gray-50"
                  placeholder="••••••••"
                />
              </div>

              {/* Remember Me Checkbox */}
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded border-gray-300 text-rose-500 focus:ring-rose-500 cursor-pointer" 
                />
                <label className="ml-2 text-xs sm:text-sm text-gray-600 font-medium cursor-pointer">
                  Keep me signed in
                </label>
              </div>

              {/* Sign In Button - matching salon style */}
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold py-3 sm:py-4 text-sm sm:text-base rounded-lg sm:rounded-xl shadow-lg shadow-rose-500/30 transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
              >
                Sign In to Account
              </button>

              {/* Divider */}
              <div className="relative py-3 sm:py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-xs sm:text-sm">
                  <span className="px-3 sm:px-4 bg-white text-gray-500 font-medium">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <button 
                  type="button"
                  className="flex items-center justify-center px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl hover:bg-gray-50 transition-all text-sm sm:text-base font-medium text-gray-700"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Google
                </button>
                
                <button 
                  type="button"
                  className="flex items-center justify-center px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl hover:bg-gray-50 transition-all text-sm sm:text-base font-medium text-gray-700"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </button>
              </div>
            </form>

            {/* Sign Up Link */}
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-100 text-center">
              <p className="text-xs sm:text-sm text-gray-600">
                New to our salon? {' '}
                <a 
                  href="#" 
                  className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 transition-all"
                >
                  Create Account
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info Cards - Hidden on mobile, visible on larger screens */}
        <div className="hidden sm:grid grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 sm:p-4 text-center hover:bg-white/20 transition-all">
            <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">🔒</div>
            <p className="text-white text-xs sm:text-sm font-semibold">Secure Login</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 sm:p-4 text-center hover:bg-white/20 transition-all">
            <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">📅</div>
            <p className="text-white text-xs sm:text-sm font-semibold">Book Anytime</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 sm:p-4 text-center hover:bg-white/20 transition-all">
            <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">💎</div>
            <p className="text-white text-xs sm:text-sm font-semibold">VIP Access</p>
          </div>
        </div>

      </div>

      {/* Trust Badges at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 py-4 sm:py-6 overflow-hidden border-t border-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-gray-400 text-xs mb-3 sm:mb-4 uppercase tracking-wider">
            Trusted & Certified
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
            <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-xs">✓</span>
              </div>
              <span className="text-white font-semibold text-xs sm:text-sm tracking-wide">ISO Certified</span>
            </div>
            <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-xs">★</span>
              </div>
              <span className="text-white font-semibold text-xs sm:text-sm tracking-wide">Award Winning</span>
            </div>
            <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-xs">♥</span>
              </div>
              <span className="text-white font-semibold text-xs sm:text-sm tracking-wide">Expert Certified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalonLogin;