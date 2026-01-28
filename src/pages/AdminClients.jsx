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

  const getStatusStyles = (status) => {
    switch (status) {
      case "active":
        return "bg-[#d1fae5] text-[#065f46]"; // Matches your confirmed status
      case "inactive":
        return "bg-[#fee2e2] text-[#991b1b]"; // Matches your cancelled status
      default:
        return "bg-[#f1f5f9] text-[#475569]";
    }
  };

  const filteredClients =
    filterStatus === "all"
      ? clients
      : clients.filter((client) => client.status === filterStatus);

  return (
    <AdminLayout>
      <div className="flex h-screen flex-col">
        {/* Header Section */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="m-0 text-[2rem] font-bold text-[#1e293b]">Clients</h1>
            <p className="m-0 text-[1rem] text-[#64748b]">Manage and track all registered clients</p>
          </div>
          <button className="flex items-center gap-2 rounded-lg bg-[#f59e0b] px-6 py-3 font-semibold text-white transition-all hover:bg-[#d97706]">
            <i className="ri-user-add-line"></i>
            New Client
          </button>
        </div>

        {/* Filters and Search Section */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-[12px] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
          <div className="flex gap-2">
            {["all", "active", "inactive"].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`cursor-pointer rounded-lg border-2 px-5 py-2.5 text-[0.875rem] font-semibold transition-all duration-300 
                  ${
                    filterStatus === status
                      ? "border-[#f59e0b] bg-[#fef3c7] text-[#d97706]"
                      : "border-transparent bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0]"
                  }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)} ({
                  status === "all" ? clients.length : clients.filter(c => c.status === status).length
                })
              </button>
            ))}
          </div>

          <div className="flex min-w-[280px] flex-1 items-center gap-3 rounded-lg border-2 border-[#e2e8f0] bg-[#f8fafc] px-4 py-3 md:flex-none">
            <i className="ri-search-line text-[1.25rem] text-[#64748b]"></i>
            <input
              type="text"
              placeholder="Search clients..."
              className="flex-1 border-none bg-transparent text-[0.875rem] text-[#1e293b] outline-none placeholder:text-[#94a3b8]"
            />
          </div>
        </div>

        {/* Clients List */}
        <div className="flex flex-col gap-[10px] overflow-y-auto pr-2">
          {filteredClients.length === 0 ? (
            <div className="rounded-[12px] bg-white px-8 py-16 text-center shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
              <i className="ri-user-line mb-4 text-[4rem] text-[#cbd5e1]"></i>
              <h3 className="m-0 text-[1.5rem] font-bold text-[#1e293b]">No clients found</h3>
              <p className="m-0 text-[#64748b]">There are no {filterStatus} clients at the moment.</p>
            </div>
          ) : (
            filteredClients.map((client) => (
              <div
                key={client.id}
                className="group flex flex-col items-start justify-between gap-4 border-l-4 border-transparent bg-white p-6 transition-all duration-300 hover:translate-y-[-2px] hover:border-[#f59e0b] hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] lg:flex-row lg:items-center"
              >
                <div className="flex flex-1 items-center gap-6">
                  {/* Icon */}
                  <div className="flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-[12px] bg-gradient-to-br from-[#f59e0b] to-[#d97706] text-[1.75rem] text-white">
                    <i className="ri-user-line"></i>
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <h3 className="m-0 mb-2 text-[1.125rem] font-bold text-[#1e293b]">{client.name}</h3>
                    <p className="m-0 mb-3 flex items-center gap-2 text-[0.875rem] text-[#64748b]">
                      <i className="ri-map-pin-line text-[1rem]"></i>
                      {client.location}
                    </p>
                    <div className="flex flex-wrap gap-6">
                      <span className="flex items-center gap-2 text-[0.875rem] font-medium text-[#64748b]">
                        <i className="ri-mail-line text-[#94a3b8]"></i>
                        {client.email}
                      </span>
                      <span className="flex items-center gap-2 text-[0.875rem] font-medium text-[#64748b]">
                        <i className="ri-phone-line text-[#94a3b8]"></i>
                        {client.phone}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions and Status */}
                <div className="flex w-full items-center justify-between gap-4 pt-[10px] lg:w-auto lg:pt-0">
                  <span className={`rounded-md px-4 py-2 text-[0.875rem] font-semibold capitalize ${getStatusStyles(client.status)}`}>
                    {client.status}
                  </span>
                  <div className="flex gap-2">
                    <button className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md bg-[#dbeafe] text-[1.125rem] text-[#1e40af] transition-all hover:scale-110 hover:bg-[#3b82f6] hover:text-white">
                      <i className="ri-eye-line"></i>
                    </button>
                    <button className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md bg-[#fef3c7] text-[1.125rem] text-[#92400e] transition-all hover:scale-110 hover:bg-[#f59e0b] hover:text-white">
                      <i className="ri-edit-line"></i>
                    </button>
                    <button className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md bg-[#fee2e2] text-[1.125rem] text-[#991b1b] transition-all hover:scale-110 hover:bg-[#ef4444] hover:text-white">
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