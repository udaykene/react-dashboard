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
        return "bg-emerald-100 text-emerald-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "";
    }
  };

  const filteredAppointments =
    filterStatus === "all"
      ? appointments
      : appointments.filter((a) => a.status === filterStatus);

  const handleStatusChange = (id, newStatus) => {
    setAppointments((prev) =>
      prev.map((apt) =>
        apt.id === id ? { ...apt, status: newStatus } : apt
      )
    );
  };

  return (
    <AdminLayout>
      <div className="flex flex-col min-h-screen px-3 sm:px-6 lg:px-8 py-4">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
              Appointments
            </h1>
            <p className="text-slate-500 text-sm sm:text-base">
              Manage and track client appointments
            </p>
          </div>

          <button className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-5 py-3 rounded-lg font-semibold w-full sm:w-auto">
            <i className="ri-calendar-event-line"></i>
            New Appointment
          </button>
        </div>

        {/* FILTERS */}
        <div className="bg-white p-4 rounded-xl shadow flex flex-col lg:flex-row gap-4 mb-6">
          <div className="flex flex-wrap gap-2">
            {["all", "confirmed", "pending", "cancelled"].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold border
                  ${
                    filterStatus === status
                      ? "bg-amber-100 text-amber-700 border-amber-400"
                      : "bg-slate-100 text-slate-600 border-transparent hover:bg-slate-200"
                  }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex items-center bg-slate-100 px-4 py-2 rounded-lg w-full lg:w-72">
            <i className="ri-search-line text-slate-500 mr-2"></i>
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>
        </div>

        {/* LIST */}
        <div className="flex flex-col gap-4">
          {filteredAppointments.map((appointment) => (
            <div
              key={appointment.id}
              className="bg-white p-4 sm:p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col lg:flex-row gap-4 justify-between"
            >
              {/* LEFT */}
              <div className="flex gap-4 flex-1">
                <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  <i className="ri-user-line"></i>
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-slate-800">
                    {appointment.clientName}
                  </h3>
                  <p className="text-slate-500 text-sm mb-2">
                    {appointment.project}
                  </p>

                  <div className="flex flex-wrap gap-3 text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      <i className="ri-calendar-line"></i>
                      {appointment.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="ri-time-line"></i>
                      {appointment.time}
                    </span>
                    <span className="bg-slate-100 px-3 py-1 rounded-md">
                      {appointment.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex flex-wrap items-center gap-3 justify-between lg:justify-end">
                <span
                  className={`px-4 py-2 rounded-md text-xs font-bold capitalize ${getStatusStyles(
                    appointment.status
                  )}`}
                >
                  {appointment.status}
                </span>

                <div className="flex gap-2">
                  {appointment.status === "pending" && (
                    <>
                      <button
                        onClick={() =>
                          handleStatusChange(appointment.id, "confirmed")
                        }
                        className="w-9 h-9 rounded-md bg-emerald-100 text-emerald-700 hover:bg-emerald-500 hover:text-white"
                      >
                        <i className="ri-check-line"></i>
                      </button>
                      <button
                        onClick={() =>
                          handleStatusChange(appointment.id, "cancelled")
                        }
                        className="w-9 h-9 rounded-md bg-red-100 text-red-700 hover:bg-red-500 hover:text-white"
                      >
                        <i className="ri-close-line"></i>
                      </button>
                    </>
                  )}

                  <button className="w-9 h-9 rounded-md bg-blue-100 text-blue-700 hover:bg-blue-500 hover:text-white">
                    <i className="ri-eye-line"></i>
                  </button>
                  <button className="w-9 h-9 rounded-md bg-amber-100 text-amber-700 hover:bg-amber-500 hover:text-white">
                    <i className="ri-edit-line"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminAppointments;
