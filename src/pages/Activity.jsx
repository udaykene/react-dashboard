import React from "react";

const Activity = () => {
  const activities = [
    {
      id: 1,
      type: "Inquiry",
      property: "Azure Heights",
      status: "Pending",
      date: "24 Jan 2026",
    },
    {
      id: 2,
      type: "Site Visit",
      property: "Serene Villas",
      status: "Confirmed",
      date: "28 Jan 2026",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#0a0f1a] mb-8">My Activity</h1>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {activities.map((act) => (
            <div
              key={act.id}
              className="p-6 border-b border-gray-50 flex justify-between items-center hover:bg-gray-50 transition"
            >
              <div>
                <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
                  {act.type}
                </p>
                <h3 className="text-lg font-bold text-gray-900">
                  {act.property}
                </h3>
                <p className="text-sm text-gray-500">{act.date}</p>
              </div>
              <span
                className={`px-4 py-1 rounded-full text-xs font-bold ${
                  act.status === "Confirmed"
                    ? "bg-green-100 text-green-700"
                    : "bg-orange-100 text-orange-700"
                }`}
              >
                {act.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activity;
