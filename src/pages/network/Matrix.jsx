// // src/pages/dashboard/network/Matrix.jsx
// import React from "react";
// import { Grid3x3, Lock, Users } from "lucide-react";

// export default function Matrix() {
//   return (
//     <div className="space-y-8">
//       <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 p-8 rounded-2xl text-center">
//         <Grid3x3 size={48} className="mx-auto text-purple-600 dark:text-purple-400 mb-3" />
//         <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200">3x10 Forced Matrix</h2>
//         <p className="text-lg mt-2 text-purple-700 dark:text-purple-300">Spillover + Compression = Fast Growth</p>
//       </div>

//       <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
//         <h3 className="font-bold text-lg mb-4 text-center">Matrix Structure</h3>
//         <div className="grid grid-cols-3 gap-3 text-center text-sm">
//           <div className="col-span-3 bg-purple-100 dark:bg-purple-800 p-3 rounded">You (Level 1)</div>
//           <div className="bg-purple-50 dark:bg-purple-700 p-3 rounded">3</div>
//           <div className="bg-purple-50 dark:bg-purple-700 p-3 rounded">3</div>
//           <div className="bg-purple-50 dark:bg-purple-700 p-3 rounded">3</div>
//           <div className="bg-purple-50 dark:bg-purple-700 p-3 rounded">9</div>
//           <div className="bg-purple-50 dark:bg-purple-700 p-3 rounded">9</div>
//           <div className="bg-purple-50 dark:bg-purple-700 p-3 rounded">9</div>
//           <div className="col-span-3 text-xs text-gray-600 dark:text-gray-400 mt-2">
//             Total: <strong>29,523</strong> positions
//           </div>
//         </div>
//       </div>

//       <div className="grid md:grid-cols-2 gap-6">
//         <div className="bg-green-50 dark:bg-green-900 p-5 rounded-xl">
//           <Lock className="text-green-600 mb-2" size={24} />
//           <h4 className="font-bold">Forced Placement</h4>
//           <p className="text-sm text-gray-700 dark:text-gray-300">New members fill from top-left</p>
//         </div>
//         <div className="bg-blue-50 dark:bg-blue-900 p-5 rounded-xl">
//           <Users className="text-blue-600 mb-2" size={24} />
//           <h4 className="font-bold">Spillover</h4>
//           <p className="text-sm text-gray-700 dark:text-gray-300">Upline helps fill your matrix</p>
//         </div>
//       </div>
//     </div>
//   );
// }







import React from 'react';

export default function Matrix() {
  return (
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-4 text-green-600">Matrix Bonus</h3>
      <p className="mb-4 text-gray-700">
        Forced 3x10 matrix for passive residuals. Spillover from wider levels fills your matrix. From 20% withdrawal fees.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow">
          <h4 className="font-semibold text-gray-900">Width</h4>
          <p className="text-sm text-gray-600">3 recruits per level</p>
        </div>
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow">
          <h4 className="font-semibold text-gray-900">Depth</h4>
          <p className="text-sm text-gray-600">10 levels deep</p>
        </div>
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow">
          <h4 className="font-semibold text-gray-900">Payout</h4>
          <p className="text-sm text-gray-600">10-50% pool share based on rank</p>
        </div>
      </div>

      <div className="mt-4 p-4 bg-purple-50 border border-purple-200 rounded">
        <p className="text-sm text-purple-800"><strong>Bonus:</strong> 10% Matching on direct referrals' matrix earnings.</p>
      </div>
    </div>
  );
}