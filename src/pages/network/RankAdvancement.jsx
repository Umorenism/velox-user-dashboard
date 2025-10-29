// src/pages/dashboard/network/RankAdvancement.jsx
import React from "react";
import { TrendingUp, Award, Gem, Star } from "lucide-react";

const ranks = [
  { rank: "Bronze", req: "1K PV", color: "text-orange-600", icon: <Award /> },
  { rank: "Silver", req: "5K PV + 2 legs", color: "text-gray-500", icon: <Star /> },
  { rank: "Gold", req: "20K PV + 3 legs", color: "text-yellow-600", icon: <Gem /> },
  { rank: "Platinum", req: "50K PV + 4 legs", color: "text-gray-400", icon: <Gem /> },
  { rank: "Diamond", req: "100K PV + 5 legs", color: "text-purple-600", icon: <Gem /> },
];

export default function RankAdvancement() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900 dark:to-teal-900 p-8 rounded-2xl text-center">
        <TrendingUp size={48} className="mx-auto text-emerald-600 dark:text-emerald-400 mb-3" />
        <h2 className="text-3xl font-bold text-emerald-800 dark:text-emerald-200">Rank Advancement</h2>
        <p className="text-lg mt-2 text-emerald-700 dark:text-emerald-300">Climb ranks. Unlock rewards.</p>
      </div>

      <div className="space-y-4">
        {ranks.map((r, i) => (
          <div
            key={r.rank}
            className={`flex items-center justify-between p-5 rounded-xl shadow-sm transition ${
              i === 0 ? "bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900 dark:to-yellow-900" :
              i === ranks.length - 1 ? "bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900" :
              "bg-white dark:bg-gray-800"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-full ${i === 0 ? "bg-orange-100" : i === ranks.length - 1 ? "bg-purple-100" : "bg-gray-100"} dark:bg-gray-700`}>
                {r.icon}
              </div>
              <div>
                <h3 className={`font-bold text-lg ${r.color}`}>{r.rank}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{r.req}</p>
              </div>
            </div>
            {i < ranks.length - 1 && (
              <TrendingUp className="text-gray-400" size={24} />
            )}
          </div>
        ))}
      </div>

      <div className="bg-amber-50 dark:bg-amber-900 p-6 rounded-xl text-center">
        <Award className="mx-auto text-amber-600 mb-2" size={28} />
        <p className="font-semibold">Ranks reset monthly — keep climbing!</p>
      </div>
    </div>
  );
}