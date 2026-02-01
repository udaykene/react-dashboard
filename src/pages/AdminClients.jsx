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
      <div className="flex h-screen flex-col px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-6 sm:mb-8 flex flex-col items-start justify-between gap-3 sm:gap-4 sm:flex-row sm:items-center">
          <div className="w-full sm:w-auto">
            <h1 className="m-0 text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] font-bold text-[#1e293b] leading-tight">
              Clients
            </h1>
            <p className="m-0 text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] text-[#64748b] mt-1 sm:mt-0">
              Manage and track all registered clients
            </p>
          </div>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-[#f59e0b] px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 font-semibold text-white transition-all hover:bg-[#d97706] text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] whitespace-nowrap">
            <i className="ri-user-add-line text-base sm:text-lg"></i>
            <span className="hidden xs:inline">New Client</span>
            <span className="xs:hidden">Add Client</span>
          </button>
        </div>

        {/* Filters and Search Section */}
        <div className="mb-4 sm:mb-5 md:mb-6 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 sm:gap-4 rounded-[12px] bg-white p-4 sm:p-5 md:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
          <div className="flex flex-wrap gap-2 w-full lg:w-auto">
            {["all", "active", "inactive"].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`cursor-pointer rounded-lg border-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 text-[0.75rem] sm:text-[0.8125rem] md:text-[0.875rem] font-semibold transition-all duration-300 flex-1 sm:flex-initial whitespace-nowrap
                  ${
                    filterStatus === status
                      ? "border-[#f59e0b] bg-[#fef3c7] text-[#d97706]"
                      : "border-transparent bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0]"
                  }`}
              >
                <span className="hidden sm:inline">
                  {status.charAt(0).toUpperCase() + status.slice(1)} ({
                    status === "all" ? clients.length : clients.filter(c => c.status === status).length
                  })
                </span>
                <span className="sm:hidden">
                  {status.charAt(0).toUpperCase() + status.slice(1).slice(0, 3)} ({
                    status === "all" ? clients.length : clients.filter(c => c.status === status).length
                  })
                </span>
              </button>
            ))}
          </div>

          <div className="flex w-full lg:min-w-[280px] lg:max-w-[320px] items-center gap-2 sm:gap-3 rounded-lg border-2 border-[#e2e8f0] bg-[#f8fafc] px-3 sm:px-4 py-2.5 sm:py-3">
            <i className="ri-search-line text-[1.125rem] sm:text-[1.25rem] text-[#64748b] flex-shrink-0"></i>
            <input
              type="text"
              placeholder="Search clients..."
              className="flex-1 border-none bg-transparent text-[0.8125rem] sm:text-[0.875rem] text-[#1e293b] outline-none placeholder:text-[#94a3b8] w-full min-w-0"
            />
          </div>
        </div>

        {/* Clients List */}
        <div className="flex flex-col gap-2 sm:gap-[10px] overflow-y-auto pr-1 sm:pr-2 pb-4">
          {filteredClients.length === 0 ? (
            <div className="rounded-[12px] bg-white px-6 sm:px-8 py-12 sm:py-14 md:py-16 text-center shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
              <i className="ri-user-line mb-3 sm:mb-4 text-[3rem] sm:text-[3.5rem] md:text-[4rem] text-[#cbd5e1]"></i>
              <h3 className="m-0 text-[1.25rem] sm:text-[1.375rem] md:text-[1.5rem] font-bold text-[#1e293b] mb-2">
                No clients found
              </h3>
              <p className="m-0 text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] text-[#64748b]">
                There are no {filterStatus} clients at the moment.
              </p>
            </div>
          ) : (
            filteredClients.map((client) => (
              <div
                key={client.id}
                className="group flex flex-col items-start justify-between gap-4 sm:gap-5 border-l-4 border-transparent bg-white p-4 sm:p-5 md:p-6 rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-all duration-300 hover:translate-y-[-2px] hover:border-[#f59e0b] hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] lg:flex-row lg:items-center"
              >
                <div className="flex flex-col sm:flex-row flex-1 items-start sm:items-center gap-4 sm:gap-5 md:gap-6 w-full">
                  {/* Icon */}
                  <div className="flex h-[50px] w-[50px] sm:h-[55px] sm:w-[55px] md:h-[60px] md:w-[60px] flex-shrink-0 items-center justify-center rounded-[12px] bg-gradient-to-br from-[#f59e0b] to-[#d97706] text-[1.5rem] sm:text-[1.625rem] md:text-[1.75rem] text-white">
                    <i className="ri-user-line"></i>
                  </div>

                  {/* Details */}
                  <div className="flex-1 w-full sm:w-auto">
                    <h3 className="m-0 mb-1.5 sm:mb-2 text-[1rem] sm:text-[1.0625rem] md:text-[1.125rem] font-bold text-[#1e293b]">
                      {client.name}
                    </h3>
                    <p className="m-0 mb-2.5 sm:mb-3 flex items-center gap-2 text-[0.8125rem] sm:text-[0.875rem] text-[#64748b]">
                      <i className="ri-map-pin-line text-[0.9375rem] sm:text-[1rem]"></i>
                      <span className="truncate">{client.location}</span>
                    </p>
                    <div className="flex flex-col xs:flex-row sm:flex-row flex-wrap gap-2 xs:gap-3 sm:gap-4 md:gap-6">
                      <span className="flex items-center gap-1.5 sm:gap-2 text-[0.8125rem] sm:text-[0.875rem] font-medium text-[#64748b]">
                        <i className="ri-mail-line text-[#94a3b8] text-sm sm:text-base flex-shrink-0"></i>
                        <span className="truncate">{client.email}</span>
                      </span>
                      <span className="flex items-center gap-1.5 sm:gap-2 text-[0.8125rem] sm:text-[0.875rem] font-medium text-[#64748b] whitespace-nowrap">
                        <i className="ri-phone-line text-[#94a3b8] text-sm sm:text-base flex-shrink-0"></i>
                        {client.phone}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions and Status */}
                <div className="flex w-full items-center justify-between gap-3 sm:gap-4 pt-2 sm:pt-0 lg:w-auto">
                  <span className={`rounded-md px-3 sm:px-4 py-1.5 sm:py-2 text-[0.75rem] sm:text-[0.8125rem] md:text-[0.875rem] font-semibold capitalize whitespace-nowrap ${getStatusStyles(client.status)}`}>
                    {client.status}
                  </span>
                  <div className="flex gap-1.5 sm:gap-2">
                    <button 
                      className="flex h-8 w-8 sm:h-9 sm:w-9 cursor-pointer items-center justify-center rounded-md bg-[#dbeafe] text-[1rem] sm:text-[1.125rem] text-[#1e40af] transition-all hover:scale-110 hover:bg-[#3b82f6] hover:text-white"
                      title="View"
                    >
                      <i className="ri-eye-line"></i>
                    </button>
                    <button 
                      className="flex h-8 w-8 sm:h-9 sm:w-9 cursor-pointer items-center justify-center rounded-md bg-[#fef3c7] text-[1rem] sm:text-[1.125rem] text-[#92400e] transition-all hover:scale-110 hover:bg-[#f59e0b] hover:text-white"
                      title="Edit"
                    >
                      <i className="ri-edit-line"></i>
                    </button>
                    <button 
                      className="flex h-8 w-8 sm:h-9 sm:w-9 cursor-pointer items-center justify-center rounded-md bg-[#fee2e2] text-[1rem] sm:text-[1.125rem] text-[#991b1b] transition-all hover:scale-110 hover:bg-[#ef4444] hover:text-white"
                      title="Delete"
                    >
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
