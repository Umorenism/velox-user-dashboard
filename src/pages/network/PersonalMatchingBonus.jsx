// src/pages/dashboard/network/PersonalMatchingBonus.jsx
import React from "react";
import { Link, Percent, Users } from "lucide-react";

export default function PersonalMatchingBonus() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900 dark:to-cyan-900 p-8 rounded-2xl text-center">
        <Link size={48} className="mx-auto text-teal-600 dark:text-teal-400 mb-3" />
        <h2 className="text-3xl font-bold text-teal-800 dark:text-teal-200">Personal Matching Bonus</h2>
        <p className="text-lg mt-2 text-teal-700 dark:text-teal-300">Earn 50% of your personally enrolled downline earnings</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <h3 className="font-bold text-lg mb-4 text-center">How It Works</h3>
        <div className="space-y-4 text-sm">
          <div className="flex items-center justify-between p-3 bg-teal-50 dark:bg-teal-900 rounded">
            <span>You enroll <strong>John</strong></span>
            <span className="text-teal-600 font-bold">→</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-cyan-50 dark:bg-cyan-900 rounded">
            <span>John earns $1,000 this month</span>
            <span className="text-cyan-600 font-bold">→</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-emerald-50 dark:bg-emerald-900 rounded">
            <span className="font-bold text-emerald-600">You earn $500</span>
            <Percent size={20} className="text-emerald-600" />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900 dark:to-teal-900 p-5 rounded-xl">
          <Users className="text-emerald-600 mb-2" size={24} />
          <h4 className="font-bold">Unlimited Matches</h4>
          <p className="text-sm">Match all your direct enrollees</p>
        </div>
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900 dark:to-blue-900 p-5 rounded-xl">
          <Percent className="text-cyan-600 mb-2" size={24} />
          <h4 className="font-bold">50% Match</h4>
          <p className="text-sm">Paid weekly on their commissions</p>
        </div>
      </div>
    </div>
  );
}