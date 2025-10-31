







import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

export default function VeloxMatchingBonus() {
  // Mock data for the charts
  const barData = [
    { name: "Level 1", amount: 1200 },
    { name: "Level 2", amount: 900 },
    { name: "Level 3", amount: 400 },
  ];

  const pieData = [
    { name: "Earned", value: 60 },
    { name: "Pending", value: 30 },
    { name: "Withdrawn", value: 10 },
  ];

  const COLORS = ["#22c55e", "#facc15", "#3b82f6"];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-xl text-gray-800 font-semibold mb-6">Velox Matching Bonus </h1>

      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Left Card */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">
            Velox Personal Matching Bonus
          </h2>

          <div className="grid grid-cols-2 gap-4 text-sm mb-6">
            <div>
              <p className="text-gray-600">Eligibility:</p>
              <p className="text-green-600 font-medium">Eligible</p>
            </div>
            <div>
              <p className="text-gray-600">Amount Earned:</p>
              <p className="text-gray-800 font-medium">$2,480</p>
            </div>
            <div>
              <p className="text-gray-600">Pending Bonus:</p>
              <p className="text-orange-500 font-medium">$780</p>
            </div>
            <div>
              <p className="text-gray-600">Total Withdrawn:</p>
              <p className="text-blue-600 font-medium">$520</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-md">
              Withdraw Earnings
            </button>
            <button className="border border-gray-300 hover:bg-gray-100 text-sm font-medium px-4 py-2 rounded-md">
              View History
            </button>
          </div>
        </div>

        {/* Right Card - Bar Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">
            Bonus Distribution Overview
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="text-center text-xs text-gray-500 mt-2">amount</div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h2 className="text-lg font-semibold mb-4">Earnings Breakdown</h2>

        <div className="flex justify-center">
          <ResponsiveContainer width="60%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend verticalAlign="bottom" height={36} />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
