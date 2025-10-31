// import React from "react";
// import { CheckCircle, Copy } from "lucide-react";

// export default function Matrix() {
//   return (
//     <div className="min-h-screen bg-gray-50 flex justify-center items-start p-6">
//       <div className="bg-white shadow-md rounded-xl w-full max-w-6xl grid grid-cols-1 lg:grid-cols-4 gap-6 p-6">
//         {/* Left Sidebar */}
//         <div className="col-span-1 border-r border-gray-200 pr-4 flex flex-col justify-between">
//           <div>
//             <h2 className="text-sm font-medium text-gray-500 mb-2">MY MATRIX</h2>
//             <h3 className="text-xl font-semibold text-gray-900 mb-1">VIP</h3>
//             <p className="text-sm text-gray-500 mb-6">User ID: 123456</p>

//             {/* Wallet Balance */}
//             <div className="mb-4">
//               <p className="text-gray-500 text-sm">Wallet Balance</p>
//               <p className="text-lg font-semibold">250 <span className="text-gray-500 text-sm">USDT</span></p>
//             </div>

//             {/* Active Package */}
//             <div className="mb-4">
//               <p className="text-gray-500 text-sm">Active Package</p>
//               <p className="text-lg font-semibold">$50k</p>
//             </div>

//             {/* Total Team */}
//             <div className="mb-4">
//               <p className="text-gray-500 text-sm">Total Team</p>
//               <p className="text-lg font-semibold">2,756</p>
//             </div>

//             {/* Referral Link */}
//             <div className="mb-6">
//               <p className="text-gray-500 text-sm mb-1">Referral Link</p>
//               <div className="flex items-center bg-gray-100 rounded-md px-2 py-1 text-sm">
//                 <span className="truncate text-gray-600">
//                   https://valu.co/matrixuser
//                 </span>
//                 <button className="ml-2 text-gray-400 hover:text-gray-600">
//                   <Copy size={14} />
//                 </button>
//               </div>
//             </div>

//             {/* QR Code */}
//             <div className="mb-6">
//               <p className="text-gray-500 text-sm mb-2">QR Code for direct deposit</p>
//               <div className="flex justify-center">
//                 <img
//                   src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://valu.co/matrixuser"
//                   alt="QR Code"
//                   className="rounded-lg border border-gray-200"
//                 />
//               </div>
//             </div>

//             {/* KYC Status */}
//             <div className="flex items-center gap-2 mb-4">
//               <p className="text-gray-500 text-sm">KYC Status</p>
//               <CheckCircle size={16} className="text-green-500" />
//               <span className="text-sm font-medium text-gray-700">Verified</span>
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="border-t border-gray-200 pt-4 text-xs text-gray-400">
//             © RebraCotes
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="col-span-3 pl-4">
//           {/* AI Trading Section */}
//           <div className="flex justify-between items-start mb-6">
//             <div>
//               <h3 className="text-sm font-semibold text-gray-700 uppercase mb-2">AI Trading</h3>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
//                 <div>
//                   <p className="text-gray-500">Monthly ROI</p>
//                   <p className="font-semibold">7.5%</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-500">Equity Growth</p>
//                   <p className="font-semibold">18.2%</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-500">Drawdown</p>
//                   <p className="font-semibold">5.7%</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-500">Profit Share</p>
//                   <p className="font-semibold">50/50</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Matrix Tree Diagram (placeholder circles) */}
//           <div className="w-full flex flex-col items-center mb-10">
//             {/* Top Node */}
//             <div className="w-10 h-10 bg-gray-200 rounded-full mb-4"></div>
//             {/* Second Row */}
//             <div className="flex gap-6 mb-4">
//               {[1, 2].map((i) => (
//                 <div key={i} className="w-10 h-10 bg-gray-200 rounded-full"></div>
//               ))}
//             </div>
//             {/* Third Row */}
//             <div className="flex gap-4 mb-4">
//               {[1, 2, 3, 4].map((i) => (
//                 <div key={i} className="w-10 h-10 bg-gray-200 rounded-full"></div>
//               ))}
//             </div>
//             {/* Fourth Row */}
//             <div className="flex gap-3">
//               {[1, 2, 3, 4, 5].map((i) => (
//                 <div key={i} className="w-10 h-10 bg-gray-200 rounded-full"></div>
//               ))}
//             </div>
//           </div>

//           {/* Team Performance Table */}
//           <div className="overflow-x-auto mb-8">
//             <table className="min-w-full text-sm text-left border-t border-gray-200">
//               <thead>
//                 <tr className="text-gray-500">
//                   <th className="py-3">Level</th>
//                   <th className="py-3">Members</th>
//                   <th className="py-3">Total Deposit (USDT)</th>
//                   <th className="py-3">% Active Per Level</th>
//                 </tr>
//               </thead>
//               <tbody className="text-gray-700">
//                 {[
//                   { level: "Level 1", members: 3, deposit: "150,000", active: "8.2%" },
//                   { level: "Level 2", members: 9, deposit: "420,000", active: "9.5%" },
//                   { level: "Level 3", members: 27, deposit: "1,080,000", active: "9.0%" },
//                   { level: "Level 4", members: 5, deposit: "150,000", active: "7.5%" },
//                 ].map((row, i) => (
//                   <tr key={i} className="border-t border-gray-100">
//                     <td className="py-3">{row.level}</td>
//                     <td className="py-3">{row.members}</td>
//                     <td className="py-3">{row.deposit}</td>
//                     <td className="py-3">{row.active}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Summary Section */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//             <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
//               <p className="text-sm text-gray-500 mb-1">Total Earnings</p>
//               <p className="text-xl font-semibold">$1,250</p>
//             </div>
//             <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
//               <p className="text-sm text-gray-500 mb-1">Withdrawable Profit</p>
//               <p className="text-xl font-semibold">$890</p>
//             </div>
//             <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
//               <p className="text-sm text-gray-500 mb-1">Active Investment</p>
//               <p className="text-xl font-semibold">$500</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from 'react'
// import MatrixGrid from '../../utlis/MatrixGrid'
// import MatrixSidebar from '../../utlis/MatrixSidebar'
// import AnalyticsPanel from '../../utlis/AnalyticPanel'

// export default function Matrix() {
//   return (
//     <div className='flex'>
//       <div className='w-1/2'>
//         <MatrixSidebar/>
//       </div>
//       <div className='w-1/2'>
//       <div className='flex'>
//         <MatrixGrid/>

//       </div>

//       </div>
//     </div>
//   )
// }

// 'use client';

// import React from 'react';
// import { QrCode, CheckCircle, ChevronDown } from 'lucide-react';

// export default function Matrix() {
//   return (
//     <>
//       <div className="min-h-screen bg-gray-50 p-4 md:p-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             {/* Left Column */}
//             <div className="lg:col-span-1 space-y-6">
//               {/* My Matrix Card */}
//               <div className="bg-white rounded-2xl p-6 shadow-sm">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-1">MY MATRIX</h3>
//                 <div className="flex items-center gap-2 mb-4">
//                   <span className="text-2xl font-bold text-amber-500">Rank</span>
//                   <span className="text-2xl font-bold text-gray-900">VIP</span>
//                 </div>
//                 <p className="text-sm text-gray-500 mb-1">User ID: 123456</p>

//                 <div className="space-y-4 mt-6">
//                   <div>
//                     <p className="text-sm text-gray-500">Wallet Balance</p>
//                     <p className="text-2xl font-bold text-gray-900">250 USDT</p>
//                   </div>

//                   <div>
//                     <p className="text-sm text-gray-500">Active Package</p>
//                     <p className="text-2xl font-bold text-green-600">$50 K</p>
//                   </div>

//                   <div>
//                     <p className="text-sm text-gray-500">Total Team</p>
//                     <p className="text-2xl font-bold text-gray-900">2,756</p>
//                   </div>
//                 </div>

//                 <div className="mt-6">
//                   <p className="text-sm text-gray-500 mb-2">Referral Link</p>
//                   <div className="flex items-center gap-2">
//                     <input
//                       type="text"
//                       value="https://example.com/refcode"
//                       readOnly
//                       className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50"
//                     />
//                     <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
//                       Copy
//                     </button>
//                   </div>
//                 </div>

//                 <div className="mt-6">
//                   <p className="text-sm text-gray-500 mb-3">QR Code</p>
//                   <p className="text-xs text-gray-400 mb-3">for direct deposit</p>
//                   <div className="flex justify-center p-4 bg-gray-50 rounded-xl">
//                     <div className="w-32 h-32 bg-gray-200 border-2 border-dashed rounded-xl flex items-center justify-center">
//                       <QrCode className="w-16 h-16 text-gray-400" />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-6 pt-6 border-t border-gray-200">
//                   <p className="text-sm font-medium text-gray-900 mb-3">KYC Status</p>
//                   <div className="flex items-center gap-2">
//                     <CheckCircle className="w-5 h-5 text-green-500" />
//                     <span className="text-sm text-green-600 font-medium">Verified</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Middle Column - Matrix Tree */}
//             <div className="lg:col-span-1">
//               <div className="bg-white rounded-2xl p-6 shadow-sm">
//                 <div className="flex items-center justify-between mb-6">
//                   <div className="flex-1"></div>
//                   <div className="flex-1 flex justify-center">
//                     <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
//                       <div className="w-12 h-12 bg-white rounded-full"></div>
//                     </div>
//                   </div>
//                   <div className="flex-1 flex justify-end">
//                     <h3 className="text-lg font-bold text-gray-900">AI TRADING</h3>
//                   </div>
//                 </div>

//                 <div className="space-y-6">
//                   {/* Level 1 */}
//                   <div className="flex justify-center gap-4">
//                     {[1, 2, 3].map((i) => (
//                       <div key={i} className="w-12 h-12 bg-gray-200 rounded-full"></div>
//                     ))}
//                   </div>

//                   {/* Level 2 */}
//                   <div className="flex justify-center gap-4">
//                     {[1, 2, 3, 4, 5].map((i) => (
//                       <div key={i} className="w-12 h-12 bg-gray-200 rounded-full"></div>
//                     ))}
//                   </div>

//                   {/* Level 3 */}
//                   <div className="flex justify-center gap-4 flex-wrap">
//                     {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
//                       <div key={i} className="w-12 h-12 bg-gray-200 rounded-full"></div>
//                     ))}
//                   </div>

//                   {/* Level 4 */}
//                   <div className="flex justify-center gap-4 flex-wrap">
//                     {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
//                       <div key={i} className="w-12 h-12 bg-gray-100 rounded-full"></div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* AI Trading Stats */}
//                 <div className="mt-8 space-y-4">
//                   <div>
//                     <p className="text-sm text-gray-500">Monthly ROI</p>
//                     <p className="text-2xl font-bold text-gray-900">7.5%</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Equity Growth</p>
//                     <p className="text-2xl font-bold text-green-600">18.2%</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Drawdown</p>
//                     <p className="text-xl font-bold text-red-600">5.7%</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Profit Share</p>
//                     <p className="text-xl font-bold text-gray-900">50/50</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column */}
//             <div className="lg:col-span-1 space-y-6">
//               {/* Team Performance */}
//               <div className="bg-white rounded-2xl p-6 shadow-sm">
//                 <h3 className="text-lg font-bold text-gray-900 mb-6">TEAM PERFORMANCE</h3>

//                 <div className="overflow-x-auto">
//                   <table className="w-full">
//                     <thead>
//                       <tr className="text-xs text-gray-500 border-b border-gray-200">
//                         <th className="text-left py-3 font-medium">Level</th>
//                         <th className="text-center py-3 font-medium">Members</th>
//                         <th className="text-right py-3 font-medium">Total Deposit (USDT)</th>
//                         <th className="text-center py-3 font-medium">Active %</th>
//                         <th className="text-right py-3 font-medium">Active Per Level</th>
//                       </tr>
//                     </thead>
//                     <tbody className="text-sm">
//                       <tr className="border-b border-gray-100">
//                         <td className="py-3">Level 1</td>
//                         <td className="text-center py-3">3</td>
//                         <td className="text-right py-3">150,000</td>
//                         <td className="text-center py-3">100%</td>
//                         <td className="text-right py-3 text-green-600 font-medium">8.2%</td>
//                       </tr>
//                       <tr className="border-b border-gray-100">
//                         <td className="py-3">Level 2</td>
//                         <td className="text-center py-3">9</td>
//                         <td className="text-right py-3">420,000</td>
//                         <td className="text-center py-3">95%</td>
//                         <td className="text-right py-3 text-green-600 font-medium">7.5%</td>
//                       </tr>
//                       <tr className="border-b border-gray-100">
//                         <td className="py-3">Level 3</td>
//                         <td className="text-center py-3">27</td>
//                         <td className="text-right py-3">1,080,000</td>
//                         <td className="text-center py-3">90%</td>
//                         <td className="text-right py-3 text-green-600 font-medium">7.5%</td>
//                       </tr>
//                       <tr>
//                         <td className="py-3">Level 4</td>
//                         <td className="text-center py-3">5</td>
//                         <td className="text-right py-3">150,000</td>
//                         <td className="text-center py-3">80%</td>
//                         <td className="text-right py-3 text-green-600 font-medium">7.5%</td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>

//               {/* Earnings Summary */}
//               <div className="bg-white rounded-2xl p-6 shadow-sm">
//                 <div className="grid grid-cols-3 gap-4 text-center">
//                   <div>
//                     <p className="text-sm text-gray-500 mb-1">Total Earnings</p>
//                     <p className="text-2xl font-bold text-gray-900">$1,250</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500 mb-1">Withdrawable Profit</p>
//                     <p className="text-2xl font-bold text-green-600">$890</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500 mb-1">Active Investment</p>
//                     <p className="text-xl font-bold text-gray-900">$500</p>
//                   </div>
//                 </div>

//                 <div className="mt-6 pt-6 border-t border-gray-200">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-2">
//                       <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
//                       <span className="text-sm text-gray-600">RebaCoates</span>
//                     </div>
//                     <ChevronDown className="w-4 h-4 text-gray-400" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// import React from "react";
// import { QrCode, CheckCircle, ChevronDown } from "lucide-react";
// export default function Matrix() {
//   return (
//     <div className="min-h-screen bg-gray-50 p-4 md:p-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           <div className=" w-full ">
//             <div className="lg:col-span-1 space-y-6">
//               {/* My Matrix Card */}
//               <div className="bg-white rounded-2xl p-6 shadow-sm">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-1">
//                   MY MATRIX
//                 </h3>
//                 <div className="flex items-center gap-2 mb-4">
//                   <span className="text-2xl font-bold text-amber-500">
//                     Rank
//                   </span>
//                   <span className="text-2xl font-bold text-gray-900">VIP</span>
//                 </div>
//                 <p className="text-sm text-gray-500 mb-1">User ID: 123456</p>

//                 <div className="space-y-4 mt-6">
//                   <div>
//                     <p className="text-sm text-gray-500">Wallet Balance</p>
//                     <p className="text-2xl font-bold text-gray-900">250 USDT</p>
//                   </div>

//                   <div>
//                     <p className="text-sm text-gray-500">Active Package</p>
//                     <p className="text-2xl font-bold text-green-600">$50 K</p>
//                   </div>

//                   <div>
//                     <p className="text-sm text-gray-500">Total Team</p>
//                     <p className="text-2xl font-bold text-gray-900">2,756</p>
//                   </div>
//                 </div>

//                 <div className="mt-6">
//                   <p className="text-sm text-gray-500 mb-2">Referral Link</p>
//                   <div className="flex items-center gap-2">
//                     <input
//                       type="text"
//                       value="https://example.com/refcode"
//                       readOnly
//                       className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50"
//                     />
//                     <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
//                       Copy
//                     </button>
//                   </div>
//                 </div>

//                 <div className="mt-6">
//                   <p className="text-sm text-gray-500 mb-3">QR Code</p>
//                   <p className="text-xs text-gray-400 mb-3">
//                     for direct deposit
//                   </p>
//                   <div className="flex justify-center p-4 bg-gray-50 rounded-xl">
//                     <div className="w-32 h-32 bg-gray-200 border-2 border-dashed rounded-xl flex items-center justify-center">
//                       <QrCode className="w-16 h-16 text-gray-400" />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-6 pt-6 border-t border-gray-200">
//                   <p className="text-sm font-medium text-gray-900 mb-3">
//                     KYC Status
//                   </p>
//                   <div className="flex items-center gap-2">
//                     <CheckCircle className="w-5 h-5 text-green-500" />
//                     <span className="text-sm text-green-600 font-medium">
//                       Verified
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="w-full bg-white rounded-2xl p-6 shadow-sm">
//             <div className="flex">
//               <div className="w-[90%]">
//                 <div className="lg:col-span-1">
//               <div className="bg-white8 p-6 ">
//                 <div className="flex items-center justify-between mb-6">
//                   <div className="flex-1"></div>
//                   <div className="flex-1 flex justify-center">
//                     <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
//                       <div className="w-12 h-12 bg-white rounded-full"></div>
//                     </div>
//                   </div>
//                   <div className="flex-1 flex justify-end">

//                   </div>
//                 </div>

//                 <div className="space-y-6">
//                   {/* Level 1 */}
//                   <div className="flex justify-center gap-4">
//                     {[1, 2, 3].map((i) => (
//                       <div key={i} className="w-12 h-12 bg-gray-200 rounded-full"></div>
//                     ))}
//                   </div>

//                   {/* Level 2 */}
//                   <div className="flex justify-center gap-4">
//                     {[1, 2, 3, 4, 5].map((i) => (
//                       <div key={i} className="w-12 h-12 bg-gray-200 rounded-full"></div>
//                     ))}
//                   </div>

//                   {/* Level 3 */}
//                   <div className="flex justify-center gap-4 flex-wrap">
//                     {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
//                       <div key={i} className="w-12 h-12 bg-gray-200 rounded-full"></div>
//                     ))}
//                   </div>

//                   {/* Level 4 */}
//                   <div className="flex justify-center gap-4 flex-wrap">
//                     {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
//                       <div key={i} className="w-12 h-12 bg-gray-100 rounded-full"></div>
//                     ))}
//                   </div>
//                 </div>

//               </div>
//             </div>

//               </div>
//               <div className="w-[30%]">
//                 {/* AI Trading Stats */}
//                 <div className="mt-8 space-y-4 bg-white rounded-2xl p-6 shadow-sm">
//                   <div>
//                     <p className="text-sm text-gray-500">Monthly ROI</p>
//                     <p className="text-2xl font-bold text-gray-900">7.5%</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Equity Growth</p>
//                     <p className="text-2xl font-bold text-green-600">18.2%</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Drawdown</p>
//                     <p className="text-xl font-bold text-red-600">5.7%</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Profit Share</p>
//                     <p className="text-xl font-bold text-gray-900">50/50</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="lg:col-span-1 space-y-6">
//               {/* Team Performance */}
//               <div className="bg-white rounded-2xl p-6 shadow-sm">
//                 <h3 className="text-lg font-bold text-gray-900 mb-6">
//                   TEAM PERFORMANCE
//                 </h3>

//                 <div className="overflow-x-auto">
//                   <table className="w-full">
//                     <thead>
//                       <tr className="text-xs text-gray-500 border-b border-gray-200">
//                         <th className="text-left py-3 font-medium">Level</th>
//                         <th className="text-center py-3 font-medium">
//                           Members
//                         </th>
//                         <th className="text-right py-3 font-medium">
//                           Total Deposit (USDT)
//                         </th>
//                         <th className="text-center py-3 font-medium">
//                           Active %
//                         </th>
//                         <th className="text-right py-3 font-medium">
//                           Active Per Level
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody className="text-sm">
//                       <tr className="border-b border-gray-100">
//                         <td className="py-3">Level 1</td>
//                         <td className="text-center py-3">3</td>
//                         <td className="text-right py-3">150,000</td>
//                         <td className="text-center py-3">100%</td>
//                         <td className="text-right py-3 text-green-600 font-medium">
//                           8.2%
//                         </td>
//                       </tr>
//                       <tr className="border-b border-gray-100">
//                         <td className="py-3">Level 2</td>
//                         <td className="text-center py-3">9</td>
//                         <td className="text-right py-3">420,000</td>
//                         <td className="text-center py-3">95%</td>
//                         <td className="text-right py-3 text-green-600 font-medium">
//                           7.5%
//                         </td>
//                       </tr>
//                       <tr className="border-b border-gray-100">
//                         <td className="py-3">Level 3</td>
//                         <td className="text-center py-3">27</td>
//                         <td className="text-right py-3">1,080,000</td>
//                         <td className="text-center py-3">90%</td>
//                         <td className="text-right py-3 text-green-600 font-medium">
//                           7.5%
//                         </td>
//                       </tr>
//                       <tr>
//                         <td className="py-3">Level 4</td>
//                         <td className="text-center py-3">5</td>
//                         <td className="text-right py-3">150,000</td>
//                         <td className="text-center py-3">80%</td>
//                         <td className="text-right py-3 text-green-600 font-medium">
//                           7.5%
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>

//               {/* Earnings Summary */}
//               <div className="bg-white rounded-2xl p-5 shadow-sm">
//                 <div className="grid grid-cols-3 gap-4 text-center">
//                   <div>
//                     <p className="text-sm text-gray-500 mb-1">Total Earnings</p>
//                     <p className="text-2xl font-bold text-gray-900">$1,250</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500 mb-1">
//                       Withdrawable Profit
//                     </p>
//                     <p className="text-2xl font-bold text-green-600">$890</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500 mb-1">
//                       Active Investment
//                     </p>
//                     <p className="text-xl font-bold text-gray-900">$500</p>
//                   </div>
//                 </div>

//                 <div className="mt-6 pt-6 border-t border-gray-200">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-2">
//                       <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
//                       <span className="text-sm text-gray-600">RebaCoates</span>
//                     </div>
//                     <ChevronDown className="w-4 h-4 text-gray-400" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import { QrCode, CheckCircle, ChevronDown } from "lucide-react";

// export default function Matrix() {
//   return (
//     <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {/* LEFT COLUMN - My Matrix */}
//           <div className="w-full">
//             <div className="bg-white rounded-2xl p-6 shadow-sm">
//               <h3 className="text-lg font-semibold text-gray-900 mb-1">MY MATRIX</h3>
//               <div className="flex items-center gap-2 mb-4">
//                 <span className="text-2xl font-bold text-amber-500">Rank</span>
//                 <span className="text-2xl font-bold text-gray-900">VIP</span>
//               </div>
//               <p className="text-sm text-gray-500 mb-1">User ID: 123456</p>

//               <div className="space-y-4 mt-6">
//                 <div>
//                   <p className="text-sm text-gray-500">Wallet Balance</p>
//                   <p className="text-2xl font-bold text-gray-900">250 USDT</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Active Package</p>
//                   <p className="text-2xl font-bold text-green-600">$50 K</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Total Team</p>
//                   <p className="text-2xl font-bold text-gray-900">2,756</p>
//                 </div>
//               </div>

//               <div className="mt-6">
//                 <p className="text-sm text-gray-500 mb-2">Referral Link</p>
//                 <div className="flex items-center gap-2">
//                   <input
//                     type="text"
//                     value="https://example.com/refcode"
//                     readOnly
//                     className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50"
//                   />
//                   <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
//                     Copy
//                   </button>
//                 </div>
//               </div>

//               <div className="mt-6">
//                 <p className="text-sm text-gray-500 mb-1">QR Code</p>
//                 <p className="text-xs text-gray-400 mb-3">for direct deposit</p>
//                 <div className="flex justify-center p-4 bg-gray-50 rounded-xl">
//                   <div className="w-32 h-32 bg-gray-200 border-2 border-dashed rounded-xl flex items-center justify-center">
//                     <QrCode className="w-16 h-16 text-gray-400" />
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-6 pt-6 border-t border-gray-200">
//                 <p className="text-sm font-medium text-gray-900 mb-3">KYC Status</p>
//                 <div className="flex items-center gap-2">
//                   <CheckCircle className="w-5 h-5 text-green-500" />
//                   <span className="text-sm text-green-600 font-medium">Verified</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT COLUMN - Matrix Tree + Stats + Team + Earnings */}
//           <div className="w-full space-y-6 bg-white">
//             {/* Matrix Tree + AI Trading */}
//             <div className="bg-white rounded-2xl p-6 ">
//               <div className="flex flex-col lg:flex-row gap-6">
//                 {/* Matrix Tree (70%) */}
//                 <div className="flex-1 lg:w-[70%]">
//                   <div className="flex items-center justify-between mb-6">
//                     <div className="flex-1"></div>
//                     <div className="flex-1 flex justify-center">
//                       <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center shadow-lg">
//                         <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
//                       </div>
//                     </div>
//                     <div className="flex-1 flex justify-end">

//                     </div>
//                   </div>

//                   <div className="space-y-5">
//                     {/* Level 1 */}
//                     <div className="flex justify-center gap-3">
//                       {[1, 2, 3].map((i) => (
//                         <div key={i} className="w-12 h-12 bg-gray-300 rounded-md shadow-sm"></div>
//                       ))}
//                     </div>

//                     {/* Level 2 */}
//                     <div className="flex justify-center gap-3">
//                       {[1, 2, 3, 4, 5,6].map((i) => (
//                         <div key={i} className="w-12 h-12 bg-gray-300 rounded-md shadow-sm"></div>
//                       ))}
//                     </div>

//                     {/* Level 3 */}
//                     <div className="flex justify-center gap-3 flex-wrap">
//                       {Array.from({ length: 6 }, (_, i) => (
//                         <div key={i} className="w-12 h-12 bg-gray-300 rounde-md shadow-sm"></div>
//                       ))}
//                     </div>

//                     {/* Level 4 */}
//                     <div className="flex justify-center gap-3 flex-wrap">
//                       {Array.from({ length: 6 }, (_, i) => (
//                         <div key={i} className="w-12 h-12 bg-gray-200 rounded-md shadow-sm"></div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* AI Trading Stats (30%) */}
//                 <div className="lg:w-[30%] shadow-md border shawdow-md flex flex-col justify-center items-center rounded-md">
//                   <div className="space-y-4">
//                     <div>
//                       <h3 className="text-lg font-bold text-gray-900">AI TRADING</h3>
//                       <p className="text-sm text-gray-500">Monthly ROI</p>
//                       <p className="text-2xl font-bold text-gray-900">7.5%</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Equity Growth</p>
//                       <p className="text-2xl font-bold text-green-600">18.2%</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Drawdown</p>
//                       <p className="text-xl font-bold text-red-600">5.7%</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Profit Share</p>
//                       <p className="text-xl font-bold text-gray-900">50/50</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Team Performance */}
//             <div className="bg-white rounded-2xl p-6 shadow-sm">
//               <h3 className="text-lg font-bold text-gray-900 mb-6">TEAM PERFORMANCE</h3>
//               <div className="overflow-x-auto">
//                 <table className="w-full text-sm">
//                   <thead>
//                     <tr className="text-xs text-gray-500 border-b border-gray-200">
//                       <th className="text-left py-3 font-medium">Level</th>
//                       <th className="text-center py-3 font-medium">Members</th>
//                       <th className="text-right py-3 font-medium">Total Deposit (USDT)</th>
//                       <th className="text-center py-3 font-medium">Active %</th>
//                       <th className="text-right py-3 font-medium">Active Per Level</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr className="border-b border-gray-100">
//                       <td className="py-3">Level 1</td>
//                       <td className="text-center py-3">3</td>
//                       <td className="text-right py-3">150,000</td>
//                       <td className="text-center py-3">100%</td>
//                       <td className="text-right py-3 text-green-600 font-medium">8.2%</td>
//                     </tr>
//                     <tr className="border-b border-gray-100">
//                       <td className="py-3">Level 2</td>
//                       <td className="text-center py-3">9</td>
//                       <td className="text-right py-3">420,000</td>
//                       <td className="text-center py-3">95%</td>
//                       <td className="text-right py-3 text-green-600 font-medium">7.5%</td>
//                     </tr>
//                     <tr className="border-b border-gray-100">
//                       <td className="py-3">Level 3</td>
//                       <td className="text-center py-3">27</td>
//                       <td className="text-right py-3">1,080,000</td>
//                       <td className="text-center py-3">90%</td>
//                       <td className="text-right py-3 text-green-600 font-medium">7.5%</td>
//                     </tr>
//                     <tr>
//                       <td className="py-3">Level 4</td>
//                       <td className="text-center py-3">5</td>
//                       <td className="text-right py-3">150,000</td>
//                       <td className="text-center py-3">80%</td>
//                       <td className="text-right py-3 text-green-600 font-medium">7.5%</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* Earnings Summary */}
//             <div className="bg-white rounded-2xl p-6 shadow-sm">
//               <div className="grid grid-cols-3 gap-4 text-center">
//                 <div>
//                   <p className="text-sm text-gray-500 mb-1">Total Earnings</p>
//                   <p className="text-2xl font-bold text-gray-900">$1,250</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500 mb-1">Withdrawable Profit</p>
//                   <p className="text-2xl font-bold text-green-600">$890</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500 mb-1">Active Investment</p>
//                   <p className="text-xl font-bold text-gray-900">$500</p>
//                 </div>
//               </div>

//               <div className="mt-6 pt-6 border-t border-gray-200">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
//                     <span className="text-sm text-gray-600">RebaCoates</span>
//                   </div>
//                   <ChevronDown className="w-4 h-4 text-gray-400" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import { QrCode, CheckCircle, ChevronDown } from "lucide-react";

// export default function Matrix() {
//   return (
//     <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
//       <div className="max-w-7xl mx-auto">
//         {/* GRID LAYOUT - Responsive */}
//         <div className="grid grid-cols-1 lg:grid-cols-[30%_1fr] gap-6 items-stretch">
//           {/* LEFT COLUMN */}
//           <div className="w-full">
//             <div className="bg-white rounded-2xl p-6 shadow-sm h-full flex flex-col">
//               <h3 className="text-lg font-semibold text-gray-900 mb-1">
//                 MY MATRIX
//               </h3>

//               <div className="flex items-center gap-2 mb-4">
//                 <span className="text-2xl font-bold text-amber-500">Rank</span>
//                 <span className="text-2xl font-bold text-gray-900">VIP</span>
//               </div>

//               <p className="text-sm text-gray-500 mb-1">User ID: 123456</p>

//               <div className="space-y-4 mt-6">
//                 <div>
//                   <p className="text-sm text-gray-500">Wallet Balance</p>
//                   <p className="text-2xl font-bold text-gray-900">250 USDT</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Active Package</p>
//                   <p className="text-2xl font-bold text-green-600">$50 K</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Total Team</p>
//                   <p className="text-2xl font-bold text-gray-900">2,756</p>
//                 </div>
//               </div>

//               <div className="mt-6">
//                 <p className="text-sm text-gray-500 mb-2">Referral Link</p>
//                 <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
//                   <input
//                     type="text"
//                     value="https://example.com/refcode"
//                     readOnly
//                     className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50"
//                   />
//                   <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
//                     Copy
//                   </button>
//                 </div>
//               </div>

//               <div className="mt-6">
//                 <p className="text-sm text-gray-500 mb-1">QR Code</p>
//                 <p className="text-xs text-gray-400 mb-3">for direct deposit</p>
//                 <div className="flex justify-center p-4 bg-gray-50 rounded-xl">
//                   <div className="w-32 h-32 bg-gray-200 border-2 border-dashed rounded-xl flex items-center justify-center">
//                     <QrCode className="w-16 h-16 text-gray-400" />
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-auto pt-6 border-t border-gray-200">
//                 <p className="text-sm font-medium text-gray-900 mb-3">
//                   KYC Status
//                 </p>
//                 <div className="flex items-center gap-2">
//                   <CheckCircle className="w-5 h-5 text-green-500" />
//                   <span className="text-sm text-green-600 font-medium">
//                     Verified
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT COLUMN */}
//           <div className="w-full flex flex-col gap-6">
//             {/* Matrix Tree + AI Trading */}
//             <div className="bg-white rounded-2xl p-6 h-full">
//               <div className="flex flex-col lg:flex-row gap-6 h-full">
//                 {/* MATRIX TREE */}
//                 <div className="flex-1 flex flex-col justify-between">
//                   <div className="flex items-center justify-between mb-6">
//                     <div className="flex-1"></div>
//                     <div className="flex-1 flex justify-center">
//                       <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center shadow-lg">
//                         <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
//                       </div>
//                     </div>
//                     <div className="flex-1 flex justify-end"></div>
//                   </div>

//                   <div className="space-y-5">
//                     <div className="flex justify-center gap-3">
//                       {[1, 2, 3].map((i) => (
//                         <div
//                           key={i}
//                           className="w-12 h-12 bg-gray-300 rounded-md shadow-sm"
//                         ></div>
//                       ))}
//                     </div>
//                     <div className="flex justify-center gap-3">
//                       {[1, 2, 3, 4, 5, 6].map((i) => (
//                         <div
//                           key={i}
//                           className="w-12 h-12 bg-gray-300 rounded-md shadow-sm"
//                         ></div>
//                       ))}
//                     </div>
//                     <div className="flex justify-center gap-3 flex-wrap">
//                       {Array.from({ length: 6 }).map((_, i) => (
//                         <div
//                           key={i}
//                           className="w-12 h-12 bg-gray-300 rounded-md shadow-sm"
//                         ></div>
//                       ))}
//                     </div>
//                     <div className="flex justify-center gap-3 flex-wrap">
//                       {Array.from({ length: 6 }).map((_, i) => (
//                         <div
//                           key={i}
//                           className="w-12 h-12 bg-gray-200 rounded-md shadow-sm"
//                         ></div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* AI TRADING STATS */}
//                 <div className="lg:w-[30%] flex flex-col justify-center items-center border rounded-md shadow-sm p-4 bg-gray-50">
//                   <div className="space-y-4 text-center">
//                     <div>
//                       <h3 className="text-lg font-bold text-gray-900">
//                         AI TRADING
//                       </h3>
//                       <p className="text-sm text-gray-500">Monthly ROI</p>
//                       <p className="text-2xl font-bold text-gray-900">7.5%</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Equity Growth</p>
//                       <p className="text-2xl font-bold text-green-600">18.2%</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Drawdown</p>
//                       <p className="text-xl font-bold text-red-600">5.7%</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Profit Share</p>
//                       <p className="text-xl font-bold text-gray-900">50/50</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* TEAM PERFORMANCE */}
//             <div className="bg-white rounded-2xl p-6 shadow-sm overflow-x-auto">
//               <h3 className="text-lg font-bold text-gray-900 mb-6">
//                 TEAM PERFORMANCE
//               </h3>
//               <table className="w-full text-sm">
//                 <thead>
//                   <tr className="text-xs text-gray-500 border-b border-gray-200">
//                     <th className="text-left py-3 font-medium">Level</th>
//                     <th className="text-center py-3 font-medium">Members</th>
//                     <th className="text-right py-3 font-medium">
//                       Total Deposit (USDT)
//                     </th>
//                     <th className="text-center py-3 font-medium">Active %</th>
//                     <th className="text-right py-3 font-medium">
//                       Active Per Level
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {[
//                     ["Level 1", 3, "150,000", "100%", "8.2%"],
//                     ["Level 2", 9, "420,000", "95%", "7.5%"],
//                     ["Level 3", 27, "1,080,000", "90%", "7.5%"],
//                     ["Level 4", 5, "150,000", "80%", "7.5%"],
//                   ].map(([level, members, deposit, active, perLevel], i) => (
//                     <tr
//                       key={i}
//                       className="border-b border-gray-100 last:border-0"
//                     >
//                       <td className="py-3">{level}</td>
//                       <td className="text-center py-3">{members}</td>
//                       <td className="text-right py-3">{deposit}</td>
//                       <td className="text-center py-3">{active}</td>
//                       <td className="text-right py-3 text-green-600 font-medium">
//                         {perLevel}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             {/* EARNINGS SUMMARY */}
//             <div className="bg-white rounded-2xl p-6 shadow-sm">
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
//                 <div>
//                   <p className="text-sm text-gray-500 mb-1">Total Earnings</p>
//                   <p className="text-2xl font-bold text-gray-900">$1,250</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500 mb-1">
//                     Withdrawable Profit
//                   </p>
//                   <p className="text-2xl font-bold text-green-600">$890</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500 mb-1">
//                     Active Investment
//                   </p>
//                   <p className="text-xl font-bold text-gray-900">$500</p>
//                 </div>
//               </div>

//               <div className="mt-6 pt-6 border-t border-gray-200">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
//                     <span className="text-sm text-gray-600">RebaCoates</span>
//                   </div>
//                   <ChevronDown className="w-4 h-4 text-gray-400" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import { QrCode, CheckCircle, ChevronDown, User } from "lucide-react";

// export default function Matrix() {
//   return (
//     <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-[30%_1fr] gap-6 items-stretch">
//           {/* LEFT COLUMN */}
//           <div className="w-full">
//             <div className="bg-white rounded-2xl p-6 shadow-sm h-full flex flex-col">
//               <h3 className="text-lg font-semibold text-gray-900 mb-1">
//                 MY MATRIX
//               </h3>

//               <div className="flex items-center gap-2 mb-4">
//                 <span className="text-2xl font-bold text-amber-500">Rank</span>
//                 <span className="text-2xl font-bold text-gray-900">VIP</span>
//               </div>

//               <p className="text-sm text-gray-500 mb-1">User ID: 123456</p>

//               <div className="space-y-4 mt-6">
//                 <div>
//                   <p className="text-sm text-gray-500">Wallet Balance</p>
//                   <p className="text-2xl font-bold text-gray-900">250 USDT</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Active Package</p>
//                   <p className="text-2xl font-bold text-green-600">$50 K</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Total Team</p>
//                   <p className="text-2xl font-bold text-gray-900">2,756</p>
//                 </div>
//               </div>

//               <div className="mt-6">
//                 <p className="text-sm text-gray-500 mb-2">Referral Link</p>
//                 <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
//                   <input
//                     type="text"
//                     value="https://example.com/refcode"
//                     readOnly
//                     className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50"
//                   />
//                   <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
//                     Copy
//                   </button>
//                 </div>
//               </div>

//               <div className="mt-6">
//                 <p className="text-sm text-gray-500 mb-1">QR Code</p>
//                 <p className="text-xs text-gray-400 mb-3">for direct deposit</p>
//                 <div className="flex justify-center p-4 bg-gray-50 rounded-xl">
//                   <div className="w-32 h-32 bg-gray-200 border-2 border-dashed rounded-xl flex items-center justify-center">
//                     <QrCode className="w-16 h-16 text-gray-400" />
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-auto pt-6 border-t border-gray-200">
//                 <p className="text-sm font-medium text-gray-900 mb-3">
//                   KYC Status
//                 </p>
//                 <div className="flex items-center gap-2">
//                   <CheckCircle className="w-5 h-5 text-green-500" />
//                   <span className="text-sm text-green-600 font-medium">
//                     Verified
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT COLUMN */}
//           <div className="w-full flex flex-col gap-6">
//             {/* MATRIX TREE */}
//             <div className="bg-white rounded-2xl p-6 h-full">
//               <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                 MATRIX TREE
//               </h3>
//               <div className="flex flex-col items-center gap-5">
//                 {/* LEVEL 1 */}
//                 <div className="relative flex justify-center">
//                   <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center shadow">
//                     <User className="text-gray-600 w-6 h-6" />
//                   </div>
//                   {/* Connection line */}
//                   <div className="absolute top-full left-1/2 w-[2px] h-8 bg-gray-300 transform -translate-x-1/2"></div>
//                 </div>

//                 {/* LEVEL 2 */}
//                 <div className="relative flex justify-center gap-10">
//                   {[1, 2, 3].map((i) => (
//                     <div key={i} className="relative flex flex-col items-center">
//                       <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center shadow">
//                         <User className="text-gray-600 w-5 h-5" />
//                       </div>
//                       {/* Connection to next level */}
//                       <div className="absolute top-full left-1/2 w-[2px] h-6 bg-gray-300 transform -translate-x-1/2"></div>
//                     </div>
//                   ))}
//                   {/* Horizontal line connecting children */}
//                   <div className="absolute top-0 left-0 right-0 h-[2px] bg-gray-300 mt-[-8px]"></div>
//                 </div>

//                 {/* LEVEL 3 */}
//                 <div className="flex justify-center flex-wrap gap-8">
//                   {Array.from({ length: 6 }).map((_, i) => (
//                     <div
//                       key={i}
//                       className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center shadow"
//                     >
//                       <User className="text-gray-600 w-5 h-5" />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* TEAM PERFORMANCE - SCROLLABLE */}
//             <div className="bg-white rounded-2xl p-6 shadow-sm">
//               <h3 className="text-lg font-bold text-gray-900 mb-6">
//                 TEAM PERFORMANCE
//               </h3>
//               <div className="overflow-x-auto max-h-[350px] overflow-y-auto">
//                 <table className="w-full text-sm">
//                   <thead className="sticky top-0 bg-white">
//                     <tr className="text-xs text-gray-500 border-b border-gray-200">
//                       <th className="text-left py-3 font-medium">Level</th>
//                       <th className="text-center py-3 font-medium">Members</th>
//                       <th className="text-right py-3 font-medium">
//                         Total Deposit (USDT)
//                       </th>
//                       <th className="text-center py-3 font-medium">Active %</th>
//                       <th className="text-right py-3 font-medium">
//                         Active Per Level
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {[
//                       ["Level 1", 3, "150,000", "100%", "8.2%"],
//                       ["Level 2", 9, "420,000", "95%", "7.5%"],
//                       ["Level 3", 27, "1,080,000", "90%", "7.5%"],
//                       ["Level 4", 5, "150,000", "80%", "7.5%"],
//                       ["Level 5", 12, "300,000", "75%", "6.8%"],
//                       ["Level 6", 40, "980,000", "70%", "6.2%"],
//                       ["Level 7", 60, "1,500,000", "65%", "5.8%"],
//                       ["Level 8", 120, "3,200,000", "60%", "5.0%"],
//                     ].map(([level, members, deposit, active, perLevel], i) => (
//                       <tr
//                         key={i}
//                         className="border-b border-gray-100 last:border-0"
//                       >
//                         <td className="py-3">{level}</td>
//                         <td className="text-center py-3">{members}</td>
//                         <td className="text-right py-3">{deposit}</td>
//                         <td className="text-center py-3">{active}</td>
//                         <td className="text-right py-3 text-green-600 font-medium">
//                           {perLevel}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* EARNINGS SUMMARY */}
//             <div className="bg-white rounded-2xl p-6 shadow-sm">
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
//                 <div>
//                   <p className="text-sm text-gray-500 mb-1">Total Earnings</p>
//                   <p className="text-2xl font-bold text-gray-900">$1,250</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500 mb-1">
//                     Withdrawable Profit
//                   </p>
//                   <p className="text-2xl font-bold text-green-600">$890</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500 mb-1">
//                     Active Investment
//                   </p>
//                   <p className="text-xl font-bold text-gray-900">$500</p>
//                 </div>
//               </div>

//               <div className="mt-6 pt-6 border-t border-gray-200">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
//                     <span className="text-sm text-gray-600">RebaCoates</span>
//                   </div>
//                   <ChevronDown className="w-4 h-4 text-gray-400" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { QrCode, CheckCircle, ChevronDown, User } from "lucide-react";

// ✅ Dummy AI Trading component (replace with your actual component)
function AiTrading() {
  return (
    <div className="bg-white w- rounded-2xl p-6 shadow-sm h-full">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">AI TRADING</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">Active Trades</p>
          <p className="text-lg font-semibold text-green-600">15</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">Total Profit</p>
          <p className="text-lg font-semibold text-gray-900">$3,250</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">AI Accuracy</p>
          <p className="text-lg font-semibold text-blue-600">94%</p>
        </div>
      </div>
      <div className="mt-6 text-center"></div>
    </div>
  );
}

export default function Matrix() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[30%_1fr] gap-6 items-stretch">
          {/* LEFT COLUMN */}
          <div className="w-full">
            <div className="bg-white rounded-2xl p-6 shadow-sm h-full flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                MY MATRIX
              </h3>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold text-amber-500">Rank</span>
                <span className="text-2xl font-bold text-gray-900">VIP</span>
              </div>

              <p className="text-sm text-gray-500 mb-1">User ID: 123456</p>

              <div className="space-y-4 mt-6">
                <div>
                  <p className="text-sm text-gray-500">Wallet Balance</p>
                  <p className="text-2xl font-bold text-gray-900">250 USDT</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Active Package</p>
                  <p className="text-2xl font-bold text-green-600">$50 K</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Team</p>
                  <p className="text-2xl font-bold text-gray-900">2,756</p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-2">Referral Link</p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <input
                    type="text"
                    value="https://example.com/refcode"
                    readOnly
                    className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50"
                  />
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
                    Copy
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-1">QR Code</p>
                <p className="text-xs text-gray-400 mb-3">for direct deposit</p>
                <div className="flex justify-start p-4 bg-gray-50 rounded-xl">
                  <div className="w-32 h-32 bg-gray-200 border-2 border-dashed rounded-xl flex items-center justify-center">
                    <QrCode className="w-16 h-16 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-900 mb-3">
                  KYC Status
                </p>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-green-600 font-medium">
                    Verified
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full p-5 bg-white flex flex-col gap-6">
            {/* MATRIX TREE + AI TRADING SIDE BY SIDE */}
            <div className="  w-full  p-6 h-full ">
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* MATRIX TREE */}
                <div className="flex flex-col items-center gap-5 relative">
                  {/* LEVEL 1 */}
                  <div className="relative flex justify-center">
                    <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center shadow-md">
                      <User className="text-gray-600 w-6 h-6" />
                    </div>
                    <div className="absolute top-full left-1/2 w-[2px] h-8 bg-gray-300 transform -translate-x-1/2"></div>
                  </div>

                  {/* LEVEL 2 */}
                  <div className="relative flex justify-center gap-10">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="relative flex flex-col items-center"
                      >
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shadow">
                          <User className="text-gray-600 w-5 h-5" />
                        </div>
                        <div className="absolute top-full left-1/2 w-[2px] h-6 bg-gray-300 transform -translate-x-1/2"></div>
                      </div>
                    ))}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gray-300 mt-[-8px]"></div>
                  </div>

                  {/* LEVEL 3 */}
                  <div className="flex justify-center flex-wrap gap-6 mt-2">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center shadow-sm"
                      >
                        <User className="text-gray-600 w-5 h-5" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI TRADING */}
                <div className="flex flex-col justify-between bg-white rounded-xl md:w-[50%] w-full shadow-md border  p-5 h-full shadow-inner">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">
                    AI TRADING
                  </h4>

                  <div className="space-y-4 text-start">
                    <div className="flex flex-col items-start">
                      <p className="text-sm text-gray-500">Monthly ROI</p>
                      <p className="text-lg font-semibold text-green-600">
                        7.5
                      </p>
                    </div>
                    <div className="flex flex-col items-start">
                      <p className="text-sm text-gray-500">Equality Growth</p>
                      <p className="text-lg font-semibold text-gray-900">
                        18.2%
                      </p>
                    </div>
                    <div className="flex flex-col items-start">
                      <p className="text-sm text-gray-500">Drawdown</p>
                      <p className="text-lg font-semibold text-blue-600">
                        7.5%
                      </p>
                    </div>
                    <div className="flex flex-col items-start">
                      <p className="text-sm text-gray-500">Profit share </p>
                      <p className="text-lg font-semibold text-blue-600">
                        50/50
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TEAM PERFORMANCE */}
            <div className="bg-white  p-6 border">
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                TEAM PERFORMANCE
              </h3>
              <div className="overflow-x-auto max-h-[350px] overflow-y-auto">
                <table className="w-full text-sm">
                  <thead className="sticky top-0 bg-white">
                    <tr className="text-xs text-gray-500 border-b border-gray-200">
                      <th className="text-left py-3 font-medium">Level</th>
                      <th className="text-center py-3 font-medium">Members</th>
                      <th className="text-right py-3 font-medium">
                        Total Deposit (USDT)
                      </th>
                      <th className="text-center py-3 font-medium">Active %</th>
                      <th className="text-right py-3 font-medium">
                        Active Per Level
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Level 1", 3, "150,000", "100%", "8.2%"],
                      ["Level 2", 9, "420,000", "95%", "7.5%"],
                      ["Level 3", 27, "1,080,000", "90%", "7.5%"],
                      ["Level 4", 5, "150,000", "80%", "7.5%"],
                      ["Level 5", 12, "300,000", "75%", "6.8%"],
                      ["Level 6", 40, "980,000", "70%", "6.2%"],
                      ["Level 7", 60, "1,500,000", "65%", "5.8%"],
                      ["Level 8", 120, "3,200,000", "60%", "5.0%"],
                    ].map(([level, members, deposit, active, perLevel], i) => (
                      <tr
                        key={i}
                        className="border-b border-gray-100  last:border-0"
                      >
                        <td className="py-3">{level}</td>
                        <td className="text-center py-3">{members}</td>
                        <td className="text-right py-3">{deposit}</td>
                        <td className="text-center py-3">{active}</td>
                        <td className="text-right py-3 text-green-600 font-medium">
                          {perLevel}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* EARNINGS SUMMARY */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Total Earnings</p>
                  <p className="text-2xl font-bold text-gray-900">$1,250</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Withdrawable Profit
                  </p>
                  <p className="text-2xl font-bold text-green-600">$890</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Active Investment
                  </p>
                  <p className="text-xl font-bold text-gray-900">$500</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">RebaCoates</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
