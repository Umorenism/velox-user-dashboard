
// src/components/Header.jsx
import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { UserContext } from "../../routes/UserContext";
import {
  Sun,
  Moon,
  Bell,
  MessageSquare,
  Settings,
  Search,
  User,
  LogOut,
  Menu,
} from "lucide-react";
import profilePic from "../../assets/profile.svg";
import { useNavigate } from "react-router-dom";

const DropdownItem = ({ icon, label, route, danger, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (route) {
      const fullPath = route.startsWith("/") ? route : `/dashboard/${route}`;
      navigate(fullPath);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full flex items-center gap-3 px-4 py-2 text-sm text-left ${
        danger
          ? "text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
          : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-700"
      } transition`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default function Header({ toggleSidebar }) {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 md:px-6 py-2 bg-white dark:bg-neutral-900 dark:text-white shadow-md relative">
      <div className="flex items-center gap-3 w-full max-w-md">
        <button
          onClick={toggleSidebar}
          className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800"
          aria-label="Toggle sidebar"
        >
          <Menu size={22} />
        </button>
        <div className="relative w-full hidden sm:block">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-9 pr-4 py-2 rounded-md bg-transparent text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00A991]"
          />
        </div>
      </div>
      <div className="flex items-center sm:space-x-5">
        <button
          onClick={toggleTheme}
          className="hidden sm:flex items-center gap-2 px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full transition duration-300"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          <span className="hidden sm:inline text-sm font-medium text-gray-700 dark:text-gray-200">
            {theme === "dark" ? "Dark" : "Light"}
          </span>
          <div className="relative w-10 h-5 bg-gray-300 dark:bg-gray-600 rounded-full p-1">
            <span
              className={`absolute top-0.5 left-0.5 flex items-center justify-center w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                theme === "dark" ? "translate-x-5" : "translate-x-0"
              }`}
            >
              {theme === "dark" ? (
                <Moon size={12} className="text-gray-700" />
              ) : (
                <Sun size={12} className="text-yellow-500" />
              )}
            </span>
          </div>
        </button>
        <div className="flex items-center space-x-3 sm:space-x-4 text-gray-500 dark:text-gray-300">
          <MessageSquare
            className="cursor-pointer hover:text-[#00A991]"
            size={20}
            aria-label="Messages"
          />
          <Bell
            className="cursor-pointer hover:text-[#00A991]"
            size={20}
            aria-label="Notifications"
          />
          <Settings
            className="hidden sm:block cursor-pointer hover:text-[#00A991]"
            size={20}
            aria-label="Settings"
          />
        </div>
        <div
          className="relative"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <img
            src={user?.profilePic || profilePic}
            alt={user?.name || "User"}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#00A991] cursor-pointer object-cover transition-transform hover:scale-105"
          />
          <AnimatePresence>
            {showDropdown && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-3 w-48 bg-white dark:bg-neutral-800 rounded-lg shadow-lg border border-gray-100 dark:border-neutral-700 py-2 z-50"
              >
                <DropdownItem
                  icon={<User size={16} />}
                  label="Profile"
                  route="companyprofile"
                />
                
                <hr className="border-gray-200 dark:border-neutral-700 my-1" />
                <DropdownItem
                  icon={<LogOut size={16} className="text-red-500" />}
                  label="Logout"
                  onClick={() => {
                    logout();
                    navigate("/login");
                  }}
                  danger
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}