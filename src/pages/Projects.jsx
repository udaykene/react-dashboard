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
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-[#0a0f1a] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Projects
          </h1>
          <p className="text-orange-400 text-lg italic">
            Building Landmarks, Creating Legacies
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex justify-center space-x-4 mb-12">
          {["All", "Residential", "Commercial"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
                filter === tab
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {project.status}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-orange-500 text-sm font-semibold mb-1 uppercase tracking-wider">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center text-gray-500 text-sm mb-6">
                  <span className="mr-2">📍</span> {project.location}
                </div>

                <button className="w-full border-2 border-gray-900 text-gray-900 font-bold py-2 rounded hover:bg-gray-900 hover:text-white transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-20 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center bg-[#0a0f1a] p-12 rounded-3xl shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">
            Want to see our latest site work?
          </h2>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-md font-bold hover:bg-orange-600 transition-colors">
            Request Brochure
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
