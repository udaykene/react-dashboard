import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";

const AdminRevenueReports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("month");
  const [selectedYear, setSelectedYear] = useState("2026");

  const revenueStats = [
    {
      title: "Total Revenue",
      value: "$845,250",
      icon: "ri-money-dollar-circle-line",
      color: "#10b981",
      trend: "+23.5%",
      change: "increase",
    },
    {
      title: "Projects Revenue",
      value: "$652,400",
      icon: "ri-building-line",
      color: "#3b82f6",
      trend: "+18.2%",
      change: "increase",
    },
    {
      title: "Pending Payments",
      value: "$125,800",
      icon: "ri-time-line",
      color: "#f59e0b",
      trend: "-5.3%",
      change: "decrease",
    },
    {
      title: "This Month",
      value: "$67,050",
      icon: "ri-calendar-line",
      color: "#8b5cf6",
      trend: "+12.8%",
      change: "increase",
    },
  ];

  const monthlyRevenue = [
    { month: "Jan", revenue: 45000, projects: 3 },
    { month: "Feb", revenue: 52000, projects: 4 },
    { month: "Mar", revenue: 48000, projects: 3 },
    { month: "Apr", revenue: 61000, projects: 5 },
    { month: "May", revenue: 58000, projects: 4 },
    { month: "Jun", revenue: 72000, projects: 6 },
    { month: "Jul", revenue: 68000, projects: 5 },
    { month: "Aug", revenue: 75000, projects: 6 },
    { month: "Sep", revenue: 81000, projects: 7 },
    { month: "Oct", revenue: 78000, projects: 6 },
    { month: "Nov", revenue: 85000, projects: 7 },
    { month: "Dec", revenue: 92000, projects: 8 },
  ];

  const recentTransactions = [
    {
      id: 1,
      client: "Rahul Sharma",
      project: "Residential Complex A",
      amount: "$45,000",
      date: "2026-01-25",
      status: "completed",
      type: "Project Payment",
    },
    {
      id: 2,
      client: "Anita Desai",
      project: "Commercial Plaza",
      amount: "$32,500",
      date: "2026-01-22",
      status: "pending",
      type: "Advance Payment",
    },
    {
      id: 3,
      client: "Amit Verma",
      project: "Villa Construction",
      amount: "$58,200",
      date: "2026-01-20",
      status: "completed",
      type: "Final Payment",
    },
    {
      id: 4,
      client: "Mike Johnson",
      project: "Office Building",
      amount: "$28,000",
      date: "2026-01-18",
      status: "completed",
      type: "Milestone Payment",
    },
    {
      id: 5,
      client: "Sarah Williams",
      project: "Retail Space",
      amount: "$41,300",
      date: "2026-01-15",
      status: "pending",
      type: "Project Payment",
    },
  ];

  const projectRevenueBreakdown = [
    { category: "Residential", amount: 385000, percentage: 45.5, color: "#3b82f6" },
    { category: "Commercial", amount: 285000, percentage: 33.7, color: "#10b981" },
    { category: "Industrial", amount: 125250, percentage: 14.8, color: "#f59e0b" },
    { category: "Other", amount: 50000, percentage: 6.0, color: "#8b5cf6" },
  ];

  const getStatusStyles = (status) => {
    switch (status) {
      case "completed":
        return "bg-[#d1fae5] text-[#065f46]";
      case "pending":
        return "bg-[#fef3c7] text-[#92400e]";
      case "failed":
        return "bg-[#fee2e2] text-[#991b1b]";
      default:
        return "bg-[#f1f5f9] text-[#475569]";
    }
  };

  const maxRevenue = Math.max(...monthlyRevenue.map((m) => m.revenue));

  return (
    <AdminLayout>
      <div className="flex h-screen flex-col overflow-y-auto no-scrollbar pb-6">
        {/* Header Section */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="m-0 text-[2rem] font-bold text-[#1e293b]">Revenue & Reports</h1>
            <p className="m-0 text-[1rem] text-[#64748b]">
              Track financial performance and generate reports
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 rounded-lg border-2 border-[#e2e8f0] bg-white px-5 py-2.5 text-[0.875rem] font-semibold text-[#475569] transition-all hover:border-[#f59e0b] hover:bg-[#fef3c7] hover:text-[#d97706]">
              <i className="ri-download-line"></i>
              Export Report
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-[#f59e0b] px-6 py-3 font-semibold text-white transition-all hover:bg-[#d97706]">
              <i className="ri-file-text-line"></i>
              Generate Report
            </button>
          </div>
        </div>

        {/* Revenue Stats Grid */}
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {revenueStats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-[12px] border-t-4 bg-white p-6 text-center shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] md:flex-row md:items-start md:text-left"
              style={{ borderTopColor: stat.color }}
            >
              <div
                className="mb-4 flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-[12px] text-[1.75rem] text-white md:mb-0 md:mr-4"
                style={{ backgroundColor: stat.color }}
              >
                <i className={stat.icon}></i>
              </div>
              <div className="flex-1">
                <p className="m-0 mb-2 text-[0.875rem] font-medium text-[#64748b]">
                  {stat.title}
                </p>
                <h3 className="m-0 mb-2 text-[1.75rem] font-bold text-[#1e293b]">
                  {stat.value}
                </h3>
                <span
                  className={`text-[0.875rem] font-medium ${
                    stat.change === "increase" ? "text-[#10b981]" : "text-[#ef4444]"
                  }`}
                >
                  {stat.trend}{" "}
                  <span className="text-[#64748b]">from last period</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Revenue Chart - 2 columns */}
          <div className="rounded-[12px] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.05)] lg:col-span-2">
            <div className="mb-6 flex flex-col items-start justify-between gap-4 border-b-2 border-[#f1f5f9] pb-4 sm:flex-row sm:items-center">
              <h2 className="text-[1.25rem] font-bold text-[#1e293b]">
                Revenue Overview
              </h2>
              <div className="flex gap-2">
                {["week", "month", "year"].map((period) => (
                  <button
                    key={period}
                    onClick={() => setSelectedPeriod(period)}
                    className={`rounded-lg border-2 px-4 py-2 text-[0.875rem] font-semibold transition-all ${
                      selectedPeriod === period
                        ? "border-[#f59e0b] bg-[#fef3c7] text-[#d97706]"
                        : "border-transparent bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0]"
                    }`}
                  >
                    {period.charAt(0).toUpperCase() + period.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Bar Chart */}
            <div className="flex h-[320px] items-end justify-between gap-3 px-2">
              {monthlyRevenue.map((data, index) => (
                <div
                  key={index}
                  className="group flex flex-1 flex-col items-center gap-2"
                >
                  <div className="relative w-full">
                    <div
                      className="w-full rounded-t-lg bg-gradient-to-t from-[#f59e0b] to-[#fbbf24] transition-all duration-500 hover:from-[#d97706] hover:to-[#f59e0b]"
                      style={{
                        height: `${(data.revenue / maxRevenue) * 260}px`,
                        minHeight: "20px",
                      }}
                    >
                      <div className="absolute -top-10 left-1/2 hidden -translate-x-1/2 rounded-lg bg-[#1e293b] px-3 py-2 text-[0.75rem] font-semibold text-white shadow-lg group-hover:block">
                        ${(data.revenue / 1000).toFixed(0)}K
                        <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-[#1e293b]"></div>
                      </div>
                    </div>
                  </div>
                  <span className="text-[0.75rem] font-medium text-[#64748b]">
                    {data.month}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue Breakdown - 1 column */}
          <div className="rounded-[12px] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
            <div className="mb-6 border-b-2 border-[#f1f5f9] pb-4">
              <h2 className="text-[1.25rem] font-bold text-[#1e293b]">
                Revenue by Category
              </h2>
            </div>

            <div className="mb-8 flex items-center justify-center">
              <div className="relative h-[200px] w-[200px]">
                {/* Donut Chart SVG */}
                <svg className="h-full w-full -rotate-90 transform">
                  {projectRevenueBreakdown.map((item, index) => {
                    const totalPercentage = projectRevenueBreakdown
                      .slice(0, index)
                      .reduce((sum, i) => sum + i.percentage, 0);
                    const radius = 80;
                    const circumference = 2 * Math.PI * radius;
                    const strokeDasharray = `${
                      (item.percentage / 100) * circumference
                    } ${circumference}`;
                    const strokeDashoffset =
                      -((totalPercentage / 100) * circumference);

                    return (
                      <circle
                        key={index}
                        cx="100"
                        cy="100"
                        r={radius}
                        fill="none"
                        stroke={item.color}
                        strokeWidth="28"
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}
                        className="transition-all duration-300 hover:opacity-80"
                      />
                    );
                  })}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[0.875rem] font-medium text-[#64748b]">
                    Total
                  </span>
                  <span className="text-[1.5rem] font-bold text-[#1e293b]">
                    $845K
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {projectRevenueBreakdown.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg bg-[#f8fafc] p-3 transition-all hover:bg-[#f1f5f9]"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="h-4 w-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-[0.875rem] font-medium text-[#1e293b]">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[0.875rem] font-semibold text-[#64748b]">
                      {item.percentage}%
                    </span>
                    <span className="text-[0.875rem] font-bold text-[#1e293b]">
                      ${(item.amount / 1000).toFixed(0)}K
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="mt-6 rounded-[12px] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
          <div className="mb-6 flex flex-col items-start justify-between gap-4 border-b-2 border-[#f1f5f9] pb-4 sm:flex-row sm:items-center">
            <h2 className="text-[1.25rem] font-bold text-[#1e293b]">
              Recent Transactions
            </h2>
            <button className="rounded-lg px-4 py-2 text-[0.875rem] font-semibold text-[#f59e0b] transition-all hover:bg-[#fef3c7]">
              View All
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {recentTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="group flex flex-col items-start justify-between gap-4 rounded-lg border-l-4 border-transparent bg-[#f8fafc] p-5 transition-all duration-300 hover:translate-x-1 hover:border-[#f59e0b] hover:bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] lg:flex-row lg:items-center"
              >
                <div className="flex flex-1 items-center gap-4">
                  <div className="flex h-[50px] w-[50px] flex-shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-br from-[#f59e0b] to-[#d97706] text-[1.5rem] text-white">
                    <i className="ri-money-dollar-circle-line"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="m-0 mb-1 text-[1rem] font-bold text-[#1e293b]">
                      {transaction.client}
                    </h3>
                    <p className="m-0 mb-2 flex items-center gap-2 text-[0.875rem] text-[#64748b]">
                      <i className="ri-building-line"></i>
                      {transaction.project}
                    </p>
                    <span className="inline-block rounded-md bg-[#f1f5f9] px-2 py-1 text-[0.75rem] font-medium text-[#64748b]">
                      {transaction.type}
                    </span>
                  </div>
                </div>

                <div className="flex w-full items-center justify-between gap-4 lg:w-auto">
                  <div className="flex flex-col items-start lg:items-end">
                    <span className="text-[1.25rem] font-bold text-[#1e293b]">
                      {transaction.amount}
                    </span>
                    <span className="text-[0.75rem] text-[#94a3b8]">
                      {transaction.date}
                    </span>
                  </div>
                  <span
                    className={`rounded-md px-4 py-2 text-[0.875rem] font-semibold capitalize ${getStatusStyles(
                      transaction.status
                    )}`}
                  >
                    {transaction.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminRevenueReports;