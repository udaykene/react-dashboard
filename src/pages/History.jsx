import React from "react";

const History = () => {
  const historyItems = [
    {
      title: "Project Brochure Downloaded",
      project: "Skyline Business Park",
      date: "10 Dec 2025",
    },
    {
      title: "Completed Site Visit",
      project: "Parth Commercial Hub",
      date: "15 Nov 2025",
    },
  ];
  
  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#0a0f1a] mb-6 sm:mb-8">
          History
        </h1>
        <div className="space-y-3 sm:space-y-4">
          {historyItems.map((item, i) => (
            <div
              key={i}
              className="bg-white p-4 sm:p-6 rounded-xl border-l-4 border-[#0a0f1a] shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4"
            >
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 text-base sm:text-lg">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-sm">{item.project}</p>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm italic whitespace-nowrap">
                {item.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;