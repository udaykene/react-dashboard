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
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#0a0f1a] mb-8">History</h1>
        <div className="space-y-4">
          {historyItems.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl border-l-4 border-[#0a0f1a] shadow-sm flex items-center justify-between"
            >
              <div>
                <h4 className="font-bold text-gray-900">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.project}</p>
              </div>
              <p className="text-gray-400 text-sm italic">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
