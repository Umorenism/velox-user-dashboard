import React, { createContext, useState, useEffect, useContext } from "react";
import { loginUser, signUpUser, getUserProfile } from "../api/authApi";
import { apiClient } from "../api/apiClient"; // axios instance (with baseURL)

// -----------------------------
// 🔐 Helper: Token Validation
// -----------------------------
const isTokenValid = () => {
  const token = localStorage.getItem("token");
  if (!token) return false;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    if (payload.exp && Date.now() >= payload.exp * 1000) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return false;
    }
    return true;
  } catch {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return false;
  }
};

// -----------------------------
// 👥 Context Setup
// -----------------------------
export const UserContext = createContext();

// -----------------------------
// ⚙️ Provider
// -----------------------------
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Attach token to every API request
  const attachTokenToHeaders = (token) => {
    if (token) {
      apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete apiClient.defaults.headers.common["Authorization"];
    }
  };

  // -----------------------------
  // 🧩 Load User on Mount
  // -----------------------------
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token && isTokenValid()) {
      attachTokenToHeaders(token);
      getUserProfile(token)
        .then((res) => {
          const profile = res.user || res;
          setUser({
            name: profile.name || "User",
            email: profile.email || "",
            profilePic: profile.profilePic || null,
            ...profile,
          });
          localStorage.setItem("user", JSON.stringify(profile));
        })
        .catch(() => {
          logout(); // if profile fetch fails, clear session
        })
        .finally(() => setLoading(false));
    } else {
      logout();
      setLoading(false);
    }
  }, []);

  // -----------------------------
  // 🔑 Login
  // -----------------------------
  const login = async ({ prefix, email, password }) => {
    const res = await loginUser({ prefix, email, password });
    if (res?.token) {
      localStorage.setItem("token", res.token);
      attachTokenToHeaders(res.token);
      const profile = await getUserProfile(res.token);
      const userData = profile.user || profile;
      setUser({
        name: userData.name || "User",
        email: userData.email || email,
        profilePic: userData.profilePic || null,
        ...userData,
      });
      localStorage.setItem("user", JSON.stringify(userData));
    }
    return res;
  };

  // -----------------------------
  // ✍️ Signup
  // -----------------------------
  const signup = async (data) => {
    const res = await signUpUser(data);
    if (res?.token) {
      localStorage.setItem("token", res.token);
      attachTokenToHeaders(res.token);
      const profile = res.user || {};
      setUser({
        name: profile.name || "User",
        email: profile.email || data.email,
        profilePic: profile.profilePic || null,
        ...profile,
      });
      localStorage.setItem("user", JSON.stringify(profile));
    }
    return res;
  };

  // -----------------------------
  // 🚪 Logout
  // -----------------------------
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    attachTokenToHeaders(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        loading,
        isTokenValid,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// -----------------------------
// ⚡️ Custom Hook
// -----------------------------
export const useUser = () => useContext(UserContext);
