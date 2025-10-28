// // src/context/UserContext.jsx
// import React, { createContext, useState, useEffect } from "react";
// import { loginUser, signUpUser } from "../api/authApi";

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // { name, email, profilePic }

//   // Function to handle login
//   const login = async (loginData) => {
//     try {
//       const response = await loginUser(loginData);
//       const userData = response.user || response; // Adjust based on API response structure
//       setUser({
//         name: userData.name || "User",
//         email: userData.email || "",
//         profilePic: userData.profilePic || null, // Fallback to null if no profile pic
//       });
//       return response;
//     } catch (error) {
//       throw error;
//     }
//   };

//   // Function to handle signup
//   const signup = async (userData) => {
//     try {
//       const response = await signUpUser(userData);
//       const userDataResponse = response.user || response; // Adjust based on API response structure
//       setUser({
//         name: userDataResponse.name || "User",
//         email: userDataResponse.email || "",
//         profilePic: userDataResponse.profilePic || null,
//       });
//       return response;
//     } catch (error) {
//       throw error;
//     }
//   };

//   // Function to handle logout
//   const logout = () => {
//     setUser(null);
//     // Additional logout logic (e.g., clear tokens) can be added here
//   };

//   return (
//     <UserContext.Provider value={{ user, login, signup, logout }}>
//       {children}
//     </UserContext.Provider>
//   );
// };







// src/context/UserContext.jsx
import React, { createContext, useState, useEffect } from "react";
import { loginUser, signUpUser } from "../api/authApi";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // { name, email, profilePic }

  // Load user from localStorage on mount (if token exists)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Optional: Fetch user profile if token exists
      fetchUserProfile(token).then((userData) => {
        if (userData) {
          setUser({
            name: userData.name || "User",
            email: userData.email || "",
            profilePic: userData.profilePic || null,
          });
        }
      }).catch(() => {
        localStorage.removeItem("token"); // Clear invalid token
      });
    }
  }, []);

  // Example fetchUserProfile (adjust based on your API)
  const fetchUserProfile = async (token) => {
    try {
      const res = await apiClient.get("/api/auth/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data.user || res.data;
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
      throw error;
    }
  };

  const login = async ({ prefix, email, password }) => {
    try {
      const response = await loginUser({ prefix, email, password });
      console.log("✅ Login response:", response);
      const userData = response.user || response; // Adjust based on API response
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
      const userDataResponse = response.user || response;
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