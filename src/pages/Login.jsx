




// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { User, Lock, Eye, EyeOff, Type } from "lucide-react";
// import ReactCountryFlag from "react-country-flag";
// import logo from "../assets/logovelox.svg"; // 👈 your logo path
// import logo1 from "../assets/ver.jpeg"; // 👈 your logo path

// export default function Login() {
//   const [form, setForm] = useState({
//     prefix: "",
//     email: "",
//     password: "",
//     captcha: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState("US");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.email]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");
//     if (!form.prefix || !form.email || !form.password || !form.captcha) {
//       setError("All fields are required!");
//       return;
//     }
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       if (form.email === "edalex" && form.password === "Alex2024") {
//         alert("✅ Login Successful!");
//       } else {
//         setError("Invalid credentials or captcha!");
//       }
//     }, 1500);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-[#07112b] text-white relative overflow-hidden">
//       {/* 🌌 Background */}
//       <div className="absolute inset-0 bg-img bg-cover bg-center opacity-30"></div>
//       <div className="absolute inset-0 bg-gradient-to-b from-[#08152d]/0 via-[#08152d]/0 to-[#030b1a]/0"></div>

//       {/* 🧭 Transparent Header */}
//       <header className="absolute top-0 left-0 w-full flex justify-between items-center px-4 sm:px-8 md:px-16 py-3 z-20 bg-transparent">
//   {/* Logo */}
//   <div className="flex items-center gap-2">
//     <img
//       src={logo}
//       alt="Velox Logo"
//       className="w-12 sm:w-14 md:w-20 object-contain transition-all duration-200"
//     />
//   </div>

//   {/* Country Selector */}
//   <div className="flex items-center gap-2 sm:gap-3">
//     <ReactCountryFlag
//       countryCode={selectedCountry}
//       svg
//       style={{
//         width: "1.5em",
//         height: "1.5em",
//         borderRadius: "50%",
//         boxShadow: "0 0 4px rgba(0,0,0,0.3)",
//       }}
//       title={selectedCountry}
//     />
//     <select
//       value={selectedCountry}
//       onChange={(e) => setSelectedCountry(e.target.value)}
//       className="bg-transparent text-white text-xs sm:text-sm font-medium border border-[#e3b874]/40 rounded-md px-2 sm:px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#e3b874] appearance-none"
//     >
//       <option value="US">US</option>
//       <option value="GB">UK</option>
//       <option value="NG">NG</option>
//       <option value="AE">UAE</option>
//       <option value="IN">IN</option>
//     </select>
//   </div>
// </header>


//       {/* 🧠 Main Content */}
//       <div className="relative mb-10 mt-10 md:mt-0 z-10 flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-16 lg:px-24 mt-20">
//         {/* LEFT SIDE */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="w-full md:w-1/2 mb-10 md:mb-0"
//         >
//           <h1 className="text-3xl font-semibold text-gray-100 mb-4">
//             Secure Client Area
//           </h1>
//           <h2 className="text-4xl md:text-5xl font-bold text-white leading-snug">
//             Designed in pursuit of{" "}
//             <span className="text-[#e3b874]">higher performance.</span>
//           </h2>
//         </motion.div>

//         {/* RIGHT SIDE (Login Form) */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="bg-[#0a1a3a]/90 backdrop-blur-lg p-8 rounded-2xl w-full max-w-md shadow-xl border border-[#1f315c]"
//         >
//           <h2 className="text-2xl font-bold text-[#e3b874] mb-2 text-center">
//             Welcome!
//           </h2>
//           <p className="text-center text-sm text-gray-400 mb-6">
//             By logging in, you agree to the{" "}
//             <span className="text-[#e3b874] cursor-pointer hover:underline">
//               Terms & Conditions
//             </span>
//             .
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             {/* PREFIX + USERNAME */}
//             <div className="flex space-x-2">
//               <div className="relative w-1/3">
//                 <Type className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
//                 <input
//                   type="text"
//                   name="prefix"
//                   placeholder="Prefix"
//                   value={form.prefix}
//                   onChange={handleChange}
//                   className="w-full pl-9 pr-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
//                 />
//               </div>

//               <div className="relative w-2/3">
//                 <User className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
//                 <input
//                   type="text"
//                   name="username"
//                   placeholder="Username"
//                   value={form.email}
//                   onChange={handleChange}
//                   className="w-full pl-9 pr-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
//                 />
//               </div>
//             </div>

//             {/* PASSWORD */}
//             <div className="relative">
//               <Lock className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="Password"
//                 value={form.password}
//                 onChange={handleChange}
//                 className="w-full pl-9 pr-9 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-2.5 text-gray-400 hover:text-[#e3b874] transition"
//               >
//                 {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//               </button>
//             </div>

//             {/* CAPTCHA */}
//             <div className="flex items-center space-x-3">
//               <div className="bg-[#091631] text-[#e3b874] px-4 py-2 rounded-md font-semibold select-none">
//                 W D × 9
//               </div>
//               <input
//                 type="text"
//                 name="captcha"
//                 placeholder="Captcha"
//                 value={form.captcha}
//                 onChange={handleChange}
//                 className="flex-1 px-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
//               />
//             </div>

//             {/* ERROR */}
//             {error && <p className="text-red-400 text-sm text-center">{error}</p>}

//             {/* BUTTON */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-2 bg-gradient-to-b from-[#e3b874] to-[#c19a4a] text-[#091631] font-semibold rounded-md hover:opacity-90 transition disabled:opacity-50"
//             >
//               {loading ? "Logging in..." : "Login"}
//             </button>

//             <div className="text-center text-sm text-gray-400 mt-2">
//               <a href="#" className="hover:underline">
//                 Forgot Password?
//               </a>
//             </div>
//           </form>

//           {/* FOOTER */}
//           <div className="text-center text-xs text-gray-400 mt-6">
//             Need Login Assistance?{" "}
//             <a
//               href="mailto:contact@internationalfinanceasia.com"
//               className="text-[#e3b874] hover:underline"
//             >
//               contact@internationalfinanceasia.com
//             </a>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }









// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { User, Lock, Eye, EyeOff, Type } from "lucide-react";
// import ReactCountryFlag from "react-country-flag";
// import logo from "../assets/logovelox.svg";
// import { loginUser } from "../api/authApi";

// /* --------------------------------------------------------------
//    5-character captcha: uppercase letters + numbers (e.g. A9K2M)
//    -------------------------------------------------------------- */
// const generateCaptcha = () => {
//   const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const nums  = "0123456789";
//   const pool  = chars + nums; // 36 possible chars

//   let result = "";
//   for (let i = 0; i < 5; i++) {
//     result += pool[Math.floor(Math.random() * pool.length)];
//   }
//   return result; // e.g. "X7P4Q", "A9K2M"
// };

// export default function Login() {
//   const [form, setForm] = useState({
//     prefix: "velox",      // Client-side security (user must type)
//     email: "",
//     password: "",
//     captcha: "",
//   });
//   const [captchaText, setCaptchaText] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState("US");

//   // Generate captcha on mount
//   useEffect(() => {
//     setCaptchaText(generateCaptcha());
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     // Enforce uppercase for captcha
//     if (name === "captcha") {
//       setForm({ ...form, [name]: value.toUpperCase() });
//     } else {
//       setForm({ ...form, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     // Client-side validation
//     if (!form.email || !form.password || !form.captcha) {
//       setError("All fields are required!");
//       return;
//     }

//     // Client-side prefix check: must be "velox"
//     if (form.prefix.trim().toLowerCase() !== "velox") {
//       setError("Invalid security prefix!");
//       return;
//     }

//     // Captcha check: exact 5-char match
//     if (form.captcha !== captchaText) {
//       setError("Invalid captcha! Try again.");
//       setForm((f) => ({ ...f, captcha: "" }));
//       setCaptchaText(generateCaptcha()); // New captcha
//       return;
//     }

//     // Backend payload: include real prefix
//     const payload = {
//       email: form.email,
//       password: form.password,
//       prefix: "admincontrol20x25", // Required by backend
//     };

//     try {
//       setLoading(true);
//       const res = await loginUser(payload);
//       console.log("Login success:", res);

//       if (res?.token) {
//         localStorage.setItem("access_token", res.token);
//       }

//       alert("Login Successful!");
//       // Optional: window.location.href = "/dashboard";
//     } catch (err) {
//       console.error(err);
//       const msg = err.response?.data?.error || err.response?.data?.message || "Login failed!";

//       if (msg.includes("Security code (prefix) is required")) {
//         setError("Security validation failed. Contact support.");
//       } else {
//         setError(msg);
//       }

//       // Regenerate captcha on any error
//       setCaptchaText(generateCaptcha());
//       setForm((f) => ({ ...f, captcha: "" }));
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-[#07112b] text-white relative overflow-hidden">
//       <div className="absolute inset-0 bg-img bg-cover bg-center "></div>

//       {/* Header */}
//       <header className="absolute top-0 left-0 w-full flex justify-between items-center px-4 sm:px-8 md:px-16 py-3 z-20 bg-transparent">
//         <div className="flex items-center gap-2">
//           <img
//             src={logo}
//             alt="Velox Logo"
//             className="w-12 sm:w-14 md:w-20 object-contain transition-all duration-200"
//           />
//         </div>

//         <div className="flex items-center gap-2 sm:gap-3">
//           <ReactCountryFlag
//             countryCode={selectedCountry}
//             svg
//             style={{
//               width: "1.5em",
//               height: "1.5em",
//               borderRadius: "50%",
//               boxShadow: "0 0 4px rgba(0,0,0,0.3)",
//             }}
//             title={selectedCountry}
//           />
//           <select
//             value={selectedCountry}
//             onChange={(e) => setSelectedCountry(e.target.value)}
//             className="bg-transparent text-white text-xs sm:text-sm font-medium border border-[#e3b874]/40 rounded-md px-2 sm:px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#e3b874] appearance-none"
//           >
//             <option value="US">US</option>
//             <option value="GB">UK</option>
//             <option value="NG">NG</option>
//             <option value="AE">UAE</option>
//             <option value="IN">IN</option>
//           </select>
//         </div>
//       </header>

//       {/* Main Content */}
//       <div className="relative mb-10 mt-10 md:mt-0 z-10 flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-16 lg:px-24 mt-20">

//         {/* Left Side */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="w-full md:w-1/2 mb-10 md:mb-0"
//         >
//           <h1 className="text-3xl font-semibold text-gray-100 mb-4">
//             Secure Client Area
//           </h1>
//           <h2 className="text-4xl md:text-5xl font-bold text-white leading-snug">
//             Designed in pursuit of{" "}
//             <span className="text-[#e3b874]">higher performance.</span>
//           </h2>
//         </motion.div>

//         {/* Login Form */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="bg-[#0a1a3a]/90 backdrop-blur-lg p-8 rounded-2xl w-full max-w-md shadow-xl border border-[#1f315c]"
//         >
//           <h2 className="text-2xl font-bold text-[#e3b874] mb-2 text-center">
//             Welcome!
//           </h2>
//           <p className="text-center text-sm text-gray-400 mb-6">
//             By logging in, you agree to the{" "}
//             <span className="text-[#e3b874] cursor-pointer hover:underline">
//               Terms & Conditions
//             </span>
//             .
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-4">

//             {/* Prefix (Client-side: velox) */}
//             <div className="flex space-x-2">
//               <div className="relative w-1/3">
//                 <Type className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
//                 <input
//                   type="text"
//                   name="prefix"
//                   placeholder="Prefix"
//                   value={form.prefix}
//                   onChange={handleChange}
//                   required
//                   className="w-full pl-9 pr-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
//                 />
//               </div>

//               {/* Email */}
//               <div className="relative w-2/3">
//                 <User className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={form.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full pl-9 pr-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
//                 />
//               </div>
//             </div>

//             {/* Password */}
//             <div className="relative">
//               <Lock className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="Password"
//                 value={form.password}
//                 onChange={handleChange}
//                 required
//                 className="w-full pl-9 pr-9 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-2.5 text-gray-400 hover:text-[#e3b874] transition"
//               >
//                 {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//               </button>
//             </div>

//             {/* Captcha: 5 mixed letters/numbers */}
//             <div className="flex items-center space-x-3">
//               <div className="bg-[#091631] text-[#e3b874] px-4 py-2 rounded-md font-bold select-none tracking-widest text-lg">
//                 {captchaText}
//               </div>
//               <input
//                 type="text"
//                 name="captcha"
//                 placeholder="Enter 5 chars"
//                 value={form.captcha}
//                 onChange={handleChange}
//                 required
//                 maxLength={5}
//                 className="flex-1 px-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none font-mono"
//                 style={{ letterSpacing: "0.2em" }}
//               />
//             </div>

//             {error && <p className="text-red-400 text-sm text-center">{error}</p>}

//             {/* Submit */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-2 bg-gradient-to-b from-[#e3b874] to-[#c19a4a] text-[#091631] font-semibold rounded-md hover:opacity-90 transition disabled:opacity-50"
//             >
//               {loading ? "Logging in..." : "Login"}
//             </button>

//             <div className="text-center text-sm text-gray-400 mt-2">
//               <a href="#" className="hover:underline">
//                 Forgot Password?
//               </a>
//             </div>
//           </form>

//           <div className="text-center text-xs text-gray-400 mt-6">
//             Need Login Assistance?{" "}
//             <a
//               href="mailto:contact@internationalfinanceasia.com"
//               className="text-[#e3b874] hover:underline"
//             >
//               contact@internationalfinanceasia.com
//             </a>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }







// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { User, Lock, Eye, EyeOff, Type } from "lucide-react";
// import ReactCountryFlag from "react-country-flag";
// import { useNavigate } from "react-router-dom"; // <-- Added
// import logo from "../assets/logovelox.svg";
// import { loginUser } from "../api/authApi";

// /* --------------------------------------------------------------
//    5-character captcha: uppercase letters + numbers (e.g. A9K2M)
//    -------------------------------------------------------------- */
// const generateCaptcha = () => {
//   const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const nums  = "0123456789";
//   const pool  = chars + nums;

//   let result = "";
//   for (let i = 0; i < 5; i++) {
//     result += pool[Math.floor(Math.random() * pool.length)];
//   }
//   return result;
// };

// export default function Login() {
//   const navigate = useNavigate(); // <-- For redirect

//   const [form, setForm] = useState({
//     prefix: "velox",
//     email: "",
//     password: "",
//     captcha: "",
//   });
//   const [captchaText, setCaptchaText] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState("US");

//   useEffect(() => {
//     setCaptchaText(generateCaptcha());
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "captcha") {
//       setForm({ ...form, [name]: value.toUpperCase() });
//     } else {
//       setForm({ ...form, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!form.email || !form.password || !form.captcha) {
//       setError("All fields are required!");
//       return;
//     }

//     if (form.prefix.trim().toLowerCase() !== "velox") {
//       setError("Invalid security prefix!");
//       return;
//     }

//     if (form.captcha !== captchaText) {
//       setError("Invalid captcha! Try again.");
//       setForm((f) => ({ ...f, captcha: "" }));
//       setCaptchaText(generateCaptcha());
//       return;
//     }

//     const payload = {
//       email: form.email,
//       password: form.password,
//       prefix: "admincontrol20x25",
//     };

//     try {
//       setLoading(true);
//       const res = await loginUser(payload);
//       console.log("Login success:", res);

//       // Save token
//       if (res?.token) {
//         localStorage.setItem("access_token", res.token);
//       }

//       // Redirect to dashboard
//       navigate("/dashboard");

//     } catch (err) {
//       console.error(err);
//       const msg = err.response?.data?.error || err.response?.data?.message || "Login failed!";

//       if (msg.includes("Security code (prefix) is required")) {
//         setError("Security validation failed. Contact support.");
//       } else {
//         setError(msg);
//       }

//       setCaptchaText(generateCaptcha());
//       setForm((f) => ({ ...f, captcha: "" }));
//     } finally {
//       setLoading(false);
//     }
//   };




//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   setError("");

//   //   if (!form.email || !form.password || !form.captcha)
//   //     return setError("All fields are required!");

//   //   if (form.prefix.trim().toLowerCase() !== "velox")
//   //     return setError("Invalid security prefix!");

//   //   if (form.captcha !== captchaText) {
//   //     setError("Invalid captcha! Try again.");
//   //     setCaptchaText(generateCaptcha());
//   //     return;
//   //   }

//   //   try {
//   //     setLoading(true);
//   //     const response = await login({
//   //       email: form.email,
//   //       password: form.password,
//   //       prefix: "admincontrol20x25",
//   //     });

//   //     if (response?.token) {
//   //       localStorage.setItem("token", response.token);
//   //       navigate("/dashboard", { replace: true }); // ✅ Redirect once token saved
//   //     } else {
//   //       setError("Invalid credentials or missing token!");
//   //     }
//   //   } catch (err) {
//   //     console.error("Login error:", err);
//   //     const msg = err.response?.data?.message || "Login failed!";
//   //     setError(msg);
//   //     setCaptchaText(generateCaptcha());
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-[#07112b] text-white relative overflow-hidden">
//       <div className="absolute inset-0 bg-img bg-cover bg-center "></div>

//       {/* Header */}
//       <header className="absolute top-0 left-0 w-full flex justify-between items-center px-4 sm:px-8 md:px-16 py-3 z-20 bg-transparent">
//         <div className="flex items-center gap-2">
//           <img
//             src={logo}
//             alt="Velox Logo"
//             className="w-12 sm:w-14 md:w-20 object-contain transition-all duration-200"
//           />
//         </div>

//         <div className="flex items-center gap-2 sm:gap-3">
//           <ReactCountryFlag
//             countryCode={selectedCountry}
//             svg
//             style={{
//               width: "1.5em",
//               height: "1.5em",
//               borderRadius: "50%",
//               boxShadow: "0 0 4px rgba(0,0,0,0.3)",
//             }}
//             title={selectedCountry}
//           />
//           <select
//             value={selectedCountry}
//             onChange={(e) => setSelectedCountry(e.target.value)}
//             className="bg-transparent text-white text-xs sm:text-sm font-medium border border-[#e3b874]/40 rounded-md px-2 sm:px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#e3b874] appearance-none"
//           >
//             <option value="US">US</option>
//             <option value="GB">UK</option>
//             <option value="NG">NG</option>
//             <option value="AE">UAE</option>
//             <option value="IN">IN</option>
//           </select>
//         </div>
//       </header>

//       {/* Main Content */}
//       <div className="relative mb-10 mt-10 md:mt-0 z-10 flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-16 lg:px-24 mt-20">

//         {/* Left Side */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="w-full md:w-1/2 mb-10 md:mb-0"
//         >
//           <h1 className="text-3xl font-semibold text-gray-100 mb-4">
//             Secure Client Area
//           </h1>
//           <h2 className="text-4xl md:text-5xl font-bold text-white leading-snug">
//             Designed in pursuit of{" "}
//             <span className="text-[#e3b874]">higher performance.</span>
//           </h2>
//         </motion.div>

//         {/* Login Form */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="bg-[#0a1a3a]/90 backdrop-blur-lg p-8 rounded-2xl w-full max-w-md shadow-xl border border-[#1f315c]"
//         >
//           <h2 className="text-2xl font-bold text-[#e3b874] mb-2 text-center">
//             Welcome!
//           </h2>
//           <p className="text-center text-sm text-gray-400 mb-6">
//             By logging in, you agree to the{" "}
//             <span className="text-[#e3b874] cursor-pointer hover:underline">
//               Terms & Conditions
//             </span>
//             .
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-4">

//             {/* Prefix (Client-side: velox) */}
//             <div className="flex space-x-2">
//               <div className="relative w-1/3">
//                 <Type className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
//                 <input
//                   type="text"
//                   name="prefix"
//                   placeholder="Prefix"
//                   value={form.prefix}
//                   onChange={handleChange}
//                   required
//                   className="w-full pl-9 pr-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
//                 />
//               </div>

//               {/* Email */}
//               <div className="relative w-2/3">
//                 <User className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={form.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full pl-9 pr-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
//                 />
//               </div>
//             </div>

//             {/* Password */}
//             <div className="relative">
//               <Lock className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="Password"
//                 value={form.password}
//                 onChange={handleChange}
//                 required
//                 className="w-full pl-9 pr-9 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-2.5 text-gray-400 hover:text-[#e3b874] transition"
//               >
//                 {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//               </button>
//             </div>

//             {/* Captcha: 5 mixed letters/numbers */}
//             <div className="flex items-center space-x-3">
//               <div className="bg-[#091631] text-[#e3b874] px-4 py-2 rounded-md font-bold select-none tracking-widest text-lg">
//                 {captchaText}
//               </div>
//               <input
//                 type="text"
//                 name="captcha"
//                 placeholder="Enter 5 chars"
//                 value={form.captcha}
//                 onChange={handleChange}
//                 required
//                 maxLength={5}
//                 className="flex-1 px-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none font-mono"
//                 style={{ letterSpacing: "0.2em" }}
//               />
//             </div>

//             {error && <p className="text-red-400 text-sm text-center">{error}</p>}

//             {/* Submit */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-2 bg-gradient-to-b from-[#e3b874] to-[#c19a4a] text-[#091631] font-semibold rounded-md hover:opacity-90 transition disabled:opacity-50"
//             >
//               {loading ? "Logging in..." : "Login"}
//             </button>

//             <div className="text-center text-sm text-gray-400 mt-2">
//               <a href="#" className="hover:underline">
//                 Forgot Password?
//               </a>
//             </div>
//           </form>

//           <div className="text-center text-xs text-gray-400 mt-6">
//             Need Login Assistance?{" "}
//             <a
//               href="mailto:contact@internationalfinanceasia.com"
//               className="text-[#e3b874] hover:underline"
//             >
//               contact@internationalfinanceasia.com
//             </a>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }











// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { User, Lock, Eye, EyeOff, Type } from "lucide-react";
// import ReactCountryFlag from "react-country-flag";
// import { useNavigate } from "react-router-dom";
// import logo from "../assets/logovelox.svg";
// import { loginUser } from "../api/authApi";

// // Generate captcha
// const generateCaptcha = () => {
//   const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const nums = "0123456789";
//   const pool = chars + nums;
//   let result = "";
//   for (let i = 0; i < 5; i++) {
//     result += pool[Math.floor(Math.random() * pool.length)];
//   }
//   return result;
// };

// export default function Login() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     prefix: "velox",
//     email: "",
//     password: "",
//     captcha: "",
//   });
//   const [captchaText, setCaptchaText] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState("US");

//   useEffect(() => {
//     setCaptchaText(generateCaptcha());
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "captcha") {
//       setForm({ ...form, [name]: value.toUpperCase() });
//     } else {
//       setForm({ ...form, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!form.email || !form.password || !form.captcha) {
//       setError("All fields are required!");
//       return;
//     }

//     if (form.prefix.trim().toLowerCase() !== "velox") {
//       setError("Invalid security prefix!");
//       return;
//     }

//     if (form.captcha !== captchaText) {
//       setError("Invalid captcha! Try again.");
//       setForm((f) => ({ ...f, captcha: "" }));
//       setCaptchaText(generateCaptcha());
//       return;
//     }

//     const payload = {
//       email: form.email,
//       password: form.password,
//       prefix: "admincontrol20x25",
//     };

//     try {
//       setLoading(true);
//       const res = await loginUser(payload);

//       if (res?.token) {
//         // ✅ Use consistent key expected by ProtectedRoute
//         localStorage.setItem("token", res.token);
//         localStorage.setItem("user", JSON.stringify(res.user || {}));

//         // ✅ Redirect to dashboard
//         navigate("/dashboard", { replace: true });
//       } else {
//         setError("Invalid response. Please try again.");
//       }
//     } catch (err) {
//       console.error("Login failed:", err);
//       const msg =
//         err.response?.data?.error ||
//         err.response?.data?.message ||
//         "Login failed!";
//       setError(msg);
//       setCaptchaText(generateCaptcha());
//       setForm((f) => ({ ...f, captcha: "" }));
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-[#07112b] text-white relative overflow-hidden">
//       <div className="absolute inset-0 bg-img bg-cover bg-center "></div>

//       <header className="absolute top-0 left-0 w-full flex justify-between items-center px-4 sm:px-8 md:px-16 py-3 z-20 bg-transparent">
//         <div className="flex items-center gap-2">
//           <img
//             src={logo}
//             alt="Velox Logo"
//             className="w-12 sm:w-14 md:w-20 object-contain transition-all duration-200"
//           />
//         </div>

//         <div className="flex items-center gap-2 sm:gap-3">
//           <ReactCountryFlag
//             countryCode={selectedCountry}
//             svg
//             style={{
//               width: "1.5em",
//               height: "1.5em",
//               borderRadius: "50%",
//               boxShadow: "0 0 4px rgba(0,0,0,0.3)",
//             }}
//             title={selectedCountry}
//           />
//           <select
//             value={selectedCountry}
//             onChange={(e) => setSelectedCountry(e.target.value)}
//             className="bg-transparent text-white text-xs sm:text-sm font-medium border border-[#e3b874]/40 rounded-md px-2 sm:px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#e3b874] appearance-none"
//           >
//             <option value="US">US</option>
//             <option value="GB">UK</option>
//             <option value="NG">NG</option>
//             <option value="AE">UAE</option>
//             <option value="IN">IN</option>
//           </select>
//         </div>
//       </header>

//       <div className="relative mb-10 mt-10 md:mt-0 z-10 flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-16 lg:px-24 mt-20">
//         {/* Left side */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="w-full md:w-1/2 mb-10 md:mb-0"
//         >
//           <h1 className="text-3xl font-semibold text-gray-100 mb-4">
//             Secure Client Area
//           </h1>
//           <h2 className="text-4xl md:text-5xl font-bold text-white leading-snug">
//             Designed in pursuit of{" "}
//             <span className="text-[#e3b874]">higher performance.</span>
//           </h2>
//         </motion.div>

//         {/* Right side (form) */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="bg-[#0a1a3a]/90 backdrop-blur-lg p-8 rounded-2xl w-full max-w-md shadow-xl border border-[#1f315c]"
//         >
//           <h2 className="text-2xl font-bold text-[#e3b874] mb-2 text-center">
//             Welcome!
//           </h2>
//           <p className="text-center text-sm text-gray-400 mb-6">
//             By logging in, you agree to the{" "}
//             <span className="text-[#e3b874] cursor-pointer hover:underline">
//               Terms & Conditions
//             </span>
//             .
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="flex space-x-2">
//               <div className="relative w-1/3">
//                 <Type className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
//                 <input
//                   type="text"
//                   name="prefix"
//                   placeholder="Prefix"
//                   value={form.prefix}
//                   onChange={handleChange}
//                   required
//                   className="w-full pl-9 pr-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
//                 />
//               </div>

//               <div className="relative w-2/3">
//                 <User className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={form.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full pl-9 pr-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
//                 />
//               </div>
//             </div>

//             <div className="relative">
//               <Lock className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="Password"
//                 value={form.password}
//                 onChange={handleChange}
//                 required
//                 className="w-full pl-9 pr-9 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-2.5 text-gray-400 hover:text-[#e3b874] transition"
//               >
//                 {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//               </button>
//             </div>

//             <div className="flex items-center space-x-3">
//               <div className="bg-[#091631] text-[#e3b874] px-4 py-2 rounded-md font-bold select-none tracking-widest text-lg">
//                 {captchaText}
//               </div>
//               <input
//                 type="text"
//                 name="captcha"
//                 placeholder="Enter 5 chars"
//                 value={form.captcha}
//                 onChange={handleChange}
//                 required
//                 maxLength={5}
//                 className="flex-1 px-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none font-mono"
//                 style={{ letterSpacing: "0.2em" }}
//               />
//             </div>

//             {error && <p className="text-red-400 text-sm text-center">{error}</p>}

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-2 bg-gradient-to-b from-[#e3b874] to-[#c19a4a] text-[#091631] font-semibold rounded-md hover:opacity-90 transition disabled:opacity-50"
//             >
//               {loading ? "Logging in..." : "Login"}
//             </button>

//             <div className="text-center text-sm text-gray-400 mt-2">
//               <a href="#" className="hover:underline">
//                 Forgot Password?
//               </a>
//             </div>
//           </form>

//           <div className="text-center text-xs text-gray-400 mt-6">
//             Need Login Assistance?{" "}
//             <a
//               href="mailto:contact@internationalfinanceasia.com"
//               className="text-[#e3b874] hover:underline"
//             >
//               contact@veloxcapital.com
//             </a>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }









// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { User, Lock, Eye, EyeOff, Type } from "lucide-react";
// import ReactCountryFlag from "react-country-flag";
// import { useNavigate } from "react-router-dom";
// import logo from "../assets/logovelox.svg";
// import { loginUser } from "../api/authApi";


// /* -------------------------------------------------------------
//    1. Put your media files here (inside src/assets/backgrounds/)
//    ------------------------------------------------------------- */
// import bg1 from "../assets/veloximg2.jpeg";
// import bg2 from "../assets/veloxvid1.mp4";
// import bg3 from "../assets/veloximg2.jpeg";
// import bg4 from "../assets/veloxvid2.mp4";

// /* -------------------------------------------------------------
//    2. List them in order – image or video, does not matter
//    ------------------------------------------------------------- */
// const backgroundMedia = [
//   { type: "image", src: bg1 },
//   { type: "video", src: bg2 },
//   { type: "image", src: bg3 },
//   { type: "video", src: bg4 },
//   // add as many as you want …
// ];

// /* -------------------------------------------------------------
//    3. BackgroundSwitcher component
//    ------------------------------------------------------------- */
// function BackgroundSwitcher() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((i) => (i + 1) % backgroundMedia.length);
//     }, 8000);               // change every 8 seconds
//     return () => clearInterval(interval);
//   }, []);

//   const current = backgroundMedia[index];

//   return (
//     <div className="absolute inset-0 overflow-hidden">
//       {current.type === "image" ? (
//         <img
//           src={current.src}
//           alt=""
//           className="w-full h-full object-cover transition-opacity duration-1000 opacity-0"
//           style={{ opacity: 1 }}
//         />
//       ) : (
//         <video
//           src={current.src}
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="w-full h-full object-cover transition-opacity duration-1000 opacity-100"
//         />
//       )}
//       {/* Fade overlay so the login form stays readable */}
//       <div className="absolute inset-0 bg-[#07112b]/60" />
//     </div>
//   );
// }

// /* -------------------------------------------------------------
//    4. Rest of your original component (unchanged)
//    ------------------------------------------------------------- */
// const generateCaptcha = () => {
//   const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const nums = "0123456789";
//   const pool = chars + nums;
//   let result = "";
//   for (let i = 0; i < 5; i++) {
//     result += pool[Math.floor(Math.random() * pool.length)];
//   }
//   return result;
// };

// export default function Login() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     prefix: "velox",
//     email: "",
//     password: "",
//     captcha: "",
//   });
//   const [captchaText, setCaptchaText] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState("US");

//   useEffect(() => {
//     setCaptchaText(generateCaptcha());
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "captcha") {
//       setForm({ ...form, [name]: value.toUpperCase() });
//     } else {
//       setForm({ ...form, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!form.email || !form.password || !form.captcha) {
//       setError("All fields are required!");
//       return;
//     }

//     if (form.prefix.trim().toLowerCase() !== "velox") {
//       setError("Invalid security prefix!");
//       return;
//     }

//     if (form.captcha !== captchaText) {
//       setError("Invalid captcha! Try again.");
//       setForm((f) => ({ ...f, captcha: "" }));
//       setCaptchaText(generateCaptcha());
//       return;
//     }

//     const payload = {
//       email: form.email,
//       password: form.password,
//       prefix: "admincontrol20x25",
//     };

//     try {
//       setLoading(true);
//       const res = await loginUser(payload);

//       if (res?.token) {
//         localStorage.setItem("token", res.token);
//         localStorage.setItem("user", JSON.stringify(res.user || {}));
//         navigate("/dashboard", { replace: true });
//       } else {
//         setError("Invalid response. Please try again.");
//       }
//     } catch (err) {
//       console.error("Login failed:", err);
//       const msg =
//         err.response?.data?.error ||
//         err.response?.data?.message ||
//         "Login failed!";
//       setError(msg);
//       setCaptchaText(generateCaptcha());
//       setForm((f) => ({ ...f, captcha: "" }));
//     } finally {
//       setLoading(false);
//     }
//   };




// //   const handleSubmit = async (e) => {
// //   e.preventDefault();
// //   setError("");

// //   if (!form.email || !form.password || !form.captcha) {
// //     setError("All fields are required!");
// //     return;
// //   }

// //   if (form.prefix.trim().toLowerCase() !== "velox") {
// //     setError("Invalid security prefix!");
// //     return;
// //   }

// //   if (form.captcha !== captchaText) {
// //     setError("Invalid captcha! Try again.");
// //     setForm((f) => ({ ...f, captcha: "" }));
// //     setCaptchaText(generateCaptcha());
// //     return;
// //   }

// //   const payload = {
// //     email: form.email,
// //     password: form.password,
// //     prefix: "admincontrol20x25",
// //   };

// //   try {
// //     setLoading(true);
// //     const res = await loginUser(payload);

// //     if (res?.token) {
// //       localStorage.setItem("token", res.token);
// //       localStorage.setItem("user", JSON.stringify(res.user || {}));

// //       if (!isTokenValid()) {
// //         setError("Token expired immediately. Please try again.");
// //         localStorage.clear();
// //         return;
// //       }

// //       // Now works – useContext is imported
// //       const { login } = useContext(UserContext);
// //       await login({
// //         prefix: form.prefix,
// //         email: form.email,
// //         password: form.password,
// //       }).catch(() => {
// //         console.warn("Context login failed, but token is stored.");
// //       });

// //       navigate("/dashboard", { replace: true });
// //     } else {
// //       setError("Invalid response. Please try again.");
// //     }
// //   } catch (err) {
// //     console.error("Login failed:", err);
// //     const msg =
// //       err.response?.data?.error ||
// //       err.response?.data?.message ||
// //       "Login failed!";
// //     setError(msg);
// //     setCaptchaText(generateCaptcha());
// //     setForm((f) => ({ ...f, captcha: "" }));
// //   } finally {
// //     setLoading(false);
// //   }
// // };
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-[#07112b] text-white relative overflow-hidden">
//       {/* NEW: rotating background */}
//       <BackgroundSwitcher />

//       <header className="absolute top-0 left-0 w-full flex justify-between items-center px-4 sm:px-8 md:px-16 py-3 z-20 bg-transparent">
//         <div className="flex items-center gap-2">
//           <img
//             src={logo}
//             alt="Velox Logo"
//             className="w-12 sm:w-14 md:w-20 object-contain transition-all duration-200"
//           />
//         </div>

//         <div className="flex items-center gap-2 sm:gap-3">
//           <ReactCountryFlag
//             countryCode={selectedCountry}
//             svg
//             style={{
//               width: "1.5em",
//               height: "1.5em",
//               borderRadius: "50%",
//               boxShadow: "0 0 4px rgba(0,0,0,0.3)",
//             }}
//             title={selectedCountry}
//           />
//           <select
//             value={selectedCountry}
//             onChange={(e) => setSelectedCountry(e.target.value)}
//             className="bg-transparent text-white text-xs sm:text-sm font-medium border border-[#e3b874]/40 rounded-md px-2 sm:px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#e3b874] appearance-none"
//           >
//             <option value="US">US</option>
//             <option value="GB">UK</option>
//             <option value="NG">NG</option>
//             <option value="AE">UAE</option>
//             <option value="IN">IN</option>
//           </select>
//         </div>
//       </header>

//       <div className="relative mb-10 mt-10 md:mt-0 z-10 flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-16 lg:px-24 mt-20">
//         {/* Left side */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="w-full md:w-1/2 mb-10 md:mb-0"
//         >
//           <h1 className="text-3xl font-semibold text-gray-100 mb-4">
//             Secure Client Area
//           </h1>
//           <h2 className="text-4xl md:text-5xl font-bold text-white leading-snug">
//             Designed in pursuit of{" "}
//             <span className="text-[#e3b874]">higher performance.</span>
//           </h2>
//         </motion.div>

//         {/* Right side (form) */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="bg-[#0a1a3a]/90 backdrop-blur-lg p-8 rounded-2xl w-full max-w-md shadow-xl border border-[#1f315c]"
//         >
//           <h2 className="text-2xl font-bold text-[#e3b874] mb-2 text-center">
//             Welcome!
//           </h2>
//           <p className="text-center text-sm text-gray-400 mb-6">
//             By logging in, you agree to the{" "}
//             <span className="text-[#e3b874] cursor-pointer hover:underline">
//               Terms & Conditions
//             </span>
//             .
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="flex space-x-2">
//               <div className="relative w-1/3">
//                 <Type className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
//                 <input
//                   type="text"
//                   name="prefix"
//                   placeholder="Prefix"
//                   value={form.prefix}
//                   onChange={handleChange}
//                   required
//                   className="w-full pl-9 pr-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
//                 />
//               </div>

//               <div className="relative w-2/3">
//                 <User className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={form.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full pl-9 pr-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
//                 />
//               </div>
//             </div>

//             <div className="relative">
//               <Lock className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="Password"
//                 value={form.password}
//                 onChange={handleChange}
//                 required
//                 className="w-full pl-9 pr-9 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-2.5 text-gray-400 hover:text-[#e3b874] transition"
//               >
//                 {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//               </button>
//             </div>

//             <div className="flex items-center space-x-3">
//               <div className="bg-[#091631] text-[#e3b874] px-4 py-2 rounded-md font-bold select-none tracking-widest text-lg">
//                 {captchaText}
//               </div>
//               <input
//                 type="text"
//                 name="captcha"
//                 placeholder="Enter 5 chars"
//                 value={form.captcha}
//                 onChange={handleChange}
//                 required
//                 maxLength={5}
//                 className="flex-1 px-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none font-mono"
//                 style={{ letterSpacing: "0.2em" }}
//               />
//             </div>

//             {error && <p className="text-red-400 text-sm text-center">{error}</p>}

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-2 bg-gradient-to-b from-[#e3b874] to-[#c19a4a] text-[#091631] font-semibold rounded-md hover:opacity-90 transition disabled:opacity-50"
//             >
//               {loading ? "Logging in..." : "Login"}
//             </button>

//             <div className="text-center text-sm text-gray-400 mt-2">
//               <a href="/signup" >
//                 Don't have an account?<span className="hover:underline text-blue-600"> Signup</span>
//               </a>
//             </div>
//           </form>

//           <div className="text-center text-xs text-gray-400 mt-6">
//             Need Login Assistance?{" "}
//             <a
//               href="mailto:contact@internationalfinanceasia.com"
//               className="text-[#e3b874] hover:underline"
//             >
//               contact@veloxcapital.com
//             </a>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }











import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Lock, Eye, EyeOff, Type } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logovelox.svg";
import { useUser } from "../routes/UserContext"; // ✅ Import context hook

/* Background assets */
import bg1 from "../assets/veloximg2.jpeg";
import bg2 from "../assets/veloxvid1.mp4";
import bg3 from "../assets/veloximg2.jpeg";
import bg4 from "../assets/veloxvid2.mp4";
import bg5 from "../assets/veloximg6.jpeg"
import bg6 from "../assets/veloximg7.jpeg"

const backgroundMedia = [
  { type: "image", src: bg1 },
  { type: "video", src: bg2 },
  { type: "image", src: bg3 },
  { type: "video", src: bg4 },
  { type: "image", src: bg5 },
  { type: "image", src: bg6 },
];

/* Background switcher */
function BackgroundSwitcher() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % backgroundMedia.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);
  const current = backgroundMedia[index];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {current.type === "image" ? (
        <img src={current.src} alt="" className="w-full h-full bg-center object-cover" />
      ) : (
        <video
          src={current.src}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full bg-center object-cover"
        />
      )}
      <div className="absolute inset-0 bg-[#07112b]/20" />
    </div>
  );
}

/* Captcha generator */
const generateCaptcha = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const nums = "0123456789";
  const pool = chars + nums;
  let result = "";
  for (let i = 0; i < 5; i++) {
    result += pool[Math.floor(Math.random() * pool.length)];
  }
  return result;
};

/* -----------------------------
   MAIN COMPONENT
----------------------------- */
export default function Login() {
  const navigate = useNavigate();
  const { login } = useUser(); // ✅ use the context login method

  const [form, setForm] = useState({
    prefix: "velox",
    email: "",
    password: "",
    captcha: "",
  });
  const [captchaText, setCaptchaText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("US");

  useEffect(() => {
    setCaptchaText(generateCaptcha());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "captcha") {
      setForm({ ...form, [name]: value.toUpperCase() });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  /* -----------------------------
     ✅ Handle Submit using context
  ----------------------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.email || !form.password || !form.captcha) {
      setError("All fields are required!");
      return;
    }

    if (form.prefix.trim().toLowerCase() !== "velox") {
      setError("Invalid security prefix!");
      return;
    }

    if (form.captcha !== captchaText) {
      setError("Invalid captcha! Try again.");
      setForm((f) => ({ ...f, captcha: "" }));
      setCaptchaText(generateCaptcha());
      return;
    }

    try {
      setLoading(true);
      // ✅ use context login instead of direct API call
      const res = await login({
        prefix: "admincontrol20x25",
        email: form.email,
        password: form.password,
      });

      if (res?.token) {
        navigate("/dashboard", { replace: true });
      } else {
        setError("Invalid response. Please try again.");
      }
    } catch (err) {
      console.error("Login failed:", err);
      const msg =
        err.response?.data?.error ||
        err.response?.data?.message ||
        "Login failed!";
      setError(msg);
      setCaptchaText(generateCaptcha());
      setForm((f) => ({ ...f, captcha: "" }));
    } finally {
      setLoading(false);
    }
  };

  /* -----------------------------
     ✅ Original UI (unchanged)
  ----------------------------- */
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#07112b] text-white relative overflow-hidden">
      <BackgroundSwitcher />

      <header className="absolute top-0 left-0 w-full flex justify-between items-center px-4 sm:px-8 md:px-16 py-3 z-20 bg-transparent">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Velox Logo"
            className="w-12 sm:w-14 md:w-20 object-contain transition-all duration-200"
          />
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <ReactCountryFlag
            countryCode={selectedCountry}
            svg
            style={{
              width: "1.5em",
              height: "1.5em",
              borderRadius: "50%",
              boxShadow: "0 0 4px rgba(0,0,0,0.3)",
            }}
            title={selectedCountry}
          />
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="bg-transparent text-white text-xs sm:text-sm font-medium border border-[#e3b874]/40 rounded-md px-2 sm:px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#e3b874] appearance-none"
          >
            <option value="US">US</option>
            <option value="GB">UK</option>
            <option value="NG">NG</option>
            <option value="AE">UAE</option>
            <option value="IN">IN</option>
          </select>
        </div>
      </header>

      <div className="relative mb-10 mt-10 md:mt-0 z-10 flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-16 lg:px-24 mt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 mb-10 md:mb-0"
        >
          <h1 className="text-3xl font-semibold text-gray-100 mb-4">
            Secure Client Area
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-snug">
            Designed in pursuit of{" "}
            <span className="text-[#e3b874]">higher performance.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-[#00b4A1]/10 backdrop-blur-lg p-8 rounded-2xl w-full max-w-md shadow-xl border border-[#1f315c]"
        >
          <h2 className="text-2xl font-bold text-[#e3b874] mb-2 text-center">
            Welcome!
          </h2>
          <p className="text-center text-sm text-gray-400 mb-6">
            By logging in, you agree to the{" "}
            <span className="text-[#e3b874] cursor-pointer hover:underline">
              Terms & Conditions
            </span>
            .
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Prefix + Email */}
            <div className="flex space-x-2">
              <div className="relative w-1/3">
                <User className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  name="prefix"
                  placeholder="Prefix"
                  value={form.prefix}
                  onChange={handleChange}
                  required
                  className="w-full pl-9 pr-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
                />
              </div>

              <div className="relative w-2/3">
                <User className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-9 pr-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full pl-9 pr-9 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-[#e3b874] transition"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Captcha */}
            <div className="flex items-center  space-x-3">
              <div className="bg-[#091631] text-[#e3b874] px-4 py-2 rounded-md font-bold select-none tracking-widest text-lg">
                {captchaText}
              </div>
              <input
                type="text"
                name="captcha"
                placeholder="Enter 5 chars"
                value={form.captcha}
                onChange={handleChange}
                required
                maxLength={5}
                className="flex-1  px-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none font-mono"
                style={{ letterSpacing: "0.2em" }}
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-gradient-to-b from-[#e3b874] to-[#c19a4a] text-[#091631] font-semibold rounded-md hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <div className="text-center text-sm text-gray-400 mt-2">
              <a href="/signup">
                Don't have an account?
                <span className="hover:underline text-blue-600"> Signup</span>
              </a>
             
            </div>
            <div className="text-center text-sm text-[#e3b874]">
               <a href="/forget-password" className="underline">Forgot password</a>
             
            </div>
            
          </form>

          <div className="text-center text-xs text-gray-400 mt-6">
            Need Login Assistance?{" "}
            <a
              href="mailto:contact@internationalfinanceasia.com"
              className="text-[#e3b874] hover:underline"
            >
              contact@veloxcapital.com
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
