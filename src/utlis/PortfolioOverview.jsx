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

const data = [
  { name: "1", deposit: 200, usd: 250, ib: 300, mt5: 250 },
  { name: "2", deposit: 200, usd: 250, ib: 300, mt5: 250 },
  { name: "3", deposit: 200, usd: 250, ib: 300, mt5: 250 },
  { name: "4", deposit: 200, usd: 250, ib: 300, mt5: 250 },
  { name: "5", deposit: 200, usd: 250, ib: 300, mt5: 250 },
  { name: "6", deposit: 200, usd: 250, ib: 300, mt5: 250 },
  { name: "7", deposit: 200, usd: 250, ib: 300, mt5: 250 },
  { name: "8", deposit: 200, usd: 250, ib: 300, mt5: 250 },
  { name: "9", deposit: 200, usd: 250, ib: 300, mt5: 250 },
  { name: "10", deposit: 200, usd: 250, ib: 300, mt5: 250 },
  { name: "11", deposit: 200, usd: 250, ib: 300, mt5: 250 },
  { name: "12", deposit: 200, usd: 250, ib: 300, mt5: 250 },
];

const PortfolioOverview = () => {
  return (
    <div className="bg-white dark:bg-neutral-900 dark:text-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Portfolio Overview
      </h2>
      <div className="w-full h-72 ">
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tickLine={false} />
            <YAxis
              tickFormatter={(value) => `${value.toFixed(2)}`}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} />
            <Legend
              verticalAlign="top"
              align="center"
              iconType="circle"
              wrapperStyle={{ paddingBottom: 20 }}
            />
            <Bar dataKey="deposit" stackId="a" fill="#028176" name="Deposit Wallet" />
            <Bar dataKey="usd" stackId="a" fill="#66C2B9" name="USD Wallet" />
            <Bar dataKey="ib" stackId="a" fill="#B7E1DB" name="IB Wallet" />
            <Bar dataKey="mt5" stackId="a" fill="#E6F4F1" name="MT5 Total Balance" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PortfolioOverview;
