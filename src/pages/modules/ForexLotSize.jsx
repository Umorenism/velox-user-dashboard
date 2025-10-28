import React, { useState } from "react";

export default function ForexLotSize() {
  const [currencyPair, setCurrencyPair] = useState("");
  const [accountCurrency, setAccountCurrency] = useState("");
  const [balance, setBalance] = useState("");
  const [riskPercent, setRiskPercent] = useState("");
  const [stopLoss, setStopLoss] = useState("");
  const [result, setResult] = useState(null);

  const calculateLotSize = () => {
    const pipValue = 10; // standard pip value for USD pairs
    const riskAmount = (balance * (riskPercent / 100)).toFixed(2);
    const lotSize = (riskAmount / (stopLoss * pipValue)).toFixed(2);

    setResult({
      standard: lotSize,
      mini: (lotSize * 10).toFixed(2),
      micro: (lotSize * 100).toFixed(2),
      risk: riskAmount,
      units: (lotSize * 100000).toFixed(0),
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0e2a] text-white flex flex-col md:flex-row p-4 md:p-10">
      {/* Sidebar */}
      <div className="bg-[#0d1238] border border-gray-700 rounded-xl w-full md:w-72 p-5 mb-6 md:mb-0 md:mr-10">
        <h3 className="font-semibold text-gray-300 text-lg mb-3">
          Trading Calculators
        </h3>
        <ul className="text-sm space-y-2 text-gray-400">
          <li className="font-semibold text-white">
            ▾ Risk & Trade Planning
          </li>
          <li className="pl-3 hover:text-yellow-400 cursor-pointer">
            Position Size Calculator
          </li>
          <li className="pl-3 text-yellow-400">Lot Size Calculator</li>
          <li className="pl-3 hover:text-yellow-400 cursor-pointer">
            Stop Loss Take Profit Calc
          </li>
          <li className="pl-3 hover:text-yellow-400 cursor-pointer">
            Risk to Reward Calculator
          </li>
          <li className="pl-3 hover:text-yellow-400 cursor-pointer">
            Breakeven & Win Rate
          </li>
          <li className="pl-3 hover:text-yellow-400 cursor-pointer">
            Risk of Ruin Calculator
          </li>
          <li className="pl-3 hover:text-yellow-400 cursor-pointer">
            Margin Call Calculator
          </li>
        </ul>

        <h3 className="font-semibold text-gray-300 text-lg mt-6">▸ Forex Calculators</h3>
        <h3 className="font-semibold text-gray-300 text-lg mt-3">▸ Technical Analysis</h3>
        <h3 className="font-semibold text-gray-300 text-lg mt-3">▸ Profit & Performance</h3>
      </div>

      {/* Calculator Section */}
      <div className="bg-gray-100 text-gray-800 rounded-xl flex-1 p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-6">
          Forex Lot Size Calculator
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">
                Currency Pair
              </label>
              <select
                value={currencyPair}
                onChange={(e) => setCurrencyPair(e.target.value)}
                className="w-full p-3 rounded-full bg-[#0d1238] text-white"
              >
                <option value="">Select Currency Pair</option>
                <option value="EURUSD">EUR/USD</option>
                <option value="GBPUSD">GBP/USD</option>
                <option value="USDJPY">USD/JPY</option>
                <option value="AUDUSD">AUD/USD</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Account Currency
              </label>
              <select
                value={accountCurrency}
                onChange={(e) => setAccountCurrency(e.target.value)}
                className="w-full p-3 rounded-full bg-[#0d1238] text-white"
              >
                <option value="">Select Currency</option>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Account Balance
              </label>
              <input
                type="number"
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
                placeholder="Enter balance"
                className="w-full p-3 rounded-full bg-gray-200"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Risk %
              </label>
              <input
                type="number"
                value={riskPercent}
                onChange={(e) => setRiskPercent(e.target.value)}
                placeholder="Enter risk percentage"
                className="w-full p-3 rounded-full bg-gray-200"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Stop Loss in Pips
              </label>
              <input
                type="number"
                value={stopLoss}
                onChange={(e) => setStopLoss(e.target.value)}
                placeholder="Enter stop loss in pips"
                className="w-full p-3 rounded-full bg-gray-200"
              />
            </div>

            <button
              onClick={calculateLotSize}
              className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-full mt-3"
            >
              Calculate
            </button>
          </div>

          {/* Result Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Result</h3>
            <div className="border-t-2 border-yellow-400 pt-4">
              {result ? (
                <div className="space-y-3">
                  <p className="text-3xl font-bold">{result.standard}</p>
                  <div className="grid grid-cols-2 text-sm gap-y-2">
                    <p>Risk:</p> <p>${result.risk}</p>
                    <p>Units:</p> <p>{result.units}</p>
                    <p>Mini Lots:</p> <p>{result.mini}</p>
                    <p>Micro Lots:</p> <p>{result.micro}</p>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500">Enter values and click calculate</p>
              )}
            </div>

            <div className="border-t mt-5 pt-3 text-sm text-gray-600 leading-relaxed">
              <p>
                About to enter a trade? Check out all our{" "}
                <a href="#" className="text-blue-500 underline">
                  trading calculators
                </a>
                .
              </p>
              <p className="mt-2">
                Stay ahead of the game by analyzing your trades with precision,
                ensuring accurate and long-term profitable trading decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
