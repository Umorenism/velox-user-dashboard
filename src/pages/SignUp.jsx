







// // // import React, { useEffect, useState, useRef } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import { gsap } from "gsap";
// // // import { Eye, EyeOff, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
// // // import pic from "../assets/logovelox.svg";
// // // import { signUpUser } from "../api/authApi"; // ✅ Signup API

// // // export default function SignUp() {
// // //   const navigate = useNavigate();
// // //   const containerRef = useRef(null);
// // //   const formRef = useRef(null);

// // //   const [formData, setFormData] = useState({
// // //     name: "",
// // //     email: "",
// // //     phone: "",
// // //     password: "",
// // //     prefix: "",
// // //   });
// // //   const [showPassword, setShowPassword] = useState(false);
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const [message, setMessage] = useState("");
// // //   const [status, setStatus] = useState(""); // "error" | "success"

// // //   useEffect(() => {
// // //     gsap.fromTo(containerRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" });
// // //     gsap.fromTo(formRef.current.children, { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, delay: 0.3 });
// // //   }, []);

// // //   const handleChange = (e) => {
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //   };

// // //   const handleSignUp = async (e) => {
// // //     e.preventDefault();
// // //     const { name, email, phone, password, prefix } = formData;

// // //     // ✅ Validate prefix requirement
// // //     if (!prefix || prefix.trim().length < 3) {
// // //       setMessage("Prefix is required (minimum 3 characters).");
// // //       setStatus("error");
// // //       return;
// // //     }

// // //     setIsLoading(true);
// // //     setMessage("");
// // //     setStatus("");

// // //     try {
// // //       const res = await signUpUser(formData);
// // //       console.log("✅ Signup success:", res);

// // //       setMessage("Signup successful! Please verify your email.");
// // //       setStatus("success");

// // //       // Save email temporarily for verification step
// // //       localStorage.setItem("pendingEmail", formData.email);

// // //       setTimeout(() => navigate("/verify-email"), 1500);
// // //     } catch (error) {
// // //       console.error("❌ Signup failed:", error);
// // //       setMessage(error.response?.data?.message || "Signup failed, please try again.");
// // //       setStatus("error");
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="relative flex min-h-screen items-center justify-center bg-white px-4">
// // //       {isLoading && (
// // //         <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-50">
// // //           <Loader2 className="animate-spin text-[#00A991]" size={50} />
// // //         </div>
// // //       )}

// // //       <div ref={containerRef} className="flex flex-col lg:flex-row gap-2 w-full max-w-7xl">
// // //         {/* Left Image Section */}
// // //         <div className="hidden lg:flex flex-1 rounded-2xl overflow-hidden shadow-xl relative bg-white">
// // //           <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${pic})` }}></div>
// // //         </div>

// // //         {/* Right Form Section */}
// // //         <div className="flex flex-1 items-center justify-center">
// // //           <form ref={formRef} onSubmit={handleSignUp} className="w-full max-w-md bg-white p-8 rounded-xl border shadow-md">
// // //             <h2 className="text-3xl font-bold text-black mb-2">Create Account</h2>
// // //             <p className="text-gray-500 mb-6">Sign up to start using your dashboard</p>

// // //             {/* ✅ Feedback Message */}
// // //             {message && (
// // //               <div
// // //                 className={`flex items-center gap-2 mb-4 text-sm ${
// // //                   status === "success" ? "text-green-600" : "text-red-500"
// // //                 }`}
// // //               >
// // //                 {status === "success" ? (
// // //                   <CheckCircle2 size={18} />
// // //                 ) : (
// // //                   <AlertCircle size={18} />
// // //                 )}
// // //                 <span>{message}</span>
// // //               </div>
// // //             )}

// // //             {/* Prefix Field */}
// // //             <div className="mb-4">
// // //               <label className="block text-sm font-medium mb-1">Enter Prefix</label>
// // //               <input
// // //                 name="prefix"
// // //                 onChange={handleChange}
// // //                 value={formData.prefix}
// // //                 type="text"
// // //                 placeholder="e.g. VX-SEC-2025"
// // //                 className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-[#00A991] focus:outline-none"
// // //                 required
// // //               />
// // //               <p className="text-xs text-gray-500 mt-1">
// // //                 Prefix uniquely identifies your organization or project.
// // //               </p>
// // //             </div>

// // //             {/* Full Name */}
// // //             <div className="mb-4">
// // //               <label className="block text-sm font-medium mb-1">Full Name</label>
// // //               <input
// // //                 name="name"
// // //                 onChange={handleChange}
// // //                 value={formData.name}
// // //                 type="text"
// // //                 placeholder="John Doe"
// // //                 className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-[#00A991] focus:outline-none"
// // //                 required
// // //               />
// // //             </div>

// // //             {/* Email */}
// // //             <div className="mb-4">
// // //               <label className="block text-sm font-medium mb-1">Email Address</label>
// // //               <input
// // //                 name="email"
// // //                 onChange={handleChange}
// // //                 value={formData.email}
// // //                 type="email"
// // //                 placeholder="you@example.com"
// // //                 className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-[#00A991] focus:outline-none"
// // //                 required
// // //               />
// // //             </div>

// // //             {/* Phone */}
// // //             <div className="mb-4">
// // //               <label className="block text-sm font-medium mb-1">Phone Number</label>
// // //               <input
// // //                 name="phone"
// // //                 onChange={handleChange}
// // //                 value={formData.phone}
// // //                 type="tel"
// // //                 placeholder="+234 800 000 0000"
// // //                 className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-[#00A991] focus:outline-none"
// // //                 required
// // //               />
// // //             </div>

// // //             {/* Password */}
// // //             <div className="mb-6 relative">
// // //               <label className="block text-sm font-medium mb-1">Password</label>
// // //               <input
// // //                 name="password"
// // //                 onChange={handleChange}
// // //                 value={formData.password}
// // //                 type={showPassword ? "text" : "password"}
// // //                 placeholder="••••••••"
// // //                 className="w-full px-4 py-2 border rounded pr-10 focus:ring-2 focus:ring-[#00A991] focus:outline-none"
// // //                 required
// // //               />
// // //               <button
// // //                 type="button"
// // //                 onClick={() => setShowPassword(!showPassword)}
// // //                 className="absolute right-3 top-9 text-gray-500"
// // //               >
// // //                 {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
// // //               </button>
// // //             </div>

// // //             {/* Submit Button */}
// // //             <button
// // //               type="submit"
// // //               disabled={isLoading}
// // //               className={`w-full py-3 rounded font-semibold ${
// // //                 isLoading ? "bg-gray-400" : "bg-[#00A991] hover:bg-green-600 text-white"
// // //               }`}
// // //             >
// // //               {isLoading ? "Creating account..." : "Sign Up"}
// // //             </button>

// // //             {/* Login Link */}
// // //             <div className="mt-4 text-center">
// // //               <button
// // //                 onClick={() => navigate("/login")}
// // //                 type="button"
// // //                 className="text-sm text-blue-500 hover:underline"
// // //               >
// // //                 Already have an account? Login
// // //               </button>
// // //             </div>
// // //           </form>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }












// // import React, { useState } from "react";
// // import { motion } from "framer-motion";

// // export default function Signup() {
// //   const [form, setForm] = useState({
// //     prefix: "",
// //     username: "",
// //     phone: "",
// //     password: "",
// //     confirmPassword: "",
// //   });
// //   const [error, setError] = useState("");
// //   const [loading, setLoading] = useState(false);

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setError("");

// //     if (
// //       !form.prefix ||
// //       !form.username ||
// //       !form.phone ||
// //       !form.password ||
// //       !form.confirmPassword
// //     ) {
// //       setError("All fields are required!");
// //       return;
// //     }

// //     if (form.password !== form.confirmPassword) {
// //       setError("Passwords do not match!");
// //       return;
// //     }

// //     setLoading(true);
// //     setTimeout(() => {
// //       setLoading(false);
// //       alert("✅ Account created successfully!");
// //     }, 1500);
// //   };

// //   return (
// //     <div className="min-h-screen flex flex-col items-center justify-center bg-img text-white relative overflow-hidden">
// //       {/* Background */}
// //       <div className="absolute inset-0 bg-img bg-cover bg-center opacity-0"></div>
// //       {/* <div className="absolute inset-0 bg-gradient-to-b from-[#08152d]/0 via-[#08152d]/0 to-[#030b1a]/0"></div> */}

// //       <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-16 lg:px-24">
// //         {/* LEFT SIDE */}
// //         <motion.div
// //           initial={{ opacity: 0, x: -50 }}
// //           animate={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 1 }}
// //           className="w-full md:w-1/2 mb-10 md:mb-0"
// //         >
// //           <h1 className="text-3xl font-semibold text-gray-100 mb-4">
// //             Create Your Account
// //           </h1>
// //           <h2 className="text-4xl md:text-5xl font-bold text-white leading-snug">
// //             Start your journey to{" "}
// //             <span className="text-[#e3b874]">financial success.</span>
// //           </h2>
// //         </motion.div>

// //         {/* RIGHT SIDE - SIGNUP BOX */}
// //         <motion.div
// //           initial={{ opacity: 0, x: 50 }}
// //           animate={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 1 }}
// //           className="bg-[#0a1a3a]/90 backdrop-blur-lg p-8 rounded-2xl w-full max-w-md shadow-xl border border-[#1f315c]"
// //         >
// //           <h2 className="text-2xl font-bold text-[#e3b874] mb-2 text-center">
// //             Sign Up
// //           </h2>
// //           <p className="text-center text-sm text-gray-400 mb-6">
// //             Join our platform and explore next-level opportunities.
// //           </p>

// //           <form onSubmit={handleSubmit} className="space-y-4">
// //             {/* PREFIX + USERNAME */}
// //             <div className="flex space-x-2">
// //               <input
// //                 type="text"
// //                 name="prefix"
// //                 placeholder="Prefix"
// //                 value={form.prefix}
// //                 onChange={handleChange}
// //                 className="w-1/3 px-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
// //               />
// //               <input
// //                 type="text"
// //                 name="username"
// //                 placeholder="Username"
// //                 value={form.username}
// //                 onChange={handleChange}
// //                 className="w-2/3 px-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
// //               />
// //             </div>

// //             {/* PHONE NUMBER */}
// //             <input
// //               type="tel"
// //               name="phone"
// //               placeholder="Phone Number"
// //               value={form.phone}
// //               onChange={handleChange}
// //               className="w-full px-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
// //             />

// //             {/* PASSWORD */}
// //             <input
// //               type="password"
// //               name="password"
// //               placeholder="Password"
// //               value={form.password}
// //               onChange={handleChange}
// //               className="w-full px-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
// //             />

// //             {/* CONFIRM PASSWORD */}
// //             <input
// //               type="password"
// //               name="confirmPassword"
// //               placeholder="Confirm Password"
// //               value={form.confirmPassword}
// //               onChange={handleChange}
// //               className="w-full px-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
// //             />

// //             {error && (
// //               <p className="text-red-400 text-sm text-center">{error}</p>
// //             )}

// //             <button
// //               type="submit"
// //               disabled={loading}
// //               className="w-full py-2 bg-gradient-to-b from-[#e3b874] to-[#c19a4a] text-[#091631] font-semibold rounded-md hover:opacity-90 transition disabled:opacity-50"
// //             >
// //               {loading ? "Creating Account..." : "Sign Up"}
// //             </button>

// //             <div className="text-center text-sm text-gray-400 mt-2">
// //               Already have an account?{" "}
// //               <a href="/login" className="text-[#e3b874] hover:underline">
// //                 Login
// //               </a>
// //             </div>
// //           </form>

// //           <div className="text-center text-xs text-gray-400 mt-6">
// //             Need Help?{" "}
// //             <a
// //               href="mailto:contact@internationalfinanceasia.com"
// //               className="text-[#e3b874] hover:underline"
// //             >
// //               contact@internationalfinanceasia.com
// //             </a>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </div>
// //   );
// // }








// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { signUpUser } from "../api/authApi"; // Import API

// export default function Signup() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     prefix: "",           // Client-side only
//     name: "",             // Maps to "name"
//     phone: "",
//     email: "",            // Added email field
//     password: "",
//     confirmPassword: "",
//   });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     // Validation
//     if (!form.prefix || !form.name || !form.email || !form.phone || !form.password || !form.confirmPassword) {
//       setError("All fields are required!");
//       return;
//     }

//     if (form.password !== form.confirmPassword) {
//       setError("Passwords do not match!");
//       return;
//     }

//     if (form.prefix.trim() !== "VX-SEC-2025") {
//       setError("Invalid security prefix!");
//       return;
//     }

//     setLoading(true);

//     // Payload to backend — NO PREFIX
//     const payload = {
//       email: form.email,
//       password: form.password,
//       name: form.name,
//       phone: form.phone,
//     };

//     try {
//       const res = await signUpUser(payload);
//       console.log("Signup success:", res);

//       // Store email for verification step
//       localStorage.setItem("pendingEmail", form.email);

//       // Success message + redirect
//       setTimeout(() => {
//         navigate("/verify-email");
//       }, 800);

//     } catch (err) {
//       console.error("Signup failed:", err);
//       setError(err.response?.data?.message || "Signup failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-img text-white relative overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 bg-img bg-cover bg-center opacity-0"></div>

//       <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-16 lg:px-24">
//         {/* LEFT SIDE */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="w-full md:w-1/2 mb-10 md:mb-0"
//         >
//           <h1 className="text-3xl font-semibold text-gray-100 mb-4">
//             Create Your Account
//           </h1>
//           <h2 className="text-4xl md:text-5xl font-bold text-white leading-snug">
//             Start your journey to{" "}
//             <span className="text-[#e3b874]">financial success.</span>
//           </h2>
//         </motion.div>

//         {/* RIGHT SIDE - SIGNUP BOX */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="bg-[#0a1a3a]/90 backdrop-blur-lg p-8 rounded-2xl w-full max-w-md shadow-xl border border-[#1f315c]"
//         >
//           <h2 className="text-2xl font-bold text-[#e3b874] mb-2 text-center">
//             Sign Up
//           </h2>
//           <p className="text-center text-sm text-gray-400 mb-6">
//             Join our platform and explore next-level opportunities.
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-4">

//             {/* PREFIX + NAME */}
//             <div className="flex space-x-2">
//               <input
//                 type="text"
//                 name="prefix"
//                 placeholder="Prefix"
//                 value={form.prefix}
//                 onChange={handleChange}
//                 required
//                 className="w-1/3 px-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none text-sm"
//               />
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 value={form.name}
//                 onChange={handleChange}
//                 required
//                 className="w-2/3 px-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
//               />
//             </div>

//             {/* EMAIL */}
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={form.email}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
//             />

//             {/* PHONE NUMBER */}
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone Number"
//               value={form.phone}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
//             />

//             {/* PASSWORD */}
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
//             />

//             {/* CONFIRM PASSWORD */}
//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               value={form.confirmPassword}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
//             />

//             {error && (
//               <p className="text-red-400 text-sm text-center">{error}</p>
//             )}

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-2 bg-gradient-to-b from-[#e3b874] to-[#c19a4a] text-[#091631] font-semibold rounded-md hover:opacity-90 transition disabled:opacity-50"
//             >
//               {loading ? "Creating Account..." : "Sign Up"}
//             </button>

//             <div className="text-center text-sm text-gray-400 mt-2">
//               Already have an account?{" "}
//               <a href="/login" className="text-[#e3b874] hover:underline">
//                 Login
//               </a>
//             </div>
//           </form>

//           <div className="text-center text-xs text-gray-400 mt-6">
//             Need Help?{" "}
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
// import { useNavigate } from "react-router-dom";
// import { signUpUser } from "../api/authApi"; // API import

// export default function Signup() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     ref: "", // Optional referral
//   });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     // Required fields
//     if (!form.name || !form.email || !form.phone || !form.password) {
//       setError("Name, email, phone, and password are required!");
//       return;
//     }

//     setLoading(true);

//     // Build payload — ref is optional
//     const payload = {
//       email: form.email.trim(),
//       password: form.password,
//       name: form.name.trim(),
//       phone: form.phone.trim(),
//     };

//     if (form.ref.trim()) {
//       payload.ref = form.ref.trim();
//     }

//     try {
//       const res = await signUpUser(payload);
//       console.log("Signup success:", res);

//       // Save email for verification
//       localStorage.setItem("pendingEmail", form.email);

//       // Redirect to verify-email
//       setTimeout(() => {
//         navigate("/verify-email");
//       }, 800);

//     } catch (err) {
//       console.error("Signup failed:", err);
//       setError(err.response?.data?.message || "Signup failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-img text-white relative overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 bg-img bg-cover bg-center opacity-0"></div>

//       <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-16 lg:px-24">
//         {/* LEFT SIDE */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="w-full md:w-1/2 mb-10 md:mb-0"
//         >
//           <h1 className="text-3xl font-semibold text-gray-100 mb-4">
//             Create Your Account
//           </h1>
//           <h2 className="text-4xl md:text-5xl font-bold text-white leading-snug">
//             Start your journey to{" "}
//             <span className="text-[#e3b874]">financial success.</span>
//           </h2>
//         </motion.div>

//         {/* RIGHT SIDE - SIGNUP BOX */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="bg-[#0a1a3a]/90 backdrop-blur-lg p-8 rounded-2xl w-full max-w-md shadow-xl border border-[#1f315c]"
//         >
//           <h2 className="text-2xl font-bold text-[#e3b874] mb-2 text-center">
//             Sign Up
//           </h2>
//           <p className="text-center text-sm text-gray-400 mb-6">
//             Join our platform and explore next-level opportunities.
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-4">

//             {/* FULL NAME */}
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               value={form.name}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
//             />

//             {/* EMAIL */}
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={form.email}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
//             />

//             {/* PHONE NUMBER */}
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone Number"
//               value={form.phone}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
//             />

//             {/* PASSWORD */}
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
//             />

//             {/* OPTIONAL REFERRAL CODE */}
//             <input
//               type="text"
//               name="ref"
//               placeholder="Referral Code (Optional)"
//               value={form.ref}
//               onChange={handleChange}
//               className="w-full px-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none text-sm italic"
//             />

//             {error && (
//               <p className="text-red-400 text-sm text-center">{error}</p>
//             )}

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-2 bg-gradient-to-b from-[#e3b874] to-[#c19a4a] text-[#091631] font-semibold rounded-md hover:opacity-90 transition disabled:opacity-50"
//             >
//               {loading ? "Creating Account..." : "Sign Up"}
//             </button>

//             <div className="text-center text-sm text-gray-400 mt-2">
//               Already have an account?{" "}
//               <a href="/login" className="text-[#e3b874] hover:underline">
//                 Login
//               </a>
//             </div>
//           </form>

//           <div className="text-center text-xs text-gray-400 mt-6">
//             Need Help?{" "}
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
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../api/authApi";

/* -------------------------------------------------------------
   1. Import your media files (place in src/assets/backgrounds/)
   ------------------------------------------------------------- */
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
/* -------------------------------------------------------------
   3. BackgroundSwitcher component (same as Login)
   ------------------------------------------------------------- */
function BackgroundSwitcher() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % backgroundMedia.length);
    }, 8000); // Change every 8 seconds
    return () => clearInterval(interval);
  }, []);

  const current = backgroundMedia[index];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {current.type === "image" ? (
        <img
          src={current.src}
          alt=""
          className="w-full bg-center h-full object-cover transition-opacity duration-1000"
        />
      ) : (
        <video
          src={current.src}
          autoPlay
          muted
          loop
          playsInline
          className="w-full bg-center h-full object-cover transition-opacity duration-1000"
        />
      )}
      {/* Dark overlay to keep text readable */}
      <div className="absolute inset-0 bg-[#07112b]/20" />
    </div>
  );
}

/* -------------------------------------------------------------
   4. Your original Signup component (UI unchanged)
   ------------------------------------------------------------- */
export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    ref: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.phone || !form.password) {
      setError("Name, email, phone, and password are required!");
      return;
    }

    setLoading(true);

    const payload = {
      email: form.email.trim(),
      password: form.password,
      name: form.name.trim(),
      phone: form.phone.trim(),
    };

    if (form.ref.trim()) {
      payload.ref = form.ref.trim();
    }

    try {
      const res = await signUpUser(payload);
      console.log("Signup success:", res);

      localStorage.setItem("pendingEmail", form.email);

      setTimeout(() => {
        navigate("/verify-email");
      }, 800);
    } catch (err) {
      console.error("Signup failed:", err);
      setError(err.response?.data?.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#07112b] text-white relative overflow-hidden p-4">
      {/* NEW: Rotating background */}
      <BackgroundSwitcher />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-16 lg:px-24">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 mb-10 md:mb-0"
        >
          <h1 className="text-3xl font-semibold text-gray-100 mb-4">
            Create Your Account
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-snug">
            Start your journey to{" "}
            <span className="text-[#e3b874]">financial success.</span>
          </h2>
        </motion.div>

        {/* RIGHT SIDE - SIGNUP BOX */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-[#00b4A1]/10  backdrop-blur-lg p-8 rounded-2xl w-full max-w-md shadow-xl border border-[#1f315c]"
        >
          <h2 className="text-2xl font-bold text-[#e3b874] mb-2 text-center">
            Sign Up
          </h2>
          <p className="text-center text-sm text-gray-400 mb-6">
            Join our platform and explore next-level opportunities.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 ">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
            />

            <input
              type="text"
              name="ref"
              placeholder="Referral Code (Optional)"
              value={form.ref}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none text-sm italic"
            />

            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-gradient-to-b from-[#e3b874] to-[#c19a4a] text-[#091631] font-semibold rounded-md hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>

            <div className="text-center text-sm text-gray-400 mt-2">
              Already have an account?{" "}
              <a href="/login" className="text-[#e3b874] hover:underline">
                Login
              </a>
            </div>
          </form>

          <div className="text-center text-xs text-gray-400 mt-6">
            Need Help?{" "}
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