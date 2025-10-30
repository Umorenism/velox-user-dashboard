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



import React from 'react';

export default function FirstStart() {
  const rows = [
    { pkg: '$250',   upfront: '$125',   add: 'Up to $125',   total: 'Up to $250' },
    { pkg: '$500',   upfront: '$250',   add: 'Up to $250',   total: 'Up to $500' },
    { pkg: '$1,000', upfront: '$500',   add: 'Up to $500',   total: 'Up to $1,000' },
    { pkg: '$10,000',upfront: '$5,000', add: 'Up to $5,000', total: 'Up to $10,000' },
    { pkg: '$50,000',upfront: '$25,000',add: 'Up to $25,000',total: 'Up to $50,000' },
  ];

  return (
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-4 text-green-600">First Start Bonus</h3>
      <p className="mb-4 text-gray-700">
        Earn immediate commissions on referrals who purchase a Trade Package. 50% upfront, with the rest released as ROI is withdrawn.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-green-100">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Package</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Upfront (50%)</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Max Additional</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Potential</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {rows.map((r, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-900">{r.pkg}</td>
                <td className="px-4 py-2 text-sm text-green-600">{r.upfront}</td>
                <td className="px-4 py-2 text-sm text-blue-600">{r.add}</td>
                <td className="px-4 py-2 text-sm font-medium text-purple-600">{r.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-sm text-yellow-800"><strong>Note:</strong> Paid in USD via Bitcoin. Requires active package.</p>
      </div>
    </div>
  );
}