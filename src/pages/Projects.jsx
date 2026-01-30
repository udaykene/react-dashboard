import React, { useState } from "react";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Azure Heights",
      category: "Residential",
      location: "Ratnagiri, MH",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      status: "Completed",
    },
    {
      id: 2,
      title: "Parth Commercial Hub",
      category: "Commercial",
      location: "Chiplun, MH",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      status: "Ongoing",
    },
    {
      id: 3,
      title: "Serene Villas",
      category: "Residential",
      location: "Ratnagiri Coast",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
      status: "Upcoming",
    },
    {
      id: 4,
      title: "Skyline Business Park",
      category: "Commercial",
      location: "Ratnagiri City",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      status: "Completed",
    },
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="bg-gray-50 w-full overflow-x-hidden">

      {/* HEADER */}
      <div className="bg-[#0a0f1a] py-14 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            Our Projects
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-orange-400 italic">
            Building Landmarks, Creating Legacies
          </p>
        </div>
      </div>

      {/* FILTERS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          {["All", "Residential", "Commercial"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition ${filter === tab
                ? "bg-orange-500 text-white shadow-lg"
                : "bg-white text-gray-600 hover:bg-gray-200"
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
              className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition flex flex-col h-full"
            >


              {/* IMAGE */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-orange-500 text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {project.status}
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex flex-col p-4 sm:p-6 flex-1">

                <div className="flex flex-col">
                  <p className="text-orange-500 text-xs sm:text-sm font-semibold mb-1 uppercase tracking-wider">
                    {project.category}
                  </p>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                    {project.title}
                  </h3>

                  <div className="flex items-center text-gray-500 text-xs sm:text-sm mb-5 sm:mb-6">
                    <span className="mr-2">📍</span>
                    {project.location}
                  </div>
                </div>

                <button className="mt-auto w-full border-2 border-gray-900 py-2 text-sm sm:text-base font-bold rounded hover:bg-gray-900 hover:text-white transition">
                  View Details
                </button>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* CTA */}
      <div className="bg-white py-14 sm:py-20 px-4 sm:px-6 border-t">

        <div className="max-w-4xl mx-auto text-center bg-[#0a0f1a] p-6 sm:p-10 md:p-12 rounded-3xl shadow-2xl">

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
            Want to see our latest site work?
          </h2>

          <button className="bg-orange-500 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-bold rounded-md hover:bg-orange-600 transition">
            Request Brochure
          </button>

        </div>
      </div>

    </div>
  );
};

export default Projects;
