import React from "react";

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <main className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center items-center w-full bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1170&auto=format&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 max-w-5xl w-full">
          {/* Badge */}
          <span className="mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-medium backdrop-blur-sm">
            🏆 Premier Real Estate Developers
          </span>

          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-3 sm:mb-4 drop-shadow-lg tracking-tight leading-tight">
            Crafting Your <span className="text-[#c18d5c]">Vision</span>
          </h1>

          <p className="text-gray-200 text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-6 sm:mb-8 max-w-2xl px-2">
            Building sustainable, modern living spaces designed for your comfort and peace of mind.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 w-full sm:w-auto px-4 sm:px-0">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-bold rounded-lg shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center">
              Explore Properties <span className="ml-2">→</span>
            </button>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white text-sm sm:text-base font-bold rounded-lg transition-all flex items-center justify-center">
              <span className="mr-2">▶</span> Watch Demo
            </button>
          </div>

          {/* Quick Search Bar - Hidden on mobile, visible on tablet+ */}
          <div className="w-full max-w-4xl bg-white/10 backdrop-blur-xl border border-white/20 p-3 sm:p-4 rounded-2xl hidden lg:flex items-center gap-3 sm:gap-4">
            <div className="flex-1 text-left px-3 sm:px-4 border-r border-white/20">
              <p className="text-xs text-gray-400 uppercase font-bold mb-1">Location</p>
              <select className="bg-transparent text-white text-sm w-full outline-none cursor-pointer">
                <option className="text-black">All Cities</option>
                <option className="text-black">Mumbai</option>
                <option className="text-black">Ratnagiri</option>
              </select>
            </div>
            <div className="flex-1 text-left px-3 sm:px-4 border-r border-white/20">
              <p className="text-xs text-gray-400 uppercase font-bold mb-1">Property Type</p>
              <select className="bg-transparent text-white text-sm w-full outline-none cursor-pointer">
                <option className="text-black">Residential</option>
                <option className="text-black">Commercial</option>
                <option className="text-black">Villa</option>
              </select>
            </div>
            <div className="flex-1 text-left px-3 sm:px-4">
              <p className="text-xs text-gray-400 uppercase font-bold mb-1">Budget</p>
              <select className="bg-transparent text-white text-sm w-full outline-none cursor-pointer">
                <option className="text-black">Any Price</option>
                <option className="text-black">$500k - $1M</option>
                <option className="text-black">$1M+</option>
              </select>
            </div>
            <button className="px-6 sm:px-8 py-3 bg-[#c18d5c] hover:bg-[#a6784d] text-white text-sm font-bold rounded-xl transition-all whitespace-nowrap">
              Search
            </button>
          </div>

          {/* Mobile Search Button - Only visible on mobile/tablet */}
          {/* <button className="lg:hidden w-full max-w-md px-6 py-3 bg-[#c18d5c] hover:bg-[#a6784d] text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Search Properties
          </button> */}
        </div>
      </main>

      {/* Stats Section - Builds Authority */}
      <section className="bg-[#0f172a] py-8 sm:py-10 md:py-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          <div className="space-y-1 sm:space-y-2">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">15+</h3>
            <p className="text-gray-400 text-xs sm:text-sm">Years Experience</p>
          </div>
          <div className="space-y-1 sm:space-y-2">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">200+</h3>
            <p className="text-gray-400 text-xs sm:text-sm">Completed Projects</p>
          </div>
          <div className="space-y-1 sm:space-y-2">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">5k+</h3>
            <p className="text-gray-400 text-xs sm:text-sm">Happy Families</p>
          </div>
          <div className="space-y-1 sm:space-y-2">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">12</h3>
            <p className="text-gray-400 text-xs sm:text-sm">Ongoing Sites</p>
          </div>
        </div>
      </section>

      {/* Trust Badges / Partners */}
      <div className="bg-[#0f172a] py-4 sm:py-6 overflow-hidden border-b border-white/5">
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 px-4 opacity-50 hover:opacity-70 grayscale hover:grayscale-0 transition-all">
          <span className="text-white font-bold text-base sm:text-lg md:text-xl tracking-widest">CREDAI</span>
          <span className="text-white font-bold text-base sm:text-lg md:text-xl tracking-widest">MAHARERA</span>
          <span className="text-white font-bold text-base sm:text-lg md:text-xl tracking-widest">ISO 9001</span>
        </div>
      </div>
    </div>
  );
};

export default Home;