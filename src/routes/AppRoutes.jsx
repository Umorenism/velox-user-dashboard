// // src/router/AppRouter.jsx
// import { Routes, Route, Navigate } from "react-router-dom";
// import React from "react";
// import DashboardLayout from "../components/layout/DashboardLayout";
// import { ProtectedRoute } from "./ProtectedRoute";
// import Login from "../pages/Login";
// import SignUp from "../pages/SignUp";

// import Dashboardpage from "../pages/Dashboard/Dashboardpage";
// import UsersMangement from "../pages/Dashboard/UsersManagement";
// import Transaction from "../pages/Dashboard/Transaction";
// import PromotionsBanner from "../pages/Dashboard/PromotionsBanners";
// import Permission from "../pages/Dashboard/Permission";
// import UsersWallet from "../pages/Dashboard/UserWallet";
// import Setting from "../pages/Dashboard/Setting";
// import UsersWithDrawal from "../pages/Dashboard/UserWithDrawal";
// import UsersInternalWithDrawal from "../pages/Dashboard/UserInternalWithdraw";
// import PartnerPage from "../pages/Dashboard/Partners";
// import NotFound from "../pages/Dashboard/NotFound";
// import VerifyEmail from "../pages/VerifyEmail";
// import CompoundCalculator from "../pages/modules/CompoundCalculator";
// import ForexLotSize from "../pages/modules/ForexLotSize";
// import Courses from "../pages/modules/academy/Courses";
// import LeaderBoard from "../pages/LeaderBoard";
// import CopyTrading from "../pages/copyTrading/CopyTrading";
// import Risk from "../pages/Risk/Risk";
// import Unilevel from "../pages/network/Unilevel";
// import Matrix from "../pages/network/Matrix";
// import LeadershipBonus from "../pages/network/LeadershipBonus";
// import PersonalMatchingBonus from "../pages/network/PersonalMatchingBonus";
// import RankAdvancement from "../pages/network/RankAdvancement";
// import FastStart from "../pages/network/FastStart";
// import RetirementBlog from "../pages/retirementbloq/RetirementBlog";

// import SupportPage from "../pages/SupportPage";

// export default function AppRouter() {
//   // 🧠 Decide where to send the user when they hit "/"
//   const token = localStorage.getItem("token");
//   const user = localStorage.getItem("user");

//   const getInitialRoute = () => {
//     if (token) return "/dashboard";     // Logged in → Dashboard
//     if (user) return "/login";          // Registered but token expired → Login
//     return "/signup";                   // New user → Signup
//   };

//   return (
//     <Routes>
//       {/* 🔄 Dynamic redirect based on token/user */}
//       <Route path="/" element={<Navigate to={getInitialRoute()} replace />} />

//       {/* Auth pages */}
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<SignUp />} />
//       <Route path="/verify-email" element={<VerifyEmail />} />

//       {/* Protected dashboard routes */}
//       <Route
//         path="/dashboard"
//         element={
//             <ProtectedRoute>
//             <DashboardLayout />
//            </ProtectedRoute>
//         }
//       >
//         <Route index element={<Dashboardpage />} />
//         <Route path="users" element={<UsersMangement />} />
//         <Route path="wallet/withdrawal" element={<UsersWithDrawal />} />
//         <Route path="wallet/internal-withdraw" element={<UsersInternalWithDrawal />} />
//         <Route path="transactions" element={<Transaction />} />
//         <Route path="wallet/deposit" element={<UsersWallet />} />
//         <Route path="part" element={<PartnerPage />} />
//         <Route path="promotions" element={<PromotionsBanner />} />
//         <Route path="setting" element={<Setting />} />
//         <Route path="permission" element={<Permission />} />
//         <Route path="modules/compound-calculator" element={<CompoundCalculator />} />
//         <Route path="modules/forex-lot-size" element={<ForexLotSize />} />
//         <Route path="academy/courses" element={<Courses />} />
//         <Route path="leaderboard" element={<LeaderBoard />} />
//         <Route path="copy-trading" element={<CopyTrading />} />
//         <Route path="risk" element={<Risk />} />
//         <Route path="network/fast-start" element={<FastStart />} />
//   <Route path="network/unilevel" element={<Unilevel />} />
//         <Route path="network/matrix" element={<Matrix />} />
//         <Route path="network/leadership-bonus" element={<LeadershipBonus />} />
//         <Route path="network/personal-matching-bonus" element={<PersonalMatchingBonus />} />
//         <Route path="network/rank-advancement" element={<RankAdvancement />} />
//         <Route path="retirement-blog" element={<RetirementBlog />} />
//         <Route path="support" element={<SupportPage />} />

//       </Route>

//       {/* 404 fallback */}
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// }








// src/router/AppRouter.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import { ProtectedRoute } from "./ProtectedRoute";

import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import VerifyEmail from "../pages/VerifyEmail";

import Dashboardpage from "../pages/Dashboard/Dashboardpage";
import UsersMangement from "../pages/Dashboard/UsersManagement";
import Transaction from "../pages/Dashboard/Transaction";
import PromotionsBanner from "../pages/Dashboard/PromotionsBanners";
import Permission from "../pages/Dashboard/Permission";
import UsersWallet from "../pages/Dashboard/UserWallet";
import Setting from "../pages/Dashboard/Setting";
import UsersWithDrawal from "../pages/Dashboard/UserWithDrawal";
import UsersInternalWithDrawal from "../pages/Dashboard/UserInternalWithdraw";
import PartnerPage from "../pages/Dashboard/Partners";
import NotFound from "../pages/Dashboard/NotFound";
import CompoundCalculator from "../pages/modules/CompoundCalculator";
import ForexLotSize from "../pages/modules/ForexLotSize";
import Courses from "../pages/modules/academy/Courses";
import LeaderBoard from "../pages/LeaderBoard";
import CopyTrading from "../pages/copyTrading/CopyTrading";
import Risk from "../pages/Risk/Risk";
import Unilevel from "../pages/network/Unilevel";
import Matrix from "../pages/network/Matrix";
import LeadershipBonus from "../pages/network/LeadershipBonus";
import PersonalMatchingBonus from "../pages/network/PersonalMatchingBonus";
import RankAdvancement from "../pages/network/RankAdvancement";
import FastStart from "../pages/network/FastStart";
import RetirementBlog from "../pages/retirementbloq/RetirementBlog";
import SupportPage from "../pages/SupportPage";

export default function AppRouter() {
  // 🧠 Decide where to send the user when they hit "/"
  const token = localStorage.getItem("token");

  /**
   * getInitialRoute()
   * - If logged in → redirect to dashboard
   * - If not logged in → redirect to login
   */
  const getInitialRoute = () => {
    if (token) return "/dashboard";
    return "/login";
  };

  return (
    <Routes>
      {/* 🔄 Dynamic redirect based on token */}
      <Route path="/" element={<Navigate to={getInitialRoute()} replace />} />

      {/* 🧩 Auth routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/verify-email" element={<VerifyEmail />} />

      {/* 🛡️ Protected Dashboard Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        {/* Default Dashboard */}
        <Route index element={<Dashboardpage />} />

        {/* User Management */}
        <Route path="users" element={<UsersMangement />} />

        {/* Wallet Routes */}
        <Route path="wallet/withdrawal" element={<UsersWithDrawal />} />
        <Route path="wallet/internal-withdraw" element={<UsersInternalWithDrawal />} />
        <Route path="wallet/deposit" element={<UsersWallet />} />

        {/* Dashboard Modules */}
        <Route path="transactions" element={<Transaction />} />
        <Route path="part" element={<PartnerPage />} />
        <Route path="promotions" element={<PromotionsBanner />} />
        <Route path="setting" element={<Setting />} />
        <Route path="permission" element={<Permission />} />

        {/* Tools / Calculators */}
        <Route path="modules/compound-calculator" element={<CompoundCalculator />} />
        <Route path="modules/forex-lot-size" element={<ForexLotSize />} />

        {/* Academy */}
        <Route path="academy/courses" element={<Courses />} />

        {/* Extra Features */}
        <Route path="leaderboard" element={<LeaderBoard />} />
        <Route path="copy-trading" element={<CopyTrading />} />
        <Route path="risk" element={<Risk />} />

        {/* Network */}
        <Route path="network/fast-start" element={<FastStart />} />
        <Route path="network/unilevel" element={<Unilevel />} />
        <Route path="network/matrix" element={<Matrix />} />
        <Route path="network/leadership-bonus" element={<LeadershipBonus />} />
        <Route path="network/personal-matching-bonus" element={<PersonalMatchingBonus />} />
        <Route path="network/rank-advancement" element={<RankAdvancement />} />

        {/* Blog + Support */}
        <Route path="retirement-blog" element={<RetirementBlog />} />
        <Route path="support" element={<SupportPage />} />
      </Route>

      {/* 🚫 404 Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
