// src/context/UserContext.jsx
import React, { createContext, useState, useEffect } from "react";
import { loginUser, signUpUser, getUserProfile } from "../api/authApi";


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // { name, email, profilePic }

  // Load user from token on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUserProfile(token)
        .then((userData) => {
          const profile = userData.user || userData; // Handle nested user object
          if (profile) {
            setUser({
              name: profile.name || "User",
              email: profile.email || "",
              profilePic: profile.profilePic || null,
            });
          }
        })
        .catch(() => {
          localStorage.removeItem("token"); // Clear invalid token
        });
    }
  }, []);

  const login = async ({ prefix, email, password }) => {
    try {
      const response = await loginUser({ prefix, email, password });
      console.log("✅ Login response:", response);
      let userData = response.user || {};
      
      // Fetch profile from api/users/profile to ensure we have user data
      const profileData = await getUserProfile(response.token);
      userData = profileData.user || profileData; // Handle nested user object
      
      const user = {
        name: userData.name || "User",
        email: userData.email || email, // Fallback to input email
        profilePic: userData.profilePic || null,
      };
      setUser(user);
      localStorage.setItem("token", response.token);
      return response;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const signup = async (userData) => {
    try {
      const response = await signUpUser(userData);
      const userDataResponse = response.user || {};
      const user = {
        name: userDataResponse.name || "User",
        email: userDataResponse.email || userData.email,
        profilePic: userDataResponse.profilePic || null,
      };
      setUser(user);
      localStorage.setItem("token", response.token);
      return response;
    } catch (error) {
      console.error("Signup failed:", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </UserContext.Provider>
  );
};