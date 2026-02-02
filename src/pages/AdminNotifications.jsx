import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";

const AdminNotifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "appointment",
      title: "New Appointment Request",
      message:
        "John Doe has requested an appointment for Residential Complex A on Feb 5, 2026",
      sender: "John Doe",
      time: "5 minutes ago",
      date: "2026-01-29",
      isRead: false,
      priority: "high",
      icon: "ri-calendar-event-line",
      color: "#f59e0b",
    },
    {
      id: 2,
      type: "payment",
      title: "Payment Received",
      message:
        "Payment of $45,000 received from Rahul Sharma for Residential Complex A",
      sender: "Rahul Sharma",
      time: "2 hours ago",
      date: "2026-01-29",
      isRead: false,
      priority: "high",
      icon: "ri-money-dollar-circle-line",
      color: "#10b981",
    },
    {
      id: 3,
      type: "client",
      title: "New Client Registration",
      message: "Anita Desai has registered as a new client",
      sender: "System",
      time: "3 hours ago",
      date: "2026-01-29",
      isRead: true,
      priority: "medium",
      icon: "ri-user-add-line",
      color: "#3b82f6",
    },
    {
      id: 4,
      type: "project",
      title: "Project Update",
      message:
        "Villa Construction project has reached 75% completion milestone",
      sender: "Project Manager",
      time: "5 hours ago",
      date: "2026-01-29",
      isRead: true,
      priority: "medium",
      icon: "ri-building-line",
      color: "#8b5cf6",
    },
    {
      id: 5,
      type: "staff",
      title: "Staff Leave Request",
      message: "Vikram Singh has requested leave from Feb 15 to Feb 20",
      sender: "Vikram Singh",
      time: "1 day ago",
      date: "2026-01-28",
      isRead: false,
      priority: "low",
      icon: "ri-calendar-close-line",
      color: "#f59e0b",
    },
    {
      id: 6,
      type: "appointment",
      title: "Appointment Cancelled",
      message:
        "Sarah Williams has cancelled the appointment for Office Building",
      sender: "Sarah Williams",
      time: "1 day ago",
      date: "2026-01-28",
      isRead: true,
      priority: "low",
      icon: "ri-calendar-close-line",
      color: "#ef4444",
    },
    {
      id: 7,
      type: "offer",
      title: "Offer Redemption",
      message: "Client used promo code SUMMER15 for a $10,000 discount",
      sender: "System",
      time: "2 days ago",
      date: "2026-01-27",
      isRead: true,
      priority: "low",
      icon: "ri-gift-line",
      color: "#f59e0b",
    },
    {
      id: 8,
      type: "payment",
      title: "Payment Pending",
      message:
        "Payment of $32,500 is pending from Anita Desai for Commercial Plaza",
      sender: "System",
      time: "2 days ago",
      date: "2026-01-27",
      isRead: true,
      priority: "high",
      icon: "ri-time-line",
      color: "#f59e0b",
    },
    {
      id: 9,
      type: "review",
      title: "New Review Received",
      message: "Amit Verma left a 5-star review for Villa Construction project",
      sender: "Amit Verma",
      time: "3 days ago",
      date: "2026-01-26",
      isRead: true,
      priority: "low",
      icon: "ri-star-line",
      color: "#f59e0b",
    },
    {
      id: 10,
      type: "system",
      title: "System Update",
      message:
        "System maintenance scheduled for Feb 1, 2026 from 2:00 AM to 4:00 AM",
      sender: "System",
      time: "3 days ago",
      date: "2026-01-26",
      isRead: true,
      priority: "medium",
      icon: "ri-information-line",
      color: "#64748b",
    },
  ]);

  const [filterType, setFilterType] = useState("all");
  const [filterRead, setFilterRead] = useState("all");
  const [selectedNotifications, setSelectedNotifications] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const notificationTypes = [
    { id: "all", label: "All", icon: "ri-inbox-line" },
    {
      id: "appointment",
      label: "Appointments",
      icon: "ri-calendar-event-line",
    },
    { id: "payment", label: "Payments", icon: "ri-money-dollar-circle-line" },
    { id: "client", label: "Clients", icon: "ri-user-line" },
    { id: "project", label: "Projects", icon: "ri-building-line" },
    { id: "staff", label: "Staff", icon: "ri-team-line" },
  ];

  const getPriorityStyles = (priority) => {
    switch (priority) {
      case "high":
        return "bg-[#fee2e2] text-[#991b1b] border-[#ef4444]";
      case "medium":
        return "bg-[#fef3c7] text-[#92400e] border-[#f59e0b]";
      case "low":
        return "bg-[#dbeafe] text-[#1e40af] border-[#3b82f6]";
      default:
        return "bg-[#f1f5f9] text-[#475569] border-[#94a3b8]";
    }
  };

  const filteredNotifications = notifications.filter((notification) => {
    const typeMatch = filterType === "all" || notification.type === filterType;
    const readMatch =
      filterRead === "all" ||
      (filterRead === "unread" && !notification.isRead) ||
      (filterRead === "read" && notification.isRead);
    const searchMatch =
      searchQuery === "" ||
      notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notification.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notification.sender.toLowerCase().includes(searchQuery.toLowerCase());
    return typeMatch && readMatch && searchMatch;
  });

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const handleMarkAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n)),
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
  };

  const handleDelete = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const handleSelectNotification = (id) => {
    setSelectedNotifications((prev) =>
      prev.includes(id) ? prev.filter((nId) => nId !== id) : [...prev, id],
    );
  };

  const handleSelectAll = () => {
    if (selectedNotifications.length === filteredNotifications.length) {
      setSelectedNotifications([]);
    } else {
      setSelectedNotifications(filteredNotifications.map((n) => n.id));
    }
  };

  const handleBulkDelete = () => {
    setNotifications((prev) =>
      prev.filter((n) => !selectedNotifications.includes(n.id)),
    );
    setSelectedNotifications([]);
  };

  const handleBulkMarkAsRead = () => {
    setNotifications((prev) =>
      prev.map((n) =>
        selectedNotifications.includes(n.id) ? { ...n, isRead: true } : n,
      ),
    );
    setSelectedNotifications([]);
  };

  return (
    <AdminLayout>
      <div className="flex min-h-screen flex-col p-3 sm:p-4 md:p-6 lg:h-screen">
        {/* Header Section */}
        <div className="mb-4 flex flex-col gap-3 sm:mb-6 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <h1 className="m-0 text-[1.5rem] font-bold text-[#1e293b] sm:text-[1.75rem] md:text-[2rem]">
              Notifications
            </h1>
            <p className="m-0 mt-1 text-[0.875rem] text-[#64748b] sm:text-[1rem]">
              Stay updated with your latest notifications
              {unreadCount > 0 && (
                <span className="ml-2 inline-block rounded-full bg-[#ef4444] px-2 py-0.5 text-[0.7rem] font-bold text-white sm:text-[0.75rem]">
                  {unreadCount} New
                </span>
              )}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {selectedNotifications.length > 0 && (
              <>
                <button
                  onClick={handleBulkMarkAsRead}
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border-2 border-[#10b981] bg-white px-3 py-2 text-[0.75rem] font-semibold text-[#10b981] transition-all hover:bg-[#10b981] hover:text-white sm:flex-none sm:px-4 sm:py-2.5 sm:text-[0.875rem] md:px-5"
                >
                  <i className="ri-check-double-line text-base sm:text-lg"></i>
                  <span className="hidden sm:inline">Mark as Read</span>
                  <span className="sm:hidden">Read</span>
                  <span>({selectedNotifications.length})</span>
                </button>
                <button
                  onClick={handleBulkDelete}
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border-2 border-[#ef4444] bg-white px-3 py-2 text-[0.75rem] font-semibold text-[#ef4444] transition-all hover:bg-[#ef4444] hover:text-white sm:flex-none sm:px-4 sm:py-2.5 sm:text-[0.875rem] md:px-5"
                >
                  <i className="ri-delete-bin-line text-base sm:text-lg"></i>
                  <span className="hidden sm:inline">Delete</span>
                  <span className="sm:hidden">Del</span>
                  <span>({selectedNotifications.length})</span>
                </button>
              </>
            )}
            {/* <button
              onClick={handleMarkAllAsRead}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#f59e0b] px-4 py-2 text-[0.75rem] font-semibold text-white transition-all hover:bg-[#d97706] sm:flex-none sm:px-5 sm:py-2.5 sm:text-[0.875rem] md:px-6 md:py-3"
            >
              <i className="ri-check-double-line text-base sm:text-lg"></i>
              <span className="hidden sm:inline">Mark All as Read</span>
              <span className="sm:hidden">All Read</span>
            </button> */}
          </div>
        </div>

        {/* Filters Section */}
        <div className="mb-4 flex flex-col gap-3 rounded-[12px] bg-white px-3 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.05)] sm:mb-6 sm:gap-4 sm:px-4 sm:py-4 md:px-6">
          {/* Type Filters */}
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
            <span className="text-[0.8rem] font-semibold text-[#64748b] sm:text-[0.875rem]">
              Type:
            </span>
            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-2 md:gap-3">
              {notificationTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setFilterType(type.id)}
                  className={`flex items-center justify-center gap-1.5 rounded-lg border-2 px-2.5 py-1.5 text-[0.75rem] font-semibold transition-all sm:justify-start sm:px-3 sm:py-2 sm:text-[0.875rem] md:px-4
                    ${
                      filterType === type.id
                        ? "border-[#f59e0b] bg-[#fef3c7] text-[#d97706]"
                        : "border-transparent bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0]"
                    }`}
                >
                  <i className={`${type.icon} text-sm sm:text-base`}></i>
                  <span className="truncate">{type.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Status Filter and Search */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Status Filters */}
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
              <span className="text-[0.8rem] font-semibold text-[#64748b] sm:text-[0.875rem]">
                Status:
              </span>
              <div className="grid grid-cols-3 gap-2 sm:flex sm:gap-2 md:gap-3">
                {["all", "unread", "read"].map((status) => (
                  <button
                    key={status}
                    onClick={() => setFilterRead(status)}
                    className={`rounded-lg border-2 px-3 py-1.5 text-[0.75rem] font-semibold transition-all sm:px-4 sm:py-2 sm:text-[0.875rem]
                      ${
                        filterRead === status
                          ? "border-[#f59e0b] bg-[#fef3c7] text-[#d97706]"
                          : "border-transparent bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0]"
                      }`}
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Select All and Search */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
              {/* <button
                onClick={handleSelectAll}
                className="flex items-center justify-center gap-2 rounded-lg border-2 border-[#e2e8f0] bg-white px-3 py-2 text-[0.75rem] font-semibold text-[#475569] transition-all hover:border-[#f59e0b] hover:bg-[#fef3c7] hover:text-[#d97706] sm:px-4 sm:text-[0.875rem]"
              >
                <i className="ri-checkbox-multiple-line text-base sm:text-lg"></i>
                <span className="hidden sm:inline">
                  {selectedNotifications.length === filteredNotifications.length
                    ? "Deselect All"
                    : "Select All"}
                </span>
                <span className="sm:hidden">
                  {selectedNotifications.length === filteredNotifications.length
                    ? "Deselect"
                    : "Select"}
                </span>
              </button> */}

              {/* Search Input */}
              <div className="relative flex flex-1 items-center sm:min-w-[200px] md:min-w-[250px]">
                <i className="ri-search-line absolute left-3 text-[0.9rem] text-[#64748b] sm:text-base"></i>
                <input
                  type="text"
                  placeholder="Search notifications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border-2 border-[#e2e8f0] bg-[#f8fafc] py-2 pl-9 pr-4 text-[0.75rem] text-[#1e293b] outline-none transition-all placeholder:text-[#94a3b8] focus:border-[#f59e0b] focus:bg-white sm:py-2 sm:text-[0.875rem]"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 text-[#94a3b8] transition-colors hover:text-[#64748b]"
                  >
                    <i className="ri-close-line text-base sm:text-lg"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Notifications List */}
        <div className="no-scrollbar flex flex-col gap-2 pd-5 overflow-y-auto pb-4 pr-1 sm:gap-3 sm:pr-2 lg:flex-1 lg:pb-0">
          {filteredNotifications.length === 0 ? (
            <div className="rounded-[12px] bg-white px-6 py-12 text-center shadow-[0_2px_8px_rgba(0,0,0,0.05)] sm:px-8 sm:py-16">
              <i className="ri-notification-off-line mb-3 text-[3rem] text-[#cbd5e1] sm:mb-4 sm:text-[4rem]"></i>
              <h3 className="m-0 mb-2 text-[1.25rem] font-bold text-[#1e293b] sm:text-[1.5rem]">
                No notifications found
              </h3>
              <p className="m-0 text-[0.875rem] text-[#64748b] sm:text-base">
                {filterRead === "unread"
                  ? "You're all caught up! No unread notifications."
                  : searchQuery
                    ? "No notifications match your search."
                    : "Try adjusting your filters to see more results."}
              </p>
            </div>
          ) : (
            filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`group flex flex-col gap-3 rounded-[12px] border-l-4 bg-white p-3 transition-all duration-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] sm:gap-4 sm:p-4 md:p-5 lg:flex-row lg:items-center ${
                  notification.isRead
                    ? "border-transparent opacity-75 hover:opacity-100"
                    : "border-[#f59e0b] shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
                }`}
              >
                {/* Notification Content */}
                <div className="flex flex-1 lg:flex-col gap-3 sm:gap-4 lg:flex-row lg:items-center">
                  {/* Checkbox and Icon - Mobile */}
                  <div className="flex items-center gap-3 lg:hidden">
                    {/* <input
                    type="checkbox"
                    checked={selectedNotifications.includes(notification.id)}
                    onChange={() => handleSelectNotification(notification.id)}
                    className="h-4 w-4 cursor-pointer accent-[#f59e0b] sm:h-5 sm:w-5"
                  /> */}
                    <div
                      className="flex lg:hidden h-[50px] w-[50px] flex-shrink-0 items-center justify-center rounded-[10px] text-[1.5rem] text-white sm:h-[60px] sm:w-[60px] sm:rounded-[12px] sm:text-[1.75rem]"
                      style={{ backgroundColor: notification.color }}
                    >
                      <i className={notification.icon}></i>
                    </div>
                  </div>

                  {/* Icon - Desktop */}
                  <div
                    className="hidden  lg:flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-[12px] text-[1.75rem] text-white lg:flex"
                    style={{ backgroundColor: notification.color }}
                  >
                    <i className={notification.icon}></i>
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <h3
                        className={`m-0 text-[0.95rem] ${
                          notification.isRead ? "font-semibold" : "font-bold"
                        } text-[#1e293b] sm:text-[1rem] md:text-[1.125rem]`}
                      >
                        {notification.title}
                      </h3>
                      {!notification.isRead && (
                        <span className="rounded-full bg-[#ef4444] px-1.5 py-0.5 text-[0.6rem] font-bold text-white sm:px-2 sm:text-[0.65rem]">
                          NEW
                        </span>
                      )}
                      <span
                        className={`rounded-md border-2 px-1.5 py-0.5 text-[0.65rem] font-semibold capitalize sm:px-2 sm:text-[0.75rem] ${getPriorityStyles(
                          notification.priority,
                        )}`}
                      >
                        {notification.priority}
                      </span>
                    </div>

                    <p className="m-0 mb-2 text-[0.8rem] leading-relaxed text-[#64748b] sm:mb-3 sm:text-[0.875rem]">
                      {notification.message}
                    </p>

                    <div className="flex flex-wrap items-center gap-2 text-[0.75rem] text-[#94a3b8] sm:gap-3 sm:text-[0.8rem] md:text-[0.875rem]">
                      <span className="flex items-center gap-1 sm:gap-1.5">
                        <i className="ri-user-line text-sm sm:text-base"></i>
                        <span className="truncate">{notification.sender}</span>
                      </span>
                      <span className="flex items-center gap-1 sm:gap-1.5">
                        <i className="ri-time-line text-sm sm:text-base"></i>
                        {notification.time}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 border-t-2 border-[#f1f5f9] pt-3 sm:gap-2 lg:w-auto lg:border-t-0 lg:pt-0">
                  {!notification.isRead && (
                    <button
                      onClick={() => handleMarkAsRead(notification.id)}
                      className="flex h-8 w-8 flex-1 items-center justify-center rounded-md bg-[#d1fae5] text-[1rem] text-[#065f46] transition-all hover:scale-110 hover:bg-[#10b981] hover:text-white sm:h-9 sm:w-9 sm:flex-none sm:text-[1.125rem]"
                      title="Mark as read"
                    >
                      <i className="ri-check-line"></i>
                    </button>
                  )}
                  <button
                    className="flex h-8 w-8 flex-1 items-center justify-center rounded-md bg-[#dbeafe] text-[1rem] text-[#1e40af] transition-all hover:scale-110 hover:bg-[#3b82f6] hover:text-white sm:h-9 sm:w-9 sm:flex-none sm:text-[1.125rem]"
                    title="View details"
                  >
                    <i className="ri-eye-line"></i>
                  </button>
                  <button
                    className="flex h-8 w-8 flex-1 items-center justify-center rounded-md bg-[#fef3c7] text-[1rem] text-[#92400e] transition-all hover:scale-110 hover:bg-[#f59e0b] hover:text-white sm:h-9 sm:w-9 sm:flex-none sm:text-[1.125rem]"
                    title="View more"
                  >
                    <i className="ri-arrow-right-line"></i>
                  </button>
                  <button
                    onClick={() => handleDelete(notification.id)}
                    className="flex h-8 w-8 flex-1 items-center justify-center rounded-md bg-[#fee2e2] text-[1rem] text-[#991b1b] transition-all hover:scale-110 hover:bg-[#ef4444] hover:text-white sm:h-9 sm:w-9 sm:flex-none sm:text-[1.125rem]"
                    title="Delete"
                  >
                    <i className="ri-delete-bin-line"></i>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminNotifications;
