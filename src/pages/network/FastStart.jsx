// import React from "react";
// import { Trophy, Clock, DollarSign } from "lucide-react";

// export default function FastStart() {
//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <div className="flex items-center gap-3 mb-6">
//         <Trophy className="text-yellow-500" size={32} />
//         <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Fast Start Bonus</h1>
//       </div>

//       <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-900 p-6 rounded-xl mb-6">
//         <p className="text-lg font-semibold text-orange-700 dark:text-orange-300">
//           Earn up to $5,000 in your first 30 days!
//         </p>
//       </div>

//       <div className="grid md:grid-cols-2 gap-6">
//         <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
//           <div className="flex items-center gap-2 mb-2">
//             <Clock size={20} className="text-blue-600" />
//             <h3 className="font-semibold">Time Frame</h3>
//           </div>
//           <p className="text-sm text-gray-600 dark:text-gray-300">First 30 days from registration</p>
//         </div>

//         <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
//           <div className="flex items-center gap-2 mb-2">
//             <DollarSign size={20} className="text-green-600" />
//             <h3 className="font-semibold">Reward</h3>
//           </div>
//           <p className="text-sm text-gray-600 dark:text-gray-300">Up to $5,000 cash bonus</p>
//         </div>
//       </div>

//       <div className="mt-8 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
//         <h3 className="font-semibold mb-3">How to Qualify:</h3>
//         <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
//           <li>Enroll 5 active traders</li>
//           <li>Achieve $50,000 in team volume</li>
//           <li>Maintain personal volume of $10,000</li>
//         </ul>
//       </div>
//     </div>
//   );
// }



import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const FastStart = () => {
  const barData = [
    { week: "Week 1", earnings: 1200 },
    { week: "Week 2", earnings: 3800 },
    { week: "Week 3", earnings: 1600 },
  ];

  const pieData = [
    { name: "1 - 3", value: 50 },
    { name: "Pending", value: 30 },
    { name: "Paid", value: 20 },
  ];

  const COLORS = ["#FACC15", "#E5E7EB", "#1E3A8A"];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Overview Cards */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { title: "Total Referrals", value: "48" },
          { title: "Active Referrals", value: "36" },
          { title: "Total Earned", value: "$42,600" },
          { title: "Pending / Withdrawn", value: "$2,000 / $40,600" },
        ].map((card, idx) => (
          <div
            key={idx}
            className="bg-white border border-yellow-200 rounded-xl shadow-sm p-5 text-center"
          >
            <p className="text-sm text-gray-500">{card.title}</p>
            <h3 className="text-2xl font-bold text-gray-900 mt-2">{card.value}</h3>
          </div>
        ))}
      </div>

      {/* Fast Start Bonus Section */}
      <h2 className="text-lg font-semibold text-gray-800 mb-3">
        Fast Start Bonus Calculation
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Section */}
        <div>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Each Velox Capital package is divided into 30% Academy and 70% Trade
            Pool. The Fast Start Bonus equals 50% of the Academy portion.
          </p>

          {/* First Table */}
          <div className="overflow-x-auto h-auto border border-gray-200 rounded-lg mb-5">
            <table className="w-full text-sm text-left text-gray-600">
              <thead className="bg-gray-100 text-gray-700 font-semibold">
                <tr>
                  <th className="px-4 py-3">Package</th>
                  <th className="px-4 py-3">Academy (30%)</th>
                  <th className="px-4 py-3">Trade Pool (70%)</th>
                  <th className="px-4 py-3">Bonus (50%)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-3">$2,000</td>
                  <td className="px-4 py-3">$600</td>
                  <td className="px-4 py-3">$1,400</td>
                  <td className="px-4 py-3">$300</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">$10,000</td>
                  <td className="px-4 py-3">$3,000</td>
                  <td className="px-4 py-3">$7,000</td>
                  <td className="px-4 py-3">$1,500</td>
                </tr>
              </tbody>
            </table>
          </div>

         
        </div>

        {/* Right Section (Charts) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          {/* Bar Chart */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
            <h3 className="text-sm font-semibold text-gray-800 mb-3">
              Weekly Fast Start Earnings
            </h3>
            <div className="w-full h-52">
              <ResponsiveContainer>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="week" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="earnings" fill="#1E3A8A" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
            <h3 className="text-sm font-semibold text-gray-800 mb-3">
              Bonus Distribution by Package
            </h3>
            <div className="w-full h-52">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={60}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastStart;
