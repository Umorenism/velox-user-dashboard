
import React, { useState } from "react";
import { AlertTriangle } from "lucide-react";

const UserPackagesSection = () => {
  const [activeTab, setActiveTab] = useState("All Packages");

  const tabs = ["All SERIES",  "STARTER TRADER SERIES","PRO TRADER SERIES", "INSTITUTIONAL TRADER SERIES"];

  // Fake example data (empty to trigger "no data" view)
  const packages = [];

  const filteredPackages =
    activeTab === "All Packages"
      ? packages
      : packages.filter((pkg) => pkg.name === activeTab);

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white dark:bg-neutral-900 rounded-xl shadow-sm border border-gray-100 dark:border-neutral-800">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
       Packages
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-gray-200 dark:border-neutral-700 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium rounded-t-md transition-colors ${
              activeTab === tab
                ? "bg-[#F8983B]/10 text-[#F8983B] border-b-2 border-[#F8983B]"
                : "text-gray-500 dark:text-gray-400 hover:text-[#F8983B] dark:hover:text-[#F8983B]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      {filteredPackages.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 bg-gray-50 dark:bg-neutral-800 rounded-lg">
          <AlertTriangle className="text-gray-400 mb-4 w-12 h-12" />
          <p className="text-gray-500 dark:text-gray-300 text-lg font-medium">
            No packages found
          </p>
          <p className="text-gray-400 dark:text-gray-400 text-sm mt-1">
            Try switching to a different tab or refreshing the page
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPackages.map((pkg, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-neutral-700 rounded-lg p-6 bg-gray-50 dark:bg-neutral-800 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
                {pkg.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                Price: <span className="text-[#F8983B]">${pkg.price}</span>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Status:{" "}
                <span
                  className={`font-medium ${
                    pkg.status === "active" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {pkg.status === "active" ? "Active" : "Expired"}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserPackagesSection;
