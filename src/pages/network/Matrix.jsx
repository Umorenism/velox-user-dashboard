// // import React from "react";
// // import { CheckCircle, Copy } from "lucide-react";

// // export default function Matrix() {
// //   return (
// //     <div className="min-h-screen bg-gray-50 flex justify-center items-start p-6">
// //       <div className="bg-white shadow-md rounded-xl w-full max-w-6xl grid grid-cols-1 lg:grid-cols-4 gap-6 p-6">
// //         {/* Left Sidebar */}
// //         <div className="col-span-1 border-r border-gray-200 pr-4 flex flex-col justify-between">
// //           <div>
// //             <h2 className="text-sm font-medium text-gray-500 mb-2">MY MATRIX</h2>
// //             <h3 className="text-xl font-semibold text-gray-900 mb-1">VIP</h3>
// //             <p className="text-sm text-gray-500 mb-6">User ID: 123456</p>

// //             {/* Wallet Balance */}
// //             <div className="mb-4">
// //               <p className="text-gray-500 text-sm">Wallet Balance</p>
// //               <p className="text-lg font-semibold">250 <span className="text-gray-500 text-sm">USDT</span></p>
// //             </div>

// //             {/* Active Package */}
// //             <div className="mb-4">
// //               <p className="text-gray-500 text-sm">Active Package</p>
// //               <p className="text-lg font-semibold">$50k</p>
// //             </div>

// //             {/* Total Team */}
// //             <div className="mb-4">
// //               <p className="text-gray-500 text-sm">Total Team</p>
// //               <p className="text-lg font-semibold">2,756</p>
// //             </div>

// //             {/* Referral Link */}
// //             <div className="mb-6">
// //               <p className="text-gray-500 text-sm mb-1">Referral Link</p>
// //               <div className="flex items-center bg-gray-100 rounded-md px-2 py-1 text-sm">
// //                 <span className="truncate text-gray-600">
// //                   https://valu.co/matrixuser
// //                 </span>
// //                 <button className="ml-2 text-gray-400 hover:text-gray-600">
// //                   <Copy size={14} />
// //                 </button>
// //               </div>
// //             </div>

// //             {/* QR Code */}
// //             <div className="mb-6">
// //               <p className="text-gray-500 text-sm mb-2">QR Code for direct deposit</p>
// //               <div className="flex justify-center">
// //                 <img
// //                   src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://valu.co/matrixuser"
// //                   alt="QR Code"
// //                   className="rounded-lg border border-gray-200"
// //                 />
// //               </div>
// //             </div>

// //             {/* KYC Status */}
// //             <div className="flex items-center gap-2 mb-4">
// //               <p className="text-gray-500 text-sm">KYC Status</p>
// //               <CheckCircle size={16} className="text-green-500" />
// //               <span className="text-sm font-medium text-gray-700">Verified</span>
// //             </div>
// //           </div>

// //           {/* Footer */}
// //           <div className="border-t border-gray-200 pt-4 text-xs text-gray-400">
// //             © RebraCotes
// //           </div>
// //         </div>

// //         {/* Main Content */}
// //         <div className="col-span-3 pl-4">
// //           {/* AI Trading Section */}
// //           <div className="flex justify-between items-start mb-6">
// //             <div>
// //               <h3 className="text-sm font-semibold text-gray-700 uppercase mb-2">AI Trading</h3>
// //               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
// //                 <div>
// //                   <p className="text-gray-500">Monthly ROI</p>
// //                   <p className="font-semibold">7.5%</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-gray-500">Equity Growth</p>
// //                   <p className="font-semibold">18.2%</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-gray-500">Drawdown</p>
// //                   <p className="font-semibold">5.7%</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-gray-500">Profit Share</p>
// //                   <p className="font-semibold">50/50</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Matrix Tree Diagram (placeholder circles) */}
// //           <div className="w-full flex flex-col items-center mb-10">
// //             {/* Top Node */}
// //             <div className="w-10 h-10 bg-gray-200 rounded-full mb-4"></div>
// //             {/* Second Row */}
// //             <div className="flex gap-6 mb-4">
// //               {[1, 2].map((i) => (
// //                 <div key={i} className="w-10 h-10 bg-gray-200 rounded-full"></div>
// //               ))}
// //             </div>
// //             {/* Third Row */}
// //             <div className="flex gap-4 mb-4">
// //               {[1, 2, 3, 4].map((i) => (
// //                 <div key={i} className="w-10 h-10 bg-gray-200 rounded-full"></div>
// //               ))}
// //             </div>
// //             {/* Fourth Row */}
// //             <div className="flex gap-3">
// //               {[1, 2, 3, 4, 5].map((i) => (
// //                 <div key={i} className="w-10 h-10 bg-gray-200 rounded-full"></div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Team Performance Table */}
// //           <div className="overflow-x-auto mb-8">
// //             <table className="min-w-full text-sm text-left border-t border-gray-200">
// //               <thead>
// //                 <tr className="text-gray-500">
// //                   <th className="py-3">Level</th>
// //                   <th className="py-3">Members</th>
// //                   <th className="py-3">Total Deposit (USDT)</th>
// //                   <th className="py-3">% Active Per Level</th>
// //                 </tr>
// //               </thead>
// //               <tbody className="text-gray-700">
// //                 {[
// //                   { level: "Level 1", members: 3, deposit: "150,000", active: "8.2%" },
// //                   { level: "Level 2", members: 9, deposit: "420,000", active: "9.5%" },
// //                   { level: "Level 3", members: 27, deposit: "1,080,000", active: "9.0%" },
// //                   { level: "Level 4", members: 5, deposit: "150,000", active: "7.5%" },
// //                 ].map((row, i) => (
// //                   <tr key={i} className="border-t border-gray-100">
// //                     <td className="py-3">{row.level}</td>
// //                     <td className="py-3">{row.members}</td>
// //                     <td className="py-3">{row.deposit}</td>
// //                     <td className="py-3">{row.active}</td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>

// //           {/* Summary Section */}
// //           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
// //             <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
// //               <p className="text-sm text-gray-500 mb-1">Total Earnings</p>
// //               <p className="text-xl font-semibold">$1,250</p>
// //             </div>
// //             <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
// //               <p className="text-sm text-gray-500 mb-1">Withdrawable Profit</p>
// //               <p className="text-xl font-semibold">$890</p>
// //             </div>
// //             <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
// //               <p className="text-sm text-gray-500 mb-1">Active Investment</p>
// //               <p className="text-xl font-semibold">$500</p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // import React from 'react'
// // import MatrixGrid from '../../utlis/MatrixGrid'
// // import MatrixSidebar from '../../utlis/MatrixSidebar'
// // import AnalyticsPanel from '../../utlis/AnalyticPanel'

// // export default function Matrix() {
// //   return (
// //     <div className='flex'>
// //       <div className='w-1/2'>
// //         <MatrixSidebar/>
// //       </div>
// //       <div className='w-1/2'>
// //       <div className='flex'>
// //         <MatrixGrid/>

// //       </div>

// //       </div>
// //     </div>
// //   )
// // }

// // 'use client';

// // import React from 'react';
// // import { QrCode, CheckCircle, ChevronDown } from 'lucide-react';

// // export default function Matrix() {
// //   return (
// //     <>
// //       <div className="min-h-screen bg-gray-50 p-4 md:p-8">
// //         <div className="max-w-7xl mx-auto">
// //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// //             {/* Left Column */}
// //             <div className="lg:col-span-1 space-y-6">
// //               {/* My Matrix Card */}
// //               <div className="bg-white rounded-2xl p-6 shadow-sm">
// //                 <h3 className="text-lg font-semibold text-gray-900 mb-1">MY MATRIX</h3>
// //                 <div className="flex items-center gap-2 mb-4">
// //                   <span className="text-2xl font-bold text-amber-500">Rank</span>
// //                   <span className="text-2xl font-bold text-gray-900">VIP</span>
// //                 </div>
// //                 <p className="text-sm text-gray-500 mb-1">User ID: 123456</p>

// //                 <div className="space-y-4 mt-6">
// //                   <div>
// //                     <p className="text-sm text-gray-500">Wallet Balance</p>
// //                     <p className="text-2xl font-bold text-gray-900">250 USDT</p>
// //                   </div>

// //                   <div>
// //                     <p className="text-sm text-gray-500">Active Package</p>
// //                     <p className="text-2xl font-bold text-green-600">$50 K</p>
// //                   </div>

// //                   <div>
// //                     <p className="text-sm text-gray-500">Total Team</p>
// //                     <p className="text-2xl font-bold text-gray-900">2,756</p>
// //                   </div>
// //                 </div>

// //                 <div className="mt-6">
// //                   <p className="text-sm text-gray-500 mb-2">Referral Link</p>
// //                   <div className="flex items-center gap-2">
// //                     <input
// //                       type="text"
// //                       value="https://example.com/refcode"
// //                       readOnly
// //                       className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50"
// //                     />
// //                     <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
// //                       Copy
// //                     </button>
// //                   </div>
// //                 </div>

// //                 <div className="mt-6">
// //                   <p className="text-sm text-gray-500 mb-3">QR Code</p>
// //                   <p className="text-xs text-gray-400 mb-3">for direct deposit</p>
// //                   <div className="flex justify-center p-4 bg-gray-50 rounded-xl">
// //                     <div className="w-32 h-32 bg-gray-200 border-2 border-dashed rounded-xl flex items-center justify-center">
// //                       <QrCode className="w-16 h-16 text-gray-400" />
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div className="mt-6 pt-6 border-t border-gray-200">
// //                   <p className="text-sm font-medium text-gray-900 mb-3">KYC Status</p>
// //                   <div className="flex items-center gap-2">
// //                     <CheckCircle className="w-5 h-5 text-green-500" />
// //                     <span className="text-sm text-green-600 font-medium">Verified</span>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Middle Column - Matrix Tree */}
// //             <div className="lg:col-span-1">
// //               <div className="bg-white rounded-2xl p-6 shadow-sm">
// //                 <div className="flex items-center justify-between mb-6">
// //                   <div className="flex-1"></div>
// //                   <div className="flex-1 flex justify-center">
// //                     <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
// //                       <div className="w-12 h-12 bg-white rounded-full"></div>
// //                     </div>
// //                   </div>
// //                   <div className="flex-1 flex justify-end">
// //                     <h3 className="text-lg font-bold text-gray-900">AI TRADING</h3>
// //                   </div>
// //                 </div>

// //                 <div className="space-y-6">
// //                   {/* Level 1 */}
// //                   <div className="flex justify-center gap-4">
// //                     {[1, 2, 3].map((i) => (
// //                       <div key={i} className="w-12 h-12 bg-gray-200 rounded-full"></div>
// //                     ))}
// //                   </div>

// //                   {/* Level 2 */}
// //                   <div className="flex justify-center gap-4">
// //                     {[1, 2, 3, 4, 5].map((i) => (
// //                       <div key={i} className="w-12 h-12 bg-gray-200 rounded-full"></div>
// //                     ))}
// //                   </div>

// //                   {/* Level 3 */}
// //                   <div className="flex justify-center gap-4 flex-wrap">
// //                     {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
// //                       <div key={i} className="w-12 h-12 bg-gray-200 rounded-full"></div>
// //                     ))}
// //                   </div>

// //                   {/* Level 4 */}
// //                   <div className="flex justify-center gap-4 flex-wrap">
// //                     {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
// //                       <div key={i} className="w-12 h-12 bg-gray-100 rounded-full"></div>
// //                     ))}
// //                   </div>
// //                 </div>

// //                 {/* AI Trading Stats */}
// //                 <div className="mt-8 space-y-4">
// //                   <div>
// //                     <p className="text-sm text-gray-500">Monthly ROI</p>
// //                     <p className="text-2xl font-bold text-gray-900">7.5%</p>
// //                   </div>
// //                   <div>
// //                     <p className="text-sm text-gray-500">Equity Growth</p>
// //                     <p className="text-2xl font-bold text-green-600">18.2%</p>
// //                   </div>
// //                   <div>
// //                     <p className="text-sm text-gray-500">Drawdown</p>
// //                     <p className="text-xl font-bold text-red-600">5.7%</p>
// //                   </div>
// //                   <div>
// //                     <p className="text-sm text-gray-500">Profit Share</p>
// //                     <p className="text-xl font-bold text-gray-900">50/50</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Right Column */}
// //             <div className="lg:col-span-1 space-y-6">
// //               {/* Team Performance */}
// //               <div className="bg-white rounded-2xl p-6 shadow-sm">
// //                 <h3 className="text-lg font-bold text-gray-900 mb-6">TEAM PERFORMANCE</h3>

// //                 <div className="overflow-x-auto">
// //                   <table className="w-full">
// //                     <thead>
// //                       <tr className="text-xs text-gray-500 border-b border-gray-200">
// //                         <th className="text-left py-3 font-medium">Level</th>
// //                         <th className="text-center py-3 font-medium">Members</th>
// //                         <th className="text-right py-3 font-medium">Total Deposit (USDT)</th>
// //                         <th className="text-center py-3 font-medium">Active %</th>
// //                         <th className="text-right py-3 font-medium">Active Per Level</th>
// //                       </tr>
// //                     </thead>
// //                     <tbody className="text-sm">
// //                       <tr className="border-b border-gray-100">
// //                         <td className="py-3">Level 1</td>
// //                         <td className="text-center py-3">3</td>
// //                         <td className="text-right py-3">150,000</td>
// //                         <td className="text-center py-3">100%</td>
// //                         <td className="text-right py-3 text-green-600 font-medium">8.2%</td>
// //                       </tr>
// //                       <tr className="border-b border-gray-100">
// //                         <td className="py-3">Level 2</td>
// //                         <td className="text-center py-3">9</td>
// //                         <td className="text-right py-3">420,000</td>
// //                         <td className="text-center py-3">95%</td>
// //                         <td className="text-right py-3 text-green-600 font-medium">7.5%</td>
// //                       </tr>
// //                       <tr className="border-b border-gray-100">
// //                         <td className="py-3">Level 3</td>
// //                         <td className="text-center py-3">27</td>
// //                         <td className="text-right py-3">1,080,000</td>
// //                         <td className="text-center py-3">90%</td>
// //                         <td className="text-right py-3 text-green-600 font-medium">7.5%</td>
// //                       </tr>
// //                       <tr>
// //                         <td className="py-3">Level 4</td>
// //                         <td className="text-center py-3">5</td>
// //                         <td className="text-right py-3">150,000</td>
// //                         <td className="text-center py-3">80%</td>
// //                         <td className="text-right py-3 text-green-600 font-medium">7.5%</td>
// //                       </tr>
// //                     </tbody>
// //                   </table>
// //                 </div>
// //               </div>

// //               {/* Earnings Summary */}
// //               <div className="bg-white rounded-2xl p-6 shadow-sm">
// //                 <div className="grid grid-cols-3 gap-4 text-center">
// //                   <div>
// //                     <p className="text-sm text-gray-500 mb-1">Total Earnings</p>
// //                     <p className="text-2xl font-bold text-gray-900">$1,250</p>
// //                   </div>
// //                   <div>
// //                     <p className="text-sm text-gray-500 mb-1">Withdrawable Profit</p>
// //                     <p className="text-2xl font-bold text-green-600">$890</p>
// //                   </div>
// //                   <div>
// //                     <p className="text-sm text-gray-500 mb-1">Active Investment</p>
// //                     <p className="text-xl font-bold text-gray-900">$500</p>
// //                   </div>
// //                 </div>

// //                 <div className="mt-6 pt-6 border-t border-gray-200">
// //                   <div className="flex items-center justify-between">
// //                     <div className="flex items-center gap-2">
// //                       <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
// //                       <span className="text-sm text-gray-600">RebaCoates</span>
// //                     </div>
// //                     <ChevronDown className="w-4 h-4 text-gray-400" />
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // import React from "react";
// // import { QrCode, CheckCircle, ChevronDown } from "lucide-react";
// // export default function Matrix() {
// //   return (
// //     <div className="min-h-screen bg-gray-50 p-4 md:p-8">
// //       <div className="max-w-7xl mx-auto">
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// //           <div className=" w-full ">
// //             <div className="lg:col-span-1 space-y-6">
// //               {/* My Matrix Card */}
// //               <div className="bg-white rounded-2xl p-6 shadow-sm">
// //                 <h3 className="text-lg font-semibold text-gray-900 mb-1">
// //                   MY MATRIX
// //                 </h3>
// //                 <div className="flex items-center gap-2 mb-4">
// //                   <span className="text-2xl font-bold text-amber-500">
// //                     Rank
// //                   </span>
// //                   <span className="text-2xl font-bold text-gray-900">VIP</span>
// //                 </div>
// //                 <p className="text-sm text-gray-500 mb-1">User ID: 123456</p>

// //                 <div className="space-y-4 mt-6">
// //                   <div>
// //                     <p className="text-sm text-gray-500">Wallet Balance</p>
// //                     <p className="text-2xl font-bold text-gray-900">250 USDT</p>
// //                   </div>

// //                   <div>
// //                     <p className="text-sm text-gray-500">Active Package</p>
// //                     <p className="text-2xl font-bold text-green-600">$50 K</p>
// //                   </div>

// //                   <div>
// //                     <p className="text-sm text-gray-500">Total Team</p>
// //                     <p className="text-2xl font-bold text-gray-900">2,756</p>
// //                   </div>
// //                 </div>

// //                 <div className="mt-6">
// //                   <p className="text-sm text-gray-500 mb-2">Referral Link</p>
// //                   <div className="flex items-center gap-2">
// //                     <input
// //                       type="text"
// //                       value="https://example.com/refcode"
// //                       readOnly
// //                       className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50"
// //                     />
// //                     <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
// //                       Copy
// //                     </button>
// //                   </div>
// //                 </div>

// //                 <div className="mt-6">
// //                   <p className="text-sm text-gray-500 mb-3">QR Code</p>
// //                   <p className="text-xs text-gray-400 mb-3">
// //                     for direct deposit
// //                   </p>
// //                   <div className="flex justify-center p-4 bg-gray-50 rounded-xl">
// //                     <div className="w-32 h-32 bg-gray-200 border-2 border-dashed rounded-xl flex items-center justify-center">
// //                       <QrCode className="w-16 h-16 text-gray-400" />
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div className="mt-6 pt-6 border-t border-gray-200">
// //                   <p className="text-sm font-medium text-gray-900 mb-3">
// //                     KYC Status
// //                   </p>
// //                   <div className="flex items-center gap-2">
// //                     <CheckCircle className="w-5 h-5 text-green-500" />
// //                     <span className="text-sm text-green-600 font-medium">
// //                       Verified
// //                     </span>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="w-full bg-white rounded-2xl p-6 shadow-sm">
// //             <div className="flex">
// //               <div className="w-[90%]">
// //                 <div className="lg:col-span-1">
// //               <div className="bg-white8 p-6 ">
// //                 <div className="flex items-center justify-between mb-6">
// //                   <div className="flex-1"></div>
// //                   <div className="flex-1 flex justify-center">
// //                     <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
// //                       <div className="w-12 h-12 bg-white rounded-full"></div>
// //                     </div>
// //                   </div>
// //                   <div className="flex-1 flex justify-end">

// //                   </div>
// //                 </div>

// //                 <div className="space-y-6">
// //                   {/* Level 1 */}
// //                   <div className="flex justify-center gap-4">
// //                     {[1, 2, 3].map((i) => (
// //                       <div key={i} className="w-12 h-12 bg-gray-200 rounded-full"></div>
// //                     ))}
// //                   </div>

// //                   {/* Level 2 */}
// //                   <div className="flex justify-center gap-4">
// //                     {[1, 2, 3, 4, 5].map((i) => (
// //                       <div key={i} className="w-12 h-12 bg-gray-200 rounded-full"></div>
// //                     ))}
// //                   </div>

// //                   {/* Level 3 */}
// //                   <div className="flex justify-center gap-4 flex-wrap">
// //                     {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
// //                       <div key={i} className="w-12 h-12 bg-gray-200 rounded-full"></div>
// //                     ))}
// //                   </div>

// //                   {/* Level 4 */}
// //                   <div className="flex justify-center gap-4 flex-wrap">
// //                     {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
// //                       <div key={i} className="w-12 h-12 bg-gray-100 rounded-full"></div>
// //                     ))}
// //                   </div>
// //                 </div>

// //               </div>
// //             </div>

// //               </div>
// //               <div className="w-[30%]">
// //                 {/* AI Trading Stats */}
// //                 <div className="mt-8 space-y-4 bg-white rounded-2xl p-6 shadow-sm">
// //                   <div>
// //                     <p className="text-sm text-gray-500">Monthly ROI</p>
// //                     <p className="text-2xl font-bold text-gray-900">7.5%</p>
// //                   </div>
// //                   <div>
// //                     <p className="text-sm text-gray-500">Equity Growth</p>
// //                     <p className="text-2xl font-bold text-green-600">18.2%</p>
// //                   </div>
// //                   <div>
// //                     <p className="text-sm text-gray-500">Drawdown</p>
// //                     <p className="text-xl font-bold text-red-600">5.7%</p>
// //                   </div>
// //                   <div>
// //                     <p className="text-sm text-gray-500">Profit Share</p>
// //                     <p className="text-xl font-bold text-gray-900">50/50</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="lg:col-span-1 space-y-6">
// //               {/* Team Performance */}
// //               <div className="bg-white rounded-2xl p-6 shadow-sm">
// //                 <h3 className="text-lg font-bold text-gray-900 mb-6">
// //                   TEAM PERFORMANCE
// //                 </h3>

// //                 <div className="overflow-x-auto">
// //                   <table className="w-full">
// //                     <thead>
// //                       <tr className="text-xs text-gray-500 border-b border-gray-200">
// //                         <th className="text-left py-3 font-medium">Level</th>
// //                         <th className="text-center py-3 font-medium">
// //                           Members
// //                         </th>
// //                         <th className="text-right py-3 font-medium">
// //                           Total Deposit (USDT)
// //                         </th>
// //                         <th className="text-center py-3 font-medium">
// //                           Active %
// //                         </th>
// //                         <th className="text-right py-3 font-medium">
// //                           Active Per Level
// //                         </th>
// //                       </tr>
// //                     </thead>
// //                     <tbody className="text-sm">
// //                       <tr className="border-b border-gray-100">
// //                         <td className="py-3">Level 1</td>
// //                         <td className="text-center py-3">3</td>
// //                         <td className="text-right py-3">150,000</td>
// //                         <td className="text-center py-3">100%</td>
// //                         <td className="text-right py-3 text-green-600 font-medium">
// //                           8.2%
// //                         </td>
// //                       </tr>
// //                       <tr className="border-b border-gray-100">
// //                         <td className="py-3">Level 2</td>
// //                         <td className="text-center py-3">9</td>
// //                         <td className="text-right py-3">420,000</td>
// //                         <td className="text-center py-3">95%</td>
// //                         <td className="text-right py-3 text-green-600 font-medium">
// //                           7.5%
// //                         </td>
// //                       </tr>
// //                       <tr className="border-b border-gray-100">
// //                         <td className="py-3">Level 3</td>
// //                         <td className="text-center py-3">27</td>
// //                         <td className="text-right py-3">1,080,000</td>
// //                         <td className="text-center py-3">90%</td>
// //                         <td className="text-right py-3 text-green-600 font-medium">
// //                           7.5%
// //                         </td>
// //                       </tr>
// //                       <tr>
// //                         <td className="py-3">Level 4</td>
// //                         <td className="text-center py-3">5</td>
// //                         <td className="text-right py-3">150,000</td>
// //                         <td className="text-center py-3">80%</td>
// //                         <td className="text-right py-3 text-green-600 font-medium">
// //                           7.5%
// //                         </td>
// //                       </tr>
// //                     </tbody>
// //                   </table>
// //                 </div>
// //               </div>

// //               {/* Earnings Summary */}
// //               <div className="bg-white rounded-2xl p-5 shadow-sm">
// //                 <div className="grid grid-cols-3 gap-4 text-center">
// //                   <div>
// //                     <p className="text-sm text-gray-500 mb-1">Total Earnings</p>
// //                     <p className="text-2xl font-bold text-gray-900">$1,250</p>
// //                   </div>
// //                   <div>
// //                     <p className="text-sm text-gray-500 mb-1">
// //                       Withdrawable Profit
// //                     </p>
// //                     <p className="text-2xl font-bold text-green-600">$890</p>
// //                   </div>
// //                   <div>
// //                     <p className="text-sm text-gray-500 mb-1">
// //                       Active Investment
// //                     </p>
// //                     <p className="text-xl font-bold text-gray-900">$500</p>
// //                   </div>
// //                 </div>

// //                 <div className="mt-6 pt-6 border-t border-gray-200">
// //                   <div className="flex items-center justify-between">
// //                     <div className="flex items-center gap-2">
// //                       <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
// //                       <span className="text-sm text-gray-600">RebaCoates</span>
// //                     </div>
// //                     <ChevronDown className="w-4 h-4 text-gray-400" />
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // import React from "react";
// // import { QrCode, CheckCircle, ChevronDown } from "lucide-react";

// // export default function Matrix() {
// //   return (
// //     <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
// //       <div className="max-w-7xl mx-auto">
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// //           {/* LEFT COLUMN - My Matrix */}
// //           <div className="w-full">
// //             <div className="bg-white rounded-2xl p-6 shadow-sm">
// //               <h3 className="text-lg font-semibold text-gray-900 mb-1">MY MATRIX</h3>
// //               <div className="flex items-center gap-2 mb-4">
// //                 <span className="text-2xl font-bold text-amber-500">Rank</span>
// //                 <span className="text-2xl font-bold text-gray-900">VIP</span>
// //               </div>
// //               <p className="text-sm text-gray-500 mb-1">User ID: 123456</p>

// //               <div className="space-y-4 mt-6">
// //                 <div>
// //                   <p className="text-sm text-gray-500">Wallet Balance</p>
// //                   <p className="text-2xl font-bold text-gray-900">250 USDT</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-gray-500">Active Package</p>
// //                   <p className="text-2xl font-bold text-green-600">$50 K</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-gray-500">Total Team</p>
// //                   <p className="text-2xl font-bold text-gray-900">2,756</p>
// //                 </div>
// //               </div>

// //               <div className="mt-6">
// //                 <p className="text-sm text-gray-500 mb-2">Referral Link</p>
// //                 <div className="flex items-center gap-2">
// //                   <input
// //                     type="text"
// //                     value="https://example.com/refcode"
// //                     readOnly
// //                     className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50"
// //                   />
// //                   <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
// //                     Copy
// //                   </button>
// //                 </div>
// //               </div>

// //               <div className="mt-6">
// //                 <p className="text-sm text-gray-500 mb-1">QR Code</p>
// //                 <p className="text-xs text-gray-400 mb-3">for direct deposit</p>
// //                 <div className="flex justify-center p-4 bg-gray-50 rounded-xl">
// //                   <div className="w-32 h-32 bg-gray-200 border-2 border-dashed rounded-xl flex items-center justify-center">
// //                     <QrCode className="w-16 h-16 text-gray-400" />
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="mt-6 pt-6 border-t border-gray-200">
// //                 <p className="text-sm font-medium text-gray-900 mb-3">KYC Status</p>
// //                 <div className="flex items-center gap-2">
// //                   <CheckCircle className="w-5 h-5 text-green-500" />
// //                   <span className="text-sm text-green-600 font-medium">Verified</span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* RIGHT COLUMN - Matrix Tree + Stats + Team + Earnings */}
// //           <div className="w-full space-y-6 bg-white">
// //             {/* Matrix Tree + AI Trading */}
// //             <div className="bg-white rounded-2xl p-6 ">
// //               <div className="flex flex-col lg:flex-row gap-6">
// //                 {/* Matrix Tree (70%) */}
// //                 <div className="flex-1 lg:w-[70%]">
// //                   <div className="flex items-center justify-between mb-6">
// //                     <div className="flex-1"></div>
// //                     <div className="flex-1 flex justify-center">
// //                       <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center shadow-lg">
// //                         <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
// //                       </div>
// //                     </div>
// //                     <div className="flex-1 flex justify-end">

// //                     </div>
// //                   </div>

// //                   <div className="space-y-5">
// //                     {/* Level 1 */}
// //                     <div className="flex justify-center gap-3">
// //                       {[1, 2, 3].map((i) => (
// //                         <div key={i} className="w-12 h-12 bg-gray-300 rounded-md shadow-sm"></div>
// //                       ))}
// //                     </div>

// //                     {/* Level 2 */}
// //                     <div className="flex justify-center gap-3">
// //                       {[1, 2, 3, 4, 5,6].map((i) => (
// //                         <div key={i} className="w-12 h-12 bg-gray-300 rounded-md shadow-sm"></div>
// //                       ))}
// //                     </div>

// //                     {/* Level 3 */}
// //                     <div className="flex justify-center gap-3 flex-wrap">
// //                       {Array.from({ length: 6 }, (_, i) => (
// //                         <div key={i} className="w-12 h-12 bg-gray-300 rounde-md shadow-sm"></div>
// //                       ))}
// //                     </div>

// //                     {/* Level 4 */}
// //                     <div className="flex justify-center gap-3 flex-wrap">
// //                       {Array.from({ length: 6 }, (_, i) => (
// //                         <div key={i} className="w-12 h-12 bg-gray-200 rounded-md shadow-sm"></div>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* AI Trading Stats (30%) */}
// //                 <div className="lg:w-[30%] shadow-md border shawdow-md flex flex-col justify-center items-center rounded-md">
// //                   <div className="space-y-4">
// //                     <div>
// //                       <h3 className="text-lg font-bold text-gray-900">AI TRADING</h3>
// //                       <p className="text-sm text-gray-500">Monthly ROI</p>
// //                       <p className="text-2xl font-bold text-gray-900">7.5%</p>
// //                     </div>
// //                     <div>
// //                       <p className="text-sm text-gray-500">Equity Growth</p>
// //                       <p className="text-2xl font-bold text-green-600">18.2%</p>
// //                     </div>
// //                     <div>
// //                       <p className="text-sm text-gray-500">Drawdown</p>
// //                       <p className="text-xl font-bold text-red-600">5.7%</p>
// //                     </div>
// //                     <div>
// //                       <p className="text-sm text-gray-500">Profit Share</p>
// //                       <p className="text-xl font-bold text-gray-900">50/50</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Team Performance */}
// //             <div className="bg-white rounded-2xl p-6 shadow-sm">
// //               <h3 className="text-lg font-bold text-gray-900 mb-6">TEAM PERFORMANCE</h3>
// //               <div className="overflow-x-auto">
// //                 <table className="w-full text-sm">
// //                   <thead>
// //                     <tr className="text-xs text-gray-500 border-b border-gray-200">
// //                       <th className="text-left py-3 font-medium">Level</th>
// //                       <th className="text-center py-3 font-medium">Members</th>
// //                       <th className="text-right py-3 font-medium">Total Deposit (USDT)</th>
// //                       <th className="text-center py-3 font-medium">Active %</th>
// //                       <th className="text-right py-3 font-medium">Active Per Level</th>
// //                     </tr>
// //                   </thead>
// //                   <tbody>
// //                     <tr className="border-b border-gray-100">
// //                       <td className="py-3">Level 1</td>
// //                       <td className="text-center py-3">3</td>
// //                       <td className="text-right py-3">150,000</td>
// //                       <td className="text-center py-3">100%</td>
// //                       <td className="text-right py-3 text-green-600 font-medium">8.2%</td>
// //                     </tr>
// //                     <tr className="border-b border-gray-100">
// //                       <td className="py-3">Level 2</td>
// //                       <td className="text-center py-3">9</td>
// //                       <td className="text-right py-3">420,000</td>
// //                       <td className="text-center py-3">95%</td>
// //                       <td className="text-right py-3 text-green-600 font-medium">7.5%</td>
// //                     </tr>
// //                     <tr className="border-b border-gray-100">
// //                       <td className="py-3">Level 3</td>
// //                       <td className="text-center py-3">27</td>
// //                       <td className="text-right py-3">1,080,000</td>
// //                       <td className="text-center py-3">90%</td>
// //                       <td className="text-right py-3 text-green-600 font-medium">7.5%</td>
// //                     </tr>
// //                     <tr>
// //                       <td className="py-3">Level 4</td>
// //                       <td className="text-center py-3">5</td>
// //                       <td className="text-right py-3">150,000</td>
// //                       <td className="text-center py-3">80%</td>
// //                       <td className="text-right py-3 text-green-600 font-medium">7.5%</td>
// //                     </tr>
// //                   </tbody>
// //                 </table>
// //               </div>
// //             </div>

// //             {/* Earnings Summary */}
// //             <div className="bg-white rounded-2xl p-6 shadow-sm">
// //               <div className="grid grid-cols-3 gap-4 text-center">
// //                 <div>
// //                   <p className="text-sm text-gray-500 mb-1">Total Earnings</p>
// //                   <p className="text-2xl font-bold text-gray-900">$1,250</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-gray-500 mb-1">Withdrawable Profit</p>
// //                   <p className="text-2xl font-bold text-green-600">$890</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-gray-500 mb-1">Active Investment</p>
// //                   <p className="text-xl font-bold text-gray-900">$500</p>
// //                 </div>
// //               </div>

// //               <div className="mt-6 pt-6 border-t border-gray-200">
// //                 <div className="flex items-center justify-between">
// //                   <div className="flex items-center gap-2">
// //                     <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
// //                     <span className="text-sm text-gray-600">RebaCoates</span>
// //                   </div>
// //                   <ChevronDown className="w-4 h-4 text-gray-400" />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // import React from "react";
// // import { QrCode, CheckCircle, ChevronDown } from "lucide-react";

// // export default function Matrix() {
// //   return (
// //     <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
// //       <div className="max-w-7xl mx-auto">
// //         {/* GRID LAYOUT - Responsive */}
// //         <div className="grid grid-cols-1 lg:grid-cols-[30%_1fr] gap-6 items-stretch">
// //           {/* LEFT COLUMN */}
// //           <div className="w-full">
// //             <div className="bg-white rounded-2xl p-6 shadow-sm h-full flex flex-col">
// //               <h3 className="text-lg font-semibold text-gray-900 mb-1">
// //                 MY MATRIX
// //               </h3>

// //               <div className="flex items-center gap-2 mb-4">
// //                 <span className="text-2xl font-bold text-amber-500">Rank</span>
// //                 <span className="text-2xl font-bold text-gray-900">VIP</span>
// //               </div>

// //               <p className="text-sm text-gray-500 mb-1">User ID: 123456</p>

// //               <div className="space-y-4 mt-6">
// //                 <div>
// //                   <p className="text-sm text-gray-500">Wallet Balance</p>
// //                   <p className="text-2xl font-bold text-gray-900">250 USDT</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-gray-500">Active Package</p>
// //                   <p className="text-2xl font-bold text-green-600">$50 K</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-gray-500">Total Team</p>
// //                   <p className="text-2xl font-bold text-gray-900">2,756</p>
// //                 </div>
// //               </div>

// //               <div className="mt-6">
// //                 <p className="text-sm text-gray-500 mb-2">Referral Link</p>
// //                 <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
// //                   <input
// //                     type="text"
// //                     value="https://example.com/refcode"
// //                     readOnly
// //                     className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50"
// //                   />
// //                   <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
// //                     Copy
// //                   </button>
// //                 </div>
// //               </div>

// //               <div className="mt-6">
// //                 <p className="text-sm text-gray-500 mb-1">QR Code</p>
// //                 <p className="text-xs text-gray-400 mb-3">for direct deposit</p>
// //                 <div className="flex justify-center p-4 bg-gray-50 rounded-xl">
// //                   <div className="w-32 h-32 bg-gray-200 border-2 border-dashed rounded-xl flex items-center justify-center">
// //                     <QrCode className="w-16 h-16 text-gray-400" />
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="mt-auto pt-6 border-t border-gray-200">
// //                 <p className="text-sm font-medium text-gray-900 mb-3">
// //                   KYC Status
// //                 </p>
// //                 <div className="flex items-center gap-2">
// //                   <CheckCircle className="w-5 h-5 text-green-500" />
// //                   <span className="text-sm text-green-600 font-medium">
// //                     Verified
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* RIGHT COLUMN */}
// //           <div className="w-full flex flex-col gap-6">
// //             {/* Matrix Tree + AI Trading */}
// //             <div className="bg-white rounded-2xl p-6 h-full">
// //               <div className="flex flex-col lg:flex-row gap-6 h-full">
// //                 {/* MATRIX TREE */}
// //                 <div className="flex-1 flex flex-col justify-between">
// //                   <div className="flex items-center justify-between mb-6">
// //                     <div className="flex-1"></div>
// //                     <div className="flex-1 flex justify-center">
// //                       <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center shadow-lg">
// //                         <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
// //                       </div>
// //                     </div>
// //                     <div className="flex-1 flex justify-end"></div>
// //                   </div>

// //                   <div className="space-y-5">
// //                     <div className="flex justify-center gap-3">
// //                       {[1, 2, 3].map((i) => (
// //                         <div
// //                           key={i}
// //                           className="w-12 h-12 bg-gray-300 rounded-md shadow-sm"
// //                         ></div>
// //                       ))}
// //                     </div>
// //                     <div className="flex justify-center gap-3">
// //                       {[1, 2, 3, 4, 5, 6].map((i) => (
// //                         <div
// //                           key={i}
// //                           className="w-12 h-12 bg-gray-300 rounded-md shadow-sm"
// //                         ></div>
// //                       ))}
// //                     </div>
// //                     <div className="flex justify-center gap-3 flex-wrap">
// //                       {Array.from({ length: 6 }).map((_, i) => (
// //                         <div
// //                           key={i}
// //                           className="w-12 h-12 bg-gray-300 rounded-md shadow-sm"
// //                         ></div>
// //                       ))}
// //                     </div>
// //                     <div className="flex justify-center gap-3 flex-wrap">
// //                       {Array.from({ length: 6 }).map((_, i) => (
// //                         <div
// //                           key={i}
// //                           className="w-12 h-12 bg-gray-200 rounded-md shadow-sm"
// //                         ></div>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* AI TRADING STATS */}
// //                 <div className="lg:w-[30%] flex flex-col justify-center items-center border rounded-md shadow-sm p-4 bg-gray-50">
// //                   <div className="space-y-4 text-center">
// //                     <div>
// //                       <h3 className="text-lg font-bold text-gray-900">
// //                         AI TRADING
// //                       </h3>
// //                       <p className="text-sm text-gray-500">Monthly ROI</p>
// //                       <p className="text-2xl font-bold text-gray-900">7.5%</p>
// //                     </div>
// //                     <div>
// //                       <p className="text-sm text-gray-500">Equity Growth</p>
// //                       <p className="text-2xl font-bold text-green-600">18.2%</p>
// //                     </div>
// //                     <div>
// //                       <p className="text-sm text-gray-500">Drawdown</p>
// //                       <p className="text-xl font-bold text-red-600">5.7%</p>
// //                     </div>
// //                     <div>
// //                       <p className="text-sm text-gray-500">Profit Share</p>
// //                       <p className="text-xl font-bold text-gray-900">50/50</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* TEAM PERFORMANCE */}
// //             <div className="bg-white rounded-2xl p-6 shadow-sm overflow-x-auto">
// //               <h3 className="text-lg font-bold text-gray-900 mb-6">
// //                 TEAM PERFORMANCE
// //               </h3>
// //               <table className="w-full text-sm">
// //                 <thead>
// //                   <tr className="text-xs text-gray-500 border-b border-gray-200">
// //                     <th className="text-left py-3 font-medium">Level</th>
// //                     <th className="text-center py-3 font-medium">Members</th>
// //                     <th className="text-right py-3 font-medium">
// //                       Total Deposit (USDT)
// //                     </th>
// //                     <th className="text-center py-3 font-medium">Active %</th>
// //                     <th className="text-right py-3 font-medium">
// //                       Active Per Level
// //                     </th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {[
// //                     ["Level 1", 3, "150,000", "100%", "8.2%"],
// //                     ["Level 2", 9, "420,000", "95%", "7.5%"],
// //                     ["Level 3", 27, "1,080,000", "90%", "7.5%"],
// //                     ["Level 4", 5, "150,000", "80%", "7.5%"],
// //                   ].map(([level, members, deposit, active, perLevel], i) => (
// //                     <tr
// //                       key={i}
// //                       className="border-b border-gray-100 last:border-0"
// //                     >
// //                       <td className="py-3">{level}</td>
// //                       <td className="text-center py-3">{members}</td>
// //                       <td className="text-right py-3">{deposit}</td>
// //                       <td className="text-center py-3">{active}</td>
// //                       <td className="text-right py-3 text-green-600 font-medium">
// //                         {perLevel}
// //                       </td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>

// //             {/* EARNINGS SUMMARY */}
// //             <div className="bg-white rounded-2xl p-6 shadow-sm">
// //               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
// //                 <div>
// //                   <p className="text-sm text-gray-500 mb-1">Total Earnings</p>
// //                   <p className="text-2xl font-bold text-gray-900">$1,250</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-gray-500 mb-1">
// //                     Withdrawable Profit
// //                   </p>
// //                   <p className="text-2xl font-bold text-green-600">$890</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-gray-500 mb-1">
// //                     Active Investment
// //                   </p>
// //                   <p className="text-xl font-bold text-gray-900">$500</p>
// //                 </div>
// //               </div>

// //               <div className="mt-6 pt-6 border-t border-gray-200">
// //                 <div className="flex items-center justify-between">
// //                   <div className="flex items-center gap-2">
// //                     <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
// //                     <span className="text-sm text-gray-600">RebaCoates</span>
// //                   </div>
// //                   <ChevronDown className="w-4 h-4 text-gray-400" />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // import React from "react";
// // import { QrCode, CheckCircle, ChevronDown, User } from "lucide-react";

// // export default function Matrix() {
// //   return (
// //     <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
// //       <div className="max-w-7xl mx-auto">
// //         <div className="grid grid-cols-1 lg:grid-cols-[30%_1fr] gap-6 items-stretch">
// //           {/* LEFT COLUMN */}
// //           <div className="w-full">
// //             <div className="bg-white rounded-2xl p-6 shadow-sm h-full flex flex-col">
// //               <h3 className="text-lg font-semibold text-gray-900 mb-1">
// //                 MY MATRIX
// //               </h3>

// //               <div className="flex items-center gap-2 mb-4">
// //                 <span className="text-2xl font-bold text-amber-500">Rank</span>
// //                 <span className="text-2xl font-bold text-gray-900">VIP</span>
// //               </div>

// //               <p className="text-sm text-gray-500 mb-1">User ID: 123456</p>

// //               <div className="space-y-4 mt-6">
// //                 <div>
// //                   <p className="text-sm text-gray-500">Wallet Balance</p>
// //                   <p className="text-2xl font-bold text-gray-900">250 USDT</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-gray-500">Active Package</p>
// //                   <p className="text-2xl font-bold text-green-600">$50 K</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-gray-500">Total Team</p>
// //                   <p className="text-2xl font-bold text-gray-900">2,756</p>
// //                 </div>
// //               </div>

// //               <div className="mt-6">
// //                 <p className="text-sm text-gray-500 mb-2">Referral Link</p>
// //                 <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
// //                   <input
// //                     type="text"
// //                     value="https://example.com/refcode"
// //                     readOnly
// //                     className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50"
// //                   />
// //                   <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
// //                     Copy
// //                   </button>
// //                 </div>
// //               </div>

// //               <div className="mt-6">
// //                 <p className="text-sm text-gray-500 mb-1">QR Code</p>
// //                 <p className="text-xs text-gray-400 mb-3">for direct deposit</p>
// //                 <div className="flex justify-center p-4 bg-gray-50 rounded-xl">
// //                   <div className="w-32 h-32 bg-gray-200 border-2 border-dashed rounded-xl flex items-center justify-center">
// //                     <QrCode className="w-16 h-16 text-gray-400" />
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="mt-auto pt-6 border-t border-gray-200">
// //                 <p className="text-sm font-medium text-gray-900 mb-3">
// //                   KYC Status
// //                 </p>
// //                 <div className="flex items-center gap-2">
// //                   <CheckCircle className="w-5 h-5 text-green-500" />
// //                   <span className="text-sm text-green-600 font-medium">
// //                     Verified
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* RIGHT COLUMN */}
// //           <div className="w-full flex flex-col gap-6">
// //             {/* MATRIX TREE */}
// //             <div className="bg-white rounded-2xl p-6 h-full">
// //               <h3 className="text-lg font-semibold text-gray-900 mb-4">
// //                 MATRIX TREE
// //               </h3>
// //               <div className="flex flex-col items-center gap-5">
// //                 {/* LEVEL 1 */}
// //                 <div className="relative flex justify-center">
// //                   <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center shadow">
// //                     <User className="text-gray-600 w-6 h-6" />
// //                   </div>
// //                   {/* Connection line */}
// //                   <div className="absolute top-full left-1/2 w-[2px] h-8 bg-gray-300 transform -translate-x-1/2"></div>
// //                 </div>

// //                 {/* LEVEL 2 */}
// //                 <div className="relative flex justify-center gap-10">
// //                   {[1, 2, 3].map((i) => (
// //                     <div key={i} className="relative flex flex-col items-center">
// //                       <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center shadow">
// //                         <User className="text-gray-600 w-5 h-5" />
// //                       </div>
// //                       {/* Connection to next level */}
// //                       <div className="absolute top-full left-1/2 w-[2px] h-6 bg-gray-300 transform -translate-x-1/2"></div>
// //                     </div>
// //                   ))}
// //                   {/* Horizontal line connecting children */}
// //                   <div className="absolute top-0 left-0 right-0 h-[2px] bg-gray-300 mt-[-8px]"></div>
// //                 </div>

// //                 {/* LEVEL 3 */}
// //                 <div className="flex justify-center flex-wrap gap-8">
// //                   {Array.from({ length: 6 }).map((_, i) => (
// //                     <div
// //                       key={i}
// //                       className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center shadow"
// //                     >
// //                       <User className="text-gray-600 w-5 h-5" />
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>

// //             {/* TEAM PERFORMANCE - SCROLLABLE */}
// //             <div className="bg-white rounded-2xl p-6 shadow-sm">
// //               <h3 className="text-lg font-bold text-gray-900 mb-6">
// //                 TEAM PERFORMANCE
// //               </h3>
// //               <div className="overflow-x-auto max-h-[350px] overflow-y-auto">
// //                 <table className="w-full text-sm">
// //                   <thead className="sticky top-0 bg-white">
// //                     <tr className="text-xs text-gray-500 border-b border-gray-200">
// //                       <th className="text-left py-3 font-medium">Level</th>
// //                       <th className="text-center py-3 font-medium">Members</th>
// //                       <th className="text-right py-3 font-medium">
// //                         Total Deposit (USDT)
// //                       </th>
// //                       <th className="text-center py-3 font-medium">Active %</th>
// //                       <th className="text-right py-3 font-medium">
// //                         Active Per Level
// //                       </th>
// //                     </tr>
// //                   </thead>
// //                   <tbody>
// //                     {[
// //                       ["Level 1", 3, "150,000", "100%", "8.2%"],
// //                       ["Level 2", 9, "420,000", "95%", "7.5%"],
// //                       ["Level 3", 27, "1,080,000", "90%", "7.5%"],
// //                       ["Level 4", 5, "150,000", "80%", "7.5%"],
// //                       ["Level 5", 12, "300,000", "75%", "6.8%"],
// //                       ["Level 6", 40, "980,000", "70%", "6.2%"],
// //                       ["Level 7", 60, "1,500,000", "65%", "5.8%"],
// //                       ["Level 8", 120, "3,200,000", "60%", "5.0%"],
// //                     ].map(([level, members, deposit, active, perLevel], i) => (
// //                       <tr
// //                         key={i}
// //                         className="border-b border-gray-100 last:border-0"
// //                       >
// //                         <td className="py-3">{level}</td>
// //                         <td className="text-center py-3">{members}</td>
// //                         <td className="text-right py-3">{deposit}</td>
// //                         <td className="text-center py-3">{active}</td>
// //                         <td className="text-right py-3 text-green-600 font-medium">
// //                           {perLevel}
// //                         </td>
// //                       </tr>
// //                     ))}
// //                   </tbody>
// //                 </table>
// //               </div>
// //             </div>

// //             {/* EARNINGS SUMMARY */}
// //             <div className="bg-white rounded-2xl p-6 shadow-sm">
// //               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
// //                 <div>
// //                   <p className="text-sm text-gray-500 mb-1">Total Earnings</p>
// //                   <p className="text-2xl font-bold text-gray-900">$1,250</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-gray-500 mb-1">
// //                     Withdrawable Profit
// //                   </p>
// //                   <p className="text-2xl font-bold text-green-600">$890</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-gray-500 mb-1">
// //                     Active Investment
// //                   </p>
// //                   <p className="text-xl font-bold text-gray-900">$500</p>
// //                 </div>
// //               </div>

// //               <div className="mt-6 pt-6 border-t border-gray-200">
// //                 <div className="flex items-center justify-between">
// //                   <div className="flex items-center gap-2">
// //                     <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
// //                     <span className="text-sm text-gray-600">RebaCoates</span>
// //                   </div>
// //                   <ChevronDown className="w-4 h-4 text-gray-400" />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import React from "react";
// import { QrCode, CheckCircle, ChevronDown, User } from "lucide-react";

// // ✅ Dummy AI Trading component (replace with your actual component)
// function AiTrading() {
//   return (
//     <div className="bg-white w-full dark:text-white dark:bg-neutral-800  rounded-2xl p-6 shadow-sm h-full">
//       <h3 className="text-lg font-semibold text-gray-900 mb-4">AI TRADING</h3>
//       <div className="space-y-4">
//         <div className="flex justify-between items-center">
//           <p className="text-sm text-gray-500">Active Trades</p>
//           <p className="text-lg font-semibold text-green-600">15</p>
//         </div>
//         <div className="flex justify-between items-center">
//           <p className="text-sm text-gray-500">Total Profit</p>
//           <p className="text-lg font-semibold text-gray-900">$3,250</p>
//         </div>
//         <div className="flex justify-between items-center">
//           <p className="text-sm text-gray-500">AI Accuracy</p>
//           <p className="text-lg font-semibold text-blue-600">94%</p>
//         </div>
//       </div>
//       <div className="mt-6 text-center"></div>
//     </div>
//   );
// }

// export default function Matrix() {
//   return (
//     <div className="min-h-screen dark:text-white dark:bg-neutral-800 bg-gray-50 p-4 md:p-6 lg:p-8">
//       <div className="max-w-7xl dark:text-white dark:bg-neutral-800 mx-auto">
//         <div className="grid dark:text-white dark:bg-neutral-800 grid-cols-1 lg:grid-cols-[30%_1fr] gap-6 items-stretch">
//           {/* LEFT COLUMN */}
//           <div className="w-full dark:text-white dark:bg-neutral-800">
//             <div className="bg-white dark:text-white dark:bg-neutral-800 rounded-2xl p-6 shadow-sm h-full flex flex-col">
//               <h3 className="text-lg dark:text-white dark:bg-neutral-800 font-semibold text-gray-900 mb-1">
//                 MY MATRIX
//               </h3>

//               <div className="flex dark:text-white dark:bg-neutral-800 items-center gap-2 mb-4">
//                 <span className="text-2xl font-bold text-amber-500 dark:text-white dark:bg-neutral-800">Rank</span>
//                 <span className="text-2xl font-bold text-gray-900 dark:text-white dark:bg-neutral-800">VIP</span>
//               </div>

//               <p className="text-sm text-gray-500 mb-1 dark:text-white dark:bg-neutral-800">User ID: 123456</p>

//               <div className="space-y-4 mt-6">
//                 <div>
//                   <p className="text-sm text-gray-500 dark:text-white dark:bg-neutral-800">Wallet Balance</p>
//                   <p className="text-2xl font-bold text-gray-900 dark:text-white dark:bg-neutral-800">250 USDT</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500 dark:text-white dark:bg-neutral-800">Active Package</p>
//                   <p className="text-2xl font-bold text-green-600">$50 K</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500 dark:text-white dark:bg-neutral-800">Total Team</p>
//                   <p className="text-2xl font-bold text-gray-900 dark:text-white dark:bg-neutral-800">2,756</p>
//                 </div>
//               </div>

//               <div className="mt-6">
//                 <p className="text-sm text-gray-500 mb-2 dark:text-white dark:bg-neutral-800">Referral Link</p>
//                 <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
//                   <input
//                     type="text"
//                     value="https://example.com/refcode"
//                     readOnly
//                     className="flex-1 dark:text-white dark:bg-neutral-800 px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50"
//                   />
//                   <button className="px-4 dark:text-white dark:bg-neutral-800 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
//                     Copy
//                   </button>
//                 </div>
//               </div>

//               <div className="mt-6">
//                 <p className="text-sm dark:text-white dark:bg-neutral-800 text-gray-500 mb-1">QR Code</p>
//                 <p className="text-xs dark:text-white dark:bg-neutral-800 text-gray-400 mb-3">for direct deposit</p>
//                 <div className="flex justify-start p-4 bg-gray-50 dark:text-white dark:bg-neutral-800 dark:border rounded-xl">
//                   <div className="w-32 dark:text-white dark:bg-neutral-800 h-32 bg-gray-200 border-2 border-dashed rounded-xl flex items-center justify-center">
//                     <QrCode className="w-16 h-16 text-gray-400 dark:text-white dark:bg-neutral-800" />
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-auto pt-6 border-t border-gray-200">
//                 <p className="text-sm font-medium text-gray-900 mb-3 dark:text-white dark:bg-neutral-800">
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
//           <div className="w-full dark:text-white dark:bg-neutral-800 p-5 bg-white flex flex-col gap-6">
//             {/* MATRIX TREE + AI TRADING SIDE BY SIDE */}
//             <div className="  w-full  p-6 h-full ">
              
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
//                 {/* MATRIX TREE */}
//                 <div className="flex flex-col items-center gap-5 relative">
//                   {/* LEVEL 1 */}
//                   <div className="relative flex justify-center">
//                     <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center shadow-md">
//                       <User className="text-gray-600 w-6 h-6" />
//                     </div>
//                     <div className="absolute top-full left-1/2 w-[2px] h-8 bg-gray-300 transform -translate-x-1/2"></div>
//                   </div>

//                   {/* LEVEL 2 */}
//                   <div className="relative flex justify-center gap-10">
//                     {[1, 2, 3].map((i) => (
//                       <div
//                         key={i}
//                         className="relative flex flex-col items-center"
//                       >
//                         <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shadow">
//                           <User className="text-gray-600 w-5 h-5" />
//                         </div>
//                         <div className="absolute top-full left-1/2 w-[2px] h-6 bg-gray-300 transform -translate-x-1/2"></div>
//                       </div>
//                     ))}
//                     <div className="absolute top-0 left-0 right-0 h-[2px] bg-gray-300 mt-[-8px]"></div>
//                   </div>

//                   {/* LEVEL 3 */}
//                   <div className="flex justify-center flex-wrap gap-6 mt-2">
//                     {Array.from({ length: 20 }).map((_, i) => (
//                       <div
//                         key={i}
//                         className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center shadow-sm"
//                       >
//                         <User className="text-gray-600 w-5 h-5" />
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* AI TRADING */}
//                 <div className="flex dark:text-white dark:bg-neutral-800 flex-col justify-between bg-white rounded-xl md:w-[50%] w-full shadow-md border  p-5 h-full shadow-inner">
//                   <h4 className="text-lg font-semibold text-gray-800 mb-4 dark:text-white dark:bg-neutral-800">
//                     AI TRADING
//                   </h4>

//                   <div className="space-y-4 text-start">
//                     <div className="flex flex-col items-start">
//                       <p className="text-sm text-gray-500 dark:text-white dark:bg-neutral-800">Monthly ROI</p>
//                       <p className="text-lg font-semibold text-green-600 dark:text-white dark:bg-neutral-800">
//                         7.5
//                       </p>
//                     </div>
//                     <div className="flex flex-col items-start">
//                       <p className="text-sm text-gray-500 dark:text-white dark:bg-neutral-800">Equality Growth</p>
//                       <p className="text-lg font-semibold dark:text-white dark:bg-neutral-800 text-gray-900">
//                         18.2%
//                       </p>
//                     </div>
//                     <div className="flex flex-col items-start">
//                       <p className="text-sm text-gray-500 dark:text-white dark:bg-neutral-800">Drawdown</p>
//                       <p className="text-lg font-semibold text-blue-600">
//                         7.5%
//                       </p>
//                     </div>
//                     <div className="flex flex-col items-start">
//                       <p className="text-sm text-gray-500 dark:text-white dark:bg-neutral-800">Profit share </p>
//                       <p className="text-lg font-semibold text-blue-600">
//                         50/50
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* TEAM PERFORMANCE */}
//             <div className="bg-white dark:text-white dark:bg-neutral-800 p-6 border">
//               <h3 className="text-lg font-bold text-gray-900 mb-6 dark:text-white dark:bg-neutral-800">
//                 TEAM PERFORMANCE
//               </h3>
//               <div className="overflow-x-auto dark:text-white dark:bg-neutral-800 max-h-[350px] overflow-y-auto">
//                 <table className="w-full dark:text-white dark:bg-neutral-800 text-sm">
//                   <thead className="sticky dark:text-white dark:bg-neutral-800 top-0 bg-white">
//                     <tr className="text-xs dark:text-white dark:bg-neutral-800 text-gray-500 border-b border-gray-200">
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
//                         className="border-b border-gray-100  last:border-0"
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
//             <div className="bg- dark:text-white dark:bg-neutral-800 rounded-2xl p-6 shadow-sm">
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
//                 <div>
//                   <p className="text-sm text-gray-500 mb-1 dark:text-white dark:bg-neutral-800">Total Earnings</p>
//                   <p className="text-2xl font-bold text-gray-900 dark:text-white dark:bg-neutral-800">$1,250</p>
//                 </div>
//                 <div>
//                   <p className="text-sm dark:text-white dark:bg-neutral-800 text-gray-500 mb-1">
//                     Withdrawable Profit
//                   </p>
//                   <p className="text-2xl dark:text-white dark:bg-neutral-800 font-bold text-green-600">$890</p>
//                 </div>
//                 <div>
//                   <p className="text-sm dark:text-white dark:bg-neutral-800 text-gray-500 mb-1">
//                     Active Investment
//                   </p>
//                   <p className="text-xl dark:text-white dark:bg-neutral-800 font-bold text-gray-900">$500</p>
//                 </div>
//               </div>

//               <div className="mt-6 pt-6 border-t border-gray-200">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
//                     <span className="text-sm text-gray-600 dark:text-white dark:bg-neutral-800">RebaCoates</span>
//                   </div>
//                   <ChevronDown className="w-4 dark:text-white dark:bg-neutral-800 h-4 text-gray-400" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }










/* ──────────────────────────────────────────────────────────────
   Matrix – 100% live data, copyable link, scannable QR, short ID
   ────────────────────────────────────────────────────────────── */

// import React, { useEffect, useState, useRef } from "react";
// import { QrCode, CheckCircle, ChevronDown, User, Copy, Check } from "lucide-react";
// import QRCode from "qrcode";
// import { getUserProfile } from "../../api/authApi";

// export default function Matrix() {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [qrUrl, setQrUrl] = useState("");
//   const [copied, setCopied] = useState(false);
//   const referralInputRef = useRef(null);

//   /* ────── FETCH PROFILE ────── */
//   useEffect(() => {
//     const token = localStorage.getItem("authToken") || "";
//     if (!token) {
//       setError("No auth token found. Please log in.");
//       setLoading(false);
//       return;
//     }

//     getUserProfile(token)
//       .then((data) => {
//         setProfile(data);
//         setLoading(false);

//         // Generate QR code
//         const refLink = `https://veloxcapital.com/ref/${data.referralCode}`;
//         QRCode.toDataURL(refLink, { width: 200, margin: 2 })
//           .then(setQrUrl)
//           .catch(() => setQrUrl(""));
//       })
//       .catch((err) => {
//         setError(err.message || "Failed to load profile.");
//         setLoading(false);
//       });
//   }, []);

//   /* ────── COPY REFERRAL LINK ────── */
//   const copyReferral = () => {
//     if (!referralInputRef.current) return;
//     referralInputRef.current.select();
//     document.execCommand("copy");
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   /* ────── SHORTEN USER ID (Frontend Only) ────── */
//   const shortUserId = (id) => {
//     if (!id || id.length <= 12) return id;
//     return `${id.slice(0, 6)}...${id.slice(-4)}`;
//   };

//   /* ────── DERIVED VALUES ────── */
//   if (!profile) return null;

//   const matrix = profile.matrix || {};
//   const position = matrix.position || "—";
//   const parent = matrix.parent || "No Upline";

//   const referralLink = `https://veloxcapital.com/ref/${profile.referralCode}`;
//   const walletBalance = (profile.wallets?.deposit || 0) + (profile.wallets?.earnings || 0);
//   const activePackage = profile.activePackage?.name || "None";
//   const totalTeam = profile.totalDownline || 0;

//   const matrixBonus = profile.bonusBreakdown?.matrix_bonus || 0;
//   const withdrawable = profile.withdrawableProfit || 0;
//   const activeInvestment = profile.activeInvestment || 0;

//   /* ────── LOADING / ERROR UI ────── */
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
//         <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-[#00A991]"></div>
//         <span className="ml-3 text-lg text-gray-700">Loading Matrix…</span>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
//         <div className="bg-red-50 border border-red-200 rounded-xl p-6 max-w-md text-center">
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

//   /* ────── MAIN UI ────── */
//   return (
//     <div className="min-h-screen dark:bg-neutral-800 dark:text-white bg-gray-50 p-4 md:p-6 lg:p-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-[30%_1fr] gap-6 items-stretch">
//           {/* ────── LEFT COLUMN ────── */}
//           <div className="w-full">
//             <div className="bg-white dark:bg-neutral-800 dark:text-white  rounded-2xl p-3 shadow-sm h-full flex flex-col">
//               <h3 className="text-lg font-semibold text-gray-900 mb-1 dark:bg-neutral-800 dark:text-white ">MY MATRIX</h3>
//               <div className="flex items-center gap-2 mb-4">
//                 <span className="text-2xl font-bold text-amber-500 dark:bg-neutral-800 dark:text-white ">Rank</span>
//                 <span className="text-2xl font-bold text-gray-900 capitalize dark:bg-neutral-800 dark:text-white ">
//                   {profile.rank}
//                 </span>
//               </div>
//               <p className="text-sm dark:bg-neutral-800 dark:text-white  text-gray-500 mb-1">
//                 User ID: <span className="font-mono">{shortUserId(profile.userId)}</span>
//               </p>

//               <div className="space-y-4 mt-6">
//                 <div>
//                   <p className="text-sm text-gray-500 dark:bg-neutral-800 dark:text-white ">Wallet Balance</p>
//                   <p className="text-2xl font-bold text-gray-900">
//                     {walletBalance} <span className="text-sm text-gray-500 dark:bg-neutral-800 dark:text-white ">USDT</span>
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500 dark:bg-neutral-800 dark:text-white ">Active Package</p>
//                   <p className="text-2xl font-bold text-green-600">{activePackage}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500 dark:bg-neutral-800 dark:text-white ">Total Team</p>
//                   <p className="text-2xl font-bold text-gray-900">{totalTeam}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500 dark:bg-neutral-800 dark:text-white ">Matrix Position</p>
//                   <p className="text-lg font-mono text-gray-700">{position}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500 dark:bg-neutral-800 dark:text-white ">Upline (Parent)</p>
//                   <p className="text-lg font-medium text-gray-900">{parent}</p>
//                 </div>
//               </div>

//               <div className="mt-6 ">
//                 <p className="text-sm text-gray-500 mb-2 dark:bg-neutral-800 dark:text-white ">Referral Link</p>
//                 <div className="flex items-center gap-2">
//                   <input
//                     ref={referralInputRef}
//                     type="text"
//                     value={referralLink}
//                     readOnly
//                     className="flex-1 dark:bg-neutral-800 dark:text-white  px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 font-mono text-xs"
//                   />
//                   <button
//                     onClick={copyReferral}
//                     className="px-2 dark:bg-neutral-800 dark:text-white  py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition flex items-center gap-1"
//                   >
//                     {copied ? (
//                       <>
//                         <Check size={14} className="text-green-600 dark:bg-neutral-800 dark:text-white " />
//                         Copied
//                       </>
//                     ) : (
//                       <>
//                         <Copy size={14} />
//                         Copy
//                       </>
//                     )}
//                   </button>
//                 </div>
//               </div>

//               <div className="mt-6">
//                 <p className="text-sm text-gray-500 mb-1">QR Code</p>
//                 <p className="text-xs text-gray-400 mb-3">for direct deposit</p>
//                 <div className="flex justify-center p-4 bg-gray-50 rounded-xl">
//                   {qrUrl ? (
//                     <img src={qrUrl} alt="Referral QR" className="w-32 h-32" />
//                   ) : (
//                     <div className="w-32 h-32 bg-gray-200 border-2 border-dashed rounded-xl flex items-center justify-center">
//                       <QrCode className="w-16 h-16 text-gray-400" />
//                     </div>
//                   )}
//                 </div>
//               </div>

//               <div className="mt-auto pt-6 border-t border-gray-200">
//                 <p className="text-sm font-medium text-gray-900 mb-3 dark:bg-neutral-800 dark:text-white ">KYC Status</p>
//                 <div className="flex items-center gap-2">
//                   <CheckCircle className="w-5 h-5 text-green-500" />
//                   <span className="text-sm text-green-600 font-medium">Verified</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ────── RIGHT COLUMN ────── */}
//           <div className="w-full dark:bg-neutral-800 dark:text-white  flex flex-col gap-6">
//             {/* Matrix Tree + AI Trading */}
//             <div className="bg-white dark:bg-neutral-800 dark:text-white  rounded-2xl p-6">
//               <div className="grid dark:bg-neutral-800 dark:text-white  grid-cols-1 lg:grid-cols-2 gap-8 items-start">
//                 {/* Matrix Tree */}
//                 <div className="flex flex-col items-center gap-5">
//                   <h4 className="text-lg font-semibold text-gray-900 mb-2 dark:bg-neutral-800 dark:text-white ">MATRIX TREE</h4>
//                   {/* Level 1 - You */}
//                   <div className="relative">
//                     <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
//                       <User className="text-white w-7 h-7" />
//                     </div>
//                     <div className="absolute top-full left-1/2 w-0.5 h-8 bg-gray-300 -translate-x-1/2"></div>
//                   </div>
//                   {/* Level 2 */}
//                   <div className="flex gap-8">
//                     {[1, 2, 3].map((i) => (
//                       <div key={i} className="flex flex-col items-center">
//                         <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shadow">
//                           <User className="text-gray-600 w-5 h-5" />
//                         </div>
//                         <div className="w-0.5 h-6 bg-gray-300 mt-1"></div>
//                       </div>
//                     ))}
//                   </div>
//                   {/* Level 3 */}
//                   <div className="flex flex-wrap justify-center gap-4">
//                     {Array.from({ length: 9 }).map((_, i) => (
//                       <div
//                         key={i}
//                         className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shadow-sm"
//                       >
//                         <User className="text-gray-600 w-4 h-4" />
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* AI Trading */}
//                 <div className="bg-gray-50 dark:bg-neutral-800 dark:text-white  rounded-xl p-5 h-full flex flex-col justify-center">
//                   <h4 className="text-lg font-semibold text-gray-800 mb-4 dark:bg-neutral-800 dark:text-white ">AI TRADING</h4>
//                   <div className="space-y-3 text-sm">
//                     <div className="flex justify-between">
//                       <span className="text-gray-500 dark:bg-neutral-800 dark:text-white ">Monthly ROI</span>
//                       <span className="font-medium text-green-600 dark:bg-neutral-800 dark:text-white ">7.5%</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-500 dark:bg-neutral-800 dark:text-white ">Equity Growth</span>
//                       <span className="font-medium text-gray-900 dark:bg-neutral-800 dark:text-white ">18.2%</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-500 dark:bg-neutral-800 dark:text-white ">Drawdown</span>
//                       <span className="font-medium text-red-600 dark:bg-neutral-800 dark:text-white ">5.7%</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-500 dark:bg-neutral-800 dark:text-white ">Profit Share</span>
//                       <span className="font-medium text-blue-600 dark:bg-neutral-800 dark:text-white ">50/50</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Team Performance */}
//             <div className="bg-white dark:bg-neutral-800 dark:text-white  rounded-2xl p-6 shadow-sm">
//               <h3 className="text-lg font-bold text-gray-900 mb-6 dark:bg-neutral-800 dark:text-white ">TEAM PERFORMANCE</h3>
//               <div className="overflow-x-auto dark:bg-neutral-800 dark:text-white ">
//                 <table className="w-full text-sm dark:bg-neutral-800 dark:text-white ">
//                   <thead>
//                     <tr className="text-xs dark:bg-neutral-800 dark:text-white  text-gray-500 border-b border-gray-200">
//                       <th className="text-left py-3 font-medium">Level</th>
//                       <th className="text-center py-3 font-medium">Members</th>
//                       <th className="text-right py-3 font-medium">Total Deposit (USDT)</th>
//                       <th className="text-center py-3 font-medium">Active %</th>
//                       <th className="text-right py-3 font-medium">Bonus</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {profile.unilevelBonusPerformance &&
//                       Object.keys(profile.unilevelBonusPerformance)
//                         .filter((k) => k.startsWith("level"))
//                         .map((k) => {
//                           const lvl = profile.unilevelBonusPerformance[k];
//                           return (
//                             <tr key={k} className="border-b border-gray-100">
//                               <td className="py-3">Level {k.replace("level", "")}</td>
//                               <td className="text-center py-3">{lvl.members || 0}</td>
//                               <td className="text-right py-3">{(lvl.totalDeposit || 0).toLocaleString()}</td>
//                               <td className="text-center py-3">
//                                 {lvl.members > 0
//                                   ? `${Math.round((lvl.activeMembers / lvl.members) * 100)}%`
//                                   : "0%"}
//                               </td>
//                               <td className="text-right py-3 text-green-600 font-medium">
//                                 ${lvl.bonusEarned || 0}
//                               </td>
//                             </tr>
//                           );
//                         })}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* Earnings Summary */}
//             <div className="bg-white dark:bg-neutral-800 dark:text-white  rounded-2xl p-6 shadow-sm">
//               <div className="grid dark:bg-neutral-800 dark:text-white  grid-cols-1 sm:grid-cols-3 gap-4 text-center">
//                 <div>
//                   <p className="text-sm text-gray-500 mb-1 dark:bg-neutral-800 dark:text-white ">Total Matrix Bonus</p>
//                   <p className="text-2xl dark:bg-neutral-800 dark:text-white  font-bold text-gray-900">${matrixBonus.toLocaleString()}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500 mb-1 dark:bg-neutral-800 dark:text-white ">Withdrawable Profit</p>
//                   <p className="text-2xl dark:bg-neutral-800 dark:text-white  font-bold text-green-600">${withdrawable.toLocaleString()}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500 mb-1 dark:bg-neutral-800 dark:text-white ">Active Investment</p>
//                   <p className="text-xl font-bold text-gray-900 dark:bg-neutral-800 dark:text-white ">${activeInvestment.toLocaleString()}</p>
//                 </div>
//               </div>
//               <div className="mt-6 pt-6 border-t border-gray-200">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
//                     <span className="text-sm text-gray-600 dark:bg-neutral-800 dark:text-white ">Velox Capital</span>
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









// import React, { useEffect, useState, useRef } from "react";
// import { QrCode, CheckCircle, Copy, Check } from "lucide-react";
// import QRCode from "qrcode";
// import { getUserProfile } from "../../api/authApi";

// export default function Matrix() {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [qrUrl, setQrUrl] = useState("");
//   const [copied, setCopied] = useState(false);
//   const referralInputRef = useRef(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem("authToken");

//         if (!token) {
//           console.warn("No token found — showing UI but skipping fetch");
//           setLoading(false);
//           return;
//         }

//         const data = await getUserProfile();
//         setProfile(data);

//         const qr = await QRCode.toDataURL(
//           `https://veloxcapital.com/ref/${data.referralCode}`,
//           { width: 200, margin: 2 }
//         );
//         setQrUrl(qr);
//       } catch (err) {
//         console.error("Failed to load profile:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);

//   const copyReferral = () => {
//     if (!referralInputRef.current) return;
//     navigator.clipboard.writeText(referralInputRef.current.value);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const shortUserId = (id) => {
//     if (!id || id.length <= 12) return id;
//     return `${id.slice(0, 6)}...${id.slice(-4)}`;
//   };

//   const walletBalance =
//     (profile?.wallets?.deposit || 0) + (profile?.wallets?.earnings || 0);
//   const activePackage = profile?.activePackage?.name || "—";
//   const totalTeam = profile?.totalDownline || 0;
//   const matrixBonus = profile?.bonusBreakdown?.matrix_bonus || 0;
//   const position = profile?.matrix?.position || "—";
//   const parent = profile?.matrix?.parent || "—";
//   const referralLink = `https://veloxcapital.com/ref/${profile?.referralCode || ""}`;

//   return (
//     <div className="min-h-screen dark:bg-neutral-800 dark:text-white bg-gray-50 p-4 md:p-6 lg:p-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-[30%_1fr] gap-6 items-stretch">
//           {/* LEFT COLUMN */}
//           <div className="w-full">
//             <div className="bg-white dark:bg-neutral-800 rounded-2xl p-3 shadow-sm h-full flex flex-col">
//               <h3 className="text-lg font-semibold text-gray-900 mb-1">MY MATRIX</h3>
//               <div className="flex items-center gap-2 mb-4">
//                 <span className="text-2xl font-bold text-amber-500">Rank</span>
//                 <span className="text-2xl font-bold capitalize">
//                   {profile?.rank || "—"}
//                 </span>
//               </div>
//               <p className="text-sm text-gray-500 mb-1">
//                 User ID:{" "}
//                 <span className="font-mono">{shortUserId(profile?.userId || "—")}</span>
//               </p>

//               <div className="space-y-4 mt-6">
//                 <div>
//                   <p className="text-sm text-gray-500">Wallet Balance</p>
//                   <p className="text-2xl font-bold text-gray-900">
//                     {walletBalance} <span className="text-sm text-gray-500">USDT</span>
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Active Package</p>
//                   <p className="text-2xl font-bold text-green-600">{activePackage}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Total Team</p>
//                   <p className="text-2xl font-bold text-gray-900">{totalTeam}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Matrix Position</p>
//                   <p className="text-lg font-mono text-gray-700">{position}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Upline (Parent)</p>
//                   <p className="text-lg font-medium text-gray-900">{parent}</p>
//                 </div>
//               </div>

//               <div className="mt-6">
//                 <p className="text-sm text-gray-500 mb-2">Referral Link</p>
//                 <div className="flex items-center gap-2">
//                   <input
//                     ref={referralInputRef}
//                     type="text"
//                     value={referralLink}
//                     readOnly
//                     className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 font-mono text-xs"
//                   />
//                   <button
//                     onClick={copyReferral}
//                     className="px-2 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition flex items-center gap-1"
//                   >
//                     {copied ? (
//                       <>
//                         <Check size={14} className="text-green-600" />
//                         Copied
//                       </>
//                     ) : (
//                       <>
//                         <Copy size={14} />
//                         Copy
//                       </>
//                     )}
//                   </button>
//                 </div>
//               </div>

//               <div className="mt-6">
//                 <p className="text-sm text-gray-500 mb-1">QR Code</p>
//                 <p className="text-xs text-gray-400 mb-3">for direct deposit</p>
//                 <div className="flex justify-center p-4 bg-gray-50 rounded-xl">
//                   {qrUrl ? (
//                     <img src={qrUrl} alt="Referral QR" className="w-32 h-32" />
//                   ) : (
//                     <div className="w-32 h-32 bg-gray-200 border-2 border-dashed rounded-xl flex items-center justify-center">
//                       <QrCode className="w-16 h-16 text-gray-400" />
//                     </div>
//                   )}
//                 </div>
//               </div>

//               <div className="mt-auto pt-6 border-t border-gray-200">
//                 <p className="text-sm font-medium text-gray-900 mb-3">KYC Status</p>
//                 <div className="flex items-center gap-2">
//                   <CheckCircle className="w-5 h-5 text-green-500" />
//                   <span className="text-sm text-green-600 font-medium">Verified</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT COLUMN (your existing matrix/team data UI remains here) */}
//         </div>
//       </div>
//     </div>
//   );
// }








// import React, { useEffect, useState } from "react";
// import { QrCode, Copy, Check, CheckCircle } from "lucide-react";
// import QRCode from "qrcode";
// import { getUserProfile } from "../../api/authApi";

// const Matrix = () => {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [qrUrl, setQrUrl] = useState("");
//   const [copied, setCopied] = useState(false);

//   // ─────── FETCH USER PROFILE ───────
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem("authToken");

//         if (!token) {
//           console.warn("No token found — showing UI without data");
//           setLoading(false);
//           return;
//         }

//         const data = await getUserProfile();
//         setProfile(data);

//         const qr = await QRCode.toDataURL(
//           `https://veloxcapital.com/ref/${data.referralCode}`,
//           { width: 200, margin: 2 }
//         );
//         setQrUrl(qr);
//       } catch (err) {
//         console.error("Failed to load profile:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);

//   const copyReferralLink = () => {
//     if (profile?.referralCode) {
//       navigator.clipboard.writeText(
//         `https://veloxcapital.com/ref/${profile.referralCode}`
//       );
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     }
//   };

//   const shortUserId = (id) => {
//     if (!id || id.length <= 12) return id;
//     return `${id.slice(0, 6)}...${id.slice(-4)}`;
//   };

//   // ─────── EXTRACT RELEVANT DATA ───────
//   const matrix = profile?.matrix || {};
//   const wallets = profile?.wallets || {};
//   const rank = profile?.rank || "—";
//   const position = matrix?.position || "—";
//   const parent = matrix?.parent || "—";
//   const totalDownline = profile?.totalDownline || 0;
//   const walletBalance = profile?.walletBalance || 0;
//   const activePackage = profile?.activePackage?.name || "—";
//   const referralCode = profile?.referralCode || "";
//   const referralLink = `https://veloxcapital.com/ref/${referralCode}`;

//   // ─────── LOADING STATE ───────
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
//         <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-[#00A991]"></div>
//         <span className="ml-3 text-lg text-gray-700">Loading Matrix Data…</span>
//       </div>
//     );
//   }

//   // ─────── MAIN MATRIX UI (unchanged structure) ───────
//   return (
//     <div className="min-h-screen dark:bg-neutral-900 dark:text-white bg-gray-50 p-4 md:p-6 lg:p-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-[30%_1fr] gap-6 items-stretch">
//           {/* LEFT PANEL */}
//           <div className="w-full">
//             <div className="bg-white dark:bg-neutral-800 rounded-2xl p-4 shadow-sm h-full flex flex-col">
//               <h3 className="text-lg font-semibold text-gray-900 mb-1">
//                 MY MATRIX
//               </h3>

//               <div className="flex items-center gap-2 mb-4">
//                 <span className="text-2xl font-bold text-amber-500">Rank</span>
//                 <span className="text-2xl font-bold capitalize">{rank}</span>
//               </div>

//               <p className="text-sm text-gray-500 mb-1">
//                 User ID:{" "}
//                 <span className="font-mono">{shortUserId(profile?.userId)}</span>
//               </p>

//               <div className="space-y-4 mt-6">
//                 <div>
//                   <p className="text-sm text-gray-500">Wallet Balance</p>
//                   <p className="text-2xl font-bold text-gray-900">
//                     ${walletBalance.toLocaleString()}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-sm text-gray-500">Active Package</p>
//                   <p className="text-2xl font-bold text-green-600">
//                     {activePackage}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-sm text-gray-500">Total Downline</p>
//                   <p className="text-2xl font-bold text-gray-900">
//                     {totalDownline}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-sm text-gray-500">Matrix Position</p>
//                   <p className="text-lg font-mono text-gray-700">{position}</p>
//                 </div>

//                 <div>
//                   <p className="text-sm text-gray-500">Upline (Parent)</p>
//                   <p className="text-lg font-medium text-gray-900">{parent}</p>
//                 </div>
//               </div>

//               {/* Referral Link Section */}
//               <div className="mt-6">
//                 <p className="text-sm text-gray-500 mb-2">Referral Link</p>
//                 <div className="flex items-center gap-2">
//                   <input
//                     type="text"
//                     value={referralLink}
//                     readOnly
//                     className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 font-mono text-xs"
//                   />
//                   <button
//                     onClick={copyReferralLink}
//                     className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition flex items-center gap-1"
//                   >
//                     {copied ? (
//                       <>
//                         <Check size={14} className="text-green-600" />
//                         Copied
//                       </>
//                     ) : (
//                       <>
//                         <Copy size={14} />
//                         Copy
//                       </>
//                     )}
//                   </button>
//                 </div>
//               </div>

//               {/* QR Code */}
//               <div className="mt-6">
//                 <p className="text-sm text-gray-500 mb-1">QR Code</p>
//                 <p className="text-xs text-gray-400 mb-3">For direct referrals</p>
//                 <div className="flex justify-center p-4 bg-gray-50 rounded-xl">
//                   {qrUrl ? (
//                     <img src={qrUrl} alt="Referral QR" className="w-32 h-32" />
//                   ) : (
//                     <div className="w-32 h-32 bg-gray-200 border-2 border-dashed rounded-xl flex items-center justify-center">
//                       <QrCode className="w-16 h-16 text-gray-400" />
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* KYC Section */}
//               <div className="mt-auto pt-6 border-t border-gray-200">
//                 <p className="text-sm font-medium text-gray-900 mb-3">KYC Status</p>
//                 <div className="flex items-center gap-2">
//                   <CheckCircle className="w-5 h-5 text-green-500" />
//                   <span className="text-sm text-green-600 font-medium">
//                     Verified
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT PANEL (Your existing matrix network structure stays untouched) */}
//           <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm p-6">
//             {/* You can continue your Matrix tree / team members visualization here */}
//             <h2 className="text-lg font-semibold text-gray-800 mb-4">
//               Team Overview
//             </h2>
//             <p className="text-sm text-gray-600 mb-4">
//               Matrix Bonus: $
//               {profile?.bonusBreakdown?.matrix_bonus?.toLocaleString() || 0}
//             </p>
//             <div className="border border-gray-200 rounded-lg p-4 text-center text-sm text-gray-500">
//               Matrix position: <b>{position}</b> | Upline:{" "}
//               <b>{parent}</b>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Matrix;




import React, { useEffect, useState } from "react";
import { QrCode, Copy, Check, CheckCircle, Users, TrendingUp, Award } from "lucide-react";
import QRCode from "qrcode";
import { getUserProfile } from "../../api/authApi";

const Matrix = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [qrUrl, setQrUrl] = useState("");
  const [copied, setCopied] = useState(false);

  // ─────── FETCH USER PROFILE ───────
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("authToken") || localStorage.getItem("token");
        if (!token) {
          setLoading(false);
          return;
        }

        const data = await getUserProfile(token);
        setProfile(data);

        // Generate QR Code
        const qr = await QRCode.toDataURL(
          `https://veloxcapital.com/ref/${data.referralCode}`,
          { width: 180, margin: 2, color: { dark: "#00A991", light: "#ffffff" } }
        );
        setQrUrl(qr);
      } catch (err) {
        console.error("Failed to load profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const copyReferralLink = () => {
    if (profile?.referralCode) {
      const link = `https://veloxcapital.com/ref/${profile.referralCode}`;
      navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shortUserId = (id) => (id ? `${id.slice(0, 6)}...${id.slice(-4)}` : "—");

  // ─────── EXTRACT DATA ───────
  const matrix = profile?.matrix || {};
  const position = matrix?.position || "—";
  const parent = matrix?.parent || "—";
  const matrixBonus = profile?.bonusBreakdown?.matrix_bonus || 0;
  const totalDownline = profile?.totalDownline || 0;
  const walletBalance = profile?.walletBalance || 0;
  const activePackage = profile?.activePackage?.name || "—";
  const rank = profile?.rank || "—";
  const referralCode = profile?.referralCode || "";
  const referralLink = `https://veloxcapital.com/ref/${referralCode}`;

  // Parse matrix position: e.g., "1-2-3" → [1, 2, 3]
  const positionPath = position !== "—" ? position.split("-").map(Number) : [];

  // ─────── LOADING STATE ───────
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
        <div className="flex items-center space-x-3">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-[#00A991]" />
          <span className="text-lg font-medium text-gray-700">Loading Matrix Dashboard…</span>
        </div>
      </div>
    );
  }

  // ─────── MAIN UI ───────
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Velox Capital <span className="text-[#00A991]">Matrix Dashboard</span>
          </h1>
          <p className="text-gray-600 mt-2">Your position, team, and matrix earnings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6">
          {/* LEFT PANEL: User Info */}
          <div className="space-y-5">
            {/* My Matrix Card */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-bold text-[#00A991]">My Matrix</h3>
                <Award className="h-6 w-6 text-amber-500" />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Rank</span>
                  <span className="text-lg font-bold capitalize text-gray-900">{rank}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">User ID</span>
                  <span className="font-mono text-sm">{shortUserId(profile?.userId)}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Wallet Balance</span>
                  <span className="text-lg font-bold text-gray-900">
                    ${walletBalance.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Active Package</span>
                  <span className="text-lg font-bold text-green-600">{activePackage}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Total Downline</span>
                  <span className="text-lg font-bold text-gray-900">{totalDownline}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Matrix Position</span>
                  <span className="font-mono text-lg text-[#00A991]">{position}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Upline (Parent)</span>
                  <span className="text-base font-medium text-gray-900">{parent}</span>
                </div>
              </div>

              {/* Matrix Bonus */}
              <div className="mt-6 p-4 bg-gradient-to-r from-[#00A991]/10 to-[#10B981]/10 rounded-xl border border-[#00A991]/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Matrix Bonus Earned</p>
                    <p className="text-2xl font-bold text-[#00A991]">${matrixBonus.toLocaleString()}</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-[#00A991]" />
                </div>
              </div>
            </div>

            {/* Referral Link */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Referral Link</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={referralLink}
                  readOnly
                  className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 font-mono text-xs"
                />
                <button
                  onClick={copyReferralLink}
                  className={`px-4 py-2 rounded-lg font-medium transition flex items-center gap-1 ${
                    copied
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  {copied ? (
                    <>
                      <Check size={16} /> Copied
                    </>
                  ) : (
                    <>
                      <Copy size={16} /> Copy
                    </>
                  )}
                </button>
              </div>

              {/* QR Code */}
              <div className="mt-5 text-center">
                <p className="text-sm text-gray-500 mb-2">Scan to Join</p>
                <div className="inline-block p-3 bg-white rounded-xl shadow-sm border">
                  {qrUrl ? (
                    <img src={qrUrl} alt="Referral QR" className="w-40 h-40" />
                  ) : (
                    <div className="w-40 h-40 bg-gray-100 rounded-xl flex items-center justify-center">
                      <QrCode className="w-16 h-16 text-gray-400" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* KYC Status */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Account Status</h3>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <div>
                  <p className="font-medium text-green-600">KYC Verified</p>
                  <p className="text-xs text-gray-500">Full access enabled</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Matrix Tree */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Matrix Structure</h2>
              <Users className="h-6 w-6 text-[#00A991]" />
            </div>

            {/* Matrix Path Visualization */}
            <div className="mb-6 p-5 bg-gradient-to-r from-[#00A991]/5 to-[#10B981]/5 rounded-xl border border-[#00A991]/20">
              <p className="text-sm text-gray-600 mb-3">Your Position Path</p>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                {positionPath.length > 0 ? (
                  positionPath.map((level, i) => (
                    <React.Fragment key={i}>
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg transition-all ${
                          i === positionPath.length - 1
                            ? "bg-[#00A991] ring-4 ring-[#00A991]/30 scale-110"
                            : "bg-[#10B981]"
                        }`}
                      >
                        {level}
                      </div>
                      {i < positionPath.length - 1 && (
                        <div className="w-16 h-1 bg-gradient-to-r from-[#00A991] to-[#10B981]" />
                      )}
                    </React.Fragment>
                  ))
                ) : (
                  <p className="text-gray-500 italic">No matrix position</p>
                )}
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm">
                  <span className="font-medium">Upline:</span> <strong>{parent}</strong>
                </p>
              </div>
            </div>

            {/* Matrix Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-xl text-center">
                <p className="text-sm text-gray-500">Matrix Level</p>
                <p className="text-2xl font-bold text-[#00A991]">
                  {positionPath.length > 0 ? positionPath.length : 0}
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl text-center">
                <p className="text-sm text-gray-500">Team Size</p>
                <p className="text-2xl font-bold text-gray-900">{totalDownline}</p>
              </div>
            </div>

            {/* Placeholder for Full Matrix Tree (Future) */}
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center">
              <Users className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-sm text-gray-500">
                Full matrix tree visualization coming soon
              </p>
              <p className="text-xs text-gray-400 mt-1">
                View all your downline members in a 3xN structure
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-xs text-gray-500">
          <p>Velox Capital © 2025 | Matrix Engine v2.0</p>
        </div>
      </div>
    </div>
  );
};

export default Matrix;