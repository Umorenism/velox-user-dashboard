








// import React from "react";
// import { motion } from "framer-motion";
// import { DollarSign, CreditCard, ArrowRightLeft, Wallet } from "lucide-react";
// import PortfolioOverview from "../../utlis/PortfolioOverview";
// import ReferralCard from "../../utlis/ReferralCard";
// import PackageSummary from "../../utlis/PackageSummary";
// import PackagesSection from "../../utlis/PackagesSection";

// export default function Dashboardpage() {
//   const stats = [
//     { title: "Total Investment", value: "0.00", currency: "USD" },
//     { title: "PV ", value: "0.00", currency: "USD" },
//     { title: "GV", value: "0.00", currency: "USD" },
//     { title: "Life time investment", value: "0", currency: "" },
//   ];

//   const walletData = [
//     { title: "Deposit Wallet", amount: "0.00", currency: "USD", icon: <Wallet size={22} /> },
//     { title: "Bear Wallet", amount: "0.00", currency: "USD", icon: <DollarSign size={22} /> },
//     { title: "Bull Wallet", amount: "0.00", currency: "USD", icon: <CreditCard size={22} /> },
//     { title: "Account Balance", amount: "0.00", currency: "USD", icon: <ArrowRightLeft size={22} /> },
//   ];

//   // Animation variants
//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: (i = 1) => ({
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
//     }),
//   };

//   return (
//     <motion.div
//       initial="hidden"
//       animate="visible"
//       className="flex flex-col items-center bg-gray-100 dark:bg-neutral-900 dark:text-white min-h-screen py-10"
//     >
      
//       {/* Wallet Section */}
//       <motion.div
//         variants={fadeUp}
//         className="w-[95%] lg:w-[85%] xl:w-[90%] bg-white dark:bg-neutral-800 rounded-2xl shadow-md p-4 sm:p-2 mb-4"
//       >
//         <div className="flex mb-3 flex-col md:flex-row justify-between items-stretch divide-y md:divide-y-0 md:divide-x divide-gray-300">
//           {walletData.map((item, i) => (
//             <motion.div
//               key={i}
//               variants={fadeUp}
//               custom={i}
//               className="flex flex-col justify-center items-center w-full md:w-1/4 px-2 py-2 text-center space-y-2"
//             >
//               {/* Title Row */}
//               <div className="flex flex-wrap justify-center items-center gap-2 text-center">
//                 <span className="text-[#00A991]">{item.icon}</span>
//                 <h1 className="text-base font-semibold">{item.title} :</h1>
//                 <p className="text-lg font-bold">
//                   {item.amount}
//                   <span className="text-sm font-medium ml-1">{item.currency}</span>
//                 </p>
//               </div>

//               {/* Buttons */}
//               <div className="flex flex-wrap justify-center gap-3">
//                 <button className="px-5 py-2 rounded-full bg-[#00A991] text-white font-medium text-sm hover:opacity-90 transition">
//                   Deposit
//                 </button>
//                 <button className="px-5 py-2 rounded-full bg-[#EE933C] text-white font-medium text-sm hover:opacity-90 transition">
//                   Transfer
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       <div className="w-full mt-10 max-w-[1200px] justify-start flex">
//         <h1 className="text-[20px] font-bold">DASHBORD</h1>
//       </div>

//       {/* Stats Cards */}
//       <motion.div
//         variants={fadeUp}
//         className="w-full max-w-[1400px]  mt-5 px-4 sm:px-6"
//       >
//         <div className="grid grid-cols-1 h-40  sm:grid-cols-2 lg:grid-cols-4 gap-4">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               variants={fadeUp}
//               custom={index}
//               className="bg-white py-4 dark:bg-neutral-800 rounded-[10px] shadow-sm border border-gray-100 p-4 flex flex-col justify-between"
//             >
//               <div className="flex justify-between items-center mb-2">
//                 <h3 className="text-sm font-medium">{stat.title}</h3>
//                 <span className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-full">
//                   <DollarSign size={14} className="text-gray-600" />
//                 </span>
//               </div>
//               <hr />
//               <div className="text-[50px] font-semibold text-emerald-600">
//                 {stat.value}
//                 <span className="text-base font-medium text-emerald-600 ml-1">
//                   {stat.currency}
//                 </span>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       {/* Portfolio & Referral */}
//       <motion.div
//         variants={fadeUp}
//         className="py-6 flex flex-col lg:flex-row gap-4 w-full max-w-[1400px] px-4 sm:px-6"
//       >
//         <div className="w-full lg:w-1/2">
//           <PortfolioOverview />
//         </div>
//         <div className="w-full mt-10 md:mt-0 lg:w-1/2">
//           <ReferralCard />
//         </div>
//       </motion.div>

//       {/* Package Summary & Packages */}
//       <motion.div
//         variants={fadeUp}
//         className="py-6 flex flex-col lg:flex-row gap-4 w-full max-w-[1400px] px-4 sm:px-6"
//       >
//         <div className="w-full lg:w-[30%]">
//           <PackageSummary />
//         </div>
//         <div className="w-full lg:w-[70%]">
//           <PackagesSection />
//         </div>
//       </motion.div>

//       {/* Risk Warning Section */}
//       <motion.div
//         variants={fadeUp}
//         className="flex flex-col md:flex-row gap-8 items-start  dark:bg-neutral-800  p-6 sm:p-8 mx-auto mt-10 w-[95%] lg:w-[85%] xl:w-[95%]"
//       >
//         {/* Left */}
//         <div className="md:w-1/2 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
//           <h1 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-300 pb-2">
//             Risk Warning
//           </h1>
//           <p>
//             Trading forex, CFDs, and any financial derivative instruments on
//             margin carries a high level of risk and may not be suitable for all
//             investors, as you could sustain losses in excess of your deposits.
//             Leverage can work for you as well as against you. Please carefully
//             consider your financial situation and investment experience prior to
//             trading products offered by{" "}
//             <span >
//               International Finance Asia
//             </span>.
//           </p>
//           <p>
//             <span >
//               International Finance Asia Pty Ltd
//             </span>{" "}
//             is regulated by the Australian Securities and Investments Commission
//             (ACN 670 137 345) under License No. 001305580.
//           </p>
//         </div>

//         {/* Right */}
//         <div className="md:w-1/2 text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base border-t md:border-t-0 md:border-l border-gray-300 md:pl-8 pt-4 md:pt-14">
//           <p>
//             The contents in this site are provided only for informational
//             purposes and should not be regarded as an offer or solicitation to
//             any person in any jurisdiction where such an offer is unauthorized.
//             Please read and understand the{" "}
//             <span className="text-[#00A991] font-medium">
//               Terms and Conditions
//             </span>
//             ,{" "}
//             <span className="text-[#00A991] font-medium">
//               Risk Disclosure
//             </span>{" "}
//             and other legal documents on the{" "}
//             <span className="text-[#00A991] font-medium">
//               International Finance Asia
//             </span>{" "}
//             website prior to initiating your leveraged investment.
//           </p>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }










// import React, { useEffect } from "react";
// import { motion } from "framer-motion";
// import { DollarSign, CreditCard, ArrowRightLeft, Wallet } from "lucide-react";
// import PortfolioOverview from "../../utlis/PortfolioOverview";
// import ReferralCard from "../../utlis/ReferralCard";
// import PackageSummary from "../../utlis/PackageSummary";
// import PackagesSection from "../../utlis/PackagesSection";
// import axios from "axios";

// export default function Dashboardpage() {
//   const stats = [
//     { title: "Total Investment", value: "0.00", currency: "USD" },
//     { title: "PV", value: "0.00", currency: "USD" },
//     { title: "GV", value: "0.00", currency: "USD" },
//     { title: "LTT", value: "0", currency: "" },
//   ];

//   const walletData = [
//     { title: "Deposit Wallet", amount: "0.00", currency: "USD", icon: <Wallet size={20} /> },
//     { title: "Bear Wallet", amount: "0.00", currency: "USD", icon: <DollarSign size={20} /> },
//     { title: "Bull Wallet", amount: "0.00", currency: "USD", icon: <CreditCard size={20} /> },
//     { title: "Account Balance", amount: "0.00", currency: "USD", icon: <ArrowRightLeft size={20} /> },
//   ];

//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: (i = 1) => ({
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
//     }),
//   };


  

//   return (
//     <motion.div
//       initial="hidden"
//       animate="visible"
//       className="flex flex-col items-center bg-gray-100 dark:bg-neutral-900 dark:text-white min-h-screen py-2 sm:py-10"
//     >
//       {/* Wallet Section */}
//       <motion.div
//   variants={fadeUp}
//   className="w-[92%] lg:w-[80%] xl:w-[85%] bg-white dark:bg-neutral-800 rounded-xl shadow-md p-2 sm:p-3 mb-3 border border-gray-100/30"
// >
//   <div className="flex flex-col md:flex-row justify-between items-stretch divide-y md:divide-y-0 md:divide-x divide-gray-200">
//     {walletData.map((item, i) => (
//       <motion.div
//         key={i}
//         variants={fadeUp}
//         custom={i}
//         className="flex flex-col justify-center items-center w-full md:w-1/4 px-1 py-1.5 sm:px-2 sm:py-2 text-center space-y-1.5"
//       >
//         {/* Wallet Info */}
//         <div className="flex flex-col sm:flex-row justify-center items-center gap-1 text-center">
//           <span className="text-[#00A991]">{item.icon}</span>
//           <h1 className="text-[11px] sm:text-sm font-semibold">{item.title}:</h1>
//           <p className="text-sm font-bold">
//             {item.amount}
//             <span className="text-[10px] font-medium ml-1">{item.currency}</span>
//           </p>
//         </div>

//         {/* Buttons */}
//         <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
//           <button className="px-3 py-1 rounded-full bg-[#00A991] text-white font-medium text-[10px] sm:text-[11px] hover:opacity-90 transition">
//             Deposit
//           </button>
//           <button className="px-3 py-1 rounded-full bg-[#EE933C] text-white font-medium text-[10px] sm:text-[11px] hover:opacity-90 transition">
//             Transfer
//           </button>
//         </div>
//       </motion.div>
//     ))}
//   </div>
// </motion.div>


//       {/* Dashboard Header */}
//       <div className="w-full mt-6 sm:mt-10 max-w-[1200px] px-4 sm:px-6">
//         <h1 className="text-[18px] sm:text-[20px] font-bold">DASHBOARD</h1>
//       </div>

//       {/* Stats Cards */}
//       <motion.div variants={fadeUp} className="w-full max-w-[1400px] mt-5 px-4 sm:px-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               variants={fadeUp}
//               custom={index}
//               className="bg-white dark:bg-neutral-800 rounded-[10px] shadow-sm border border-gray-100 p-4 flex flex-col justify-between h-auto sm:h-40"
//             >
//               <div className="flex justify-between items-center mb-2">
//                 <h3 className="text-xs sm:text-sm font-medium">{stat.title}</h3>
//                 <span className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center border border-gray-300 rounded-full">
//                   <DollarSign size={12} className="text-gray-600" />
//                 </span>
//               </div>
//               <hr />
//               <div className="text-[36px] sm:text-[50px] font-semibold text-emerald-600">
//                 {stat.value}
//                 <span className="text-sm sm:text-base font-medium text-emerald-600 ml-1">
//                   {stat.currency}
//                 </span>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       {/* Portfolio & Referral */}
//       <motion.div
//         variants={fadeUp}
//         className="py-6 flex flex-col lg:flex-row gap-6 w-full max-w-[1400px] px-4 sm:px-6"
//       >
//         <div className="w-full lg:w-[65%]">
//           <PortfolioOverview />
//         </div>
//         <div className="w-full lg:w-[35%]">
//           <ReferralCard />
//         </div>
//       </motion.div>

//       {/* Package Summary & Packages */}
//       <motion.div
//         variants={fadeUp}
//         className="py-6 flex flex-col lg:flex-row gap-6 w-full max-w-[1400px] px-4 sm:px-6"
//       >
//         <div className="w-full lg:w-[30%]">
//           <PackageSummary />
//         </div>
//         <div className="w-full lg:w-[70%]">
//           <PackagesSection />
//         </div>
//       </motion.div>

//       {/* Risk Warning Section */}
//       <motion.div
//         variants={fadeUp}
//         className="flex flex-col md:flex-row gap-6 md:gap-8 items-start bg-white dark:bg-neutral-800 rounded-xl p-4 sm:p-8 mx-auto mt-10 w-[95%] lg:w-[85%] xl:w-[95%]"
//       >
//         {/* Left */}
//         <div className="md:w-1/2 space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
//           <h1 className="text-lg sm:text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-300 pb-2">
//             Risk Warning
//           </h1>
//           <p>
//             Trading forex, CFDs, and financial derivative instruments on margin carries high risk and may not be suitable for all investors.
//             Leverage can work for you as well as against you. Please carefully consider your financial situation and investment experience prior to trading products offered by{" "}
//             <span>International Finance Asia</span>.
//           </p>
//           <p>
//             <span>International Finance Asia Pty Ltd</span> is regulated by the Australian Securities and Investments Commission (ACN 670 137 345) under License No. 001305580.
//           </p>
//         </div>

//         {/* Right */}
//         <div className="md:w-1/2 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base border-t md:border-t-0 md:border-l border-gray-300 md:pl-6 pt-4 md:pt-14">
//           <p>
//             The contents of this site are provided only for informational purposes and should not be regarded as an offer or solicitation to any person in any jurisdiction where such an offer is unauthorized. Please read and understand the{" "}
//             <span className="text-[#00A991] font-medium">Terms and Conditions</span>,{" "}
//             <span className="text-[#00A991] font-medium">Risk Disclosure</span> and other legal documents on the{" "}
//             <span className="text-[#00A991] font-medium">International Finance Asia</span> website before initiating your leveraged investment.
//           </p>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }











import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  DollarSign,
  CreditCard,
  ArrowRightLeft,
  Wallet,
  Loader2,
} from "lucide-react";
import PortfolioOverview from "../../utlis/PortfolioOverview";
import ReferralCard from "../../utlis/ReferralCard";
import PackageSummary from "../../utlis/PackageSummary";
import PackagesSection from "../../utlis/PackagesSection";
import { getUserProfile } from "../../api/authApi";

export default function Dashboardpage() {
  // ─────────────────────────────── State ───────────────────────────────
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ─────────────────────────────── Fetch ───────────────────────────────
  useEffect(() => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) {
      setError("No authentication token found.");
      setLoading(false);
      return;
    }

    getUserProfile(token)
      .then((data) => {
        setProfile(data);
      })
      .catch((err) => {
        setError(err.message || "Failed to load user profile.");
      })
      .finally(() => setLoading(false));
  }, []);

  // ─────────────────────────────── Animation ───────────────────────────────
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
    }),
  };

  // ─────────────────────────────── Helper to format amount ───────────────────────────────
  const formatAmount = (amount, currency) => {
    const num = Number(amount);
    if (isNaN(num) || num === 0) return `0 ${currency}`;
    return `${num.toFixed(2)} ${currency}`;
  };

  // ─────────────────────────────── Derived Data ───────────────────────────────
  const wallets = profile?.wallets || {};
  const walletData = [
    {
      title: "Deposit Wallet",
      amount: formatAmount(wallets.deposit, "USD"),
      currency: "USD",
      icon: <Wallet size={20} />,
    },
    {
      title: "Bear Wallet",
      amount: formatAmount(wallets.bear, "USD"),
      currency: "USD",
      icon: <DollarSign size={20} />,
    },
    {
      title: "Bull Wallet",
      amount: formatAmount(wallets.bull, "USD"),
      currency: "USD",
      icon: <CreditCard size={20} />,
    },
    {
      title: "Account Balance",
      amount: formatAmount(wallets.accountBalance, "USD"),
      currency: "USD",
      icon: <ArrowRightLeft size={20} />,
    },
  ];

  const stats = [
    {
      title: "Total Investment",
      value:
        Number(profile?.totalInvestment || 0) === 0
          ? "0"
          : Number(profile?.totalInvestment).toFixed(2),
      currency: "USD",
    },
    {
      title: "PV",
      value: Number(profile?.pvp || 0) === 0 ? "0" : Number(profile?.pvp).toFixed(2),
      currency: "USD",
    },
    {
      title: "GV",
      value: Number(profile?.pgv || 0) === 0 ? "0" : Number(profile?.pgv).toFixed(2),
      currency: "USD",
    },
    { title: "LTT", value: profile?.referrals || 0, currency: "" },
  ];

  // ─────────────────────────────── Loading/Error ───────────────────────────────
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-neutral-900">
        <Loader2 className="animate-spin text-[#00A991]" size={48} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-neutral-900 text-red-600">
        <p className="text-lg font-semibold">Error</p>
        <p className="mt-2">{error}</p>
      </div>
    );
  }

  // ─────────────────────────────── Render ───────────────────────────────
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center bg-gray-100 dark:bg-neutral-900 dark:text-white min-h-screen py-2 sm:py-10"
    >
      {/* ─────── Wallet Section ─────── */}
      <motion.div
        variants={fadeUp}
        className="w-[92%] lg:w-[80%] xl:w-[85%] bg-white dark:bg-neutral-800 rounded-xl shadow-md p-2 sm:p-3 mb-3 border border-gray-100/30"
      >
        <div className="flex flex-col md:flex-row justify-between items-stretch divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {walletData.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="flex flex-col justify-center items-center w-full md:w-1/4 px-1 py-1.5 sm:px-2 sm:py-2 text-center space-y-1.5"
            >
              <div className="flex flex-col sm:flex-row justify-center items-center gap-1 text-center">
                <span className="text-[#00A991]">{item.icon}</span>
                <h1 className="text-[11px] sm:text-sm font-semibold">{item.title}:</h1>
                <p className="text-sm font-bold">
                  {item.amount}
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                <button className="px-3 py-1 rounded-full bg-[#00A991] text-white font-medium text-[10px] sm:text-[11px] hover:opacity-90 transition">
                  Deposit
                </button>
                <button className="px-3 py-1 rounded-full bg-[#EE933C] text-white font-medium text-[10px] sm:text-[11px] hover:opacity-90 transition">
                  Transfer
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ─────── Dashboard Header ─────── */}
      <div className="w-full mt-6 sm:mt-10 max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-[18px] sm:text-[20px] font-bold">DASHBOARD</h1>
      </div>

      {/* ─────── Stats Cards ─────── */}
      <motion.div variants={fadeUp} className="w-full max-w-[1400px] mt-5 px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              custom={index}
              className="bg-white dark:bg-neutral-800 rounded-[10px] shadow-sm border border-gray-100 p-4 flex flex-col justify-between h-auto sm:h-40"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xs sm:text-sm font-medium">{stat.title}</h3>
                <span className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center border border-gray-300 rounded-full">
                  <DollarSign size={12} className="text-gray-600" />
                </span>
              </div>
              <hr />
              <div className="text-[36px] sm:text-[50px] font-semibold text-emerald-600">
                {stat.value}
                <span className="text-sm sm:text-base font-medium text-emerald-600 ml-1">
                  {stat.currency}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ─────── Portfolio / Referral ─────── */}
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

      {/* ─────── Packages ─────── */}
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

      {/* ─────── Risk Warning ─────── */}
      <motion.div
        variants={fadeUp}
        className="flex flex-col md:flex-row gap-6 md:gap-8 items-start bg-white dark:bg-neutral-800 rounded-xl p-4 sm:p-8 mx-auto mt-10 w-[95%] lg:w-[85%] xl:w-[95%]"
      >
        <div className="md:w-1/2 space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
          <h1 className="text-lg sm:text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-300 pb-2">
            Risk Warning
          </h1>
          <p>
            Trading forex, CFDs, and financial derivatives carries high risk and may not
            be suitable for all investors. Leverage can work for you or against you.
            Please carefully consider your financial situation and investment experience
            prior to trading with{" "}
            <span>International Finance Asia</span>.
          </p>
          <p>
            <span>International Finance Asia Pty Ltd</span> is regulated by the Australian
            Securities and Investments Commission (ACN 670 137 345) under License
            No. 001305580.
          </p>
        </div>
        <div className="md:w-1/2 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base border-t md:border-t-0 md:border-l border-gray-300 md:pl-6 pt-4 md:pt-14">
          <p>
            The contents of this site are for informational purposes only and should not
            be regarded as an offer or solicitation to any person in any jurisdiction
            where such an offer is unauthorized. Please read and understand the{" "}
            <span className="text-[#00A991] font-medium">Terms and Conditions</span>,{" "}
            <span className="text-[#00A991] font-medium">Risk Disclosure</span> and other
            legal documents before initiating your leveraged investment.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
