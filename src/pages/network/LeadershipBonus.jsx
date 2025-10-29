// src/pages/dashboard/network/LeadershipBonus.jsx
import React from "react";
import { Crown, Medal, Star } from "lucide-react";

const ranks = [
  { rank: "Diamond", bonus: "$50,000", color: "text-purple-600" },
  { rank: "Platinum", bonus: "$25,000", color: "text-gray-600" },
  { rank: "Gold", bonus: "$10,000", color: "text-yellow-600" },
  { rank: "Silver", bonus: "$5,000", color: "text-gray-400" },
];

export default function LeadershipBonus() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900 dark:to-purple-900 p-8 rounded-2xl text-center">
        <Crown size={48} className="mx-auto text-indigo-600 dark:text-indigo-400 mb-3" />
        <h2 className="text-3xl font-bold text-indigo-800 dark:text-indigo-200">Leadership Bonus Pool</h2>
        <p className="text-lg mt-2 text-indigo-700 dark:text-indigo-300">2% of company volume shared among top leaders</p>
      </div>

      <div className="space-y-4">
        {ranks.map((r) => (
          <div
            key={r.rank}
            className="flex items-center justify-between bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-3">
              <Medal size={28} className={r.color} />
              <div>
                <h3 className="font-bold text-lg">{r.rank} Leader</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Monthly qualification</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-green-600">{r.bonus}</p>
              <p className="text-xs text-gray-500">per month</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-amber-50 dark:bg-amber-900 p-6 rounded-xl text-center">
        <Star className="mx-auto text-amber-600 mb-2" size={28} />
        <p className="font-semibold">Only 4 spots per rank — first come, first paid!</p>
      </div>
    </div>
  );
}