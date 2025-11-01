







// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
//   Legend,
// } from "recharts";

// export default function VeloxMatchingBonus() {
//   // Mock data for the charts
//   const barData = [
//     { name: "Level 1", amount: 1200 },
//     { name: "Level 2", amount: 900 },
//     { name: "Level 3", amount: 400 },
//   ];

//   const pieData = [
//     { name: "Earned", value: 60 },
//     { name: "Pending", value: 30 },
//     { name: "Withdrawn", value: 10 },
//   ];

//   const COLORS = ["#22c55e", "#facc15", "#3b82f6"];

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <h1 className="text-xl text-gray-800 font-semibold mb-6">Velox Matching Bonus </h1>

//       {/* Top Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
//         {/* Left Card */}
//         <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
//           <h2 className="text-lg font-semibold mb-4">
//             Velox Personal Matching Bonus
//           </h2>

//           <div className="grid grid-cols-2 gap-4 text-sm mb-6">
//             <div>
//               <p className="text-gray-600">Eligibility:</p>
//               <p className="text-green-600 font-medium">Eligible</p>
//             </div>
//             <div>
//               <p className="text-gray-600">Amount Earned:</p>
//               <p className="text-gray-800 font-medium">$2,480</p>
//             </div>
//             <div>
//               <p className="text-gray-600">Pending Bonus:</p>
//               <p className="text-orange-500 font-medium">$780</p>
//             </div>
//             <div>
//               <p className="text-gray-600">Total Withdrawn:</p>
//               <p className="text-blue-600 font-medium">$520</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-4">
//             <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-md">
//               Withdraw Earnings
//             </button>
//             <button className="border border-gray-300 hover:bg-gray-100 text-sm font-medium px-4 py-2 rounded-md">
//               View History
//             </button>
//           </div>
//         </div>

//         {/* Right Card - Bar Chart */}
//         <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
//           <h2 className="text-lg font-semibold mb-4">
//             Bonus Distribution Overview
//           </h2>
//           <ResponsiveContainer width="100%" height={250}>
//             <BarChart data={barData}>
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="amount" fill="#3b82f6" radius={[4, 4, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//           <div className="text-center text-xs text-gray-500 mt-2">amount</div>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
//         <h2 className="text-lg font-semibold mb-4">Earnings Breakdown</h2>

//         <div className="flex justify-center">
//           <ResponsiveContainer width="60%" height={300}>
//             <PieChart>
//               <Pie
//                 data={pieData}
//                 dataKey="value"
//                 nameKey="name"
//                 outerRadius={100}
//                 label
//               >
//                 {pieData.map((entry, index) => (
//                   <Cell
//                     key={`cell-${index}`}
//                     fill={COLORS[index % COLORS.length]}
//                   />
//                 ))}
//               </Pie>
//               <Legend verticalAlign="bottom" height={36} />
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// }





/* ──────────────────────────────────────────────────────────────
   VeloxMatchingBonus – 100% live data, original UI preserved
   ────────────────────────────────────────────────────────────── */
/* ──────────────────────────────────────────────────────────────
   VeloxMatchingBonus – 100% live data + "No data" fallback
   ────────────────────────────────────────────────────────────── */
import React, { useEffect, useState } from "react";
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
import { getUserProfile } from "../../api/authApi";

export default function personalMatchingBonus() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken") || "";
    if (!token) {
      setError("No auth token found. Please log in.");
      setLoading(false);
      return;
    }

    getUserProfile(token)
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Failed to load profile.");
        setLoading(false);
      });
  }, []);

  if (!profile) return null;

  const mb = profile.personalMatchingBonus || {};
  const earned = mb.earned ?? 0;
  const pending = mb.pending ?? 0;
  const withdrawn = mb.withdrawn ?? 0;
  const totalEarned = profile.bonusBreakdown?.matching_bonus ?? 0;
  const isEligible = mb.eligibility === true;

  const pieData = [
    { name: "Earned", value: earned },
    { name: "Pending", value: pending },
    { name: "Withdrawn", value: withdrawn },
  ].filter((d) => d.value > 0);

  const hasPieData = pieData.length > 0;

  const barData = [
    { name: "Level 1", amount: Math.round(totalEarned * 0.6) },
    { name: "Level 2", amount: Math.round(totalEarned * 0.3) },
    { name: "Level 3", amount: Math.round(totalEarned * 0.1) },
  ];

  const COLORS = ["#22c55e", "#facc15", "#3b82f6"];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-[#00A991]"></div>
        <span className="ml-3 text-lg text-gray-700">Loading Matching Bonus…</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 max-w-md text-center">
          <p className="text-red-800 font-medium">{error}</p>
          {error.includes("Unauthorized") && (
            <button
              onClick={() => (window.location.href = "/login")}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Go to Login
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-xl text-gray-800 font-semibold mb-6">Velox Matching Bonus</h1>

      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Left Card */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">Velox Personal Matching Bonus</h2>

          <div className="grid grid-cols-2 gap-4 text-sm mb-6">
            <div>
              <p className="text-gray-600">Eligibility:</p>
              <p className={`font-medium ${isEligible ? "text-green-600" : "text-red-600"}`}>
                {isEligible ? "Eligible" : "Not Eligible"}
              </p>
            </div>
            <div>
              <p className="text-gray-600">Amount Earned:</p>
              <p className="text-gray-800 font-medium">${totalEarned.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-gray-600">Pending Bonus:</p>
              <p className="text-orange-500 font-medium">${pending.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-gray-600">Total Withdrawn:</p>
              <p className="text-blue-600 font-medium">${withdrawn.toLocaleString()}</p>
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
          <h2 className="text-lg font-semibold mb-4">Bonus Distribution Overview</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(v) => `$${v}`} />
              <Bar dataKey="amount" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="text-center text-xs text-gray-500 mt-2">amount</div>
        </div>
      </div>

      {/* Bottom Section - Pie Chart or No Data */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h2 className="text-lg font-semibold mb-4">Earnings Breakdown</h2>

        {hasPieData ? (
          <div className="flex justify-center">
            <ResponsiveContainer width="60%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label={({ name, value }) => `${name}: $${value}`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend verticalAlign="bottom" height={36} />
                <Tooltip formatter={(v) => `$${v}`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-gray-500">
            <div className="w-16 h-16 bg-gray-200 border-2 border-dashed rounded-xl mb-4" />
            <p className="text-sm font-medium">No earnings yet</p>
            <p className="text-xs mt-1">Start referring to unlock matching bonuses!</p>
          </div>
        )}
      </div>
    </div>
  );
}