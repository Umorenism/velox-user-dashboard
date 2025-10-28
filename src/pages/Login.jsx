






// // src/pages/Login.jsx
// import React, { useEffect, useState, useRef, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { gsap } from "gsap";
// import { Eye, EyeOff, Loader2, XCircle, CheckCircle2, RefreshCcw } from "lucide-react";
// import pic from "../assets/logovelox.svg";
// import { UserContext } from "../routes/UserContext";

// export default function Login() {
//   const navigate = useNavigate();
//   const containerRef = useRef(null);
//   const formRef = useRef(null);
//   const { login } = useContext(UserContext);

//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     prefix: "",
//     email: "",
//     password: "",
//   });
//   const [message, setMessage] = useState("");
//   const [status, setStatus] = useState("");
//   const [captcha, setCaptcha] = useState("");
//   const [captchaInput, setCaptchaInput] = useState("");

//   // Generate CAPTCHA
//   const generateCaptcha = () => {
//     const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
//     const randomText = Array.from({ length: 5 }, () =>
//       chars[Math.floor(Math.random() * chars.length)]
//     ).join("");
//     setCaptcha(randomText);
//     setCaptchaInput("");
//   };

//   useEffect(() => {
//     generateCaptcha();
//     gsap.fromTo(
//       containerRef.current,
//       { opacity: 0, y: 40 },
//       { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
//     );
//     gsap.fromTo(
//       formRef.current.children,
//       { y: 30, opacity: 0 },
//       { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, delay: 0.3 }
//     );
//   }, []);

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleLogin = async () => {
//     const { prefix, email, password } = formData;
//     if (!prefix || !email || !password) {
//       setMessage("All fields are required.");
//       setStatus("error");
//       return;
//     }

//     if (captchaInput.trim().toUpperCase() !== captcha) {
//       setMessage("Incorrect CAPTCHA. Please try again.");
//       setStatus("error");
//       generateCaptcha();
//       return;
//     }

//     setIsLoading(true);
//     setMessage("");
//     setStatus("");

//     try {
//       await login({ prefix, email, password });
//       setMessage("Login successful! Redirecting...");
//       setStatus("success");
//       setTimeout(() => navigate("/dashboard"), 1200);
//     } catch (error) {
//       console.error("❌ Login failed:", error);
//       setMessage(error.response?.data?.message || "Login failed. Please check your credentials.");
//       setStatus("error");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="relative flex min-h-screen items-center justify-center bg-white px-4">
//       {isLoading && (
//         <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-50">
//           <Loader2 className="animate-spin text-[#00A991]" size={50} />
//         </div>
//       )}

//       <div ref={containerRef} className="flex flex-col lg:flex-row gap-2 w-full max-w-7xl">
//         {/* Left Side */}
//         <div className="hidden lg:flex flex-1 rounded-2xl overflow-hidden shadow-xl relative bg-white">
//           <div
//             className="w-full h-full bg-cover bg-center"
//             style={{ backgroundImage: `url(${pic})` }}
//           ></div>
//         </div>

//         {/* Right Side */}
//         <div className="flex flex-1 items-center justify-center">
//           <div ref={formRef} className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md border">
//             <h2 className="text-3xl font-bold text-black mb-2">Welcome Back!</h2>
//             <p className="text-gray-500 mb-6">
//               By logging in, you agree to the terms and conditions. <br />
//               <span>Don't have an account? </span>
//               <a href="/signup" className="text-blue-500 hover:underline">
//                 Sign up
//               </a>
//             </p>

//             {/* Message feedback */}
//             {message && (
//               <div
//                 className={`flex items-center gap-2 mb-4 text-sm ${
//                   status === "success" ? "text-green-600" : "text-red-500"
//                 }`}
//               >
//                 {status === "success" ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
//                 <span>{message}</span>
//               </div>
//             )}

//             {/* Prefix */}
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-[#101928] mb-1">Enter Prefix</label>
//               <input
//                 type="text"
//                 name="prefix"
//                 placeholder="e.g. VELOX"
//                 value={formData.prefix}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border rounded-[6px] focus:ring-2 focus:ring-blue-500 focus:outline-none border-[#D0D5DD]"
//               />
//             </div>

//             {/* Email */}
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-[#101928] mb-1">Enter Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="you@example.com"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border rounded-[6px] focus:ring-2 focus:ring-blue-500 focus:outline-none border-[#D0D5DD]"
//               />
//             </div>

//             {/* Password */}
//             <div className="mb-4 relative">
//               <label className="block text-sm font-medium text-[#101928] mb-1">Enter Password</label>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="••••••••"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border rounded-[6px] pr-10 focus:ring-2 focus:ring-blue-500 focus:outline-none border-[#D0D5DD]"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-9 text-gray-500"
//               >
//                 {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//               </button>
//             </div>

//             {/* CAPTCHA */}
//             <div className="mb-6">
//               <label className="block text-sm font-medium text-[#101928] mb-1">CAPTCHA</label>
//               <div className="flex items-center gap-2 mb-3">
//                 <div className="bg-gray-100 border border-gray-300 text-lg font-mono font-semibold px-4 py-2 rounded select-none tracking-widest">
//                   {captcha}
//                 </div>
//                 <button
//                   type="button"
//                   onClick={generateCaptcha}
//                   className="flex items-center gap-1 text-blue-500 hover:text-blue-700"
//                 >
//                   <RefreshCcw size={16} /> Refresh
//                 </button>
//               </div>

//               <input
//                 type="text"
//                 placeholder="Enter the CAPTCHA"
//                 value={captchaInput}
//                 onChange={(e) => setCaptchaInput(e.target.value)}
//                 className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none border-[#D0D5DD]"
//               />
//             </div>

//             {/* Login Button */}
//             <button
//               onClick={handleLogin}
//               disabled={isLoading}
//               className={`w-full py-3 rounded-[8px] font-semibold transition-all ${
//                 isLoading
//                   ? "bg-gray-400 cursor-not-allowed"
//                   : "bg-[#00A991] hover:bg-green-600 text-white"
//               }`}
//             >
//               {isLoading ? "Logging in..." : "Login"}
//             </button>

//             {/* Forgot Password */}
//             <div className="mt-4 text-center">
//               <button
//                 onClick={() => navigate("/forgot-password")}
//                 className="text-sm text-blue-500 hover:underline"
//               >
//                 Forgot password?
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }












// import React, { useState } from "react";
// import { motion } from "framer-motion";

// export default function Login() {
//   const [form, setForm] = useState({
//     prefix: "",
//     username: "",
//     password: "",
//     captcha: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");
//     if (!form.prefix || !form.username || !form.password || !form.captcha) {
//       setError("All fields are required!");
//       return;
//     }
//     setLoading(true);

//     // Mock API login simulation
//     setTimeout(() => {
//       setLoading(false);
//       if (form.username === "edalex" && form.password === "Alex2024") {
//         alert("✅ Login Successful!");
//       } else {
//         setError("Invalid credentials or captcha!");
//       }
//     }, 1500);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-[#07112b] text-white relative overflow-hidden">
//       {/* Background gradient overlay */}
//       <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center opacity-30"></div>
//       <div className="absolute inset-0 bg-gradient-to-b from-[#08152d]/80 via-[#08152d]/90 to-[#030b1a]/95"></div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-16 lg:px-24">
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

//         {/* RIGHT SIDE - LOGIN BOX */}
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
//               <input
//                 type="text"
//                 name="prefix"
//                 placeholder="Prefix"
//                 value={form.prefix}
//                 onChange={handleChange}
//                 className="w-1/3 px-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
//               />
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="Username"
//                 value={form.username}
//                 onChange={handleChange}
//                 className="w-2/3 px-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
//               />
//             </div>

//             {/* PASSWORD */}
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//               className="w-full px-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
//             />

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

//             {error && (
//               <p className="text-red-400 text-sm text-center">{error}</p>
//             )}

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






// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { User, KeyRound, Type } from "lucide-react"; // ✅ icons added

// export default function Login() {
//   const [form, setForm] = useState({
//     prefix: "",
//     username: "",
//     password: "",
//     captcha: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");
//     if (!form.prefix || !form.username || !form.password || !form.captcha) {
//       setError("All fields are required!");
//       return;
//     }
//     setLoading(true);

//     // Mock API login simulation
//     setTimeout(() => {
//       setLoading(false);
//       if (form.username === "edalex" && form.password === "Alex2024") {
//         alert("✅ Login Successful!");
//       } else {
//         setError("Invalid credentials or captcha!");
//       }
//     }, 1500);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-[#07112b] text-white relative overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center opacity-30"></div>
//       <div className="absolute inset-0 bg-gradient-to-b from-[#08152d]/80 via-[#08152d]/90 to-[#030b1a]/95"></div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-16 lg:px-24">
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

//         {/* RIGHT SIDE */}
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
//                 <User className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
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
//                   value={form.username}
//                   onChange={handleChange}
//                   className="w-full pl-9 pr-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
//                 />
//               </div>
//             </div>

//             {/* PASSWORD */}
//             <div className="relative">
//               <Lock className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={form.password}
//                 onChange={handleChange}
//                 className="w-full pl-9 pr-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
//               />
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
//               contact@internationalfinanceasia.com
//             </a>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }










// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { User, Lock, Eye, EyeOff, Type } from "lucide-react"; // 👈 added icons

// export default function Login() {
//   const [form, setForm] = useState({
//     prefix: "",
//     username: "",
//     password: "",
//     captcha: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false); // 👈 toggle state

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");
//     if (!form.prefix || !form.username || !form.password || !form.captcha) {
//       setError("All fields are required!");
//       return;
//     }
//     setLoading(true);

//     // Mock API login simulation
//     setTimeout(() => {
//       setLoading(false);
//       if (form.username === "edalex" && form.password === "Alex2024") {
//         alert("✅ Login Successful!");
//       } else {
//         setError("Invalid credentials or captcha!");
//       }
//     }, 1500);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-[#07112b] text-white relative overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center opacity-30"></div>
//       <div className="absolute inset-0 bg-gradient-to-b from-[#08152d]/80 via-[#08152d]/90 to-[#030b1a]/95"></div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-16 lg:px-24">
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

//         {/* RIGHT SIDE */}
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
//                   value={form.username}
//                   onChange={handleChange}
//                   className="w-full pl-9 pr-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
//                 />
//               </div>
//             </div>

//             {/* PASSWORD FIELD with visibility toggle */}
//             <div className="relative">
//               <Lock className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />

//               <input
//                 type={showPassword ? "text" : "password"} // 👈 toggle type
//                 name="password"
//                 placeholder="Password"
//                 value={form.password}
//                 onChange={handleChange}
//                 className="w-full pl-9 pr-9 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
//               />

//               {/* 👁️ Toggle button */}
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-2.5 text-gray-400 hover:text-[#e3b874] transition"
//               >
//                 {showPassword ? (
//                   <EyeOff size={18} />
//                 ) : (
//                   <Eye size={18} />
//                 )}
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

//             {/* ERROR MESSAGE */}
//             {error && (
//               <p className="text-red-400 text-sm text-center">{error}</p>
//             )}

//             {/* LOGIN BUTTON */}
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






import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Lock, Eye, EyeOff, Type } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import logo from "../assets/logovelox.svg"; // 👈 your logo path

export default function Login() {
  const [form, setForm] = useState({
    prefix: "",
    username: "",
    password: "",
    captcha: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("US");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!form.prefix || !form.username || !form.password || !form.captcha) {
      setError("All fields are required!");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (form.username === "edalex" && form.password === "Alex2024") {
        alert("✅ Login Successful!");
      } else {
        setError("Invalid credentials or captcha!");
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#07112b] text-white relative overflow-hidden">
      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#08152d]/80 via-[#08152d]/90 to-[#030b1a]/95"></div>

      {/* 🧭 Transparent Header */}
      <header className="absolute top-0 left-0 w-full flex justify-between items-center px-4 sm:px-8 md:px-16 py-3 z-20 bg-transparent">
  {/* Logo */}
  <div className="flex items-center gap-2">
    <img
      src={logo}
      alt="Velox Logo"
      className="w-12 sm:w-14 md:w-20 object-contain transition-all duration-200"
    />
  </div>

  {/* Country Selector */}
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


      {/* 🧠 Main Content */}
      <div className="relative mb-10 mt-10 md:mt-0 z-10 flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-16 lg:px-24 mt-20">
        {/* LEFT SIDE */}
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

        {/* RIGHT SIDE (Login Form) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-[#0a1a3a]/90 backdrop-blur-lg p-8 rounded-2xl w-full max-w-md shadow-xl border border-[#1f315c]"
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
            {/* PREFIX + USERNAME */}
            <div className="flex space-x-2">
              <div className="relative w-1/3">
                <Type className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  name="prefix"
                  placeholder="Prefix"
                  value={form.prefix}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
                />
              </div>

              <div className="relative w-2/3">
                <User className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={form.username}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
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

            {/* CAPTCHA */}
            <div className="flex items-center space-x-3">
              <div className="bg-[#091631] text-[#e3b874] px-4 py-2 rounded-md font-semibold select-none">
                W D × 9
              </div>
              <input
                type="text"
                name="captcha"
                placeholder="Captcha"
                value={form.captcha}
                onChange={handleChange}
                className="flex-1 px-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
              />
            </div>

            {/* ERROR */}
            {error && <p className="text-red-400 text-sm text-center">{error}</p>}

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-gradient-to-b from-[#e3b874] to-[#c19a4a] text-[#091631] font-semibold rounded-md hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <div className="text-center text-sm text-gray-400 mt-2">
              <a href="#" className="hover:underline">
                Forgot Password?
              </a>
            </div>
          </form>

          {/* FOOTER */}
          <div className="text-center text-xs text-gray-400 mt-6">
            Need Login Assistance?{" "}
            <a
              href="mailto:contact@internationalfinanceasia.com"
              className="text-[#e3b874] hover:underline"
            >
              contact@internationalfinanceasia.com
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}







