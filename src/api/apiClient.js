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




import axios from "axios";

const base_url = "https://backend.veloxcapitalmarkets.ai";

// ✅ Create a base Axios instance
export const apiClient = axios.create({
  baseURL: base_url,
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Automatically attach the correct token depending on context
apiClient.interceptors.request.use(
  (config) => {
    const isAdminRoute =
      config.url?.includes("/admin") || config.url?.includes("/dashboard");

    const token =
      (isAdminRoute
        ? localStorage.getItem("admin_token")
        : localStorage.getItem("user_token")) ||
      localStorage.getItem("access_token"); // fallback

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      console.warn("⚠️ No token found for request:", config.url);
    }

    return config;
  },
  (error) => Promise.reject(error)
);

