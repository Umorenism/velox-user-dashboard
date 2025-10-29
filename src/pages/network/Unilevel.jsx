// src/pages/dashboard/network/Unilevel.jsx
import React from "react";
import { Users, Infinity, TrendingUp } from "lucide-react";

export default function Unilevel() {
  const levels = [
    { level: 1, percent: 10 },
    { level: 2, percent: 8 },
    { level: 3, percent: 6 },
    { level: 4, percent: 4 },
    { level: 5, percent: 2 },
    { level: 6, percent: 1 },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 p-8 rounded-2xl text-center">
        <Infinity size={48} className="mx-auto text-blue-600 dark:text-blue-400 mb-3" />
        <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200">Unilevel Commission</h2>
        <p className="text-lg mt-2 text-blue-700 dark:text-blue-300">Unlimited depth. No width limit.</p>
      </div>

      <div className="space-y-4">
        {levels.map((lvl) => (
          <div
            key={lvl.level}
            className="flex justify-between items-center bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center font-bold text-blue-700 dark:text-blue-300">
                {lvl.level}
              </div>
              <span className="font-medium">Level {lvl.level}</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="text-green-600" size={20} />
              <span className="text-xl font-bold text-green-600">{lvl.percent}%</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl text-center">
        <Users size={28} className="mx-auto text-gray-600 dark:text-gray-400 mb-2" />
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Earn from <strong>every level</strong> in your downline — no compression, no limits.
        </p>
      </div>
    </div>
  );
}