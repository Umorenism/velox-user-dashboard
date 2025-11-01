// import React, { useState } from "react";
// import { QRCodeCanvas } from "qrcode.react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Copy, Share2, X } from "lucide-react";

// const ReferralCard = () => {
//   const [copied, setCopied] = useState(false);
//   const [shared, setShared] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const referralLink = "https://microtrade.com";

//   // Mock invited members data
//   const invitedMembers = [
//     { id: 1, name: "John Doe", email: "john@example.com", date: "2025-09-14" },
//     { id: 2, name: "Mary Johnson", email: "mary@example.com", date: "2025-09-16" },
//     { id: 3, name: "David Brown", email: "david@example.com", date: "2025-10-01" },
//     { id: 4, name: "Sarah Lee", email: "sarah@example.com", date: "2025-10-10" },
//   ];

//   const handleCopy = () => {
//     navigator.clipboard.writeText(referralLink);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const handleShare = async () => {
//     if (navigator.share) {
//       try {
//         await navigator.share({
//           title: "Join me on MicroTrade",
//           text: "Check out this trading platform!",
//           url: referralLink,
//         });
//         setShared(true);
//         setTimeout(() => setShared(false), 2000);
//       } catch (err) {
//         console.log("Share canceled or failed:", err);
//       }
//     } else {
//       navigator.clipboard.writeText(referralLink);
//       alert("Referral link copied. You can share it manually!");
//     }
//   };

//   return (
//     <>
//       {/* MAIN CARD */}
//       <motion.div
//         initial={{ opacity: 0, y: 15 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.4 }}
//         className="bg-white rounded-2xl border border-gray-100 shadow-sm dark:bg-neutral-900 dark:text-white overflow-hidden w-full max-w-6xl"
//       >
//         {/* Header */}
//         <div className="flex justify-between items-center px-5 pt-4 pb-2 border-b border-gray-100">
//           <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-200">
//             Referral Link
//           </h2>
//           <button
//             onClick={() => setShowModal(true)}
//             className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-orange-500 transition"
//           >
//             Total Invited Members ({invitedMembers.length})
//           </button>
//         </div>

//         {/* Body */}
//         <div className="p-5 flex flex-col items-center justify-center text-center space-y-3">
//           <p className="text-sm flex items-center gap-4 text-gray-700 dark:text-gray-300">
//             <span className="text-gray-900 font-medium ml-1 dark:text-white">
//               {referralLink}
//             </span>
//             <button
//               onClick={handleShare}
//               className="ml-3 flex items-center justify-center gap-2 bg-white text-orange-600 px-4 py-2 rounded-md font-medium hover:bg-orange-100 transition"
//             >
//               <Share2 size={16} />
//               {shared ? "Shared!" : "Share"}
//             </button>
//           </p>

//           <div className="mt-2 bg-white dark:bg-neutral-800 p-3 rounded-lg border border-gray-200 dark:border-neutral-700">
//             <QRCodeCanvas value={referralLink} size={265} />
//           </div>
//         </div>

//         {/* Footer Button */}
//         <div className="flex items-center justify-between bg-orange-500 px-4 py-3">
//           <button
//             onClick={handleCopy}
//             className="flex items-center justify-center gap-2 text-white font-medium hover:opacity-90 transition w-full rounded-md py-2"
//           >
//             <Copy size={16} className="opacity-90" />
//             {copied ? "Copied!" : "Copy Link"}
//           </button>
//         </div>
//       </motion.div>

//       {/* MODAL */}
//       <AnimatePresence>
//         {showModal && (
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ duration: 0.2 }}
//               className="bg-white dark:bg-neutral-900 text-gray-900 dark:text-white rounded-2xl shadow-lg p-6 w-full max-w-lg relative"
//             >
//               {/* Close Button */}
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
//               >
//                 <X size={18} />
//               </button>

//               <h3 className="text-xl font-semibold mb-4 text-center text-orange-500">
//                 Invited Members
//               </h3>

//               {/* List */}
//               <div className="max-h-64 overflow-y-auto space-y-3">
//                 {invitedMembers.map((member) => (
//                   <div
//                     key={member.id}
//                     className="flex justify-between items-center bg-gray-50 dark:bg-neutral-800 p-3 rounded-md border border-gray-200 dark:border-neutral-700"
//                   >
//                     <div>
//                       <p className="font-medium">{member.name}</p>
//                       <p className="text-sm text-gray-500">{member.email}</p>
//                     </div>
//                     <p className="text-xs text-gray-400">{member.date}</p>
//                   </div>
//                 ))}
//               </div>

//               {/* Footer */}
              
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default ReferralCard;









import React, { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Share2, X, Loader2 } from "lucide-react";
import { getUserProfile } from "../api/authApi"; // ✅ adjust path if needed

const ReferralCard = () => {
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch user profile
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token"); // assumes JWT is stored
        const userData = await getUserProfile(token);
        setUser(userData);
        console.log("User data:", userData);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-6">
        <Loader2 className="animate-spin text-[#F8983B]" size={24} />
        <p className="ml-3 text-gray-600 dark:text-gray-300">Loading referral info...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-300 py-6">
        Failed to load referral information.
      </div>
    );
  }

  // ✅ Generate referral link dynamically
  const referralLink = `https://microtrade.com/register?ref=${user.referralCode}`;
  const invitedMembers = user.downline || [];

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Join me on MicroTrade",
          text: "Earn rewards by joining through my referral link!",
          url: referralLink,
        });
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      } catch (err) {
        console.log("Share canceled or failed:", err);
      }
    } else {
      navigator.clipboard.writeText(referralLink);
      alert("Referral link copied. You can share it manually!");
    }
  };

  return (
    <>
      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-2xl border border-gray-100 shadow-sm dark:bg-neutral-900 dark:text-white overflow-hidden w-full max-w-6xl"
      >
        {/* Header */}
        <div className="flex justify-between items-center px-5 pt-4 pb-2 border-b border-gray-100">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-200">
            Referral Link
          </h2>
          <button
            onClick={() => setShowModal(true)}
            className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-orange-500 transition"
          >
            Total Invited Members ({invitedMembers.length})
          </button>
        </div>

        {/* Body */}
        <div className="p-5 flex flex-col items-center justify-center text-center space-y-3">
          <p className="text-sm flex items-center gap-4 text-gray-700 dark:text-gray-300 flex-wrap justify-center">
            <span className="text-gray-900 font-medium ml-1 dark:text-white break-all">
              {referralLink}
            </span>
            <button
              onClick={handleShare}
              className="ml-3 flex items-center justify-center gap-2 bg-white text-orange-600 px-4 py-2 rounded-md font-medium hover:bg-orange-100 transition"
            >
              <Share2 size={16} />
              {shared ? "Shared!" : "Share"}
            </button>
          </p>

          <div className="mt-2 bg-white dark:bg-neutral-800 p-3 rounded-lg border border-gray-200 dark:border-neutral-700">
            <QRCodeCanvas value={referralLink} size={265} />
          </div>
        </div>

        {/* Footer Button */}
        <div className="flex items-center justify-between bg-orange-500 px-4 py-3">
          <button
            onClick={handleCopy}
            className="flex items-center justify-center gap-2 text-white font-medium hover:opacity-90 transition w-full rounded-md py-2"
          >
            <Copy size={16} className="opacity-90" />
            {copied ? "Copied!" : "Copy Link"}
          </button>
        </div>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-neutral-900 text-gray-900 dark:text-white rounded-2xl shadow-lg p-6 w-full max-w-lg relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
              >
                <X size={18} />
              </button>

              <h3 className="text-xl font-semibold mb-4 text-center text-orange-500">
                Invited Members
              </h3>

              {/* List */}
              <div className="max-h-64 overflow-y-auto space-y-3">
                {invitedMembers.length > 0 ? (
                  invitedMembers.map((member) => (
                    <div
                      key={member.id}
                      className="flex justify-between items-center bg-gray-50 dark:bg-neutral-800 p-3 rounded-md border border-gray-200 dark:border-neutral-700"
                    >
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-gray-500">{member.email}</p>
                      </div>
                      <p className="text-xs text-gray-400">
                        {new Date(member.joined).toLocaleDateString()}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-400 text-sm">No referrals yet.</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ReferralCard;
