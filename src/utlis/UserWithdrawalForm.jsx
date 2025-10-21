import React from "react";

const UserWithdrawalForm = ({title}) => {
  return (
    <div className="bg-white dark:bg-neutral-800 dark:text-white rounded-xl shadow-sm border border-gray-200 w-full mx-auto  md:p-10">
      <h2 className="text-lg font-semibold text-gray-900 mb-6 dark:bg-neutral-800 dark:text-white">{title}</h2>

      {/* Withdraw to */}
      <div className="mb-4">
        <label className="dark:bg-neutral-800 dark:text-white block text-sm font-medium text-gray-700 mb-1">
          Withdraw to :
        </label>
        <button className="bg-gray-100 text-gray-500 text-sm px-4 py-2 rounded-full dark:bg-neutral-800 dark:text-white cursor-pointer hover:bg-gray-200 transition">
          Please click here to update your wallet address
        </button>
      </div>

      {/* Withdrawal Amount */}
      <div className="mb-4 flex flex-col md:flex-row md:items-center md:space-x-3">
        <label className="text-sm dark:bg-neutral-800 dark:text-white font-medium text-gray-700 mb-1 md:mb-0">
          Withdrawal Amount :
        </label>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="0.00"
            className="w-40 dark:bg-transparent dark:text-white text-gray-500 text-center bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
          />
          <span className="ml-1 text-sm text-gray-500">USD</span>
        </div>
      </div>

      {/* Charges */}
      <div className="mb-2 text-sm text-gray-700 dark:bg-neutral-800 dark:text-white">
        <p className="dark:bg-neutral-800 dark:text-white">
          Charges Amount : <span className="font-medium text-gray-900 dark:bg-neutral-800 dark:text-white">0 USD</span>
        </p>
      </div>

      {/* Receive Amount */}
      <div className="mb-6 text-sm text-gray-700 dark:bg-neutral-800 dark:text-white">
        <p>
          Receive Amount : <span className="font-medium text-gray-900 dark:bg-neutral-800 dark:text-white">0 USD</span>
        </p>
      </div>

      {/* Remarks */}
      <div className="text-sm text-gray-700 leading-relaxed space-y-2">
        <p className="font-medium mb-1 dark:bg-neutral-800 dark:text-white">Remark</p>
        <ol className="list-decimal dark:bg-neutral-800 dark:text-white ml-4 space-y-1">
          <li>
            Kindly ensure the accurate input of your USDT(TRC20) withdrawal address. 
            We shall not assume liability for any potential losses or damages arising 
            from the entry of an incorrect wallet address.
          </li>
          <li>
            Please take note that a 3% processing fee will be levied for withdrawal.
          </li>
        </ol>
      </div>

      {/* Withdraw Button */}
      <button className="mt-8 w-full bg-[#F8983B] text-white text-sm font-medium py-3 rounded-b-lg hover:bg-[#e1862f] transition">
        Withdraw
      </button>
    </div>
  );
};

export default UserWithdrawalForm;
