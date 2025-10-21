// src/router/AppRouter.jsx  (or wherever your router file is)
import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import { ProtectedRoute } from "./ProtectedRoute";
import Login from "../pages/Login";

import Dashboardpage from "../pages/Dashboard/Dashboardpage";

import UsersMangement from "../pages/Dashboard/UsersManagement";

import Transaction from "../pages/Dashboard/Transaction";
import PromotionsBanner from "../pages/Dashboard/PromotionsBanners";

import Permission from "../pages/Dashboard/Permission";

import UsersWallet from "../pages/Dashboard/UserWallet";
import NotFound from "../pages/Dashboard/NotFound";
import Setting from "../pages/Dashboard/Setting";


import UsersWithDrawal from "../pages/Dashboard/UserWithDrawal";
import UsersInternalWithDrawal from "../pages/Dashboard/UserInternalWithdraw";

import PartnerPage from "../pages/Dashboard/Partners";


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
        {/* dashboard index */}
        <Route index element={<Dashboardpage />} />

        {/* main sections */}
        <Route path="users" element={<UsersMangement />} />

        {/* <Route path="wallet/deposit" element={<UserDeposite />} /> */}
        <Route path="wallet/withdrawal" element={<UsersWithDrawal />} />
        <Route
          path="wallet/internal-withdraw"
          element={<UsersInternalWithDrawal />}
        />
        <Route path="transactions" element={<Transaction />} />
        <Route path="wallet/deposit" element={<UsersWallet />} />
        <Route path="part" element={<PartnerPage />} />
        <Route path="promotions" element={<PromotionsBanner />} />
        

        <Route path="setting" element={<Setting />} />

        <Route path="permission" element={<Permission />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
