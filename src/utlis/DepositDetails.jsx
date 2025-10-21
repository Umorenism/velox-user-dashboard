import React, { useState } from "react";
import { ArrowUpDown, Search } from "lucide-react";
import { ChevronUp, ChevronDown } from "lucide-react"
export default function DepositDetails({title}) {
  const [page, setPage] = useState(1);

  return (
    <div className="py-5  bg-gray-100 dark:bg-neutral-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Search Bar */}
      <div className="flex items-center gap-2 px-4 py-2 rounded-md mb-6 border w-full   bg-white dark:bg-neutral-800 border-gray-300 dark:border-neutral-700">
        <Search className="text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search by referral name"
          className="w-full text-sm focus:outline-none bg-transparent text-gray-700 dark:text-gray-200"
        />
      </div>

      {/* Table Section */}
      <div className="rounded-md shadow-md border bg-white dark:bg-neutral-800 border-gray-200 dark:border-neutral-700 w-full   overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-neutral-700">
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>

        

        <div className="overflow-x-auto">
  <table className="w-full text-sm text-left border-collapse">
    <thead className="bg-gray-100 dark:bg-neutral-900 text-gray-600 dark:text-gray-300">
      <tr>
        {[
          "Transaction ID",
          "Date",
          "Network",
          "Amount",
          "Status",
        ].map((header) => (
          <th
            key={header}
            className="px-6 py-3 font-medium cursor-pointer hover:text-gray-900 dark:hover:text-white transition-all"
          >
            <div className="flex items-center gap-1">
              <span>{header}</span>
              <div className="flex flex-col leading-none">
                <ArrowUpDown/>
              </div>
            </div>
          </th>
        ))}
      </tr>
    </thead>

    <tbody>
      <tr>
        <td colSpan="5">
          <div className="flex flex-col items-center justify-center py-16">
            <div className="text-5xl mb-3">⚠️</div>
            <p className="text-gray-400 text-sm">No Data Available</p>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-gray-200 dark:border-neutral-700">
          <div className="flex items-center gap-2 text-sm">
            <span>Show</span>
            <select className="border rounded px-2 py-1 text-sm focus:outline-none bg-white dark:bg-neutral-800 border-gray-300 dark:border-neutral-600 text-gray-700 dark:text-gray-200">
              {[10, 20, 50].map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              className="hover:underline disabled:opacity-50"
              disabled={page === 1}
            >
              Previous
            </button>

            <div className="w-6 h-6 flex items-center justify-center rounded-full text-white text-xs bg-[#00BFA6] dark:bg-[#00BFA6]">
              {page}
            </div>

            <button
              onClick={() => setPage(page + 1)}
              className="hover:underline"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
