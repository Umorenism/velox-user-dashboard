import { apiClient } from "./apiClient";


/**
 * ✅ User Login
 * Endpoint: POST /api/auth/login
 * Body: { prefix, email, password }
 */
export const loginUser = async (loginData) => {
  try {
    const res = await apiClient.post("/api/auth/login", loginData);
    return res.data;
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw error;
  }
};


/**
 * ✅ User Sign Up
 * Endpoint: POST /api/auth/signup
 * Body: { email, password, name, phone, prefix }
 */
export const signUpUser = async (userData) => {
  try {
    const res = await apiClient.post("/api/auth/signup", userData);
    return res.data;
  } catch (error) {
    console.error("Signup failed:", error.response?.data || error.message);
    throw error;
  }
};

/**
 * ✅ Verify Email
 * Endpoint: POST /api/auth/verify-email
 * Body: { email, code }
 */
export const verifyEmail = async (verifyData) => {
  try {
    const res = await apiClient.post("/api/auth/verify-email", verifyData);
    return res.data;
  } catch (error) {
    console.error("Email verification failed:", error.response?.data || error.message);
    throw error;
  }
};

/**
 * ✅ Resend Verification Code
 * Endpoint: POST /api/auth/resend-verification
 * Body: { email }
 */
export const resendVerificationEmail = async (emailData) => {
  try {
    const res = await apiClient.post("/api/auth/resend-verification", emailData);
    return res.data;
  } catch (error) {
    console.error("Resend verification failed:", error.response?.data || error.message);
    throw error;
  }
};
