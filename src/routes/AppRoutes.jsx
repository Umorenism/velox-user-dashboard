
import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import { ProtectedRoute } from "./ProtectedRoute";
import Login from "../pages/Login";
import Settings from "../pages/Dashboard/Settings";
import Dashboardpage from "../pages/Dashboard/Dashboardpage";
import Packages from "../pages/Dashboard/Packages";
import UsersMangement from "../pages/Dashboard/UsersManagement";
import LeaderManagement from "../pages/Dashboard/LeaderManagement";
import Transaction from "../pages/Dashboard/Transaction";
import PromotionsBanner from "../pages/Dashboard/PromotionsBanners";
import CompanyProfile from "../pages/Dashboard/CompanyProfile";
import Permission from "../pages/Dashboard/Permission";
import EmailPage from "../pages/Dashboard/EmailPage";
import UsersWallet from "../pages/Dashboard/UserWallet";
import NotFound from "../pages/Dashboard/NotFound";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />

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
       
<Route path="package" element={<Packages />} />
        <Route path="transactions" element={<Transaction />} />
        <Route path="withdrawal-wallet" element={<UsersWallet />} />
        <Route path="promotions" element={<PromotionsBanner />} />
        <Route path="settings" element={<Settings />} />
       
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
