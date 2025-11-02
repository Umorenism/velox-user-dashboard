
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function PersonalMatchingBonus() {
  const bonusData = [
    { level: "Level 1", amount: 1200 },
    { level: "Level 2", amount: 900 },
    { level: "Level 3", amount: 500 },
  ];

  const breakdownData = [
    { name: "Earned", value: 60 },
    { name: "Pending", value: 30 },
    { name: "Withdrawn", value: 10 },
  ];

  const COLORS = ["#22c55e", "#facc15", "#3b82f6"]; // green, yellow, blue

  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-6">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Card */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Velox Personal Matching Bonus
            </h2>

            <div className="grid grid-cols-2 gap-y-3 text-sm">
              <div>
                <p className="text-gray-500">Eligibility:</p>
                <p className="text-green-600 font-medium">Eligible</p>
              </div>
              <div>
                <p className="text-gray-500">Amount Earned:</p>
                <p className="text-gray-800 font-medium">$2,480</p>
              </div>

              <div>
                <p className="text-gray-500">Pending Bonus:</p>
                <p className="text-orange-500 font-medium">$780</p>
              </div>
              <div>
                <p className="text-gray-500">Total Withdrawn:</p>
                <p className="text-blue-500 font-medium">$520</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
              Withdraw Earnings
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition">
              View History
            </button>
          </div>
        </div>

        {/* Right Card - Bonus Distribution */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Bonus Distribution Overview
          </h3>
          <BarChart
            width={450}
            height={250}
            data={bonusData}
            className="mx-auto"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="level" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" fill="#3b82f6" barSize={50} radius={[6, 6, 0, 0]} />
          </BarChart>
        </div>
      </div>

      {/* Bottom Section - Earnings Breakdown */}
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Earnings Breakdown
        </h3>
        <div className="flex justify-center">
          <PieChart width={400} height={300}>
            <Pie
              data={breakdownData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {breakdownData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
}
