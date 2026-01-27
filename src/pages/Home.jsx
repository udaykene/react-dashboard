import React from "react";

const Home = () => {
  return (
    <main className="relative h-screen flex flex-col justify-center items-center w-full bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        {/* Main Headline */}
        <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">
          Crafting Your Vision
        </h1>

        {/* Sub-headline (Corrected "Peaceful" spelling) */}
        <p className="text-[#c18d5c] text-3xl md:text-5xl font-semibold italic">
          Discover Peaceful Living
        </p>
      </div>
      <div className="relative z-10 flex flex-col mt-5 sm:flex-row gap-4">
        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg flex items-center justify-center transition-all">
          Get Started <span className="ml-2">→</span>
        </button>

        <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium rounded-lg flex items-center justify-center transition-all">
          <span className="mr-2">▶</span> Watch Demo
        </button>
      </div>
    </main>
  );
};

export default Home;
