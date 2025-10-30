// // src/pages/dashboard/network/LeadershipBonus.jsx
// import React from "react";
// import { Crown, Medal, Star } from "lucide-react";

// const ranks = [
//   { rank: "Diamond", bonus: "$50,000", color: "text-purple-600" },
//   { rank: "Platinum", bonus: "$25,000", color: "text-gray-600" },
//   { rank: "Gold", bonus: "$10,000", color: "text-yellow-600" },
//   { rank: "Silver", bonus: "$5,000", color: "text-gray-400" },
// ];

// export default function LeadershipBonus() {
//   return (
//     <div className="space-y-8">
//       <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900 dark:to-purple-900 p-8 rounded-2xl text-center">
//         <Crown size={48} className="mx-auto text-indigo-600 dark:text-indigo-400 mb-3" />
//         <h2 className="text-3xl font-bold text-indigo-800 dark:text-indigo-200">Leadership Bonus Pool</h2>
//         <p className="text-lg mt-2 text-indigo-700 dark:text-indigo-300">2% of company volume shared among top leaders</p>
//       </div>

//       <div className="space-y-4">
//         {ranks.map((r) => (
//           <div
//             key={r.rank}
//             className="flex items-center justify-between bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm hover:shadow-md transition"
//           >
//             <div className="flex items-center gap-3">
//               <Medal size={28} className={r.color} />
//               <div>
//                 <h3 className="font-bold text-lg">{r.rank} Leader</h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">Monthly qualification</p>
//               </div>
//             </div>
//             <div className="text-right">
//               <p className="text-2xl font-bold text-green-600">{r.bonus}</p>
//               <p className="text-xs text-gray-500">per month</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="bg-amber-50 dark:bg-amber-900 p-6 rounded-xl text-center">
//         <Star className="mx-auto text-amber-600 mb-2" size={28} />
//         <p className="font-semibold">Only 4 spots per rank — first come, first paid!</p>
//       </div>
//     </div>
//   );
// }









import React from 'react';

export default function Leadership() {
  const ranks = [
    { rank: 'Executive', refs: 3,  pv: 300,  gv: '1K',   perk: 'Entry prizes' },
    { rank: 'Silver',    refs: 6,  pv: '1K', gv: '5K',   perk: '50% Matching' },
    { rank: 'Gold',      refs: 12, pv: '3K', gv: '20K',  perk: 'Deeper unilevel' },
    { rank: 'Platinum',  refs: 24, pv: '10K',gv: '100K', perk: 'Enhanced residuals' },
    { rank: 'Diamond',   refs: 50, pv: '30K',gv: '500K', perk: 'Leadership pool' },
    { rank: 'Ambassador',refs: 100,pv: '100K',gv: '2M',   perk: 'Uncapped 2%' },
    { rank: 'Global Ambassador', refs: '200+', pv: '500K+', gv: '10M+', perk: 'Global shares' },
  ];

  return (
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-4 text-green-600">Leadership / Ranks Bonus</h3>
      <p className="mb-4 text-gray-700">
        Advance through 7 ranks via PV and GV. Unlock leadership pools, matching, and prizes from withdrawal fees.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-green-100">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Min Referrals</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Min PV</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Min GV</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Perk</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {ranks.map((r, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm font-medium text-gray-900">{r.rank}</td>
                <td className="px-4 py-2 text-sm text-gray-500">{r.refs}</td>
                <td className="px-4 py-2 text-sm text-gray-500">{r.pv}</td>
                <td className="px-4 py-2 text-sm text-gray-500">{r.gv}</td>
                <td className="px-4 py-2 text-sm text-purple-600">{r.perk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded">
        <p className="text-sm text-red-800"><strong>Warning:</strong> Trading involves risk. This UI is for educational purposes only.</p>
      </div>
    </div>
  );
}