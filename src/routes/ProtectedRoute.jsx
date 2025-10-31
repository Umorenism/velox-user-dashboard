import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "./UserContext";

export const ProtectedRoute = ({ children }) => {
  const { user, isTokenValid, loading } = useUser();

  // ⏳ Wait for token validation
  if (loading) return <div className="text-center mt-20">Loading...</div>;

  // ❌ No valid token → back to login
  if (!isTokenValid() || !user) {
    return <Navigate to="/login" replace />;
  }

  // ✅ Authorized → show the page
  return children;
};
