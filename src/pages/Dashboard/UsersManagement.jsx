import React from "react";
import { motion } from "framer-motion";
import { DollarSign, CreditCard, ArrowRightLeft, Wallet } from "lucide-react";

import PackagesSection from "../../utlis/PackagesSection";
import { RiMenuFoldLine } from "react-icons/ri";
import UsersPackagesGrid from "../../utlis/UsersPackageGrid";

export default function UsersMangement() {
  const stats = [
    { title: "Total Investment", value: "0.00", currency: "USD" },
    { title: "Weekly Rebate Profit", value: "0.00", currency: "USD" },
    { title: "Weekly Total Profit", value: "0.00", currency: "USD" },
    { title: "Weekly Packages", value: "0", currency: "" },
  ];

  const walletData = [
    {
      title: "Deposit Wallet",
      amount: "0.00",
      currency: "USD",
      icon: <Wallet size={22} />,
    },
    {
      title: "Bonus Wallet",
      amount: "0.00",
      currency: "USD",
      icon: <DollarSign size={22} />,
    },
    {
      title: "Referral Wallet",
      amount: "0.00",
      currency: "USD",
      icon: <CreditCard size={22} />,
    },
    {
      title: "Earnings Wallet",
      amount: "0.00",
      currency: "USD",
      icon: <ArrowRightLeft size={22} />,
    },
  ];

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
    }),
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center bg-gray-100 dark:bg-neutral-900 dark:text-white min-h-screen py-5"
    >
      {/* Wallet Section */}
      {/* Wallet Section */}
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
             {/* Wallet Info */}
             <div className="flex flex-col sm:flex-row justify-center items-center gap-1 text-center">
               <span className="text-[#00A991]">{item.icon}</span>
               <h1 className="text-[11px] sm:text-sm font-semibold">{item.title}:</h1>
               <p className="text-sm font-bold">
                 {item.amount}
                 <span className="text-[10px] font-medium ml-1">{item.currency}</span>
               </p>
             </div>
     
             {/* Buttons */}
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
     
      {/* Header */}
      <div className="space-y-2 max-w-[1400px] p-5 w-full">
        <RiMenuFoldLine size={30} className="text-gray-700 dark:text-white" />
        <h1 className="text-[20px] sm:text-[24px] font-[700] text-[#000000] dark:text-white">
          Packages
        </h1>
      </div>

      <div className="space-y-2 max-w-[1400px] p-5 w-full">
       <UsersPackagesGrid/>
      </div>

      {/* Package Summary & Packages */}
      <motion.div
        variants={fadeUp}
        className="py-6 flex flex-col lg:flex-row gap-4 w-full max-w-[1400px] px-4 sm:px-6"
      >
        <div className="w-full">
          <PackagesSection />
        </div>
      </motion.div>

      {/* Risk Warning Section */}
      <motion.div
        variants={fadeUp}
        className="flex flex-col md:flex-row gap-8 items-start bg-white  dark:bg-neutral-800 rounded-xl p-6 sm:p-8 mx-auto mt-10 w-[95%] lg:w-[85%] xl:w-[95%]"
      >
        {/* Left */}
        <div className="md:w-1/2 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-300 pb-2">
            Risk Warning
          </h1>
          <p>
            Trading forex, CFDs, and any financial derivative instruments on
            margin carries a high level of risk and may not be suitable for all
            investors, as you could sustain losses in excess of your deposits.
            Leverage can work for you as well as against you. Please carefully
            consider your financial situation and investment experience prior to
            trading products offered by{" "}
            <span className="font-semibold text-[#00A991]">
              International Finance Asia
            </span>
            .
          </p>
          <p>
            <span className="font-semibold text-[#00A991]">
              International Finance Asia Pty Ltd
            </span>{" "}
            is regulated by the Australian Securities and Investments Commission
            (ACN 670 137 345) under License No. 001305580.
          </p>
        </div>

        {/* Right */}
        <div className="md:w-1/2 text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base border-t md:border-t-0 md:border-l border-gray-300 md:pl-8 pt-4 md:pt-14">
          <p>
            The contents in this site are provided only for informational
            purposes and should not be regarded as an offer or solicitation to
            any person in any jurisdiction where such an offer is unauthorized.
            Please read and understand the{" "}
            <span className="text-[#00A991] font-medium">
              Terms and Conditions
            </span>
            ,{" "}
            <span className="text-[#00A991] font-medium">Risk Disclosure</span>{" "}
            and other legal documents on the{" "}
            <span className="text-[#00A991] font-medium">
              International Finance Asia
            </span>{" "}
            website prior to initiating your leveraged investment.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
