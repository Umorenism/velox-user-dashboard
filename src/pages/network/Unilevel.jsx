// import React, { useEffect, useState } from "react";
// import { getUserProfile } from "../../api/authApi"; // adjust path if needed
// import { Loader2 } from "lucide-react";
// import { useUser } from "../../routes/UserContext";

// const Unilevel = () => {
//   const { token } = useUser();
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const data = await getUserProfile(token);
//         console.log("Unilevel data:", data);
//         setUserData(data);
//       } catch (err) {
//         console.error("Error fetching user data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (token) fetchProfile();
//   }, [token]);

//   if (loading)
//     return (
//       <div className="flex items-center justify-center h-96">
//         <Loader2 className="w-6 h-6 animate-spin text-[#00A991]" />
//         <span className="ml-2 text-gray-500">Loading Unilevel data...</span>
//       </div>
//     );

//   if (!userData)
//     return (
//       <div className="text-center text-gray-500 mt-10">
//         No user data available
//       </div>
//     );

//   // Simple Tailwind card wrapper
//   const Card = ({ title, children }) => (
//     <div className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-2xl shadow-sm p-5">
//       {title && <h3 className="font-semibold text-[#00A991] mb-3">{title}</h3>}
//       {children}
//     </div>
//   );

//   return (
//     <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 p-4">
//       {/* ==== LEFT COLUMN ==== */}
//       <div className="space-y-6">
//         <Card title="Total Unilevel Bonus">
//           <div className="text-3xl font-bold">
//             ${userData?.unilevelBonus || "0"}
//           </div>

//           <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
//             <div>
//               <p className="text-gray-500">Active Logs</p>
//               <p className="font-semibold">{userData?.activeLogs || "0"}</p>
//             </div>
//             <div>
//               <p className="text-gray-500">Total Downlines</p>
//               <p className="font-semibold">{userData?.downlinesCount || "0"}</p>
//             </div>
//             <div>
//               <p className="text-gray-500">Domasure</p>
//               <p className="font-semibold">{userData?.domasure || "0"}%</p>
//             </div>
//             <div>
//               <p className="text-gray-500">Average ODA</p>
//               <p className="font-semibold">{userData?.averageOda || "0.00"}</p>
//             </div>
//           </div>
//         </Card>

//         <Card title="Bonus by Level">
//           <div className="h-48 flex items-center justify-center text-gray-400">
//             [Chart Placeholder]
//           </div>
//         </Card>

//         <Card title="Weekly ROI">
//           <div className="h-48 flex items-center justify-center text-gray-400">
//             [Line Chart Placeholder]
//           </div>
//         </Card>
//       </div>

//       {/* ==== MIDDLE COLUMN ==== */}
//       <div className="space-y-6">
//         <Card title="Network Structure">
//           <div className="h-[400px] flex items-center justify-center text-gray-400">
//             [Tree Diagram Placeholder]
//           </div>
//         </Card>

//         <Card title="Bonus Berums">
//           <div className="h-40 flex items-center justify-center text-gray-400">
//             [Performance Chart Placeholder]
//           </div>
//         </Card>
//       </div>

//       {/* ==== RIGHT COLUMN ==== */}
//       <div className="space-y-6">
//         <Card title="Bonus Breakdown">
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm border border-gray-100 dark:border-neutral-800">
//               <thead className="bg-gray-50 dark:bg-neutral-800 text-gray-600 dark:text-gray-300">
//                 <tr>
//                   <th className="p-2 text-left">Level</th>
//                   <th className="p-2 text-left">Members</th>
//                   <th className="p-2 text-left">Group Volume</th>
//                   <th className="p-2 text-left">Revenue</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {userData?.bonusLevels?.length > 0 ? (
//                   userData.bonusLevels.map((lvl, i) => (
//                     <tr key={i} className="border-t border-gray-100 dark:border-neutral-800">
//                       <td className="p-2">{lvl.level}</td>
//                       <td className="p-2">{lvl.members}</td>
//                       <td className="p-2">${lvl.volume}</td>
//                       <td className="p-2">{lvl.revenue}%</td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="4" className="p-2 text-center text-gray-400">
//                       No data
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </Card>

//         <Card title="Bonus History">
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm border border-gray-100 dark:border-neutral-800">
//               <thead className="bg-gray-50 dark:bg-neutral-800 text-gray-600 dark:text-gray-300">
//                 <tr>
//                   <th className="p-2 text-left">Date</th>
//                   <th className="p-2 text-left">User</th>
//                   <th className="p-2 text-left">Level</th>
//                   <th className="p-2 text-left">Volume</th>
//                   <th className="p-2 text-left">Bonus</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {userData?.bonusHistory?.length > 0 ? (
//                   userData.bonusHistory.map((h, i) => (
//                     <tr key={i} className="border-t border-gray-100 dark:border-neutral-800">
//                       <td className="p-2">{h.date}</td>
//                       <td className="p-2">{h.user}</td>
//                       <td className="p-2">{h.level}</td>
//                       <td className="p-2">${h.volume}</td>
//                       <td className="p-2">${h.bonus}</td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="5" className="p-2 text-center text-gray-400">
//                       No data
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Unilevel;










// import React, { useState } from "react";
// import { ResponsiveContainer, LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
// import Tree from "react-d3-tree";

// // Dummy static data for the entire page
// const dummyData = {
//   name: "John Doe",
//   rank: "Executive",
//   pvp: 500,
//   pgv: 75000,
//   globalBonus: 1,
//   income: 87.5,
//   wallets: {
//     deposit: 150,
//     bull: 420,
//     bear: 180,
//     referral: 75,
//     earnings: 600,
//     bonus: 50,
//     accountBalance: 1475,
//   },
//   downline: [
//     {
//       name: "Alice Smith",
//       children: [
//         {
//           name: "Bob Johnson",
//           children: [{ name: "Samuel" }, { name: "Chris" }],
//         },
//         {
//           name: "Charlie Doe",
//           children: [{ name: "Zara" }, { name: "Mike" }],
//         },
//       ],
//     },
//   ],
//   bonusLevels: [
//     { level: 1, members: 3, volume: 2500, revenue: 5 },
//     { level: 2, members: 6, volume: 4800, revenue: 8 },
//     { level: 3, members: 9, volume: 6900, revenue: 12 },
//     { level: 4, members: 15, volume: 12000, revenue: 15 },
//   ],
//   bonusHistory: [
//     { date: "2025-10-25", user: "Alice Smith", level: 1, volume: 150, bonus: 15 },
//     { date: "2025-10-26", user: "Bob Johnson", level: 2, volume: 250, bonus: 25 },
//     { date: "2025-10-27", user: "Charlie Doe", level: 3, volume: 350, bonus: 35 },
//     { date: "2025-10-28", user: "Samuel", level: 4, volume: 450, bonus: 45 },
//   ],
// };

// const Card = ({ title, children }) => (
//   <div className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-2xl shadow-sm p-5">
//     {title && <h3 className="font-semibold text-[#00A991] mb-3">{title}</h3>}
//     {children}
//   </div>
// );

// const Unilevel = () => {
//   const [userData] = useState(dummyData);

//   return (
//     <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 p-4">
//       {/* ==== LEFT COLUMN ==== */}
//       <div className="space-y-6">
//         <Card title="Total Unilevel Bonus">
//           <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">
//             ${userData.income.toFixed(2)}
//           </div>

//           <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
//             <div>
//               <p className="text-gray-500">Rank</p>
//               <p className="font-semibold capitalize">{userData.rank}</p>
//             </div>
//             <div>
//               <p className="text-gray-500">PVP</p>
//               <p className="font-semibold">{userData.pvp}</p>
//             </div>
//             <div>
//               <p className="text-gray-500">PGV</p>
//               <p className="font-semibold">{userData.pgv}</p>
//             </div>
//             <div>
//               <p className="text-gray-500">Global Bonus</p>
//               <p className="font-semibold">{userData.globalBonus}%</p>
//             </div>
//           </div>
//         </Card>

//         <Card title="Bonus by Level">
//           <ResponsiveContainer width="100%" height={180}>
//             <BarChart data={userData.bonusLevels}>
//               <XAxis dataKey="level" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="volume" fill="#00A991" radius={[6, 6, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         </Card>

//         <Card title="Weekly ROI">
//           <ResponsiveContainer width="100%" height={180}>
//             <LineChart data={userData.bonusHistory}>
//               <XAxis dataKey="date" />
//               <YAxis />
//               <Tooltip />
//               <Line type="monotone" dataKey="bonus" stroke="#00A991" strokeWidth={2} />
//             </LineChart>
//           </ResponsiveContainer>
//         </Card>
//       </div>

//       {/* ==== MIDDLE COLUMN ==== */}
//       <div className="space-y-">
//         <Card title="Network Structure">
//           <div className="h-[400px] text-gray-400">
//             <Tree
//               data={userData.downline}
//               translate={{ x: 200, y: 200 }}
//               zoom={0.8}
//               orientation="vertical"
//               pathFunc="step"
//               styles={{
//                 links: { stroke: "#00A991" },
//                 nodes: {
//                   node: {
//                     circle: { fill: "#00A991", r: 10 },
//                     name: { stroke: "none", fill: "#111" },
//                   },
//                 },
//               }}
//             />
//           </div>
//         </Card>

//         <Card title="Bonus Performance">
//           <ResponsiveContainer width="100%" height={180}>
//             <BarChart data={userData.bonusLevels}>
//               <XAxis dataKey="level" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="revenue" fill="#00A991" radius={[6, 6, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         </Card>
//       </div>

//       {/* ==== RIGHT COLUMN ==== */}
//       <div className="space-y-6">
//         <Card title="Bonus Breakdown">
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm border border-gray-100 dark:border-neutral-800">
//               <thead className="bg-gray-50 dark:bg-neutral-800 text-gray-600 dark:text-gray-300">
//                 <tr>
//                   <th className="p-2 text-left">Level</th>
//                   <th className="p-2 text-left">Members</th>
//                   <th className="p-2 text-left">Group Volume</th>
//                   <th className="p-2 text-left">Revenue</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {userData.bonusLevels.map((lvl, i) => (
//                   <tr key={i} className="border-t border-gray-100 dark:border-neutral-800">
//                     <td className="p-2">{lvl.level}</td>
//                     <td className="p-2">{lvl.members}</td>
//                     <td className="p-2">${lvl.volume}</td>
//                     <td className="p-2">{lvl.revenue}%</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </Card>

//         <Card title="Bonus History">
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm border border-gray-100 dark:border-neutral-800">
//               <thead className="bg-gray-50 dark:bg-neutral-800 text-gray-600 dark:text-gray-300">
//                 <tr>
//                   <th className="p-2 text-left">Date</th>
//                   <th className="p-2 text-left">User</th>
//                   <th className="p-2 text-left">Level</th>
//                   <th className="p-2 text-left">Volume</th>
//                   <th className="p-2 text-left">Bonus</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {userData.bonusHistory.map((h, i) => (
//                   <tr key={i} className="border-t border-gray-100 dark:border-neutral-800">
//                     <td className="p-2">{h.date}</td>
//                     <td className="p-2">{h.user}</td>
//                     <td className="p-2">{h.level}</td>
//                     <td className="p-2">${h.volume}</td>
//                     <td className="p-2">${h.bonus}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Unilevel;








// import React, { useEffect, useState } from "react";
// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   LineChart,
//   Line,
//   Cell,
// } from "recharts";
// import Tree from "react-d3-tree";
// import { getUserProfile } from "../../api/authApi";
// import { AlertCircle, Users, DollarSign, TrendingUp } from "lucide-react";

// const Card = ({ title, children }) => (
//   <div className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-2xl shadow-sm p-5">
//     {title && <h3 className="font-semibold text-[#00A991] mb-3">{title}</h3>}
//     {children}
//   </div>
// );

// const Unilevel = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("authToken") || "";
//     if (!token) {
//       setError("No auth token found. Please log in.");
//       setLoading(false);
//       return;
//     }

//     getUserProfile(token)
//       .then((data) => {
//         setUserData(data);
//         setLoading(false);
        
//       })
//       .catch((err) => {
//         setError(err.message || "Failed to load profile.");
//         setLoading(false);
//       });
      
//   }, []);

//   // ——————————————————— DERIVED DATA ———————————————————
//   if (!userData) {
//     return null;
//   }

//   const uni = userData.unilevelBonusPerformance || {};
//   const bonusBreakdown = userData.bonusBreakdown || {};

//   // Unilevel Levels (Level 1, Level 2, etc.)
//   const unilevelLevels = Object.keys(uni)
//     .filter((key) => key.startsWith("level"))
//     .map((key) => {
//       const lvl = uni[key];
//       return {
//         level: parseInt(key.replace("level", "")),
//         members: lvl.members || 0,
//         activeMembers: lvl.activeMembers || 0,
//         totalDeposit: lvl.totalDeposit || 0,
//         bonusEarned: lvl.bonusEarned || 0,
//       };
//     })
//     .sort((a, b) => a.level - b.level);

//   // Bonus History (from bonusHistory array)
//   const bonusHistory = (userData.bonusHistory || []).map((h) => ({
//     date: new Date(h.date).toLocaleDateString(),
//     user: h.username || "Unknown",
//     level: h.level || "-",
//     volume: h.amount || 0,
//     bonus: h.amount || 0,
//   }));

//   // Tree Structure (simplified from downline logic)
//   // You can expand this later with real downline API
//   const treeData = {
//     name: userData.name,
//     attributes: { rank: userData.rank },
//     children: [
//       {
//         name: userData.referrer?.name || "No Upline",
//         children: unilevelLevels.map((lvl) => ({
//           name: `Level ${lvl.level} (${lvl.members} members)`,
//           attributes: { active: lvl.activeMembers, volume: `$${lvl.totalDeposit}` },
//         })),
//       },
//     ],
//   };

//   // Bar Chart: Bonus per Level
//   const barData = unilevelLevels.map((lvl) => ({
//     level: `L${lvl.level}`,
//     bonus: lvl.bonusEarned,
//     fill: "#00A991",
//   }));

//   // Line Chart: Weekly ROI (use bonusHistory)
//   const lineData = bonusHistory.slice(0, 7); // last 7 entries

//   const COLORS = ["#00A991", "#10B981", "#34D399"];

//   // ——————————————————— RENDER ———————————————————
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
//         <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-[#00A991]"></div>
//         <span className="ml-3 text-lg text-gray-700">Loading Unilevel...</span>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
//         <div className="bg-red-50 border border-red-200 rounded-xl p-6 max-w-md text-center">
//           <AlertCircle className="h-10 w-10 text-red-600 mx-auto mb-3" />
//           <p className="text-red-800 font-medium">{error}</p>
//           {error.includes("Unauthorized") && (
//             <button
//               onClick={() => (window.location.href = "/login")}
//               className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
//             >
//               Go to Login
//             </button>
//           )}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 p-4 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
//       {/* ==== LEFT COLUMN ==== */}
//       <div className="space-y-6">
//         <Card title="Total Unilevel Bonus">
//           <div className="text-3xl font-bold text-gray-900 flex items-center">
//             <DollarSign className="h-8 w-8 text-[#00A991] mr-1" />
//             ${userData.totalUnilevelBonus?.toLocaleString() || 0}
//           </div>

//           <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
//             <div>
//               <p className="text-gray-500">Rank</p>
//               <p className="font-semibold capitalize">{userData.rank}</p>
//             </div>
//             <div>
//               <p className="text-gray-500">PVP</p>
//               <p className="font-semibold">${userData.personalVolume}</p>
//             </div>
//             <div>
//               <p className="text-gray-500">PGV</p>
//               <p className="font-semibold">${userData.groupVolume.toLocaleString()}</p>
//             </div>
//             <div>
//               <p className="text-gray-500">Global Bonus</p>
//               <p className="font-semibold">
//                 {((bonusBreakdown.unilevel_bonus / userData.groupVolume) * 100).toFixed(1)}%
//               </p>
//             </div>
//           </div>
//         </Card>

//         <Card title="Bonus by Level">
//           <ResponsiveContainer width="100%" height={180}>
//             <BarChart data={barData}>
//               <XAxis dataKey="level" tick={{ fontSize: 12 }} />
//               <YAxis tick={{ fontSize: 12 }} />
//               <Tooltip formatter={(v) => `$${v}`} />
//               <Bar dataKey="bonus" radius={[6, 6, 0, 0]}>
//                 {barData.map((entry, i) => (
//                   <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
//                 ))}
//               </Bar>
//             </BarChart>
//           </ResponsiveContainer>
//         </Card>

//         <Card title="Weekly ROI Trend">
//           <ResponsiveContainer width="100%" height={180}>
//             <LineChart data={lineData}>
//               <XAxis dataKey="date" tick={{ fontSize: 11 }} />
//               <YAxis tick={{ fontSize: 11 }} />
//               <Tooltip />
//               <Line
//                 type="monotone"
//                 dataKey="bonus"
//                 stroke="#00A991"
//                 strokeWidth={3}
//                 dot={{ fill: "#00A991" }}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </Card>
//       </div>

//       {/* ==== MIDDLE COLUMN ==== */}
//       <div className="space-y-6">
//        <Card title="Network Structure">
//   <div className="h-[380px] w-full bg-gray-50 rounded-lg overflow-hidden relative">
//     {treeData.children?.length > 0 ? (
//       <Tree
//         data={treeData}
//         translate={{ x: 160, y: 190 }}   // ← centered in card
//         zoom={0.7}                        // ← perfect fit
//         zoomable={true}
//         collapsible={false}
//         orientation="vertical"
//         pathFunc="step"
//         separation={{ siblings: 1, nonSiblings: 1.5 }}
//         styles={{
//           links: { stroke: "#00A991", strokeWidth: 2 },
//           nodes: {
//             node: {
//               circle: { fill: "#00A991", r: 11 },
//               name: { fill: "#111", fontWeight: "600", fontSize: 13 },
//             },
//             leafNode: { circle: { fill: "#34D399" } },
//           },
//         }}
//       />
//     ) : (
//       <div className="flex flex-col items-center justify-center h-full text-gray-500">
//         <Users className="h-10 w-10 mb-2 text-gray-300" />
//         <p className="text-sm">No downline data</p>
//       </div>
//     )}
//   </div>
// </Card>



//         <Card title="Bonus Performance">
//           <ResponsiveContainer width="100%" height={180}>
//             <BarChart data={unilevelLevels}>
//               <XAxis dataKey="level" tickFormatter={(v) => `L${v}`} />
//               <YAxis />
//               <Tooltip formatter={(v) => `$${v.toLocaleString()}`} />
//               <Bar dataKey="totalDeposit" fill="#10B981" radius={[6, 6, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         </Card>
//       </div>

//       {/* ==== RIGHT COLUMN ==== */}
//       <div className="space-y-6">
//         <Card title="Bonus Breakdown">
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm border border-gray-100">
//               <thead className="bg-gradient-to-r from-[#00A991] to-[#10B981] text-white">
//                 <tr>
//                   <th className="p-2 text-left">Level</th>
//                   <th className="p-2 text-left">Members</th>
//                   <th className="p-2 text-left">Active</th>
//                   <th className="p-2 text-left">Volume</th>
//                   <th className="p-2 text-left">Bonus</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {unilevelLevels.map((lvl) => (
//                   <tr key={lvl.level} className="border-t hover:bg-gray-50">
//                     <td className="p-2 font-medium">Level {lvl.level}</td>
//                     <td className="p-2">{lvl.members}</td>
//                     <td className="p-2 text-green-600">{lvl.activeMembers}</td>
//                     <td className="p-2">${lvl.totalDeposit.toLocaleString()}</td>
//                     <td className="p-2 font-semibold text-[#00A991]">
//                       ${lvl.bonusEarned.toLocaleString()}
//                     </td>
//                   </tr>
//                 ))}
//                 <tr className="border-t font-bold bg-yellow-50">
//                   <td className="p-2" colSpan={4}>
//                     Total Unilevel Bonus
//                   </td>
//                   <td className="p-2 text-[#00A991]">
//                     ${userData.totalUnilevelBonus.toLocaleString()}
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </Card>

//         <Card title="Recent Bonus History">
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm border border-gray-100">
//               <thead className="bg-gray-50 text-gray-700">
//                 <tr>
//                   <th className="p-2 text-left">Date</th>
//                   <th className="p-2 text-left">Type</th>
//                   <th className="p-2 text-left">Amount</th>
//                   <th className="p-2 text-left">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {userData.bonusHistory?.length > 0 ? (
//                   userData.bonusHistory.map((h, i) => (
//                     <tr key={i} className="border-t">
//                       <td className="p-2 text-xs">
//                         {new Date(h.date).toLocaleDateString()}
//                       </td>
//                       <td className="p-2">{h.type.replace(/_/g, " ")}</td>
//                       <td className="p-2 font-medium">${h.amount}</td>
//                       <td className="p-2">
//                         <span
//                           className={`px-2 py-1 rounded-full text-xs font-medium ${
//                             h.status === "approved"
//                               ? "bg-green-100 text-green-800"
//                               : "bg-yellow-100 text-yellow-800"
//                           }`}
//                         >
//                           {h.status}
//                         </span>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="4" className="p-4 text-center text-gray-500">
//                       No bonus history
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Unilevel;







// import React, { useEffect, useState } from "react";
// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   LineChart,
//   Line,
//   Cell,
// } from "recharts";
// import Tree from "react-d3-tree";
// import { getUserProfile } from "../../api/authApi";
// import { AlertCircle, Users, DollarSign, TrendingUp } from "lucide-react";

// const Card = ({ title, children }) => (
//   <div className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-2xl shadow-sm p-5">
//     {title && <h3 className="font-semibold text-[#00A991] mb-3">{title}</h3>}
//     {children}
//   </div>
// );

// const Unilevel = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("authToken") || "";
//     if (!token) {
//       setError("No auth token found. Please log in.");
//       setLoading(false);
//       return;
//     }

//     getUserProfile(token)
//       .then((data) => {
//         setUserData(data);
//         setLoading(false);

//         // ---------------------------------------------------------
//         // 1. Raw profile payload
//         // ---------------------------------------------------------
//         console.log("%c=== RAW PROFILE DATA ===", "font-weight:bold; color:#00A991");
//         console.log(data);

//         // ---------------------------------------------------------
//         // 2. Unilevel performance object
//         // ---------------------------------------------------------
//         console.log("%c=== unilevelBonusPerformance ===", "font-weight:bold; color:#10B981");
//         console.log(data.unilevelBonusPerformance);

//         // ---------------------------------------------------------
//         // 3. Bonus breakdown
//         // ---------------------------------------------------------
//         console.log("%c=== bonusBreakdown ===", "font-weight:bold; color:#34D399");
//         console.log(data.bonusBreakdown);

//         // ---------------------------------------------------------
//         // 4. Bonus history (array)
//         // ---------------------------------------------------------
//         console.log("%c=== bonusHistory ===", "font-weight:bold; color:#FACC15");
//         console.log(data.bonusHistory);
//       })
//       .catch((err) => {
//         setError(err.message || "Failed to load profile.");
//         setLoading(false);
//       });
//   }, []);

//   // ——————————————————— DERIVED DATA ———————————————————
//   if (!userData) return null;

//   const uni = userData.unilevelBonusPerformance || {};
//   const bonusBreakdown = userData.bonusBreakdown || {};

//   // Unilevel Levels
//   const unilevelLevels = Object.keys(uni)
//     .filter((key) => key.startsWith("level"))
//     .map((key) => {
//       const lvl = uni[key];
//       return {
//         level: parseInt(key.replace("level", "")),
//         members: lvl.members || 0,
//         activeMembers: lvl.activeMembers || 0,
//         totalDeposit: lvl.totalDeposit || 0,
//         bonusEarned: lvl.bonusEarned || 0,
//       };
//     })
//     .sort((a, b) => a.level - b.level);

//   // Bonus History
//   const bonusHistory = (userData.bonusHistory || []).map((h) => ({
//     date: new Date(h.date).toLocaleDateString(),
//     user: h.username || "Unknown",
//     level: h.level || "-",
//     volume: h.amount || 0,
//     bonus: h.amount || 0,
//   }));

//   // ---------------------------------------------------------
//   // 5. Tree structure that will be rendered
//   // ---------------------------------------------------------
//   const treeData = {
//     name: userData.name,
//     attributes: { rank: userData.rank },
//     children: [
//       {
//         name: userData.referrer?.name || "No Upline",
//         children: unilevelLevels.map((lvl) => ({
//           name: `Level ${lvl.level} (${lvl.members} members)`,
//           attributes: { active: lvl.activeMembers, volume: `$${lvl.totalDeposit}` },
//         })),
//       },
//     ],
//   };

//   console.log("%c=== TREE DATA (for react-d3-tree) ===", "font-weight:bold; color:#F59E0B");
//   console.log(JSON.parse(JSON.stringify(treeData))); // deep clone to avoid circular refs

//   // Bar / Line chart data
//   const barData = unilevelLevels.map((lvl) => ({
//     level: `L${lvl.level}`,
//     bonus: lvl.bonusEarned,
//     fill: "#00A991",
//   }));
//   const lineData = bonusHistory.slice(0, 7);
//   const COLORS = ["#00A991", "#10B981", "#34D399"];

//   // ——————————————————— RENDER ———————————————————
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
//         <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-[#00A991]"></div>
//         <span className="ml-3 text-lg text-gray-700">Loading Unilevel...</span>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
//         <div className="bg-red-50 border border-red-200 rounded-xl p-6 max-w-md text-center">
//           <AlertCircle className="h-10 w-10 text-red-600 mx-auto mb-3" />
//           <p className="text-red-800 font-medium">{error}</p>
//           {error.includes("Unauthorized") && (
//             <button
//               onClick={() => (window.location.href = "/login")}
//               className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
//             >
//               Go to Login
//             </button>
//           )}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 p-4 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
//       {/* LEFT COLUMN */}
//       <div className="space-y-6">
//         <Card title="Total Unilevel Bonus">
//           <div className="text-3xl font-bold text-gray-900 flex items-center">
//             <DollarSign className="h-8 w-8 text-[#00A991] mr-1" />
//             ${userData.totalUnilevelBonus?.toLocaleString() || 0}
//           </div>

//           <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
//             <div>
//               <p className="text-gray-500">Rank</p>
//               <p className="font-semibold capitalize">{userData.rank}</p>
//             </div>
//             <div>
//               <p className="text-gray-500">PVP</p>
//               <p className="font-semibold">${userData.personalVolume}</p>
//             </div>
//             <div>
//               <p className="text-gray-500">PGV</p>
//               <p className="font-semibold">${userData.groupVolume.toLocaleString()}</p>
//             </div>
//             <div>
//               <p className="text-gray-500">Global Bonus</p>
//               <p className="font-semibold">
//                 {((bonusBreakdown.unilevel_bonus / userData.groupVolume) * 100).toFixed(1)}%
//               </p>
//             </div>
//           </div>
//         </Card>

//         <Card title="Bonus by Level">
//           <ResponsiveContainer width="100%" height={180}>
//             <BarChart data={barData}>
//               <XAxis dataKey="level" tick={{ fontSize: 12 }} />
//               <YAxis tick={{ fontSize: 12 }} />
//               <Tooltip formatter={(v) => `$${v}`} />
//               <Bar dataKey="bonus" radius={[6, 6, 0, 0]}>
//                 {barData.map((entry, i) => (
//                   <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
//                 ))}
//               </Bar>
//             </BarChart>
//           </ResponsiveContainer>
//         </Card>

//         <Card title="Weekly ROI Trend">
//           <ResponsiveContainer width="100%" height={180}>
//             <LineChart data={lineData}>
//               <XAxis dataKey="date" tick={{ fontSize: 11 }} />
//               <YAxis tick={{ fontSize: 11 }} />
//               <Tooltip />
//               <Line
//                 type="monotone"
//                 dataKey="bonus"
//                 stroke="#00A991"
//                 strokeWidth={3}
//                 dot={{ fill: "#00A991" }}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </Card>
//       </div>

//       {/* MIDDLE COLUMN */}
//       <div className="space-y-6">
//         <Card title="Network Structure">
//           <div className="h-[380px] w-full bg-gray-50 rounded-lg overflow-hidden relative">
//             {treeData.children?.length > 0 ? (
//               <Tree
//                 data={treeData}
//                 translate={{ x: 160, y: 190 }}
//                 zoom={0.7}
//                 zoomable={true}
//                 collapsible={false}
//                 orientation="vertical"
//                 pathFunc="step"
//                 separation={{ siblings: 1, nonSiblings: 1.5 }}
//                 styles={{
//                   links: { stroke: "#00A991", strokeWidth: 2 },
//                   nodes: {
//                     node: {
//                       circle: { fill: "#00A991", r: 11 },
//                       name: { fill: "#111", fontWeight: "600", fontSize: 13 },
//                     },
//                     leafNode: { circle: { fill: "#34D399" } },
//                   },
//                 }}
//               />
//             ) : (
//               <div className="flex flex-col items-center justify-center h-full text-gray-500">
//                 <Users className="h-10 w-10 mb-2 text-gray-300" />
//                 <p className="text-sm">No downline data</p>
//               </div>
//             )}
//           </div>
//         </Card>

//         <Card title="Bonus Performance">
//           <ResponsiveContainer width="100%" height={180}>
//             <BarChart data={unilevelLevels}>
//               <XAxis dataKey="level" tickFormatter={(v) => `L${v}`} />
//               <YAxis />
//               <Tooltip formatter={(v) => `$${v.toLocaleString()}`} />
//               <Bar dataKey="totalDeposit" fill="#10B981" radius={[6, 6, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         </Card>
//       </div>

//       {/* RIGHT COLUMN */}
//       <div className="space-y-6">
//         <Card title="Bonus Breakdown">
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm border border-gray-100">
//               <thead className="bg-gradient-to-r from-[#00A991] to-[#10B981] text-white">
//                 <tr>
//                   <th className="p-2 text-left">Level</th>
//                   <th className="p-2 text-left">Members</th>
//                   <th className="p-2 text-left">Active</th>
//                   <th className="p-2 text-left">Volume</th>
//                   <th className="p-2 text-left">Bonus</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {unilevelLevels.map((lvl) => (
//                   <tr key={lvl.level} className="border-t hover:bg-gray-50">
//                     <td className="p-2 font-medium">Level {lvl.level}</td>
//                     <td className="p-2">{lvl.members}</td>
//                     <td className="p-2 text-green-600">{lvl.activeMembers}</td>
//                     <td className="p-2">${lvl.totalDeposit.toLocaleString()}</td>
//                     <td className="p-2 font-semibold text-[#00A991]">
//                       ${lvl.bonusEarned.toLocaleString()}
//                     </td>
//                   </tr>
//                 ))}
//                 <tr className="border-t font-bold bg-yellow-50">
//                   <td className="p-2" colSpan={4}>
//                     Total Unilevel Bonus
//                   </td>
//                   <td className="p-2 text-[#00A991]">
//                     ${userData.totalUnilevelBonus.toLocaleString()}
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </Card>

//         <Card title="Recent Bonus History">
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm border border-gray-100">
//               <thead className="bg-gray-50 text-gray-700">
//                 <tr>
//                   <th className="p-2 text-left">Date</th>
//                   <th className="p-2 text-left">Type</th>
//                   <th className="p-2 text-left">Amount</th>
//                   <th className="p-2 text-left">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {userData.bonusHistory?.length > 0 ? (
//                   userData.bonusHistory.map((h, i) => (
//                     <tr key={i} className="border-t">
//                       <td className="p-2 text-xs">
//                         {new Date(h.date).toLocaleDateString()}
//                       </td>
//                       <td className="p-2">{h.type.replace(/_/g, " ")}</td>
//                       <td className="p-2 font-medium">${h.amount}</td>
//                       <td className="p-2">
//                         <span
//                           className={`px-2 py-1 rounded-full text-xs font-medium ${
//                             h.status === "approved"
//                               ? "bg-green-100 text-green-800"
//                               : "bg-yellow-100 text-yellow-800"
//                           }`}
//                         >
//                           {h.status}
//                         </span>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="4" className="p-4 text-center text-gray-500">
//                       No bonus history
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Unilevel;





// import React, { useEffect, useState } from "react";
// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   LineChart,
//   Line,
//   Cell,
// } from "recharts";
// import Tree from "react-d3-tree";
// import { getUserProfile } from "../../api/authApi";
// import { AlertCircle, Users, DollarSign } from "lucide-react";

// /* ---- Reusable Card ---- */
// const Card = ({ title, children }) => (
//   <div className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-2xl shadow-sm p-5">
//     {title && <h3 className="font-semibold text-[#00A991] mb-3">{title}</h3>}
//     {children}
//   </div>
// );

// const Unilevel = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   /* ────── FETCH PROFILE ────── */
//   useEffect(() => {
//     const token = localStorage.getItem("token"); // ✅ Use correct token key
//     if (!token) {
//       setError("No auth token found. Please log in.");
//       setLoading(false);
//       return;
//     }

//     getUserProfile(token)
//       .then((data) => {
//         setUserData(data);
//         setLoading(false);
//         console.log("%cUser Profile:", "color:#00A991;font-weight:bold", data);
//       })
//       .catch((err) => {
//         setError(err.message || "Failed to load profile.");
//         setLoading(false);
//       });
//   }, []);

//   /* ────── HANDLE STATES ────── */
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
//         <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-[#00A991]" />
//         <span className="ml-3 text-lg text-gray-700">Loading Unilevel…</span>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
//         <div className="bg-red-50 border border-red-200 rounded-xl p-6 max-w-md text-center">
//           <AlertCircle className="h-10 w-10 text-red-600 mx-auto mb-3" />
//           <p className="text-red-800 font-medium">{error}</p>
//           {error.includes("Unauthorized") && (
//             <button
//               onClick={() => (window.location.href = "/login")}
//               className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
//             >
//               Go to Login
//             </button>
//           )}
//         </div>
//       </div>
//     );
//   }

//   if (!userData) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-600">
//         <p>No user data found. Please log in again.</p>
//       </div>
//     );
//   }

//   /* ────── DERIVED DATA ────── */
//   const uni = userData?.unilevelBonusPerformance || {};
//   const bonusBreakdown = userData?.bonusBreakdown || {};
//   const bonusHistory = userData?.bonusHistory || [];

//   const unilevelLevels = Object.keys(uni).map((k) => {
//     const lvl = uni[k];
//     return {
//       level: parseInt(k.replace("level", ""), 10),
//       members: lvl.members ?? 0,
//       activeMembers: lvl.activeMembers ?? 0,
//       totalDeposit: lvl.totalDeposit ?? 0,
//       bonusEarned: lvl.bonusEarned ?? 0,
//     };
//   });

//   const treeData = {
//     name: userData.name,
//     attributes: { rank: userData.rank },
//     children: [
//       {
//         name: userData.referrer?.name || "No Upline",
//         children: unilevelLevels.map((lvl) => ({
//           name: `Level ${lvl.level} (${lvl.members} members)`,
//           attributes: { active: lvl.activeMembers, volume: `$${lvl.totalDeposit}` },
//         })),
//       },
//     ],
//   };

//   const lineData = bonusHistory.map((b) => ({
//     date: new Date(b.date).toLocaleDateString(),
//     bonus: b.amount,
//   }));

//   const COLORS = ["#00A991", "#10B981", "#34D399"];

//   /* ────── RENDER ────── */
//   return (
//     <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 p-4 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
//       {/* LEFT COLUMN */}
//       <div className="space-y-6">
//         <Card title="Total Unilevel Bonus">
//           <div className="text-3xl font-bold text-gray-900 flex items-center">
//             <DollarSign className="h-8 w-8 text-[#00A991] mr-1" />
//             ${userData.totalUnilevelBonus?.toLocaleString() ?? 0}
//           </div>

//           <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
//             <div>
//               <p className="text-gray-500">Rank</p>
//               <p className="font-semibold capitalize">{userData.rank}</p>
//             </div>
//             <div>
//               <p className="text-gray-500">PVP</p>
//               <p className="font-semibold">${userData.personalVolume}</p>
//             </div>
//             <div>
//               <p className="text-gray-500">PGV</p>
//               <p className="font-semibold">
//                 ${userData.groupVolume?.toLocaleString()}
//               </p>
//             </div>
//             <div>
//               <p className="text-gray-500">Global Bonus %</p>
//               <p className="font-semibold">
//                 {userData.groupVolume > 0
//                   ? `${((bonusBreakdown.unilevel_bonus / userData.groupVolume) * 100).toFixed(1)}%`
//                   : "0.0%"}
//               </p>
//             </div>
//           </div>
//         </Card>

//         <Card title="Bonus by Level">
//           <ResponsiveContainer width="100%" height={180}>
//             <BarChart data={unilevelLevels}>
//               <XAxis dataKey="level" tick={{ fontSize: 12 }} />
//               <YAxis tick={{ fontSize: 12 }} />
//               <Tooltip formatter={(v) => `$${v}`} />
//               <Bar dataKey="bonusEarned" radius={[6, 6, 0, 0]}>
//                 {unilevelLevels.map((_, i) => (
//                   <Cell key={i} fill={COLORS[i % COLORS.length]} />
//                 ))}
//               </Bar>
//             </BarChart>
//           </ResponsiveContainer>
//         </Card>

//         <Card title="Weekly ROI Trend">
//           <ResponsiveContainer width="100%" height={180}>
//             <LineChart data={lineData}>
//               <XAxis dataKey="date" tick={{ fontSize: 11 }} />
//               <YAxis tick={{ fontSize: 11 }} />
//               <Tooltip />
//               <Line
//                 type="monotone"
//                 dataKey="bonus"
//                 stroke="#00A991"
//                 strokeWidth={3}
//                 dot={{ fill: "#00A991" }}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </Card>
//       </div>

//       {/* MIDDLE COLUMN */}
//       <div className="space-y-6">
//         <Card title="Network Structure">
//           <div className="h-[380px] w-full rounded-lg overflow-hidden relative">
//             {treeData.children?.[0]?.children?.length ? (
//               <Tree
//                 data={treeData}
//                 translate={{ x: 180, y: 190 }}
//                 zoom={0.7}
//                 zoomable
//                 collapsible={false}
//                 orientation="vertical"
//                 pathFunc="step"
//                 separation={{ siblings: 0.9, nonSiblings: 1.3 }}
//                 nodeSize={{ x: 190, y: 100 }}
//                 styles={{
//                   links: { stroke: "#00A991", strokeWidth: 2 },
//                   nodes: {
//                     node: {
//                       circle: { fill: "#00A991", r: 11 },
//                       name: { fill: "#111", fontWeight: "600", fontSize: 13 },
//                     },
//                     leafNode: { circle: { fill: "#34D399" } },
//                   },
//                 }}
//               />
//             ) : (
//               <div className="flex flex-col items-center justify-center h-full text-gray-500">
//                 <Users className="h-10 w-10 mb-2 text-gray-300" />
//                 <p className="text-sm">No downline data</p>
//               </div>
//             )}
//           </div>
//         </Card>

//         <Card title="Bonus Performance">
//           <ResponsiveContainer width="100%" height={180}>
//             <BarChart data={unilevelLevels}>
//               <XAxis dataKey="level" tickFormatter={(v) => `L${v}`} />
//               <YAxis />
//               <Tooltip formatter={(v) => `$${v.toLocaleString()}`} />
//               <Bar dataKey="totalDeposit" fill="#10B981" radius={[6, 6, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         </Card>
//       </div>

//       {/* RIGHT COLUMN */}
//       <div className="space-y-6">
//         <Card title="Bonus Breakdown">
//           <table className="w-full text-sm border border-gray-100">
//             <thead className="bg-gradient-to-r from-[#00A991] to-[#10B981] text-white">
//               <tr>
//                 <th className="p-2 text-left">Level</th>
//                 <th className="p-2 text-left">Members</th>
//                 <th className="p-2 text-left">Active</th>
//                 <th className="p-2 text-left">Volume</th>
//                 <th className="p-2 text-left">Bonus</th>
//               </tr>
//             </thead>
//             <tbody>
//               {unilevelLevels.map((lvl) => (
//                 <tr key={lvl.level} className="border-t hover:bg-gray-50">
//                   <td className="p-2 font-medium">Level {lvl.level}</td>
//                   <td className="p-2">{lvl.members}</td>
//                   <td className="p-2 text-green-600">{lvl.activeMembers}</td>
//                   <td className="p-2">${lvl.totalDeposit.toLocaleString()}</td>
//                   <td className="p-2 font-semibold text-[#00A991]">
//                     ${lvl.bonusEarned.toLocaleString()}
//                   </td>
//                 </tr>
//               ))}
//               <tr className="border-t font-bold bg-yellow-50">
//                 <td className="p-2" colSpan={4}>
//                   Total Unilevel Bonus
//                 </td>
//                 <td className="p-2 text-[#00A991]">
//                   ${userData.totalUnilevelBonus.toLocaleString()}
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </Card>

//         <Card title="Recent Bonus History">
//           <table className="w-full text-sm border border-gray-100">
//             <thead className="bg-gray-50 text-gray-700">
//               <tr>
//                 <th className="p-2 text-left">Date</th>
//                 <th className="p-2 text-left">Type</th>
//                 <th className="p-2 text-left">Amount</th>
//                 <th className="p-2 text-left">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {bonusHistory.length ? (
//                 bonusHistory.map((h, i) => (
//                   <tr key={i} className="border-t">
//                     <td className="p-2 text-xs">
//                       {new Date(h.date).toLocaleDateString()}
//                     </td>
//                     <td className="p-2">{h.type}</td>
//                     <td className="p-2 font-medium">${h.amount}</td>
//                     <td className="p-2">
//                       <span
//                         className={`px-2 py-1 rounded-full text-xs font-medium ${
//                           h.status === "approved"
//                             ? "bg-green-100 text-green-800"
//                             : "bg-yellow-100 text-yellow-800"
//                         }`}
//                       >
//                         {h.status}
//                       </span>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={4} className="p-4 text-center text-gray-500">
//                     No bonus history
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Unilevel;









// import React, { useEffect, useState } from "react";
// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   LineChart,
//   Line,
//   Cell,
// } from "recharts";
// import Tree from "react-d3-tree";
// import { getUserProfile } from "../../api/authApi";
// import { AlertCircle, Users, DollarSign, TrendingUp } from "lucide-react";

// const Card = ({ title, children }) => (
//   <div className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-2xl shadow-sm p-5">
//     {title && <h3 className="font-semibold text-[#00A991] mb-3">{title}</h3>}
//     {children}
//   </div>
// );

// const Unilevel = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   /* ────── FETCH PROFILE ────── */
//  useEffect(() => {
//   const token = localStorage.getItem("authToken");

//   if (!token) {
//     setError("Session expired. Please log in again.");
//     setLoading(false);
//     return;
//   }

//   getUserProfile(token)
//     .then((data) => {
//       setUserData(data);
//       setLoading(false);
//     })
//     .catch((err) => {
//       console.error("Profile fetch error:", err);
//       if (err.response?.status === 401) {
//         localStorage.removeItem("authToken");
//         setError("Session expired. Redirecting to login...");
//         setTimeout(() => {
//           window.location.href = "/login";
//         }, 2000);
//       } else {
//         setError(err.message || "Failed to load profile.");
//       }
//       setLoading(false);
//     });
// }, []);

//   /* ────── RENDER ────── */
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
//         <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-[#00A991]"></div>
//         <span className="ml-3 text-lg text-gray-700">Loading Unilevel…</span>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
//         <div className="bg-red-50 border border-red-200 rounded-xl p-6 max-w-md text-center">
//           <AlertCircle className="h-10 w-10 text-red-600 mx-auto mb-3" />
//           <p className="text-red-800 font-medium">{error}</p>
//           {error.includes("Unauthorized") && (
//             <button
//               onClick={() => (window.location.href = "/login")}
//               className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
//             >
//               Go to Login
//             </button>
//           )}
//         </div>
//       </div>
//     );
//   }

//   // REMOVED: if (!userData) return null;
//   // → Now we safely proceed knowing userData exists

//   /* ────── DERIVED DATA ────── */
//   const uni = userData.unilevelBonusPerformance || {};
//   const bonusBreakdown = userData.bonusBreakdown || {};

//   /* ---- Unilevel levels ---- */
//   const unilevelLevels = Object.keys(uni)
//     .filter((k) => k.startsWith("level"))
//     .map((k) => {
//       const lvl = uni[k];
//       return {
//         level: parseInt(k.replace("level", ""), 10),
//         members: lvl.members ?? 0,
//         activeMembers: lvl.activeMembers ?? 0,
//         totalDeposit: lvl.totalDeposit ?? 0,
//         bonusEarned: lvl.bonusEarned ?? 0,
//       };
//     })
//     .sort((a, b) => a.level - b.level);

//   console.log("%c=== unilevelLevels (derived) ===", "font-weight:bold; color:#F59E0B");
//   console.log(unilevelLevels);

//   /* ---- Bonus history (last 7) ---- */
//   const bonusHistory = (userData.bonusHistory ?? [])
//     .slice(0, 7)
//     .map((h) => ({
//       date: new Date(h.date).toLocaleDateString(),
//       type: h.type?.replace(/_/g, " ") ?? "UNKNOWN",
//       amount: h.amount ?? 0,
//       status: h.status ?? "pending",
//     }));

//   console.log("%c=== bonusHistory (derived) ===", "font-weight:bold; color:#EF4444");
//   console.log(bonusHistory);

//   /* ---- Tree data (original UI) ---- */
//   const treeData = {
//     name: userData.name,
//     attributes: { rank: userData.rank },
//     children: [
//       {
//         name: userData.referrer?.name || "No Upline",
//         children: unilevelLevels.map((lvl) => ({
//           name: `Level ${lvl.level} (${lvl.members} members)`,
//           attributes: { active: lvl.activeMembers, volume: `$${lvl.totalDeposit}` },
//         })),
//       },
//     ],
//   };

//   console.log("%c=== TREE DATA (for react-d3-tree) ===", "font-weight:bold; color:#8B5CF6");
//   console.log(JSON.parse(JSON.stringify(treeData)));

//   /* ---- Chart data ---- */
//   const barData = unilevelLevels.map((lvl) => ({
//     level: `L${lvl.level}`,
//     bonus: lvl.bonusEarned,
//   }));
//   const lineData = bonusHistory.map((h) => ({
//     date: h.date,
//     bonus: h.amount,
//   }));
//   const COLORS = ["#00A991", "#10B981", "#34D399"];

//   /* ────── MAIN UI ────── */
//   return (
//     <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 p-4 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
//       {/* ────── LEFT COLUMN ────── */}
//       <div className="space-y-6">
//         <Card title="Total Unilevel Bonus">
//           <div className="text-3xl font-bold text-gray-900 flex items-center">
//             <DollarSign className="h-8 w-8 text-[#00A991] mr-1" />
//             ${userData.totalUnilevelBonus?.toLocaleString() ?? 0}
//           </div>

//           <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
//             <div>
//               <p className="text-gray-500">Rank</p>
//               <p className="font-semibold capitalize">{userData.rank}</p>
//             </div>
//             <div>
//               <p className="text-gray-500">PVP</p>
//               <p className="font-semibold">${userData.personalVolume}</p>
//             </div>
//             <div>
//               <p className="text-gray-500">PGV</p>
//               <p className="font-semibold">${userData.groupVolume.toLocaleString()}</p>
//             </div>
//             <div>
//               <p className="text-gray-500">Global Bonus</p>
//               <p className="font-semibold">
//                 {(() => {
//                   const bonus = bonusBreakdown.unilevel_bonus ?? 0;
//                   const volume = userData.groupVolume ?? 0;
//                   return volume > 0 ? `${((bonus / volume) * 100).toFixed(1)}%` : "0.0%";
//                 })()}
//               </p>
//             </div>
//           </div>
//         </Card>

//         <Card title="Bonus by Level">
//           <ResponsiveContainer width="100%" height={180}>
//             <BarChart data={barData}>
//               <XAxis dataKey="level" tick={{ fontSize: 12 }} />
//               <YAxis tick={{ fontSize: 12 }} />
//               <Tooltip formatter={(v) => `$${v}`} />
//               <Bar dataKey="bonus" radius={[6, 6, 0, 0]}>
//                 {barData.map((e, i) => (
//                   <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
//                 ))}
//               </Bar>
//             </BarChart>
//           </ResponsiveContainer>
//         </Card>

//         <Card title="Weekly ROI Trend">
//           <ResponsiveContainer width="100%" height={180}>
//             <LineChart data={lineData}>
//               <XAxis dataKey="date" tick={{ fontSize: 11 }} />
//               <YAxis tick={{ fontSize: 11 }} />
//               <Tooltip />
//               <Line type="monotone" dataKey="bonus" stroke="#00A991" strokeWidth={3} dot={{ fill: "#00A991" }} />
//             </LineChart>
//           </ResponsiveContainer>
//         </Card>
//       </div>

//       {/* ────── MIDDLE COLUMN ────── */}
//       <div className="space-y-6">
//         {/* ── ORIGINAL TREE + 4 NODES PER ROW ── */}
//         <Card title="Network Structure">
//           <div className="h-[380px] w-full rounded-lg overflow-hidden relative">
//             {treeData.children?.[0]?.children?.length ? (
//               <Tree
//                 data={treeData}
//                 translate={{ x: 180, y: 190 }}
//                 zoom={0.7}
//                 zoomable
//                 collapsible={false}
//                 orientation="vertical"
//                 pathFunc="step"
//                 separation={{ siblings: 0.9, nonSiblings: 1.3 }}
//                 nodeSize={{ x: 190, y: 100 }}
//                 styles={{
//                   links: { stroke: "#00A991", strokeWidth: 2 },
//                   nodes: {
//                     node: {
//                       circle: { fill: "#00A991", r: 11 },
//                       name: { fill: "#111", fontWeight: "600", fontSize: 13 },
//                     },
//                     leafNode: { circle: { fill: "#34D399" } },
//                   },
//                 }}
//               />
//             ) : (
//               <div className="flex flex-col items-center justify-center h-full text-gray-500">
//                 <Users className="h-10 w-10 mb-2 text-gray-300" />
//                 <p className="text-sm">No downline data</p>
//               </div>
//             )}
//           </div>
//         </Card>

//         <Card title="Bonus Performance">
//           <ResponsiveContainer width="100%" height={180}>
//             <BarChart data={unilevelLevels}>
//               <XAxis dataKey="level" tickFormatter={(v) => `L${v}`} />
//               <YAxis />
//               <Tooltip formatter={(v) => `$${v.toLocaleString()}`} />
//               <Bar dataKey="totalDeposit" fill="#10B981" radius={[6, 6, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         </Card>
//       </div>

//       {/* ────── RIGHT COLUMN ────── */}
//       <div className="space-y-6">
//         <Card title="Bonus Breakdown">
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm border border-gray-100">
//               <thead className="bg-gradient-to-r from-[#00A991] to-[#10B981] text-white">
//                 <tr>
//                   <th className="p-2 text-left">Level</th>
//                   <th className="p-2 text-left">Members</th>
//                   <th className="p-2 text-left">Active</th>
//                   <th className="p-2 text-left">Volume</th>
//                   <th className="p-2 text-left">Bonus</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {unilevelLevels.map((lvl) => (
//                   <tr key={lvl.level} className="border-t hover:bg-gray-50">
//                     <td className="p-2 font-medium">Level {lvl.level}</td>
//                     <td className="p-2">{lvl.members}</td>
//                     <td className="p-2 text-green-600">{lvl.activeMembers}</td>
//                     <td className="p-2">${lvl.totalDeposit.toLocaleString()}</td>
//                     <td className="p-2 font-semibold text-[#00A991]">
//                       ${lvl.bonusEarned.toLocaleString()}
//                     </td>
//                   </tr>
//                 ))}
//                 <tr className="border-t font-bold bg-yellow-50">
//                   <td className="p-2" colSpan={4}>
//                     Total Unilevel Bonus
//                   </td>
//                   <td className="p-2 text-[#00A991]">
//                     ${userData.totalUnilevelBonus.toLocaleString()}
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </Card>

//         <Card title="Recent Bonus History">
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm border border-gray-100">
//               <thead className="bg-gray-50 text-gray-700">
//                 <tr>
//                   <th className="p-2 text-left">Date</th>
//                   <th className="p-2 text-left">Type</th>
//                   <th className="p-2 text-left">Amount</th>
//                   <th className="p-2 text-left">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {bonusHistory.length ? (
//                   bonusHistory.map((h, i) => (
//                     <tr key={i} className="border-t">
//                       <td className="p-2 text-xs">{h.date}</td>
//                       <td className="p-2">{h.type}</td>
//                       <td className="p-2 font-medium">${h.amount}</td>
//                       <td className="p-2">
//                         <span
//                           className={`px-2 py-1 rounded-full text-xs font-medium ${
//                             h.status === "approved"
//                               ? "bg-green-100 text-green-800"
//                               : "bg-yellow-100 text-yellow-800"
//                           }`}
//                         >
//                           {h.status}
//                         </span>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan={4} className="p-4 text-center text-gray-500">
//                       No bonus history
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Unilevel;








import React, { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  Cell,
  PieChart,
  Pie,
} from "recharts";
import Tree from "react-d3-tree";
import { getUserProfile } from "../../api/authApi";
import {
  AlertCircle,
  Users,
  DollarSign,
  TrendingUp,
  Award,
  Network,
  Clock,
  CheckCircle,
} from "lucide-react";

/* ---- Reusable Card ---- */
const Card = ({ title, subtitle, children, className = "" }) => (
  <div
    className={`bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-2xl shadow-sm p-6 ${className}`}
  >
    {title && (
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg text-[#00A991]">{title}</h3>
        {subtitle && <span className="text-xs text-gray-500">{subtitle}</span>}
      </div>
    )}
    {children}
  </div>
);

const Unilevel = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* ────── FETCH PROFILE ────── */
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("No auth token found. Please log in.");
      setLoading(false);
      return;
    }

    getUserProfile(token)
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Failed to load profile.");
        setLoading(false);
      });
  }, []);

  /* ────── LOADING & ERROR STATES ────── */
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
        <div className="flex items-center space-x-3">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-[#00A991]" />
          <span className="text-lg font-medium text-gray-700">Loading Velox Capital Dashboard…</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 max-w-md text-center">
          <AlertCircle className="h-10 w-10 text-red-600 mx-auto mb-3" />
          <p className="text-red-800 font-medium">{error}</p>
          {error.includes("Unauthorized") && (
            <button
              onClick={() => (window.location.href = "/login")}
              className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              Go to Login
            </button>
          )}
        </div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        <p>No user data found. Please log in again.</p>
      </div>
    );
  }

  /* ────── DERIVED DATA ────── */
  const uni = userData.unilevelBonusPerformance || {};
  const bonusBreakdown = userData.bonusBreakdown || {};
  const bonusHistory = userData.bonusHistory || [];

  const unilevelLevels = Object.keys(uni)
    .filter((k) => k.startsWith("level"))
    .map((k) => {
      const lvl = uni[k];
      return {
        level: parseInt(k.replace("level", ""), 10),
        members: lvl.members ?? 0,
        activeMembers: lvl.activeMembers ?? 0,
        totalDeposit: lvl.totalDeposit ?? 0,
        bonusEarned: lvl.bonusEarned ?? 0,
      };
    })
    .sort((a, b) => a.level - b.level);

  // Tree Data for Network
  const treeData = {
    name: userData.name,
    attributes: { rank: userData.rank, volume: `$${userData.groupVolume?.toLocaleString()}` },
    children: unilevelLevels.map((lvl) => ({
      name: `Level ${lvl.level}`,
      attributes: {
        members: lvl.members,
        active: lvl.activeMembers,
        volume: `$${lvl.totalDeposit.toLocaleString()}`,
        bonus: `$${lvl.bonusEarned.toLocaleString()}`,
      },
    })),
  };

  // Bonus Breakdown for Pie Chart
  const pieData = Object.entries(bonusBreakdown)
    .filter(([key]) => key !== "total")
    .map(([key, value]) => ({
      name:
        key === "roi_earnings"
          ? "ROI Earnings"
          : key === "weekly_roi"
          ? "Weekly ROI"
          : key === "unilevel_bonus"
          ? "Unilevel Bonus"
          : key === "fast_start_bonus"
          ? "Fast Start"
          : key === "matrix_bonus"
          ? "Matrix Bonus"
          : key === "leadership_bonus"
          ? "Leadership Bonus"
          : key === "matching_bonus"
          ? "Matching Bonus"
          : key,
      value,
    }));

  const COLORS = ["#00A991", "#10B981", "#34D399", "#6EE7B7", "#A7F3D0", "#DCFCE7", "#F0FDF4"];

  const formatCurrency = (val) => `$${val?.toLocaleString() ?? 0}`;

  /* ────── RENDER UI ────── */
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Velox Capital <span className="text-[#00A991]">Unilevel Dashboard</span>
          </h1>
          <p className="text-gray-600 mt-2">Track your network growth, bonuses, and performance</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {/* Total Unilevel Bonus */}
            <Card title="Total Unilevel Bonus" subtitle="All Levels Combined">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-4xl font-bold text-[#00A991]">
                    {formatCurrency(userData.totalUnilevelBonus)}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">From {unilevelLevels.length} Levels</p>
                </div>
                <div className="p-3 bg-green-50 rounded-full">
                  <TrendingUp className="h-8 w-8 text-[#00A991]" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-5 text-xs">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-gray-500">Your Rank</p>
                  <p className="font-bold text-gray-900 capitalize">{userData.rank}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-gray-500">Personal Volume</p>
                  <p className="font-bold text-gray-900">{formatCurrency(userData.personalVolume)}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-gray-500">Group Volume</p>
                  <p className="font-bold text-gray-900">{formatCurrency(userData.groupVolume)}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-gray-500">Efficiency</p>
                  <p className="font-bold text-[#00A991]">
                    {userData.groupVolume > 0
                      ? `${((bonusBreakdown.unilevel_bonus / userData.groupVolume) * 100).toFixed(1)}%`
                      : "0.0%"}
                  </p>
                </div>
              </div>
            </Card>

            {/* Bonus by Level Bar Chart */}
            <Card title="Bonus Earned per Level">
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={unilevelLevels} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <XAxis dataKey="level" tick={{ fontSize: 12 }} tickFormatter={(v) => `L${v}`} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip formatter={(v) => formatCurrency(v)} cursor={{ fill: "rgba(0,169,145,0.1)" }} />
                  <Bar dataKey="bonusEarned" radius={[8, 8, 0, 0]}>
                    {unilevelLevels.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </Card>

            {/* Network Tree */}
            <Card title="Your Network Tree" className="h-[380px]">
              <div className="h-full rounded-lg overflow-hidden bg-gradient-to-b from-gray-50 to-white">
                {unilevelLevels.length > 0 ? (
                  <Tree
                    data={treeData}
                    translate={{ x: 150, y: 180 }}
                    zoom={0.75}
                    zoomable={false}
                    orientation="vertical"
                    pathFunc="step"
                    separation={{ siblings: 1, nonSiblings: 1.5 }}
                    nodeSize={{ x: 180, y: 90 }}
                    styles={{
                      links: { stroke: "#00A991", strokeWidth: 2.5 },
                      nodes: {
                        node: {
                          circle: { fill: "#00A991" },
                          name: { fill: "#111", fontWeight: "600", fontSize: 13 },
                        },
                        leafNode: { circle: { fill: "#34D399" } },
                      },
                    }}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-gray-400">
                    <Network className="h-12 w-12 mb-3" />
                    <p className="text-sm">No downline yet</p>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* MIDDLE COLUMN */}
          <div className="space-y-6">
            {/* Bonus Breakdown Pie Chart */}
            <Card title="Overall Bonus Breakdown" subtitle="Total Earnings: $10,210">
              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {pieData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(v) => formatCurrency(v)} />
                </PieChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-2 gap-2 text-xs mt-3">
                {pieData.map((item, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                    <span className="text-gray-700">{item.name}</span>
                    <span className="font-medium ml-auto">{formatCurrency(item.value)}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Volume Performance */}
            <Card title="Downline Volume Performance">
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={unilevelLevels}>
                  <XAxis dataKey="level" tickFormatter={(v) => `L${v}`} tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip formatter={(v) => formatCurrency(v)} />
                  <Bar dataKey="totalDeposit" fill="#10B981" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            {/* Leadership Progress */}
            <Card title="Leadership Progress">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Current Rank</span>
                  <span className="text-lg font-bold text-[#00A991] capitalize">
                    {userData.leadershipBonus?.currentRank}
                  </span>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Progress to Director</span>
                    <span>{userData.leadershipBonus?.progressToNextRank?.progressPercent}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-[#00A991] to-[#10B981] h-3 rounded-full transition-all"
                      style={{ width: `${userData.leadershipBonus?.progressToNextRank?.progressPercent}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {formatCurrency(userData.leadershipBonus?.progressToNextRank?.groupVolume)} /{" "}
                    {formatCurrency(userData.leadershipBonus?.progressToNextRank?.required)} GV
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {/* Detailed Level Table */}
            <Card title="Unilevel Level Details">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gradient-to-r from-[#00A991] to-[#10B981] text-white">
                    <tr>
                      <th className="p-3 text-left">Level</th>
                      <th className="p-3 text-left">Members</th>
                      <th className="p-3 text-left">Active</th>
                      <th className="p-3 text-left">Volume</th>
                      <th className="p-3 text-left">Bonus</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {unilevelLevels.map((lvl) => (
                      <tr key={lvl.level} className="hover:bg-gray-50 transition">
                        <td className="p-3 font-medium text-gray-900">Level {lvl.level}</td>
                        <td className="p-3">{lvl.members}</td>
                        <td className="p-3">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {lvl.activeMembers}
                          </span>
                        </td>
                        <td className="p-3 font-medium">{formatCurrency(lvl.totalDeposit)}</td>
                        <td className="p-3 font-bold text-[#00A991]">{formatCurrency(lvl.bonusEarned)}</td>
                      </tr>
                    ))}
                    <tr className="bg-yellow-50 font-bold">
                      <td colSpan={4} className="p-3 text-right">
                        Total Unilevel Bonus
                      </td>
                      <td className="p-3 text-[#00A991]">{formatCurrency(userData.totalUnilevelBonus)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Recent Bonus History */}
            <Card title="Recent Bonuses">
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {bonusHistory.length > 0 ? (
                  bonusHistory.slice(0, 5).map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`p-2 rounded-full ${
                            h.status === "approved" ? "bg-green-100" : "bg-yellow-100"
                          }`}
                        >
                          {h.status === "approved" ? (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          ) : (
                            <Clock className="h-4 w-4 text-yellow-600" />
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{h.type.replace(/_/g, " ")}</p>
                          <p className="text-xs text-gray-500">
                            {new Date(h.date).toLocaleDateString()} at{" "}
                            {new Date(h.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-[#00A991]">+{formatCurrency(h.amount)}</p>
                        <span
                          className={`text-xs px-2 py-1 rounded-full font-medium ${
                            h.status === "approved"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {h.status}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500 py-6 text-sm">No bonus activity yet</p>
                )}
              </div>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-xs text-gray-500">
          <p>Velox Capital © 2025 | Powered by Unilevel Network Engine</p>
        </div>
      </div>
    </div>
  );
};

export default Unilevel;
