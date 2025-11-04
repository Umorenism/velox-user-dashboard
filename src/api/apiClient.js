// import axios from "axios";

// const base_url = "https://velox-n3kv.onrender.com/";

// // ✅ Create a base Axios instance
// export const apiClient = axios.create({
//   baseURL: base_url,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // ✅ Automatically attach token if available
// apiClient.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("access_token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );




// import axios from "axios";

// const base_url = "https://backend.veloxcapitalmarkets.ai";

// // ✅ Create a base Axios instance
// export const apiClient = axios.create({
//   baseURL: base_url,
//   headers: {
//     "Content-Type": "application/json",

//   },
// });

// // ✅ Automatically attach the correct token depending on context
// apiClient.interceptors.request.use(
//   (config) => {
//     const isAdminRoute =
//       config.url?.includes("/admin") || config.url?.includes("/dashboard");

//     const token =
//       (isAdminRoute
//         ? localStorage.getItem("admin_token")
//         : localStorage.getItem("user_token")) ||
//       localStorage.getItem("access_token"); // fallback

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     } else {
//       console.warn("⚠️ No token found for request:", config.url);
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );






// // src/api/apiClient.js
// import axios from "axios";

// const base_url = "https://backend.veloxcapitalmarkets.ai";

// export const apiClient = axios.create({
//   baseURL: base_url,
//   headers: { "Content-Type": "application/json" },
// });

// /* ---------- REQUEST INTERCEPTOR ---------- */
// apiClient.interceptors.request.use(
//   (config) => {
//     // Skip token injection for login request
//     if (config.url?.includes("/auth/login")) {
//       return config;
//     }

//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     } else {
//       console.warn("No token found for request:", config.url);
//     }
//     return config;
//   },
//   (err) => Promise.reject(err)
// );

// /* ---------- 401 → Auto Logout ---------- */
// apiClient.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     if (err.response?.status === 401) {
//       localStorage.removeItem("token");
//       localStorage.removeItem("user");
//       window.location.href = "/login";
//     }
//     return Promise.reject(err);
//   }
// );








// src/api/apiClient.js
import axios from "axios";

const base_url = "https://backend.veloxcapitalmarkets.ai";

export const apiClient = axios.create({
  baseURL: base_url,
  headers: { "Content-Type": "application/json" },
});

// Automatically attach token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle expired token
apiClient.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      console.warn("⚠️ Session expired, logging out...");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);


