import React from "react";

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section - Matching your Landing Page style */}
      <div className="relative bg-gray-900 py-24 px-6">
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Skyscraper background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Crafting Your Vision</h1>
          <p className="text-xl text-orange-400 font-medium italic">Discover Peaceful Living</p>
        </div>
      </div>

      {/* Company Overview */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-orange-500 pl-4">
              About ParthBuilders
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Helping you find the perfect place to call home. We specialize in premium residential 
              and commercial real estate across the region, bringing modern architecture and 
              sustainable living to the heart of Ratnagiri, Maharashtra.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With a focus on integrity and craftsmanship, our team of experts works tirelessly 
              to ensure that every project we undertake becomes a landmark of quality and comfort.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1073&q=80" 
              alt="Modern office" 
            />
          </div>
        </div>
      </section>

      {/* Services/Stats Section - Dark Theme to match your footer */}
      <section className="bg-[#0a0f1a] py-16 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">10+</div>
              <div className="text-gray-400 uppercase tracking-widest text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-gray-400 uppercase tracking-widest text-sm">Properties Sold</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">15+</div>
              <div className="text-gray-400 uppercase tracking-widest text-sm">Active Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
              <div className="text-gray-400 uppercase tracking-widest text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Residential Sales', desc: 'Expert guidance in finding and purchasing your next luxury home.' },
            { title: 'Commercial Leasing', desc: 'Strategic spaces for businesses looking to grow in prime locations.' },
            { title: 'Investment Consulting', desc: 'Data-driven advice to maximize your real estate portfolio.' }
          ].map((val, i) => (
            <div key={i} className="p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-6 font-bold">
                0{i+1}
              </div>
              <h3 className="text-xl font-bold mb-3">{val.title}</h3>
              <p className="text-gray-600">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
