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









import React, { useEffect, useState } from "react";
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
import { apiClient } from "../api/apiClient";

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

    for (let i = 0; i < monthIndices.length; i++) {
      const { start, end } = monthIndices[i];
      if (txDate >= start && txDate <= end) {
        if (tx.wallet === "deposit") {
          if (tx.credit) runningBalance += tx.credit;
          if (tx.debit) runningBalance -= tx.debit;
        }
        balancesByMonth[i] = runningBalance;
        break;
      }
    }
  });

  let lastKnown = 0;
  return balancesByMonth.map((balance) => {
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

const PortfolioOverview = () => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await apiClient.get("/api/users/profile");
        const data = response.data;
        console.log("✅ User profile:", data);

        const months = generateMonthLabels();
        const walletHistory = data.walletHistory || [];

        // Build chart from history
        const monthlyData = processWalletHistory(walletHistory, months);

        // Inject current wallet balances (final month)
        if (data.wallets) {
          const { deposit = 0, bull = 0, bear = 0 } = data.wallets;

          // Replace the most recent month data with current balances
          monthlyData[monthlyData.length - 1] = {
            deposit,
            usd: bear,
            ib: bull,
            mt5: deposit + bull + bear, // optional total
          };
        }

        const finalData = months.map((month, index) => ({
          name: month,
          "Deposit Wallet": monthlyData[index].deposit,
          "Bear Wallet": monthlyData[index].usd,
          "Bull Wallet": monthlyData[index].ib,
          "Account Balance": monthlyData[index].mt5,
        }));

        setChartData(finalData);
      } catch (error) {
        console.error("❌ Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="bg-white dark:bg-neutral-900 dark:text-white rounded-[10px] p-6 shadow-sm border border-gray-100 text-center">
        <p>Loading portfolio...</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-neutral-900 dark:text-white rounded-[10px] p-6 shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-4">
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
            <Bar dataKey="Bear Wallet" stackId="a" fill="#ef4444" />
            <Bar dataKey="Bull Wallet" stackId="a" fill="#3b82f6" />
            <Bar dataKey="Account Balance" stackId="a" fill="#E6F4F1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PortfolioOverview;




// import React, { useEffect, useState } from "react";
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
// import { apiClient } from "../api/apiClient";

// const PortfolioOverview = () => {
//   const [chartData, setChartData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPortfolio = async () => {
//       try {
//         const response = await apiClient.get("/api/users/profile");
//         const data = response.data;
//         console.log("✅ Portfolio Data:", data);

//         if (data && data.wallets) {
//           const { deposit = 0, bull = 0, bear = 0 } = data.wallets;

//           // Create chart dataset (single bar showing each wallet)
//           const formattedData = [
//             {
//               name: "Wallets",
//               "Deposit Wallet": deposit,
//               "Bear Wallet": bear,
//               "Bull Wallet": bull,
//             },
//           ];

//           setChartData(formattedData);
//         }
//       } catch (error) {
//         console.error("❌ Error fetching wallet data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPortfolio();
//   }, []);

//   if (loading) {
//     return (
//       <div className="bg-white dark:bg-neutral-900 dark:text-white rounded-[10px] p-6 shadow-sm border border-gray-100 text-center">
//         <p>Loading portfolio...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white dark:bg-neutral-900 dark:text-white rounded-[10px] p-6 shadow-sm border border-gray-100">
//       <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-4">
//         Portfolio Overview
//       </h2>
//       <hr />
//       <div className="w-full h-[400px]">
//         <ResponsiveContainer>
//           <BarChart
//             data={chartData}
//             margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
//           >
//             <CartesianGrid strokeDasharray="3 3" vertical={false} />
//             <XAxis dataKey="name" tickLine={false} />
//             <YAxis
//               tickFormatter={(value) => `$${value}`}
//               tickLine={false}
//               axisLine={false}
//             />
//             <Tooltip
//               cursor={{ fill: "rgba(0,0,0,0.05)" }}
//               formatter={(value) => `$${value}`}
//             />
//             <Legend
//               verticalAlign="top"
//               align="center"
//               iconType="circle"
//               wrapperStyle={{ paddingBottom: 20 }}
//             />

//             {/* Wallet Bars */}
//             <Bar dataKey="Deposit Wallet" fill="#028176" barSize={60} radius={[6, 6, 0, 0]} />
//             <Bar dataKey="Bear Wallet" fill="#ef4444" barSize={60} radius={[6, 6, 0, 0]} />
//             <Bar dataKey="Bull Wallet" fill="#3b82f6" barSize={60} radius={[6, 6, 0, 0]} />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//       <div className="mt-6 text-sm text-gray-600 dark:text-gray-400 text-center">
//         <p>
//           Deposit Wallet: <span className="font-semibold text-emerald-600">${chartData[0]?.["Deposit Wallet"]}</span> |{" "}
//           Bear Wallet: <span className="font-semibold text-red-500">${chartData[0]?.["Bear Wallet"]}</span> |{" "}
//           Bull Wallet: <span className="font-semibold text-blue-500">${chartData[0]?.["Bull Wallet"]}</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default PortfolioOverview;
