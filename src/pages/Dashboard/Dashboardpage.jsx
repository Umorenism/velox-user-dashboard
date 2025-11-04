








// // import React from "react";
// // import { motion } from "framer-motion";
// // import { DollarSign, CreditCard, ArrowRightLeft, Wallet } from "lucide-react";
// // import PortfolioOverview from "../../utlis/PortfolioOverview";
// // import ReferralCard from "../../utlis/ReferralCard";
// // import PackageSummary from "../../utlis/PackageSummary";
// // import PackagesSection from "../../utlis/PackagesSection";

// // export default function Dashboardpage() {
// //   const stats = [
// //     { title: "Total Investment", value: "0.00", currency: "USD" },
// //     { title: "PV ", value: "0.00", currency: "USD" },
// //     { title: "GV", value: "0.00", currency: "USD" },
// //     { title: "Life time investment", value: "0", currency: "" },
// //   ];

// //   const walletData = [
// //     { title: "Deposit Wallet", amount: "0.00", currency: "USD", icon: <Wallet size={22} /> },
// //     { title: "Bear Wallet", amount: "0.00", currency: "USD", icon: <DollarSign size={22} /> },
// //     { title: "Bull Wallet", amount: "0.00", currency: "USD", icon: <CreditCard size={22} /> },
// //     { title: "Account Balance", amount: "0.00", currency: "USD", icon: <ArrowRightLeft size={22} /> },
// //   ];

// //   // Animation variants
// //   const fadeUp = {
// //     hidden: { opacity: 0, y: 40 },
// //     visible: (i = 1) => ({
// //       opacity: 1,
// //       y: 0,
// //       transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
// //     }),
// //   };

// //   return (
// //     <motion.div
// //       initial="hidden"
// //       animate="visible"
// //       className="flex flex-col items-center bg-gray-100 dark:bg-neutral-900 dark:text-white min-h-screen py-10"
// //     >
      
// //       {/* Wallet Section */}
// //       <motion.div
// //         variants={fadeUp}
// //         className="w-[95%] lg:w-[85%] xl:w-[90%] bg-white dark:bg-neutral-800 rounded-2xl shadow-md p-4 sm:p-2 mb-4"
// //       >
// //         <div className="flex mb-3 flex-col md:flex-row justify-between items-stretch divide-y md:divide-y-0 md:divide-x divide-gray-300">
// //           {walletData.map((item, i) => (
// //             <motion.div
// //               key={i}
// //               variants={fadeUp}
// //               custom={i}
// //               className="flex flex-col justify-center items-center w-full md:w-1/4 px-2 py-2 text-center space-y-2"
// //             >
// //               {/* Title Row */}
// //               <div className="flex flex-wrap justify-center items-center gap-2 text-center">
// //                 <span className="text-[#00A991]">{item.icon}</span>
// //                 <h1 className="text-base font-semibold">{item.title} :</h1>
// //                 <p className="text-lg font-bold">
// //                   {item.amount}
// //                   <span className="text-sm font-medium ml-1">{item.currency}</span>
// //                 </p>
// //               </div>

// //               {/* Buttons */}
// //               <div className="flex flex-wrap justify-center gap-3">
// //                 <button className="px-5 py-2 rounded-full bg-[#00A991] text-white font-medium text-sm hover:opacity-90 transition">
// //                   Deposit
// //                 </button>
// //                 <button className="px-5 py-2 rounded-full bg-[#EE933C] text-white font-medium text-sm hover:opacity-90 transition">
// //                   Transfer
// //                 </button>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </motion.div>

// //       <div className="w-full mt-10 max-w-[1200px] justify-start flex">
// //         <h1 className="text-[20px] font-bold">DASHBORD</h1>
// //       </div>

// //       {/* Stats Cards */}
// //       <motion.div
// //         variants={fadeUp}
// //         className="w-full max-w-[1400px]  mt-5 px-4 sm:px-6"
// //       >
// //         <div className="grid grid-cols-1 h-40  sm:grid-cols-2 lg:grid-cols-4 gap-4">
// //           {stats.map((stat, index) => (
// //             <motion.div
// //               key={index}
// //               variants={fadeUp}
// //               custom={index}
// //               className="bg-white py-4 dark:bg-neutral-800 rounded-[10px] shadow-sm border border-gray-100 p-4 flex flex-col justify-between"
// //             >
// //               <div className="flex justify-between items-center mb-2">
// //                 <h3 className="text-sm font-medium">{stat.title}</h3>
// //                 <span className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-full">
// //                   <DollarSign size={14} className="text-gray-600" />
// //                 </span>
// //               </div>
// //               <hr />
// //               <div className="text-[50px] font-semibold text-emerald-600">
// //                 {stat.value}
// //                 <span className="text-base font-medium text-emerald-600 ml-1">
// //                   {stat.currency}
// //                 </span>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </motion.div>

// //       {/* Portfolio & Referral */}
// //       <motion.div
// //         variants={fadeUp}
// //         className="py-6 flex flex-col lg:flex-row gap-4 w-full max-w-[1400px] px-4 sm:px-6"
// //       >
// //         <div className="w-full lg:w-1/2">
// //           <PortfolioOverview />
// //         </div>
// //         <div className="w-full mt-10 md:mt-0 lg:w-1/2">
// //           <ReferralCard />
// //         </div>
// //       </motion.div>

// //       {/* Package Summary & Packages */}
// //       <motion.div
// //         variants={fadeUp}
// //         className="py-6 flex flex-col lg:flex-row gap-4 w-full max-w-[1400px] px-4 sm:px-6"
// //       >
// //         <div className="w-full lg:w-[30%]">
// //           <PackageSummary />
// //         </div>
// //         <div className="w-full lg:w-[70%]">
// //           <PackagesSection />
// //         </div>
// //       </motion.div>

// //       {/* Risk Warning Section */}
// //       <motion.div
// //         variants={fadeUp}
// //         className="flex flex-col md:flex-row gap-8 items-start  dark:bg-neutral-800  p-6 sm:p-8 mx-auto mt-10 w-[95%] lg:w-[85%] xl:w-[95%]"
// //       >
// //         {/* Left */}
// //         <div className="md:w-1/2 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
// //           <h1 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-300 pb-2">
// //             Risk Warning
// //           </h1>
// //           <p>
// //             Trading forex, CFDs, and any financial derivative instruments on
// //             margin carries a high level of risk and may not be suitable for all
// //             investors, as you could sustain losses in excess of your deposits.
// //             Leverage can work for you as well as against you. Please carefully
// //             consider your financial situation and investment experience prior to
// //             trading products offered by{" "}
// //             <span >
// //               International Finance Asia
// //             </span>.
// //           </p>
// //           <p>
// //             <span >
// //               International Finance Asia Pty Ltd
// //             </span>{" "}
// //             is regulated by the Australian Securities and Investments Commission
// //             (ACN 670 137 345) under License No. 001305580.
// //           </p>
// //         </div>

// //         {/* Right */}
// //         <div className="md:w-1/2 text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base border-t md:border-t-0 md:border-l border-gray-300 md:pl-8 pt-4 md:pt-14">
// //           <p>
// //             The contents in this site are provided only for informational
// //             purposes and should not be regarded as an offer or solicitation to
// //             any person in any jurisdiction where such an offer is unauthorized.
// //             Please read and understand the{" "}
// //             <span className="text-[#00A991] font-medium">
// //               Terms and Conditions
// //             </span>
// //             ,{" "}
// //             <span className="text-[#00A991] font-medium">
// //               Risk Disclosure
// //             </span>{" "}
// //             and other legal documents on the{" "}
// //             <span className="text-[#00A991] font-medium">
// //               International Finance Asia
// //             </span>{" "}
// //             website prior to initiating your leveraged investment.
// //           </p>
// //         </div>
// //       </motion.div>
// //     </motion.div>
// //   );
// // }










// // import React, { useEffect } from "react";
// // import { motion } from "framer-motion";
// // import { DollarSign, CreditCard, ArrowRightLeft, Wallet } from "lucide-react";
// // import PortfolioOverview from "../../utlis/PortfolioOverview";
// // import ReferralCard from "../../utlis/ReferralCard";
// // import PackageSummary from "../../utlis/PackageSummary";
// // import PackagesSection from "../../utlis/PackagesSection";
// // import axios from "axios";

// // export default function Dashboardpage() {
// //   const stats = [
// //     { title: "Total Investment", value: "0.00", currency: "USD" },
// //     { title: "PV", value: "0.00", currency: "USD" },
// //     { title: "GV", value: "0.00", currency: "USD" },
// //     { title: "LTT", value: "0", currency: "" },
// //   ];

// //   const walletData = [
// //     { title: "Deposit Wallet", amount: "0.00", currency: "USD", icon: <Wallet size={20} /> },
// //     { title: "Bear Wallet", amount: "0.00", currency: "USD", icon: <DollarSign size={20} /> },
// //     { title: "Bull Wallet", amount: "0.00", currency: "USD", icon: <CreditCard size={20} /> },
// //     { title: "Account Balance", amount: "0.00", currency: "USD", icon: <ArrowRightLeft size={20} /> },
// //   ];

// //   const fadeUp = {
// //     hidden: { opacity: 0, y: 40 },
// //     visible: (i = 1) => ({
// //       opacity: 1,
// //       y: 0,
// //       transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
// //     }),
// //   };


  

// //   return (
// //     <motion.div
// //       initial="hidden"
// //       animate="visible"
// //       className="flex flex-col items-center bg-gray-100 dark:bg-neutral-900 dark:text-white min-h-screen py-2 sm:py-10"
// //     >
// //       {/* Wallet Section */}
// //       <motion.div
// //   variants={fadeUp}
// //   className="w-[92%] lg:w-[80%] xl:w-[85%] bg-white dark:bg-neutral-800 rounded-xl shadow-md p-2 sm:p-3 mb-3 border border-gray-100/30"
// // >
// //   <div className="flex flex-col md:flex-row justify-between items-stretch divide-y md:divide-y-0 md:divide-x divide-gray-200">
// //     {walletData.map((item, i) => (
// //       <motion.div
// //         key={i}
// //         variants={fadeUp}
// //         custom={i}
// //         className="flex flex-col justify-center items-center w-full md:w-1/4 px-1 py-1.5 sm:px-2 sm:py-2 text-center space-y-1.5"
// //       >
// //         {/* Wallet Info */}
// //         <div className="flex flex-col sm:flex-row justify-center items-center gap-1 text-center">
// //           <span className="text-[#00A991]">{item.icon}</span>
// //           <h1 className="text-[11px] sm:text-sm font-semibold">{item.title}:</h1>
// //           <p className="text-sm font-bold">
// //             {item.amount}
// //             <span className="text-[10px] font-medium ml-1">{item.currency}</span>
// //           </p>
// //         </div>

// //         {/* Buttons */}
// //         <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
// //           <button className="px-3 py-1 rounded-full bg-[#00A991] text-white font-medium text-[10px] sm:text-[11px] hover:opacity-90 transition">
// //             Deposit
// //           </button>
// //           <button className="px-3 py-1 rounded-full bg-[#EE933C] text-white font-medium text-[10px] sm:text-[11px] hover:opacity-90 transition">
// //             Transfer
// //           </button>
// //         </div>
// //       </motion.div>
// //     ))}
// //   </div>
// // </motion.div>


// //       {/* Dashboard Header */}
// //       <div className="w-full mt-6 sm:mt-10 max-w-[1200px] px-4 sm:px-6">
// //         <h1 className="text-[18px] sm:text-[20px] font-bold">DASHBOARD</h1>
// //       </div>

// //       {/* Stats Cards */}
// //       <motion.div variants={fadeUp} className="w-full max-w-[1400px] mt-5 px-4 sm:px-6">
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
// //           {stats.map((stat, index) => (
// //             <motion.div
// //               key={index}
// //               variants={fadeUp}
// //               custom={index}
// //               className="bg-white dark:bg-neutral-800 rounded-[10px] shadow-sm border border-gray-100 p-4 flex flex-col justify-between h-auto sm:h-40"
// //             >
// //               <div className="flex justify-between items-center mb-2">
// //                 <h3 className="text-xs sm:text-sm font-medium">{stat.title}</h3>
// //                 <span className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center border border-gray-300 rounded-full">
// //                   <DollarSign size={12} className="text-gray-600" />
// //                 </span>
// //               </div>
// //               <hr />
// //               <div className="text-[36px] sm:text-[50px] font-semibold text-emerald-600">
// //                 {stat.value}
// //                 <span className="text-sm sm:text-base font-medium text-emerald-600 ml-1">
// //                   {stat.currency}
// //                 </span>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </motion.div>

// //       {/* Portfolio & Referral */}
// //       <motion.div
// //         variants={fadeUp}
// //         className="py-6 flex flex-col lg:flex-row gap-6 w-full max-w-[1400px] px-4 sm:px-6"
// //       >
// //         <div className="w-full lg:w-[65%]">
// //           <PortfolioOverview />
// //         </div>
// //         <div className="w-full lg:w-[35%]">
// //           <ReferralCard />
// //         </div>
// //       </motion.div>

// //       {/* Package Summary & Packages */}
// //       <motion.div
// //         variants={fadeUp}
// //         className="py-6 flex flex-col lg:flex-row gap-6 w-full max-w-[1400px] px-4 sm:px-6"
// //       >
// //         <div className="w-full lg:w-[30%]">
// //           <PackageSummary />
// //         </div>
// //         <div className="w-full lg:w-[70%]">
// //           <PackagesSection />
// //         </div>
// //       </motion.div>

// //       {/* Risk Warning Section */}
// //       <motion.div
// //         variants={fadeUp}
// //         className="flex flex-col md:flex-row gap-6 md:gap-8 items-start bg-white dark:bg-neutral-800 rounded-xl p-4 sm:p-8 mx-auto mt-10 w-[95%] lg:w-[85%] xl:w-[95%]"
// //       >
// //         {/* Left */}
// //         <div className="md:w-1/2 space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
// //           <h1 className="text-lg sm:text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-300 pb-2">
// //             Risk Warning
// //           </h1>
// //           <p>
// //             Trading forex, CFDs, and financial derivative instruments on margin carries high risk and may not be suitable for all investors.
// //             Leverage can work for you as well as against you. Please carefully consider your financial situation and investment experience prior to trading products offered by{" "}
// //             <span>International Finance Asia</span>.
// //           </p>
// //           <p>
// //             <span>International Finance Asia Pty Ltd</span> is regulated by the Australian Securities and Investments Commission (ACN 670 137 345) under License No. 001305580.
// //           </p>
// //         </div>

// //         {/* Right */}
// //         <div className="md:w-1/2 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base border-t md:border-t-0 md:border-l border-gray-300 md:pl-6 pt-4 md:pt-14">
// //           <p>
// //             The contents of this site are provided only for informational purposes and should not be regarded as an offer or solicitation to any person in any jurisdiction where such an offer is unauthorized. Please read and understand the{" "}
// //             <span className="text-[#00A991] font-medium">Terms and Conditions</span>,{" "}
// //             <span className="text-[#00A991] font-medium">Risk Disclosure</span> and other legal documents on the{" "}
// //             <span className="text-[#00A991] font-medium">International Finance Asia</span> website before initiating your leveraged investment.
// //           </p>
// //         </div>
// //       </motion.div>
// //     </motion.div>
// //   );
// // }











// // import React, { useEffect, useState } from "react";
// // import { motion } from "framer-motion";
// // import {
// //   DollarSign,
// //   CreditCard,
// //   ArrowRightLeft,
// //   Wallet,
// //   Loader2,
// // } from "lucide-react";
// // import PortfolioOverview from "../../utlis/PortfolioOverview";
// // import ReferralCard from "../../utlis/ReferralCard";
// // import PackageSummary from "../../utlis/PackageSummary";
// // import PackagesSection from "../../utlis/PackagesSection";
// // import { getUserProfile } from "../../api/authApi";

// // export default function Dashboardpage() {
// //   // ─────────────────────────────── State ───────────────────────────────
// //   const [profile, setProfile] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   // ─────────────────────────────── Fetch ───────────────────────────────
// //   useEffect(() => {
// //     const token = localStorage.getItem("token") || sessionStorage.getItem("token");
// //     if (!token) {
// //       setError("No authentication token found.");
// //       setLoading(false);
// //       return;
// //     }

// //     getUserProfile(token)
// //       .then((data) => {
// //         setProfile(data);
// //       })
// //       .catch((err) => {
// //         setError(err.message || "Failed to load user profile.");
// //       })
// //       .finally(() => setLoading(false));
// //   }, []);

// //   // ─────────────────────────────── Animation ───────────────────────────────
// //   const fadeUp = {
// //     hidden: { opacity: 0, y: 40 },
// //     visible: (i = 1) => ({
// //       opacity: 1,
// //       y: 0,
// //       transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
// //     }),
// //   };

// //   // ─────────────────────────────── Helper to format amount ───────────────────────────────
// //   const formatAmount = (amount, currency) => {
// //     const num = Number(amount);
// //     if (isNaN(num) || num === 0) return `0 ${currency}`;
// //     return `${num.toFixed(2)} ${currency}`;
// //   };

// //   // ─────────────────────────────── Derived Data ───────────────────────────────
// //   const wallets = profile?.wallets || {};
// //   const walletData = [
// //     {
// //       title: "Deposit Wallet",
// //       amount: formatAmount(wallets.deposit, "USD"),
// //       currency: "USD",
// //       icon: <Wallet size={20} />,
// //     },
// //     {
// //       title: "Bear Wallet",
// //       amount: formatAmount(wallets.bear, "USD"),
// //       currency: "USD",
// //       icon: <DollarSign size={20} />,
// //     },
// //     {
// //       title: "Bull Wallet",
// //       amount: formatAmount(wallets.bull, "USD"),
// //       currency: "USD",
// //       icon: <CreditCard size={20} />,
// //     },
// //     {
// //       title: "Account Balance",
// //       amount: formatAmount(wallets.accountBalance, "USD"),
// //       currency: "USD",
// //       icon: <ArrowRightLeft size={20} />,
// //     },
// //   ];

// //   const stats = [
// //     {
// //       title: "Total Investment",
// //       value:
// //         Number(profile?.totalInvestment || 0) === 0
// //           ? "0"
// //           : Number(profile?.totalInvestment).toFixed(2),
// //       currency: "USD",
// //     },
// //     {
// //       title: "PV",
// //       value: Number(profile?.pvp || 0) === 0 ? "0" : Number(profile?.pvp).toFixed(2),
// //       currency: "USD",
// //     },
// //     {
// //       title: "GV",
// //       value: Number(profile?.pgv || 0) === 0 ? "0" : Number(profile?.pgv).toFixed(2),
// //       currency: "USD",
// //     },
// //     { title: "LTT", value: profile?.referrals || 0, currency: "" },
// //   ];

// //   // ─────────────────────────────── Loading/Error ───────────────────────────────
// //   if (loading) {
// //     return (
// //       <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-neutral-900">
// //         <Loader2 className="animate-spin text-[#00A991]" size={48} />
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-neutral-900 text-red-600">
// //         <p className="text-lg font-semibold">Error</p>
// //         <p className="mt-2">{error}</p>
// //       </div>
// //     );
// //   }

// //   // ─────────────────────────────── Render ───────────────────────────────
// //   return (
// //     <motion.div
// //       initial="hidden"
// //       animate="visible"
// //       className="flex flex-col items-center bg-gray-100 dark:bg-neutral-900 dark:text-white min-h-screen py-2 sm:py-10"
// //     >
// //       {/* ─────── Wallet Section ─────── */}
// //       <motion.div
// //         variants={fadeUp}
// //         className="w-[92%] lg:w-[80%] xl:w-[85%] bg-white dark:bg-neutral-800 rounded-xl shadow-md p-2 sm:p-3 mb-3 border border-gray-100/30"
// //       >
// //         <div className="flex flex-col md:flex-row justify-between items-stretch divide-y md:divide-y-0 md:divide-x divide-gray-200">
// //           {walletData.map((item, i) => (
// //             <motion.div
// //               key={i}
// //               variants={fadeUp}
// //               custom={i}
// //               className="flex flex-col justify-center items-center w-full md:w-1/4 px-1 py-1.5 sm:px-2 sm:py-2 text-center space-y-1.5"
// //             >
// //               <div className="flex flex-col sm:flex-row justify-center items-center gap-1 text-center">
// //                 <span className="text-[#00A991]">{item.icon}</span>
// //                 <h1 className="text-[11px] sm:text-sm font-semibold">{item.title}:</h1>
// //                 <p className="text-sm font-bold">
// //                   {item.amount}
// //                 </p>
// //               </div>
// //               <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
// //                 <button className="px-3 py-1 rounded-full bg-[#00A991] text-white font-medium text-[10px] sm:text-[11px] hover:opacity-90 transition">
// //                   Deposit
// //                 </button>
// //                 <button className="px-3 py-1 rounded-full bg-[#EE933C] text-white font-medium text-[10px] sm:text-[11px] hover:opacity-90 transition">
// //                   Transfer
// //                 </button>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </motion.div>

// //       {/* ─────── Dashboard Header ─────── */}
// //       <div className="w-full mt-6 sm:mt-10 max-w-[1200px] px-4 sm:px-6">
// //         <h1 className="text-[18px] sm:text-[20px] font-bold">DASHBOARD</h1>
// //       </div>

// //       {/* ─────── Stats Cards ─────── */}
// //       <motion.div variants={fadeUp} className="w-full max-w-[1400px] mt-5 px-4 sm:px-6">
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
// //           {stats.map((stat, index) => (
// //             <motion.div
// //               key={index}
// //               variants={fadeUp}
// //               custom={index}
// //               className="bg-white dark:bg-neutral-800 rounded-[10px] shadow-sm border border-gray-100 p-4 flex flex-col justify-between h-auto sm:h-40"
// //             >
// //               <div className="flex justify-between items-center mb-2">
// //                 <h3 className="text-xs sm:text-sm font-medium">{stat.title}</h3>
// //                 <span className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center border border-gray-300 rounded-full">
// //                   <DollarSign size={12} className="text-gray-600" />
// //                 </span>
// //               </div>
// //               <hr />
// //               <div className="text-[36px] sm:text-[50px] font-semibold text-emerald-600">
// //                 {stat.value}
// //                 <span className="text-sm sm:text-base font-medium text-emerald-600 ml-1">
// //                   {stat.currency}
// //                 </span>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </motion.div>

// //       {/* ─────── Portfolio / Referral ─────── */}
// //       <motion.div
// //         variants={fadeUp}
// //         className="py-6 flex flex-col lg:flex-row gap-6 w-full max-w-[1400px] px-4 sm:px-6"
// //       >
// //         <div className="w-full lg:w-[65%]">
// //           <PortfolioOverview profile={profile} />
// //         </div>
// //         <div className="w-full lg:w-[35%]">
// //           <ReferralCard profile={profile} />
// //         </div>
// //       </motion.div>

// //       {/* ─────── Packages ─────── */}
// //       <motion.div
// //         variants={fadeUp}
// //         className="py-6 flex flex-col lg:flex-row gap-6 w-full max-w-[1400px] px-4 sm:px-6"
// //       >
// //         <div className="w-full lg:w-[30%]">
// //           <PackageSummary packages={profile?.packages} />
// //         </div>
// //         <div className="w-full lg:w-[70%]">
// //           <PackagesSection packages={profile?.packages} />
// //         </div>
// //       </motion.div>

// //       {/* ─────── Risk Warning ─────── */}
// //       <motion.div
// //         variants={fadeUp}
// //         className="flex flex-col md:flex-row gap-6 md:gap-8 items-start bg-white dark:bg-neutral-800 rounded-xl p-4 sm:p-8 mx-auto mt-10 w-[95%] lg:w-[85%] xl:w-[95%]"
// //       >
// //         <div className="md:w-1/2 space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
// //           <h1 className="text-lg sm:text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-300 pb-2">
// //             Risk Warning
// //           </h1>
// //           <p>
// //             Trading forex, CFDs, and financial derivatives carries high risk and may not
// //             be suitable for all investors. Leverage can work for you or against you.
// //             Please carefully consider your financial situation and investment experience
// //             prior to trading with{" "}
// //             <span>International Finance Asia</span>.
// //           </p>
// //           <p>
// //             <span>International Finance Asia Pty Ltd</span> is regulated by the Australian
// //             Securities and Investments Commission (ACN 670 137 345) under License
// //             No. 001305580.
// //           </p>
// //         </div>
// //         <div className="md:w-1/2 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base border-t md:border-t-0 md:border-l border-gray-300 md:pl-6 pt-4 md:pt-14">
// //           <p>
// //             The contents of this site are for informational purposes only and should not
// //             be regarded as an offer or solicitation to any person in any jurisdiction
// //             where such an offer is unauthorized. Please read and understand the{" "}
// //             <span className="text-[#00A991] font-medium">Terms and Conditions</span>,{" "}
// //             <span className="text-[#00A991] font-medium">Risk Disclosure</span> and other
// //             legal documents before initiating your leveraged investment.
// //           </p>
// //         </div>
// //       </motion.div>
// //     </motion.div>
// //   );
// // }






// // import React, { useEffect, useState } from "react";
// // import { motion } from "framer-motion";
// // import {
// //   DollarSign,
// //   CreditCard,
// //   ArrowRightLeft,
// //   Wallet,
// //   Loader2,
// //   XCircle,
// //   CheckCircle2,
// // } from "lucide-react";
// // import PortfolioOverview from "../../utlis/PortfolioOverview";
// // import ReferralCard from "../../utlis/ReferralCard";
// // import PackageSummary from "../../utlis/PackageSummary";
// // import PackagesSection from "../../utlis/PackagesSection";
// // import { getUserProfile } from "../../api/authApi";
// // import { initiateFund, transferFunds } from "../../api/walletApi";

// // export default function Dashboardpage() {
// //   const [profile, setProfile] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   // Modals
// //   const [showDeposit, setShowDeposit] = useState(false);
// //   const [showTransfer, setShowTransfer] = useState(false);

// //   // Deposit state
// //   const [fundData, setFundData] = useState({ amount: "", payCurrency: "USDTBSC" });
// //   const [fundResult, setFundResult] = useState(null);
// //   const [fundLoading, setFundLoading] = useState(false);

// //   // Transfer state
// //   const [transferData, setTransferData] = useState({ toUserId: "", amount: "" });
// //   const [transferResult, setTransferResult] = useState(null);
// //   const [transferLoading, setTransferLoading] = useState(false);

// //   useEffect(() => {
// //     const token = localStorage.getItem("token") || sessionStorage.getItem("token");
// //     if (!token) {
// //       setError("No authentication token found.");
// //       setLoading(false);
// //       return;
// //     }

// //     getUserProfile(token)
// //       .then((data) => setProfile(data))
// //       .catch((err) => setError(err.message || "Failed to load user profile."))
// //       .finally(() => setLoading(false));
// //   }, []);

// //   const formatAmount = (amount, currency) => {
// //     const num = Number(amount);
// //     return isNaN(num) || num === 0 ? `0 ${currency}` : `${num.toFixed(2)} ${currency}`;
// //   };

// //   const wallets = profile?.wallets || {};
// //   const walletData = [
// //     { title: "Deposit Wallet", amount: formatAmount(wallets.deposit, "USD"), icon: <Wallet size={20} /> },
// //     { title: "Bear Wallet", amount: formatAmount(wallets.bear, "USD"), icon: <DollarSign size={20} /> },
// //     { title: "Bull Wallet", amount: formatAmount(wallets.bull, "USD"), icon: <CreditCard size={20} /> },
// //     { title: "Account Balance", amount: formatAmount(wallets.accountBalance, "USD"), icon: <ArrowRightLeft size={20} /> },
// //   ];

// //   const fadeUp = {
// //     hidden: { opacity: 0, y: 40 },
// //     visible: (i = 1) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.2 } }),
// //   };

// //   // ─────────────────────────────── Handle Fund Wallet ───────────────────────────────
// //   const handleFundWallet = async (e) => {
// //     e.preventDefault();
// //     setFundLoading(true);
// //     setFundResult(null);

// //     try {
// //       const res = await initiateFund({
// //         amount: Number(fundData.amount),
// //         payCurrency: fundData.payCurrency,
// //       });
// //       setFundResult({ type: "success", data: res });
// //       setFundData({ amount: "", payCurrency: "USDTBSC" });
// //     } catch (err) {
// //       setFundResult({
// //         type: "error",
// //         message: err.response?.data?.message || "Failed to initiate payment.",
// //       });
// //     } finally {
// //       setFundLoading(false);
// //     }
// //   };

// //   // ─────────────────────────────── Handle Transfer ───────────────────────────────
// //   const handleTransfer = async (e) => {
// //     e.preventDefault();
// //     setTransferLoading(true);
// //     setTransferResult(null);

// //     try {
// //       const res = await transferFunds({
// //         toUserId: transferData.toUserId,
// //         amount: Number(transferData.amount),
// //       });
// //       setTransferResult({ type: "success", data: res });
// //       setTransferData({ toUserId: "", amount: "" });
// //     } catch (err) {
// //       setTransferResult({
// //         type: "error",
// //         message: err.response?.data?.message || "Transfer failed.",
// //       });
// //     } finally {
// //       setTransferLoading(false);
// //     }
// //   };

// //   if (loading)
// //     return (
// //       <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-neutral-900">
// //         <Loader2 className="animate-spin text-[#00A991]" size={48} />
// //       </div>
// //     );

// //   if (error)
// //     return (
// //       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-neutral-900 text-red-600">
// //         <p className="text-lg font-semibold">Error</p>
// //         <p className="mt-2">{error}</p>
// //       </div>
// //     );

// //   return (
// //     <motion.div
// //       initial="hidden"
// //       animate="visible"
// //       className="flex flex-col items-center bg-gray-100 dark:bg-neutral-900 dark:text-white min-h-screen py-2 sm:py-10"
// //     >
// //       {/* ─────── Wallet Section ─────── */}
// //       <motion.div
// //         variants={fadeUp}
// //         className="w-[92%] lg:w-[80%] xl:w-[85%] bg-white dark:bg-neutral-800 rounded-xl shadow-md p-3 mb-3 border border-gray-100/30"
// //       >
// //         <div className="flex flex-col md:flex-row justify-between items-stretch divide-y md:divide-y-0 md:divide-x divide-gray-200">
// //           {walletData.map((item, i) => (
// //             <motion.div key={i} variants={fadeUp} custom={i} className="flex flex-col justify-center items-center w-full md:w-1/4 px-2 py-2 text-center space-y-1.5">
// //               <div className="flex flex-col sm:flex-row justify-center items-center gap-1 text-center">
// //                 <span className="text-[#00A991]">{item.icon}</span>
// //                 <h1 className="text-sm font-semibold">{item.title}:</h1>
// //                 <p className="text-sm font-bold">{item.amount}</p>
// //               </div>
// //               <div className="flex flex-wrap justify-center gap-2">
// //                 <button onClick={() => setShowDeposit(true)} className="px-3 py-1 rounded-full bg-[#00A991] text-white text-[11px] hover:opacity-90">
// //                   Deposit
// //                 </button>
// //                 <button onClick={() => setShowTransfer(true)} className="px-3 py-1 rounded-full bg-[#EE933C] text-white text-[11px] hover:opacity-90">
// //                   Transfer
// //                 </button>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </motion.div>

// //       {/* ─────── Deposit Modal ─────── */}
// //       {showDeposit && (
// //         <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
// //           <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg w-full max-w-md shadow-xl">
// //             <h2 className="text-lg font-semibold mb-3">Fund Wallet</h2>
// //             <form onSubmit={handleFundWallet} className="space-y-3">
// //               <div>
// //                 <label className="block text-sm mb-1">Amount (USD)</label>
// //                 <input
// //                   type="number"
// //                   min="1"
// //                   required
// //                   value={fundData.amount}
// //                   onChange={(e) => setFundData({ ...fundData, amount: e.target.value })}
// //                   className="w-full p-2 border rounded-md dark:bg-neutral-700"
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block text-sm mb-1">Currency</label>
// //                 <select
// //                   value={fundData.payCurrency}
// //                   onChange={(e) => setFundData({ ...fundData, payCurrency: e.target.value })}
// //                   className="w-full p-2 border rounded-md dark:bg-neutral-700"
// //                 >
// //                   <option value="USDTBSC">USDT (BSC)</option>
// //                   <option value="BTC">BTC</option>
// //                   <option value="ETH">ETH</option>
// //                 </select>
// //               </div>

// //               {fundResult && (
// //                 <div
// //                   className={`p-2 text-sm rounded-md ${
// //                     fundResult.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
// //                   }`}
// //                 >
// //                   {fundResult.type === "success" ? (
// //                     <div>
// //                       <CheckCircle2 size={16} className="inline mr-1" />
// //                       {fundResult.data.message}
// //                       <p className="mt-1 text-xs">Send {fundResult.data.payAmount} {fundResult.data.payCurrency} to:</p>
// //                       <p className="break-all font-mono text-xs">{fundResult.data.payAddress}</p>
// //                     </div>
// //                   ) : (
// //                     <>
// //                       <XCircle size={16} className="inline mr-1" />
// //                       {fundResult.message}
// //                     </>
// //                   )}
// //                 </div>
// //               )}

// //               <div className="flex justify-end gap-2 mt-4">
// //                 <button type="button" onClick={() => setShowDeposit(false)} className="px-3 py-1 bg-gray-300 dark:bg-neutral-600 rounded-md text-sm">
// //                   Cancel
// //                 </button>
// //                 <button type="submit" disabled={fundLoading} className="px-3 py-1 bg-[#00A991] text-white rounded-md text-sm flex items-center gap-2">
// //                   {fundLoading ? <Loader2 size={14} className="animate-spin" /> : "Proceed"}
// //                 </button>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       )}

// //       {/* ─────── Transfer Modal ─────── */}
// //       {showTransfer && (
// //         <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
// //           <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg w-full max-w-md shadow-xl">
// //             <h2 className="text-lg font-semibold mb-3">Transfer Funds</h2>
// //             <form onSubmit={handleTransfer} className="space-y-3">
// //               <div>
// //                 <label className="block text-sm mb-1">Recipient User ID</label>
// //                 <input
// //                   type="text"
// //                   required
// //                   value={transferData.toUserId}
// //                   onChange={(e) => setTransferData({ ...transferData, toUserId: e.target.value })}
// //                   className="w-full p-2 border rounded-md dark:bg-neutral-700"
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block text-sm mb-1">Amount</label>
// //                 <input
// //                   type="number"
// //                   min="1"
// //                   required
// //                   value={transferData.amount}
// //                   onChange={(e) => setTransferData({ ...transferData, amount: e.target.value })}
// //                   className="w-full p-2 border rounded-md dark:bg-neutral-700"
// //                 />
// //               </div>

// //               {transferResult && (
// //                 <div
// //                   className={`p-2 text-sm rounded-md ${
// //                     transferResult.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
// //                   }`}
// //                 >
// //                   {transferResult.type === "success" ? (
// //                     <>
// //                       <CheckCircle2 size={16} className="inline mr-1" />
// //                       {transferResult.data.message}
// //                     </>
// //                   ) : (
// //                     <>
// //                       <XCircle size={16} className="inline mr-1" />
// //                       {transferResult.message}
// //                     </>
// //                   )}
// //                 </div>
// //               )}

// //               <div className="flex justify-end gap-2 mt-4">
// //                 <button type="button" onClick={() => setShowTransfer(false)} className="px-3 py-1 bg-gray-300 dark:bg-neutral-600 rounded-md text-sm">
// //                   Cancel
// //                 </button>
// //                 <button type="submit" disabled={transferLoading} className="px-3 py-1 bg-[#EE933C] text-white rounded-md text-sm flex items-center gap-2">
// //                   {transferLoading ? <Loader2 size={14} className="animate-spin" /> : "Send"}
// //                 </button>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       )}
      
// //     </motion.div>
// //   );
// // }










// // import React, { useEffect, useState } from "react";
// // import { motion } from "framer-motion";
// // import {
// //   DollarSign,
// //   CreditCard,
// //   ArrowRightLeft,
// //   Wallet,
// //   Loader2,
// //   XCircle,
// //   CheckCircle2,
// // } from "lucide-react";
// // import PortfolioOverview from "../../utlis/PortfolioOverview";
// // import ReferralCard from "../../utlis/ReferralCard";
// // import PackageSummary from "../../utlis/PackageSummary";
// // import PackagesSection from "../../utlis/PackagesSection";
// // import { getUserProfile } from "../../api/authApi";
// // import { initiateFund, transferFunds } from "../../api/walletApi";

// // export default function Dashboardpage() {
// //   // ─────────── State ───────────
// //   const [profile, setProfile] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   const [showDeposit, setShowDeposit] = useState(false);
// //   const [showTransfer, setShowTransfer] = useState(false);

// //   const [fundData, setFundData] = useState({ amount: "", payCurrency: "USDTBSC" });
// //   const [fundResult, setFundResult] = useState(null);
// //   const [fundLoading, setFundLoading] = useState(false);

// //   const [transferData, setTransferData] = useState({ toUserId: "", amount: "" });
// //   const [transferResult, setTransferResult] = useState(null);
// //   const [transferLoading, setTransferLoading] = useState(false);

// //   // ─────────── Fetch User Profile ───────────
// //   useEffect(() => {
// //     const token = localStorage.getItem("token") || sessionStorage.getItem("token");
// //     if (!token) {
// //       setError("No authentication token found.");
// //       setLoading(false);
// //       return;
// //     }

// //     getUserProfile(token)
// //       .then((data) => setProfile(data))
// //       .catch((err) => setError(err.message || "Failed to load user profile."))
// //       .finally(() => setLoading(false));
// //   }, []);

// //   // ─────────── Helpers ───────────
// //   const formatAmount = (amount, currency) => {
// //     const num = Number(amount);
// //     return isNaN(num) || num === 0 ? `0 ${currency}` : `${num.toFixed(2)} ${currency}`;
// //   };

// //   const wallets = profile?.wallets || {};
// //   const walletData = [
// //     { title: "Deposit Wallet", amount: formatAmount(wallets.deposit, "USD"), icon: <Wallet size={20} /> },
// //     { title: "Bear Wallet", amount: formatAmount(wallets.bear, "USD"), icon: <DollarSign size={20} /> },
// //     { title: "Bull Wallet", amount: formatAmount(wallets.bull, "USD"), icon: <CreditCard size={20} /> },
// //     { title: "Account Balance", amount: formatAmount(wallets.accountBalance, "USD"), icon: <ArrowRightLeft size={20} /> },
// //   ];

// //   const stats = [
// //     { title: "Total Investment", value: Number(profile?.totalInvestment ), currency: "USD" },
// //     { title: "PV", value: Number(profile?.pvp), currency: "USD" },
// //     { title: "GV", value: Number(profile?.pgv ), currency: "USD" },
// //     { title: "LTT", value: profile?.referrals, currency: "" },
// //   ];

// //   const fadeUp = {
// //     hidden: { opacity: 0, y: 40 },
// //     visible: (i = 1) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.2 } }),
// //   };

// //   // ─────────── Fund Wallet ───────────
// //   const handleFundWallet = async (e) => {
// //     e.preventDefault();
// //     setFundLoading(true);
// //     setFundResult(null);
// //     try {
// //       const res = await initiateFund({
// //         amount: Number(fundData.amount),
// //         payCurrency: fundData.payCurrency,
// //       });
// //       setFundResult({ type: "success", data: res });
// //       setFundData({ amount: "", payCurrency: "USDTBSC" });
// //     } catch (err) {
// //       setFundResult({
// //         type: "error",
// //         message: err.response?.data?.message || "Failed to initiate payment.",
// //       });
// //     } finally {
// //       setFundLoading(false);
// //     }
// //   };

// //   // ─────────── Transfer ───────────
// //   const handleTransfer = async (e) => {
// //     e.preventDefault();
// //     setTransferLoading(true);
// //     setTransferResult(null);
// //     try {
// //       const res = await transferFunds({
// //         toUserId: transferData.toUserId,
// //         amount: Number(transferData.amount),
// //       });
// //       setTransferResult({ type: "success", data: res });
// //       setTransferData({ toUserId: "", amount: "" });
// //     } catch (err) {
// //       setTransferResult({
// //         type: "error",
// //         message: err.response?.data?.message || "Transfer failed.",
// //       });
// //     } finally {
// //       setTransferLoading(false);
// //     }
// //   };

// //   // ─────────── Loading/Error States ───────────
// //   if (loading)
// //     return (
// //       <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-neutral-900">
// //         <Loader2 className="animate-spin text-[#00A991]" size={48} />
// //       </div>
// //     );

// //   if (error)
// //     return (
// //       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-neutral-900 text-red-600">
// //         <p className="text-lg font-semibold">Error</p>
// //         <p className="mt-2">{error}</p>
// //       </div>
// //     );

// //   // ─────────── Main Render ───────────
// //   return (
// //     <motion.div
// //       initial="hidden"
// //       animate="visible"
// //       className="flex flex-col items-center bg-gray-100 dark:bg-neutral-900 dark:text-white min-h-screen py-6 sm:py-10"
// //     >
// //       {/* ─────── Wallets ─────── */}
// //       <motion.div
// //         variants={fadeUp}
// //         className="w-[92%] lg:w-[80%] xl:w-[85%] bg-white dark:bg-neutral-800 rounded-xl shadow-md p-3 mb-6 border border-gray-100/30"
// //       >
// //         <div className="flex flex-col md:flex-row justify-between items-stretch divide-y md:divide-y-0 md:divide-x divide-gray-200">
// //           {walletData.map((item, i) => (
// //             <motion.div key={i} variants={fadeUp} custom={i} className="flex flex-col justify-center items-center w-full md:w-1/4 px-2 py-2 text-center space-y-1.5">
// //               <div className="flex flex-col sm:flex-row justify-center items-center gap-1">
// //                 <span className="text-[#00A991]">{item.icon}</span>
// //                 <h1 className="text-sm font-semibold">{item.title}:</h1>
// //                 <p className="text-sm font-bold">{item.amount}</p>
// //               </div>
// //               <div className="flex flex-wrap justify-center gap-2">
// //                 <button onClick={() => setShowDeposit(true)} className="px-3 py-1 rounded-full bg-[#00A991] text-white text-[11px] hover:opacity-90">
// //                   Deposit
// //                 </button>
// //                 <button onClick={() => setShowTransfer(true)} className="px-3 py-1 rounded-full bg-[#EE933C] text-white text-[11px] hover:opacity-90">
// //                   Transfer
// //                 </button>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </motion.div>

// //       {/* ─────── Stats ─────── */}
// //       <motion.div variants={fadeUp} className="w-full max-w-[1400px] px-4 sm:px-6">
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
// //           {stats.map((stat, index) => (
// //             <motion.div
// //               key={index}
// //               variants={fadeUp}
// //               custom={index}
// //               className="bg-white dark:bg-neutral-800 rounded-[10px] shadow-sm border border-gray-100 p-4 flex flex-col justify-between h-auto sm:h-40"
// //             >
// //               <div className="flex justify-between items-center mb-2">
// //                 <h3 className="text-xs sm:text-sm font-medium">{stat.title}</h3>
// //                 <span className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center border border-gray-300 rounded-full">
// //                   <DollarSign size={12} className="text-gray-600" />
// //                 </span>
// //               </div>
// //               <hr />
// //               <div className="text-[36px] sm:text-[50px] font-semibold text-emerald-600">
// //                 {stat.value}
// //                 <span className="text-sm sm:text-base font-medium text-emerald-600 ml-1">{stat.currency}</span>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </motion.div>

// //       {/* ─────── Portfolio + Referral ─────── */}
// //       <motion.div variants={fadeUp} className="py-6 flex flex-col lg:flex-row gap-6 w-full max-w-[1400px] px-4 sm:px-6">
// //         <div className="w-full lg:w-[65%]">
// //           <PortfolioOverview profile={profile} />
// //         </div>
// //         <div className="w-full lg:w-[35%]">
// //           <ReferralCard profile={profile} />
// //         </div>
// //       </motion.div>

// //       {/* ─────── Packages ─────── */}
// //       <motion.div variants={fadeUp} className="py-6 flex flex-col lg:flex-row gap-6 w-full max-w-[1400px] px-4 sm:px-6">
// //         <div className="w-full lg:w-[30%]">
// //           <PackageSummary packages={profile?.packages} />
// //         </div>
// //         <div className="w-full lg:w-[70%]">
// //           <PackagesSection packages={profile?.packages} />
// //         </div>
// //       </motion.div>

// //       {/* ─────── Risk Warning ─────── */}
// //       <motion.div variants={fadeUp} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start bg-white dark:bg-neutral-800 rounded-xl p-4 sm:p-8 mx-auto mt-10 w-[95%] lg:w-[85%] xl:w-[95%]">
// //         <div className="md:w-1/2 space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
// //           <h1 className="text-lg sm:text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-300 pb-2">
// //             Risk Warning
// //           </h1>
// //           <p>
// //             Trading forex, CFDs, and financial derivatives carries high risk and may not be suitable for all investors.
// //             Leverage can work for you or against you. Please consider your financial situation before trading.
// //           </p>
// //           <p>
// //             <span>International Finance Asia Pty Ltd</span> is regulated by the Australian Securities and Investments Commission (ACN 670 137 345) under License No. 001305580.
// //           </p>
// //         </div>
// //         <div className="md:w-1/2 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base border-t md:border-t-0 md:border-l border-gray-300 md:pl-6 pt-4 md:pt-14">
// //           <p>
// //             The contents of this site are for informational purposes only and should not be regarded as an offer or solicitation in any jurisdiction.
// //             Please read and understand the{" "}
// //             <span className="text-[#00A991] font-medium">Terms and Conditions</span> and{" "}
// //             <span className="text-[#00A991] font-medium">Risk Disclosure</span> before trading.
// //           </p>
// //         </div>
// //       </motion.div>

// //       {/* ─────── Deposit Modal ─────── */}
// //       {showDeposit && (
// //         <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
// //           <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg w-full max-w-md shadow-xl">
// //             <h2 className="text-lg font-semibold mb-3">Fund Wallet</h2>
// //             <form onSubmit={handleFundWallet} className="space-y-3">
// //               <div>
// //                 <label className="block text-sm mb-1">Amount (USD)</label>
// //                 <input
// //                   type="number"
// //                   min="1"
// //                   required
// //                   value={fundData.amount}
// //                   onChange={(e) => setFundData({ ...fundData, amount: e.target.value })}
// //                   className="w-full p-2 border rounded-md dark:bg-neutral-700"
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block text-sm mb-1">Currency</label>
// //                 <select
// //                   value={fundData.payCurrency}
// //                   onChange={(e) => setFundData({ ...fundData, payCurrency: e.target.value })}
// //                   className="w-full p-2 border rounded-md dark:bg-neutral-700"
// //                 >
// //                   <option value="USDTBSC">USDT (BSC)</option>
// //                   <option value="BTC">BTC</option>
// //                   <option value="ETH">ETH</option>
// //                 </select>
// //               </div>

// //               {fundResult && (
// //                 <div
// //                   className={`p-2 text-sm rounded-md ${
// //                     fundResult.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
// //                   }`}
// //                 >
// //                   {fundResult.type === "success" ? (
// //                     <div>
// //                       <CheckCircle2 size={16} className="inline mr-1" />
// //                       {fundResult.data.message}
// //                       <p className="mt-1 text-xs">
// //                         Send {fundResult.data.payAmount} {fundResult.data.payCurrency} to:
// //                       </p>
// //                       <p className="break-all font-mono text-xs">{fundResult.data.payAddress}</p>
// //                     </div>
// //                   ) : (
// //                     <>
// //                       <XCircle size={16} className="inline mr-1" />
// //                       {fundResult.message}
// //                     </>
// //                   )}
// //                 </div>
// //               )}

// //               <div className="flex justify-end gap-2 mt-4">
// //                 <button
// //                   type="button"
// //                   onClick={() => setShowDeposit(false)}
// //                   className="px-3 py-1 bg-gray-300 dark:bg-neutral-600 rounded-md text-sm"
// //                 >
// //                   Cancel
// //                 </button>
// //                 <button
// //                   type="submit"
// //                   disabled={fundLoading}
// //                   className="px-3 py-1 bg-[#00A991] text-white rounded-md text-sm flex items-center gap-2"
// //                 >
// //                   {fundLoading ? <Loader2 size={14} className="animate-spin" /> : "Proceed"}
// //                 </button>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       )}

// //       {/* ─────── Transfer Modal ─────── */}
// //       {showTransfer && (
// //         <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
// //           <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg w-full max-w-md shadow-xl">
// //             <h2 className="text-lg font-semibold mb-3">Transfer Funds</h2>
// //             <form onSubmit={handleTransfer} className="space-y-3">
// //               <div>
// //                 <label className="block text-sm mb-1">Recipient User ID</label>
// //                 <input
// //                   type="text"
// //                   required
// //                   value={transferData.toUserId}
// //                   onChange={(e) => setTransferData({ ...transferData, toUserId: e.target.value })}
// //                   className="w-full p-2 border rounded-md dark:bg-neutral-700"
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block text-sm mb-1">Amount</label>
// //                 <input
// //                   type="number"
// //                   min="1"
// //                   required
// //                   value={transferData.amount}
// //                   onChange={(e) => setTransferData({ ...transferData, amount: e.target.value })}
// //                   className="w-full p-2 border rounded-md dark:bg-neutral-700"
// //                 />
// //               </div>

// //               {transferResult && (
// //                 <div
// //                   className={`p-2 text-sm rounded-md ${
// //                     transferResult.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
// //                   }`}
// //                 >
// //                   {transferResult.type === "success" ? (
// //                     <>
// //                       <CheckCircle2 size={16} className="inline mr-1" />
// //                       {transferResult.data.message}
// //                     </>
// //                   ) : (
// //                     <>
// //                       <XCircle size={16} className="inline mr-1" />
// //                       {transferResult.message}
// //                     </>
// //                   )}
// //                 </div>
// //               )}

// //               <div className="flex justify-end gap-2 mt-4">
// //                 <button
// //                   type="button"
// //                   onClick={() => setShowTransfer(false)}
// //                   className="px-3 py-1 bg-gray-300 dark:bg-neutral-600 rounded-md text-sm"
// //                 >
// //                   Cancel
// //                 </button>
// //                 <button
// //                   type="submit"
// //                   disabled={transferLoading}
// //                   className="px-3 py-1 bg-[#EE933C] text-white rounded-md text-sm flex items-center gap-2"
// //                 >
// //                   {transferLoading ? <Loader2 size={14} className="animate-spin" /> : "Send"}
// //                 </button>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       )}
// //     </motion.div>
// //   );
// // }











// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   DollarSign,
//   CreditCard,
//   ArrowRightLeft,
//   Wallet,
//   Loader2,
//   XCircle,
//   CheckCircle2,
// } from "lucide-react";
// import PortfolioOverview from "../../utlis/PortfolioOverview";
// import ReferralCard from "../../utlis/ReferralCard";
// import PackageSummary from "../../utlis/PackageSummary";
// import PackagesSection from "../../utlis/PackagesSection";
// import { getUserProfile } from "../../api/authApi";
// import { initiateFund, transferFunds } from "../../api/walletApi";

// export default function Dashboardpage() {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Modals
//   const [showDeposit, setShowDeposit] = useState(false);
//   const [showTransfer, setShowTransfer] = useState(false);

//   // Deposit
//   const [fundData, setFundData] = useState({ amount: "", payCurrency: "USDTBSC" });
//   const [fundResult, setFundResult] = useState(null);
//   const [fundLoading, setFundLoading] = useState(false);

//   // Transfer
//   const [transferData, setTransferData] = useState({ toUserId: "", amount: "" });
//   const [transferResult, setTransferResult] = useState(null);
//   const [transferLoading, setTransferLoading] = useState(false);
//   // withdrawal
//   const [withdrawalModal, setWithdrawalModal] = useState({ toUserId: "", amount: "" });
//   const [withdrawalResult, setWithdrwalResult] = useState(null);
//   const [withdrawalLoading, setWithdrawalLoading] = useState(false);

//   // ─────────── Fetch Profile ───────────
//   useEffect(() => {
//     const token = localStorage.getItem("token") || sessionStorage.getItem("token");
//     if (!token) {
//       setError("No authentication token found.");
//       setLoading(false);
//       return;
//     }

//     getUserProfile(token)
//       .then((data) => setProfile(data))
//       .catch((err) => setError(err.message || "Failed to load user profile."))
//       .finally(() => setLoading(false));
//   }, []);

//   // ─────────── Helpers ───────────
//   const formatAmount = (amount, currency) => {
//     const num = Number(amount);
//     return isNaN(num) ? `0 ${currency}` : `${num.toFixed(2)} ${currency}`;
//   };

//   // Defensive fallback
//   const wallets = profile?.wallets || {};

//   // Wallet Cards with custom button logic
//   const walletData = [
//     {
//       title: "Deposit Wallet",
//       amount: formatAmount(wallets.deposit, "USD"),
//       icon: <Wallet size={20} />,
//       buttons: ["deposit", "transfer"],
//     },
//     {
//       title: "Bear Wallet",
//       amount: formatAmount(wallets.bear, "USD"),
//       icon: <DollarSign size={20} />,
//       buttons: [],
//     },
//     {
//       title: "Bull Wallet",
//       amount: formatAmount(wallets.bull, "USD"),
//       icon: <CreditCard size={20} />,
//       buttons: ["transfer"],
//     },
//     {
//       title: "Account Balance",
//       amount: formatAmount(wallets.accountBalance || profile?.walletBalance, "USD"),
//       icon: <ArrowRightLeft size={20} />,
//       buttons: ["withdraw","transfer"],
//     },
//   ];

//   const stats = [
//     { title: "Total Investment", value: profile?.totalInvestment || 0, currency: "USD" },
//     { title: "Personal Volume (PV)", value: profile?.personalVolume || 0, currency: "USD" },
//     { title: "Group Volume (GV)", value: profile?.groupVolume || 0, currency: "USD" },
//     { title: "Total Referrals", value: profile?.totalReferral || 0, currency: "" },
//   ];

//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: (i = 1) => ({
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, delay: i * 0.2 },
//     }),
//   };

//   // ─────────── Fund Wallet ───────────
//   const handleFundWallet = async (e) => {
//     e.preventDefault();
//     setFundLoading(true);
//     setFundResult(null);
//     try {
//       const res = await initiateFund({
//         amount: Number(fundData.amount),
//         payCurrency: fundData.payCurrency,
//       });
//       setFundResult({ type: "success", data: res });
//       setFundData({ amount: "", payCurrency: "USDTBSC" });
//     } catch (err) {
//       setFundResult({
//         type: "error",
//         message: err.response?.data?.message || "Failed to initiate payment.",
//       });
//     } finally {
//       setFundLoading(false);
//     }
//   };

//   // ─────────── Transfer ───────────
//   const handleTransfer = async (e) => {
//     e.preventDefault();
//     setTransferLoading(true);
//     setTransferResult(null);
//     try {
//       const res = await transferFunds({
//         toUserId: transferData.toUserId,
//         amount: Number(transferData.amount),
//       });
//       setTransferResult({ type: "success", data: res });
//       setTransferData({ toUserId: "", amount: "" });
//     } catch (err) {
//       setTransferResult({
//         type: "error",
//         message: err.response?.data?.message || "Transfer failed.",
//       });
//     } finally {
//       setTransferLoading(false);
//     }
//   };

//   // ─────────── Loading/Error ───────────
//   if (loading)
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-neutral-900">
//         <Loader2 className="animate-spin text-[#00A991]" size={48} />
//       </div>
//     );

//   if (error)
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-neutral-900 text-red-600">
//         <p className="text-lg font-semibold">Error</p>
//         <p className="mt-2">{error}</p>
//       </div>
//     );

//   // ─────────── Main UI ───────────
//   return (
//     <motion.div
//       initial="hidden"
//       animate="visible"
//       className="flex flex-col items-center bg-gray-100 dark:bg-neutral-900 dark:text-white min-h-screen py-6 sm:py-10"
//     >
//       {/* ─────── Wallets ─────── */}
//       <motion.div
//         variants={fadeUp}
//         className="w-[92%] lg:w-[80%] xl:w-[85%] bg-white dark:bg-neutral-800 rounded-xl shadow-md p-3 mb-6 border border-gray-100/30"
//       >
//         <div className="flex flex-col md:flex-row justify-between items-stretch divide-y md:divide-y-0 md:divide-x divide-gray-200">
//           {walletData.map((item, i) => (
//             <motion.div
//               key={i}
//               variants={fadeUp}
//               custom={i}
//               className="flex flex-col justify-center items-center w-full md:w-1/4 px-2 py-2 text-center space-y-1.5"
//             >
//               <div className="flex flex-col sm:flex-row justify-center items-center gap-1">
//                 <span className="text-[#00A991]">{item.icon}</span>
//                 <h1 className="text-sm font-semibold">{item.title}:</h1>
//                 <p className="text-sm font-bold">{item.amount}</p>
//               </div>

//               {/* Conditionally render wallet buttons */}
//               <div className="flex flex-wrap justify-center gap-2">
//                 {item.buttons.includes("deposit") && (
//                   <button
//                     onClick={() => setShowDeposit(true)}
//                     className="px-3 py-1 rounded-full bg-[#00A991] text-white text-[11px] hover:opacity-90"
//                   >
//                     Deposit
//                   </button>
//                 )}
//                 {item.buttons.includes("transfer") && (
//                   <button
//                     onClick={() => setShowTransfer(true)}
//                     className="px-3 py-1 rounded-full bg-[#EE933C] text-white text-[11px] hover:opacity-90"
//                   >
//                     Transfer
//                   </button>
//                 )}
//                 {item.buttons.includes("withdraw") && (
//                   <button
//                     onClick={() => setShowTransfer(true)}
//                     className="px-3 py-1 rounded-full bg-[#00A991] text-white text-[11px] hover:opacity-90"
//                   >
//                     Withdraw
//                   </button>
//                 )}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       {/* ─────── Stats Section ─────── */}
//       <motion.div variants={fadeUp} className="w-full max-w-[1400px] px-4 sm:px-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               variants={fadeUp}
//               custom={index}
//               className="bg-white dark:bg-neutral-800 rounded-[10px] shadow-sm border border-gray-100 p-4 flex flex-col justify-between"
//             >
//               <div className="flex justify-between items-center mb-2">
//                 <h3 className="text-xs sm:text-sm font-medium">{stat.title}</h3>
//                 <DollarSign size={12} className="text-gray-600" />
//               </div>
//               <hr />
//               <div className="text-[36px] sm:text-[50px] font-semibold text-emerald-600">
//                 {stat.value}
//                 {stat.currency && (
//                   <span className="text-sm ml-1">{stat.currency}</span>
//                 )}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       {/* Portfolio + Referral */}
//       <motion.div variants={fadeUp} className="py-6 flex flex-col lg:flex-row gap-6 w-full max-w-[1400px] px-4 sm:px-6">
//         <div className="w-full lg:w-[65%]">
//           <PortfolioOverview profile={profile} />
//         </div>
//         <div className="w-full lg:w-[35%]">
//           <ReferralCard profile={profile} />
//         </div>
//       </motion.div>

//       {/* Packages */}
//       <motion.div variants={fadeUp} className="py-6 flex flex-col lg:flex-row gap-6 w-full max-w-[1400px] px-4 sm:px-6">
//         <div className="w-full lg:w-[30%]">
//           <PackageSummary packages={profile?.packages} />
//         </div>
//         <div className="w-full lg:w-[70%]">
//           <PackagesSection packages={profile?.packages} />
//         </div>
//       </motion.div>

//       {/* Deposit + Transfer Modals */}
//       {/* Deposit Modal */}
//       {showDeposit && (
//         <DepositModal
//           fundData={fundData}
//           setFundData={setFundData}
//           fundResult={fundResult}
//           fundLoading={fundLoading}
//           handleFundWallet={handleFundWallet}
//           closeModal={() => setShowDeposit(false)}
//         />
//       )}

//       {/* Transfer Modal */}
//       {showTransfer && (
//         <TransferModal
//           transferData={transferData}
//           setTransferData={setTransferData}
//           transferResult={transferResult}
//           transferLoading={transferLoading}
//           handleTransfer={handleTransfer}
//           closeModal={() => setShowTransfer(false)}
//         />
//       )}
//     </motion.div>
//   );
// }

// /* ─────────── Helper Modal Components ─────────── */

// const DepositModal = ({ fundData, setFundData, fundResult, fundLoading, handleFundWallet, closeModal }) => (
//   <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
//     <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg w-full max-w-md shadow-xl">
//       <h2 className="text-lg font-semibold mb-3">Fund Wallet</h2>
//       <form onSubmit={handleFundWallet} className="space-y-3">
//         <div>
//           <label className="block text-sm mb-1">Amount (USD)</label>
//           <input
//             type="number"
//             min="1"
//             required
//             value={fundData.amount}
//             onChange={(e) => setFundData({ ...fundData, amount: e.target.value })}
//             className="w-full p-2 border rounded-md dark:bg-neutral-700"
//           />
//         </div>
//         <div>
//           <label className="block text-sm mb-1">Currency</label>
//           <select
//             value={fundData.payCurrency}
//             onChange={(e) => setFundData({ ...fundData, payCurrency: e.target.value })}
//             className="w-full p-2 border rounded-md dark:bg-neutral-700"
//           >
//             <option value="USDTBSC">USDT (BSC)</option>
//             <option value="BTC">BTC</option>
//             <option value="ETH">ETH</option>
//           </select>
//         </div>

//         {fundResult && (
//           <div
//             className={`p-2 text-sm rounded-md ${
//               fundResult.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
//             }`}
//           >
//             {fundResult.type === "success" ? (
//               <>
//                 <CheckCircle2 size={16} className="inline mr-1" />
//                 {fundResult.data.message}
//                 <p className="mt-1 text-xs">
//                   Send {fundResult.data.payAmount} {fundResult.data.payCurrency} to:
//                 </p>
//                 <p className="break-all font-mono text-xs">{fundResult.data.payAddress}</p>
//               </>
//             ) : (
//               <>
//                 <XCircle size={16} className="inline mr-1" />
//                 {fundResult.message}
//               </>
//             )}
//           </div>
//         )}

//         <div className="flex justify-end gap-2 mt-4">
//           <button
//             type="button"
//             onClick={closeModal}
//             className="px-3 py-1 bg-gray-300 dark:bg-neutral-600 rounded-md text-sm"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             disabled={fundLoading}
//             className="px-3 py-1 bg-[#00A991] text-white rounded-md text-sm flex items-center gap-2"
//           >
//             {fundLoading ? <Loader2 size={14} className="animate-spin" /> : "Proceed"}
//           </button>
//         </div>
//       </form>
//     </div>
//   </div>
// );

// const TransferModal = ({
//   transferData,
//   setTransferData,
//   transferResult,
//   transferLoading,
//   handleTransfer,
//   closeModal,
// }) => (
//   <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
//     <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg w-full max-w-md shadow-xl">
//       <h2 className="text-lg font-semibold mb-3">Transfer Funds</h2>
//       <form onSubmit={handleTransfer} className="space-y-3">
//         <div>
//           <label className="block text-sm mb-1">Recipient User ID</label>
//           <input
//             type="text"
//             required
//             value={transferData.toUserId}
//             onChange={(e) => setTransferData({ ...transferData, toUserId: e.target.value })}
//             className="w-full p-2 border rounded-md dark:bg-neutral-700"
//           />
//         </div>
//         <div>
//           <label className="block text-sm mb-1">Amount</label>
//           <input
//             type="number"
//             min="1"
//             required
//             value={transferData.amount}
//             onChange={(e) => setTransferData({ ...transferData, amount: e.target.value })}
//             className="w-full p-2 border rounded-md dark:bg-neutral-700"
//           />
//         </div>

//         {transferResult && (
//           <div
//             className={`p-2 text-sm rounded-md ${
//               transferResult.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
//             }`}
//           >
//             {transferResult.type === "success" ? (
//               <>
//                 <CheckCircle2 size={16} className="inline mr-1" />
//                 {transferResult.data.message}
//               </>
//             ) : (
//               <>
//                 <XCircle size={16} className="inline mr-1" />
//                 {transferResult.message}
//               </>
//             )}
//           </div>
//         )}

//         <div className="flex justify-end gap-2 mt-4">
//           <button
//             type="button"
//             onClick={closeModal}
//             className="px-3 py-1 bg-gray-300 dark:bg-neutral-600 rounded-md text-sm"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             disabled={transferLoading}
//             className="px-3 py-1 bg-[#EE933C] text-white rounded-md text-sm flex items-center gap-2"
//           >
//             {transferLoading ? <Loader2 size={14} className="animate-spin" /> : "Send"}
//           </button>
//         </div>
//       </form>
//     </div>
//   </div>
// const WithdrawalModal = ({
//   withdrawalModal,
//   setWithdrawalResult,
//   withdrawalResult,
//   withdrawalLoading,
//   handleTransfer,
//   closeModal,
// }) => {
//   const [withdrawalData, setWithdrawalData] = useState({
//     toUserId: "",
//     amount: "",
//   });

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
//       <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg w-full max-w-md shadow-xl">
//         <h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
//           Transfer Funds
//         </h2>

//         <form onSubmit={(e) => handleTransfer(e, withdrawalData)} className="space-y-3">
//           <div>
//             <label className="block text-sm mb-1 dark:text-gray-300">Recipient User ID</label>
//             <input
//               type="text"
//               required
//               value={withdrawalData.toUserId}
//               onChange={(e) =>
//                 setWithdrawalData({ ...withdrawalData, toUserId: e.target.value })
//               }
//               className="w-full p-2 border rounded-md dark:bg-neutral-700 dark:text-white"
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-1 dark:text-gray-300">Amount</label>
//             <input
//               type="number"
//               min="1"
//               required
//               value={withdrawalData.amount}
//               onChange={(e) =>
//                 setWithdrawalData({ ...withdrawalData, amount: e.target.value })
//               }
//               className="w-full p-2 border rounded-md dark:bg-neutral-700 dark:text-white"
//             />
//           </div>

//           {withdrawalResult && (
//             <div
//               className={`p-2 text-sm rounded-md ${
//                 withdrawalResult.type === "success"
//                   ? "bg-green-100 text-green-700"
//                   : "bg-red-100 text-red-700"
//               }`}
//             >
//               {withdrawalResult.type === "success" ? (
//                 <>
//                   <CheckCircle2 size={16} className="inline mr-1" />
//                   {withdrawalResult.data?.message || "Transfer successful"}
//                 </>
//               ) : (
//                 <>
//                   <XCircle size={16} className="inline mr-1" />
//                   {withdrawalResult.message || "Transfer failed"}
//                 </>
//               )}
//             </div>
//           )}

//           <div className="flex justify-end gap-2 mt-4">
//             <button
//               type="button"
//               onClick={closeModal}
//               className="px-3 py-1 bg-gray-300 dark:bg-neutral-600 rounded-md text-sm"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               disabled={withdrawalLoading}
//               className="px-3 py-1 bg-[#EE933C] text-white rounded-md text-sm flex items-center gap-2"
//             >
//               {withdrawalLoading ? (
//                 <Loader2 size={14} className="animate-spin" />
//               ) : (
//                 "Send"
//               )}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
  
// );






import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  DollarSign,
  CreditCard,
  ArrowRightLeft,
  Wallet,
  Loader2,
  XCircle,
  CheckCircle2,
} from "lucide-react";

import PortfolioOverview from "../../utlis/PortfolioOverview";
import ReferralCard from "../../utlis/ReferralCard";
import PackageSummary from "../../utlis/PackageSummary";
import PackagesSection from "../../utlis/PackagesSection";

import { getUserProfile } from "../../api/authApi";
import { initiateFund, transferFunds } from "../../api/walletApi";
import axios from "axios";

/* --------------------------------------------------------------- */
/*                     REUSABLE MODAL COMPONENTS                  */
/* --------------------------------------------------------------- */
const DepositModal = ({
  fundData,
  setFundData,
  fundResult,
  fundLoading,
  handleFundWallet,
  closeModal,
}) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
    <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg w-full max-w-md shadow-xl">
      <h2 className="text-lg font-semibold mb-3">Fund Wallet</h2>
      <form onSubmit={handleFundWallet} className="space-y-3">
        <div>
          <label className="block text-sm mb-1">Amount (USD)</label>
          <input
            type="number"
            min="1"
            required
            value={fundData.amount}
            onChange={(e) => setFundData({ ...fundData, amount: e.target.value })}
            className="w-full p-2 border rounded-md dark:bg-neutral-700"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Currency</label>
          <select
            value={fundData.payCurrency}
            onChange={(e) => setFundData({ ...fundData, payCurrency: e.target.value })}
            className="w-full p-2 border rounded-md dark:bg-neutral-700"
          >
            <option value="USDTBSC">USDT (BSC)</option>
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
          </select>
        </div>

        {fundResult && (
          <div
            className={`p-2 text-sm rounded-md ${
              fundResult.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {fundResult.type === "success" ? (
              <>
                <CheckCircle2 size={16} className="inline mr-1" />
                {fundResult.data.message}
                <p className="mt-1 text-xs">
                  Send {fundResult.data.payAmount} {fundResult.data.payCurrency} to:
                </p>
                <p className="break-all font-mono text-xs">{fundResult.data.payAddress}</p>
              </>
            ) : (
              <>
                <XCircle size={16} className="inline mr-1" />
                {fundResult.message}
              </>
            )}
          </div>
        )}

        <div className="flex justify-end gap-2 mt-4">
          <button
            type="button"
            onClick={closeModal}
            className="px-3 py-1 bg-gray-300 dark:bg-neutral-600 rounded-md text-sm"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={fundLoading}
            className="px-3 py-1 bg-[#00A991] text-white rounded-md text-sm flex items-center gap-2"
          >
            {fundLoading ? <Loader2 size={14} className="animate-spin" /> : "Proceed"}
          </button>
        </div>
      </form>
    </div>
  </div>
);

const TransferModal = ({
  transferData,
  setTransferData,
  transferResult,
  transferLoading,
  handleTransfer,
  closeModal,
}) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
    <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg w-full max-w-md shadow-xl">
      <h2 className="text-lg font-semibold mb-3">Transfer Funds</h2>
      <form onSubmit={handleTransfer} className="space-y-3">
        <div>
          <label className="block text-sm mb-1">Recipient User ID</label>
          <input
            type="text"
            required
            value={transferData.toUserId}
            onChange={(e) => setTransferData({ ...transferData, toUserId: e.target.value })}
            className="w-full p-2 border rounded-md dark:bg-neutral-700"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Amount</label>
          <input
            type="number"
            min="1"
            required
            value={transferData.amount}
            onChange={(e) => setTransferData({ ...transferData, amount: e.target.value })}
            className="w-full p-2 border rounded-md dark:bg-neutral-700"
          />
        </div>

        {transferResult && (
          <div
            className={`p-2 text-sm rounded-md ${
              transferResult.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {transferResult.type === "success" ? (
              <>
                <CheckCircle2 size={16} className="inline mr-1" />
                {transferResult.data.message}
              </>
            ) : (
              <>
                <XCircle size={16} className="inline mr-1" />
                {transferResult.message}
              </>
            )}
          </div>
        )}

        <div className="flex justify-end gap-2 mt-4">
          <button
            type="button"
            onClick={closeModal}
            className="px-3 py-1 bg-gray-300 dark:bg-neutral-600 rounded-md text-sm"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={transferLoading}
            className="px-3 py-1 bg-[#EE933C] text-white rounded-md text-sm flex items-center gap-2"
          >
            {transferLoading ? <Loader2 size={14} className="animate-spin" /> : "Send"}
          </button>
        </div>
      </form>
    </div>
  </div>
);

/* -------------------------- WITHDRAWAL MODAL -------------------------- */
const WithdrawalModal = ({
  withdrawalData,
  setWithdrawalData,
  withdrawalResult,
  withdrawalLoading,
  handleWithdrawal,
  closeModal,
}) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
    <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg w-full max-w-md shadow-xl">
      <h2 className="text-lg font-semibold mb-3">Withdraw Funds</h2>
      <form onSubmit={handleWithdrawal} className="space-y-3">
        <div>
          <label className="block text-sm mb-1">Amount (USD)</label>
          <input
            type="number"
            min="1"
            required
            value={withdrawalData.amount}
            onChange={(e) =>
              setWithdrawalData({ ...withdrawalData, amount: e.target.value })
            }
            className="w-full p-2 border rounded-md dark:bg-neutral-700"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Withdrawal Address</label>
          <input
            type="text"
            required
            placeholder="0x..."
            value={withdrawalData.withdrawalAddress}
            onChange={(e) =>
              setWithdrawalData({ ...withdrawalData, withdrawalAddress: e.target.value })
            }
            className="w-full p-2 border rounded-md dark:bg-neutral-700"
          />
        </div>

        {withdrawalResult && (
          <div
            className={`p-2 text-sm rounded-md ${
              withdrawalResult.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {withdrawalResult.type === "success" ? (
              <>
                <CheckCircle2 size={16} className="inline mr-1" />
                {withdrawalResult.message}
              </>
            ) : (
              <>
                <XCircle size={16} className="inline mr-1" />
                {withdrawalResult.message}
              </>
            )}
          </div>
        )}

        <div className="flex justify-end gap-2 mt-4">
          <button
            type="button"
            onClick={closeModal}
            className="px-3 py-1 bg-gray-300 dark:bg-neutral-600 rounded-md text-sm"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={withdrawalLoading}
            className="px-3 py-1 bg-[#00A991] text-white rounded-md text-sm flex items-center gap-2"
          >
            {withdrawalLoading ? <Loader2 size={14} className="animate-spin" /> : "Withdraw"}
          </button>
        </div>
      </form>
    </div>
  </div>
);


export default function Dashboardpage() {
  /* -------------------------- STATE -------------------------- */
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Modals
  const [showDeposit, setShowDeposit] = useState(false);
  const [showTransfer, setShowTransfer] = useState(false);
  const [showWithdrawal, setShowWithdrawal] = useState(false);

  // Deposit
  const [fundData, setFundData] = useState({ amount: "", payCurrency: "USDTBSC" });
  const [fundResult, setFundResult] = useState(null);
  const [fundLoading, setFundLoading] = useState(false);

  // Transfer
  const [transferData, setTransferData] = useState({ toUserId: "", amount: "" });
  const [transferResult, setTransferResult] = useState(null);
  const [transferLoading, setTransferLoading] = useState(false);

  // Withdrawal
  const [withdrawalData, setWithdrawalData] = useState({ amount: "", withdrawalAddress: "" });
  const [withdrawalResult, setWithdrawalResult] = useState(null);
  const [withdrawalLoading, setWithdrawalLoading] = useState(false);

  /* -------------------------- FETCH PROFILE -------------------------- */
  useEffect(() => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) {
      setError("No authentication token found.");
      setLoading(false);
      return;
    }
    getUserProfile(token)
      .then((data) => setProfile(data))
      .catch((err) => setError(err.message || "Failed to load profile."))
      .finally(() => setLoading(false));
  }, []);

  /* -------------------------- HELPERS -------------------------- */
  const formatAmount = (amt, cur = "USD") => {
    const n = Number(amt);
    return isNaN(n) ? `0 ${cur}` : `${n.toFixed(2)} ${cur}`;
  };

  const wallets = profile?.wallets || {};

  const walletData = [
    {
      title: "Deposit Wallet",
      amount: formatAmount(wallets.deposit),
      icon: <Wallet size={20} />,
      buttons: ["deposit"],
    },
    {
      title: "Bear Wallet",
      amount: formatAmount(wallets.bear),
      icon: <DollarSign size={20} />,
      buttons: [],
    },
    {
      title: "Bull Wallet",
      amount: formatAmount(wallets.bull),
      icon: <CreditCard size={20} />,
      buttons: ["transfer"],
    },
    {
      title: "Account Balance",
      amount: formatAmount(profile?.activeInvestment),
      icon: <ArrowRightLeft size={20} />,
      buttons: ["withdraw", "transfer"],
    },
  ];

  const stats = [
    { title: "Total Investment", value: profile?.totalInvestment || 0, currency: "USD" },
    { title: "Personal Volume (PV)", value: profile?.personalVolume || 0, currency: "USD" },
    { title: "Group Volume (GV)", value: profile?.groupVolume || 0, currency: "USD" },
    { title: "Total Referrals", value: profile?.totalReferral || 0, currency: "" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  /* -------------------------- DEPOSIT -------------------------- */
  const handleFundWallet = async (e) => {
    e.preventDefault();
    setFundLoading(true);
    setFundResult(null);
    try {
      const res = await initiateFund({
        amount: Number(fundData.amount),
        payCurrency: fundData.payCurrency,
      });
      setFundResult({ type: "success", data: res });
      setFundData({ amount: "", payCurrency: "USDTBSC" });
    } catch (err) {
      setFundResult({
        type: "error",
        message: err.response?.data?.message || "Failed to initiate payment.",
      });
    } finally {
      setFundLoading(false);
    }
  };

  /* -------------------------- TRANSFER -------------------------- */
  const handleTransfer = async (e) => {
    e.preventDefault();
    setTransferLoading(true);
    setTransferResult(null);
    try {
      const res = await transferFunds({
        toUserId: transferData.toUserId,
        amount: Number(transferData.amount),
      });
      setTransferResult({ type: "success", data: res });
      setTransferData({ toUserId: "", amount: "" });
    } catch (err) {
      setTransferResult({
        type: "error",
        message: err.response?.data?.message || "Transfer failed.",
      });
    } finally {
      setTransferLoading(false);
    }
  };

  /* -------------------------- WITHDRAWAL -------------------------- */
  const handleWithdrawal = async (e) => {
    e.preventDefault();
    setWithdrawalLoading(true);
    setWithdrawalResult(null);

    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    try {
      const res = await axios.post(
        "/api/users/withdrawal",
        {
          amount: Number(withdrawalData.amount),
          withdrawalAddress: withdrawalData.withdrawalAddress.trim(),
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setWithdrawalResult({ type: "success", message: res.data.message || "Withdrawal request submitted." });
      setWithdrawalData({ amount: "", withdrawalAddress: "" });
    } catch (err) {
      setWithdrawalResult({
        type: "error",
        message: err.response?.data?.message || "Withdrawal failed.",
      });
    } finally {
      setWithdrawalLoading(false);
    }
  };

  /* -------------------------- LOADING / ERROR -------------------------- */
  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-neutral-900">
        <Loader2 className="animate-spin text-[#00A991]" size={48} />
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-neutral-900 text-red-600">
        <p className="text-lg font-semibold">Error</p>
        <p className="mt-2">{error}</p>
      </div>
    );

  /* -------------------------- MAIN RENDER -------------------------- */
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center bg-gray-100 dark:bg-neutral-900 dark:text-white min-h-screen py-6 sm:py-10"
    >
      {/* ─────── WALLETS ─────── */}
      <motion.div
        variants={fadeUp}
        className="w-[92%] lg:w-[80%] xl:w-[85%] bg-white dark:bg-neutral-800 rounded-xl shadow-md p-3 mb-6 border border-gray-100/30"
      >
        <div className="flex flex-col md:flex-row justify-between items-stretch divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {walletData.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="flex flex-col justify-center items-center w-full md:w-1/4 px-2 py-2 text-center space-y-1.5"
            >
              <div className="flex flex-col sm:flex-row justify-center items-center gap-1">
                <span className="text-[#00A991]">{item.icon}</span>
                <h1 className="text-sm font-semibold">{item.title}:</h1>
                <p className="text-sm font-bold">{item.amount}</p>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {item.buttons.includes("deposit") && (
                  <button
                    onClick={() => setShowDeposit(true)}
                    className="px-3 py-1 rounded-full bg-[#00A991] text-white text-[11px] hover:opacity-90"
                  >
                    Deposit
                  </button>
                )}
                {item.buttons.includes("transfer") && (
                  <button
                    onClick={() => setShowTransfer(true)}
                    className="px-3 py-1 rounded-full bg-[#EE933C] text-white text-[11px] hover:opacity-90"
                  >
                    Transfer
                  </button>
                )}
                {item.buttons.includes("withdraw") && (
                  <button
                    onClick={() => setShowWithdrawal(true)}
                    className="px-3 py-1 rounded-full bg-red-600 text-white text-[11px] hover:opacity-90"
                  >
                    Withdraw
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ─────── STATS ─────── */}
      <motion.div variants={fadeUp} className="w-full max-w-[1400px] px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              custom={idx}
              className="bg-white dark:bg-neutral-800 rounded-[10px] shadow-sm border border-gray-100 p-4 flex flex-col justify-between"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xs sm:text-sm font-medium">{stat.title}</h3>
                <DollarSign size={12} className="text-gray-600" />
              </div>
              <hr />
              <div className="text-[36px] sm:text-[50px] font-semibold text-emerald-600">
                {stat.value}
                {stat.currency && <span className="text-sm ml-1">{stat.currency}</span>}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ─────── PORTFOLIO + REFERRAL ─────── */}
      <motion.div
        variants={fadeUp}
        className="py-6 flex flex-col lg:flex-row gap-6 w-full max-w-[1400px] px-4 sm:px-6"
      >
        <div className="w-full lg:w-[65%]">
          <PortfolioOverview profile={profile} />
        </div>
        <div className="w-full lg:w-[35%]">
          <ReferralCard profile={profile} />
        </div>
      </motion.div>

      {/* ─────── PACKAGES ─────── */}
      <motion.div
        variants={fadeUp}
        className="py-6 flex flex-col lg:flex-row gap-6 w-full max-w-[1400px] px-4 sm:px-6"
      >
        <div className="w-full lg:w-[30%]">
          <PackageSummary packages={profile?.packages} />
        </div>
        <div className="w-full lg:w-[70%]">
          <PackagesSection packages={profile?.packages} />
        </div>
      </motion.div>

      {/* ─────── RISK WARNING ─────── */}
      <motion.div
        variants={fadeUp}
        className="flex flex-col md:flex-row gap-6 md:gap-8 items-start bg-white dark:bg-neutral-800 rounded-xl p-4 sm:p-8 mx-auto mt-10 w-[95%] lg:w-[85%] xl:w-[95%]"
      >
        <div className="md:w-1/2 space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
          <h1 className="text-lg sm:text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-300 pb-2">
            Risk Warning
          </h1>
          <p>
            Trading forex, CFDs, and financial derivatives carries high risk and may not be suitable for all investors.
            Leverage can work for you or against you. Please consider your financial situation before trading.
          </p>
          <p>
            <span>International Finance Asia Pty Ltd</span> is regulated by the Australian Securities and Investments
            Commission (ACN 670 137 345) under License No. 001305580.
          </p>
        </div>
        <div className="md:w-1/2 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base border-t md:border-t-0 md:border-l border-gray-300 md:pl-6 pt-4 md:pt-14">
          <p>
            The contents of this site are for informational purposes only and should not be regarded as an offer or
            solicitation in any jurisdiction. Please read and understand the{" "}
            <span className="text-[#00A991] font-medium">Terms and Conditions</span> and{" "}
            <span className="text-[#00A991] font-medium">Risk Disclosure</span> before trading.
          </p>
        </div>
      </motion.div>

      {/* ─────── MODALS ─────── */}
      {showDeposit && (
        <DepositModal
          fundData={fundData}
          setFundData={setFundData}
          fundResult={fundResult}
          fundLoading={fundLoading}
          handleFundWallet={handleFundWallet}
          closeModal={() => setShowDeposit(false)}
        />
      )}

      {showTransfer && (
        <TransferModal
          transferData={transferData}
          setTransferData={setTransferData}
          transferResult={transferResult}
          transferLoading={transferLoading}
          handleTransfer={handleTransfer}
          closeModal={() => setShowTransfer(false)}
        />
      )}

      {showWithdrawal && (
        <WithdrawalModal
          withdrawalData={withdrawalData}
          setWithdrawalData={setWithdrawalData}
          withdrawalResult={withdrawalResult}
          withdrawalLoading={withdrawalLoading}
          handleWithdrawal={handleWithdrawal}
          closeModal={() => setShowWithdrawal(false)}
        />
      )}
    </motion.div>
  );
}