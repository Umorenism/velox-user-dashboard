
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  ArrowDownCircle,
  Shield,
  LifeBuoy,
  LogOut,
  Search,
  X,
  ChevronDown,
  ChevronUp,
  Handshake,
  Sun,
  Moon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoimg from "../../assets/velox.svg";
import profilePic from "../../assets/profile.svg";
import { useTheme } from "../../context/ThemeContext";

export default function SideBar({ closeSidebar }) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // ✅ Hook from ThemeContext

  const toggleSettings = () => setIsSettingsOpen((prev) => !prev);
  const toggleWallet = () => setIsWalletOpen((prev) => !prev);

  const topLinks = [
    { to: "/dashboard", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { to: "/dashboard/users", label: "User Management", icon: <Users size={18} /> },
    { to: "/dashboard/transactions", label: "Transactions", icon: <CreditCard size={18} /> },
    { to: "/dashboard/part", label: "Partners", icon: <Handshake size={18} /> },
  ];

  const walletSubLinks = [
    { to: "/dashboard/wallet/deposit", label: "Deposit" },
    { to: "/dashboard/wallet/withdrawal", label: "Withdrawal" },
    { to: "/dashboard/wallet/internal-withdraw", label: "Internal Withdraw" },
  ];

  const settingsSubLinks = [
    { to: "/dashboard/settings", label: "Active Log Page" },
    { to: "/dashboard/company-profile", label: "Company Profile" },
    { to: "/dashboard/permission", label: "Roles & Permission" },
    { to: "/dashboard/email", label: "Email Broadcasting" },
  ];

  const bottomLinks = [
    { to: "/dashboard/support", label: "Support", icon: <LifeBuoy size={18} /> },
  ];

  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      exit={{ x: -300 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="w-72 bg-white dark:bg-neutral-900 dark:text-white shadow-md h-screen p-4 flex flex-col justify-between"
    >
      {/* =============== TOP SECTION =============== */}
      <div>
        {/* Mobile Header */}
        <div className="flex justify-between items-center mb-4 md:hidden">
          <img src={logoimg} alt="Velox Logo" className="w-20 object-contain" />
          <button
            onClick={closeSidebar}
            className="text-gray-600 dark:text-gray-300 hover:text-red-500 transition"
          >
            <X size={22} />
          </button>
        </div>

        {/* Logo */}
        <div className="hidden md:flex justify-start mb-6">
          <img src={logoimg} alt="Velox Logo" className="w-20 object-contain" />
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white rounded-[6px] pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00A991]"
          />
        </div>

        {/* Theme Toggle */}
        <div className="flex md:hidden  justify-between items-center px-3 mb-6">
          <span className="text-sm  font-medium text-gray-600 dark:text-gray-300">
            {theme === "dark" ? "Dark Mode" : "Light Mode"}
          </span>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {theme === "dark" ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-gray-700" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="space-y-3">
          {topLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={closeSidebar}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "bg-[#FFECE5] text-black"
                    : "text-gray-600 dark:text-white hover:bg-[#FFECE5] dark:hover:bg-gray-800"
                }`
              }
            >
              {link.icon}
              {link.label}
            </NavLink>
          ))}

          {/* Wallet Accordion */}
          <div>
            <button
              onClick={toggleWallet}
              className="flex justify-between items-center w-full px-3 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-white hover:bg-[#FFECE5] dark:hover:bg-gray-800 transition"
            >
              <div className="flex items-center gap-3">
                <ArrowDownCircle size={18} />
                <span>Wallet</span>
              </div>
              {isWalletOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            <AnimatePresence>
              {isWalletOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-8 mt-2 space-y-2 border-l border-gray-200 dark:border-gray-700 pl-3"
                >
                  {walletSubLinks.map((sublink) => (
                    <NavLink
                      key={sublink.to}
                      to={sublink.to}
                      onClick={closeSidebar}
                      className={({ isActive }) =>
                        `block px-2 py-1 rounded-md text-sm transition-all ${
                          isActive
                            ? "bg-[#FFECE5] text-black"
                            : "text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white"
                        }`
                      }
                    >
                      {sublink.label}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Settings Accordion */}
          <div>
            <button
              onClick={toggleSettings}
              className="flex justify-between items-center w-full px-3 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-white hover:bg-[#FFECE5] dark:hover:bg-gray-800 transition"
            >
              <div className="flex items-center gap-3">
                <Shield size={18} />
                <span>Security & Settings</span>
              </div>
              {isSettingsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            <AnimatePresence>
              {isSettingsOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-8 mt-2 space-y-2 border-l border-gray-200 dark:border-gray-700 pl-3"
                >
                  {settingsSubLinks.map((sublink) => (
                    <NavLink
                      key={sublink.to}
                      to={sublink.to}
                      onClick={closeSidebar}
                      className={({ isActive }) =>
                        `block px-2 py-1 rounded-md text-sm transition-all ${
                          isActive
                            ? "bg-[#FFECE5] text-black"
                            : "text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white"
                        }`
                      }
                    >
                      {sublink.label}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <hr className="mt-10 border-gray-200 dark:border-gray-700" />
      </div>

      {/* =============== BOTTOM SECTION =============== */}
      <div className="space-y-4 mb-20">
        {bottomLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            onClick={closeSidebar}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? "bg-gray-200 text-black"
                  : "text-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800"
              }`
            }
          >
            {link.icon}
            {link.label}
          </NavLink>
        ))}

        {/* Profile + Logout */}
        <div className="flex items-center justify-between dark:bg-gray-800 rounded-lg p-3">
          <div className="flex items-center gap-3 relative">
            <img
              src={profilePic}
              alt="Admin"
              className="w-20 h-20 rounded-full object-cover border border-gray-300 dark:border-gray-700"
            />
            <div>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                Alison Eyo
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                admin@alison.com
              </p>
            </div>
          </div>
          <button className="text-gray-500 hover:text-red-500 transition">
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </motion.aside>
  );
}
