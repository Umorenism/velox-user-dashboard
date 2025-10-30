import React, { createContext, useState, useEffect } from "react";
import { loginUser, getUserProfile } from "../api/authApi";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from token on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUserProfile(token)
        .then((res) => {
          const profile = res.user || res;
          setUser({
            name: profile.name || "User",
            email: profile.email,
            profilePic: profile.profilePic || null,
          });
        })
        .catch(() => {
          localStorage.removeItem("token");
        });
    }
  }, []);

  const login = async ({ prefix, email, password }) => {
    const res = await loginUser({ prefix, email, password });
    if (res?.token) {
      localStorage.setItem("token", res.token);
      const profile = await getUserProfile(res.token);
      const userData = profile.user || profile;
      setUser({
        name: userData.name || "User",
        email: userData.email || email,
        profilePic: userData.profilePic || null,
      });
    }
    return res;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
