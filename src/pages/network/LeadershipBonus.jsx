
import React from "react";
import { Check } from "lucide-react";

const LeadershipBonus = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Top Section */}

      <h1 className="text-gray-800 text-lg mb-4 font-bold">Velox Leadership Bonus</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Current Rank */}
        <div className="border border-blue-200 rounded-xl bg-white shadow-sm p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-yellow-500 text-lg">👑</span>
            <h2 className="text-gray-800 font-semibold text-lg">
              Current Rank
            </h2>
          </div>
          <h3 className="text-blue-600 text-2xl font-bold mb-1">Manager</h3>
          <p className="text-gray-500 text-sm mb-4">Current Bonus: $3,000</p>

          <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-md flex items-center justify-center gap-1 mx-auto">
            Eligible for Weekly Bonus: Yes
            <Check size={16} className="text-green-600" />
          </button>
        </div>

        {/* Progress to Next Rank */}
        <div className="border border-green-300 rounded-xl bg-white shadow-sm p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-green-600 text-lg">📈</span>
            <h2 className="text-gray-800 font-semibold text-lg">
              Progress to Next Rank
            </h2>
          </div>
          <p className="text-gray-700 text-sm mb-1">
            Next Rank: <span className="font-medium">Director</span>
          </p>
          <div className="w-full bg-gray-200 h-3 rounded-full mt-2 mb-2">
            <div
              className="bg-green-600 h-3 rounded-full"
              style={{ width: "25%" }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mb-4">
            <span>Group Volume: $25,000</span>
            <span>Required: $100,000</span>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-1.5 rounded-md mx-auto">
            View Team Growth Plan
          </button>
        </div>

        {/* Next Bonus Unlock */}
        <div className="border border-yellow-300 rounded-xl bg-white shadow-sm p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-yellow-500 text-lg">🏅</span>
            <h2 className="text-gray-800 font-semibold text-lg">
              Next Bonus Unlock
            </h2>
          </div>
          <h3 className="text-orange-500 text-2xl font-bold mb-1">$10,000</h3>
          <p className="text-gray-600 text-sm mb-4">
            Upon reaching Director rank
          </p>
          <button className="border border-yellow-400 hover:bg-yellow-50 text-yellow-700 text-sm font-medium px-4 py-1.5 rounded-md mx-auto">
            View Qualification Requirements
          </button>
        </div>
      </div>

      {/* Rank Badge Section */}
      <div className="bg-white border border-gray-100 rounded-xl shadow-sm py-10 text-center">
        <h2 className="text-gray-800 font-semibold mb-6">Your Rank Badge</h2>
        <div className="w-24 h-24 rounded-full border-4 border-blue-400 flex items-center justify-center mx-auto">
          <span className="text-blue-500 text-4xl">👑</span>
        </div>
      </div>
    </div>
  );
};

export default LeadershipBonus;
