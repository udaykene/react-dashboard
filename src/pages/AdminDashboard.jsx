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
      <div className="mx-auto max-w-[1400px]">
        {/* .dashboard-header */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="m-0 text-[2rem] font-bold text-[#1e293b]">Dashboard Overview</h1>
            <p className="m-0 text-[1rem] text-[#64748b]">Welcome back! Here's what's happening today.</p>
          </div>
          <button className="flex items-center gap-2 rounded-lg bg-[#f59e0b] px-6 py-3 text-[1rem] font-semibold text-white transition-all duration-300 hover:translate-y-[-2px] hover:bg-[#d97706] hover:shadow-[0_4px_12px_rgba(245,158,11,0.3)]">
            <i className="ri-add-line"></i>
            New Project
          </button>
        </div>

        {/* .stats-grid */}
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-[12px] border-t-4 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] flex-col md:flex-row md:text-left text-center"
              style={{ borderTopColor: stat.color }}
            >
              <div 
                className="flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-[12px] text-[1.75rem] text-white"
                style={{ backgroundColor: stat.color }}
              >
                <i className={stat.icon}></i>
              </div>
              <div className="flex-1">
                <p className="m-0 mb-2 text-[0.875rem] font-medium text-[#64748b]">{stat.title}</p>
                <h3 className="m-0 mb-2 text-[1.75rem] font-bold text-[#1e293b]">{stat.value}</h3>
                <span className="text-[0.875rem] font-medium text-[#10b981]">
                  {stat.trend} <span className="text-[#64748b]">from last month</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* .dashboard-content */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Recent Activities Section - Column Span 2 */}
          <div className="rounded-[12px] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.05)] lg:col-span-2">
            <div className="mb-6 flex items-center justify-between border-b-2 border-[#f1f5f9] pb-4">
              <h2 className="text-[1.25rem] font-bold text-[#1e293b]">Recent Activities</h2>
              <button className="rounded-6px px-4 py-2 text-[0.875rem] font-600 text-[#f59e0b] transition-all hover:bg-[#fef3c7]">
                View All
              </button>
            </div>
            
            <div className="flex flex-col gap-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="group flex items-center gap-4 rounded-lg bg-[#f8fafc] p-4 transition-all duration-200 hover:translate-x-1 hover:bg-[#f1f5f9]">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#f59e0b] to-[#d97706] text-[1.25rem] text-white">
                    <i className="ri-arrow-right-line"></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="m-0 text-[1rem] font-semibold text-[#1e293b]">{activity.action}</h4>
                    <p className="m-0 text-[0.875rem] text-[#64748b]">{activity.project}</p>
                  </div>
                  <span className="text-[0.875rem] font-medium text-[#94a3b8]">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions Section - Column Span 1 */}
          <div className="rounded-[12px] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.05)] h-fit">
            <div className="mb-6 border-b-2 border-[#f1f5f9] pb-4">
              <h2 className="text-[1.25rem] font-bold text-[#1e293b]">Quick Actions</h2>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {[
                { icon: "ri-file-add-line", label: "Create Report" },
                { icon: "ri-user-add-line", label: "Add Client" },
                { icon: "ri-calendar-event-line", label: "Schedule Meeting" },
                { icon: "ri-mail-send-line", label: "Send Update" },
              ].map((action, idx) => (
                <button 
                  key={idx}
                  className="flex items-center gap-4 rounded-lg border-2 border-[#e2e8f0] bg-[#f8fafc] p-4 text-[1rem] font-semibold text-[#1e293b] transition-all duration-300 hover:translate-x-1 hover:border-[#f59e0b] hover:bg-[#fef3c7]"
                >
                  <i className={`${action.icon} text-[1.5rem] text-[#f59e0b]`}></i>
                  <span>{action.label}</span>
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