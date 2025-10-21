import React, { useState } from "react";
import { AlertTriangle } from "lucide-react"; // npm install lucide-react

const UserPackagesSection = () => {
  const [activeTab, setActiveTab] = useState("All Package");

  const tabs = ["All Package", "Package Lite", "Package Pro", "Package Expert"];

  return (
    <div className="bg-white dark:bg-neutral-900 dark:text-white p-3 rounded-xl border border-gray-100 p-6  mx-auto">
      {/* Header */}
      <h2 className="text-lg dark:bg-neutral-900 dark:text-white font-semibold text-gray-800 mb-4">Deposit Details</h2>

      {/* Tabs */}
      <div className="flex justify-between dark:bg-neutral-900 dark:text-white items-center border-b border-gray-200 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`mr-8 pb-2 dark:bg-neutral-900 dark:text-white text-sm font-medium ${
              activeTab === tab
                ? "text-gray-900 border-b-2 border-black"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="flex flex-col items-center justify-center py-12">
        <AlertTriangle className="text-gray-400 mb-3 w-10 h-10" />
        <p className="text-gray-500 dark:bg-neutral-900 dark:text-white font-medium text-sm">No Data Available</p>
      </div>
    </div>
  );
};

export default UserPackagesSection;
