// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   { name: "1", deposit: 200, usd: 250, ib: 300, mt5: 250 },
//   { name: "2", deposit: 200, usd: 250, ib: 300, mt5: 250 },
//   { name: "3", deposit: 200, usd: 250, ib: 300, mt5: 250 },
//   { name: "4", deposit: 200, usd: 250, ib: 300, mt5: 250 },
//   { name: "5", deposit: 200, usd: 250, ib: 300, mt5: 250 },
//   { name: "6", deposit: 200, usd: 250, ib: 300, mt5: 250 },
//   { name: "7", deposit: 200, usd: 250, ib: 300, mt5: 250 },
//   { name: "8", deposit: 200, usd: 250, ib: 300, mt5: 250 },
//   { name: "9", deposit: 200, usd: 250, ib: 300, mt5: 250 },
//   { name: "10", deposit: 200, usd: 250, ib: 300, mt5: 250 },
//   { name: "11", deposit: 200, usd: 250, ib: 300, mt5: 250 },
//   { name: "12", deposit: 200, usd: 250, ib: 300, mt5: 250 },
// ];

// const PortfolioOverview = () => {
//   return (
//     <div className="bg-white dark:bg-neutral-900 dark:text-white rounded-[10px] p-6 shadow-sm border border-gray-100">
//       <h2 className="text-lg font-semibold text-gray-900 mb-4">
//         Portfolio Overview
//       </h2>
//       <hr />
//       <div className="w-full h-[400px] ">
//         <ResponsiveContainer>
//           <BarChart
//             data={data}
//             margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
//           >
//             <CartesianGrid strokeDasharray="3 3" vertical={false} />
//             <XAxis dataKey="name" tickLine={false} />
//             <YAxis
//               tickFormatter={(value) => `${value.toFixed(2)}`}
//               tickLine={false}
//               axisLine={false}
//             />
//             <Tooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} />
//             <Legend
//               verticalAlign="top"
//               align="center"
//               radius="10px"
//               iconType="circle"
//               wrapperStyle={{ paddingBottom: 20 }}
//             />
//             <Bar dataKey="deposit wallet" stackId="a" fill="#028176" name="Deposit Wallet"  />
//             <Bar dataKey="usd" stackId="a" fill="#66C2B9" name="Bear Wallet" />
//             <Bar dataKey="Bull Wallet" stackId="a" fill="#B7E1DB" name="bull Wallet" />
//             <Bar dataKey="Accoun bal" stackId="a" fill="#E6F4F1" name="Account Balance" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default PortfolioOverview;









import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Helper: Generate last 12 months labels (e.g., "Jan", "Feb", ..., "Dec")
const generateMonthLabels = () => {
  const months = [];
  const now = new Date();
  for (let i = 11; i >= 0; i--) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
    months.push(date.toLocaleString("default", { month: "short" }));
  }
  return months;
};

// Helper: Process wallet history into monthly balances
const processWalletHistory = (walletHistory, months) => {
  const monthlyData = months.map(() => ({
    deposit: 0,
    usd: 0,
    ib: 0,
    mt5: 0,
  }));

  if (!walletHistory || walletHistory.length === 0) return monthlyData;

  const now = new Date();
  const monthIndices = months.map((_, idx) => {
    const date = new Date(now.getFullYear(), now.getMonth() - (11 - idx), 1);
    return { start: date, end: new Date(date.getFullYear(), date.getMonth() + 1, 0) };
  });

  let runningBalance = 0;
  const balancesByMonth = new Array(12).fill(0);

  walletHistory.forEach((tx) => {
    const txDate = new Date(tx.date);
    if (isNaN(txDate)) return;

    // Find which month this transaction belongs to
    for (let i = 0; i < monthIndices.length; i++) {
      const { start, end } = monthIndices[i];
      if (txDate >= start && txDate <= end) {
        // Only count deposit wallet changes
        if (tx.wallet === "deposit") {
          if (tx.credit) runningBalance += tx.credit;
          if (tx.debit) runningBalance -= tx.debit;
        }
        balancesByMonth[i] = runningBalance;
        break;
      }
    }
  });

  // Fill forward the last known balance for future months
  let lastKnown = 0;
  return balancesByMonth.map((balance, idx) => {
    if (balance > 0) lastKnown = balance;
    else balance = lastKnown;
    return {
      deposit: balance,
      usd: 0,
      ib: 0,
      mt5: 0,
    };
  });
};

const PortfolioOverview = ({ userData }) => {
  const months = generateMonthLabels();
  const walletHistory = userData?.walletHistory || [];
  const monthlyData = processWalletHistory(walletHistory, months);

  const chartData = months.map((month, index) => ({
    name: month,
    "Deposit Wallet": monthlyData[index].deposit,
    "Bear Wallet": monthlyData[index].usd,
    "Bull Wallet": monthlyData[index].ib,
    "Account Balance": monthlyData[index].mt5,
  }));

  return (
    <div className="bg-white dark:bg-neutral-900 dark:text-white rounded-[10px] p-6 shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Portfolio Overview
      </h2>
      <hr />
      <div className="w-full h-[400px]">
        <ResponsiveContainer>
          <BarChart
            data={chartData}
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tickLine={false} />
            <YAxis
              tickFormatter={(value) => `$${value}`}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              cursor={{ fill: "rgba(0,0,0,0.05)" }}
              formatter={(value) => `$${value}`}
            />
            <Legend
              verticalAlign="top"
              align="center"
              iconType="circle"
              wrapperStyle={{ paddingBottom: 20 }}
            />
            <Bar dataKey="Deposit Wallet" stackId="a" fill="#028176" />
            <Bar dataKey="Bear Wallet" stackId="a" fill="#66C2B9" />
            <Bar dataKey="Bull Wallet" stackId="a" fill="#B7E1DB" />
            <Bar dataKey="Account Balance" stackId="a" fill="#E6F4F1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PortfolioOverview;