

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useUser } from "./UserContext";
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
import Matrix from '../pages/network/Matrix'
import LeadershipBonus from "../pages/network/LeadershipBonus";
import FastStart from "../pages/network/FastStart";

import RetirementBlog from "../pages/retirementbloq/RetirementBlog";
import SupportPage from "../pages/SupportPage";
import VeloxCapitalSignals from "../pages/network/VeloxCapitalSignals";
import MarketOverviewCashFX from "../pages/network/RankAdvancement";
import BookACall from "../pages/modules/BookACall";
import Unilevel from "../pages/network/Unilevel";
import PersonalMatchingBonus from "../pages/network/PersonalMatchingBonus";
import ForgetPassword from "../pages/ForgetPassword";
import ResetPassword from "../pages/RestPassword";

export default function AppRouter() {
  const { user, isTokenValid, loading } = useUser();

  if (loading) return <div className="text-center mt-20">Loading...</div>;

  const getInitialRoute = () => {
    if (user && isTokenValid()) return "/dashboard";
    return "/login";
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to={getInitialRoute()} replace />} />

      {/* Public */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
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
        <Route path="permission" element={<Permission />} />

        {/* Settings */}
        <Route path="setting" element={<Setting />} />

        {/* Modules */}
        <Route path="modules/compound-calculator" element={<CompoundCalculator />} />
        <Route path="modules/forex-lot-size" element={<ForexLotSize />} />

        {/* Academy */}
        <Route path="academy/courses" element={<Courses />} />
        <Route path="academy/market-overview" element={<MarketOverviewCashFX />} />
        <Route path="academy/book-a-call" element={<BookACall />} />

        {/* Features */}
        <Route path="leaderboard" element={<LeaderBoard />} />
        <Route path="copy-trading" element={<CopyTrading />} />
        <Route path="risk" element={<Risk />} />

        {/* Network */}
        <Route path="network/fast-start" element={<FastStart />} />
        <Route path="network/unilevel" element={<Unilevel />} />
        <Route path="network/matrix" element={<Matrix />} />
         <Route path="network/leadership-bonus" element={<LeadershipBonus />} />
        <Route path="network/personal-matching-bonus" element={<PersonalMatchingBonus />} />
        
        <Route path="network/veloxcapitalsignals" element={<VeloxCapitalSignals />} />

        {/* Blog & Support */}
        <Route path="retirement-blog" element={<RetirementBlog />} />
        <Route path="support" element={<SupportPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}