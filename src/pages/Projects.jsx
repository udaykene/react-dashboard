import React, { useState } from "react";

const SalonGallery = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Bridal Makeover",
      category: "Makeup",
      location: "Wedding Special",
      image:
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80",
      status: "Featured",
    },
    {
      id: 2,
      title: "Hair Color Transformation",
      category: "Hair",
      location: "Balayage & Highlights",
      image:
        "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
      status: "Popular",
    },
    {
      id: 3,
      title: "Luxury Spa Experience",
      category: "Spa",
      location: "Full Body Treatment",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      status: "New",
    },
    {
      id: 4,
      title: "Modern Haircut & Style",
      category: "Hair",
      location: "Trendy Cuts",
      image:
        "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80",
      status: "Featured",
    },
    {
      id: 5,
      title: "Glamour Makeup",
      category: "Makeup",
      location: "Evening Look",
      image:
        "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80",
      status: "Popular",
    },
    {
      id: 6,
      title: "Relaxing Massage",
      category: "Spa",
      location: "Aromatherapy",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
      status: "New",
    },
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="bg-gray-50 w-full overflow-x-hidden">

      {/* HEADER */}
      <div className="relative bg-gray-900 py-14 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=1740&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-300">Gallery</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-rose-300 italic">
            Transformations That Inspire Confidence
          </p>
        </div>
      </div>

      {/* FILTERS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          {["All", "Hair", "Makeup", "Spa"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-all ${
                filter === tab
                  ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-500/30"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-rose-300 transition-all flex flex-col h-full"
            >

              {/* IMAGE */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase shadow-lg">
                  {project.status}
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex flex-col p-4 sm:p-6 flex-1">

                <div className="flex flex-col">
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500 text-xs sm:text-sm font-semibold mb-1 uppercase tracking-wider">
                    {project.category}
                  </p>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                    {project.title}
                  </h3>

                  <div className="flex items-center text-gray-500 text-xs sm:text-sm mb-5 sm:mb-6">
                    <span className="mr-2">✨</span>
                    {project.location}
                  </div>
                </div>

                <button className="mt-auto w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white py-2 text-sm sm:text-base font-bold rounded-lg transition-all shadow-md hover:shadow-lg">
                  View Details
                </button>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* CTA */}
      <div className="relative py-14 sm:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1740&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-rose-900/90 via-pink-900/85 to-rose-900/90"></div>

        <div className="relative max-w-4xl mx-auto text-center">

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Transform Your Look?
          </h2>
          
          <p className="text-white/90 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the luxury treatment you deserve.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="px-6 sm:px-8 py-3 bg-white hover:bg-gray-100 text-rose-600 text-sm sm:text-base font-bold rounded-lg transition-all shadow-xl">
              Book Appointment
            </button>
            <button className="px-6 sm:px-8 py-3 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white text-sm sm:text-base font-bold rounded-lg transition-all">
              View Services
            </button>
          </div>

        </div>
      </div>

      {/* TESTIMONIAL SECTION */}
      <div className="bg-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            What Our Clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">Say</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Sarah Johnson",
                feedback: "Absolutely amazing experience! The team is so professional and talented.",
                rating: 5
              },
              {
                name: "Emily Davis",
                feedback: "Best salon in town. I always leave feeling beautiful and confident!",
                rating: 5
              },
              {
                name: "Jessica Smith",
                feedback: "The spa treatments are incredible. So relaxing and rejuvenating!",
                rating: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <span key={index} className="text-rose-500 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4 italic">"{testimonial.feedback}"</p>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TRUST BADGES */}
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

export default SalonGallery;