import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";

const AdminStaff = () => {
  const [staff] = useState([
    {
      id: 1,
      name: "Rajesh Kumar",
      email: "rajesh@parthbuilders.com",
      phone: "+91 9876543210",
      role: "Project Manager",
      department: "Construction",
      status: "active",
      joinDate: "Jan 2023",
      salary: "$85,000",
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya@parthbuilders.com",
      phone: "+91 9123456780",
      role: "Senior Architect",
      department: "Design",
      status: "active",
      joinDate: "Mar 2022",
      salary: "$92,000",
    },
    {
      id: 3,
      name: "Amit Patel",
      email: "amit@parthbuilders.com",
      phone: "+91 9988776655",
      role: "Site Engineer",
      department: "Construction",
      status: "active",
      joinDate: "Jul 2023",
      salary: "$65,000",
    },
    {
      id: 4,
      name: "Sneha Reddy",
      email: "sneha@parthbuilders.com",
      phone: "+91 9445566778",
      role: "Finance Manager",
      department: "Finance",
      status: "active",
      joinDate: "Feb 2021",
      salary: "$78,000",
    },
    {
      id: 5,
      name: "Vikram Singh",
      email: "vikram@parthbuilders.com",
      phone: "+91 9334455667",
      role: "Civil Engineer",
      department: "Construction",
      status: "on-leave",
      joinDate: "Sep 2023",
      salary: "$58,000",
    },
    {
      id: 6,
      name: "Anjali Verma",
      email: "anjali@parthbuilders.com",
      phone: "+91 9223344556",
      role: "HR Manager",
      department: "Human Resources",
      status: "active",
      joinDate: "Nov 2022",
      salary: "$72,000",
    },
  ]);

  const [filterStatus, setFilterStatus] = useState("all");
  const [filterDepartment, setFilterDepartment] = useState("all");

  const departments = ["all", "Construction", "Design", "Finance", "Human Resources"];

  const getStatusStyles = (status) => {
    if (status === "active") return "bg-green-100 text-green-800";
    if (status === "on-leave") return "bg-yellow-100 text-yellow-800";
    if (status === "inactive") return "bg-red-100 text-red-800";
    return "bg-gray-100 text-gray-700";
  };

  const getRoleIcon = (role) => {
    if (role.includes("Manager")) return "ri-user-star-line";
    if (role.includes("Engineer")) return "ri-tools-line";
    if (role.includes("Architect")) return "ri-pencil-ruler-2-line";
    return "ri-user-line";
  };

  const filteredStaff = staff.filter((m) => {
    return (
      (filterStatus === "all" || m.status === filterStatus) &&
      (filterDepartment === "all" || m.department === filterDepartment)
    );
  });

  return (
    <AdminLayout>
      <div className="min-h-screen px-3 sm:px-6 lg:px-8 pb-10 flex flex-col gap-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1e293b]">
              Staff Management
            </h1>
            <p className="text-sm sm:text-base text-[#64748b]">
              Manage and track all staff members
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-lg bg-[#f59e0b] px-5 py-3 text-sm sm:text-base font-semibold text-white hover:bg-[#d97706]">
            <i className="ri-user-add-line"></i>
            Add Staff
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Total Staff", value: staff.length, icon: "ri-team-line" },
            { title: "Active", value: staff.filter(s => s.status === "active").length, icon: "ri-user-follow-line" },
            { title: "On Leave", value: staff.filter(s => s.status === "on-leave").length, icon: "ri-time-line" },
            { title: "Departments", value: 4, icon: "ri-building-line" },
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-xl p-4 shadow flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-[#f59e0b] text-white flex items-center justify-center text-xl">
                <i className={s.icon}></i>
              </div>
              <div>
                <p className="text-sm text-gray-500">{s.title}</p>
                <h3 className="text-xl font-bold">{s.value}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl p-4 shadow flex flex-col gap-4">
          <div className="flex gap-2 overflow-x-auto">
            {["all", "active", "on-leave", "inactive"].map((s) => (
              <button
                key={s}
                onClick={() => setFilterStatus(s)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap ${
                  filterStatus === s
                    ? "bg-[#fef3c7] text-[#d97706]"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {s === "all" ? "All" : s}
              </button>
            ))}
          </div>

          <div className="flex gap-2 overflow-x-auto">
            {departments.map((d) => (
              <button
                key={d}
                onClick={() => setFilterDepartment(d)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap ${
                  filterDepartment === d
                    ? "bg-[#fef3c7] text-[#d97706]"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Staff Cards */}
        <div className="flex flex-col gap-4">
          {filteredStaff.map((m) => (
            <div
              key={m.id}
              className="bg-white rounded-xl p-4 shadow flex flex-col lg:flex-row gap-6"
            >
              <div className="flex gap-4 flex-1">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-[#f59e0b] to-[#d97706] text-white flex items-center justify-center text-2xl">
                  <i className={getRoleIcon(m.role)}></i>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-bold text-lg">{m.name}</h3>
                    <span className={`px-3 py-1 rounded-md text-xs font-semibold ${getStatusStyles(m.status)}`}>
                      {m.status}
                    </span>
                  </div>

                  <p className="text-sm text-[#f59e0b] font-semibold mt-1">
                    {m.role}
                  </p>

                  <div className="text-sm text-gray-500 flex flex-col sm:flex-row sm:flex-wrap gap-2 mt-2">
                    <span>{m.email}</span>
                    <span>{m.phone}</span>
                    <span>{m.department}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start lg:items-end gap-3 border-t lg:border-t-0 pt-3 lg:pt-0">
                <span className="text-sm text-gray-500">
                  Joined: {m.joinDate}
                </span>
                <span className="font-bold text-lg">{m.salary}</span>

                <div className="flex gap-2">
                  {["eye", "edit", "mail", "delete-bin"].map((i) => (
                    <button
                      key={i}
                      className="h-9 w-9 rounded-md bg-gray-100 flex items-center justify-center hover:bg-[#f59e0b] hover:text-white transition"
                    >
                      <i className={`ri-${i}-line`}></i>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </AdminLayout>
  );
};

export default AdminStaff;
