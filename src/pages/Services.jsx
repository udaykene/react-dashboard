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
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#0a0f1a] py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our Services
        </h1>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          At ParthBuilders, we provide end-to-end real estate solutions tailored
          to your unique needs.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 border border-gray-100 rounded-2xl bg-gray-50 hover:bg-[#0a0f1a] transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-400 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 flex items-center text-orange-500 font-bold cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <span className="ml-2">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-orange-500 p-8 rounded-2xl hidden md:block">
              <p className="text-white font-bold text-xl text-center">
                Quality First
                <br />
                Approach
              </p>
            </div>
          </div>
          <div className="lg:pl-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How We Work
            </h2>
            <ul className="space-y-6">
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
                <li key={i} className="flex items-start">
                  <div className="bg-[#0a0f1a] text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1">
                    {i + 1}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">{step.t}</h4>
                    <p className="text-gray-600">{step.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
