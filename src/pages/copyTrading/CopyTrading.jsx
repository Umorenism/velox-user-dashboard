
import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

const platforms = ["MT4", "MT5", "WebTrader"];
const risks = ["Low", "Medium", "High"];
const brokers = ["IC Markets", "Pepperstone", "FXTM", "XM", "Other"];

export default function CopyTrading() {
  const [platform, setPlatform] = useState("");
  const [broker, setBroker] = useState("");
  const [otherBroker, setOtherBroker] = useState("");
  const [server, setServer] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [traderPassword, setTraderPassword] = useState("");
  const [risk, setRisk] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [showPlatform, setShowPlatform] = useState(false);
  const [showBroker, setShowBroker] = useState(false);
  const [showRisk, setShowRisk] = useState(false);

  const [brokerSearch, setBrokerSearch] = useState("");

  const filteredBrokers = brokers.filter((b) =>
    b.toLowerCase().includes(brokerSearch.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Copy Trading Setup
      </h1>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-6">
        {/* Platform */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Platform
          </label>
          <div className="relative">
            <button
              onClick={() => setShowPlatform(!showPlatform)}
              className="w-full flex justify-between items-center px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-left text-sm"
            >
              {platform || "Select Platform"}
              <ChevronDown size={16} />
            </button>
            {showPlatform && (
              <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
                {platforms.map((p) => (
                  <button
                    key={p}
                    onClick={() => {
                      setPlatform(p);
                      setShowPlatform(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Broker */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Broker
          </label>
          <div className="relative">
            <button
              onClick={() => setShowBroker(!showBroker)}
              className="w-full flex justify-between items-center px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-left text-sm"
            >
              {broker || "Select Broker"}
              <ChevronDown size={16} />
            </button>
            {showBroker && (
              <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-700 rounded-lg shadow-lg p-2">
                <div className="relative mb-2">
                  <Search
                    className="absolute left-3 top-2.5 text-gray-400"
                    size={16}
                  />
                  <input
                    type="text"
                    placeholder="Search broker..."
                    value={brokerSearch}
                    onChange={(e) => setBrokerSearch(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 text-sm bg-gray-100 dark:bg-gray-600 rounded-md"
                  />
                </div>
                {filteredBrokers.map((b) => (
                  <button
                    key={b}
                    onClick={() => {
                      setBroker(b);
                      setShowBroker(false);
                      if (b !== "Other") setOtherBroker("");
                    }}
                    className="block w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded"
                  >
                    {b}
                  </button>
                ))}
              </div>
            )}
          </div>
          {broker === "Other" && (
            <input
              type="text"
              placeholder="Enter broker name"
              value={otherBroker}
              onChange={(e) => setOtherBroker(e.target.value)}
              className="mt-2 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
            />
          )}
        </div>

        {/* Server */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Server
          </label>
          <input
            type="text"
            placeholder="e.g., IC Markets-Live01"
            value={server}
            onChange={(e) => setServer(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
          />
        </div>

        {/* Account Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Account Number
          </label>
          <input
            type="text"
            placeholder="12345678"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
          />
        </div>

        {/* Risk */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Risk
          </label>
          <div className="relative">
            <button
              onClick={() => setShowRisk(!showRisk)}
              className="w-full flex justify-between items-center px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-left text-sm"
            >
              {risk || "Select Risk"}
              <ChevronDown size={16} />
            </button>
            {showRisk && (
              <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
                {risks.map((r) => (
                  <button
                    key={r}
                    onClick={() => {
                      setRisk(r);
                      setShowRisk(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    {r}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Trader Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Trader Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            value={traderPassword}
            onChange={(e) => setTraderPassword(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
          />
        </div>

        {/* Terms & Conditions */}
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="terms"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            className="mt-1 w-4 h-4 text-[#00A991] border-gray-300 rounded focus:ring-[#00A991]"
          />
          <label
            htmlFor="terms"
            className="text-sm text-gray-600 dark:text-gray-300"
          >
            I have read and agree to the{" "}
            <a
              href="/terms-and-conditions"
              className="text-[#00A991] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms and Conditions
            </a>
            .
          </label>
        </div>

        {/* Submit */}
        <button
          disabled={!termsAccepted}
          className={`w-full mt-6 py-3 rounded-lg font-semibold transition ${
            termsAccepted
              ? "bg-[#00A991] text-white hover:bg-[#008f7a]"
              : "bg-gray-400 text-gray-100 cursor-not-allowed"
          }`}
        >
          Connect Account
        </button>
      </div>
    </div>
  );
}
