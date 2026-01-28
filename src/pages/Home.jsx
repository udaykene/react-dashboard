import React from "react";

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <main className="relative min-h-[90vh] flex flex-col justify-center items-center w-full bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1170&auto=format&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl">
          {/* Badge */}
          <span className="mb-4 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium backdrop-blur-sm">
            🏆 Premier Real Estate Developers
          </span>

          <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg tracking-tight">
            Crafting Your <span className="text-[#c18d5c]">Vision</span>
          </h1>

          <p className="text-gray-200 text-xl md:text-2xl font-light mb-8 max-w-2xl">
            Building sustainable, modern living spaces designed for your comfort and peace of mind.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center">
              Explore Properties <span className="ml-2">→</span>
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white font-bold rounded-lg transition-all flex items-center justify-center">
              <span className="mr-2">▶</span> Watch Demo
            </button>
          </div>

          {/* Quick Search Bar - Essential for Real Estate */}
          <div className="w-full max-w-4xl bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl hidden md:flex items-center gap-4">
            <div className="flex-1 text-left px-4 border-r border-white/20">
              <p className="text-xs text-gray-400 uppercase font-bold">Location</p>
              <select className="bg-transparent text-white w-full outline-none">
                <option className="text-black">All Cities</option>
                <option className="text-black">Mumbai</option>
                <option className="text-black">Ratnagiri</option>
              </select>
            </div>
            <div className="flex-1 text-left px-4 border-r border-white/20">
              <p className="text-xs text-gray-400 uppercase font-bold">Property Type</p>
              <select className="bg-transparent text-white w-full outline-none">
                <option className="text-black">Residential</option>
                <option className="text-black">Commercial</option>
                <option className="text-black">Villa</option>
              </select>
            </div>
            <div className="flex-1 text-left px-4">
              <p className="text-xs text-gray-400 uppercase font-bold">Budget</p>
              <select className="bg-transparent text-white w-full outline-none">
                <option className="text-black">Any Price</option>
                <option className="text-black">$500k - $1M</option>
                <option className="text-black">$1M+</option>
              </select>
            </div>
            <button className="px-8 py-3 bg-[#c18d5c] hover:bg-[#a6784d] text-white font-bold rounded-xl transition-all">
              Search
            </button>
          </div>
        </div>
      </main>

      {/* Stats Section - Builds Authority */}
      <section className="bg-[#0f172a] py-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-white">15+</h3>
            <p className="text-gray-400 text-sm">Years Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white">200+</h3>
            <p className="text-gray-400 text-sm">Completed Projects</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white">5k+</h3>
            <p className="text-gray-400 text-sm">Happy Families</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white">12</h3>
            <p className="text-gray-400 text-sm">Ongoing Sites</p>
          </div>
        </div>
      </section>

      {/* Trust Badges / Partners (Optional) */}
      <div className="bg-[#0f172a] py-6 overflow-hidden border-b border-white/5">
        <div className="flex justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          <span className="text-white font-bold text-xl tracking-widest">CREDAI</span>
          <span className="text-white font-bold text-xl tracking-widest">MAHARERA</span>
          <span className="text-white font-bold text-xl tracking-widest">ISO 9001</span>
        </div>
      </div>
    </div>
  );
};

export default Home;