// src/router/AppRouter.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import { ProtectedRoute } from "./ProtectedRoute";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

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
import VerifyEmail from "../pages/VerifyEmail";
import CompoundCalculator from "../pages/modules/CompoundCalculator";
import ForexLotSize from "../pages/modules/ForexLotSize";
import Courses from "../pages/modules/academy/Courses";
import LeaderBoard from "../pages/LeaderBoard";

export default function AppRouter() {
  // 🧠 Decide where to send the user when they hit "/"
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  const getInitialRoute = () => {
    if (token) return "/dashboard";     // Logged in → Dashboard
    if (user) return "/login";          // Registered but token expired → Login
    return "/signup";                   // New user → Signup
  };

  return (
    <Routes>
      {/* 🔄 Dynamic redirect based on token/user */}
      <Route path="/" element={<Navigate to={getInitialRoute()} replace />} />

      {/* Auth pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/verify-email" element={<VerifyEmail />} />

      {/* Protected dashboard routes */}
      <Route
        path="/dashboard"
        element={
          // <ProtectedRoute>
            <DashboardLayout />
          // </ProtectedRoute>
        }
      >
        <Route index element={<Dashboardpage />} />
        <Route path="users" element={<UsersMangement />} />
        <Route path="wallet/withdrawal" element={<UsersWithDrawal />} />
        <Route path="wallet/internal-withdraw" element={<UsersInternalWithDrawal />} />
        <Route path="transactions" element={<Transaction />} />
        <Route path="wallet/deposit" element={<UsersWallet />} />
        <Route path="part" element={<PartnerPage />} />
        <Route path="promotions" element={<PromotionsBanner />} />
        <Route path="setting" element={<Setting />} />
        <Route path="permission" element={<Permission />} />
        <Route path="modules/compound-calculator" element={<CompoundCalculator />} />
        <Route path="modules/forex-lot-size" element={<ForexLotSize />} />
        <Route path="academy/courses" element={<Courses />} />
        <Route path="leaderboard" element={<LeaderBoard />} />

      </Route>

      {/* 404 fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
