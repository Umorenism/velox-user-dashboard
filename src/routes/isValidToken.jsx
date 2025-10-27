// src/utils/auth.js
export const isTokenValid = () => {
  const token = localStorage.getItem("token");
  if (!token) return false;

  try {
    const payload = JSON.parse(atob(token.split(".")[1])); // decode JWT payload
    if (payload.exp && Date.now() >= payload.exp * 1000) {
      // token expired
      localStorage.removeItem("token");
      return false;
    }
    return true;
  } catch (error) {
    // invalid token
    localStorage.removeItem("token");
    return false;
  }
};
