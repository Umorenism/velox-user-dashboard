import React from "react";
import { Trophy, Clock, DollarSign } from "lucide-react";

export default function FastStart() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <Trophy className="text-yellow-500" size={32} />
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Fast Start Bonus</h1>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-900 p-6 rounded-xl mb-6">
        <p className="text-lg font-semibold text-orange-700 dark:text-orange-300">
          Earn up to $5,000 in your first 30 days!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
          <div className="flex items-center gap-2 mb-2">
            <Clock size={20} className="text-blue-600" />
            <h3 className="font-semibold">Time Frame</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">First 30 days from registration</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign size={20} className="text-green-600" />
            <h3 className="font-semibold">Reward</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">Up to $5,000 cash bonus</p>
        </div>
      </div>

      <div className="mt-8 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
        <h3 className="font-semibold mb-3">How to Qualify:</h3>
        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li>Enroll 5 active traders</li>
          <li>Achieve $50,000 in team volume</li>
          <li>Maintain personal volume of $10,000</li>
        </ul>
      </div>
    </div>
  );
}