





// // // src/components/SideBar.jsx
// // import React, { useState, useContext } from "react";
// // import { NavLink, useNavigate } from "react-router-dom";
// // import {
// //   LayoutDashboard,
// //   Users,
// //   CreditCard,
// //   ArrowDownCircle,
// //   Shield,
// //   LifeBuoy,
// //   LogOut,
// //   Search,
// //   X,
// //   ChevronDown,
// //   ChevronUp,
// //   Handshake,
// //   Sun,
// //   Moon,
// // } from "lucide-react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import logoimg from "../../assets/velox.svg";
// // import profilePic from "../../assets/profile.svg";
// // import { useTheme } from "../../context/ThemeContext";
// // import { UserContext } from "../../routes/UserContext";

// // export default function SideBar({ closeSidebar }) {
// //   const [isSettingsOpen, setIsSettingsOpen] = useState(false);
// //   const [isWalletOpen, setIsWalletOpen] = useState(false);
// //   const { theme, toggleTheme } = useTheme();
// //   const { user, logout } = useContext(UserContext);
// //   const navigate = useNavigate();

// //   const toggleSettings = () => setIsSettingsOpen((prev) => !prev);
// //   const toggleWallet = () => setIsWalletOpen((prev) => !prev);

// //   const topLinks = [
// //     { to: "/dashboard", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
// //     { to: "/dashboard/users", label: "User Management", icon: <Users size={18} /> },
// //     { to: "/dashboard/transactions", label: "Transactions", icon: <CreditCard size={18} /> },
// //     { to: "/dashboard/part", label: "Partners", icon: <Handshake size={18} /> },
// //   ];

// //   const walletSubLinks = [
// //     { to: "/dashboard/wallet/deposit", label: "Deposit" },
// //     { to: "/dashboard/wallet/withdrawal", label: "Withdrawal" },
// //     { to: "/dashboard/wallet/internal-withdraw", label: "Internal Withdraw" },
// //   ];

// //   const settingsSubLinks = [
// //     { to: "/dashboard/settings", label: "Active Log Page" },
// //     { to: "/dashboard/company-profile", label: "Company Profile" },
// //     { to: "/dashboard/permission", label: "Roles & Permission" },
// //     { to: "/dashboard/email", label: "Email Broadcasting" },
// //   ];

// //   const bottomLinks = [
// //     { to: "/dashboard/support", label: "Support", icon: <LifeBuoy size={18} /> },
// //   ];

// //   return (
// //     <motion.aside
// //       initial={{ x: -300 }}
// //       animate={{ x: 0 }}
// //       exit={{ x: -300 }}
// //       transition={{ duration: 0.3, ease: "easeInOut" }}
// //       className="w-72 bg-white dark:bg-neutral-900 dark:text-white shadow-md h-screen p-4 flex flex-col justify-between"
// //     >
// //       <div>
// //         <div className="flex justify-between items-center mb-4 md:hidden">
// //           <img src={logoimg} alt="Velox Logo" className="w-20 object-contain" />
// //           <button
// //             onClick={closeSidebar}
// //             className="text-gray-600 dark:text-gray-300 hover:text-red-500 transition"
// //           >
// //             <X size={22} />
// //           </button>
// //         </div>
// //         <div className="hidden md:flex justify-start mb-6">
// //           <img src={logoimg} alt="Velox Logo" className="w-20 object-contain" />
// //         </div>
// //         <div className="relative mb-6">
// //           <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
// //           <input
// //             type="text"
// //             placeholder="Search..."
// //             className="w-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white rounded-[6px] pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00A991]"
// //           />
// //         </div>
// //         <div className="flex md:hidden justify-between items-center px-3 mb-6">
// //           <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
// //             {theme === "dark" ? "Dark Mode" : "Light Mode"}
// //           </span>
// //           <button
// //             onClick={toggleTheme}
// //             className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
// //           >
// //             {theme === "dark" ? (
// //               <Sun size={18} className="text-yellow-400" />
// //             ) : (
// //               <Moon size={18} className="text-gray-700" />
// //             )}
// //           </button>
// //         </div>
// //         <nav className="space-y-3">
// //           {topLinks.map((link) => (
// //             <NavLink
// //               key={link.to}
// //               to={link.to}
// //               onClick={closeSidebar}
// //               className={({ isActive }) =>
// //                 `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
// //                   isActive
// //                     ? "bg-[#FFECE5] text-black"
// //                     : "text-gray-600 dark:text-white hover:bg-[#FFECE5] dark:hover:bg-gray-800"
// //                 }`
// //               }
// //             >
// //               {link.icon}
// //               {link.label}
// //             </NavLink>
// //           ))}
// //           <div>
// //             <button
// //               onClick={toggleWallet}
// //               className="flex justify-between items-center w-full px-3 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-white hover:bg-[#FFECE5] dark:hover:bg-gray-800 transition"
// //             >
// //               <div className="flex items-center gap-3">
// //                 <ArrowDownCircle size={18} />
// //                 <span>Wallet</span>
// //               </div>
// //               {isWalletOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
// //             </button>
// //             <AnimatePresence>
// //               {isWalletOpen && (
// //                 <motion.div
// //                   initial={{ height: 0, opacity: 0 }}
// //                   animate={{ height: "auto", opacity: 1 }}
// //                   exit={{ height: 0, opacity: 0 }}
// //                   transition={{ duration: 0.3 }}
// //                   className="ml-8 mt-2 space-y-2 border-l border-gray-200 dark:border-gray-700 pl-3"
// //                 >
// //                   {walletSubLinks.map((sublink) => (
// //                     <NavLink
// //                       key={sublink.to}
// //                       to={sublink.to}
// //                       onClick={closeSidebar}
// //                       className={({ isActive }) =>
// //                         `block px-2 py-1 rounded-md text-sm transition-all ${
// //                           isActive
// //                             ? "bg-[#FFECE5] text-black"
// //                             : "text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white"
// //                         }`
// //                       }
// //                     >
// //                       {sublink.label}
// //                     </NavLink>
// //                   ))}
// //                 </motion.div>
// //               )}
// //             </AnimatePresence>
// //           </div>
// //           <div>
// //             <button
// //               onClick={toggleSettings}
// //               className="flex justify-between items-center w-full px-3 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-white hover:bg-[#FFECE5] dark:hover:bg-gray-800 transition"
// //             >
// //               <div className="flex items-center gap-3">
// //                 <Shield size={18} />
// //                 <span>Security & Settings</span>
// //               </div>
// //               {isSettingsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
// //             </button>
// //             <AnimatePresence>
// //               {isSettingsOpen && (
// //                 <motion.div
// //                   initial={{ height: 0, opacity: 0 }}
// //                   animate={{ height: "auto", opacity: 1 }}
// //                   exit={{ height: 0, opacity: 0 }}
// //                   transition={{ duration: 0.3 }}
// //                   className="ml-8 mt-2 space-y-2 border-l border-gray-200 dark:border-gray-700 pl-3"
// //                 >
// //                   {settingsSubLinks.map((sublink) => (
// //                     <NavLink
// //                       key={sublink.to}
// //                       to={sublink.to}
// //                       onClick={closeSidebar}
// //                       className={({ isActive }) =>
// //                         `block px-2 py-1 rounded-md text-sm transition-all ${
// //                           isActive
// //                             ? "bg-[#FFECE5] text-black"
// //                             : "text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white"
// //                         }`
// //                       }
// //                     >
// //                       {sublink.label}
// //                     </NavLink>
// //                   ))}
// //                 </motion.div>
// //               )}
// //             </AnimatePresence>
// //           </div>
// //         </nav>
// //         <hr className="mt-10 border-gray-200 dark:border-gray-700" />
// //       </div>
// //       <div className="space-y-4 mb-20">
// //         {bottomLinks.map((link) => (
// //           <NavLink
// //             key={link.to}
// //             to={link.to}
// //             onClick={closeSidebar}
// //             className={({ isActive }) =>
// //               `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
// //                 isActive
// //                   ? "bg-gray-200 text-black"
// //                   : "text-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800"
// //               }`
// //             }
// //           >
// //             {link.icon}
// //             {link.label}
// //           </NavLink>
// //         ))}
// //         <div className="flex items-center justify-between dark:bg-gray-800 rounded-lg ">
// //           <div className="flex items-center gap-3 relative">
// //             <img
// //               src={user?.profilePic || profilePic}
// //               alt={user?.name || "User"}
// //               className="w-14 h-14 rounded-full object-cover border border-gray-300 dark:border-gray-700"
// //             />
// //             <div>
// //               <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
// //                 {user?.name || "User"}
// //               </p>
// //               <p className="text-xs text-start text-gray-500 dark:text-gray-400 ">
// //                 {user?.email || "No email"}
// //               </p>
// //             </div>
// //           </div>
// //           <button
// //             onClick={() => {
// //                     logout();
// //                     navigate("/login");
// //                   }}
// //             className="text-red-500 ml-5 hover:text-red-500 transition"
// //             aria-label="Logout"
// //           >
// //             <LogOut size={18} />
// //           </button>
// //         </div>
// //       </div>
// //     </motion.aside>
// //   );
// // }





// // import React, { useState, useContext } from "react";
// // import { NavLink, useNavigate } from "react-router-dom";
// // import {
// //   LayoutDashboard,
// //   Users,
// //   CreditCard,
// //   ArrowDownCircle,
// //   Shield,
// //   LifeBuoy,
// //   LogOut,
// //   Search,
// //   X,
// //   ChevronDown,
// //   ChevronUp,
// //   Handshake,
// //   Sun,
// //   Moon,
// //   Calculator,
// //   BookOpen,
// //   LeafIcon,
// // } from "lucide-react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import logoimg from "../../assets/velox.svg";
// // import profilePic from "../../assets/profile.svg";
// // import { useTheme } from "../../context/ThemeContext";
// // import { UserContext } from "../../routes/UserContext";

// // export default function SideBar({ closeSidebar }) {
// //   const [isSettingsOpen, setIsSettingsOpen] = useState(false);
// //   const [isWalletOpen, setIsWalletOpen] = useState(false);
// //   const [isModulesOpen, setIsModulesOpen] = useState(false);
// //   const [isAcademyOpen, setIsAcademyOpen] = useState(false);

// //   const { theme, toggleTheme } = useTheme();
// //   const { user, logout } = useContext(UserContext);
// //   const navigate = useNavigate();

// //   const toggleSettings = () => setIsSettingsOpen((prev) => !prev);
// //   const toggleWallet = () => setIsWalletOpen((prev) => !prev);
// //   const toggleModules = () => setIsModulesOpen((prev) => !prev);
// //   const toggleAcademy = () => setIsAcademyOpen((prev) => !prev);

// //   const topLinks = [
// //     { to: "/dashboard", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
// //     { to: "/dashboard/users", label: "User Management", icon: <Users size={18} /> },
// //     { to: "/dashboard/transactions", label: "Transactions", icon: <CreditCard size={18} /> },
// //     { to: "/dashboard/part", label: "Partners", icon: <Handshake size={18} /> },
// //     { to: "/dashboard/leaderboard", label: "LeaderBoard", icon: <LeafIcon size={18} /> },
// //   ];

// //   const walletSubLinks = [
// //     { to: "/dashboard/wallet/deposit", label: "Deposit" },
// //     { to: "/dashboard/wallet/withdrawal", label: "Withdrawal" },
// //     { to: "/dashboard/wallet/internal-withdraw", label: "Internal Withdraw" },
// //   ];

// //   const settingsSubLinks = [
// //     { to: "/dashboard/settings", label: "Active Log Page" },
// //     { to: "/dashboard/company-profile", label: "Company Profile" },
// //     { to: "/dashboard/permission", label: "Roles & Permission" },
// //     { to: "/dashboard/email", label: "Email Broadcasting" },
// //   ];

// //   const moduleSubLinks = [
// //     { to: "/dashboard/modules/compound-calculator", label: "Compound Calculator" },
// //     { to: "/dashboard/modules/forex-lot-size", label: "Forex Lot Size Calculator" },
// //   ];

// //   const academySubLinks = [
// //     { to: "/dashboard/academy/courses", label: "Courses" },
// //   ];

// //   const bottomLinks = [
// //     { to: "/dashboard/support", label: "Support", icon: <LifeBuoy size={18} /> },
// //   ];

// //   return (
// //     <motion.aside
// //       initial={{ x: -300 }}
// //       animate={{ x: 0 }}
// //       exit={{ x: -300 }}
// //       transition={{ duration: 0.3, ease: "easeInOut" }}
// //       className="w-72 bg-white dark:bg-neutral-900 dark:text-white shadow-md h-screen p-4 flex flex-col justify-between"
// //     >
// //       <div>
// //         {/* Logo & Close Button */}
// //         <div className="flex justify-between items-center mb-4 md:hidden">
// //           <img src={logoimg} alt="Velox Logo" className="w-20 object-contain" />
// //           <button
// //             onClick={closeSidebar}
// //             className="text-gray-600 dark:text-gray-300 hover:text-red-500 transition"
// //           >
// //             <X size={22} />
// //           </button>
// //         </div>

// //         {/* Logo for desktop */}
// //         <div className="hidden md:flex justify-start mb-6">
// //           <img src={logoimg} alt="Velox Logo" className="w-20 object-contain" />
// //         </div>

// //         {/* Search */}
// //         <div className="relative mb-6">
// //           <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
// //           <input
// //             type="text"
// //             placeholder="Search..."
// //             className="w-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white rounded-[6px] pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00A991]"
// //           />
// //         </div>

// //         {/* Light/Dark Toggle */}
// //         <div className="flex md:hidden justify-between items-center px-3 mb-6">
// //           <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
// //             {theme === "dark" ? "Dark Mode" : "Light Mode"}
// //           </span>
// //           <button
// //             onClick={toggleTheme}
// //             className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
// //           >
// //             {theme === "dark" ? (
// //               <Sun size={18} className="text-yellow-400" />
// //             ) : (
// //               <Moon size={18} className="text-gray-700" />
// //             )}
// //           </button>
// //         </div>

// //         {/* NAVIGATION */}
// //         <nav className="space-y-3">
// //           {topLinks.map((link) => (
// //             <NavLink
// //               key={link.to}
// //               to={link.to}
// //               onClick={closeSidebar}
// //               className={({ isActive }) =>
// //                 `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
// //                   isActive
// //                     ? "bg-[#FFECE5] text-black"
// //                     : "text-gray-600 dark:text-white hover:bg-[#FFECE5] dark:hover:bg-gray-800"
// //                 }`
// //               }
// //             >
// //               {link.icon}
// //               {link.label}
// //             </NavLink>
// //           ))}

// //           {/* MODULES SECTION */}
// //           <div>
// //             <button
// //               onClick={toggleModules}
// //               className="flex justify-between items-center w-full px-3 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-white hover:bg-[#FFECE5] dark:hover:bg-gray-800 transition"
// //             >
// //               <div className="flex items-center gap-3">
// //                 <Calculator size={18} />
// //                 <span>Modules</span>
// //               </div>
// //               {isModulesOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
// //             </button>

// //             <AnimatePresence>
// //               {isModulesOpen && (
// //                 <motion.div
// //                   initial={{ height: 0, opacity: 0 }}
// //                   animate={{ height: "auto", opacity: 1 }}
// //                   exit={{ height: 0, opacity: 0 }}
// //                   transition={{ duration: 0.3 }}
// //                   className="ml-8 mt-2 space-y-2 border-l border-gray-200 dark:border-gray-700 pl-3"
// //                 >
// //                   {moduleSubLinks.map((sublink) => (
// //                     <NavLink
// //                       key={sublink.to}
// //                       to={sublink.to}
// //                       onClick={closeSidebar}
// //                       className={({ isActive }) =>
// //                         `block px-2 py-1 rounded-md text-sm transition-all ${
// //                           isActive
// //                             ? "bg-[#FFECE5] text-black"
// //                             : "text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white"
// //                         }`
// //                       }
// //                     >
// //                       {sublink.label}
// //                     </NavLink>
// //                   ))}

// //                   {/* ACADEMY SUB SECTION */}
// //                   <div>
// //                     <button
// //                       onClick={toggleAcademy}
// //                       className="flex justify-between items-center w-full text-sm font-medium text-gray-600 dark:text-white hover:text-black dark:hover:text-white transition"
// //                     >
// //                       <div className="flex items-center gap-2">
// //                         <BookOpen size={16} />
// //                         <span>Academy</span>
// //                       </div>
// //                       {isAcademyOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
// //                     </button>

// //                     <AnimatePresence>
// //                       {isAcademyOpen && (
// //                         <motion.div
// //                           initial={{ height: 0, opacity: 0 }}
// //                           animate={{ height: "auto", opacity: 1 }}
// //                           exit={{ height: 0, opacity: 0 }}
// //                           transition={{ duration: 0.3 }}
// //                           className="ml-6 mt-1 space-y-1 border-l border-gray-200 dark:border-gray-700 pl-2"
// //                         >
// //                           {academySubLinks.map((sublink) => (
// //                             <NavLink
// //                               key={sublink.to}
// //                               to={sublink.to}
// //                               onClick={closeSidebar}
// //                               className={({ isActive }) =>
// //                                 `block px-2 py-1 rounded-md text-sm transition-all ${
// //                                   isActive
// //                                     ? "bg-[#FFECE5] text-black"
// //                                     : "text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white"
// //                                 }`
// //                               }
// //                             >
// //                               {sublink.label}
// //                             </NavLink>
// //                           ))}
// //                         </motion.div>
// //                       )}
// //                     </AnimatePresence>
// //                   </div>
// //                 </motion.div>
// //               )}
// //             </AnimatePresence>
// //           </div>

// //           {/* SECURITY & SETTINGS */}
// //           <div>
// //             <button
// //               onClick={toggleSettings}
// //               className="flex justify-between items-center w-full px-3 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-white hover:bg-[#FFECE5] dark:hover:bg-gray-800 transition"
// //             >
// //               <div className="flex items-center gap-3">
// //                 <Shield size={18} />
// //                 <span>Security & Settings</span>
// //               </div>
// //               {isSettingsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
// //             </button>
// //             <AnimatePresence>
// //               {isSettingsOpen && (
// //                 <motion.div
// //                   initial={{ height: 0, opacity: 0 }}
// //                   animate={{ height: "auto", opacity: 1 }}
// //                   exit={{ height: 0, opacity: 0 }}
// //                   transition={{ duration: 0.3 }}
// //                   className="ml-8 mt-2 space-y-2 border-l border-gray-200 dark:border-gray-700 pl-3"
// //                 >
// //                   {settingsSubLinks.map((sublink) => (
// //                     <NavLink
// //                       key={sublink.to}
// //                       to={sublink.to}
// //                       onClick={closeSidebar}
// //                       className={({ isActive }) =>
// //                         `block px-2 py-1 rounded-md text-sm transition-all ${
// //                           isActive
// //                             ? "bg-[#FFECE5] text-black"
// //                             : "text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white"
// //                         }`
// //                       }
// //                     >
// //                       {sublink.label}
// //                     </NavLink>
// //                   ))}
// //                 </motion.div>
// //               )}
// //             </AnimatePresence>
// //           </div>
// //         </nav>

// //         <hr className="mt-10 border-gray-200 dark:border-gray-700" />
// //       </div>

// //       {/* FOOTER SECTION */}
// //       <div className="space-y-4 mb-20">
// //         {bottomLinks.map((link) => (
// //           <NavLink
// //             key={link.to}
// //             to={link.to}
// //             onClick={closeSidebar}
// //             className={({ isActive }) =>
// //               `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
// //                 isActive
// //                   ? "bg-gray-200 text-black"
// //                   : "text-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800"
// //               }`
// //             }
// //           >
// //             {link.icon}
// //             {link.label}
// //           </NavLink>
// //         ))}

// //         {/* User Section */}
// //         <div className="flex items-center justify-between dark:bg-gray-800 rounded-lg ">
// //           <div className="flex items-center gap-3 relative">
// //             <img
// //               src={user?.profilePic || profilePic}
// //               alt={user?.name || "User"}
// //               className="w-14 h-14 rounded-full object-cover border border-gray-300 dark:border-gray-700"
// //             />
// //             <div>
// //               <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
// //                 {user?.name || "User"}
// //               </p>
// //               <p className="text-xs text-start text-gray-500 dark:text-gray-400 ">
// //                 {user?.email || "No email"}
// //               </p>
// //             </div>
// //           </div>
// //           <button
// //             onClick={() => {
// //               logout();
// //               navigate("/login");
// //             }}
// //             className="text-red-500 ml-5 hover:text-red-500 transition"
// //             aria-label="Logout"
// //           >
// //             <LogOut size={18} />
// //           </button>
// //         </div>
// //       </div>
// //     </motion.aside>
// //   );
// // }













// import React, { useState, useContext } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import {
//   LayoutDashboard,
//   Users,
//   CreditCard,
//   ArrowDownCircle,
//   Shield,
//   LifeBuoy,
//   LogOut,
//   Search,
//   X,
//   ChevronDown,
//   ChevronUp,
//   Handshake,
//   Sun,
//   Moon,
//   Calculator,
//   BookOpen,
//   LeafIcon,
// } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import logoimg from "../../assets/velox.svg";
// import profilePic from "../../assets/profile.svg";
// import { useTheme } from "../../context/ThemeContext";
// import { UserContext } from "../../routes/UserContext";

// export default function SideBar({ closeSidebar }) {
//   const [isSettingsOpen, setIsSettingsOpen] = useState(false);
//   const [isWalletOpen, setIsWalletOpen] = useState(false);
//   const [isModulesOpen, setIsModulesOpen] = useState(false);
//   const [isAcademyOpen, setIsAcademyOpen] = useState(false);

//   const { theme, toggleTheme } = useTheme();
//   const { user, logout } = useContext(UserContext);
//   const navigate = useNavigate();

//   const toggleSettings = () => setIsSettingsOpen((prev) => !prev);
//   const toggleWallet = () => setIsWalletOpen((prev) => !prev);
//   const toggleModules = () => setIsModulesOpen((prev) => !prev);
//   const toggleAcademy = () => setIsAcademyOpen((prev) => !prev);

//   const topLinks = [
//     { to: "/dashboard", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
//     { to: "/dashboard/users", label: "User Management", icon: <Users size={18} /> },
//     { to: "/dashboard/transactions", label: "Transactions", icon: <CreditCard size={18} /> },
//     { to: "/dashboard/part", label: "Partners", icon: <Handshake size={18} /> },
//     { to: "/dashboard/leaderboard", label: "LeaderBoard", icon: <LeafIcon size={18} /> },
//   ];

//   const walletSubLinks = [
//     { to: "/dashboard/wallet/deposit", label: "Deposit" },
//     { to: "/dashboard/wallet/withdrawal", label: "Withdrawal" },
//     { to: "/dashboard/wallet/internal-withdraw", label: "Internal Withdraw" },
//   ];

//   const settingsSubLinks = [
//     { to: "/dashboard/settings", label: "Active Log Page" },
//     { to: "/dashboard/company-profile", label: "Company Profile" },
//     { to: "/dashboard/permission", label: "Roles & Permission" },
//     { to: "/dashboard/email", label: "Email Broadcasting" },
//   ];

//   // 🔁 Routes stay same but label change handled below
//   const moduleSubLinks = [
//     { to: "/dashboard/modules/compound-calculator", label: "Compound Calculator" },
//     { to: "/dashboard/modules/forex-lot-size", label: "Forex Lot Size Calculator" },
//   ];

//   const academySubLinks = [
//     { to: "/dashboard/academy/courses", label: "Courses" },
//   ];

//   const bottomLinks = [
//     { to: "/dashboard/support", label: "Support", icon: <LifeBuoy size={18} /> },
//   ];

//   return (
//     <motion.aside
//       initial={{ x: -300 }}
//       animate={{ x: 0 }}
//       exit={{ x: -300 }}
//       transition={{ duration: 0.3, ease: "easeInOut" }}
//       className="w-72 bg-white dark:bg-neutral-900 dark:text-white shadow-md h-screen p-4 flex flex-col justify-between"
//     >
//       <div>
//         {/* Logo & Close Button */}
//         <div className="flex justify-between items-center mb-4 md:hidden">
//           <img src={logoimg} alt="Velox Logo" className="w-20 object-contain" />
//           <button
//             onClick={closeSidebar}
//             className="text-gray-600 dark:text-gray-300 hover:text-red-500 transition"
//           >
//             <X size={22} />
//           </button>
//         </div>

//         {/* Logo for desktop */}
//         <div className="hidden md:flex justify-start mb-6">
//           <img src={logoimg} alt="Velox Logo" className="w-20 object-contain" />
//         </div>

//         {/* Search */}
//         <div className="relative mb-6">
//           <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
//           <input
//             type="text"
//             placeholder="Search..."
//             className="w-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white rounded-[6px] pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00A991]"
//           />
//         </div>

//         {/* Light/Dark Toggle */}
//         <div className="flex md:hidden justify-between items-center px-3 mb-6">
//           <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
//             {theme === "dark" ? "Dark Mode" : "Light Mode"}
//           </span>
//           <button
//             onClick={toggleTheme}
//             className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
//           >
//             {theme === "dark" ? (
//               <Sun size={18} className="text-yellow-400" />
//             ) : (
//               <Moon size={18} className="text-gray-700" />
//             )}
//           </button>
//         </div>

//         {/* NAVIGATION */}
//         <nav className="space-y-3">
//           {topLinks.map((link) => (
//             <NavLink
//               key={link.to}
//               to={link.to}
//               onClick={closeSidebar}
//               className={({ isActive }) =>
//                 `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
//                   isActive
//                     ? "bg-[#FFECE5] text-black"
//                     : "text-gray-600 dark:text-white hover:bg-[#FFECE5] dark:hover:bg-gray-800"
//                 }`
//               }
//             >
//               {link.icon}
//               {link.label}
//             </NavLink>
//           ))}

//           {/* ACADEMY (was Modules) */}
//           <div>
//             <button
//               onClick={toggleModules}
//               className="flex justify-between items-center w-full px-3 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-white hover:bg-[#FFECE5] dark:hover:bg-gray-800 transition"
//             >
//               <div className="flex items-center gap-3">
//                 <Calculator size={18} />
//                 <span>Academy</span>
//               </div>
//               {isModulesOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
//             </button>

//             <AnimatePresence>
//               {isModulesOpen && (
//                 <motion.div
//                   initial={{ height: 0, opacity: 0 }}
//                   animate={{ height: "auto", opacity: 1 }}
//                   exit={{ height: 0, opacity: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="ml-8 mt-2 space-y-2 border-l border-gray-200 dark:border-gray-700 pl-3"
//                 >
//                   {moduleSubLinks.map((sublink) => (
//                     <NavLink
//                       key={sublink.to}
//                       to={sublink.to}
//                       onClick={closeSidebar}
//                       className={({ isActive }) =>
//                         `block px-2 py-1 rounded-md text-sm transition-all ${
//                           isActive
//                             ? "bg-[#FFECE5] text-black"
//                             : "text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white"
//                         }`
//                       }
//                     >
//                       {sublink.label}
//                     </NavLink>
//                   ))}

//                   {/* MODULE (was Academy) */}
//                   <div>
//                     <button
//                       onClick={toggleAcademy}
//                       className="flex justify-between items-center w-full text-sm font-medium text-gray-600 dark:text-white hover:text-black dark:hover:text-white transition"
//                     >
//                       <div className="flex items-center gap-2">
//                         <BookOpen size={16} />
//                         <span>Modules</span>
//                       </div>
//                       {isAcademyOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
//                     </button>

//                     <AnimatePresence>
//                       {isAcademyOpen && (
//                         <motion.div
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: "auto", opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           transition={{ duration: 0.3 }}
//                           className="ml-6 mt-1 space-y-1 border-l border-gray-200 dark:border-gray-700 pl-2"
//                         >
//                           {academySubLinks.map((sublink) => (
//                             <NavLink
//                               key={sublink.to}
//                               to={sublink.to}
//                               onClick={closeSidebar}
//                               className={({ isActive }) =>
//                                 `block px-2 py-1 rounded-md text-sm transition-all ${
//                                   isActive
//                                     ? "bg-[#FFECE5] text-black"
//                                     : "text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white"
//                                 }`
//                               }
//                             >
//                               {sublink.label}
//                             </NavLink>
//                           ))}
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* SECURITY & SETTINGS */}
//           <div>
//             <button
//               onClick={toggleSettings}
//               className="flex justify-between items-center w-full px-3 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-white hover:bg-[#FFECE5] dark:hover:bg-gray-800 transition"
//             >
//               <div className="flex items-center gap-3">
//                 <Shield size={18} />
//                 <span>Security & Settings</span>
//               </div>
//               {isSettingsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
//             </button>
//             <AnimatePresence>
//               {isSettingsOpen && (
//                 <motion.div
//                   initial={{ height: 0, opacity: 0 }}
//                   animate={{ height: "auto", opacity: 1 }}
//                   exit={{ height: 0, opacity: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="ml-8 mt-2 space-y-2 border-l border-gray-200 dark:border-gray-700 pl-3"
//                 >
//                   {settingsSubLinks.map((sublink) => (
//                     <NavLink
//                       key={sublink.to}
//                       to={sublink.to}
//                       onClick={closeSidebar}
//                       className={({ isActive }) =>
//                         `block px-2 py-1 rounded-md text-sm transition-all ${
//                           isActive
//                             ? "bg-[#FFECE5] text-black"
//                             : "text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white"
//                         }`
//                       }
//                     >
//                       {sublink.label}
//                     </NavLink>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </nav>

//         <hr className="mt-10 border-gray-200 dark:border-gray-700" />
//       </div>

//       {/* FOOTER SECTION */}
//       <div className="space-y-4 mb-20">
//         {bottomLinks.map((link) => (
//           <NavLink
//             key={link.to}
//             to={link.to}
//             onClick={closeSidebar}
//             className={({ isActive }) =>
//               `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
//                 isActive
//                   ? "bg-gray-200 text-black"
//                   : "text-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800"
//               }`
//             }
//           >
//             {link.icon}
//             {link.label}
//           </NavLink>
//         ))}

//         {/* User Section */}
//         <div className="flex items-center justify-between dark:bg-gray-800 rounded-lg ">
//           <div className="flex items-center gap-3 relative">
//             <img
//               src={user?.profilePic || profilePic}
//               alt={user?.name || "User"}
//               className="w-14 h-14 rounded-full object-cover border border-gray-300 dark:border-gray-700"
//             />
//             <div>
//               <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
//                 {user?.name || "User"}
//               </p>
//               <p className="text-xs text-start text-gray-500 dark:text-gray-400 ">
//                 {user?.email || "No email"}
//               </p>
//             </div>
//           </div>
//           <button
//             onClick={() => {
//               logout();
//               navigate("/login");
//             }}
//             className="text-red-500 ml-5 hover:text-red-500 transition"
//             aria-label="Logout"
//           >
//             <LogOut size={18} />
//           </button>
//         </div>
//       </div>
//     </motion.aside>
//   );
// }









// src/components/SideBar.jsx
// import React, { useState, useContext } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import {
//   LayoutDashboard,
//   Users,
//   CreditCard,
//   ArrowDownCircle,
//   Shield,
//   LifeBuoy,
//   LogOut,
//   Search,
//   X,
//   ChevronDown,
//   ChevronUp,
//   Handshake,
//   Sun,
//   Moon,
//   Calculator,
//   BookOpen,
//   LeafIcon,
//   Copy,
//   AlertTriangle,
//   Network,
// } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import logoimg from "../../assets/velox.svg";
// import profilePic from "../../assets/profile.svg";
// import { useTheme } from "../../context/ThemeContext";
// import { UserContext } from "../../routes/UserContext";

// export default function SideBar({ closeSidebar }) {
//   const [isSettingsOpen, setIsSettingsOpen] = useState(false);
//   const [isWalletOpen, setIsWalletOpen] = useState(false);
//   const [isModulesOpen, setIsModulesOpen] = useState(false);
//   const [isAcademyOpen, setIsAcademyOpen] = useState(false);
//   const [isCopyTradingOpen, setIsCopyTradingOpen] = useState(false);
//   const [isRiskOpen, setIsRiskOpen] = useState(false);
//   const [isNetworkOpen, setIsNetworkOpen] = useState(false);

//   const { theme, toggleTheme } = useTheme();
//   const { user, logout } = useContext(UserContext);
//   const navigate = useNavigate();

//   const toggleSettings = () => setIsSettingsOpen((prev) => !prev);
//   const toggleWallet = () => setIsWalletOpen((prev) => !prev);
//   const toggleModules = () => setIsModulesOpen((prev) => !prev);
//   const toggleAcademy = () => setIsAcademyOpen((prev) => !prev);
//   const toggleCopyTrading = () => setIsCopyTradingOpen((prev) => !prev);
//   const toggleRisk = () => setIsRiskOpen((prev) => !prev);
//   const toggleNetwork = () => setIsNetworkOpen((prev) => !prev);

//   const topLinks = [
//     { to: "/dashboard", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
//     { to: "/dashboard/users", label: "User Packages", icon: <Users size={18} /> },
//     { to: "/dashboard/transactions", label: "Transactions", icon: <CreditCard size={18} /> },
//     { to: "/dashboard/part", label: "Partners", icon: <Handshake size={18} /> },
//     { to: "/dashboard/leaderboard", label: "LeaderBoard", icon: <LeafIcon size={18} /> },
//     { to: "/dashboard/retirement-blog", label: "Retirement Blog", icon: <BookOpen size={18} /> },
//   ];

//   const walletSubLinks = [
//     { to: "/dashboard/wallet/deposit", label: "Deposit" },
//     { to: "/dashboard/wallet/withdrawal", label: "Withdrawal" },
//     { to: "/dashboard/wallet/internal-withdraw", label: "Internal Withdraw" },
//   ];

//   const settingsSubLinks = [
//     { to: "/dashboard/settings", label: "Active Log Page" },
//     { to: "/dashboard/company-profile", label: "Company Profile" },
//     { to: "/dashboard/permission", label: "Roles & Permission" },
//     { to: "/dashboard/email", label: "Email Broadcasting" },
//   ];

//   const moduleSubLinks = [
//     { to: "/dashboard/modules/compound-calculator", label: "Compound Calculator" },
//     { to: "/dashboard/modules/forex-lot-size", label: "Forex Lot Size Calculator" },
//   ];

//   const academySubLinks = [
//     { to: "/dashboard/academy/courses", label: "Courses" },
//   ];

//   const bottomLinks = [
//     { to: "/dashboard/support", label: "Support", icon: <LifeBuoy size={18} /> },
//   ];

//   return (
//     <motion.aside
//       initial={{ x: -300 }}
//       animate={{ x: 0 }}
//       exit={{ x: -300 }}
//       transition={{ duration: 0.3, ease: "easeInOut" }}
//       className="w-72 bg-white dark:bg-neutral-900 dark:text-white shadow-md h-screen p-4 flex flex-col justify-between overflow-y-auto"
//     >
//       <div>
//         {/* Logo & Close Button */}
//         <div className="flex justify-between items-center mb-4 md:hidden">
//           <img src={logoimg} alt="Velox Logo" className="w-20 object-contain" />
//           <button onClick={closeSidebar} className="text-gray-600 dark:text-gray-300 hover:text-red-500 transition">
//             <X size={22} />
//           </button>
//         </div>

//         <div className="hidden md:flex justify-start mb-6">
//           <img src={logoimg} alt="Velox Logo" className="w-20 object-contain" />
//         </div>

//         <div className="relative mb-6">
//           <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
//           <input
//             type="text"
//             placeholder="Search..."
//             className="w-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white rounded-[6px] pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00A991]"
//           />
//         </div>

//         <div className="flex md:hidden justify-between items-center px-3 mb-6">
//           <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
//             {theme === "dark" ? "Dark Mode" : "Light Mode"}
//           </span>
//           <button
//             onClick={toggleTheme}
//             className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
//           >
//             {theme === "dark" ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-gray-700" />}
//           </button>
//         </div>

//         <nav className="space-y-3">
//           {topLinks.map((link) => (
//             <NavLink
//               key={link.to}
//               to={link.to}
//               onClick={closeSidebar}
//               className={({ isActive }) =>
//                 `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
//                   isActive
//                     ? "bg-[#FFECE5] text-black"
//                     : "text-gray-600 dark:text-white hover:bg-[#FFECE5] dark:hover:bg-gray-800"
//                 }`
//               }
//             >
//               {link.icon}
//               {link.label}
//             </NavLink>
//           ))}

//           {/* Copy Trading */}
//           <div>
//             <button
//               onClick={toggleCopyTrading}
//               className="flex justify-between items-center w-full px-3 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-white hover:bg-[#FFECE5] dark:hover:bg-gray-800 transition"
//             >
//               <div className="flex items-center gap-3">
//                 <Copy size={18} />
//                 <span>Copy Trading</span>
//               </div>
//               {isCopyTradingOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
//             </button>
//             <AnimatePresence>
//               {isCopyTradingOpen && (
//                 <motion.div
//                   initial={{ height: 0, opacity: 0 }}
//                   animate={{ height: "auto", opacity: 1 }}
//                   exit={{ height: 0, opacity: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="ml-8 mt-2 space-y-2 border-l border-gray-200 dark:border-gray-700 pl-3"
//                 >
//                   <NavLink
//                     to="/dashboard/copy-trading"
//                     onClick={closeSidebar}
//                     className={({ isActive }) =>
//                       `block px-2 py-1 rounded-md text-sm transition-all ${
//                         isActive
//                           ? "bg-[#FFECE5] text-black"
//                           : "text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white"
//                       }`
//                     }
//                   >
//                     Configure Copy Trading
//                   </NavLink>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           <div>
//             <button
//               onClick={toggleNetwork}
//               className="flex justify-between items-center w-full px-3 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-white hover:bg-[#FFECE5] dark:hover:bg-gray-800 transition"
//             >
//               <div className="flex items-center gap-3">
//                 <Network size={18} />
//                 <span>Network</span>
//               </div>
//               {isNetworkOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
//             </button>
//             <AnimatePresence>
//               {isNetworkOpen && (
//                 <motion.div
//                   initial={{ height: 0, opacity: 0 }}
//                   animate={{ height: "auto", opacity: 1 }}
//                   exit={{ height: 0, opacity: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="ml-8 mt-2 space-y-2 border-l border-gray-200 dark:border-gray-700 pl-3"
//                 >
//                   {[
//                     "Fast Start",
//                     "Unilevel",
//                     "Matrix",
//                     "Leadership Bonus",
//                     "Personal Matching Bonus",
//                     "Rank Advancement",
//                   ].map((item) => (
//                     <NavLink
//                       key={item}
//                       to={`/dashboard/network/${item.toLowerCase().replace(/ /g, "-")}`}
//                       onClick={closeSidebar}
//                       className={({ isActive }) =>
//                         `block px-2 py-1 rounded-md text-sm transition-all ${
//                           isActive
//                             ? "bg-[#FFECE5] text-black"
//                             : "text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white"
//                         }`
//                       }
//                     >
//                       {item}
//                     </NavLink>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* Modules */}
//           <div>
//             <button
//               onClick={toggleModules}
//               className="flex justify-between items-center w-full px-3 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-white hover:bg-[#FFECE5] dark:hover:bg-gray-800 transition"
//             >
//               <div className="flex items-center gap-3">
//                 <Calculator size={18} />
//                 <span>Modules</span>
//               </div>
//               {isModulesOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
//             </button>
//             <AnimatePresence>
//               {isModulesOpen && (
//                 <motion.div
//                   initial={{ height: 0, opacity: 0 }}
//                   animate={{ height: "auto", opacity: 1 }}
//                   exit={{ height: 0, opacity: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="ml-8 mt-2 space-y-2 border-l border-gray-200 dark:border-gray-700 pl-3"
//                 >
//                   {moduleSubLinks.map((sublink) => (
//                     <NavLink
//                       key={sublink.to}
//                       to={sublink.to}
//                       onClick={closeSidebar}
//                       className={({ isActive }) =>
//                         `block px-2 py-1 rounded-md text-sm transition-all ${
//                           isActive
//                             ? "bg-[#FFECE5] text-black"
//                             : "text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white"
//                         }`
//                       }
//                     >
//                       {sublink.label}
//                     </NavLink>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* Security & Settings */}
//           <div>
//             <button
//               onClick={toggleSettings}
//               className="flex justify-between items-center w-full px-3 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-white hover:bg-[#FFECE5] dark:hover:bg-gray-800 transition"
//             >
//               <div className="flex items-center gap-3">
//                 <Shield size={18} />
//                 <span>Security & Settings</span>
//               </div>
//               {isSettingsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
//             </button>
//             <AnimatePresence>
//               {isSettingsOpen && (
//                 <motion.div
//                   initial={{ height: 0, opacity: 0 }}
//                   animate={{ height: "auto", opacity: 1 }}
//                   exit={{ height: 0, opacity: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="ml-8 mt-2 space-y-2 border-l border-gray-200 dark:border-gray-700 pl-3"
//                 >
//                   {settingsSubLinks.map((sublink) => (
//                     <NavLink
//                       key={sublink.to}
//                       to={sublink.to}
//                       onClick={closeSidebar}
//                       className={({ isActive }) =>
//                         `block px-2 py-1 rounded-md text-sm transition-all ${
//                           isActive
//                             ? "bg-[#FFECE5] text-black"
//                             : "text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white"
//                         }`
//                       }
//                     >
//                       {sublink.label}
//                     </NavLink>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </nav>
//         <hr className="mt-10 border-gray-200 dark:border-gray-700" />
//       </div>

//       <div className="space-y-4 mb-20">
//         {bottomLinks.map((link) => (
//           <NavLink
//             key={link.to}
//             to={link.to}
//             onClick={closeSidebar}
//             className={({ isActive }) =>
//               `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
//                 isActive
//                   ? "bg-gray-200 text-black"
//                   : "text-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800"
//               }`
//             }
//           >
//             {link.icon}
//             {link.label}
//           </NavLink>
//         ))}

//         <div className="flex items-center justify-between dark:bg-gray-800 rounded-lg">
//           <div className="flex items-center gap-3 relative">
//             <img
//               src={user?.profilePic || profilePic}
//               alt={user?.name || "User"}
//               className="w-14 h-14 rounded-full object-cover border border-gray-300 dark:border-gray-700"
//             />
//             <div>
//               <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">{user?.name || "User"}</p>
//               <p className="text-xs text-start text-gray-500 dark:text-gray-400">{user?.email || "No email"}</p>
//             </div>
//           </div>
//           <button
//             onClick={() => {
//               logout();
//               navigate("/login");
//             }}
//             className="text-red-500 ml-5 hover:text-red-500 transition"
//             aria-label="Logout"
//           >
//             <LogOut size={18} />
//           </button>
//         </div>
//       </div>
//     </motion.aside>
//   );
// }







import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
  Calculator,
  BookOpen,
  LeafIcon,
  Copy,
  Network,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoimg from "../../assets/velox.svg";
import profilePic from "../../assets/profile.svg";
import { useTheme } from "../../context/ThemeContext";
import { UserContext } from "../../routes/UserContext";

export default function SideBar({ closeSidebar }) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isModulesOpen, setIsModulesOpen] = useState(false);
  const [isCopyTradingOpen, setIsCopyTradingOpen] = useState(false);
  const [isNetworkOpen, setIsNetworkOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const toggleSettings = () => setIsSettingsOpen((prev) => !prev);
  const toggleModules = () => setIsModulesOpen((prev) => !prev);
  const toggleCopyTrading = () => setIsCopyTradingOpen((prev) => !prev);
  const toggleNetwork = () => setIsNetworkOpen((prev) => !prev);

  const topLinks = [
    { to: "/dashboard", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { to: "/dashboard/users", label: "User Packages", icon: <Users size={18} /> },
    { to: "/dashboard/transactions", label: "Transactions", icon: <CreditCard size={18} /> },
    { to: "/dashboard/part", label: "Partners", icon: <Handshake size={18} /> },
    { to: "/dashboard/leaderboard", label: "LeaderBoard", icon: <LeafIcon size={18} /> },
    { to: "/dashboard/retirement-blog", label: "Retirement Bloq", icon: <BookOpen size={18} /> },
  ];

  const moduleSubLinks = [
    { to: "/dashboard/modules/compound-calculator", label: "Compound Calculator" },
    { to: "/dashboard/modules/forex-lot-size", label: "Forex Lot Size Calculator" },
  ];

  const academySubLinks = [
    { to: "/dashboard/academy/courses", label: "Academy" },
  ];

  const settingsSubLinks = [
    { to: "/dashboard/settings/profile", label: "Profile Settings" },
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
      className="w-72 bg-white dark:bg-neutral-900 dark:text-white shadow-md h-screen p-4 flex flex-col justify-between overflow-y-auto overflow-x-hidden"
    >
      <div>
        {/* Logo & Close Button */}
        <div className="flex justify-between items-center mb-4 md:hidden">
          <img src={logoimg} alt="Velox Logo" className="w-20 object-contain" />
          <button onClick={closeSidebar} className="text-gray-600 dark:text-gray-300 hover:text-red-500 transition">
            <X size={22} />
          </button>
        </div>

        <div className="hidden md:flex justify-start mb-6">
          <img src={logoimg} alt="Velox Logo" className="w-20 object-contain" />
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white rounded-[6px] pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00A991]"
          />
        </div>

        {/* Theme Toggle (Mobile) */}
        <div className="flex md:hidden justify-between items-center px-3 mb-6">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            {theme === "dark" ? "Dark Mode" : "Light Mode"}
          </span>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {theme === "dark" ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-gray-700" />}
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

          {/* Copy Trading */}
          <DropdownSection
            title="Copy Trading"
            icon={<Copy size={18} />}
            isOpen={isCopyTradingOpen}
            toggle={toggleCopyTrading}
            items={[
              { to: "/dashboard/copy-trading", label: "Configure Copy Trading" },
            ]}
            closeSidebar={closeSidebar}
          />

          {/* Network */}
          <DropdownSection
            title="Network"
            icon={<Network size={18} />}
            isOpen={isNetworkOpen}
            toggle={toggleNetwork}
            items={[
              "Fast Start",
              "Unilevel",
              "Matrix",
              "Leadership Bonus",
              "Personal Matching Bonus",
              "Rank Advancement",
            ].map((item) => ({
              to: `/dashboard/network/${item.toLowerCase().replace(/ /g, "-")}`,
              label: item,
            }))}
            closeSidebar={closeSidebar}
          />

          {/* Modules (with Academy under it) */}
          <DropdownSection
            title="Modules"
            icon={<Calculator size={18} />}
            isOpen={isModulesOpen}
            toggle={toggleModules}
            items={[...moduleSubLinks, ...academySubLinks]} // academy now inside modules
            closeSidebar={closeSidebar}
          />

          {/* Security & Settings (only Profile Settings) */}
          <DropdownSection
            title="Security & Settings"
            icon={<Shield size={18} />}
            isOpen={isSettingsOpen}
            toggle={toggleSettings}
            items={settingsSubLinks}
            closeSidebar={closeSidebar}
          />
        </nav>

        <hr className="mt-10 border-gray-200 dark:border-gray-700" />
      </div>

      {/* Bottom Section */}
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

        {/* Profile & Logout */}
        <div className="flex items-center  justify-between dark:bg-gray-800 rounded-lg py-2 mr-5">
          <div className="flex items-center gap-3">
            <img
              src={user?.profilePic || profilePic}
              alt={user?.name || "User"}
              className="w-12 h-12 rounded-full object-cover border border-gray-300 dark:border-gray-700"
            />
            <div className="">
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">{user?.name || "User"}</p>
              <p className="text-xs text-start text-gray-500 dark:text-gray-400">{user?.email || "No email"}</p>
            </div>
          </div>
          <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
            className="text-red-500 ml-5 hover:text-red-500 transition"
          >
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </motion.aside>
  );
}

// Reusable Dropdown Component
const DropdownSection = ({ title, icon, isOpen, toggle, items, closeSidebar }) => (
  <div>
    <button
      onClick={toggle}
      className="flex justify-between items-center w-full px-3 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-white hover:bg-[#FFECE5] dark:hover:bg-gray-800 transition"
    >
      <div className="flex items-center gap-3">
        {icon}
        <span>{title}</span>
      </div>
      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
    </button>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="ml-8 mt-2 space-y-2 border-l border-gray-200 dark:border-gray-700 pl-3"
        >
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={closeSidebar}
              className={({ isActive }) =>
                `block px-2 py-1 rounded-md text-sm transition-all ${
                  isActive
                    ? "bg-[#FFECE5] text-black"
                    : "text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);
