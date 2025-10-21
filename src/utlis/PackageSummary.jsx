import React from "react";

const PackageSummary = () => {
  return (
    <div className="bg-white dark:bg-neutral-900 dark:text-white rounded-xl shadow-sm p-5 border border-gray-100 max-6xl">
      {/* Header */}
      <h2 className="text-lg dark:bg-neutral-900 dark:text-white font-semibold text-gray-800 mb-4">
        Package Summary
      </h2>

      {/* Profit */}
      <div className="flex dark:bg-neutral-900 dark:text-white justify-between items-center mb-3">
        <span className="text-gray-600 dark:bg-neutral-900 dark:text-white font-medium">Profit :</span>
        <span className="px-3 dark:bg-neutral-900 dark:text-white py-1 border border-gray-200 rounded-lg bg-gray-50 text-gray-500 text-sm">
          0.00USD
        </span>
      </div>

      {/* Period */}
      <div className="flex dark:bg-neutral-900 dark:text-white justify-between items-center mb-4">
        <span className="text-gray-600 dark:bg-neutral-900 dark:text-white font-medium">Period :</span>
        <span className="px-3 py-1 border border-gray-200 rounded-lg bg-gray-50 dark:bg-neutral-900 dark:text-white text-gray-500 text-sm">
          2025-07-04 – 2025-07-04
        </span>
      </div>

      <hr className="border-gray-200 my-3" />

      {/* Total Lot Traded */}
      <div className="flex dark:bg-neutral-900 dark:text-white justify-between items-center mb-2">
        <span className="text-gray-600 dark:bg-neutral-900 dark:text-white font-medium">Total Lot Traded :</span>
        <span className="text-gray-700 font-semibold">--</span>
      </div>

      {/* Total Rebate Profits */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-600 dark:bg-neutral-900 dark:text-white font-medium">
          Total Rebate Profits
        </span>
        <span className="text-gray-700 dark:bg-neutral-900 dark:text-white font-semibold">0.00usd</span>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-4 text-sm font-semibold text-gray-700 mt-4 border-t border-gray-200 pt-3 dark:bg-neutral-900 dark:text-white">
        <span>Package ID</span>
        <span>MT5 ID</span>
        <span>Lot Traded</span>
        <span>Profit (USD)</span>
      </div>

      {/* Empty State Example */}
      <div className="py-6 text-center text-gray-400 text-sm dark:bg-neutral-900 dark:text-white">
        No package data available
      </div>
    </div>
  );
};

export default PackageSummary;
