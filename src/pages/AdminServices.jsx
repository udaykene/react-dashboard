import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";

const AdminServices = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "Residential Construction",
      category: "Construction",
      description: "Complete residential building construction from foundation to finishing",
      price: "$150/sq.ft",
      duration: "6-12 months",
      status: "active",
      icon: "ri-home-4-line",
      color: "#3b82f6",
      clients: 24,
      rating: 4.8,
    },
    {
      id: 2,
      name: "Commercial Building",
      category: "Construction",
      description: "Commercial spaces including offices, retail, and business complexes",
      price: "$200/sq.ft",
      duration: "8-18 months",
      status: "active",
      icon: "ri-building-line",
      color: "#10b981",
      clients: 18,
      rating: 4.9,
    },
    {
      id: 3,
      name: "Interior Design",
      category: "Design",
      description: "Modern interior design solutions for residential and commercial spaces",
      price: "$50/sq.ft",
      duration: "2-4 months",
      status: "active",
      icon: "ri-pencil-ruler-2-line",
      color: "#f59e0b",
      clients: 32,
      rating: 4.7,
    },
    {
      id: 4,
      name: "Renovation & Remodeling",
      category: "Renovation",
      description: "Complete renovation services for existing structures",
      price: "$80/sq.ft",
      duration: "3-6 months",
      status: "active",
      icon: "ri-hammer-line",
      color: "#8b5cf6",
      clients: 21,
      rating: 4.6,
    },
    {
      id: 5,
      name: "Architectural Planning",
      category: "Design",
      description: "Professional architectural design and planning services",
      price: "$5,000 - $15,000",
      duration: "1-3 months",
      status: "active",
      icon: "ri-draft-line",
      color: "#ec4899",
      clients: 28,
      rating: 4.9,
    },
    {
      id: 6,
      name: "Project Consultation",
      category: "Consultation",
      description: "Expert consultation for construction and design projects",
      price: "$100/hour",
      duration: "Flexible",
      status: "active",
      icon: "ri-team-line",
      color: "#06b6d4",
      clients: 45,
      rating: 4.8,
    },
    {
      id: 7,
      name: "Landscape Design",
      category: "Design",
      description: "Beautiful landscape and outdoor space design services",
      price: "$30/sq.ft",
      duration: "1-2 months",
      status: "inactive",
      icon: "ri-plant-line",
      color: "#84cc16",
      clients: 12,
      rating: 4.5,
    },
    {
      id: 8,
      name: "Structural Engineering",
      category: "Engineering",
      description: "Structural analysis and engineering services",
      price: "$8,000 - $20,000",
      duration: "2-4 months",
      status: "active",
      icon: "ri-ruler-2-line",
      color: "#f43f5e",
      clients: 16,
      rating: 4.7,
    },
  ]);

  const [filterCategory, setFilterCategory] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  const serviceStats = [
    {
      title: "Total Services",
      value: "8",
      icon: "ri-service-line",
      color: "#3b82f6",
      trend: "+2 new",
    },
    {
      title: "Active Services",
      value: "7",
      icon: "ri-checkbox-circle-line",
      color: "#10b981",
      trend: "87.5% active",
    },
    {
      title: "Total Clients",
      value: "196",
      icon: "ri-user-line",
      color: "#f59e0b",
      trend: "+12 this month",
    },
    {
      title: "Avg. Rating",
      value: "4.7",
      icon: "ri-star-line",
      color: "#8b5cf6",
      trend: "Excellent",
    },
  ];

  const categories = [
    { name: "all", count: services.length },
    { name: "construction", count: services.filter(s => s.category === "Construction").length },
    { name: "design", count: services.filter(s => s.category === "Design").length },
    { name: "renovation", count: services.filter(s => s.category === "Renovation").length },
    { name: "consultation", count: services.filter(s => s.category === "Consultation").length },
    { name: "engineering", count: services.filter(s => s.category === "Engineering").length },
  ];

  const getStatusStyles = (status) => {
    switch (status) {
      case "active":
        return "bg-[#d1fae5] text-[#065f46]";
      case "inactive":
        return "bg-[#fee2e2] text-[#991b1b]";
      default:
        return "bg-[#f1f5f9] text-[#475569]";
    }
  };

  const filteredServices = services.filter((service) => {
    const matchesCategory = filterCategory === "all" || service.category.toLowerCase() === filterCategory;
    const matchesStatus = filterStatus === "all" || service.status === filterStatus;
    return matchesCategory && matchesStatus;
  });

  const handleStatusToggle = (id) => {
    setServices((prev) =>
      prev.map((service) =>
        service.id === id
          ? { ...service, status: service.status === "active" ? "inactive" : "active" }
          : service
      )
    );
  };

  return (
    <AdminLayout>
      <div className="flex h-screen flex-col overflow-y-auto no-scrollbar pb-4 sm:pb-6 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-6 sm:mb-8 flex flex-col items-start justify-between gap-3 sm:gap-4 md:flex-row md:items-center">
          <div className="w-full md:w-auto">
            <h1 className="m-0 text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] font-bold text-[#1e293b] leading-tight">
              Services
            </h1>
            <p className="m-0 text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] text-[#64748b] mt-1 sm:mt-0">
              Manage all construction and design services
            </p>
          </div>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-[#f59e0b] px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 font-semibold text-white transition-all hover:bg-[#d97706] text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] whitespace-nowrap">
            <i className="ri-add-line text-base sm:text-lg"></i>
            <span className="hidden xs:inline">Add New Service</span>
            <span className="xs:hidden">Add Service</span>
          </button>
        </div>

        {/* Service Stats Grid */}
        <div className="mb-6 sm:mb-8 grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceStats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-row items-start gap-3 sm:gap-4 rounded-[12px] border-t-4 bg-white p-4 sm:p-5 md:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)]"
              style={{ borderTopColor: stat.color }}
            >
              <div
                className="flex h-[50px] w-[50px] sm:h-[55px] sm:w-[55px] md:h-[60px] md:w-[60px] flex-shrink-0 items-center justify-center rounded-[12px] text-[1.5rem] sm:text-[1.625rem] md:text-[1.75rem] text-white"
                style={{ backgroundColor: stat.color }}
              >
                <i className={stat.icon}></i>
              </div>
              <div className="flex-1 min-w-0">
                <p className="m-0 mb-1.5 sm:mb-2 text-[0.8125rem] sm:text-[0.875rem] font-medium text-[#64748b]">
                  {stat.title}
                </p>
                <h3 className="m-0 mb-1.5 sm:mb-2 text-[1.375rem] sm:text-[1.5rem] md:text-[1.75rem] font-bold text-[#1e293b]">
                  {stat.value}
                </h3>
                <span className="text-[0.8125rem] sm:text-[0.875rem] font-medium text-[#64748b]">
                  {stat.trend}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Filters Section */}
        <div className="mb-4 sm:mb-5 md:mb-6 flex flex-col gap-3 sm:gap-4 rounded-[12px] bg-white p-4 sm:p-5 md:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.05)] lg:flex-row lg:items-center lg:justify-between">
          {/* Category Filter */}
          <div className="flex flex-col gap-2 sm:gap-3">
            <label className="text-[0.8125rem] sm:text-[0.875rem] font-semibold text-[#64748b]">Category</label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setFilterCategory(category.name)}
                  className={`flex-1 xs:flex-initial rounded-lg border-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 text-[0.75rem] sm:text-[0.8125rem] md:text-[0.875rem] font-semibold transition-all whitespace-nowrap ${
                    filterCategory === category.name
                      ? "border-[#f59e0b] bg-[#fef3c7] text-[#d97706]"
                      : "border-transparent bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0]"
                  }`}
                >
                  <span className="hidden xs:inline">
                    {category.name.charAt(0).toUpperCase() + category.name.slice(1)} ({category.count})
                  </span>
                  <span className="xs:hidden">
                    {category.name.charAt(0).toUpperCase() + category.name.slice(1).slice(0, 4)} ({category.count})
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Status Filter & Search */}
          <div className="flex flex-col gap-2 sm:gap-3 lg:items-end">
            <label className="text-[0.8125rem] sm:text-[0.875rem] font-semibold text-[#64748b]">Status</label>
            <div className="flex flex-wrap gap-2">
              {["all", "active", "inactive"].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`flex-1 xs:flex-initial rounded-lg border-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 text-[0.75rem] sm:text-[0.8125rem] md:text-[0.875rem] font-semibold transition-all whitespace-nowrap ${
                    filterStatus === status
                      ? "border-[#f59e0b] bg-[#fef3c7] text-[#d97706]"
                      : "border-transparent bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0]"
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredServices.length === 0 ? (
            <div className="col-span-full rounded-[12px] bg-white px-6 sm:px-8 py-12 sm:py-14 md:py-16 text-center shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
              <i className="ri-service-line mb-3 sm:mb-4 text-[3rem] sm:text-[3.5rem] md:text-[4rem] text-[#cbd5e1]"></i>
              <h3 className="m-0 mb-2 text-[1.25rem] sm:text-[1.375rem] md:text-[1.5rem] font-bold text-[#1e293b]">
                No services found
              </h3>
              <p className="m-0 text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] text-[#64748b]">
                No services match your current filters.
              </p>
            </div>
          ) : (
            filteredServices.map((service) => (
              <div
                key={service.id}
                className="group flex flex-col rounded-[12px] border-t-4 bg-white p-4 sm:p-5 md:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)]"
                style={{ borderTopColor: service.color }}
              >
                {/* Service Header */}
                <div className="mb-3 sm:mb-4 flex items-start justify-between">
                  <div
                    className="flex h-[50px] w-[50px] sm:h-[55px] sm:w-[55px] md:h-[60px] md:w-[60px] flex-shrink-0 items-center justify-center rounded-[12px] text-[1.5rem] sm:text-[1.625rem] md:text-[1.75rem] text-white"
                    style={{ backgroundColor: service.color }}
                  >
                    <i className={service.icon}></i>
                  </div>
                  <span
                    className={`rounded-md px-2.5 sm:px-3 py-1 sm:py-1.5 text-[0.6875rem] sm:text-[0.75rem] font-semibold capitalize whitespace-nowrap ${getStatusStyles(
                      service.status
                    )}`}
                  >
                    {service.status}
                  </span>
                </div>

                {/* Service Info */}
                <div className="mb-3 sm:mb-4 flex-1">
                  <h3 className="m-0 mb-1.5 sm:mb-2 text-[1rem] sm:text-[1.0625rem] md:text-[1.125rem] font-bold text-[#1e293b]">
                    {service.name}
                  </h3>
                  <p className="m-0 mb-2.5 sm:mb-3 text-[0.8125rem] sm:text-[0.875rem] leading-relaxed text-[#64748b]">
                    {service.description}
                  </p>
                  <div className="mb-2.5 sm:mb-3 inline-block rounded-md bg-[#f1f5f9] px-2.5 sm:px-3 py-1 text-[0.6875rem] sm:text-[0.75rem] font-semibold text-[#475569]">
                    {service.category}
                  </div>
                </div>

                {/* Service Meta */}
                <div className="mb-3 sm:mb-4 flex flex-col gap-2.5 sm:gap-3 border-t-2 border-[#f1f5f9] pt-3 sm:pt-4">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 sm:gap-2 text-[0.8125rem] sm:text-[0.875rem] text-[#64748b]">
                      <i className="ri-money-dollar-circle-line text-[0.9375rem] sm:text-[1rem] text-[#94a3b8] flex-shrink-0"></i>
                      <span className="hidden xs:inline">Pricing</span>
                      <span className="xs:hidden">Price</span>
                    </span>
                    <span className="text-[0.8125rem] sm:text-[0.875rem] font-bold text-[#1e293b] truncate ml-2">
                      {service.price}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 sm:gap-2 text-[0.8125rem] sm:text-[0.875rem] text-[#64748b]">
                      <i className="ri-time-line text-[0.9375rem] sm:text-[1rem] text-[#94a3b8] flex-shrink-0"></i>
                      Duration
                    </span>
                    <span className="text-[0.8125rem] sm:text-[0.875rem] font-bold text-[#1e293b]">
                      {service.duration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 sm:gap-2 text-[0.8125rem] sm:text-[0.875rem] text-[#64748b]">
                      <i className="ri-user-line text-[0.9375rem] sm:text-[1rem] text-[#94a3b8] flex-shrink-0"></i>
                      Clients
                    </span>
                    <span className="text-[0.8125rem] sm:text-[0.875rem] font-bold text-[#1e293b]">
                      {service.clients}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 sm:gap-2 text-[0.8125rem] sm:text-[0.875rem] text-[#64748b]">
                      <i className="ri-star-fill text-[0.9375rem] sm:text-[1rem] text-[#fbbf24] flex-shrink-0"></i>
                      Rating
                    </span>
                    <span className="text-[0.8125rem] sm:text-[0.875rem] font-bold text-[#1e293b]">
                      {service.rating} / 5.0
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-1.5 sm:gap-2">
                  <button className="flex flex-1 items-center justify-center gap-1.5 sm:gap-2 rounded-lg bg-[#dbeafe] px-3 sm:px-4 py-2 sm:py-2.5 text-[0.8125rem] sm:text-[0.875rem] font-semibold text-[#1e40af] transition-all hover:scale-105 hover:bg-[#3b82f6] hover:text-white">
                    <i className="ri-eye-line text-sm sm:text-base"></i>
                    <span className="hidden xs:inline">View</span>
                  </button>
                  <button className="flex flex-1 items-center justify-center gap-1.5 sm:gap-2 rounded-lg bg-[#fef3c7] px-3 sm:px-4 py-2 sm:py-2.5 text-[0.8125rem] sm:text-[0.875rem] font-semibold text-[#92400e] transition-all hover:scale-105 hover:bg-[#f59e0b] hover:text-white">
                    <i className="ri-edit-line text-sm sm:text-base"></i>
                    <span className="hidden xs:inline">Edit</span>
                  </button>
                  <button
                    onClick={() => handleStatusToggle(service.id)}
                    className={`flex items-center justify-center rounded-lg px-2.5 sm:px-3 py-2 sm:py-2.5 text-[1rem] sm:text-[1.125rem] transition-all hover:scale-110 ${
                      service.status === "active"
                        ? "bg-[#fee2e2] text-[#991b1b] hover:bg-[#ef4444] hover:text-white"
                        : "bg-[#d1fae5] text-[#065f46] hover:bg-[#10b981] hover:text-white"
                    }`}
                    title={service.status === "active" ? "Deactivate" : "Activate"}
                  >
                    <i className={service.status === "active" ? "ri-pause-circle-line" : "ri-play-circle-line"}></i>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Service Categories Overview */}
        <div className="mt-4 sm:mt-5 md:mt-6 rounded-[12px] bg-white p-4 sm:p-5 md:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
          <div className="mb-4 sm:mb-5 md:mb-6 border-b-2 border-[#f1f5f9] pb-3 sm:pb-4">
            <h2 className="text-[1.125rem] sm:text-[1.25rem] font-bold text-[#1e293b]">
              Service Categories Overview
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Construction", count: 2, icon: "ri-building-line", color: "#3b82f6" },
              { name: "Design", count: 3, icon: "ri-pencil-ruler-2-line", color: "#10b981" },
              { name: "Renovation", count: 1, icon: "ri-hammer-line", color: "#f59e0b" },
              { name: "Consultation", count: 1, icon: "ri-team-line", color: "#8b5cf6" },
              { name: "Engineering", count: 1, icon: "ri-ruler-2-line", color: "#ec4899" },
            ].map((cat, index) => (
              <div
                key={index}
                className="flex items-center gap-3 sm:gap-4 rounded-lg bg-[#f8fafc] p-3 sm:p-4 transition-all hover:translate-x-1 hover:bg-[#f1f5f9]"
              >
                <div
                  className="flex h-[45px] w-[45px] sm:h-[50px] sm:w-[50px] flex-shrink-0 items-center justify-center rounded-[10px] text-[1.375rem] sm:text-[1.5rem] text-white"
                  style={{ backgroundColor: cat.color }}
                >
                  <i className={cat.icon}></i>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="m-0 text-[0.9375rem] sm:text-[1rem] font-bold text-[#1e293b] truncate">
                    {cat.name}
                  </h4>
                  <p className="m-0 text-[0.8125rem] sm:text-[0.875rem] text-[#64748b]">
                    {cat.count} {cat.count === 1 ? "Service" : "Services"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminServices;
