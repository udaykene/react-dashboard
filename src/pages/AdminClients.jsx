import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";

const AdminClients = () => {
  const [clients] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      phone: "+91 9876543210",
      status: "active",
      location: "Mumbai Central",
    },
    {
      id: 2,
      name: "Anita Desai",
      email: "anita@gmail.com",
      phone: "+91 9123456780",
      status: "inactive",
      location: "Andheri West",
    },
    {
      id: 3,
      name: "Amit Verma",
      email: "amit@gmail.com",
      phone: "+91 9988776655",
      status: "active",
      location: "Bandra East",
    },
  ]);

  const [filterStatus, setFilterStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState(""); // Added Search State

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

  // Improved Filtering Logic (Status + Search)
  const filteredClients = clients.filter((client) => {
    const matchesStatus =
      filterStatus === "all" || client.status === filterStatus;
    const matchesSearch =
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <AdminLayout>
      <div className="flex h-screen flex-col px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-6 sm:mb-8 flex flex-col items-start justify-between gap-3 sm:gap-4 sm:flex-row sm:items-center">
          <div className="w-full sm:w-auto">
            <h1 className="text-[1.5rem] font-bold text-[#1e293b]">Clients</h1>
            <p className="text-[#64748b]">
              Manage and track all registered clients
            </p>
          </div>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-[#f59e0b] px-6 py-3 font-semibold text-white hover:bg-[#d97706] transition-all">
            <i className="ri-user-add-line"></i>
            <span>New Client</span>
          </button>
        </div>

        {/* Filters and Search Section */}
        <div className="mb-6 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 rounded-[12px] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
          {/* FIXED TABS */}
          <div className="flex flex-wrap gap-2">
            {["all", "active", "inactive"].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`cursor-pointer rounded-lg border-2 px-4 py-2 text-sm font-bold transition-all duration-300
                  ${
                    filterStatus === status
                      ? "border-[#f59e0b] bg-[#fef3c7] text-[#d97706]"
                      : "border-transparent bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0]"
                  }`}
              >
                {/* Simplified text so it doesn't disappear */}
                <span className="capitalize">{status}</span>
                <span className="ml-1 opacity-70">
                  (
                  {status === "all"
                    ? clients.length
                    : clients.filter((c) => c.status === status).length}
                  )
                </span>
              </button>
            ))}
          </div>

          {/* SEARCH BOX (Now Functional) */}
          <div className="flex w-full lg:max-w-[320px] items-center gap-3 rounded-lg border-2 border-[#e2e8f0] bg-[#f8fafc] px-4 py-2">
            <i className="ri-search-line text-[#64748b]"></i>
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent text-sm text-[#1e293b] outline-none"
            />
          </div>
        </div>

        {/* Clients List */}
        <div className="flex flex-col gap-3 overflow-y-auto pb-10 no-scrollbar">
          {filteredClients.length === 0 ? (
            <div className="rounded-[12px] bg-white py-16 text-center shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
              <i className="ri-user-search-line text-[4rem] text-[#cbd5e1]"></i>
              <h3 className="text-xl font-bold text-[#1e293b] mt-4">
                No clients found
              </h3>
              <p className="text-[#64748b]">
                Try adjusting your search or filters.
              </p>
            </div>
          ) : (
            filteredClients.map((client) => (
              <div
                key={client.id}
                className="group flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-l-4 border-transparent bg-white p-5 rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:border-[#f59e0b] transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 flex-shrink-0 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#f59e0b] to-[#d97706] text-white text-xl">
                    <i className="ri-user-line"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1e293b]">{client.name}</h3>
                    <p className="text-sm text-[#64748b]">{client.location}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 text-sm text-[#64748b]">
                  <span className="flex items-center gap-2">
                    <i className="ri-mail-line"></i>
                    {client.email}
                  </span>
                  <span className="flex items-center gap-2">
                    <i className="ri-phone-line"></i>
                    {client.phone}
                  </span>
                </div>

                <div className="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-end">
                  <span
                    className={`px-3 py-1 rounded text-xs font-bold capitalize ${getStatusStyles(client.status)}`}
                  >
                    {client.status}
                  </span>
                  <div className="flex gap-2">
                    <button className="p-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition-colors">
                      <i className="ri-eye-line"></i>
                    </button>
                    <button className="p-2 bg-amber-50 text-amber-600 rounded hover:bg-amber-600 hover:text-white transition-colors">
                      <i className="ri-edit-line"></i>
                    </button>
                    <button className="p-2 bg-red-50 text-red-600 rounded hover:bg-red-600 hover:text-white transition-colors">
                      <i className="ri-delete-bin-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminClients;
