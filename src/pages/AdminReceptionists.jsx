import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";

const AdminReceptionists = () => {
    const [receptionists, setReceptionists] = useState([
        {
            id: 1,
            name: "Meera Kapoor",
            email: "meera@parthbuilders.com",
            phone: "+91 9876543210",
            shift: "Morning",
            shiftTime: "8:00 AM - 2:00 PM",
            status: "active",
            location: "Main Office",
            joinDate: "Jan 2024",
            experience: "2 years",
            rating: 4.8,
        },
        {
            id: 2,
            name: "Kavita Singh",
            email: "kavita@parthbuilders.com",
            phone: "+91 9123456780",
            shift: "Afternoon",
            shiftTime: "2:00 PM - 8:00 PM",
            status: "active",
            location: "Main Office",
            joinDate: "Mar 2023",
            experience: "3 years",
            rating: 4.9,
        },
        {
            id: 3,
            name: "Pooja Mehta",
            email: "pooja@parthbuilders.com",
            phone: "+91 9988776655",
            shift: "Evening",
            shiftTime: "8:00 PM - 2:00 AM",
            status: "on-leave",
            location: "Branch Office",
            joinDate: "Jul 2024",
            experience: "1 year",
            rating: 4.6,
        },
        {
            id: 4,
            name: "Simran Kaur",
            email: "simran@parthbuilders.com",
            phone: "+91 9445566778",
            shift: "Morning",
            shiftTime: "8:00 AM - 2:00 PM",
            status: "active",
            location: "Branch Office",
            joinDate: "Feb 2023",
            experience: "3 years",
            rating: 4.7,
        },
        {
            id: 5,
            name: "Ritu Sharma",
            email: "ritu@parthbuilders.com",
            phone: "+91 9334455667",
            shift: "Afternoon",
            shiftTime: "2:00 PM - 8:00 PM",
            status: "active",
            location: "Main Office",
            joinDate: "Sep 2024",
            experience: "6 months",
            rating: 4.5,
        },
    ]);

    const [filterStatus, setFilterStatus] = useState("all");
    const [filterShift, setFilterShift] = useState("all");
    const [filterLocation, setFilterLocation] = useState("all");

    const shifts = ["all", "Morning", "Afternoon", "Evening"];
    const locations = ["all", "Main Office", "Branch Office"];

    // Today's schedule data
    const todaySchedule = [
        { shift: "Morning", count: 2, status: "on-duty" },
        { shift: "Afternoon", count: 2, status: "scheduled" },
        { shift: "Evening", count: 0, status: "vacant" },
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

    const getShiftColor = (shift) => {
        switch (shift) {
            case "Morning":
                return "#3b82f6";
            case "Afternoon":
                return "#f59e0b";
            case "Evening":
                return "#8b5cf6";
            default:
                return "#64748b";
        }
    };

    const getScheduleStatusStyle = (status) => {
        switch (status) {
            case "on-duty":
                return "bg-[#d1fae5] text-[#065f46] border-[#10b981]";
            case "scheduled":
                return "bg-[#dbeafe] text-[#1e40af] border-[#3b82f6]";
            case "vacant":
                return "bg-[#fee2e2] text-[#991b1b] border-[#ef4444]";
            default:
                return "bg-[#f1f5f9] text-[#475569] border-[#94a3b8]";
        }
    };

    const filteredReceptionists = receptionists.filter((receptionist) => {
        const statusMatch =
            filterStatus === "all" || receptionist.status === filterStatus;
        const shiftMatch =
            filterShift === "all" || receptionist.shift === filterShift;
        const locationMatch =
            filterLocation === "all" || receptionist.location === filterLocation;
        return statusMatch && shiftMatch && locationMatch;
    });

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        return (
            <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                    <i
                        key={index}
                        className={`${index < fullStars
                            ? "ri-star-fill text-[#f59e0b]"
                            : index === fullStars && hasHalfStar
                                ? "ri-star-half-fill text-[#f59e0b]"
                                : "ri-star-line text-[#cbd5e1]"
                            } text-[0.875rem]`}
                    ></i>
                ))}
                <span className="ml-1 text-[0.875rem] font-semibold text-[#64748b]">
                    {rating}
                </span>
            </div>
        );
    };

    return (
        <AdminLayout>
            <div className="flex h-screen flex-col">
                {/* Header Section */}
                <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                    <div>
                        <h1 className="m-0 text-[2rem] font-bold text-[#1e293b]">
                            Receptionists
                        </h1>
                        <p className="m-0 text-[1rem] text-[#64748b]">
                            Manage front desk staff and schedules
                        </p>
                    </div>
                    <button className="flex items-center gap-2 rounded-lg bg-[#f59e0b] px-6 py-3 font-semibold text-white transition-all hover:bg-[#d97706]">
                        <i className="ri-user-add-line"></i>
                        Add Receptionist
                    </button>
                </div>

                {/* Stats and Today's Schedule Grid */}
                <div className="mb-6 w-full flex gap-4 lg:grid-cols-3">

                    {/* Today's Schedule Card */}
                    {/* <div className="rounded-[12px] w-1/2 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                        <div className="mb-4 flex items-center gap-2 border-b-2 border-[#f1f5f9] pb-3">
                            <i className="ri-calendar-check-line text-[1.5rem] text-[#f59e0b]"></i>
                            <h2 className="m-0 text-[1.125rem] font-bold text-[#1e293b]">
                                Today's Schedule
                            </h2>
                        </div>
                        <div className="flex flex-col gap-3">
                            {todaySchedule.map((schedule, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center justify-between rounded-lg border-2 p-3 transition-all ${getScheduleStatusStyle(
                                        schedule.status
                                    )}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <i className="ri-time-line text-[1.25rem]"></i>
                                        <div>
                                            <p className="m-0 text-[0.875rem] font-semibold">
                                                {schedule.shift}
                                            </p>
                                            <span className="text-[0.75rem] opacity-75">
                                                {schedule.count} receptionist{schedule.count !== 1 ? "s" : ""}
                                            </span>
                                        </div>
                                    </div>
                                    <span className="rounded-md bg-white/50 px-3 py-1 text-[0.75rem] font-bold capitalize">
                                        {schedule.status.replace("-", " ")}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div> */}

                    {/* Stats Cards */}
                    {/* /*className=" flex flex-wrap  gap-4 lg:col-span-2" */}
                    {/* <div className=" w-full grid grid-cols-2  gap-4 lg:col-span-2" >
                        {[
                            {
                                title: "Total Staff",
                                value: receptionists.length.toString(),
                                icon: "ri-team-line",
                                color: "#3b82f6",
                            },
                            {
                                title: "On Duty",
                                value: receptionists
                                    .filter((r) => r.status === "active")
                                    .length.toString(),
                                icon: "ri-user-follow-line",
                                color: "#10b981",
                            },
                            {
                                title: "On Leave",
                                value: receptionists
                                    .filter((r) => r.status === "on-leave")
                                    .length.toString(),
                                icon: "ri-time-line",
                                color: "#f59e0b",
                            },
                            {
                                title: "Locations",
                                value: "2",
                                icon: "ri-building-line",
                                color: "#8b5cf6",
                            },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 rounded-[12px] w-full  bg-white p-5  shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)]"
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




                </div>

                {/* Filters and Search Section */}
                <div className="mb-6 flex  gap-4 rounded-[12px] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
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
                  ${filterStatus === status
                                        ? "border-[#f59e0b] bg-[#fef3c7] text-[#d97706]"
                                        : "border-transparent bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0]"
                                    }`}
                            >
                                {status === "all"
                                    ? "All"
                                    : status === "on-leave"
                                        ? "On Leave"
                                        : status.charAt(0).toUpperCase() + status.slice(1)}{" "}
                                (
                                {status === "all"
                                    ? receptionists.length
                                    : receptionists.filter((r) => r.status === status).length}
                                )
                            </button>
                        ))}
                    </div>

                    {/* Shift and Location Filters */}
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="text-[0.875rem] font-semibold text-[#64748b]">
                                Shift:
                            </span>
                            {shifts.map((shift) => (
                                <button
                                    key={shift}
                                    onClick={() => setFilterShift(shift)}
                                    className={`rounded-lg border-2 px-4 py-2 text-[0.875rem] font-semibold transition-all 
                    ${filterShift === shift
                                            ? "border-[#f59e0b] bg-[#fef3c7] text-[#d97706]"
                                            : "border-transparent bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0]"
                                        }`}
                                >
                                    {shift}
                                </button>
                            ))}
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            <span className="text-[0.875rem] font-semibold text-[#64748b]">
                                Location:
                            </span>
                            {locations.map((location) => (
                                <button
                                    key={location}
                                    onClick={() => setFilterLocation(location)}
                                    className={`rounded-lg border-2 px-4 py-2 text-[0.875rem] font-semibold transition-all 
                    ${filterLocation === location
                                            ? "border-[#f59e0b] bg-[#fef3c7] text-[#d97706]"
                                            : "border-transparent bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0]"
                                        }`}
                                >
                                    {location}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Search */}
                    <div className="flex items-center gap-3 rounded-lg border-2 border-[#e2e8f0] bg-[#f8fafc] px-4 py-3">
                        <i className="ri-search-line text-[1.25rem] text-[#64748b]"></i>
                        <input
                            type="text"
                            placeholder="Search receptionists..."
                            className="flex-1 border-none bg-transparent text-[0.875rem] text-[#1e293b] outline-none placeholder:text-[#94a3b8]"
                        />
                    </div>
                </div>

                {/* Receptionists List */}
                <div className="no-scrollbar flex flex-col gap-3 overflow-y-auto pr-2">
                    {filteredReceptionists.length === 0 ? (
                        <div className="rounded-[12px] bg-white px-8 py-16 text-center shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                            <i className="ri-user-line mb-4 text-[4rem] text-[#cbd5e1]"></i>
                            <h3 className="m-0 mb-2 text-[1.5rem] font-bold text-[#1e293b]">
                                No receptionists found
                            </h3>
                            <p className="m-0 text-[#64748b]">
                                Try adjusting your filters to see more results.
                            </p>
                        </div>
                    ) : (
                        filteredReceptionists.map((receptionist) => (
                            <div
                                key={receptionist.id}
                                className="group flex flex-col items-start justify-between gap-6 rounded-[12px] border-l-4 border-transparent bg-white p-6 transition-all duration-300 hover:translate-y-[-2px] hover:border-[#f59e0b] hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] lg:flex-row lg:items-center"
                            >
                                {/* Receptionist Info */}
                                <div className="flex flex-1 flex-col items-start gap-6 md:flex-row md:items-center">
                                    {/* Avatar */}
                                    <div className="flex h-[70px] w-[70px] flex-shrink-0 items-center justify-center rounded-[12px] bg-gradient-to-br from-[#f59e0b] to-[#d97706] text-[2rem] text-white">
                                        <i className="ri-customer-service-2-line"></i>
                                    </div>

                                    {/* Details */}
                                    <div className="flex-1">
                                        <div className="mb-2 flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-3">
                                            <h3 className="m-0 text-[1.125rem] font-bold text-[#1e293b]">
                                                {receptionist.name}
                                            </h3>
                                            <span
                                                className={`rounded-md px-3 py-1 text-[0.75rem] font-semibold capitalize ${getStatusStyles(
                                                    receptionist.status
                                                )}`}
                                            >
                                                {receptionist.status === "on-leave"
                                                    ? "On Leave"
                                                    : receptionist.status}
                                            </span>
                                            <div
                                                className="flex items-center gap-1.5 rounded-md px-3 py-1 text-[0.75rem] font-semibold text-white"
                                                style={{ backgroundColor: getShiftColor(receptionist.shift) }}
                                            >
                                                <i className="ri-sun-line"></i>
                                                {receptionist.shift}
                                            </div>
                                        </div>

                                        <p className="m-0 mb-3 flex items-center gap-2 text-[0.875rem] text-[#64748b]">
                                            <i className="ri-time-line text-[#94a3b8]"></i>
                                            {receptionist.shiftTime}
                                        </p>

                                        <div className="flex flex-col gap-2 md:flex-row md:flex-wrap md:gap-6">
                                            <span className="flex items-center gap-2 text-[0.875rem] font-medium text-[#64748b]">
                                                <i className="ri-mail-line text-[#94a3b8]"></i>
                                                {receptionist.email}
                                            </span>
                                            <span className="flex items-center gap-2 text-[0.875rem] font-medium text-[#64748b]">
                                                <i className="ri-phone-line text-[#94a3b8]"></i>
                                                {receptionist.phone}
                                            </span>
                                            <span className="flex items-center gap-2 text-[0.875rem] font-medium text-[#64748b]">
                                                <i className="ri-map-pin-line text-[#94a3b8]"></i>
                                                {receptionist.location}
                                            </span>
                                        </div>

                                        <div className="mt-3 flex flex-wrap items-center gap-4">
                                            {renderStars(receptionist.rating)}
                                            <span className="flex items-center gap-1.5 text-[0.875rem] text-[#64748b]">
                                                <i className="ri-briefcase-line text-[#94a3b8]"></i>
                                                <span className="font-medium">{receptionist.experience}</span>
                                            </span>
                                            <span className="flex items-center gap-1.5 text-[0.875rem] text-[#64748b]">
                                                <i className="ri-calendar-line text-[#94a3b8]"></i>
                                                <span className="font-medium">Joined {receptionist.joinDate}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex w-full gap-2 border-t-2 border-[#f1f5f9] pt-4 lg:w-auto lg:border-t-0 lg:pt-0">
                                    <button className="flex h-9 w-9 items-center justify-center rounded-md bg-[#dbeafe] text-[1.125rem] text-[#1e40af] transition-all hover:scale-110 hover:bg-[#3b82f6] hover:text-white">
                                        <i className="ri-eye-line"></i>
                                    </button>
                                    <button className="flex h-9 w-9 items-center justify-center rounded-md bg-[#fef3c7] text-[1.125rem] text-[#92400e] transition-all hover:scale-110 hover:bg-[#f59e0b] hover:text-white">
                                        <i className="ri-edit-line"></i>
                                    </button>
                                    <button className="flex h-9 w-9 items-center justify-center rounded-md bg-[#e0e7ff] text-[1.125rem] text-[#4338ca] transition-all hover:scale-110 hover:bg-[#6366f1] hover:text-white">
                                        <i className="ri-calendar-schedule-line"></i>
                                    </button>
                                    <button className="flex h-9 w-9 items-center justify-center rounded-md bg-[#d1fae5] text-[1.125rem] text-[#065f46] transition-all hover:scale-110 hover:bg-[#10b981] hover:text-white">
                                        <i className="ri-mail-line"></i>
                                    </button>
                                    <button className="flex h-9 w-9 items-center justify-center rounded-md bg-[#fee2e2] text-[1.125rem] text-[#991b1b] transition-all hover:scale-110 hover:bg-[#ef4444] hover:text-white">
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

export default AdminReceptionists;