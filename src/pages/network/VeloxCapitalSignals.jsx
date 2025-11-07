// // import React, { useEffect, useState } from "react";
// // import { motion } from "framer-motion";
// // import { TrendingUp, TrendingDown, Clock, AlertCircle } from "lucide-react";
// // import axios from "axios";

// // const apiUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";

// // export default function VeloxCapitalSignals() {
// //   const [marketData, setMarketData] = useState([]);
// //   const [signals, setSignals] = useState([]);

// //   // Fetch Crypto Market Data
// //   useEffect(() => {
// //     axios.get(apiUrl).then((res) => setMarketData(res.data.slice(0, 5)));
// //   }, []);

// //   // Mock Signal Data
// //   useEffect(() => {
// //     setSignals([
// //       {
// //         pair: "BTC/USD",
// //         signal: "BUY",
// //         entry: 64200,
// //         tp: 66000,
// //         sl: 63000,
// //         accuracy: 89,
// //         status: "Active",
// //       },
// //       {
// //         pair: "ETH/USD",
// //         signal: "SELL",
// //         entry: 3200,
// //         tp: 3050,
// //         sl: 3300,
// //         accuracy: 82,
// //         status: "Active",
// //       },
// //       {
// //         pair: "XAU/USD",
// //         signal: "BUY",
// //         entry: 1870,
// //         tp: 1920,
// //         sl: 1840,
// //         accuracy: 76,
// //         status: "Closed",
// //       },
// //     ]);
// //   }, []);

// //   return (
// //     <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 p-6">
// //       {/* HEADER */}
// //       <header className="mb-8">
// //         <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
// //           VeloxCapital Trading Signals
// //         </h1>
// //         <p className="text-gray-500 dark:text-gray-400">
// //           Real-time market insights powered by VeloxCapital analytics
// //         </p>
// //       </header>

// //       {/* MARKET OVERVIEW */}
// //       <section className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
// //         {marketData.map((coin, idx) => (
// //           <motion.div
// //             key={idx}
// //             whileHover={{ scale: 1.03 }}
// //             className="bg-white dark:bg-gray-800 rounded-2xl shadow p-4 flex flex-col items-center text-center"
// //           >
// //             <img src={coin.image} alt={coin.name} className="w-10 h-10 mb-2" />
// //             <h3 className="font-semibold text-gray-800 dark:text-white">
// //               {coin.name}
// //             </h3>
// //             <p
// //               className={`text-sm font-medium ${
// //                 coin.price_change_percentage_24h >= 0
// //                   ? "text-green-500"
// //                   : "text-red-500"
// //               }`}
// //             >
// //               {coin.price_change_percentage_24h.toFixed(2)}%
// //             </p>
// //             <p className="text-gray-500 text-sm">${coin.current_price}</p>
// //           </motion.div>
// //         ))}
// //       </section>

// //       {/* ACTIVE SIGNALS */}
// //       <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8">
// //         <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
// //           Active Trading Signals
// //         </h2>
// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
// //           {signals
// //             .filter((s) => s.status === "Active")
// //             .map((signal, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 whileHover={{ scale: 1.02 }}
// //                 className="border dark:border-gray-700 rounded-xl p-4 flex flex-col gap-2"
// //               >
// //                 <div className="flex justify-between items-center">
// //                   <span className="font-semibold text-gray-700 dark:text-white">
// //                     {signal.pair}
// //                   </span>
// //                   {signal.signal === "BUY" ? (
// //                     <TrendingUp className="text-green-500" />
// //                   ) : (
// //                     <TrendingDown className="text-red-500" />
// //                   )}
// //                 </div>
// //                 <div className="text-sm text-gray-500 dark:text-gray-400">
// //                   Entry: <span className="font-semibold">${signal.entry}</span>
// //                 </div>
// //                 <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
// //                   <span>TP: ${signal.tp}</span>
// //                   <span>SL: ${signal.sl}</span>
// //                 </div>
// //                 <div className="mt-2">
// //                   <div className="text-xs uppercase text-gray-400">Accuracy</div>
// //                   <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
// //                     <div
// //                       className={`h-2 rounded-full ${
// //                         signal.accuracy >= 80 ? "bg-green-500" : "bg-yellow-500"
// //                       }`}
// //                       style={{ width: `${signal.accuracy}%` }}
// //                     ></div>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             ))}
// //         </div>
// //       </section>

// //       {/* SIGNAL HISTORY */}
// //       <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
// //         <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
// //           Signal History
// //         </h2>
// //         <div className="overflow-x-auto">
// //           <table className="min-w-full text-sm text-gray-700 dark:text-gray-300">
// //             <thead>
// //               <tr className="border-b dark:border-gray-700">
// //                 <th className="text-left py-2 px-3">Pair</th>
// //                 <th className="text-left py-2 px-3">Signal</th>
// //                 <th className="text-left py-2 px-3">Entry</th>
// //                 <th className="text-left py-2 px-3">TP</th>
// //                 <th className="text-left py-2 px-3">SL</th>
// //                 <th className="text-left py-2 px-3">Accuracy</th>
// //                 <th className="text-left py-2 px-3">Status</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {signals.map((s, idx) => (
// //                 <tr
// //                   key={idx}
// //                   className="border-b hover:bg-gray-50 dark:hover:bg-gray-700"
// //                 >
// //                   <td className="py-2 px-3">{s.pair}</td>
// //                   <td
// //                     className={`py-2 px-3 font-medium ${
// //                       s.signal === "BUY" ? "text-green-500" : "text-red-500"
// //                     }`}
// //                   >
// //                     {s.signal}
// //                   </td>
// //                   <td className="py-2 px-3">${s.entry}</td>
// //                   <td className="py-2 px-3">${s.tp}</td>
// //                   <td className="py-2 px-3">${s.sl}</td>
// //                   <td className="py-2 px-3">{s.accuracy}%</td>
// //                   <td className="py-2 px-3">
// //                     {s.status === "Active" ? (
// //                       <span className="text-blue-500 flex items-center gap-1">
// //                         <Clock size={14} /> Active
// //                       </span>
// //                     ) : (
// //                       <span className="text-gray-500 flex items-center gap-1">
// //                         <AlertCircle size={14} /> Closed
// //                       </span>
// //                     )}
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }







// // import React, { useEffect, useState } from "react";
// // import { motion } from "framer-motion";
// // import {
// //   TrendingUp,
// //   TrendingDown,
// //   Zap,
// //   Shield,
// //   BarChart3,
// //   History,
// //   Clock,
// //   AlertCircle,
// // } from "lucide-react";
// // import axios from "axios";

// // // Free Alpha Vantage API Key (replace with your own for production)
// // const ALPHA_VANTAGE_KEY = "demo"; // Get free key: https://www.alphavantage.co/support/#api-key
// // const COINGECKO_IDS = "bitcoin,gold,silver";

// // export default function VeloxCapitalSignals() {
// //   const [marketData, setMarketData] = useState([]);
// //   const [signals, setSignals] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   /* ------------------- FETCH MARKET PRICES (CoinGecko) ------------------- */
// //   useEffect(() => {
// //     const fetchPrices = async () => {
// //       try {
// //         const { data } = await axios.get(
// //           "https://api.coingecko.com/api/v3/coins/markets",
// //           {
// //             params: {
// //               vs_currency: "usd",
// //               ids: COINGECKO_IDS,
// //               order: "market_cap_desc",
// //               per_page: 3,
// //               page: 1,
// //               sparkline: false,
// //               price_change_percentage: "24h",
// //             },
// //           }
// //         );

// //         const assets = data.map((c) => ({
// //           id: c.id,
// //           symbol: c.symbol.toUpperCase(),
// //           name: c.name,
// //           price: c.current_price,
// //           change24h: c.price_change_percentage_24h || 0,
// //           image: c.image,
// //         }));

// //         setMarketData(assets);
// //         fetchLiveSignals(assets);
// //       } catch (err) {
// //         console.error("CoinGecko Error:", err);
// //       }
// //     };

// //     fetchPrices();
// //     const priceInterval = setInterval(fetchPrices, 60_000);
// //     return () => clearInterval(priceInterval);
// //   }, []);

// //   /* ------------------- FETCH LIVE SIGNALS (Alpha Vantage) ------------------- */
// //   const fetchLiveSignals = async (assets) => {
// //     const signalList = [];

// //     for (const asset of assets) {
// //       let symbol = "";
// //       let func = "";

// //       if (asset.symbol === "BTC") {
// //         symbol = "BTCUSD";
// //         func = "RSI";
// //       } else if (asset.symbol === "XAU") {
// //         symbol = "XAUUSD";
// //         func = "RSI";
// //       } else if (asset.symbol === "XAG") {
// //         symbol = "XAGUSD";
// //         func = "RSI";
// //       }

// //       if (!symbol) continue;

// //       try {
// //         const { data } = await axios.get(
// //           `https://www.alphavantage.co/query`,
// //           {
// //             params: {
// //               function: func,
// //               symbol,
// //               interval: "5min",
// //               time_period: 14,
// //               series_type: "close",
// //               apikey: ALPHA_VANTAGE_KEY,
// //             },
// //           }
// //         );

// //         const rsiData = data[`Technical Analysis: RSI`];
// //         const latest = Object.values(rsiData)[0];
// //         const rsi = parseFloat(latest.RSI);

// //         const signal = rsi < 30 ? "BUY" : rsi > 70 ? "SELL" : "HOLD";
// //         const entry = asset.price;
// //         const tp = signal === "BUY" ? entry * 1.025 : signal === "SELL" ? entry * 0.975 : entry;
// //         const sl = signal === "BUY" ? entry * 0.985 : signal === "SELL" ? entry * 1.015 : entry;
// //         const accuracy = rsi < 30 || rsi > 70 ? 88 : 65;

// //         signalList.push({
// //           pair:
// //             asset.symbol === "BTC"
// //               ? "BTC/USD"
// //               : asset.symbol === "XAU"
// //               ? "XAU/USD"
// //               : "XAG/USD",
// //           signal,
// //           entry: Number(entry.toFixed(asset.symbol === "BTC" ? 0 : 2)),
// //           tp: Number(tp.toFixed(asset.symbol === "BTC" ? 0 : 2)),
// //           sl: Number(sl.toFixed(asset.symbol === "BTC" ? 0 : 2)),
// //           accuracy,
// //           status: signal !== "HOLD" ? "Active" : "Closed",
// //           time: new Date().toISOString(),
// //         });
// //       } catch (err) {
// //         console.error(`Signal Error for ${symbol}:`, err);
// //         // Fallback mock if API fails
// //         signalList.push({
// //           pair:
// //             asset.symbol === "BTC"
// //               ? "BTC/USD"
// //               : asset.symbol === "XAU"
// //               ? "XAU/USD"
// //               : "XAG/USD",
// //           signal: asset.change24h > 0 ? "BUY" : "SELL",
// //           entry: asset.price,
// //           tp: asset.price * (asset.change24h > 0 ? 1.025 : 0.975),
// //           sl: asset.price * (asset.change24h > 0 ? 0.985 : 1.015),
// //           accuracy: 78,
// //           status: "Active",
// //           time: new Date().toISOString(),
// //         });
// //       }
// //     }

// //     setSignals(signalList);
// //     setLoading(false);
// //   };

// //   const formatPrice = (p, s) =>
// //     s === "BTC"
// //       ? `$${p.toLocaleString(undefined, { maximumFractionDigits: 0 })}`
// //       : `$${p.toFixed(2)}`;

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
// //         <div className="flex items-center space-x-3">
// //           <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-[#00A991]" />
// //           <span className="text-lg font-medium text-gray-700">
// //             Loading Live Signals…
// //           </span>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 p-4 md:p-6 lg:p-8">
// //       <div className="max-w-7xl mx-auto">

// //         {/* HEADER */}
// //         <motion.header
// //           initial={{ opacity: 0, y: -20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           className="text-center mb-12"
// //         >
// //           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 flex items-center justify-center gap-3">
// //             <Zap className="h-10 w-10 text-[#00A991]" />
// //             Velox Capital Signals
// //           </h1>
// //           <p className="text-gray-600 mt-3 text-lg">
// //             AI-Powered Live Signals: <strong>Bitcoin • Gold • Silver</strong>
// //           </p>
// //           <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
// //             <Shield className="h-4 w-4 text-[#00A991]" />
// //             <span>Real-time • Alpha Vantage + CoinGecko</span>
// //           </div>
// //         </motion.header>

// //         {/* 3 MARKET CARDS */}
// //         <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
// //           {marketData.map((c, i) => (
// //             <motion.div
// //               key={c.id}
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: i * 0.15 }}
// //               whileHover={{ scale: 1.05 }}
// //               className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-xl transition-all"
// //             >
// //               <div className="flex items-center justify-between mb-4">
// //                 <div className="flex items-center gap-3">
// //                   <img src={c.image} alt={c.name} className="w-12 h-12 rounded-full" />
// //                   <div>
// //                     <h3 className="text-xl font-bold text-gray-900">{c.symbol}</h3>
// //                     <p className="text-sm text-gray-500">{c.name}</p>
// //                   </div>
// //                 </div>
// //                 <div
// //                   className={`flex items-center gap-1 text-lg font-bold ${
// //                     c.change24h >= 0 ? "text-green-600" : "text-red-600"
// //                   }`}
// //                 >
// //                   {c.change24h >= 0 ? <TrendingUp /> : <TrendingDown />}
// //                   {Math.abs(c.change24h).toFixed(2)}%
// //                 </div>
// //               </div>
// //               <p className="text-3xl font-bold text-gray-900">
// //                 {formatPrice(c.price, c.symbol)}
// //               </p>
// //             </motion.div>
// //           ))}
// //         </section>

// //         {/* LIVE SIGNALS */}
// //         <section className="mb-12">
// //           <div className="flex items-center justify-between mb-6">
// //             <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
// //               <BarChart3 className="h-7 w-7 text-[#00A991]" />
// //               Live Trading Signals
// //             </h2>
// //             <span className="text-sm text-gray-500">
// //               {signals.filter((s) => s.status === "Active").length} Active
// //             </span>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //             {signals
// //               .filter((s) => s.status === "Active")
// //               .map((s, i) => (
// //                 <motion.div
// //                   key={i}
// //                   initial={{ opacity: 0, scale: 0.9 }}
// //                   animate={{ opacity: 1, scale: 1 }}
// //                   transition={{ delay: i * 0.1 }}
// //                   className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all"
// //                 >
// //                   <div className="flex items-center justify-between mb-4">
// //                     <h3 className="text-xl font-bold text-gray-900">{s.pair}</h3>
// //                     <span
// //                       className={`px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 ${
// //                         s.signal === "BUY"
// //                           ? "bg-green-100 text-green-700"
// //                           : s.signal === "SELL"
// //                           ? "bg-red-100 text-red-700"
// //                           : "bg-gray-100 text-gray-700"
// //                       }`}
// //                     >
// //                       {s.signal === "BUY" ? (
// //                         <TrendingUp className="h-4 w-4" />
// //                       ) : s.signal === "SELL" ? (
// //                         <TrendingDown className="h-4 w-4" />
// //                       ) : null}
// //                       {s.signal}
// //                     </span>
// //                   </div>

// //                   <div className="space-y-2 text-sm">
// //                     <div className="flex justify-between">
// //                       <span className="text-gray-500">Entry</span>
// //                       <span className="font-bold">${s.entry}</span>
// //                     </div>
// //                     <div className="flex justify-between">
// //                       <span className="text-gray-500">TP</span>
// //                       <span className="font-bold text-green-600">${s.tp}</span>
// //                     </div>
// //                     <div className="flex justify-between">
// //                       <span className="text-gray-500">SL</span>
// //                       <span className="font-bold text-red-600">${s.sl}</span>
// //                     </div>
// //                   </div>

// //                   <div className="mt-4">
// //                     <div className="flex justify-between text-xs text-gray-500 mb-1">
// //                       <span>Signal Strength</span>
// //                       <span>{s.accuracy}%</span>
// //                     </div>
// //                     <div className="w-full bg-gray-200 rounded-full h-3">
// //                       <div
// //                         className={`h-3 rounded-full transition-all ${
// //                           s.accuracy >= 85
// //                             ? "bg-gradient-to-r from-green-500 to-emerald-500"
// //                             : s.accuracy >= 75
// //                             ? "bg-gradient-to-r from-yellow-500 to-amber-500"
// //                             : "bg-gradient-to-r from-orange-500 to-red-500"
// //                         }`}
// //                         style={{ width: `${s.accuracy}%` }}
// //                       />
// //                     </div>
// //                   </div>

// //                   <div className="mt-3 text-xs text-gray-400 flex items-center gap-1">
// //                     <Clock className="h-3 w-3" />
// //                     {new Date(s.time).toLocaleTimeString()}
// //                   </div>
// //                 </motion.div>
// //               ))}
// //           </div>
// //         </section>

// //         {/* SIGNAL HISTORY */}
// //         <section>
// //           <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
// //             <History className="h-7 w-7 text-[#00A991]" />
// //             Signal History
// //           </h2>

// //           <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
// //             <div className="overflow-x-auto">
// //               <table className="w-full text-sm">
// //                 <thead className="bg-gradient-to-r from-[#00A991] to-[#10B981] text-white">
// //                   <tr>
// //                     <th className="px-6 py-4 text-left font-medium">Pair</th>
// //                     <th className="px-6 py-4 text-left font-medium">Signal</th>
// //                     <th className="px-6 py-4 text-left font-medium">Entry</th>
// //                     <th className="px-6 py-4 text-left font-medium">TP</th>
// //                     <th className="px-6 py-4 text-left font-medium">SL</th>
// //                     <th className="px-6 py-4 text-left font-medium">Acc.</th>
// //                     <th className="px-6 py-4 text-left font-medium">Status</th>
// //                     <th className="px-6 py-4 text-left font-medium">Time</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody className="divide-y divide-gray-100">
// //                   {signals.map((s, i) => (
// //                     <tr key={i} className="hover:bg-gray-50 transition">
// //                       <td className="px-6 py-4 font-medium text-gray-900">{s.pair}</td>
// //                       <td className="px-6 py-4">
// //                         <span
// //                           className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold ${
// //                             s.signal === "BUY"
// //                               ? "bg-green-100 text-green-700"
// //                               : s.signal === "SELL"
// //                               ? "bg-red-100 text-red-700"
// //                               : "bg-gray-100 text-gray-700"
// //                           }`}
// //                         >
// //                           {s.signal === "BUY" ? (
// //                             <TrendingUp className="h-3 w-3" />
// //                           ) : s.signal === "SELL" ? (
// //                             <TrendingDown className="h-3 w-3" />
// //                           ) : null}
// //                           {s.signal}
// //                         </span>
// //                       </td>
// //                       <td className="px-6 py-4 font-mono">${s.entry}</td>
// //                       <td className="px-6 py-4 font-mono text-green-600">${s.tp}</td>
// //                       <td className="px-6 py-4 font-mono text-red-600">${s.sl}</td>
// //                       <td className="px-6 py-4 font-bold text-gray-700">{s.accuracy}%</td>
// //                       <td className="px-6 py-4">
// //                         {s.status === "Active" ? (
// //                           <span className="flex items-center gap-1 text-blue-600 text-xs font-medium">
// //                             <Clock className="h-3 w-3" /> Active
// //                           </span>
// //                         ) : (
// //                           <span className="flex items-center gap-1 text-gray-500 text-xs">
// //                             <AlertCircle className="h-3 w-3" /> Closed
// //                           </span>
// //                         )}
// //                       </td>
// //                       <td className="px-6 py-4 text-xs text-gray-500">
// //                         {new Date(s.time).toLocaleString()}
// //                       </td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </div>
// //         </section>

// //         {/* FOOTER */}
// //         <div className="mt-16 text-center text-xs text-gray-500">
// //           <p>
// //             Velox Capital © 2025 | Signals Engine v2.0 • Data via{" "}
// //             <a
// //               href="https://www.alphavantage.co"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="text-[#00A991] hover:underline"
// //             >
// //               Alpha Vantage
// //             </a>{" "}
// //             +{" "}
// //             <a
// //               href="https://coingecko.com"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="text-[#00A991] hover:underline"
// //             >
// //               CoinGecko
// //             </a>
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }





// /*
// Fintech Market Signals UI
// File: MarketSignals.jsx

// Features included:
// - Live market signals for Bitcoin, Gold, and Silver
// - Live price cards with 24h change
// - Historical charts (7-day) using CoinGecko (Bitcoin) and Metals-API / GoldAPI (Gold & Silver)
// - External API integration scaffolding (CoinGecko public endpoints, Metals-API / GoldAPI for precious metals)
// - Polling for live updates (every 10 seconds by default)

// Dependencies:
// - react
// - axios
// - recharts
// - tailwindcss (for styling)

// How to use:
// 1. Install dependencies: npm install axios recharts
// 2. Add Tailwind to your project (standard Tailwind setup for Create React App / Vite)
// 3. Create a .env file with your keys (if using Metals-API or GoldAPI):
//    REACT_APP_METALS_API_KEY=your_key_here
//    REACT_APP_USE_GOLDAPI=true   # optional: toggle to use goldapi instead of metals-api

// 4. Drop this file into your React app and import it into a route or page:
//    import MarketSignals from './MarketSignals';

// Notes:
// - CoinGecko is public and does not require an API key for the endpoints used here.
// - Metals-API / GoldAPI require signup and API keys for real-time metals data.
// - This component is intentionally opinionated but easy to extend: swap endpoints or add websockets for lower-latency feeds.

// */

// import React, { useEffect, useState, useRef } from 'react';
// import axios from 'axios';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
// } from 'recharts';

// export default function MarketSignals({ pollIntervalMs = 10000 }) {
//   const [btc, setBtc] = useState({ price: null, change24h: null, history: [] });
//   const [gold, setGold] = useState({ price: null, change24h: null, history: [] });
//   const [silver, setSilver] = useState({ price: null, change24h: null, history: [] });
//   const [loading, setLoading] = useState(true);
//   const mounted = useRef(true);

//   // Helpers: format numbers
//   const fmt = (n) => (n === null || n === undefined ? '—' : Number(n).toLocaleString('en-US', { maximumFractionDigits: 2 }));

//   // Fetch BTC current price + 7d history from CoinGecko
//   const fetchBtc = async () => {
//     try {
//       // Current price and 24h change
//       const cur = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
//         params: {
//           ids: 'bitcoin',
//           vs_currencies: 'usd',
//           include_24hr_change: 'true',
//         },
//       });

//       // 7-day market chart (prices array: [ [timestamp, price], ... ])
//       const hist = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart', {
//         params: { vs_currency: 'usd', days: 7, interval: 'hourly' },
//       });

//       const price = cur.data?.bitcoin?.usd ?? null;
//       const change24h = cur.data?.bitcoin?.usd_24h_change ?? null;
//       const history = (hist.data?.prices || []).map(([ts, p]) => ({
//         time: new Date(ts).toLocaleString('en-US', { month: 'short', day: 'numeric' }),
//         price: Number(p.toFixed(2)),
//       }));

//       if (!mounted.current) return;
//       setBtc({ price, change24h, history });
//     } catch (err) {
//       console.error('fetchBtc error', err);
//     }
//   };

//   // Fetch Gold & Silver using Metals-API or GoldAPI (configurable)
//   const fetchMetals = async () => {
//     try {
//       const useGoldApi = process.env.REACT_APP_USE_GOLDAPI === 'true';
//       const key = process.env.REACT_APP_METALS_API_KEY || '';

//       if (useGoldApi) {
//         // GoldAPI endpoints example (requires API key)
//         // docs: https://www.goldapi.io/
//         const baseUrl = 'https://www.goldapi.io/api';
//         const headers = { 'x-access-token': key, 'Content-Type': 'application/json' };

//         // Gold (XAU) price in USD
//         const [gRes, sRes] = await Promise.all([
//           axios.get(`${baseUrl}/XAU/USD`, { headers }),
//           axios.get(`${baseUrl}/XAG/USD`, { headers }),
//         ]);

//         const gPrice = gRes.data?.price || null;
//         const sPrice = sRes.data?.price || null;

//         // GoldAPI offers 'timestamp' and 'open'/'high'/'low' on some plans. For historical we fallback to metals-api if necessary.
//         // For the demo, we'll build simple history arrays by sampling current price across time (replace with real timeseries endpoints in production).
//         const now = new Date();
//         const history7 = (p) => Array.from({ length: 24 }, (_, i) => ({ time: `${now.getHours() - (23 - i)}:00`, price: Number((p * (1 + (Math.random() - 0.5) * 0.01)).toFixed(2)) }));

//         if (!mounted.current) return;
//         setGold((g) => ({ ...g, price: gPrice, history: history7(gPrice), change24h: null }));
//         setSilver((s) => ({ ...s, price: sPrice, history: history7(sPrice), change24h: null }));
//       } else {
//         // Metals-API example: https://metals-api.com/
//         // Example: https://metals-api.com/api/latest?access_key=YOUR_KEY&base=USD&symbols=XAU,XAG
//         const url = 'https://metals-api.com/api/latest';
//         const params = { access_key: key, base: 'USD', symbols: 'XAU,XAG' };
//         const res = await axios.get(url, { params });
//         const rates = res.data?.rates || {};

//         // metals-api returns rates as USD per unit (depending on base); adjust if necessary
//         // Typical response: rates.XAU -> price of 1 XAU in USD
//         const gPrice = rates?.XAU ?? null;
//         const sPrice = rates?.XAG ?? null;

//         // Fetch time-series for last 7 days
//         // metals-api timeseries endpoint: /timeseries?start_date=YYYY-MM-DD&end_date=YYYY-MM-DD&symbols=XAU,XAG
//         const end = new Date();
//         const start = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
//         const startStr = start.toISOString().slice(0, 10);
//         const endStr = end.toISOString().slice(0, 10);

//         const tsRes = await axios.get('https://metals-api.com/api/timeseries', { params: { access_key: key, start_date: startStr, end_date: endStr, base: 'USD', symbols: 'XAU,XAG' } });
//         const ts = tsRes.data?.rates || {};

//         const goldHistory = Object.entries(ts).map(([date, obj]) => ({ time: date, price: obj.XAU }));
//         const silverHistory = Object.entries(ts).map(([date, obj]) => ({ time: date, price: obj.XAG }));

//         if (!mounted.current) return;
//         setGold({ price: gPrice, history: goldHistory, change24h: null });
//         setSilver({ price: sPrice, history: silverHistory, change24h: null });
//       }
//     } catch (err) {
//       console.error('fetchMetals error', err);
//     }
//   };

//   // Combined fetch
//   const fetchAll = async () => {
//     setLoading(true);
//     await Promise.all([fetchBtc(), fetchMetals()]);
//     if (mounted.current) setLoading(false);
//   };

//   useEffect(() => {
//     mounted.current = true;
//     fetchAll();
//     const id = setInterval(fetchAll, pollIntervalMs);
//     return () => {
//       mounted.current = false;
//       clearInterval(id);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // Small card component
//   const AssetCard = ({ title, symbol, data, currency = 'USD' }) => (
//     <div className="bg-white/80 dark:bg-neutral-900/60 shadow-md rounded-2xl p-4 flex-1 min-w-[260px]">
//       <div className="flex justify-between items-start">
//         <div>
//           <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">{title}</h3>
//           <p className="text-xs text-gray-500 dark:text-gray-400">{symbol} • {currency}</p>
//         </div>
//         <div className="text-right">
//           <div className="text-lg font-bold text-gray-800 dark:text-white">{fmt(data.price)} {currency}</div>
//           <div className={`text-sm mt-1 ${data.change24h && data.change24h >= 0 ? 'text-green-600' : 'text-red-500'}`}>
//             {data.change24h !== null && data.change24h !== undefined ? `${data.change24h.toFixed(2)}% (24h)` : '—'}
//           </div>
//         </div>
//       </div>

//       <div className="mt-3 h-36">
//         {data.history && data.history.length > 0 ? (
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={data.history} margin={{ top: 6, right: 6, left: -8, bottom: 0 }}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="time" hide />
//               <YAxis hide domain={["dataMin", "dataMax"]} />
//               <Tooltip />
//               <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} dot={false} />
//             </LineChart>
//           </ResponsiveContainer>
//         ) : (
//           <div className="flex items-center justify-center h-full text-sm text-gray-400">No history</div>
//         )}
//       </div>

//       <div className="mt-3 text-xs text-gray-500">
//         Last updated: {new Date().toLocaleTimeString()}
//       </div>
//     </div>
//   );

//   return (
//     <div className="p-4 max-w-6xl mx-auto">
//       <header className="mb-6 flex items-center justify-between">
//         <h2 className="text-xl font-bold text-gray-800 dark:text-white">Market Signals</h2>
//         <div className="text-sm text-gray-500">Live · Updated every {pollIntervalMs / 1000}s</div>
//       </header>

//       <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <AssetCard title="Bitcoin" symbol="BTC" data={btc} currency="USD" />
//         <AssetCard title="Gold" symbol="XAU" data={gold} currency="USD" />
//         <AssetCard title="Silver" symbol="XAG" data={silver} currency="USD" />
//       </section>

//       <section className="mt-8 bg-white/80 dark:bg-neutral-900/60 rounded-2xl p-4 shadow-md">
//         <h3 className="text-lg font-semibold mb-4">Detailed Charts</h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div className="col-span-1">
//             <h4 className="text-sm font-medium mb-2">Bitcoin — 7 day</h4>
//             <div className="h-60">
//               {btc.history && btc.history.length ? (
//                 <ResponsiveContainer width="100%" height="100%">
//                   <LineChart data={btc.history}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="time" />
//                     <YAxis />
//                     <Tooltip />
//                     <Line type="monotone" dataKey="price" stroke="#f7931a" strokeWidth={2} dot={false} />
//                   </LineChart>
//                 </ResponsiveContainer>
//               ) : (
//                 <div className="h-full flex items-center justify-center text-sm text-gray-400">No data</div>
//               )}
//             </div>
//           </div>

//           <div>
//             <h4 className="text-sm font-medium mb-2">Gold — 7 day</h4>
//             <div className="h-60">
//               {gold.history && gold.history.length ? (
//                 <ResponsiveContainer width="100%" height="100%">
//                   <LineChart data={gold.history}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="time" />
//                     <YAxis />
//                     <Tooltip />
//                     <Line type="monotone" dataKey="price" stroke="#d4af37" strokeWidth={2} dot={false} />
//                   </LineChart>
//                 </ResponsiveContainer>
//               ) : (
//                 <div className="h-full flex items-center justify-center text-sm text-gray-400">No data</div>
//               )}
//             </div>
//           </div>

//           <div>
//             <h4 className="text-sm font-medium mb-2">Silver — 7 day</h4>
//             <div className="h-60">
//               {silver.history && silver.history.length ? (
//                 <ResponsiveContainer width="100%" height="100%">
//                   <LineChart data={silver.history}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="time" />
//                     <YAxis />
//                     <Tooltip />
//                     <Line type="monotone" dataKey="price" stroke="#c0c0c0" strokeWidth={2} dot={false} />
//                   </LineChart>
//                 </ResponsiveContainer>
//               ) : (
//                 <div className="h-full flex items-center justify-center text-sm text-gray-400">No data</div>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="mt-6 text-xs text-gray-500">
//         Note: CoinGecko is used for Bitcoin (no API key needed). Metals-API / GoldAPI provide precious metals data and require API keys for production usage.
//       </div>
//     </div>
//   );
// }






// SignalsPage.jsx
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Sun, Moon } from "lucide-react";

/**
 * Unified Signals page
 * - Live BTC via CoinGecko (current price + 7-day hourly chart)
 * - Gold / Silver via GoldAPI or Metals-API if keys provided, otherwise fallback to metals.live
 * - Light / Dark mode toggle
 *
 * Requirements:
 *   npm install axios recharts lucide-react
 *   TailwindCSS configured in project
 *
 * Environment:
 *   REACT_APP_GOLDAPI_KEY  (optional)
 *   REACT_APP_METALS_API_KEY (optional)
 */

const POLL_MS = 20_000; // refresh every 20s (adjust as needed)

const useMounted = () => {
  const mounted = useRef(true);
  useEffect(() => () => (mounted.current = false), []);
  return mounted;
};

export default function SignalsPage() {
  const mounted = useMounted();

  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(true);

  // Data state
  const [btc, setBtc] = useState({ price: null, change24h: null, history: [] });
  const [gold, setGold] = useState({ price: null, change24h: null, history: [] });
  const [silver, setSilver] = useState({ price: null, change24h: null, history: [] });

  // Utility format
  const fmtPrice = (n, opts = {}) =>
    n === null || n === undefined
      ? "—"
      : n >= 1000
      ? `$${Number(n).toLocaleString(undefined, { maximumFractionDigits: opts.dp ?? 0 })}`
      : `$${Number(n).toLocaleString(undefined, { maximumFractionDigits: opts.dp ?? 2 })}`;

  // ----------------------
  // FETCH FUNCTIONS
  // ----------------------

  // 1) BTC from CoinGecko
  const fetchBTC = async () => {
    try {
      // current price + 24h change
      const cur = await axios.get("https://api.coingecko.com/api/v3/simple/price", {
        params: { ids: "bitcoin", vs_currencies: "usd", include_24hr_change: "true" },
        timeout: 8000,
      });

      // 7 days hourly market chart (CoinGecko)
      const hist = await axios.get(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart",
        { params: { vs_currency: "usd", days: 7, interval: "hourly" }, timeout: 10000 }
      );

      const price = cur.data?.bitcoin?.usd ?? null;
      const change24h = cur.data?.bitcoin?.usd_24h_change ?? null;
      const history = (hist.data?.prices || []).map(([ts, p]) => ({
        time: new Date(ts).toLocaleString(undefined, { month: "short", day: "numeric", hour: "numeric" }),
        price: Number(p.toFixed(2)),
      }));

      if (!mounted.current) return;
      setBtc({ price, change24h, history });
    } catch (err) {
      console.warn("BTC fetch failed:", err?.message || err);
    }
  };

  // 2) Gold & Silver fetcher (tries multiple providers)
  const fetchPrecious = async () => {
    // Helpers for providers
    const goldApiKey = process.env.REACT_APP_GOLDAPI_KEY;
    const metalsApiKey = process.env.REACT_APP_METALS_API_KEY;

    // Try GoldAPI (https://www.goldapi.io/) if key present
    if (goldApiKey) {
      try {
        // Gold
        const [gRes, sRes] = await Promise.all([
          axios.get("https://www.goldapi.io/api/XAU/USD", { headers: { "x-access-token": goldApiKey }, timeout: 8000 }),
          axios.get("https://www.goldapi.io/api/XAG/USD", { headers: { "x-access-token": goldApiKey }, timeout: 8000 }),
        ]);
        // Both endpoints return object with price
        if (!mounted.current) return;
        const gPrice = gRes.data?.price ?? null;
        const sPrice = sRes.data?.price ?? null;
        // Build simple pseudo-history by sampling current price (since goldapi historical may be plan-restricted)
        const sampleHistory = (p) =>
          p
            ? Array.from({ length: 24 }).map((_, i) => ({ time: `${i}:00`, price: Number((p * (1 + (Math.random() - 0.5) * 0.01)).toFixed(2)) }))
            : [];
        setGold((g) => ({ ...g, price: gPrice, history: sampleHistory(gPrice), change24h: null }));
        setSilver((s) => ({ ...s, price: sPrice, history: sampleHistory(sPrice), change24h: null }));
        return;
      } catch (e) {
        console.warn("GoldAPI failed (falling back):", e?.message || e);
      }
    }

    // Try Metals-API (requires key)
    if (metalsApiKey) {
      try {
        // Example endpoints:
        // https://metals-api.com/api/latest?access_key=KEY&base=USD&symbols=XAU,XAG
        const res = await axios.get("https://metals-api.com/api/latest", {
          params: { access_key: metalsApiKey, base: "USD", symbols: "XAU,XAG" },
          timeout: 9000,
        });
        if (res.data && res.data.rates) {
          const gRate = res.data.rates.XAU ?? null;
          const sRate = res.data.rates.XAG ?? null;
          // Build simple time-series by sampling:
          const sampleHistory = (p) =>
            p
              ? Array.from({ length: 24 }).map((_, i) => ({ time: `${i}:00`, price: Number((p * (1 + (Math.random() - 0.5) * 0.01)).toFixed(2)) }))
              : [];
          if (!mounted.current) return;
          setGold((g) => ({ ...g, price: gRate, history: sampleHistory(gRate), change24h: null }));
          setSilver((s) => ({ ...s, price: sRate, history: sampleHistory(sRate), change24h: null }));
          return;
        }
      } catch (e) {
        console.warn("Metals-API failed (falling back):", e?.message || e);
      }
    }

    // Final fallback: metals.live public feed (no key). Response format may differ by endpoint.
    // Example endpoint that many use: https://api.metals.live/v1/spot
    // The endpoint returns array of {symbol: 'XAU', price: 1800.12} etc OR {gold: price,...}
    try {
      const fallback = await axios.get("https://api.metals.live/v1/spot", { timeout: 8000 });
      // metals.live often returns [{symbol:'XAU',price:...}, ...] or an object array. We'll normalize.
      const payload = fallback.data;
      if (Array.isArray(payload)) {
        const gItem = payload.find((p) => String(p.symbol).toUpperCase().includes("XAU")) || payload.find((p) => p.gold);
        const sItem = payload.find((p) => String(p.symbol).toUpperCase().includes("XAG")) || payload.find((p) => p.silver);
        const gPrice = gItem?.price ?? gItem?.gold ?? null;
        const sPrice = sItem?.price ?? sItem?.silver ?? null;
        const sampleHistory = (p) =>
          p
            ? Array.from({ length: 24 }).map((_, i) => ({ time: `${i}:00`, price: Number((p * (1 + (Math.random() - 0.5) * 0.01)).toFixed(2)) }))
            : [];
        if (!mounted.current) return;
        setGold((g) => ({ ...g, price: gPrice, history: sampleHistory(gPrice), change24h: null }));
        setSilver((s) => ({ ...s, price: sPrice, history: sampleHistory(sPrice), change24h: null }));
        return;
      } else if (payload?.gold || payload?.silver) {
        const gPrice = payload.gold ?? null;
        const sPrice = payload.silver ?? null;
        const sampleHistory = (p) =>
          p
            ? Array.from({ length: 24 }).map((_, i) => ({ time: `${i}:00`, price: Number((p * (1 + (Math.random() - 0.5) * 0.01)).toFixed(2)) }))
            : [];
        if (!mounted.current) return;
        setGold((g) => ({ ...g, price: gPrice, history: sampleHistory(gPrice), change24h: null }));
        setSilver((s) => ({ ...s, price: sPrice, history: sampleHistory(sPrice), change24h: null }));
        return;
      }
    } catch (e) {
      console.warn("metals.live fallback failed:", e?.message || e);
    }

    // If everything fails, leave gold/silver as-is (UI will show No data)
    return;
  };

  // Combined fetch
  const fetchAll = async () => {
    setLoading(true);
    await Promise.all([fetchBTC(), fetchPrecious()]);
    if (mounted.current) setLoading(false);
  };

  useEffect(() => {
    fetchAll();
    const id = setInterval(fetchAll, POLL_MS);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Theme toggler
  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  // ----------------------
  // Small Chart Card
  // ----------------------
  function AssetCard({ title, symbol, data, color = "blue" }) {
    const primary = color === "blue" ? "#2563EB" : color === "gold" ? "#d4af37" : color === "green" ? "#10b981" : "#888";
    return (
      <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow p-4 border border-gray-100 dark:border-neutral-700">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">{title}</h3>
            <p className="text-xs text-gray-400">{symbol} • USD</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {fmtPrice(data.price, { dp: data.price >= 1000 ? 0 : 2 })}
            </div>
            <div className={`text-sm mt-1 ${data.change24h && data.change24h >= 0 ? "text-green-600" : "text-red-500"}`}>
              {data.change24h !== null && data.change24h !== undefined
                ? `${Number(data.change24h).toFixed(2)}% (24h)`
                : "—"}
            </div>
          </div>
        </div>

        <div className="mt-3 h-28">
          {data.history && data.history.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.history}>
                <CartesianGrid strokeDasharray="3 3" stroke={theme === "dark" ? "#1f2937" : "#f1f5f9"} />
                <XAxis dataKey="time" hide />
                <YAxis hide domain={["dataMin", "dataMax"]} />
                <Tooltip />
                <Line type="monotone" dataKey="price" stroke={primary} strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-full flex items-center justify-center text-sm text-gray-400">No history</div>
          )}
        </div>

        <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">Last updated: {new Date().toLocaleTimeString()}</div>
      </div>
    );
  }

  // ----------------------
  // Layout render
  // ----------------------
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">Unified Signals</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Live market & signals for BTC, Gold and Silver — updated automatically.</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-sm text-gray-500 dark:text-gray-400 mr-3">Theme</div>
            <button
              onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
              className="p-2 rounded-md bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 shadow-sm"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="text-gray-700" /> : <Sun className="text-yellow-400" />}
            </button>
          </div>
        </div>

        {/* Top small cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <AssetCard title="Bitcoin" symbol="BTC" data={btc} color="blue" />
          <AssetCard title="Gold" symbol="XAU" data={gold} color="gold" />
          <AssetCard title="Silver" symbol="XAG" data={silver} color="green" />
        </section>

        {/* Large charts / detail area */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* BTC large chart */}
          <div className="col-span-2 bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-gray-100 dark:border-neutral-700 shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Bitcoin — 7 day</h3>
              <div className="text-sm text-gray-500 dark:text-gray-400">{btc.price ? fmtPrice(btc.price) : "—"}</div>
            </div>

            <div className="h-64">
              {btc.history && btc.history.length ? (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={btc.history}>
                    <CartesianGrid strokeDasharray="3 3" stroke={theme === "dark" ? "#1f2937" : "#f1f5f9"} />
                    <XAxis dataKey="time" tick={{ fontSize: 11 }} />
                    <YAxis tickFormatter={(v) => `$${v}`} />
                    <Tooltip />
                    <Line type="monotone" dataKey="price" stroke="#2563EB" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full flex items-center justify-center text-sm text-gray-400">Loading chart…</div>
              )}
            </div>

            <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              Live price & simple signal summary:
              <div className="mt-2 flex gap-3">
                <div className="px-3 py-2 bg-green-50 dark:bg-green-900/20 rounded text-green-700 dark:text-green-300">Buy signal: simulated</div>
                <div className="px-3 py-2 bg-yellow-50 dark:bg-yellow-900/10 rounded text-yellow-700 dark:text-yellow-300">Volatility: medium</div>
                <div className="px-3 py-2 bg-indigo-50 dark:bg-indigo-900/10 rounded text-indigo-700 dark:text-indigo-300">24h change: {btc.change24h ? `${Number(btc.change24h).toFixed(2)}%` : "—"}</div>
              </div>
            </div>
          </div>

          {/* Right column: mini charts + info box */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-gray-100 dark:border-neutral-700 shadow">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Overview</h3>

            <div className="space-y-6">
              <div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Gold (XAU)</div>
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">{fmtPrice(gold.price)}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Spot price</div>
                  </div>
                  <div className="w-28 h-16">
                    {gold.history && gold.history.length ? (
                      <ResponsiveContainer width="100%" height="100%">{/* tiny chart */}
                        <LineChart data={gold.history}><Line dataKey="price" stroke="#d4af37" dot={false} strokeWidth={2} /></LineChart>
                      </ResponsiveContainer>
                    ) : (
                      <div className="text-xs text-gray-400">No data</div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Silver (XAG)</div>
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">{fmtPrice(silver.price)}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Spot price</div>
                  </div>
                  <div className="w-28 h-16">
                    {silver.history && silver.history.length ? (
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={silver.history}><Line dataKey="price" stroke="#10b981" dot={false} strokeWidth={2} /></LineChart>
                      </ResponsiveContainer>
                    ) : (
                      <div className="text-xs text-gray-400">No data</div>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-neutral-800 p-3 rounded">
                <div className="text-sm font-medium text-gray-700 dark:text-gray-200">Action Required</div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  To enable live metals pricing use GoldAPI or Metals-API keys in your environment:
                  <br />
                  <span className="font-mono text-xs">REACT_APP_GOLDAPI_KEY</span> or <span className="font-mono text-xs">REACT_APP_METALS_API_KEY</span>.
                </p>
                <div className="mt-3">
                  <button className="px-3 py-2 bg-blue-600 text-white rounded text-sm">Start Actions</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer note */}
        <div className="mt-8 text-xs text-gray-500">
          Data sources: CoinGecko (Bitcoin). Precious metals from GoldAPI / Metals-API or public fallback endpoints. Charts update every {POLL_MS / 1000}s.
        </div>
      </div>
    </div>
  );
}
