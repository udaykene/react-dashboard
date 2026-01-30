import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";

const AdminNotifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "appointment",
      title: "New Appointment Request",
      message: "John Doe has requested an appointment for Residential Complex A on Feb 5, 2026",
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
      message: "Payment of $45,000 received from Rahul Sharma for Residential Complex A",
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
      message: "Villa Construction project has reached 75% completion milestone",
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
      message: "Sarah Williams has cancelled the appointment for Office Building",
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
      message: "Payment of $32,500 is pending from Anita Desai for Commercial Plaza",
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
      message: "System maintenance scheduled for Feb 1, 2026 from 2:00 AM to 4:00 AM",
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

  const notificationTypes = [
    { id: "all", label: "All", icon: "ri-inbox-line" },
    { id: "appointment", label: "Appointments", icon: "ri-calendar-event-line" },
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
    return typeMatch && readMatch;
  });

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const handleMarkAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
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
      prev.includes(id) ? prev.filter((nId) => nId !== id) : [...prev, id]
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
      prev.filter((n) => !selectedNotifications.includes(n.id))
    );
    setSelectedNotifications([]);
  };

  const handleBulkMarkAsRead = () => {
    setNotifications((prev) =>
      prev.map((n) =>
        selectedNotifications.includes(n.id) ? { ...n, isRead: true } : n
      )
    );
    setSelectedNotifications([]);
  };

  return (
    <AdminLayout>
      <div className="flex h-screen flex-col">
        {/* Header Section */}
        <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="m-0 text-[2rem] font-bold text-[#1e293b]">
              Notifications
            </h1>
            <p className="m-0 text-[1rem] text-[#64748b]">
              Stay updated with your latest notifications
              {unreadCount > 0 && (
                <span className="ml-2 rounded-full bg-[#ef4444] px-2 py-1 text-[0.75rem] font-bold text-white">
                  {unreadCount} New
                </span>
              )}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {selectedNotifications.length > 0 && (
              <>
                <button
                  onClick={handleBulkMarkAsRead}
                  className="flex items-center gap-2 rounded-lg border-2 border-[#10b981] bg-white px-5 py-2.5 text-[0.875rem] font-semibold text-[#10b981] transition-all hover:bg-[#10b981] hover:text-white"
                >
                  <i className="ri-check-double-line"></i>
                  Mark as Read ({selectedNotifications.length})
                </button>
                <button
                  onClick={handleBulkDelete}
                  className="flex items-center gap-2 rounded-lg border-2 border-[#ef4444] bg-white px-5 py-2.5 text-[0.875rem] font-semibold text-[#ef4444] transition-all hover:bg-[#ef4444] hover:text-white"
                >
                  <i className="ri-delete-bin-line"></i>
                  Delete ({selectedNotifications.length})
                </button>
              </>
            )}
            <button
              onClick={handleMarkAllAsRead}
              className="flex items-center gap-2 rounded-lg bg-[#f59e0b] px-6 py-3 font-semibold text-white transition-all hover:bg-[#d97706]"
            >
              <i className="ri-check-double-line"></i>
              Mark All as Read
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        {/* <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Total Notifications",
              value: notifications.length.toString(),
              icon: "ri-notification-3-line",
              color: "#3b82f6",
            },
            {
              title: "Unread",
              value: unreadCount.toString(),
              icon: "ri-mail-unread-line",
              color: "#ef4444",
            },
            {
              title: "High Priority",
              value: notifications
                .filter((n) => n.priority === "high")
                .length.toString(),
              icon: "ri-error-warning-line",
              color: "#f59e0b",
            },
            {
              title: "Today",
              value: notifications
                .filter((n) => n.date === "2026-01-29")
                .length.toString(),
              icon: "ri-calendar-today-line",
              color: "#10b981",
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
        </div> */}

        {/* Filters Section */}
        <div className="mb-6 flex flex-col gap-4 rounded-[12px] bg-white px-6 py-4 shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
          {/* Type Filters */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[0.875rem] font-semibold text-[#64748b]">
              Type:
            </span>
            {notificationTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setFilterType(type.id)}
                className={`flex items-center gap-2 rounded-lg border-2 px-4 py-2 text-[0.875rem] font-semibold transition-all 
                  ${filterType === type.id
                    ? "border-[#f59e0b] bg-[#fef3c7] text-[#d97706]"
                    : "border-transparent bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0]"
                  }`}
              >
                <i className={type.icon}></i>
                {type.label}
              </button>
            ))}
          </div>

          {/* Read/Unread Filter and Search */}
          <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap  items-center gap-3">
              <span className="text-[0.875rem] font-semibold text-[#64748b]">
                Status:
              </span>
              {["all", "unread", "read"].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterRead(status)}
                  className={`rounded-lg border-2 px-4 py-2 text-[0.875rem] font-semibold transition-all 
                    ${filterRead === status
                      ? "border-[#f59e0b] bg-[#fef3c7] text-[#d97706]"
                      : "border-transparent bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0]"
                    }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleSelectAll}
                className="flex items-center gap-2 rounded-lg border-2 border-[#e2e8f0] bg-white px-4 py-2 text-[0.875rem] font-semibold text-[#475569] transition-all hover:border-[#f59e0b] hover:bg-[#fef3c7] hover:text-[#d97706]"
              >
                <i className="ri-checkbox-multiple-line"></i>
                {selectedNotifications.length === filteredNotifications.length
                  ? "Deselect All"
                  : "Select All"}
              </button>

              <div className="flex min-w-[250px] justify-center items-center gap-3   ">
                <div className="bg-[#f8fafc] flex justify-center items-center border-[#e2e8f0] rounded-lg border-2 px-4 py-[0.4rem]">
                  <label htmlFor="inpu">
                    <i className="ri-search-line text-[0.8rem] p-0 text-[#64748b]"></i>
                  </label>
                </div>
                <input
                  id="inpu"
                  type="text"
                  placeholder="Search notifications..."
                  className="flex-1 bg-[#f8fafc] border-[#e2e8f0] rounded-lg border-2 px-4 py-2 text-[0.875rem] text-[#1e293b] outline-none placeholder:text-[#94a3b8]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Notifications List */}
        <div className="no-scrollbar flex flex-1 flex-col gap-3 overflow-y-auto pr-2">
          {filteredNotifications.length === 0 ? (
            <div className="rounded-[12px] bg-white px-8 py-16 text-center shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
              <i className="ri-notification-off-line mb-4 text-[4rem] text-[#cbd5e1]"></i>
              <h3 className="m-0 mb-2 text-[1.5rem] font-bold text-[#1e293b]">
                No notifications found
              </h3>
              <p className="m-0 text-[#64748b]">
                {filterRead === "unread"
                  ? "You're all caught up! No unread notifications."
                  : "Try adjusting your filters to see more results."}
              </p>
            </div>
          ) : (
            filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`group flex flex-col items-start gap-4 rounded-[12px] border-l-4 bg-white p-5 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] lg:flex-row lg:items-center ${notification.isRead
                  ? "border-transparent opacity-75"
                  : "border-[#f59e0b] shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
                  }`}
              >
                {/* Checkbox */}
                <div className="flex items-start lg:items-center">
                  <input
                    type="checkbox"
                    checked={selectedNotifications.includes(notification.id)}
                    onChange={() => handleSelectNotification(notification.id)}
                    className="mt-1 h-5 w-5 cursor-pointer accent-[#f59e0b] lg:mt-0"
                  />
                </div>

                {/* Notification Content */}
                <div className="flex flex-1 flex-col items-start gap-4 md:flex-row md:items-center">
                  {/* Icon */}
                  <div
                    className="flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-[12px] text-[1.75rem] text-white"
                    style={{ backgroundColor: notification.color }}
                  >
                    <i className={notification.icon}></i>
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <div className="mb-2 flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-3">
                      <h3
                        className={`m-0 text-[1.125rem] ${notification.isRead ? "font-semibold" : "font-bold"
                          } text-[#1e293b]`}
                      >
                        {notification.title}
                      </h3>
                      {!notification.isRead && (
                        <span className="rounded-full bg-[#ef4444] px-2 py-0.5 text-[0.65rem] font-bold text-white">
                          NEW
                        </span>
                      )}
                      <span
                        className={`rounded-md border-2 px-2 py-0.5 text-[0.75rem] font-semibold capitalize ${getPriorityStyles(
                          notification.priority
                        )}`}
                      >
                        {notification.priority}
                      </span>
                    </div>

                    <p className="m-0 mb-3 text-[0.875rem] text-[#64748b]">
                      {notification.message}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-[0.875rem] text-[#94a3b8]">
                      <span className="flex items-center gap-1.5">
                        <i className="ri-user-line"></i>
                        {notification.sender}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <i className="ri-time-line"></i>
                        {notification.time}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex w-full gap-2 border-t-2 border-[#f1f5f9] pt-3 lg:w-auto lg:border-t-0 lg:pt-0">
                  {!notification.isRead && (
                    <button
                      onClick={() => handleMarkAsRead(notification.id)}
                      className="flex h-9 w-9 items-center justify-center rounded-md bg-[#d1fae5] text-[1.125rem] text-[#065f46] transition-all hover:scale-110 hover:bg-[#10b981] hover:text-white"
                      title="Mark as read"
                    >
                      <i className="ri-check-line"></i>
                    </button>
                  )}
                  <button className="flex h-9 w-9 items-center justify-center rounded-md bg-[#dbeafe] text-[1.125rem] text-[#1e40af] transition-all hover:scale-110 hover:bg-[#3b82f6] hover:text-white">
                    <i className="ri-eye-line"></i>
                  </button>
                  <button className="flex h-9 w-9 items-center justify-center rounded-md bg-[#fef3c7] text-[1.125rem] text-[#92400e] transition-all hover:scale-110 hover:bg-[#f59e0b] hover:text-white">
                    <i className="ri-arrow-right-line"></i>
                  </button>
                  <button
                    onClick={() => handleDelete(notification.id)}
                    className="flex h-9 w-9 items-center justify-center rounded-md bg-[#fee2e2] text-[1.125rem] text-[#991b1b] transition-all hover:scale-110 hover:bg-[#ef4444] hover:text-white"
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