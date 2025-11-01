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



// import React from "react";
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

// const FastStart = () => {
//   const barData = [
//     { week: "Week 1", earnings: 1200 },
//     { week: "Week 2", earnings: 3800 },
//     { week: "Week 3", earnings: 1600 },
//   ];

//   const pieData = [
//     { name: "1 - 3", value: 50 },
//     { name: "Pending", value: 30 },
//     { name: "Paid", value: 20 },
//   ];

//   const COLORS = ["#FACC15", "#E5E7EB", "#1E3A8A"];

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       {/* Overview Cards */}
//       <h2 className="text-lg font-semibold text-gray-800 mb-4">Overview</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//         {[
//           { title: "Total Referrals", value: "48" },
//           { title: "Active Referrals", value: "36" },
//           { title: "Total Earned", value: "$42,600" },
//           { title: "Pending / Withdrawn", value: "$2,000 / $40,600" },
//         ].map((card, idx) => (
//           <div
//             key={idx}
//             className="bg-white border border-yellow-200 rounded-xl shadow-sm p-5 text-center"
//           >
//             <p className="text-sm text-gray-500">{card.title}</p>
//             <h3 className="text-2xl font-bold text-gray-900 mt-2">{card.value}</h3>
//           </div>
//         ))}
//       </div>

//       {/* Fast Start Bonus Section */}
//       <h2 className="text-lg font-semibold text-gray-800 mb-3">
//         Fast Start Bonus Calculation
//       </h2>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Left Section */}
//         <div>
//           <p className="text-sm text-gray-600 mb-4 leading-relaxed">
//             Each Velox Capital package is divided into 30% Academy and 70% Trade
//             Pool. The Fast Start Bonus equals 50% of the Academy portion.
//           </p>

//           {/* First Table */}
//           <div className="overflow-x-auto h-auto border border-gray-200 rounded-lg mb-5">
//             <table className="w-full text-sm text-left text-gray-600">
//               <thead className="bg-gray-100 text-gray-700 font-semibold">
//                 <tr>
//                   <th className="px-4 py-3">Package</th>
//                   <th className="px-4 py-3">Academy (30%)</th>
//                   <th className="px-4 py-3">Trade Pool (70%)</th>
//                   <th className="px-4 py-3">Bonus (50%)</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="border-t">
//                   <td className="px-4 py-3">$2,000</td>
//                   <td className="px-4 py-3">$600</td>
//                   <td className="px-4 py-3">$1,400</td>
//                   <td className="px-4 py-3">$300</td>
//                 </tr>
//                 <tr className="border-t">
//                   <td className="px-4 py-3">$10,000</td>
//                   <td className="px-4 py-3">$3,000</td>
//                   <td className="px-4 py-3">$7,000</td>
//                   <td className="px-4 py-3">$1,500</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>

         
//         </div>

//         {/* Right Section (Charts) */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
//           {/* Bar Chart */}
//           <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
//             <h3 className="text-sm font-semibold text-gray-800 mb-3">
//               Weekly Fast Start Earnings
//             </h3>
//             <div className="w-full h-52">
//               <ResponsiveContainer>
//                 <BarChart data={barData}>
//                   <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                   <XAxis dataKey="week" tick={{ fontSize: 12 }} />
//                   <YAxis tick={{ fontSize: 12 }} />
//                   <Tooltip />
//                   <Bar dataKey="earnings" fill="#1E3A8A" radius={[4, 4, 0, 0]} />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Pie Chart */}
//           <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
//             <h3 className="text-sm font-semibold text-gray-800 mb-3">
//               Bonus Distribution by Package
//             </h3>
//             <div className="w-full h-52">
//               <ResponsiveContainer>
//                 <PieChart>
//                   <Pie
//                     data={pieData}
//                     cx="50%"
//                     cy="50%"
//                     innerRadius={40}
//                     outerRadius={60}
//                     dataKey="value"
//                   >
//                     {pieData.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                     ))}
//                   </Pie>
//                   <Tooltip />
//                   <Legend verticalAlign="bottom" height={36} />
//                 </PieChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FastStart;






// import React, { useEffect, useState } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
//   Legend,
// } from "recharts";
// import {  getUserPackages } from "../../api/userPackageApi";
// import { getUserProfile } from "../../api/authApi";

// const FastStart = () => {
//   const [profile, setProfile] = useState(null);
//   const [packages, setPackages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("authToken") || "";

//     Promise.all([getUserProfile(token), getUserPackages(token)])
//       .then(([profileData, packagesData]) => {
//         setProfile(profileData);
//         setPackages(packagesData);
//         setLoading(false);
       
        
//       })
      
//       .catch((err) => {
//         setError("Failed to load data.");
//         setLoading(false);
//       });
//   }, []);

//   // ———————————————————————
//   // 1. TABLE: Real packages (from /api/users/packages)
//   // ———————————————————————
//   const paidPackages = packages.filter((pkg) => !pkg.isFree);
//   const packageRows = paidPackages.map((pkg) => {
//     const price = pkg.price;
//     const academy = Math.round(price * 0.3);
//     const tradePool = Math.round(price * 0.7);
//     const bonus = Math.round(academy * 0.5);
//     return { id: pkg.id, name: pkg.name, academy, tradePool, bonus };
//   });

//   // ———————————————————————
//   // 2. BAR CHART: Real earnings from fastStartPerformance
//   // ———————————————————————
//   const fastStart = profile?.fastStartPerformance || {};
//   const barData = [
//     { name: "Academy (30%)", value: fastStart.academy30 || 0 },
//     { name: "Trade Pool (70%)", value: fastStart.tradePool70 || 0 },
//     { name: "Fast Start Bonus", value: fastStart.bonus50PerPackage || 0 },
//   ];

//   // ———————————————————————
//   // 3. PIE CHART: Real distribution of the 3 components
//   // ———————————————————————
//   const total = (fastStart.academy30 || 0) + (fastStart.tradePool70 || 0) + (fastStart.bonus50PerPackage || 0);
//   const pieData = [
//     { name: "Academy", value: fastStart.academy30 || 0 },
//     { name: "Trade Pool", value: fastStart.tradePool70 || 0 },
//     { name: "Bonus", value: fastStart.bonus50PerPackage || 0 },
//   ].filter((item) => item.value > 0);

//   const COLORS = ["#FACC15", "#1E3A8A", "#10B981"]; // Yellow, Navy, Green

//   // ———————————————————————
//   // 4. Overview totals
//   // ———————————————————————
//   const totalEarned = fastStart.bonus50PerPackage || 0;

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-yellow-500"></div>
//         <span className="ml-3 text-lg text-gray-700">Loading...</span>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center text-red-600">
//         {error}
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       {/* ==================== Overview Cards ==================== */}
//       <h2 className="text-lg font-semibold text-gray-800 mb-4">Overview</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//         {[
//           { title: "Total Referrals", value: profile?.totalReferral || 0 },
//           { title: "Active Referrals", value: profile?.totalDownline || 0 },
//           { title: "Total Earned", value: `$${totalEarned.toLocaleString()}` },
//           { title: "Pending / Withdrawn", value: "$0 / $0" },
//         ].map((card, idx) => (
//           <div
//             key={idx}
//             className="bg-white border border-yellow-200 rounded-xl shadow-sm p-5 text-center"
//           >
//             <p className="text-sm text-gray-500">{card.title}</p>
//             <h3 className="text-2xl font-bold text-gray-900 mt-2">{card.value}</h3>
//           </div>
//         ))}
//       </div>

//       {/* ==================== Fast Start Bonus Section ==================== */}
//       <h2 className="text-lg font-semibold text-gray-800 mb-3">
//         Fast Start Bonus Calculation
//       </h2>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* ——————— Left: Real Package Table ——————— */}
//         <div>
//           <p className="text-sm text-gray-600 mb-4 leading-relaxed">
//             Each Velox Capital package is divided into 30% Academy and 70% Trade
//             Pool. The Fast Start Bonus equals 50% of the Academy portion.
//           </p>

//           <div className="overflow-x-auto border border-gray-200 rounded-lg mb-5">
//             <table className="w-full text-sm text-left text-gray-600">
//               <thead className="bg-gray-100 text-gray-700 font-semibold">
//                 <tr>
//                   <th className="px-4 py-3">Package</th>
//                   <th className="px-4 py-3">Academy (30%)</th>
//                   <th className="px-4 py-3">Trade Pool (70%)</th>
//                   <th className="px-4 py-3">Bonus (50%)</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {packageRows.length > 0 ? (
//                   packageRows.map((pkg) => (
//                     <tr key={pkg.id} className="border-t hover:bg-yellow-50">
//                       <td className="px-4 py-3 font-medium">{pkg.name}</td>
//                       <td className="px-4 py-3">${pkg.academy.toLocaleString()}</td>
//                       <td className="px-4 py-3">${pkg.tradePool.toLocaleString()}</td>
//                       <td className="px-4 py-3">${pkg.bonus.toLocaleString()}</td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="4" className="px-4 py-3 text-center text-gray-500">
//                       No paid packages.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* ——————— Right: Real Charts ——————— */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
//           {/* Bar Chart – Real breakdown */}
//           <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
//             <h3 className="text-sm font-semibold text-gray-800 mb-3">
//               Fast Start Breakdown
//             </h3>
//             <div className="w-full h-52">
//               <ResponsiveContainer>
//                 <BarChart data={barData}>
//                   <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                   <XAxis dataKey="name" tick={{ fontSize: 11 }} angle={-15} textAnchor="end" />
//                   <YAxis tick={{ fontSize: 12 }} />
//                   <Tooltip formatter={(v) => `$${v.toLocaleString()}`} />
//                   <Bar dataKey="value" fill="#1E3A8A" radius={[4, 4, 0, 0]} />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Pie Chart – Real distribution */}
//           <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
//             <h3 className="text-sm font-semibold text-gray-800 mb-3">
//               Earnings Distribution
//             </h3>
//             <div className="w-full h-52">
//               <ResponsiveContainer>
//                 <PieChart>
//                   <Pie
//                     data={pieData}
//                     cx="50%"
//                     cy="50%"
//                     innerRadius={40}
//                     outerRadius={60}
//                     dataKey="value"
//                     label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
//                   >
//                     {pieData.map((_, index) => (
//                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                     ))}
//                   </Pie>
//                   <Tooltip formatter={(v) => `$${v.toLocaleString()}`} />
//                   <Legend verticalAlign="bottom" height={36} />
//                 </PieChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FastStart;






import React, { useEffect, useState, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import {  getUserPackages } from "../../api/userPackageApi";
import { getUserProfile } from "../../api/authApi";
import { Package, AlertCircle, TrendingUp } from "lucide-react";

const FastStart = React.memo(() => {
  const [profile, setProfile] = useState(null);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken") || "";
    Promise.all([getUserProfile(token), getUserPackages(token)])
      .then(([p, pkgs]) => {
        setProfile(p);
        setPackages(pkgs);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load data.");
        setLoading(false);
      });
  }, []);

  // ——————————————————— DATA CALC ———————————————————
  const paidPackages = useMemo(
    () =>
      packages
        .filter((pkg) => !pkg.isFree)
        .map((pkg) => {
          const academy = Math.round(pkg.price * 0.3);
          const tradePool = Math.round(pkg.price * 0.7);
          const bonus = Math.round(academy * 0.5);
          return { id: pkg.id, name: pkg.name, academy, tradePool, bonus };
        }),
    [packages]
  );

  const fastStart = profile?.fastStartPerformance || {};
  const totalEarned = fastStart.bonus50PerPackage || 0;

  const barData = useMemo(
    () => [
      { name: "Academy (30%)", value: fastStart.academy30 || 0 },
      { name: "Trade Pool (70%)", value: fastStart.tradePool70 || 0 },
      { name: "Fast Start Bonus", value: fastStart.bonus50PerPackage || 0 },
    ],
    [fastStart]
  );

  const pieData = useMemo(() => {
    const total =
      (fastStart.academy30 || 0) +
      (fastStart.tradePool70 || 0) +
      (fastStart.bonus50PerPackage || 0);
    return total > 0
      ? [
          { name: "Academy", value: fastStart.academy30 || 0 },
          { name: "Trade Pool", value: fastStart.tradePool70 || 0 },
          { name: "Bonus", value: fastStart.bonus50PerPackage || 0 },
        ]
      : [];
  }, [fastStart]);

  const COLORS = ["#FACC15", "#1E3A8A", "#10B981"];

  // ——————————————————— RENDER ———————————————————
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-yellow-500"></div>
        <span className="ml-3 text-lg text-gray-700">Loading your dashboard...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 max-w-md text-center">
          <AlertCircle className="h-10 w-10 text-red-600 mx-auto mb-3" />
          <p className="text-red-800 font-medium">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6">
      {/* ==================== Overview Cards ==================== */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-5 flex items-center">
          <TrendingUp className="mr-2 h-6 w-6 text-yellow-600" />
          Fast Start Overview
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { title: "Total Referrals", value: profile?.totalReferral || 0, icon: "users" },
            { title: "Active Downline", value: profile?.totalDownline || 0, icon: "network" },
            { title: "Total Earned", value: `$${totalEarned.toLocaleString()}`, icon: "dollar" },
            { title: "Pending / Withdrawn", value: "$0 / $0", icon: "clock" },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-sm border border-yellow-200 rounded-xl shadow-md p-5 text-center transform transition hover:scale-105"
            >
              <p className="text-sm text-gray-500 flex items-center justify-center">
                <Package className="h-4 w-4 mr-1 text-yellow-600" />
                {card.title}
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">{card.value}</h3>
            </div>
          ))}
        </div>

        {/* ==================== Fast Start Bonus Section ==================== */}
        <h2 className="text-xl font-bold text-gray-800 mb-5">Fast Start Bonus Calculation</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* ——————— Left: Package Table ——————— */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-5">
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Each Velox Capital package is split: <strong>30% Academy</strong> + <strong>70% Trade Pool</strong>.  
              You earn <strong>50% of Academy</strong> as Fast Start Bonus.
            </p>

            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm text-left text-gray-700">
                <thead className="bg-gradient-to-r from-yellow-50 to-yellow-100 text-gray-800 font-semibold sticky top-0 z-10">
                  <tr>
                    <th className="px-4 py-3">Package</th>
                    <th className="px-4 py-3">Academy (30%)</th>
                    <th className="px-4 py-3">Trade Pool (70%)</th>
                    <th className="px-4 py-3">Bonus (50%)</th>
                  </tr>
                </thead>
                <tbody>
                  {paidPackages.length > 0 ? (
                    paidPackages.map((pkg) => (
                      <tr
                        key={pkg.id}
                        className="border-t hover:bg-yellow-50 transition"
                        role="row"
                      >
                        <td className="px-4 py-3 font-medium">{pkg.name}</td>
                        <td className="px-4 py-3">${pkg.academy.toLocaleString()}</td>
                        <td className="px-4 py-3">${pkg.tradePool.toLocaleString()}</td>
                        <td className="px-4 py-3 font-semibold text-green-600">
                          ${pkg.bonus.toLocaleString()}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="px-4 py-4 text-center text-gray-500">
                        <Package className="h-8 w-8 mx-auto mb-2 text-gray-300" />
                        <p>No paid packages yet.</p>
                        <button className="mt-2 text-yellow-600 underline text-sm">
                          Explore Packages →
                        </button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* ——————— Right: Charts ——————— */}
          <div className="grid grid-cols-1 gap-6">
            {/* Bar Chart */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-5">
              <h3 className="text-sm font-semibold text-gray-800 mb-3">
                Earnings Breakdown
              </h3>
              {barData.every((d) => d.value === 0) ? (
                <div className="h-52 flex items-center justify-center text-gray-400">
                  <p>No earnings data</p>
                </div>
              ) : (
                <ResponsiveContainer width="100%" height={208}>
                  <BarChart data={barData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                      dataKey="name"
                      tick={{ fontSize: 11 }}
                      angle={-20}
                      textAnchor="end"
                      height={60}
                    />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip formatter={(v) => `$${v.toLocaleString()}`} />
                    <Bar dataKey="value" fill="#1E3A8A" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>

            {/* Pie Chart */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-5">
              <h3 className="text-sm font-semibold text-gray-800 mb-3">
                Distribution
              </h3>
              {pieData.length === 0 ? (
                <div className="h-52 flex items-center justify-center text-gray-400">
                  <p>No data</p>
                </div>
              ) : (
                <ResponsiveContainer width="100%" height={208}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={38}
                      outerRadius={68}
                      dataKey="value"
                      label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                    >
                      {pieData.map((_, i) => (
                        <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(v) => `$${v.toLocaleString()}`} />
                    <Legend verticalAlign="bottom" height={36} />
                  </PieChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <button className="inline-flex items-center px-6 py-3 bg-yellow-500 text-white font-medium rounded-lg shadow-lg hover:bg-yellow-600 transition transform hover:scale-105">
            <Package className="mr-2 h-5 w-5" />
            Upgrade Your Package
          </button>
        </div>
      </div>
    </div>
  );
});

export default FastStart;