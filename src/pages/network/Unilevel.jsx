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










import React, { useState } from "react";
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import Tree from "react-d3-tree";

// Dummy static data for the entire page
const dummyData = {
  name: "John Doe",
  rank: "Executive",
  pvp: 500,
  pgv: 75000,
  globalBonus: 1,
  income: 87.5,
  wallets: {
    deposit: 150,
    bull: 420,
    bear: 180,
    referral: 75,
    earnings: 600,
    bonus: 50,
    accountBalance: 1475,
  },
  downline: [
    {
      name: "Alice Smith",
      children: [
        {
          name: "Bob Johnson",
          children: [{ name: "Samuel" }, { name: "Chris" }],
        },
        {
          name: "Charlie Doe",
          children: [{ name: "Zara" }, { name: "Mike" }],
        },
      ],
    },
  ],
  bonusLevels: [
    { level: 1, members: 3, volume: 2500, revenue: 5 },
    { level: 2, members: 6, volume: 4800, revenue: 8 },
    { level: 3, members: 9, volume: 6900, revenue: 12 },
    { level: 4, members: 15, volume: 12000, revenue: 15 },
  ],
  bonusHistory: [
    { date: "2025-10-25", user: "Alice Smith", level: 1, volume: 150, bonus: 15 },
    { date: "2025-10-26", user: "Bob Johnson", level: 2, volume: 250, bonus: 25 },
    { date: "2025-10-27", user: "Charlie Doe", level: 3, volume: 350, bonus: 35 },
    { date: "2025-10-28", user: "Samuel", level: 4, volume: 450, bonus: 45 },
  ],
};

const Card = ({ title, children }) => (
  <div className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-2xl shadow-sm p-5">
    {title && <h3 className="font-semibold text-[#00A991] mb-3">{title}</h3>}
    {children}
  </div>
);

const Unilevel = () => {
  const [userData] = useState(dummyData);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 p-4">
      {/* ==== LEFT COLUMN ==== */}
      <div className="space-y-6">
        <Card title="Total Unilevel Bonus">
          <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            ${userData.income.toFixed(2)}
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
            <div>
              <p className="text-gray-500">Rank</p>
              <p className="font-semibold capitalize">{userData.rank}</p>
            </div>
            <div>
              <p className="text-gray-500">PVP</p>
              <p className="font-semibold">{userData.pvp}</p>
            </div>
            <div>
              <p className="text-gray-500">PGV</p>
              <p className="font-semibold">{userData.pgv}</p>
            </div>
            <div>
              <p className="text-gray-500">Global Bonus</p>
              <p className="font-semibold">{userData.globalBonus}%</p>
            </div>
          </div>
        </Card>

        <Card title="Bonus by Level">
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={userData.bonusLevels}>
              <XAxis dataKey="level" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="volume" fill="#00A991" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Weekly ROI">
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={userData.bonusHistory}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="bonus" stroke="#00A991" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* ==== MIDDLE COLUMN ==== */}
      <div className="space-y-">
        <Card title="Network Structure">
          <div className="h-[400px] text-gray-400">
            <Tree
              data={userData.downline}
              translate={{ x: 200, y: 200 }}
              zoom={0.8}
              orientation="vertical"
              pathFunc="step"
              styles={{
                links: { stroke: "#00A991" },
                nodes: {
                  node: {
                    circle: { fill: "#00A991", r: 10 },
                    name: { stroke: "none", fill: "#111" },
                  },
                },
              }}
            />
          </div>
        </Card>

        <Card title="Bonus Performance">
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={userData.bonusLevels}>
              <XAxis dataKey="level" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#00A991" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* ==== RIGHT COLUMN ==== */}
      <div className="space-y-6">
        <Card title="Bonus Breakdown">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 dark:border-neutral-800">
              <thead className="bg-gray-50 dark:bg-neutral-800 text-gray-600 dark:text-gray-300">
                <tr>
                  <th className="p-2 text-left">Level</th>
                  <th className="p-2 text-left">Members</th>
                  <th className="p-2 text-left">Group Volume</th>
                  <th className="p-2 text-left">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {userData.bonusLevels.map((lvl, i) => (
                  <tr key={i} className="border-t border-gray-100 dark:border-neutral-800">
                    <td className="p-2">{lvl.level}</td>
                    <td className="p-2">{lvl.members}</td>
                    <td className="p-2">${lvl.volume}</td>
                    <td className="p-2">{lvl.revenue}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card title="Bonus History">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 dark:border-neutral-800">
              <thead className="bg-gray-50 dark:bg-neutral-800 text-gray-600 dark:text-gray-300">
                <tr>
                  <th className="p-2 text-left">Date</th>
                  <th className="p-2 text-left">User</th>
                  <th className="p-2 text-left">Level</th>
                  <th className="p-2 text-left">Volume</th>
                  <th className="p-2 text-left">Bonus</th>
                </tr>
              </thead>
              <tbody>
                {userData.bonusHistory.map((h, i) => (
                  <tr key={i} className="border-t border-gray-100 dark:border-neutral-800">
                    <td className="p-2">{h.date}</td>
                    <td className="p-2">{h.user}</td>
                    <td className="p-2">{h.level}</td>
                    <td className="p-2">${h.volume}</td>
                    <td className="p-2">${h.bonus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Unilevel;


