import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdfbf7] px-4 py-12">
      {/* Container with subtle shadow matching your project cards */}
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        
        {/* Header Section: Using your brand's dark navy */}
        <div className="bg-[#0a0f1a] py-10 px-8 text-center">
          <div className="flex justify-center mb-4">
            {/* Placeholder for ParthBuilders Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-white text-2xl font-bold tracking-tight">ParthBuilders</span>
            </div>
          </div>
          <h2 className="text-white text-xl font-semibold">Welcome Back</h2>
          <p className="text-gray-400 text-sm mt-2">Discover Peaceful Living</p>
        </div>

        {/* Form Section */}
        <div className="p-8 md:p-10">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all bg-gray-50"
                placeholder="name@email.com"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-bold text-gray-700">Password</label>
                <a href="#" className="text-sm font-semibold text-orange-500 hover:text-orange-600">Forgot?</a>
              </div>
              <input 
                type="password" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all bg-gray-50"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center">
              <input 
                type="checkbox" 
                className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500" 
              />
              <label className="ml-2 text-sm text-gray-600 font-medium">Keep me logged in</label>
            </div>

            {/* Submit Button: Matching your 'Dashboard' and 'Send Message' button style */}
            <button 
              type="submit" 
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-200 transition-all transform active:scale-[0.98]"
            >
              Sign In
            </button>
          </form>

          {/* Social Login / Footer */}
          <div className="mt-8 pt-8 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-600">
              New to ParthBuilders? {' '}
              <a href="#" className="font-bold text-[#0a0f1a] hover:text-orange-500 transition-colors">
                Create Account
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
