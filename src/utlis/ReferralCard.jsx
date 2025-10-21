import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { motion } from "framer-motion";
import { Copy } from "lucide-react";

const ReferralCard = () => {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://microtrade.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm dark:bg-neutral-900 dark:text-white overflow-hidden w-full max-w-6xl"
    >
      {/* Header */}
      <div className="flex justify-between items-center px-5 pt-4 pb-2 border-b border-gray-100">
        <h2 className="text-sm font-semibold text-gray-900">Referral Link</h2>
        <p className="text-sm font-medium text-gray-600">
          Total Invited Members (78)
        </p>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col items-center justify-center text-center space-y-3">
        <p className="text-sm text-gray-700">
         
          <span className="text-gray-900 font-medium ml-1">
            {referralLink}
          </span>
        </p>

        <div className="mt-2 bg-white p-3 rounded-lg border border-gray-200">
          <QRCodeCanvas value={referralLink} size={120} />
        </div>
      </div>

      {/* Footer Button */}
      <div className="bg-orange-500 py-3 text-center cursor-pointer hover:bg-orange-600 transition-all duration-200">
        <button
          onClick={handleCopy}
          className="flex items-center justify-center w-full text-white font-medium gap-2"
        >
          {copied ? "Copied!" : "Copy Link"}
          <Copy size={16} className="opacity-90" />
        </button>
      </div>
    </motion.div>
  );
};

export default ReferralCard;
