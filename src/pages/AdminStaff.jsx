import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";

const AdminStaff = () => {
  const [staff, setStaff] = useState([
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

  const departments = [
    "all",
    "Construction",
    "Design",
    "Finance",
    "Human Resources",
  ];

  const getStatusStyles = (status) => {
    switch (status) {
      case "active":
        return "bg-[#d1fae5] text-[#065f46]";
      case "on-leave":
        return "bg-[#fef3c7] text-[#92400e]";
      case "inactive":
        return "bg-[#fee2e2] text-[#991b1b]";
      default:
        return "bg-[#f1f5f9] text-[#475569]";
    }
  };

  const getRoleIcon = (role) => {
    if (role.includes("Manager")) return "ri-user-star-line";
    if (role.includes("Engineer")) return "ri-tools-line";
    if (role.includes("Architect")) return "ri-pencil-ruler-2-line";
    return "ri-user-line";
  };

  const filteredStaff = staff.filter((member) => {
    const statusMatch =
      filterStatus === "all" || member.status === filterStatus;
    const departmentMatch =
      filterDepartment === "all" || member.department === filterDepartment;
    return statusMatch && departmentMatch;
  });

  return (
    <AdminLayout>
      <div className="flex h-screen flex-col">
        {/* Header Section */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="m-0 text-[2rem] font-bold text-[#1e293b]">
              Staff Management
            </h1>
            <p className="m-0 text-[1rem] text-[#64748b]">
              Manage and track all staff members
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-lg bg-[#f59e0b] px-6 py-3 font-semibold text-white transition-all hover:bg-[#d97706]">
            <i className="ri-user-add-line"></i>
            Add Staff Member
          </button>
        </div>

        {/* Stats Cards */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Total Staff",
              value: staff.length.toString(),
              icon: "ri-team-line",
              color: "#3b82f6",
            },
            {
              title: "Active",
              value: staff.filter((s) => s.status === "active").length.toString(),
              icon: "ri-user-follow-line",
              color: "#10b981",
            },
            {
              title: "On Leave",
              value: staff.filter((s) => s.status === "on-leave").length.toString(),
              icon: "ri-time-line",
              color: "#f59e0b",
            },
            {
              title: "Departments",
              value: "4",
              icon: "ri-building-line",
              color: "#8b5cf6",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-[12px] border-t-4 bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)]"
              style={{ borderTopColor: stat.color }}
            >
              <div
                className="flex h-[50px] w-[50px] flex-shrink-0 items-center justify-center rounded-[10px] text-[1.5rem] text-white"
                style={{ backgroundColor: stat.color }}
              >
                <i className={stat.icon}></i>
              </div>
              <div>
                <p className="m-0 mb-1 text-[0.875rem] font-medium text-[#64748b]">
                  {stat.title}
                </p>
                <h3 className="m-0 text-[1.5rem] font-bold text-[#1e293b]">
                  {stat.value}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Filters and Search Section */}
        <div className="mb-6 flex flex-col gap-4 rounded-[12px] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
          {/* Status Filters */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[0.875rem] font-semibold text-[#64748b]">
              Status:
            </span>
            {["all", "active", "on-leave", "inactive"].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`rounded-lg border-2 px-4 py-2 text-[0.875rem] font-semibold transition-all 
                  ${
                    filterStatus === status
                      ? "border-[#f59e0b] bg-[#fef3c7] text-[#d97706]"
                      : "border-transparent bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0]"
                  }`}
              >
                {status === "all"
                  ? "All Staff"
                  : status === "on-leave"
                  ? "On Leave"
                  : status.charAt(0).toUpperCase() + status.slice(1)}{" "}
                (
                {status === "all"
                  ? staff.length
                  : staff.filter((s) => s.status === status).length}
                )
              </button>
            ))}
          </div>

          {/* Department Filters and Search */}
          <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[0.875rem] font-semibold text-[#64748b]">
                Department:
              </span>
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setFilterDepartment(dept)}
                  className={`rounded-lg border-2 px-4 py-2 text-[0.875rem] font-semibold transition-all 
                    ${
                      filterDepartment === dept
                        ? "border-[#f59e0b] bg-[#fef3c7] text-[#d97706]"
                        : "border-transparent bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0]"
                    }`}
                >
                  {dept === "all" ? "All" : dept}
                </button>
              ))}
            </div>

            <div className="flex min-w-full items-center gap-3 rounded-lg border-2 border-[#e2e8f0] bg-[#f8fafc] px-4 py-3 lg:min-w-[300px]">
              <i className="ri-search-line text-[1.25rem] text-[#64748b]"></i>
              <input
                type="text"
                placeholder="Search staff..."
                className="flex-1 border-none bg-transparent text-[0.875rem] text-[#1e293b] outline-none placeholder:text-[#94a3b8]"
              />
            </div>
          </div>
        </div>

        {/* Staff List */}
        <div className="no-scrollbar flex flex-col gap-3 overflow-y-auto pr-2">
          {filteredStaff.length === 0 ? (
            <div className="rounded-[12px] bg-white px-8 py-16 text-center shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
              <i className="ri-user-line mb-4 text-[4rem] text-[#cbd5e1]"></i>
              <h3 className="m-0 mb-2 text-[1.5rem] font-bold text-[#1e293b]">
                No staff members found
              </h3>
              <p className="m-0 text-[#64748b]">
                Try adjusting your filters to see more results.
              </p>
            </div>
          ) : (
            filteredStaff.map((member) => (
              <div
                key={member.id}
                className="group flex flex-col items-start justify-between gap-6 border-l-4 border-transparent rounded-[12px] bg-white p-6 transition-all duration-300 hover:translate-y-[-2px] hover:border-[#f59e0b] hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] lg:flex-row lg:items-center"
              >
                {/* Staff Info */}
                <div className="flex flex-1 flex-col items-start gap-6 md:flex-row md:items-center">
                  {/* Avatar */}
                  <div className="flex h-[70px] w-[70px] flex-shrink-0 items-center justify-center rounded-[12px] bg-gradient-to-br from-[#f59e0b] to-[#d97706] text-[2rem] text-white">
                    <i className={getRoleIcon(member.role)}></i>
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <div className="mb-2 flex flex-col items-start gap-2 md:flex-row md:items-center">
                      <h3 className="m-0 text-[1.125rem] font-bold text-[#1e293b]">
                        {member.name}
                      </h3>
                      <span
                        className={`rounded-md px-3 py-1 text-[0.75rem] font-semibold capitalize ${getStatusStyles(
                          member.status
                        )}`}
                      >
                        {member.status === "on-leave" ? "On Leave" : member.status}
                      </span>
                    </div>

                    <p className="m-0 mb-3 flex items-center gap-2 text-[0.875rem] font-semibold text-[#f59e0b]">
                      <i className="ri-briefcase-line"></i>
                      {member.role}
                    </p>

                    <div className="flex flex-col gap-2 md:flex-row md:flex-wrap md:gap-6">
                      <span className="flex items-center gap-2 text-[0.875rem] font-medium text-[#64748b]">
                        <i className="ri-mail-line text-[#94a3b8]"></i>
                        {member.email}
                      </span>
                      <span className="flex items-center gap-2 text-[0.875rem] font-medium text-[#64748b]">
                        <i className="ri-phone-line text-[#94a3b8]"></i>
                        {member.phone}
                      </span>
                      <span className="flex items-center gap-2 text-[0.875rem] font-medium text-[#64748b]">
                        <i className="ri-building-line text-[#94a3b8]"></i>
                        {member.department}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions and Metadata */}
                <div className="flex w-full flex-col items-start gap-4 border-t-2 border-[#f1f5f9] pt-4 lg:w-auto lg:items-end lg:border-t-0 lg:pt-0">
                  <div className="flex w-full flex-col gap-2 lg:items-end">
                    <span className="flex items-center gap-2 text-[0.875rem] text-[#64748b]">
                      <i className="ri-calendar-line"></i>
                      <span className="font-medium">Joined: </span>
                      {member.joinDate}
                    </span>
                    <span className="text-[1.125rem] font-bold text-[#1e293b]">
                      {member.salary}
                    </span>
                  </div>

                  <div className="flex w-full gap-2 lg:w-auto">
                    <button className="flex h-9 w-9 items-center justify-center rounded-md bg-[#dbeafe] text-[1.125rem] text-[#1e40af] transition-all hover:scale-110 hover:bg-[#3b82f6] hover:text-white">
                      <i className="ri-eye-line"></i>
                    </button>
                    <button className="flex h-9 w-9 items-center justify-center rounded-md bg-[#fef3c7] text-[1.125rem] text-[#92400e] transition-all hover:scale-110 hover:bg-[#f59e0b] hover:text-white">
                      <i className="ri-edit-line"></i>
                    </button>
                    <button className="flex h-9 w-9 items-center justify-center rounded-md bg-[#d1fae5] text-[1.125rem] text-[#065f46] transition-all hover:scale-110 hover:bg-[#10b981] hover:text-white">
                      <i className="ri-mail-line"></i>
                    </button>
                    <button className="flex h-9 w-9 items-center justify-center rounded-md bg-[#fee2e2] text-[1.125rem] text-[#991b1b] transition-all hover:scale-110 hover:bg-[#ef4444] hover:text-white">
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

export default AdminStaff;