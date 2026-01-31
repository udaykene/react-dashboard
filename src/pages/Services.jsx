import React from "react";

const Services = () => {
  const services = [
    {
      title: "Residential Development",
      description:
        "From luxury villas to modern apartments, we create peaceful living spaces designed for the modern family.",
      icon: "🏠",
    },
    {
      title: "Commercial Construction",
      description:
        "Strategic business hubs and retail spaces built with global standards in the heart of Maharashtra.",
      icon: "🏢",
    },
    {
      title: "Property Management",
      description:
        "Comprehensive care for your real estate assets, ensuring value appreciation and seamless maintenance.",
      icon: "🔑",
    },
    {
      title: "Investment Consulting",
      description:
        "Expert advice on real estate portfolios to help you make data-driven decisions in the property market.",
      icon: "📈",
    },
    {
      title: "Interior Design",
      description:
        "Turning houses into homes with bespoke interior solutions that reflect your personal style.",
      icon: "🎨",
    },
    {
      title: "Legal & Documentation",
      description:
        "Hassle-free property registration and legal verification services for total peace of mind.",
      icon: "⚖️",
    },
  ];

  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="bg-[#0a0f1a] py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Our Services
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-orange-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-gray-300 sm:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed px-4">
            At ParthBuilders, we provide end-to-end real estate solutions tailored
            to your unique needs.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 sm:p-7 md:p-8 border border-gray-100 rounded-xl sm:rounded-2xl bg-gray-50 hover:bg-[#0a0f1a] transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer transform hover:-translate-y-1"
            >
              <div className="text-3xl sm:text-4xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-white mb-3 sm:mb-4 leading-snug">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-300 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-4 sm:mt-6 flex items-center text-orange-500 text-sm sm:text-base font-bold cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Image Section */}
            <div className="relative w-full order-2 lg:order-1">
              <div className="relative aspect-[4/3] sm:aspect-video lg:aspect-square w-full">
                <img
                  src="https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Quality Construction"
                  className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-full object-cover"
                />
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-orange-500 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg">
                  <p className="text-white font-bold text-base sm:text-lg md:text-xl text-center leading-snug">
                    Quality First
                    <br />
                    Approach
                  </p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="order-1 lg:order-2 lg:pl-6 xl:pl-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                How We Work
              </h2>
              <ul className="space-y-4 sm:space-y-6">
                {[
                  {
                    t: "Consultation",
                    d: "We sit down to understand your vision and budget.",
                  },
                  {
                    t: "Planning",
                    d: "Architectural blueprints and regulatory approvals.",
                  },
                  {
                    t: "Execution",
                    d: "High-quality construction with regular site updates.",
                  },
                ].map((step, i) => (
                  <li key={i} className="flex items-start group">
                    <div className="bg-[#0a0f1a] text-white w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5 sm:mt-1 font-semibold text-sm sm:text-base group-hover:bg-orange-500 transition-colors duration-300">
                      {i + 1}
                    </div>
                    <div className="ml-3 sm:ml-4 flex-1">
                      <h4 className="font-bold text-base sm:text-lg text-gray-900 mb-1">
                        {step.t}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {step.d}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
