// src/router/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { isTokenValid } from "./isValidToken";


export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user"); // Optional: stored after signup or login

  // No token and no user data → new user → signup
  if (!token && !user) {
    return <Navigate to="/signup" replace />;
  }

  // Token exists but invalid or expired → go to login
  if (!isTokenValid()) {
    return <Navigate to="/login" replace />;
  }

  // All good → show dashboard
  return children;
};
