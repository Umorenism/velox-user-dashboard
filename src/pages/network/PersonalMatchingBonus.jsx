
// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts";

// export default function PersonalMatchingBonus() {
//   const bonusData = [
//     { level: "Level 1", amount: 1200 },
//     { level: "Level 2", amount: 900 },
//     { level: "Level 3", amount: 500 },
//   ];

//   const breakdownData = [
//     { name: "Earned", value: 60 },
//     { name: "Pending", value: 30 },
//     { name: "Withdrawn", value: 10 },
//   ];

//   const COLORS = ["#22c55e", "#facc15", "#3b82f6"]; // green, yellow, blue

//   return (
//     <div className="min-h-screen bg-gray-50 p-6 space-y-6">
//       {/* Top Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Left Card */}
//         <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
//           <div>
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">
//               Velox Personal Matching Bonus
//             </h2>

//             <div className="grid grid-cols-2 gap-y-3 text-sm">
//               <div>
//                 <p className="text-gray-500">Eligibility:</p>
//                 <p className="text-green-600 font-medium">Eligible</p>
//               </div>
//               <div>
//                 <p className="text-gray-500">Amount Earned:</p>
//                 <p className="text-gray-800 font-medium">$2,480</p>
//               </div>

//               <div>
//                 <p className="text-gray-500">Pending Bonus:</p>
//                 <p className="text-orange-500 font-medium">$780</p>
//               </div>
//               <div>
//                 <p className="text-gray-500">Total Withdrawn:</p>
//                 <p className="text-blue-500 font-medium">$520</p>
//               </div>
//             </div>
//           </div>

//           <div className="flex justify-between items-center mt-6">
//             <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
//               Withdraw Earnings
//             </button>
//             <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition">
//               View History
//             </button>
//           </div>
//         </div>

//         {/* Right Card - Bonus Distribution */}
//         <div className="bg-white rounded-xl shadow p-6">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">
//             Bonus Distribution Overview
//           </h3>
//           <BarChart
//             width={450}
//             height={250}
//             data={bonusData}
//             className="mx-auto"
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="level" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="amount" fill="#3b82f6" barSize={50} radius={[6, 6, 0, 0]} />
//           </BarChart>
//         </div>
//       </div>

//       {/* Bottom Section - Earnings Breakdown */}
//       <div className="bg-white rounded-xl shadow p-6">
//         <h3 className="text-lg font-semibold text-gray-800 mb-4">
//           Earnings Breakdown
//         </h3>
//         <div className="flex justify-center">
//           <PieChart width={400} height={300}>
//             <Pie
//               data={breakdownData}
//               cx="50%"
//               cy="50%"
//               labelLine={false}
//               outerRadius={100}
//               fill="#8884d8"
//               dataKey="value"
//               label={({ name, percent }) =>
//                 `${name} ${(percent * 100).toFixed(0)}%`
//               }
//             >
//               {breakdownData.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={COLORS[index]} />
//               ))}
//             </Pie>
//             <Tooltip />
//             <Legend />
//           </PieChart>
//         </div>
//       </div>
//     </div>
//   );
// }






import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { CheckCircle, Clock, DollarSign, TrendingUp, History, Moon, Sun } from "lucide-react";
import { getUserProfile } from "../../api/authApi";

const PersonalMatchingBonus = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  /* ────── DARK MODE SETUP ────── */
  useEffect(() => {
    // Cek preferensi dari localStorage
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  /* ────── FETCH PROFILE ────── */
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token =
          localStorage.getItem("authToken") ||
          localStorage.getItem("token") ||
          sessionStorage.getItem("authToken");

        if (!token) {
          setError("No auth token found. Please log in.");
          setLoading(false);
          return;
        }

        const data = await getUserProfile(token);
        if (!data?.userId) throw new Error("Invalid profile data");
        setProfile(data);
      } catch (err) {
        setError(err.message || "Failed to load profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  /* ────── LOADING STATE ────── */
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-neutral-900 dark:to-neutral-800 flex items-center justify-center p-6 transition-colors">
        <div className="flex items-center space-x-3">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-[#00A991]" />
          <span className="text-lg font-medium text-gray-700 dark:text-gray-300">Loading Matching Bonus…</span>
        </div>
      </div>
    );
  }

  /* ────── ERROR STATE ────── */
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-neutral-900 dark:to-neutral-800 flex items-center justify-center p-6 transition-colors">
        <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl p-6 max-w-md text-center">
          <p className="text-red-800 dark:text-red-300 font-medium">{error}</p>
          <button
            onClick={() => (window.location.href = "/login")}
            className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 dark:text-gray-400">
        <p>No user data found. Please log in again.</p>
      </div>
    );
  }

  /* ────── EXTRACT DATA ────── */
  const mb = profile.personalMatchingBonus || {};
  const bonusHistory = profile.bonusHistory || [];

  const eligibility = mb.eligibility ?? false;
  const earned = mb.earned ?? 0;
  const pending = mb.pending ?? 0;
  const withdrawn = mb.withdrawn ?? 0;
  const available = earned - withdrawn;

  const formatCurrency = (val) => `$${val?.toLocaleString() ?? 0}`;

  // Pie Chart Data
  const pieData = [
    { name: "Earned", value: earned },
    { name: "Pending", value: pending },
    { name: "Withdrawn", value: withdrawn },
  ].filter((d) => d.value > 0);

  const COLORS = ["#22c55e", "#facc15", "#3b82f6"];

  // Bar Chart: Simulate matching levels
  const barData = [
    { level: "Level 1", amount: Math.floor(earned * 0.6) },
    { level: "Level 2", amount: Math.floor(earned * 0.3) },
    { level: "Level 3", amount: Math.floor(earned * 0.1) },
  ];

  /* ────── MAIN UI ────── */
  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 md:p-6 lg:p-8 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        {/* Header + Theme Toggle */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Velox Capital <span className="text-[#00A991]">Personal Matching Bonus</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Earn from your team's performance</p>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="mt-4 md:mt-0 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-gray-700" />
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* LEFT CARD: Summary */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 border border-gray-200 dark:border-gray-700 transition-colors">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">Matching Bonus Summary</h2>
              {eligibility ? (
                <span className="flex items-center gap-2 text-green-600 dark:text-green-400 font-medium">
                  <CheckCircle className="h-5 w-5" />
                  Eligible
                </span>
              ) : (
                <span className="text-red-600 dark:text-red-400 font-medium">Not Eligible</span>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-xl border border-green-200 dark:border-green-800">
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Earned</p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">{formatCurrency(earned)}</p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-xl border border-yellow-200 dark:border-yellow-800">
                <p className="text-sm text-gray-600 dark:text-gray-400">Pending</p>
                <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{formatCurrency(pending)}</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-gray-600 dark:text-gray-400">Withdrawn</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{formatCurrency(withdrawn)}</p>
              </div>
              <div className="bg-gradient-to-r from-[#00A991]/10 to-[#10B981]/10 dark:from-[#00A991]/20 dark:to-[#10B981]/20 p-4 rounded-xl border border-[#00A991]/20 dark:border-[#00A991]/40">
                <p className="text-sm text-gray-600 dark:text-gray-400">Available</p>
                <p className="text-2xl font-bold text-[#00A991]">{formatCurrency(available)}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 py-3 bg-[#00A991] hover:bg-[#009981] text-white font-medium rounded-lg transition flex items-center justify-center gap-2">
                <DollarSign className="h-5 w-5" />
                Withdraw Now
              </button>
              <button className="flex-1 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition flex items-center justify-center gap-2">
                <History className="h-5 w-5" />
                View History
              </button>
            </div>
          </div>

          {/* RIGHT CARD: Bar Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Bonus by Level (Estimated)</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={barData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#374151" : "#f0f0f0"} />
                <XAxis dataKey="level" tick={{ fontSize: 12, fill: darkMode ? "#9ca3af" : "#6b7280" }} />
                <YAxis tick={{ fontSize: 12, fill: darkMode ? "#9ca3af" : "#6b7280" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: darkMode ? "#1f2937" : "#ffffff",
                    border: `1px solid ${darkMode ? "#374151" : "#e5e7eb"}`,
                    borderRadius: "8px",
                  }}
                  labelStyle={{ color: darkMode ? "#e5e7eb" : "#374151" }}
                  formatter={(v) => formatCurrency(v)}
                />
                <Bar dataKey="amount" fill="#3b82f6" radius={[8, 8, 0, 0]} barSize={50}>
                  {barData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* BOTTOM SECTION: Pie Chart + History */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Pie Chart */}
          <div className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Earnings Breakdown</h3>
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={3}
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  labelStyle={{ fill: darkMode ? "#e5e7eb" : "#374151", fontSize: 12 }}
                >
                  {pieData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: darkMode ? "#1f2937" : "#ffffff",
                    border: `1px solid ${darkMode ? "#374151" : "#e5e7eb"}`,
                    borderRadius: "8px",
                  }}
                  labelStyle={{ color: darkMode ? "#e5e7eb" : "#374151" }}
                  formatter={(v) => formatCurrency(v)}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bonus History */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Recent Bonus Activity</h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {bonusHistory.length > 0 ? (
                bonusHistory.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-full ${
                          h.status === "approved"
                            ? "bg-green-100 dark:bg-green-900/50"
                            : "bg-yellow-100 dark:bg-yellow-900/50"
                        }`}
                      >
                        {h.status === "approved" ? (
                          <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                        ) : (
                          <Clock className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {h.type.replace(/_/g, " ")}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {  new Date(h.date).toLocaleDateString()} at{" "}
                          {new Date(h.date).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-[#00A991]">+{formatCurrency(h.amount)}</p>
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${
                          h.status === "approved"
                            ? "bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300"
                            : "bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300"
                        }`}
                      >
                        {h.status}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 dark:text-gray-400 py-8">No bonus activity yet</p>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-xs text-gray-500 dark:text-gray-400">
          <p>Velox Capital © 2025 | Matching Bonus Engine v2.0</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalMatchingBonus;