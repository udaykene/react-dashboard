import React from "react";

const About = () => {
  return (
    <div className="bg-white w-full overflow-x-hidden">

      {/* HERO */}
      <div className="relative bg-gray-900 py-16 sm:py-20 md:py-28 px-4 sm:px-6">
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2070&q=80"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-3">
            Crafting Your Vision
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-orange-400 italic">
            Discover Peaceful Living
          </p>
        </div>
      </div>

      {/* ABOUT */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-l-4 border-orange-500 pl-4">
              About ParthBuilders
            </h2>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
              Helping you find the perfect place to call home. We specialize in premium residential 
              and commercial real estate across Ratnagiri, Maharashtra.
            </p>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Our team ensures every project becomes a landmark of quality and comfort.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1073&q=80"
              className="w-full h-[220px] sm:h-[320px] md:h-[360px] lg:h-[420px] object-cover"
              alt=""
            />
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#0a0f1a] py-12 sm:py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              ["10+", "Years Experience"],
              ["500+", "Properties Sold"],
              ["15+", "Active Projects"],
              ["100%", "Client Satisfaction"]
            ].map(([num, label], i) => (
              <div key={i}>
                <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-1">
                  {num}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 tracking-widest uppercase">
                  {label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12">
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {[
            { title: "Residential Sales", desc: "Expert guidance in purchasing luxury homes." },
            { title: "Commercial Leasing", desc: "Prime business spaces in growth areas." },
            { title: "Investment Consulting", desc: "Smart strategies to maximize ROI." }
          ].map((v, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 border rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center font-bold mb-5">
                0{i + 1}
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-2">
                {v.title}
              </h3>

              <p className="text-gray-600 text-sm sm:text-base">
                {v.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default About;
