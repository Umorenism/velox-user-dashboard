
import React, { useState } from "react";
import { motion } from "framer-motion";

const WalletTabs = () => {
  const tabs = ["Deposit Wallet", "USD Wallet", "IB Wallet", "Credit Wallet"];
  const [activeTab, setActiveTab] = useState("Deposit Wallet");

  return (
    <div className="bg-white dark:bg-neutral-800 dark:text-white rounded-2xl shadow-sm p-4 md:p-4 w-full max-w-[1300px] mx-auto">
      <h2 className="text-lg font-semibold mb-4">Packages</h2>
      <div className=" mb-6 overflow-x-auto">
        <div className="flex dark:bg-neutral-800 dark:text-white justify-between space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-2 text-sm md:text-base font-medium transition-colors duration-300 ${
                activeTab === tab ? "text-orange-500" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-400 rounded-full"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto dark:bg-neutral-800 dark:text-white">
        <table className="min-w-full border border-gray-100">
          <thead>
            <tr className="text-left text-sm text-gray-600 bg-gray-50 dark:bg-neutral-800 dark:text-white">
              <th className="py-3 px-4">Transaction ID ↕</th>
              <th className="py-3 px-4">Date ↕</th>
              <th className="py-3 px-4">Credit ↕</th>
              <th className="py-3 px-4">Debit ↕</th>
              <th className="py-3 px-4">Balance ↕</th>
              <th className="py-3 px-4">Username ↕</th>
              <th className="py-3 px-4">User ID ↕</th>
              <th className="py-3 px-4">Remark ↕</th>
            </tr>
          </thead>
        </table>

        {/* Empty state */}
        <div className="flex flex-col items-center justify-center py-16">
          <div className="text-gray-400 text-5xl mb-2">⚠️</div>
          <p className="text-gray-500 text-sm">No Data Available</p>
        </div>
      </div>
    </div>
  );
};

export default WalletTabs;
