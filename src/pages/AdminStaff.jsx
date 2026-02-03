import React, { useState } from "react";

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
    <div className="p-4 !important sm:p-6 !important lg:p-8 !important min-h-screen !important bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl !important mx-auto !important space-y-6 !important">

        {/* Header Section */}
        <div className="flex !important flex-col !important sm:flex-row !important sm:items-center !important sm:justify-between !important gap-4 !important mb-6 !important">
          <div>
            <h1 className="text-2xl !important sm:text-3xl !important lg:text-4xl !important font-bold !important text-gray-800 !important mb-2 !important">
              Staff Management
            </h1>
            <p className="text-sm !important sm:text-base !important text-gray-600 !important">
              Manage and track all staff members
            </p>
          </div>

          <button className="flex !important items-center !important justify-center !important gap-2 !important rounded-xl !important bg-gradient-to-r from-amber-500 to-orange-500 !important px-6 !important py-3 !important text-sm !important sm:text-base !important font-semibold !important text-white !important shadow-lg !important hover:shadow-xl !important hover:from-amber-600 !important hover:to-orange-600 !important transition-all !important duration-300 !important transform !important hover:scale-105 !important">
            <i className="ri-user-add-line text-lg !important"></i>
            <span>Add Staff</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid !important grid-cols-1 !important sm:grid-cols-2 !important lg:grid-cols-4 !important gap-4 !important lg:gap-6 !important mb-6 !important">
          {[
            { title: "Total Staff", value: staff.length, icon: "ri-team-line", gradient: "from-blue-500 to-blue-600" },
            { title: "Active", value: staff.filter(s => s.status === "active").length, icon: "ri-user-follow-line", gradient: "from-green-500 to-green-600" },
            { title: "On Leave", value: staff.filter(s => s.status === "on-leave").length, icon: "ri-time-line", gradient: "from-yellow-500 to-yellow-600" },
            { title: "Departments", value: 4, icon: "ri-building-line", gradient: "from-purple-500 to-purple-600" },
          ].map((stat, i) => (
            <div key={i} className="bg-white !important rounded-2xl !important p-5 !important shadow-md !important hover:shadow-xl !important transition-all !important duration-300 !important transform !important hover:scale-105 !important">
              <div className="flex !important items-center !important gap-4 !important">
                <div className={`h-14 !important w-14 !important rounded-xl !important bg-gradient-to-br ${stat.gradient} !important text-white !important flex !important items-center !important justify-center !important text-2xl !important shadow-lg !important`}>
                  <i className={stat.icon}></i>
                </div>
                <div className="flex-1 !important">
                  <p className="text-xs !important sm:text-sm !important text-gray-500 !important font-medium !important mb-1 !important">{stat.title}</p>
                  <h3 className="text-2xl !important sm:text-3xl !important font-bold !important text-gray-800 !important">{stat.value}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filters Section */}
        <div className="bg-white !important rounded-2xl !important p-5 !important lg:p-6 !important shadow-md !important mb-6 !important">
          <h3 className="text-base !important sm:text-lg !important font-bold !important text-gray-800 !important mb-4 !important">Filters</h3>

          {/* Status Filter */}
          <div className="mb-4 !important">
            <label className="text-sm !important font-semibold !important text-gray-700 !important mb-2 !important block !important">Status</label>
            <div className="flex !important gap-2 !important overflow-x-auto !important pb-2 !important">
              {["all", "active", "on-leave", "inactive"].map((s) => (
                <button
                  key={s}
                  onClick={() => setFilterStatus(s)}
                  className={`px-4 !important py-2 !important rounded-lg !important text-sm !important font-semibold !important whitespace-nowrap !important transition-all !important duration-300 !important ${filterStatus === s
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 !important text-white !important shadow-md !important"
                    : "bg-gray-100 !important text-gray-600 !important hover:bg-gray-200 !important"
                    }`}
                >
                  {s === "all" ? "All Status" : s.charAt(0).toUpperCase() + s.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Department Filter */}
          <div>
            <label className="text-sm !important font-semibold !important text-gray-700 !important mb-2 !important block !important">Department</label>
            <div className="flex !important gap-2 !important overflow-x-auto !important pb-2 !important">
              {departments.map((d) => (
                <button
                  key={d}
                  onClick={() => setFilterDepartment(d)}
                  className={`px-4 !important py-2 !important rounded-lg !important text-sm !important font-semibold !important whitespace-nowrap !important transition-all !important duration-300 !important ${filterDepartment === d
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 !important text-white !important shadow-md !important"
                    : "bg-gray-100 !important text-gray-600 !important hover:bg-gray-200 !important"
                    }`}
                >
                  {d === "all" ? "All Departments" : d}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Staff Cards */}
        <div className="grid !important grid-cols-1 !important gap-4 !important lg:gap-6 !important">
          {filteredStaff.map((member) => (
            <div
              key={member.id}
              className="bg-white !important rounded-2xl !important p-5 !important lg:p-6 !important shadow-md !important hover:shadow-xl !important transition-all !important duration-300 !important"
            >
              <div className="flex !important flex-col !important lg:flex-row !important gap-5 !important">
                {/* Left Section - Staff Info */}
                <div className="flex !important gap-4 !important flex-1 !important">
                  <div className="h-16 !important w-16 !important sm:h-20 !important sm:w-20 !important rounded-2xl !important bg-gradient-to-br from-amber-500 to-orange-500 !important text-white !important flex !important items-center !important justify-center !important text-2xl !important sm:text-3xl !important shadow-lg !important flex-shrink-0 !important">
                    <i className={getRoleIcon(member.role)}></i>
                  </div>

                  <div className="flex-1 !important min-w-0 !important">
                    <div className="flex !important flex-wrap !important items-center !important gap-2 !important mb-2 !important">
                      <h3 className="font-bold !important text-lg !important sm:text-xl !important text-gray-800 !important">{member.name}</h3>
                      <span className={`px-3 !important py-1 !important rounded-lg !important text-xs !important font-semibold !important ${getStatusStyles(member.status)}`}>
                        {member.status}
                      </span>
                    </div>

                    <p className="text-sm !important sm:text-base !important text-amber-600 !important font-semibold !important mb-3 !important">
                      {member.role}
                    </p>

                    <div className="flex !important flex-col !important sm:flex-row !important sm:flex-wrap !important gap-2 !important sm:gap-4 !important text-sm !important text-gray-600 !important">
                      <span className="flex !important items-center !important gap-1 !important">
                        <i className="ri-mail-line text-amber-500 !important"></i>
                        {member.email}
                      </span>
                      <span className="flex !important items-center !important gap-1 !important">
                        <i className="ri-phone-line text-amber-500 !important"></i>
                        {member.phone}
                      </span>
                      <span className="flex !important items-center !important gap-1 !important">
                        <i className="ri-building-line text-amber-500 !important"></i>
                        {member.department}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Section - Details & Actions */}
                <div className="flex !important flex-col !important sm:flex-row !important lg:flex-col !important items-start !important lg:items-end !important justify-between !important sm:justify-start !important lg:justify-between !important gap-4 !important border-t !important lg:border-t-0 !important lg:border-l !important border-gray-200 !important pt-4 !important lg:pt-0 !important lg:pl-6 !important min-w-fit !important">
                  <div className="flex !important flex-col !important gap-2 !important">
                    <span className="text-xs !important sm:text-sm !important text-gray-500 !important font-medium !important">
                      Joined: <span className="text-gray-700 !important font-semibold !important">{member.joinDate}</span>
                    </span>
                    <span className="text-xl !important sm:text-2xl !important font-bold !important text-gray-800 !important">{member.salary}</span>
                  </div>

                  <div className="flex !important gap-2 !important flex-wrap !important">
                    {[
                      { icon: "eye", color: "from-blue-500 to-blue-600" },
                      { icon: "edit", color: "from-green-500 to-green-600" },
                      { icon: "mail", color: "from-purple-500 to-purple-600" },
                      { icon: "delete-bin", color: "from-red-500 to-red-600" }
                    ].map((action) => (
                      <button
                        key={action.icon}
                        className={`h-10 !important w-10 !important rounded-lg !important bg-gradient-to-br ${action.color} !important text-white !important flex !important items-center !important justify-center !important shadow-md !important hover:shadow-lg !important transition-all !important duration-300 !important transform !important hover:scale-110 !important`}
                      >
                        <i className={`ri-${action.icon}-line text-base !important`}></i>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredStaff.length === 0 && (
          <div className="bg-white !important rounded-2xl !important p-12 !important text-center !important shadow-md !important">
            <i className="ri-user-search-line text-6xl !important text-gray-300 !important mb-4 !important"></i>
            <h3 className="text-xl !important font-bold !important text-gray-800 !important mb-2 !important">No Staff Found</h3>
            <p className="text-gray-600 !important">Try adjusting your filters to see more results.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminStaff;