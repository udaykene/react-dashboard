import React from 'react';

const SalonProfile = () => {
  return (
    <div className="bg-white w-full overflow-x-hidden">
      
      {/* Hero Header */}
      <div className="relative bg-gray-900 py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1740&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <span className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-300/30 text-rose-200 text-xs sm:text-sm font-medium backdrop-blur-sm">
            ✨ Your Beauty Profile
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-300">Profile</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg">
            Manage your personal information and preferences
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        
        {/* Profile Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          
          {/* Cover Photo Section */}
          <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=1740&auto=format&fit=crop"
              className="w-full h-full object-cover"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/80 to-pink-500/80"></div>
            
            {/* Profile Picture */}
            <div className="absolute -bottom-12 sm:-bottom-16 left-6 sm:left-8 md:left-12">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-rose-500 to-pink-500 border-4 sm:border-6 border-white flex items-center justify-center text-3xl sm:text-4xl md:text-5xl text-white font-bold shadow-2xl">
                UK
              </div>
            </div>

            {/* Edit Cover Button */}
            <button className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all border border-white/30">
              📷 Change Cover
            </button>
          </div>

          {/* Profile Info Section */}
          <div className="pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10 md:pb-12 px-6 sm:px-8 md:px-12">
            
            {/* Name & Edit Button */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-6 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-100">
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Uday Kene
                </h2>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs sm:text-sm font-bold rounded-full">
                    VIP Member
                  </span>
                  <span className="text-sm sm:text-base text-gray-500">since 2022</span>
                </div>
                <div className="flex items-center gap-2 text-sm sm:text-base text-gray-600">
                  <span className="text-amber-400 text-lg">⭐</span>
                  <span className="font-semibold">Premium Customer</span>
                </div>
              </div>
              
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white text-sm sm:text-base font-bold rounded-xl shadow-lg shadow-rose-500/30 transition-all transform hover:-translate-y-1">
                ✏️ Edit Profile
              </button>
            </div>

            {/* Personal Information Grid */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-rose-500 text-xl sm:text-2xl">👤</span>
                Personal Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                
                {/* Email */}
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-rose-100 hover:shadow-lg transition-all">
                  <label className="text-xs sm:text-sm font-bold text-rose-600 uppercase tracking-wider mb-2 block flex items-center gap-2">
                    <span>✉️</span>
                    Email Address
                  </label>
                  <p className="text-sm sm:text-base text-gray-900 font-semibold break-words">
                    uday.kene@example.com
                  </p>
                </div>

                {/* Phone */}
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-purple-100 hover:shadow-lg transition-all">
                  <label className="text-xs sm:text-sm font-bold text-purple-600 uppercase tracking-wider mb-2 block flex items-center gap-2">
                    <span>📱</span>
                    Phone Number
                  </label>
                  <p className="text-sm sm:text-base text-gray-900 font-semibold">
                    +91 98765 43210
                  </p>
                </div>

                {/* Location */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-amber-100 hover:shadow-lg transition-all">
                  <label className="text-xs sm:text-sm font-bold text-amber-600 uppercase tracking-wider mb-2 block flex items-center gap-2">
                    <span>📍</span>
                    Preferred Location
                  </label>
                  <p className="text-sm sm:text-base text-gray-900 font-semibold">
                    Ratnagiri, Maharashtra
                  </p>
                </div>

                {/* Member Since */}
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-emerald-100 hover:shadow-lg transition-all">
                  <label className="text-xs sm:text-sm font-bold text-emerald-600 uppercase tracking-wider mb-2 block flex items-center gap-2">
                    <span>🎉</span>
                    Member Since
                  </label>
                  <p className="text-sm sm:text-base text-gray-900 font-semibold">
                    January 2022
                  </p>
                </div>
              </div>
            </div>

            {/* Preferences Section */}
            <div className="mt-8 sm:mt-10 md:mt-12">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-rose-500 text-xl sm:text-2xl">💝</span>
                Beauty Preferences
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                
                {/* Preferred Stylist */}
                <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-gray-100 hover:border-rose-300 transition-all">
                  <label className="text-xs sm:text-sm font-bold text-gray-600 uppercase tracking-wider mb-2 block">
                    Preferred Stylist
                  </label>
                  <p className="text-sm sm:text-base text-gray-900 font-semibold">
                    Sarah Johnson
                  </p>
                </div>

                {/* Favorite Services */}
                <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-gray-100 hover:border-rose-300 transition-all">
                  <label className="text-xs sm:text-sm font-bold text-gray-600 uppercase tracking-wider mb-2 block">
                    Favorite Services
                  </label>
                  <p className="text-sm sm:text-base text-gray-900 font-semibold">
                    Hair Styling, Spa Treatments
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-8 sm:mt-10 md:mt-12 pt-8 sm:pt-10 border-t border-gray-100">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-rose-500 text-xl sm:text-2xl">📊</span>
                Membership Stats
              </h3>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl sm:rounded-2xl text-white hover:scale-105 transition-transform">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
                    24
                  </div>
                  <p className="text-xs sm:text-sm font-semibold opacity-90">Total Visits</p>
                </div>
                
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl sm:rounded-2xl text-white hover:scale-105 transition-transform">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
                    450
                  </div>
                  <p className="text-xs sm:text-sm font-semibold opacity-90">Loyalty Points</p>
                </div>
                
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl sm:rounded-2xl text-white hover:scale-105 transition-transform">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
                    12
                  </div>
                  <p className="text-xs sm:text-sm font-semibold opacity-90">Services Used</p>
                </div>
                
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl sm:rounded-2xl text-white hover:scale-105 transition-transform">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
                    4.9
                  </div>
                  <p className="text-xs sm:text-sm font-semibold opacity-90">Avg Rating</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="flex-1 px-6 py-3 sm:py-4 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white text-sm sm:text-base font-bold rounded-xl shadow-lg transition-all transform hover:-translate-y-1">
                📅 Book Appointment
              </button>
              <button className="flex-1 px-6 py-3 sm:py-4 border-2 border-rose-500 text-rose-500 hover:bg-rose-50 text-sm sm:text-base font-bold rounded-xl transition-all">
                🎁 View Rewards
              </button>
              <button className="flex-1 px-6 py-3 sm:py-4 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 text-sm sm:text-base font-bold rounded-xl transition-all">
                📜 View History
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Membership Benefits Section */}
      <div className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=1740&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-rose-900/90 via-pink-900/85 to-rose-900/90"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 text-center">
            Your VIP Benefits
          </h2>
          <p className="text-white/90 text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto text-center">
            As a premium member, you enjoy exclusive perks and privileges
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all group">
              <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform">🎁</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">Birthday Special</h3>
              <p className="text-sm sm:text-base text-white/80">Complimentary service and special gift on your birthday month</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all group">
              <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform">⭐</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">Priority Booking</h3>
              <p className="text-sm sm:text-base text-white/80">Get first access to appointment slots and new services</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all group">
              <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform">💰</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">Exclusive Discounts</h3>
              <p className="text-sm sm:text-base text-white/80">Special member pricing and seasonal promotions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-6 sm:py-8 overflow-hidden border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 uppercase tracking-wider">
            Certified & Trusted By
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12">
            <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-xs sm:text-sm">✓</span>
              </div>
              <span className="text-white font-semibold text-sm sm:text-base md:text-lg tracking-wide">ISO Certified</span>
            </div>
            <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-xs sm:text-sm">★</span>
              </div>
              <span className="text-white font-semibold text-sm sm:text-base md:text-lg tracking-wide">Award Winning</span>
            </div>
            <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-xs sm:text-sm">♥</span>
              </div>
              <span className="text-white font-semibold text-sm sm:text-base md:text-lg tracking-wide">Expert Certified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalonProfile;