import React from "react";

const SalonServices = () => {
  const services = [
    {
      title: "Hair Styling & Cuts",
      description:
        "From classic cuts to contemporary styles, our expert stylists create looks that enhance your natural beauty and personality.",
      icon: "✂️",
    },
    {
      title: "Hair Color & Highlights",
      description:
        "Transform your look with vibrant colors, subtle highlights, or complete color makeovers using premium products.",
      icon: "🎨",
    },
    {
      title: "Bridal Makeup",
      description:
        "Look stunning on your special day with our professional bridal makeup packages and hair styling services.",
      icon: "👰",
    },
    {
      title: "Spa & Massage",
      description:
        "Relax and rejuvenate with our luxurious spa treatments, aromatherapy, and therapeutic massage services.",
      icon: "💆",
    },
    {
      title: "Facial & Skin Care",
      description:
        "Achieve radiant, glowing skin with our customized facials and advanced skincare treatments.",
      icon: "✨",
    },
    {
      title: "Nail Art & Manicure",
      description:
        "Pamper your hands and feet with our premium manicure, pedicure, and creative nail art services.",
      icon: "💅",
    },
  ];

  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 text-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1740&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-300">Services</span>
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-gray-200 max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed px-4">
            Experience luxury beauty treatments tailored to enhance your natural radiance and confidence.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 sm:p-7 md:p-8 border border-gray-200 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:bg-gradient-to-br hover:from-rose-500 hover:to-pink-500 transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer transform hover:-translate-y-2"
            >
              <div className="text-3xl sm:text-4xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-white mb-3 sm:mb-4 leading-snug">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 group-hover:text-white/90 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-4 sm:mt-6 flex items-center text-rose-500 group-hover:text-white text-sm sm:text-base font-bold cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Image Section */}
            <div className="relative w-full order-2 lg:order-1">
              <div className="relative aspect-[4/3] sm:aspect-video lg:aspect-square w-full">
                <img
                  src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=1740&auto=format&fit=crop"
                  alt="Luxury Salon Experience"
                  className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl sm:rounded-3xl"></div>
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-gradient-to-br from-rose-500 to-pink-500 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg">
                  <p className="text-white font-bold text-base sm:text-lg md:text-xl text-center leading-snug">
                    Beauty First
                    <br />
                    Approach
                  </p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="order-1 lg:order-2 lg:pl-6 xl:pl-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">Work</span>
              </h2>
              <ul className="space-y-4 sm:space-y-6">
                {[
                  {
                    t: "Consultation",
                    d: "We discuss your style preferences and desired look in detail.",
                  },
                  {
                    t: "Customization",
                    d: "Personalized treatment plan tailored to your unique needs.",
                  },
                  {
                    t: "Transformation",
                    d: "Expert application using premium products and techniques.",
                  },
                ].map((step, i) => (
                  <li key={i} className="flex items-start group">
                    <div className="bg-gradient-to-br from-rose-500 to-pink-500 text-white w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5 sm:mt-1 font-semibold text-sm sm:text-base group-hover:scale-110 transition-transform duration-300 shadow-md">
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

      {/* Pricing Packages Section */}
      <div className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=1740&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-rose-900/90 via-pink-900/85 to-rose-900/90"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Special Packages
            </h2>
            <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto">
              Choose from our curated packages designed for every occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Express Makeover",
                price: "$99",
                features: ["Hair Wash & Style", "Quick Makeup", "Nail Polish"]
              },
              {
                name: "Deluxe Package",
                price: "$199",
                features: ["Premium Hair Treatment", "Full Makeup", "Manicure & Pedicure", "Facial"]
              },
              {
                name: "Bridal Special",
                price: "$499",
                features: ["Bridal Makeup", "Hair Styling", "Spa Treatment", "Nail Art", "Pre-Wedding Trials"]
              }
            ].map((pkg, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all group">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  {pkg.price}
                </div>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-white/90 text-sm">
                      <span className="text-rose-300 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-white hover:bg-gray-100 text-rose-600 font-bold py-3 rounded-lg transition-all group-hover:scale-105">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Special Features */}
      <div className="bg-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">Us</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: "✨", title: "Premium Products", desc: "Only the finest brands" },
              { icon: "👑", title: "Expert Team", desc: "Certified professionals" },
              { icon: "💖", title: "Personalized Care", desc: "Tailored to your needs" },
              { icon: "🎯", title: "Latest Trends", desc: "Always up-to-date" }
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-xl border border-gray-200 hover:border-rose-300 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
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

export default SalonServices;