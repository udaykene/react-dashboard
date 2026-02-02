import React from "react";
import AdminLayout from "../components/AdminLayout";

const AdminDashboard = () => {
  const stats = [
    {
      title: "Total Projects",
      value: "24",
      icon: "ri-building-line",
      color: "#3b82f6",
      trend: "+12%",
    },
    {
      title: "Active Clients",
      value: "156",
      icon: "ri-user-line",
      color: "#10b981",
      trend: "+8%",
    },
    {
      title: "Appointments",
      value: "32",
      icon: "ri-calendar-line",
      color: "#f59e0b",
      trend: "+5%",
    },
    {
      title: "Revenue",
      value: "$125K",
      icon: "ri-money-dollar-circle-line",
      color: "#8b5cf6",
      trend: "+18%",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      action: "New project started",
      project: "Residential Complex A",
      time: "2 hours ago",
    },
    {
      id: 2,
      action: "Client meeting scheduled",
      project: "Commercial Plaza",
      time: "4 hours ago",
    },
    {
      id: 3,
      action: "Project completed",
      project: "Villa Construction",
      time: "1 day ago",
    },
    {
      id: 4,
      action: "New appointment request",
      project: "Office Building",
      time: "2 days ago",
    },
  ];

  return (
    <AdminLayout>
      <div className="mx-auto max-w-[1400px] px-3 sm:px-6 lg:px-8 py-4">

        {/* HEADER */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
              Dashboard Overview
            </h1>
            <p className="text-sm sm:text-base text-slate-500">
              Welcome back! Here's what's happening today.
            </p>
          </div>

          <button className="flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-5 py-3 text-sm sm:text-base font-semibold text-white hover:bg-amber-600 transition w-full sm:w-auto">
            <i className="ri-add-line"></i>
            New Project
          </button>
        </div>

        {/* STATS GRID */}
        <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 rounded-xl bg-white p-5 shadow hover:shadow-lg transition border-t-4 text-center sm:text-left"
              style={{ borderTopColor: stat.color }}
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-xl text-xl text-white flex-shrink-0"
                style={{ backgroundColor: stat.color }}
              >
                <i className={stat.icon}></i>
              </div>

              <div className="flex-1">
                <p className="text-sm text-slate-500 font-medium mb-1">
                  {stat.title}
                </p>
                <h3 className="text-2xl font-bold text-slate-800 mb-1">
                  {stat.value}
                </h3>
                <span className="text-sm font-medium text-emerald-600">
                  {stat.trend}{" "}
                  <span className="text-slate-500">from last month</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* RECENT ACTIVITIES */}
          <div className="lg:col-span-2 bg-white rounded-xl p-5 sm:p-6 shadow">
            <div className="mb-5 flex items-center justify-between border-b pb-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-800">
                Recent Activities
              </h2>
              <button className="text-sm font-semibold text-amber-600 hover:bg-amber-100 px-3 py-1 rounded">
                View All
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex flex-col sm:flex-row sm:items-center gap-3 bg-slate-50 p-4 rounded-lg hover:bg-slate-100 transition"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 text-white text-lg">
                    <i className="ri-arrow-right-line"></i>
                  </div>

                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-800">
                      {activity.action}
                    </h4>
                    <p className="text-sm text-slate-500">
                      {activity.project}
                    </p>
                  </div>

                  <span className="text-sm text-slate-400 whitespace-nowrap">
                    {activity.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div className="bg-white rounded-xl p-5 sm:p-6 shadow h-fit">
            <h2 className="mb-5 text-lg sm:text-xl font-bold text-slate-800 border-b pb-3">
              Quick Actions
            </h2>

            <div className="grid grid-cols-1 gap-3">
              {[
                { icon: "ri-file-add-line", label: "Create Report" },
                { icon: "ri-user-add-line", label: "Add Client" },
                { icon: "ri-calendar-event-line", label: "Schedule Meeting" },
                { icon: "ri-mail-send-line", label: "Send Update" },
              ].map((action, idx) => (
                <button
                  key={idx}
                  className="flex items-center gap-4 rounded-lg border p-4 text-sm sm:text-base font-semibold text-slate-700 bg-slate-50 hover:bg-amber-100 hover:border-amber-400 transition"
                >
                  <i className={`${action.icon} text-xl text-amber-500`}></i>
                  {action.label}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
