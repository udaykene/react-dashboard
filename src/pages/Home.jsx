import React from "react";

const SalonHome = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <main className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center items-center w-full bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1740&auto=format&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 max-w-5xl w-full">
          {/* Badge */}
          <span className="mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-300/30 text-rose-200 text-xs sm:text-sm font-medium backdrop-blur-sm">
            ✨ Award-Winning Beauty Experts
          </span>

          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-3 sm:mb-4 drop-shadow-2xl tracking-tight leading-tight">
            Unleash Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-300">Beauty</span>
          </h1>

          <p className="text-gray-200 text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-6 sm:mb-8 max-w-2xl px-2">
            Experience luxury treatments and transformative services tailored just for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 w-full sm:w-auto px-4 sm:px-0">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white text-sm sm:text-base font-bold rounded-lg shadow-lg shadow-rose-500/30 transition-all flex items-center justify-center">
              Book Appointment <span className="ml-2">→</span>
            </button>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white text-sm sm:text-base font-bold rounded-lg transition-all flex items-center justify-center">
              <span className="mr-2">▶</span> Virtual Tour
            </button>
          </div>

          {/* Quick Service Selector - Hidden on mobile, visible on tablet+ */}
          <div className="w-full max-w-4xl bg-white/10 backdrop-blur-xl border border-white/20 p-3 sm:p-4 rounded-2xl hidden lg:flex items-center gap-3 sm:gap-4">
            <div className="flex-1 text-left px-3 sm:px-4 border-r border-white/20">
              <p className="text-xs text-gray-400 uppercase font-bold mb-1">Service</p>
              <select className="bg-transparent text-white text-sm w-full outline-none cursor-pointer">
                <option className="text-black">All Services</option>
                <option className="text-black">Hair Styling</option>
                <option className="text-black">Spa & Massage</option>
                <option className="text-black">Makeup</option>
                <option className="text-black">Nails & Beauty</option>
              </select>
            </div>
            <div className="flex-1 text-left px-3 sm:px-4 border-r border-white/20">
              <p className="text-xs text-gray-400 uppercase font-bold mb-1">Specialist</p>
              <select className="bg-transparent text-white text-sm w-full outline-none cursor-pointer">
                <option className="text-black">Any Specialist</option>
                <option className="text-black">Hair Stylist</option>
                <option className="text-black">Makeup Artist</option>
                <option className="text-black">Spa Therapist</option>
              </select>
            </div>
            <div className="flex-1 text-left px-3 sm:px-4">
              <p className="text-xs text-gray-400 uppercase font-bold mb-1">Date</p>
              <input 
                type="date" 
                className="bg-transparent text-white text-sm w-full outline-none cursor-pointer"
              />
            </div>
            <button className="px-6 sm:px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white text-sm font-bold rounded-xl transition-all whitespace-nowrap shadow-lg shadow-rose-500/30">
              Find Slot
            </button>
          </div>
        </div>
      </main>

      {/* Stats Section - Builds Authority */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8 sm:py-10 md:py-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          <div className="space-y-1 sm:space-y-2 group hover:scale-105 transition-transform">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">10+</h3>
            <p className="text-gray-400 text-xs sm:text-sm">Years of Excellence</p>
          </div>
          <div className="space-y-1 sm:space-y-2 group hover:scale-105 transition-transform">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">15k+</h3>
            <p className="text-gray-400 text-xs sm:text-sm">Happy Clients</p>
          </div>
          <div className="space-y-1 sm:space-y-2 group hover:scale-105 transition-transform">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">25+</h3>
            <p className="text-gray-400 text-xs sm:text-sm">Expert Stylists</p>
          </div>
          <div className="space-y-1 sm:space-y-2 group hover:scale-105 transition-transform">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">50+</h3>
            <p className="text-gray-400 text-xs sm:text-sm">Premium Services</p>
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=1740&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-rose-900/90 via-pink-900/80 to-rose-900/90"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 md:px-8">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-xs sm:text-sm font-medium backdrop-blur-sm">
            Limited Time Offer
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            New Client Special: 20% Off
          </h2>
          <p className="text-white/90 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
            First-time visitors enjoy 20% off any service. Experience the difference that professional care makes.
          </p>
          <button className="px-8 sm:px-10 py-3 sm:py-4 bg-white hover:bg-gray-100 text-rose-600 text-sm sm:text-base font-bold rounded-lg shadow-xl transition-all">
            Claim Your Offer
          </button>
        </div>
      </section>

      {/* Trust Badges / Certifications */}
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

export default SalonHome;