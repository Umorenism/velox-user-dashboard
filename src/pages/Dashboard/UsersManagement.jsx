// import React from "react";
// import { motion } from "framer-motion";
// import { DollarSign, CreditCard, ArrowRightLeft, Wallet } from "lucide-react";

// import PackagesSection from "../../utlis/PackagesSection";
// import { RiMenuFoldLine } from "react-icons/ri";
// import UsersPackagesGrid from "../../utlis/UsersPackageGrid";


// export default function UsersMangement() {
//   const stats = [
//     { title: "Total Investment", value: "0.00", currency: "USD" },
//     { title: "Weekly Rebate Profit", value: "0.00", currency: "USD" },
//     { title: "Weekly Total Profit", value: "0.00", currency: "USD" },
//     { title: "Weekly Packages", value: "0", currency: "" },
//   ];

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
//       className="flex flex-col items-center bg-gray-100 dark:bg-neutral-900 dark:text-white min-h-screen py-5"
//     >
//       {/* Wallet Section */}
//       {/* Wallet Section */}
//            <motion.div
//        variants={fadeUp}
//        className="w-[92%] lg:w-[80%] xl:w-[85%] bg-white dark:bg-neutral-800 rounded-xl shadow-md p-2 sm:p-3 mb-3 border border-gray-100/30"
//      >
//        <div className="flex flex-col md:flex-row justify-between items-stretch divide-y md:divide-y-0 md:divide-x divide-gray-200">
//          {walletData.map((item, i) => (
//            <motion.div
//              key={i}
//              variants={fadeUp}
//              custom={i}
//              className="flex flex-col justify-center items-center w-full md:w-1/4 px-1 py-1.5 sm:px-2 sm:py-2 text-center space-y-1.5"
//            >
//              {/* Wallet Info */}
//              <div className="flex flex-col sm:flex-row justify-center items-center gap-1 text-center">
//                <span className="text-[#00A991]">{item.icon}</span>
//                <h1 className="text-[11px] sm:text-sm font-semibold">{item.title}:</h1>
//                <p className="text-sm font-bold">
//                  {item.amount}
//                  <span className="text-[10px] font-medium ml-1">{item.currency}</span>
//                </p>
//              </div>
     
//              {/* Buttons */}
//              <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
//                <button className="px-3 py-1 rounded-full bg-[#00A991] text-white font-medium text-[10px] sm:text-[11px] hover:opacity-90 transition">
//                  Deposit
//                </button>
//                <button className="px-3 py-1 rounded-full bg-[#EE933C] text-white font-medium text-[10px] sm:text-[11px] hover:opacity-90 transition">
//                  Transfer
//                </button>
//              </div>
//            </motion.div>
//          ))}
//        </div>
//      </motion.div>
     
//       {/* Header */}
//       <div className="space-y-2 max-w-[1400px] p-5 w-full">
//         <RiMenuFoldLine size={30} className="text-gray-700 dark:text-white" />
//         <h1 className="text-[20px] sm:text-[24px] font-[700] text-[#000000] dark:text-white">
//           Packages
//         </h1>
//       </div>

//       <div className="space-y-2 max-w-[1400px] p-5 w-full">
//        <UsersPackagesGrid/>
//       </div>

//       {/* Package Summary & Packages */}
//       <motion.div
//         variants={fadeUp}
//         className="py-6 flex flex-col lg:flex-row gap-4 w-full max-w-[1400px] px-4 sm:px-6"
//       >
//         <div className="w-full">
//           <PackagesSection />
//         </div>
//       </motion.div>

//       {/* Risk Warning Section */}
//       <motion.div
//         variants={fadeUp}
//         className="flex flex-col md:flex-row gap-8 items-start bg-white  dark:bg-neutral-800 rounded-xl p-6 sm:p-8 mx-auto mt-10 w-[95%] lg:w-[85%] xl:w-[95%]"
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
  XCircle,
  CheckCircle2,
} from "lucide-react";
import { RiMenuFoldLine } from "react-icons/ri";

import PackagesSection from "../../utlis/PackagesSection";
import UsersPackagesGrid from "../../utlis/UsersPackageGrid";
import { getUserProfile } from "../../api/authApi";
import { initiateFund, transferFunds } from "../../api/walletApi";
import axios from "axios";

/* ─────────────────────── MODALS ─────────────────────── */
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

/* ─────────────────────── MAIN COMPONENT ─────────────────────── */
export default function UsersMangement() {
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

  /* ─────────────── FETCH USER PROFILE ─────────────── */
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

  /* ─────────────── HELPERS ─────────────── */
  const formatAmount = (amt) => {
    const n = Number(amt);
    return isNaN(n) ? "0.00" : n.toFixed(2);
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
      amount: formatAmount(wallets.earnings || profile?.walletBalance),
      icon: <ArrowRightLeft size={20} />,
      buttons: ["withdraw", "transfer"],
    },
  ];

  /* ─────────────── API HANDLERS ─────────────── */
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
      setWithdrawalResult({ type: "success", message: res.data.message || "Withdrawal submitted." });
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

  /* ─────────────── LOADING / ERROR ─────────────── */
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

  /* ─────────────── MAIN RENDER ─────────────── */
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
              {/* Wallet Info */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-1 text-center">
                <span className="text-[#00A991]">{item.icon}</span>
                <h1 className="text-[11px] sm:text-sm font-semibold">{item.title}:</h1>
                <p className="text-sm font-bold">
                  {item.amount}
                  <span className="text-[10px] font-medium ml-1">USD</span>
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                {item.buttons.includes("deposit") && (
                  <button
                    onClick={() => setShowDeposit(true)}
                    className="px-3 py-1 rounded-full bg-[#00A991] text-white font-medium text-[10px] sm:text-[11px] hover:opacity-90 transition"
                  >
                    Deposit
                  </button>
                )}
                {item.buttons.includes("transfer") && (
                  <button
                    onClick={() => setShowTransfer(true)}
                    className="px-3 py-1 rounded-full bg-[#EE933C] text-white font-medium text-[10px] sm:text-[11px] hover:opacity-90 transition"
                  >
                    Transfer
                  </button>
                )}
                {item.buttons.includes("withdraw") && (
                  <button
                    onClick={() => setShowWithdrawal(true)}
                    className="px-3 py-1 rounded-full bg-red-600 text-white font-medium text-[10px] sm:text-[11px] hover:opacity-90 transition"
                  >
                    Withdraw
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ─────── Header ─────── */}
      <div className="space-y-2 max-w-[1400px] p-5 w-full">
        <RiMenuFoldLine size={30} className="text-gray-700 dark:text-white" />
        <h1 className="text-[20px] sm:text-[24px] font-[700] text-[#000000] dark:text-white">
          Packages
        </h1>
      </div>

      {/* ─────── User Packages Grid ─────── */}
      <div className="space-y-2 max-w-[1400px] p-5 w-full">
        <UsersPackagesGrid />
      </div>

      {/* ─────── Packages Section ─────── */}
      <motion.div
        variants={fadeUp}
        className="py-6 flex flex-col lg:flex-row gap-4 w-full max-w-[1400px] px-4 sm:px-6"
      >
        <div className="w-full">
          <PackagesSection />
        </div>
      </motion.div>

      {/* ─────── Risk Warning ─────── */}
      <motion.div
        variants={fadeUp}
        className="flex flex-col md:flex-row gap-8 items-start bg-white dark:bg-neutral-800 rounded-xl p-6 sm:p-8 mx-auto mt-10 w-[95%] lg:w-[85%] xl:w-[95%]"
      >
        <div className="md:w-1/2 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-300 pb-2">
            Risk Warning
          </h1>
          <p>
            Trading forex, CFDs, and any financial derivative instruments on margin carries a high level of risk and may not be suitable for all investors, as you could sustain losses in excess of your deposits. Leverage can work for you as well as against you. Please carefully consider your financial situation and investment experience prior to trading products offered by{" "}
            <span className="font-semibold text-[#00A991]">International Finance Asia</span>.
          </p>
          <p>
            <span className="font-semibold text-[#00A991]">International Finance Asia Pty Ltd</span> is regulated by the Australian Securities and Investments Commission (ACN 670 137 345) under License No. 001305580.
          </p>
        </div>

        <div className="md:w-1/2 text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base border-t md:border-t-0 md:border-l border-gray-300 md:pl-8 pt-4 md:pt-14">
          <p>
            The contents in this site are provided only for informational purposes and should not be regarded as an offer or solicitation to any person in any jurisdiction where such an offer is unauthorized. Please read and understand the{" "}
            <span className="text-[#00A991] font-medium">Terms and Conditions</span>,{" "}
            <span className="text-[#00A991] font-medium">Risk Disclosure</span> and other legal documents on the{" "}
            <span className="text-[#00A991] font-medium">International Finance Asia</span> website prior to initiating your leveraged investment.
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