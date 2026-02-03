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

  const departments = [
    "all",
    "Construction",
    "Design",
    "Finance",
    "Human Resources",
  ];

  const getStatusStyles = (status) => {
    if (status === "active")
      return "bg-green-100 text-green-700 border-green-200";
    if (status === "on-leave")
      return "bg-yellow-100 text-yellow-700 border-yellow-200";
    if (status === "inactive") return "bg-red-100 text-red-700 border-red-200";
    return "bg-gray-100 text-gray-700 border-gray-200";
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
      <main className="min-h-screen !important bg-white !important lg:ml-64 !important pt-16 !important lg:pt-8 !important px-4 !important sm:px-6 !important lg:px-8 !important pb-10 !important">
        {/* Header */}
        <div className="mb-8 !important">
          <h1 className="text-3xl !important sm:text-4xl !important font-bold !important text-gray-900 !important mb-2 !important">
            Staff Management
          </h1>
          <p className="text-gray-600 !important">
            Manage and track all staff members
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid !important grid-cols-1 !important sm:grid-cols-2 !important lg:grid-cols-4 !important gap-6 !important mb-8 !important">
          {/* Total Staff */}
          <div className="bg-white !important rounded-2xl !important p-6 !important shadow-lg !important shadow-rose-500/5 !important border !important border-rose-100 !important hover:shadow-xl !important hover:shadow-rose-500/10 !important transition-all !important group !important">
            <div className="flex !important items-center !important justify-between !important mb-4 !important">
              <div className="w-12 !important h-12 !important rounded-xl !important bg-gradient-to-br from-rose-500 to-pink-500 !important flex !important items-center !important justify-center !important shadow-lg !important shadow-rose-500/30 !important group-hover:scale-110 !important transition-transform !important">
                <i className="ri-team-line text-white !important text-2xl !important"></i>
              </div>
              <span className="text-xs !important font-semibold !important text-green-600 !important bg-green-50 !important px-2 !important py-1 !important rounded-full !important">
                All members
              </span>
            </div>
            <h3 className="text-gray-600 !important text-sm !important font-medium !important mb-1 !important">
              Total Staff
            </h3>
            <p className="text-3xl !important font-bold !important text-gray-900 !important">
              {staff.length}
            </p>
            <p className="text-xs !important text-gray-500 !important mt-2 !important">
              Across all departments
            </p>
          </div>

          {/* Active Staff */}
          <div className="bg-white !important rounded-2xl !important p-6 !important shadow-lg !important shadow-pink-500/5 !important border !important border-pink-100 !important hover:shadow-xl !important hover:shadow-pink-500/10 !important transition-all !important group !important">
            <div className="flex !important items-center !important justify-between !important mb-4 !important">
              <div className="w-12 !important h-12 !important rounded-xl !important bg-gradient-to-br from-pink-500 to-rose-500 !important flex !important items-center !important justify-center !important shadow-lg !important shadow-pink-500/30 !important group-hover:scale-110 !important transition-transform !important">
                <i className="ri-user-follow-line text-white !important text-2xl !important"></i>
              </div>
              <span className="text-xs !important font-semibold !important text-green-600 !important bg-green-50 !important px-2 !important py-1 !important rounded-full !important">
                On duty
              </span>
            </div>
            <h3 className="text-gray-600 !important text-sm !important font-medium !important mb-1 !important">
              Active Staff
            </h3>
            <p className="text-3xl !important font-bold !important text-gray-900 !important">
              {staff.filter((s) => s.status === "active").length}
            </p>
            <p className="text-xs !important text-gray-500 !important mt-2 !important">
              Working today
            </p>
          </div>

          {/* On Leave */}
          <div className="bg-white !important rounded-2xl !important p-6 !important shadow-lg !important shadow-purple-500/5 !important border !important border-purple-100 !important hover:shadow-xl !important hover:shadow-purple-500/10 !important transition-all !important group !important">
            <div className="flex !important items-center !important justify-between !important mb-4 !important">
              <div className="w-12 !important h-12 !important rounded-xl !important bg-gradient-to-br from-purple-500 to-pink-500 !important flex !important items-center !important justify-center !important shadow-lg !important shadow-purple-500/30 !important group-hover:scale-110 !important transition-transform !important">
                <i className="ri-time-line text-white !important text-2xl !important"></i>
              </div>
              <span className="text-xs !important font-semibold !important text-yellow-600 !important bg-yellow-50 !important px-2 !important py-1 !important rounded-full !important">
                Unavailable
              </span>
            </div>
            <h3 className="text-gray-600 !important text-sm !important font-medium !important mb-1 !important">
              On Leave
            </h3>
            <p className="text-3xl !important font-bold !important text-gray-900 !important">
              {staff.filter((s) => s.status === "on-leave").length}
            </p>
            <p className="text-xs !important text-gray-500 !important mt-2 !important">
              Currently away
            </p>
          </div>

          {/* Departments */}
          <div className="bg-white !important rounded-2xl !important p-6 !important shadow-lg !important shadow-blue-500/5 !important border !important border-blue-100 !important hover:shadow-xl !important hover:shadow-blue-500/10 !important transition-all !important group !important">
            <div className="flex !important items-center !important justify-between !important mb-4 !important">
              <div className="w-12 !important h-12 !important rounded-xl !important bg-gradient-to-br from-blue-500 to-cyan-500 !important flex !important items-center !important justify-center !important shadow-lg !important shadow-blue-500/30 !important group-hover:scale-110 !important transition-transform !important">
                <i className="ri-building-line text-white !important text-2xl !important"></i>
              </div>
              <span className="text-xs !important font-semibold !important text-blue-600 !important bg-blue-50 !important px-2 !important py-1 !important rounded-full !important">
                Active
              </span>
            </div>
            <h3 className="text-gray-600 !important text-sm !important font-medium !important mb-1 !important">
              Departments
            </h3>
            <p className="text-3xl !important font-bold !important text-gray-900 !important">
              4
            </p>
            <p className="text-xs !important text-gray-500 !important mt-2 !important">
              All operational
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white !important rounded-2xl !important shadow-lg !important border !important border-gray-100 !important overflow-hidden !important mb-6 !important">
          <div className="p-6 !important border-b !important border-gray-100 !important bg-gradient-to-r from-rose-50 to-pink-50 !important">
            <h2 className="text-xl !important font-bold !important text-gray-900 !important flex !important items-center !important gap-2 !important">
              <i className="ri-filter-line text-rose-600 !important"></i>
              Filter Staff
            </h2>
          </div>
          <div className="p-6 !important space-y-4 !important">
            {/* Status Filter */}
            <div>
              <label className="text-sm !important font-semibold !important text-gray-700 !important mb-2 !important block !important">
                Status
              </label>
              <div className="flex !important gap-2 !important overflow-x-auto !important pb-2 !important">
                {["all", "active", "on-leave", "inactive"].map((s) => (
                  <button
                    key={s}
                    onClick={() => setFilterStatus(s)}
                    className={`px-4 !important py-2 !important rounded-lg !important text-sm !important font-semibold !important whitespace-nowrap !important transition-all !important ${
                      filterStatus === s
                        ? "bg-gradient-to-r from-rose-500 to-pink-500 !important text-white !important shadow-lg !important shadow-rose-500/30 !important"
                        : "bg-gray-100 !important text-gray-600 !important hover:bg-gray-200 !important"
                    }`}
                  >
                    {s === "all"
                      ? "All Status"
                      : s.charAt(0).toUpperCase() + s.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Department Filter */}
            <div>
              <label className="text-sm !important font-semibold !important text-gray-700 !important mb-2 !important block !important">
                Department
              </label>
              <div className="flex !important gap-2 !important overflow-x-auto !important pb-2 !important">
                {departments.map((d) => (
                  <button
                    key={d}
                    onClick={() => setFilterDepartment(d)}
                    className={`px-4 !important py-2 !important rounded-lg !important text-sm !important font-semibold !important whitespace-nowrap !important transition-all !important ${
                      filterDepartment === d
                        ? "bg-gradient-to-r from-rose-500 to-pink-500 !important text-white !important shadow-lg !important shadow-rose-500/30 !important"
                        : "bg-gray-100 !important text-gray-600 !important hover:bg-gray-200 !important"
                    }`}
                  >
                    {d === "all" ? "All Departments" : d}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Staff List */}
        <div className="bg-white !important rounded-2xl !important shadow-lg !important border !important border-gray-100 !important overflow-hidden !important">
          <div className="p-6 !important border-b !important border-gray-100 !important bg-gradient-to-r from-purple-50 to-pink-50 !important">
            <div className="flex !important items-center !important justify-between !important">
              <h2 className="text-xl !important font-bold !important text-gray-900 !important flex !important items-center !important gap-2 !important">
                <i className="ri-team-line text-purple-600 !important"></i>
                Staff Members
              </h2>
              <button className="flex !important items-center !important gap-2 !important rounded-lg !important bg-gradient-to-r from-rose-500 to-pink-500 !important px-4 !important py-2 !important text-sm !important font-semibold !important text-white !important shadow-lg !important shadow-rose-500/30 !important hover:shadow-xl !important hover:from-rose-600 !important hover:to-pink-600 !important transition-all !important">
                <i className="ri-user-add-line"></i>
                Add Staff
              </button>
            </div>
          </div>

          <div className="divide-y !important divide-gray-100 !important">
            {filteredStaff.map((member) => (
              <div
                key={member.id}
                className="p-6 !important hover:bg-rose-50/30 !important transition-colors !important group !important"
              >
                <div className="flex !important flex-col !important lg:flex-row !important gap-4 !important lg:items-center !important lg:justify-between !important">
                  {/* Left Section - Staff Info */}
                  <div className="flex !important gap-4 !important flex-1 !important">
                    <div className="w-12 !important h-12 !important rounded-full !important bg-gradient-to-br from-rose-100 to-pink-100 !important flex !important items-center !important justify-center !important text-rose-600 !important font-bold !important border-2 !important border-rose-200 !important text-xl !important flex-shrink-0 !important">
                      {member.name.charAt(0)}
                    </div>

                    <div className="flex-1 !important min-w-0 !important">
                      <div className="flex !important flex-wrap !important items-center !important gap-2 !important mb-1 !important">
                        <h3 className="font-bold !important text-gray-900 !important text-base !important sm:text-lg !important">
                          {member.name}
                        </h3>
                        <span
                          className={`px-3 !important py-1 !important rounded-full !important text-xs !important font-semibold !important border !important ${getStatusStyles(member.status)}`}
                        >
                          {member.status.charAt(0).toUpperCase() +
                            member.status.slice(1)}
                        </span>
                      </div>

                      <p className="text-sm !important text-gray-600 !important mb-2 !important font-medium !important">
                        {member.role}
                      </p>

                      <div className="flex !important flex-col !important sm:flex-row !important sm:flex-wrap !important gap-2 !important sm:gap-4 !important text-sm !important text-gray-600 !important">
                        <span className="flex !important items-center !important gap-1 !important">
                          <i className="ri-mail-line text-rose-500 !important"></i>
                          {member.email}
                        </span>
                        <span className="flex !important items-center !important gap-1 !important">
                          <i className="ri-phone-line text-rose-500 !important"></i>
                          {member.phone}
                        </span>
                        <span className="flex !important items-center !important gap-1 !important">
                          <i className="ri-building-line text-rose-500 !important"></i>
                          {member.department}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Section - Details & Actions */}
                  <div className="flex !important flex-col !important sm:flex-row !important lg:flex-col !important items-start !important lg:items-end !important gap-3 !important border-t !important sm:border-t-0 !important lg:border-t-0 !important lg:border-l !important border-gray-100 !important pt-3 !important sm:pt-0 !important lg:pl-6 !important">
                    <div className="flex !important flex-col !important gap-1 !important">
                      <span className="text-xs !important text-gray-500 !important">
                        Joined:{" "}
                        <span className="font-semibold !important text-gray-700 !important">
                          {member.joinDate}
                        </span>
                      </span>
                      <span className="text-2xl !important font-bold !important text-gray-900 !important">
                        {member.salary}
                      </span>
                    </div>

                    <div className="flex !important gap-2 !important">
                      <button className="w-9 !important h-9 !important rounded-lg !important bg-gradient-to-br from-blue-500 to-cyan-500 !important text-white !important flex !important items-center !important justify-center !important shadow-md !important hover:shadow-lg !important transition-all !important hover:scale-110 !important">
                        <i className="ri-eye-line"></i>
                      </button>
                      <button className="w-9 !important h-9 !important rounded-lg !important bg-gradient-to-br from-green-500 to-emerald-500 !important text-white !important flex !important items-center !important justify-center !important shadow-md !important hover:shadow-lg !important transition-all !important hover:scale-110 !important">
                        <i className="ri-edit-line"></i>
                      </button>
                      <button className="w-9 !important h-9 !important rounded-lg !important bg-gradient-to-br from-purple-500 to-pink-500 !important text-white !important flex !important items-center !important justify-center !important shadow-md !important hover:shadow-lg !important transition-all !important hover:scale-110 !important">
                        <i className="ri-mail-line"></i>
                      </button>
                      <button className="w-9 !important h-9 !important rounded-lg !important bg-gradient-to-br from-red-500 to-rose-500 !important text-white !important flex !important items-center !important justify-center !important shadow-md !important hover:shadow-lg !important transition-all !important hover:scale-110 !important">
                        <i className="ri-delete-bin-line"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredStaff.length === 0 && (
          <div className="bg-white !important rounded-2xl !important p-12 !important text-center !important shadow-lg !important border !important border-gray-100 !important">
            <i className="ri-user-search-line text-6xl !important text-gray-300 !important mb-4 !important block !important"></i>
            <h3 className="text-xl !important font-bold !important text-gray-900 !important mb-2 !important">
              No Staff Found
            </h3>
            <p className="text-gray-600 !important">
              Try adjusting your filters to see more results.
            </p>
          </div>
        )}
      </main>
    </AdminLayout>
  );
};

export default AdminStaff;
