import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Clock, AlertCircle } from "lucide-react";
import axios from "axios";

const apiUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";

export default function VeloxCapitalSignals() {
  const [marketData, setMarketData] = useState([]);
  const [signals, setSignals] = useState([]);

  // Fetch Crypto Market Data
  useEffect(() => {
    axios.get(apiUrl).then((res) => setMarketData(res.data.slice(0, 5)));
  }, []);

  // Mock Signal Data
  useEffect(() => {
    setSignals([
      {
        pair: "BTC/USD",
        signal: "BUY",
        entry: 64200,
        tp: 66000,
        sl: 63000,
        accuracy: 89,
        status: "Active",
      },
      {
        pair: "ETH/USD",
        signal: "SELL",
        entry: 3200,
        tp: 3050,
        sl: 3300,
        accuracy: 82,
        status: "Active",
      },
      {
        pair: "XAU/USD",
        signal: "BUY",
        entry: 1870,
        tp: 1920,
        sl: 1840,
        accuracy: 76,
        status: "Closed",
      },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 p-6">
      {/* HEADER */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          VeloxCapital Trading Signals
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Real-time market insights powered by VeloxCapital analytics
        </p>
      </header>

      {/* MARKET OVERVIEW */}
      <section className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {marketData.map((coin, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow p-4 flex flex-col items-center text-center"
          >
            <img src={coin.image} alt={coin.name} className="w-10 h-10 mb-2" />
            <h3 className="font-semibold text-gray-800 dark:text-white">
              {coin.name}
            </h3>
            <p
              className={`text-sm font-medium ${
                coin.price_change_percentage_24h >= 0
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
            <p className="text-gray-500 text-sm">${coin.current_price}</p>
          </motion.div>
        ))}
      </section>

      {/* ACTIVE SIGNALS */}
      <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Active Trading Signals
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {signals
            .filter((s) => s.status === "Active")
            .map((signal, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="border dark:border-gray-700 rounded-xl p-4 flex flex-col gap-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700 dark:text-white">
                    {signal.pair}
                  </span>
                  {signal.signal === "BUY" ? (
                    <TrendingUp className="text-green-500" />
                  ) : (
                    <TrendingDown className="text-red-500" />
                  )}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Entry: <span className="font-semibold">${signal.entry}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>TP: ${signal.tp}</span>
                  <span>SL: ${signal.sl}</span>
                </div>
                <div className="mt-2">
                  <div className="text-xs uppercase text-gray-400">Accuracy</div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        signal.accuracy >= 80 ? "bg-green-500" : "bg-yellow-500"
                      }`}
                      style={{ width: `${signal.accuracy}%` }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* SIGNAL HISTORY */}
      <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Signal History
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-gray-700 dark:text-gray-300">
            <thead>
              <tr className="border-b dark:border-gray-700">
                <th className="text-left py-2 px-3">Pair</th>
                <th className="text-left py-2 px-3">Signal</th>
                <th className="text-left py-2 px-3">Entry</th>
                <th className="text-left py-2 px-3">TP</th>
                <th className="text-left py-2 px-3">SL</th>
                <th className="text-left py-2 px-3">Accuracy</th>
                <th className="text-left py-2 px-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {signals.map((s, idx) => (
                <tr
                  key={idx}
                  className="border-b hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="py-2 px-3">{s.pair}</td>
                  <td
                    className={`py-2 px-3 font-medium ${
                      s.signal === "BUY" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {s.signal}
                  </td>
                  <td className="py-2 px-3">${s.entry}</td>
                  <td className="py-2 px-3">${s.tp}</td>
                  <td className="py-2 px-3">${s.sl}</td>
                  <td className="py-2 px-3">{s.accuracy}%</td>
                  <td className="py-2 px-3">
                    {s.status === "Active" ? (
                      <span className="text-blue-500 flex items-center gap-1">
                        <Clock size={14} /> Active
                      </span>
                    ) : (
                      <span className="text-gray-500 flex items-center gap-1">
                        <AlertCircle size={14} /> Closed
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
