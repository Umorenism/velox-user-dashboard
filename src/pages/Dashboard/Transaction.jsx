// import React from "react";
// import { motion } from "framer-motion";
// import { RiMenuFoldLine } from "react-icons/ri";
// import {
//   DollarSign,
//   CreditCard,
//   ArrowRightLeft,
//   Wallet,
//   Search,
//   Filter,
//   Upload,
// } from "lucide-react";
// import TransactionTable from "../../utlis/TransactionTable";
// import WalletTabs from "../../utlis/WalletTabs";

// export default function Transaction() {
//   const walletData = [
//     {
//       title: "Deposit Wallet",
//       amount: "0.00",
//       currency: "USD",
//       icon: <Wallet size={22} />,
//     },
//     {
//       title: "Bonus Wallet",
//       amount: "0.00",
//       currency: "USD",
//       icon: <DollarSign size={22} />,
//     },
//     {
//       title: "Referral Wallet",
//       amount: "0.00",
//       currency: "USD",
//       icon: <CreditCard size={22} />,
//     },
//     {
//       title: "Earnings Wallet",
//       amount: "0.00",
//       currency: "USD",
//       icon: <ArrowRightLeft size={22} />,
//     },
//   ];

//   // Framer Motion animation variant
//   const fadeUp = {
//     hidden: { opacity: 0, y: 25 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
//   };

//   return (
//     <motion.div
//       initial="hidden"
//       animate="show"
//       className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
//     >
//       {/* Wallet Section */}
//              {/* Wallet Section */}
//                   <motion.div
//               variants={fadeUp}
//               className="w-[92%] lg:w-[80%] xl:w-[85%] bg-white dark:bg-neutral-800 rounded-xl shadow-md p-2 sm:p-3 mb-3 border border-gray-100/30"
//             >
//               <div className="flex flex-col md:flex-row justify-between items-stretch divide-y md:divide-y-0 md:divide-x divide-gray-200">
//                 {walletData.map((item, i) => (
//                   <motion.div
//                     key={i}
//                     variants={fadeUp}
//                     custom={i}
//                     className="flex flex-col justify-center items-center w-full md:w-1/4 px-1 py-1.5 sm:px-2 sm:py-2 text-center space-y-1.5"
//                   >
//                     {/* Wallet Info */}
//                     <div className="flex flex-col sm:flex-row justify-center items-center gap-1 text-center">
//                       <span className="text-[#00A991]">{item.icon}</span>
//                       <h1 className="text-[11px] sm:text-sm font-semibold">{item.title}:</h1>
//                       <p className="text-sm font-bold">
//                         {item.amount}
//                         <span className="text-[10px] font-medium ml-1">{item.currency}</span>
//                       </p>
//                     </div>
            
//                     {/* Buttons */}
//                     <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
//                       <button className="px-3 py-1 rounded-full bg-[#00A991] text-white font-medium text-[10px] sm:text-[11px] hover:opacity-90 transition">
//                         Deposit
//                       </button>
//                       <button className="px-3 py-1 rounded-full bg-[#EE933C] text-white font-medium text-[10px] sm:text-[11px] hover:opacity-90 transition">
//                         Transfer
//                       </button>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
            
      
//       {/* Transactions Section */}
//       <motion.div
//         variants={fadeUp}
//         className="w-full  max-w-[1300px]    dark:border-neutral-700 p-4 sm:p-6"
//       >
//         {/* Header */}
//         <div className="flex  items-center justify-between mb-4">
//           <div className="flex flex-col items-start gap-3">
//             <RiMenuFoldLine size={28} className="text-foreground" />
//             <h1 className="text-xl sm:text-2xl font-bold text-foreground">
//               Transactions
//             </h1>
//           </div>
//         </div>

//        <div className="flex items-center gap-2 px-4 py-2 rounded-md mb-2 border w-full   bg-white dark:bg-neutral-800 border-gray-300 dark:border-neutral-700">
//                <Search className="text-gray-400 w-4 h-4" />
//                <input
//                  type="text"
//                  placeholder="Search by referral name"
//                  className="w-full text-sm focus:outline-none bg-transparent text-gray-700 dark:text-gray-200"
//                />
//              </div>
//         {/* <TransactionTable /> */}
//       </motion.div>
//    <WalletTabs/>
//       <motion.div>



// {/* Risk Warning Section */}
//       <motion.div
//         variants={fadeUp}
//         className="flex flex-col md:flex-row gap-8 items-start   dark:bg-neutral-800  p-6 sm:p-8 mx-auto mt-10 w-[95%] lg:w-[85%] xl:w-[95%]"
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
//             <span className="font-semibold text-[#00A991]">
//               International Finance Asia
//             </span>
//             .
//           </p>
//           <p>
//             <span className="font-semibold text-[#00A991]">
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
//             <span className="text-[#00A991] font-medium">Risk Disclosure</span>{" "}
//             and other legal documents on the{" "}
//             <span className="text-[#00A991] font-medium">
//               International Finance Asia
//             </span>{" "}
//             website prior to initiating your leveraged investment.
//           </p>
//         </div>
//       </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// }








// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { RiMenuFoldLine } from "react-icons/ri";
// import {
//   DollarSign,
//   CreditCard,
//   ArrowRightLeft,
//   Wallet,
//   Search,
// } from "lucide-react";
// import TransactionTable from "../../utlis/TransactionTable";
// import WalletTabs from "../../utlis/WalletTabs";
// import { getUserProfile } from "../../api/authApi"; // ✅ Adjust the import path to your API file

// export default function Transaction() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");

//   // ✅ Fetch User Profile
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           console.warn("No token found");
//           return;
//         }
//         const res = await getUserProfile(token);
//         setUser(res);
//       } catch (error) {
//         console.error("Failed to load profile:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProfile();
//   }, []);

//   const fadeUp = {
//     hidden: { opacity: 0, y: 25 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
//   };

//   // ✅ Dynamically populate wallet data
//   const walletData = user
//     ? [
//         {
//           title: "Deposit Wallet",
//           amount: user.wallets?.deposit || 0,
//           currency: "USD",
//           icon: <Wallet size={22} />,
//           key: "deposit",
//         },
//         {
//           title: "Bonus Wallet",
//           amount: user.wallets?.bonus || 0,
//           currency: "USD",
//           icon: <DollarSign size={22} />,
//           key: "bonus",
//         },
//         {
//           title: "Referral Wallet",
//           amount: user.wallets?.referral || 0,
//           currency: "USD",
//           icon: <CreditCard size={22} />,
//           key: "referral",
//         },
//         {
//           title: "Earnings Wallet",
//           amount: user.wallets?.earnings || 0,
//           currency: "USD",
//           icon: <ArrowRightLeft size={22} />,
//           key: "earnings",
//         },
//       ]
//     : [];

//   // ✅ Example handlers
//   const handleDeposit = (walletType) => {
//     console.log(`Deposit action for ${walletType} wallet`);
//     // You can open a deposit modal or redirect to deposit page here
//   };

//   const handleTransfer = (walletType) => {
//     console.log(`Transfer action for ${walletType} wallet`);
//     // You can open a transfer modal or initiate wallet transfer logic here
//   };

//   return (
//     <motion.div
//       initial="hidden"
//       animate="show"
//       className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
//     >
//       {/* Wallet Section */}
//       <motion.div
//         variants={fadeUp}
//         className="w-[92%] lg:w-[80%] xl:w-[85%] bg-white dark:bg-neutral-800 rounded-xl shadow-md p-2 sm:p-3 mb-3 border border-gray-100/30"
//       >
//         {loading ? (
//           <div className="text-center py-6 text-gray-500 dark:text-gray-300">
//             Loading wallets...
//           </div>
//         ) : (
//           <div className="flex flex-col md:flex-row justify-between items-stretch divide-y md:divide-y-0 md:divide-x divide-gray-200">
//             {walletData.map((item, i) => (
//               <motion.div
//                 key={i}
//                 variants={fadeUp}
//                 custom={i}
//                 className="flex flex-col justify-center items-center w-full md:w-1/4 px-1 py-1.5 sm:px-2 sm:py-2 text-center space-y-1.5"
//               >
//                 <div className="flex flex-col sm:flex-row justify-center items-center gap-1 text-center">
//                   <span className="text-[#00A991]">{item.icon}</span>
//                   <h1 className="text-[11px] sm:text-sm font-semibold">
//                     {item.title}:
//                   </h1>
//                   <p className="text-sm font-bold">
//                     {item.amount.toFixed(2)}
//                     <span className="text-[10px] font-medium ml-1">
//                       {item.currency}
//                     </span>
//                   </p>
//                 </div>

//                 <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
//                   <button
//                     onClick={() => handleDeposit(item.key)}
//                     className="px-3 py-1 rounded-full bg-[#00A991] text-white font-medium text-[10px] sm:text-[11px] hover:opacity-90 transition"
//                   >
//                     Deposit
//                   </button>
//                   <button
//                     onClick={() => handleTransfer(item.key)}
//                     className="px-3 py-1 rounded-full bg-[#EE933C] text-white font-medium text-[10px] sm:text-[11px] hover:opacity-90 transition"
//                   >
//                     Transfer
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </motion.div>

//       {/* Transactions Section */}
//       <motion.div
//         variants={fadeUp}
//         className="w-full max-w-[1300px] dark:border-neutral-700 p-4 sm:p-6"
//       >
//         <div className="flex items-center justify-between mb-4">
//           <div className="flex flex-col items-start gap-3">
//             <RiMenuFoldLine size={28} className="text-foreground" />
//             <h1 className="text-xl sm:text-2xl font-bold text-foreground">
//               Transactions
//             </h1>
//           </div>
//         </div>

//         <div className="flex items-center gap-2 px-4 py-2 rounded-md mb-2 border w-full bg-white dark:bg-neutral-800 border-gray-300 dark:border-neutral-700">
//           <Search className="text-gray-400 w-4 h-4" />
//           <input
//             type="text"
//             placeholder="Search by transaction or wallet"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full text-sm focus:outline-none bg-transparent text-gray-700 dark:text-gray-200"
//           />
//         </div>

//         {/* Example placeholder for transactions */}
//         {user?.transactions && user.transactions.length > 0 ? (
//           <TransactionTable data={user.transactions} search={search} />
//         ) : (
//           <p className="text-center text-gray-500 dark:text-gray-400 py-4">
//             No transactions found.
//           </p>
//         )}
//       </motion.div>

//       {/* Wallet Tabs */}
//       <WalletTabs />

//       {/* Risk Warning Section */}
//       <motion.div
//         variants={fadeUp}
//         className="flex flex-col md:flex-row gap-8 items-start dark:bg-neutral-800 p-6 sm:p-8 mx-auto mt-10 w-[95%] lg:w-[85%] xl:w-[95%]"
//       >
//         {/* Left */}
//         <div className="md:w-1/2 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
//           <h1 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-300 pb-2">
//             Risk Warning
//           </h1>
//           <p>
//             Trading forex, CFDs, and financial derivative instruments on margin
//             carries a high level of risk and may not be suitable for all
//             investors. You could sustain losses exceeding your deposits.
//             Leverage can work for you as well as against you. Please consider
//             your financial situation and investment experience before trading
//             with{" "}
//             <span className="font-semibold text-[#00A991]">
//               International Finance Asia
//             </span>
//             .
//           </p>
//           <p>
//             <span className="font-semibold text-[#00A991]">
//               International Finance Asia Pty Ltd
//             </span>{" "}
//             is regulated by the Australian Securities and Investments Commission
//             (ACN 670 137 345) under License No. 001305580.
//           </p>
//         </div>

//         {/* Right */}
//         <div className="md:w-1/2 text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base border-t md:border-t-0 md:border-l border-gray-300 md:pl-8 pt-4 md:pt-14">
//           <p>
//             The contents on this site are for informational purposes and should
//             not be regarded as an offer or solicitation to any person in any
//             jurisdiction where such an offer is unauthorized. Please read the{" "}
//             <span className="text-[#00A991] font-medium">
//               Terms and Conditions
//             </span>
//             ,{" "}
//             <span className="text-[#00A991] font-medium">Risk Disclosure</span>{" "}
//             and other legal documents on the{" "}
//             <span className="text-[#00A991] font-medium">
//               International Finance Asia
//             </span>{" "}
//             website before trading.
//           </p>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }











import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { RiMenuFoldLine, RiFileCopyLine } from "react-icons/ri";
import {
  DollarSign,
  CreditCard,
  ArrowRightLeft,
  Wallet,
  Search,
  Loader2,
  XCircle,
  CheckCircle2,
} from "lucide-react";
import { toast } from "react-hot-toast";

import TransactionTable from "../../utlis/TransactionTable";
import WalletTabs from "../../utlis/WalletTabs";
import { apiClient } from "../../api/apiClient"; // Your API client

/* ─────────────────────── API FUNCTIONS (Your Logic) ─────────────────────── */
const initiateFund = async (data) => {
  const res = await apiClient.post("/wallet/deposit", data);
  return res.data;
};

const transferFunds = async (data) => {
  const res = await apiClient.post("/wallet/transfer", data);
  return res.data;
};

/* ─────────────────────── MODALS ─────────────────────── */
const DepositModal = ({ closeModal }) => {
  const [fundData, setFundData] = useState({ amount: "", payCurrency: "USDTBSC" });
  const [fundLoading, setFundLoading] = useState(false);
  const [fundResult, setFundResult] = useState(null);

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

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Address copied!");
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white dark:bg-neutral-800 rounded-2xl p-6 w-full max-w-md shadow-2xl border border-gray-200 dark:border-neutral-700"
      >
        <h2 className="text-xl font-bold mb-5 text-gray-900 dark:text-white">Deposit to Wallet</h2>

        <form onSubmit={handleFundWallet} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Amount (USD)
            </label>
            <input
              type="number"
              min="1"
              required
              value={fundData.amount}
              onChange={(e) => setFundData({ ...fundData, amount: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#00A991] focus:border-transparent"
              placeholder="100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Cryptocurrency
            </label>
            <select
              value={fundData.payCurrency}
              onChange={(e) => setFundData({ ...fundData, payCurrency: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#00A991] focus:border-transparent"
            >
              <option value="USDTBSC">USDT (BSC)</option>
              <option value="BTC">BTC</option>
              <option value="ETH">ETH</option>
            </select>
          </div>

          {fundResult && (
            <div
              className={`p-3 rounded-lg text-sm font-medium ${
                fundResult.type === "success"
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {fundResult.type === "success" ? (
                <>
                  <CheckCircle2 size={18} className="inline mr-2" />
                  {fundResult.data.message}
                  <div className="mt-2 p-2 bg-white dark:bg-neutral-700 rounded border font-mono text-xs break-all">
                    <p>
                      Send <strong>{fundResult.data.payAmount} {fundResult.data.payCurrency}</strong> to:
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <span>{fundResult.data.payAddress}</span>
                      <button
                        type="button"
                        onClick={() => copyToClipboard(fundResult.data.payAddress)}
                        className="ml-2 text-[#00A991] hover:text-[#008a77]"
                      >
                        <RiFileCopyLine size={16} />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <XCircle size={18} className="inline mr-2" />
                  {fundResult.message}
                </>
              )}
            </div>
          )}

          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 bg-gray-200 dark:bg-neutral-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-neutral-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={fundLoading}
              className="px-5 py-2 bg-[#00A991] text-white rounded-lg font-medium flex items-center gap-2 hover:bg-[#008a77] disabled:opacity-70"
            >
              {fundLoading ? <Loader2 size={18} className="animate-spin" /> : "Proceed"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

const TransferModal = ({ closeModal }) => {
  const [transferData, setTransferData] = useState({ toUserId: "", amount: "" });
  const [transferLoading, setTransferLoading] = useState(false);
  const [transferResult, setTransferResult] = useState(null);

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

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white dark:bg-neutral-800 rounded-2xl p-6 w-full max-w-md shadow-2xl border border-gray-200 dark:border-neutral-700"
      >
        <h2 className="text-xl font-bold mb-5 text-gray-900 dark:text-white">Transfer Funds</h2>

        <form onSubmit={handleTransfer} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Recipient User ID
            </label>
            <input
              type="text"
              required
              value={transferData.toUserId}
              onChange={(e) => setTransferData({ ...transferData, toUserId: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#EE933C] focus:border-transparent"
              placeholder="user_123"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Amount (USD)
            </label>
            <input
              type="number"
              min="1"
              required
              value={transferData.amount}
              onChange={(e) => setTransferData({ ...transferData, amount: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#EE933C] focus:border-transparent"
              placeholder="50"
            />
          </div>

          {transferResult && (
            <div
              className={`p-3 rounded-lg text-sm font-medium ${
                transferResult.type === "success"
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {transferResult.type === "success" ? (
                <>
                  <CheckCircle2 size={18} className="inline mr-2" />
                  {transferResult.data.message}
                </>
              ) : (
                <>
                  <XCircle size={18} className="inline mr-2" />
                  {transferResult.message}
                </>
              )}
            </div>
          )}

          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 bg-gray-200 dark:bg-neutral-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-neutral-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={transferLoading}
              className="px-5 py-2 bg-[#EE933C] text-white rounded-lg font-medium flex items-center gap-2 hover:bg-[#d87a2a] disabled:opacity-70"
            >
              {transferLoading ? <Loader2 size={18} className="animate-spin" /> : "Send"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

const WithdrawalModal = ({ closeModal }) => {
  const [withdrawalData, setWithdrawalData] = useState({ amount: "", withdrawalAddress: "" });
  const [withdrawalLoading, setWithdrawalLoading] = useState(false);
  const [withdrawalResult, setWithdrawalResult] = useState(null);

  const handleWithdrawal = async (e) => {
    e.preventDefault();
    setWithdrawalLoading(true);
    setWithdrawalResult(null);

    try {
      const res = await apiClient.post(
        "/api/users/withdrawal",
        {
          amount: Number(withdrawalData.amount),
          withdrawalAddress: withdrawalData.withdrawalAddress.trim(),
        }
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

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white dark:bg-neutral-800 rounded-2xl p-6 w-full max-w-md shadow-2xl border border-gray-200 dark:border-neutral-700"
      >
        <h2 className="text-xl font-bold mb-5 text-gray-900 dark:text-white">Withdraw Funds</h2>

        <form onSubmit={handleWithdrawal} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Amount (USD)
            </label>
            <input
              type="number"
              min="1"
              required
              value={withdrawalData.amount}
              onChange={(e) => setWithdrawalData({ ...withdrawalData, amount: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Withdrawal Address
            </label>
            <input
              type="text"
              required
              value={withdrawalData.withdrawalAddress}
              onChange={(e) => setWithdrawalData({ ...withdrawalData, withdrawalAddress: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="0x..."
            />
          </div>

          {withdrawalResult && (
            <div
              className={`p-3 rounded-lg text-sm font-medium ${
                withdrawalResult.type === "success"
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {withdrawalResult.type === "success" ? (
                <>
                  <CheckCircle2 size={18} className="inline mr-2" />
                  {withdrawalResult.message}
                </>
              ) : (
                <>
                  <XCircle size={18} className="inline mr-2" />
                  {withdrawalResult.message}
                </>
              )}
            </div>
          )}

          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 bg-gray-200 dark:bg-neutral-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-neutral-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={withdrawalLoading}
              className="px-5 py-2 bg-red-600 text-white rounded-lg font-medium flex items-center gap-2 hover:bg-red-700 disabled:opacity-70"
            >
              {withdrawalLoading ? <Loader2 size={18} className="animate-spin" /> : "Withdraw"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

/* ─────────────────────── MAIN COMPONENT ─────────────────────── */
export default function Transaction() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // Modal States
  const [showDeposit, setShowDeposit] = useState(false);
  const [showTransfer, setShowTransfer] = useState(false);
  const [showWithdrawal, setShowWithdrawal] = useState(false);

  // Fetch Profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await apiClient.get("/api/users/profile");
        setUser(res.data);
      } catch (error) {
        console.error("Profile load failed:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const formatAmount = (amt) => {
    const n = Number(amt);
    return isNaN(n) ? "0.00" : n.toFixed(2);
  };

  const wallets = user?.wallets || {};

  const walletData = useMemo(() => [
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
      amount: formatAmount(wallets.earnings || user?.walletBalance),
      icon: <ArrowRightLeft size={20} />,
      buttons: ["withdraw", "transfer"],
    },
  ], [user?.wallets, user?.walletBalance]);

  const filteredTransactions = useMemo(() => {
    if (!user || !Array.isArray(user.transactions)) return [];
    if (!search.trim()) return user.transactions;
    const s = search.toLowerCase().trim();
    return user.transactions.filter((tx) =>
      Object.values(tx).some((val) =>
        String(val).toLowerCase().includes(s)
      )
    );
  }, [user?.transactions, search]);

  return (
    <motion.div
      initial="hidden"
      animate="show"
      className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-neutral-900 min-h-screen"
    >
      {/* Wallet Section */}
      <motion.div
        variants={fadeUp}
        className="w-[92%] lg:w-[80%] xl:w-[85%] bg-white dark:bg-neutral-800 rounded-xl shadow-md p-2 sm:p-3 mb-3 border border-gray-100/30"
      >
        {loading ? (
          <div className="flex justify-center py-6">
            <Loader2 className="animate-spin text-[#00A991]" size={28} />
          </div>
        ) : (
          <div className="flex flex-col md:flex-row justify-between items-stretch divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {walletData.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="flex flex-col justify-center items-center w-full md:w-1/4 px-1 py-1.5 sm:px-2 sm:py-2 text-center space-y-1.5"
              >
                <div className="flex flex-col sm:flex-row justify-center items-center gap-1">
                  <span className="text-[#00A991]">{item.icon}</span>
                  <h1 className="text-[11px] sm:text-sm font-semibold text-gray-800 dark:text-gray-200">
                    {item.title}:
                  </h1>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">
                    {item.amount}
                    <span className="text-[10px] font-medium ml-1 text-gray-600 dark:text-gray-400">USD</span>
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                  {item.buttons.includes("deposit") && (
                    <button
                      onClick={() => setShowDeposit(true)}
                      className="px-3 py-1 rounded-full bg-[#00A991] text-white text-[10px] sm:text-[11px] font-medium hover:bg-[#008a77] transition"
                    >
                      Deposit
                    </button>
                  )}
                  {item.buttons.includes("transfer") && (
                    <button
                      onClick={() => setShowTransfer(true)}
                      className="px-3 py-1 rounded-full bg-[#EE933C] text-white text-[10px] sm:text-[11px] font-medium hover:bg-[#d87a2a] transition"
                    >
                      Transfer
                    </button>
                  )}
                  {item.buttons.includes("withdraw") && (
                    <button
                      onClick={() => setShowWithdrawal(true)}
                      className="px-3 py-1 rounded-full bg-red-600 text-white text-[10px] sm:text-[11px] font-medium hover:bg-red-700 transition"
                    >
                      Withdraw
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Transactions */}
      <motion.div variants={fadeUp} className="w-full max-w-[1300px] p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col items-start gap-3">
            <RiMenuFoldLine size={28} className="text-gray-700 dark:text-white" />
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Transactions
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 rounded-lg mb-4 border w-full bg-white dark:bg-neutral-800 border-gray-300 dark:border-neutral-700">
          <Search className="text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by package, ID, amount..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full text-sm bg-transparent text-gray-700 dark:text-gray-200 outline-none"
          />
        </div>

        {loading ? (
          <div className="flex justify-center py-8">
            <Loader2 className="animate-spin text-[#00A991]" size={32} />
          </div>
        ) : filteredTransactions.length > 0 ? (
          <TransactionTable data={filteredTransactions} search={search} />
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400 py-6">
            {search ? "No matches found." : "No transactions yet."}
          </p>
        )}
      </motion.div>

      <WalletTabs />

      {/* Risk Warning */}
      <motion.div
        variants={fadeUp}
        className="flex flex-col md:flex-row gap-8 items-start bg-white dark:bg-neutral-800 rounded-xl p-6 sm:p-8 mx-auto mt-10 w-[95%] lg:w-[85%] xl:w-[95%] shadow-sm border border-gray-100/50"
      >
        <div className="md:w-1/2 space-y-4 text-gray-700 dark:text-gray-300 text-sm md:text-base">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-300 pb-2">
            Risk Warning
          </h1>
          <p>
            Trading forex, CFDs, and financial derivative instruments on margin carries a high level of risk...
          </p>
          <p>
            <span className="font-semibold text-[#00A991]">International Finance Asia Pty Ltd</span> is regulated...
          </p>
        </div>
        <div className="md:w-1/2 text-gray-700 dark:text-gray-300 text-sm md:text-base border-t md:border-t-0 md:border-l md:pl-8 pt-4 md:pt-14">
          <p>
            The contents on this site are for informational purposes... Please read the{" "}
            <span className="text-[#00A991] font-medium">Terms and Conditions</span>...
          </p>
        </div>
      </motion.div>

      {/* MODALS */}
      {showDeposit && <DepositModal closeModal={() => setShowDeposit(false)} />}
      {showTransfer && <TransferModal closeModal={() => setShowTransfer(false)} />}
      {showWithdrawal && <WithdrawalModal closeModal={() => setShowWithdrawal(false)} />}
    </motion.div>
  );
}