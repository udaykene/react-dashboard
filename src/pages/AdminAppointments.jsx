import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      clientName: "John Doe",
      project: "Residential Complex A",
      date: "2026-02-05",
      time: "10:00 AM",
      status: "confirmed",
      type: "Site Visit",
    },
    {
      id: 2,
      clientName: "Jane Smith",
      project: "Commercial Plaza",
      date: "2026-02-08",
      time: "2:00 PM",
      status: "pending",
      type: "Consultation",
    },
    {
      id: 3,
      clientName: "Mike Johnson",
      project: "Villa Construction",
      date: "2026-02-10",
      time: "11:30 AM",
      status: "confirmed",
      type: "Progress Review",
    },
    {
      id: 4,
      clientName: "Sarah Williams",
      project: "Office Building",
      date: "2026-02-12",
      time: "3:00 PM",
      status: "cancelled",
      type: "Site Visit",
    },
  ]);

  const [filterStatus, setFilterStatus] = useState("all");

  const getStatusStyles = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-[#d1fae5] text-[#065f46]";
      case "pending":
        return "bg-[#fef3c7] text-[#92400e]";
      case "cancelled":
        return "bg-[#fee2e2] text-[#991b1b]";
      default:
        return "";
    }
  };

  const filteredAppointments =
    filterStatus === "all"
      ? appointments
      : appointments.filter((apt) => apt.status === filterStatus);

  const handleStatusChange = (id, newStatus) => {
    setAppointments((prev) =>
      prev.map((apt) => (apt.id === id ? { ...apt, status: newStatus } : apt))
    );
  };

  return (
    <AdminLayout>
      <div className="flex flex-col h-screen px-4 sm:px-6 lg:px-8">
        {/* .appointments-header */}
        <div className="flex flex-col sm:flex-row md:flex-row justify-between items-start sm:items-center md:items-center mb-6 sm:mb-8 gap-3 sm:gap-4">
          <div className="w-full sm:w-auto">
            <h1 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] font-bold text-[#1e293b] mb-1 sm:mb-2 leading-tight">
              Appointments
            </h1>
            <p className="text-[#64748b] text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem]">
              Manage and track all client appointments
            </p>
          </div>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-white px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] whitespace-nowrap">
            <i className="ri-calendar-event-line text-base sm:text-lg"></i>
            <span className="hidden xs:inline">New Appointment</span>
            <span className="xs:hidden">New</span>
          </button>
        </div>

        {/* .appointments-filters */}
        <div className="bg-white p-4 sm:p-5 md:p-6 rounded-\[12px\] shadow-[0_2px_8px_rgba(0,0,0,0.05)] mb-4 sm:mb-5 md:mb-6 flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-3 sm:gap-4">
          <div className="flex flex-wrap gap-2 w-full lg:w-auto">
            {["all", "confirmed", "pending", "cancelled"].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-lg font-semibold text-[0.75rem] sm:text-[0.8125rem] md:text-[0.875rem] transition-all border-2 flex-1 sm:flex-initial whitespace-nowrap
                  ${
                    filterStatus === status
                      ? "bg-[#fef3c7] text-[#d97706] border-[#f59e0b]"
                      : "bg-[#f1f5f9] text-[#475569] border-transparent hover:bg-[#e2e8f0]"
                  }`}
              >
                <span className="hidden sm:inline">
                  {status.charAt(0).toUpperCase() + status.slice(1)} (
                  {status === "all"
                    ? appointments.length
                    : appointments.filter((a) => a.status === status).length}
                  )
                </span>
                <span className="sm:hidden">
                  {status.charAt(0).toUpperCase() + status.slice(1).slice(0, 3)} (
                  {status === "all"
                    ? appointments.length
                    : appointments.filter((a) => a.status === status).length}
                  )
                </span>
              </button>
            ))}
          </div>

          {/* .search-box */}
          <div className="flex items-center gap-2 sm:gap-3 bg-[#f8fafc] px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 border-[#e2e8f0] w-full lg:min-w-[280px] lg:max-w-[320px]">
            <i className="ri-search-line text-[#64748b] text-[1.125rem] sm:text-[1.25rem] flex-shrink-0"></i>
            <input
              type="text"
              placeholder="Search appointments..."
              className="bg-transparent border-none outline-none text-[0.8125rem] sm:text-[0.875rem] text-[#1e293b] flex-1 placeholder:text-[#94a3b8] w-full min-w-0"
            />
          </div>
        </div>

        {/* .appointments-list */}
        <div className="flex flex-col gap-2 sm:gap-2.5 overflow-y-auto pr-1 sm:pr-2 no-scrollbar pb-4">
          {filteredAppointments.length === 0 ? (
            <div className="bg-white py-12 sm:py-14 md:py-16 px-6 sm:px-8 rounded-\[12px\] text-center shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
              <i className="ri-calendar-line text-[3rem] sm:text-[3.5rem] md:text-[4rem] text-[#cbd5e1] mb-3 sm:mb-4"></i>
              <h3 className="text-[1.25rem] sm:text-[1.375rem] md:text-[1.5rem] font-bold text-[#1e293b] mb-2">
                No appointments found
              </h3>
              <p className="text-[#64748b] text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem]">
                There are no {filterStatus} appointments at the moment.
              </p>
            </div>
          ) : (
            filteredAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="bg-white p-4 sm:p-5 md:p-6 rounded-\[12px\] shadow-[0_2px_8px_rgba(0,0,0,0.05)] border-l-4 border-transparent hover:border-[#f59e0b] hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 sm:gap-5"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 md:gap-6 flex-1 w-full">
                  {/* .appointment-icon */}
                  <div className="w-\[50px\] h-\[50px\] sm\:w-\[55px\] sm\:h-\[55px\] md:w-[60px] md:h-[60px] bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-[12px] flex items-center justify-center text-[1.5rem] sm:text-[1.625rem] md:text-[1.75rem] text-white flex-shrink-0">
                    <i className="ri-user-line"></i>
                  </div>

                  <div className="flex-1 w-full sm:w-auto">
                    <h3 className="text-[1rem] sm:text-[1.0625rem] md:text-[1.125rem] font-bold text-[#1e293b] mb-1.5 sm:mb-2">
                      {appointment.clientName}
                    </h3>
                    <p className="flex items-center gap-2 text-[#64748b] text-[0.8125rem] sm:text-[0.875rem] mb-2.5 sm:mb-3">
                      <i className="ri-building-line text-[0.9375rem] sm:text-[1rem]"></i>
                      <span className="truncate">{appointment.project}</span>
                    </p>
                    {/* .appointment-meta */}
                    <div className="flex flex-col xs:flex-row sm:flex-row gap-2 xs:gap-3 sm:gap-4 md:gap-6 flex-wrap">
                      <span className="flex items-center gap-1.5 sm:gap-2 text-[0.8125rem] sm:text-[0.875rem] text-[#64748b] font-medium">
                        <i className="ri-calendar-line text-[#94a3b8] text-sm sm:text-base"></i>
                        <span className="whitespace-nowrap">{appointment.date}</span>
                      </span>
                      <span className="flex items-center gap-1.5 sm:gap-2 text-[0.8125rem] sm:text-[0.875rem] text-[#64748b] font-medium">
                        <i className="ri-time-line text-[#94a3b8] text-sm sm:text-base"></i>
                        <span className="whitespace-nowrap">{appointment.time}</span>
                      </span>
                      <span className="flex items-center gap-1.5 sm:gap-2 text-[0.8125rem] sm:text-[0.875rem] text-[#64748b] font-medium bg-[#f1f5f9] px-2.5 sm:px-3 py-1 rounded-md w-fit">
                        <i className="ri-map-pin-line text-[#94a3b8] text-sm sm:text-base"></i>
                        <span className="whitespace-nowrap">{appointment.type}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end lg:justify-end w-full sm:w-auto lg:w-auto gap-3 sm:gap-4 pt-2 sm:pt-0">
                  <span
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-[0.75rem] sm:text-[0.8125rem] md:text-[0.875rem] font-semibold capitalize whitespace-nowrap ${getStatusStyles(
                      appointment.status
                    )}`}
                  >
                    {appointment.status}
                  </span>

                  <div className="flex gap-1.5 sm:gap-2">
                    {appointment.status === "pending" && (
                      <>
                        <button
                          onClick={() => handleStatusChange(appointment.id, "confirmed")}
                          className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-md bg-[#d1fae5] text-[#065f46] hover:bg-[#10b981] hover:text-white hover:scale-110 transition-all text-[1rem] sm:text-[1.125rem]"
                          title="Confirm"
                        >
                          <i className="ri-check-line"></i>
                        </button>
                        <button
                          onClick={() => handleStatusChange(appointment.id, "cancelled")}
                          className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-md bg-[#fee2e2] text-[#991b1b] hover:bg-[#ef4444] hover:text-white hover:scale-110 transition-all text-[1rem] sm:text-[1.125rem]"
                          title="Cancel"
                        >
                          <i className="ri-close-line"></i>
                        </button>
                      </>
                    )}
                    <button 
                      className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-md bg-[#dbeafe] text-[#1e40af] hover:bg-[#3b82f6] hover:text-white hover:scale-110 transition-all text-[1rem] sm:text-[1.125rem]"
                      title="View"
                    >
                      <i className="ri-eye-line"></i>
                    </button>
                    <button 
                      className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-md bg-[#fef3c7] text-[#92400e] hover:bg-[#f59e0b] hover:text-white hover:scale-110 transition-all text-[1rem] sm:text-[1.125rem]"
                      title="Edit"
                    >
                      <i className="ri-edit-line"></i>
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

export default AdminAppointments;
