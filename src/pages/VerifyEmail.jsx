// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Mail, Hash, Loader2 } from "lucide-react";
// import ReactCountryFlag from "react-country-flag";
// import logo from "../assets/logovelox.svg";
// import verifyImg from "../assets/ver.jpeg";

// export default function VerifyEmail() {
//   const [form, setForm] = useState({
//     email: "",
//     code: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [selectedCountry, setSelectedCountry] = useState("US");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     if (!form.email || !form.code) {
//       setMessage("⚠️ Both fields are required!");
//       return;
//     }

//     setLoading(true);

//     try {
//       // Simulate backend call (replace with axios POST later)
//       await new Promise((resolve) => setTimeout(resolve, 1500));

//       if (form.email === "admin@veloxcapital.ng" && form.code === "123456") {
//         setMessage("✅ Email verified successfully!");
//       } else {
//         setMessage("❌ Invalid verification code or email!");
//       }
//     } catch (error) {
//       setMessage("⚠️ Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center bg-img text-white relative overflow-hidden">
//       {/* 🌌 Background Overlay */}
//       <div className="absolute inset-0 bg-img bg-cover bg-center opacity-30"></div>
//       <div className="absolute inset-0 bg-gradient-to-b from-[#08152d]/0 via-[#08152d]/0 to-[#030b1a]/0"></div>

//       {/* 🧭 Header */}
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

//       {/* 🧠 Main Section */}
//       <div className="relative mt-20 md:mt-10 z-10 flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-16 lg:px-24">
//         {/* LEFT SIDE (Text / Illustration) */}
        

//         {/* RIGHT SIDE (Verify Form) */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="bg-[#0a1a3a]/90 backdrop-blur-lg p-8 rounded-2xl w-full max-w-md shadow-xl border border-[#1f315c]"
//         >
//           <h2 className="text-2xl font-bold text-[#e3b874] mb-2 text-center">
//             Verify Your Email
//           </h2>
//           <p className="text-center text-sm text-gray-400 mb-6">
//             Enter the code sent to your registered email address.
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             {/* EMAIL FIELD */}
//             <div className="relative">
//               <Mail className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 value={form.email}
//                 onChange={handleChange}
//                 className="w-full pl-9 pr-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none"
//               />
//             </div>

//             {/* CODE FIELD */}
//             <div className="relative">
//               <Hash className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
//               <input
//                 type="text"
//                 name="code"
//                 placeholder="Enter verification code"
//                 value={form.code}
//                 onChange={handleChange}
//                 className="w-full pl-9 pr-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] focus:ring-2 focus:ring-[#e3b874] outline-none tracking-widest"
//               />
//             </div>

//             {/* MESSAGE */}
//             {message && (
//               <p
//                 className={`text-center text-sm ${
//                   message.includes("✅")
//                     ? "text-green-400"
//                     : message.includes("⚠️")
//                     ? "text-yellow-400"
//                     : "text-red-400"
//                 }`}
//               >
//                 {message}
//               </p>
//             )}

//             {/* BUTTON */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-2 bg-gradient-to-b from-[#e3b874] to-[#c19a4a] text-[#091631] font-semibold rounded-md hover:opacity-90 transition disabled:opacity-50 flex items-center justify-center"
//             >
//               {loading ? (
//                 <>
//                   <Loader2 className="animate-spin mr-2 w-4 h-4" />
//                   Verifying...
//                 </>
//               ) : (
//                 "Verify Email"
//               )}
//             </button>
//           </form>

//           <div className="text-center text-xs text-gray-400 mt-6">
//             Didn’t get the code?{" "}
//             <span className="text-[#e3b874] cursor-pointer hover:underline">
//               Resend Code
//             </span>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }











// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Loader2, CheckCircle2, XCircle, RefreshCcw } from "lucide-react";
// import { verifyEmail, resendVerificationEmail } from "../api/authApi";

// export default function VerifyEmail() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [code, setCode] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [resending, setResending] = useState(false);
//   const [cooldown, setCooldown] = useState(0);

//   // Auto-fill email from localStorage
//   useEffect(() => {
//     const pendingEmail = localStorage.getItem("pendingEmail");
//     if (pendingEmail) {
//       setEmail(pendingEmail);
//     }
//   }, []);

//   // Cooldown timer
//   useEffect(() => {
//     if (cooldown > 0) {
//       const timer = setTimeout(() => setCooldown((c) => c - 1), 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [cooldown]);

//   // Handle verification
//   const handleVerify = async (e) => {
//     e.preventDefault();
//     if (!email || !code) {
//       setMessage("Warning: Please fill in both fields.");
//       return;
//     }

//     setLoading(true);
//     setMessage("");

//     try {
//       const response = await verifyEmail({ email: email.trim(), code: code.trim() });

//       // Handle success (including "already verified")
//       if (response?.success || response?.message?.toLowerCase().includes("verified")) {
//         setMessage(response?.message || "Success: Email verified!");
//         localStorage.removeItem("pendingEmail");
//         setTimeout(() => navigate("/login"), 2000);
//       } else {
//         setMessage(response?.error || response?.message || "Error: Invalid code.");
//       }
//     } catch (error) {
//       setMessage(error.response?.data?.error || "Error: Verification failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle resend
//   const handleResend = async () => {
//     if (!email || cooldown > 0 || resending) return;

//     setResending(true);
//     setMessage("");

//     try {
//       const response = await resendVerificationEmail({ email: email.trim() });
//       setMessage(response?.message || "Success: Code resent!");
//       setCooldown(30);
//     } catch (error) {
//       setMessage(error.response?.data?.error || "Error: Failed to resend.");
//     } finally {
//       setResending(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-img bg-center bg-cover dark:bg-neutral-900 p-4">
//       <div className="max-w-md w-full bg-[#0a1a3a]/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-[#1f315c] text-white transition-all duration-300 hover:border-[#e3b874]/60 hover:shadow-[#e3b874]/20">
//         <h2 className="text-2xl font-bold text-center text-[#e3b874] mb-3 tracking-wide">
//           Verify Your Email
//         </h2>
//         <p className="text-center text-sm text-gray-400 mb-6">
//           Enter the 6-digit code sent to your registered email address.
//         </p>

//         <form onSubmit={handleVerify} className="space-y-5">
//           {/* Email Input */}
//           <div>
//             <label className="block text-sm font-medium text-gray-300 mb-1">
//               Email Address
//             </label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full px-3 py-2 bg-[#091631] border border-[#1f315c] rounded-md focus:ring-2 focus:ring-[#e3b874] outline-none placeholder-gray-500 text-white"
//               placeholder="Enter your registered email"
//             />
//           </div>

//           {/* Code Input */}
//           <div>
//             <label className="block text-sm font-medium text-gray-300 mb-1">
//               Verification Code
//             </label>
//             <input
//               type="text"
//               value={code}
//               onChange={(e) => setCode(e.target.value)}
//               required
//               maxLength={6}
//               className="w-full px-3 py-2 bg-[#091631] border border-[#1f315c] rounded-md focus:ring-2 focus:ring-[#e3b874] outline-none placeholder-gray-500 tracking-widest text-white text-center font-mono text-lg"
//               placeholder="123456"
//             />
//           </div>

//           {/* Verify Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full flex justify-center items-center gap-2 bg-gradient-to-b from-[#e3b874] to-[#c19a4a] text-[#091631] py-2 rounded-md font-semibold hover:opacity-90 transition disabled:opacity-50"
//           >
//             {loading ? (
//               <>
//                 <Loader2 className="animate-spin" size={18} /> Verifying...
//               </>
//             ) : (
//               <>
//                 <CheckCircle2 size={18} /> Verify Email
//               </>
//             )}
//           </button>
//         </form>

//         {/* Resend Section */}
//         <div className="mt-6 text-center">
//           <button
//             onClick={handleResend}
//             disabled={resending || cooldown > 0 || !email}
//             className="text-[#e3b874] font-medium flex items-center justify-center mx-auto gap-2 hover:underline disabled:opacity-40"
//           >
//             <RefreshCcw size={16} />
//             {resending
//               ? "Sending..."
//               : cooldown > 0
//               ? `Resend in ${cooldown}s`
//               : "Resend Code"}
//           </button>
//         </div>

//         {/* Message Section */}
//         {message && (
//           <div
//             className={`mt-5 text-center text-sm font-medium ${
//               message.includes("Success:") || message.includes("verified")
//                 ? "text-green-400"
//                 : "text-red-400"
//             }`}
//           >
//             {message}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }








import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2, CheckCircle2, XCircle, RefreshCcw } from "lucide-react";
import { verifyEmail, resendVerificationEmail } from "../api/authApi";

/* -------------------------------------------------------------
   1. Import your background media
   ------------------------------------------------------------- */
import bg1 from "../assets/veloximg3.jpeg";
import bg2 from "../assets/veloxvid2.mp4";
import bg3 from "../assets/veloximg2.jpeg";
import bg4 from "../assets/veloxvid2.mp4";

/* -------------------------------------------------------------
   2. List media in order (image or video)
   ------------------------------------------------------------- */
const backgroundMedia = [
  { type: "image", src: bg1 },
  { type: "video", src: bg2 },
  { type: "image", src: bg3 },
  { type: "video", src: bg4 },
  // Add more: { type: "image", src: yourImport },
];

/* -------------------------------------------------------------
   3. BackgroundSwitcher (same as Login/Signup)
   ------------------------------------------------------------- */
function BackgroundSwitcher() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % backgroundMedia.length);
    }, 8000); // Every 8 seconds
    return () => clearInterval(interval);
  }, []);

  const current = backgroundMedia[index];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {current.type === "image" ? (
        <img
          src={current.src}
          alt=""
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
      ) : (
        <video
          src={current.src}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
      )}
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-[#07112b]/70" />
    </div>
  );
}

/* -------------------------------------------------------------
   4. Your original VerifyEmail component (UI unchanged)
   ------------------------------------------------------------- */
export default function VerifyEmail() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  // Auto-fill email from localStorage
  useEffect(() => {
    const pendingEmail = localStorage.getItem("pendingEmail");
    if (pendingEmail) {
      setEmail(pendingEmail);
    }
  }, []);

  // Cooldown timer
  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown((c) => c - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  // Handle verification
  const handleVerify = async (e) => {
    e.preventDefault();
    if (!email || !code) {
      setMessage("Warning: Please fill in both fields.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await verifyEmail({ email: email.trim(), code: code.trim() });

      if (response?.success || response?.message?.toLowerCase().includes("verified")) {
        setMessage(response?.message || "Success: Email verified!");
        localStorage.removeItem("pendingEmail");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setMessage(response?.error || response?.message || "Error: Invalid code.");
      }
    } catch (error) {
      setMessage(error.response?.data?.error || "Error: Verification failed.");
    } finally {
      setLoading(false);
    }
  };

  // Handle resend
  const handleResend = async () => {
    if (!email || cooldown > 0 || resending) return;

    setResending(true);
    setMessage("");

    try {
      const response = await resendVerificationEmail({ email: email.trim() });
      setMessage(response?.message || "Success: Code resent!");
      setCooldown(30);
    } catch (error) {
      setMessage(error.response?.data?.error || "Error: Failed to resend.");
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#07112b] text-white relative overflow-hidden p-4">
      {/* NEW: Rotating background */}
      <BackgroundSwitcher />

      <div className="max-w-md w-full bg-[#0a1a3a]/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-[#1f315c] text-white transition-all duration-300 hover:border-[#e3b874]/60 hover:shadow-[#e3b874]/20 z-10">
        <h2 className="text-2xl font-bold text-center text-[#e3b874] mb-3 tracking-wide">
          Verify Your Email
        </h2>
        <p className="text-center text-sm text-gray-400 mb-6">
          Enter the 6-digit code sent to your registered email address.
        </p>

        <form onSubmit={handleVerify} className="space-y-5">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 bg-[#091631] border border-[#1f315c] rounded-md focus:ring-2 focus:ring-[#e3b874] outline-none placeholder-gray-500 text-white"
              placeholder="Enter your registered email"
            />
          </div>

          {/* Code Input */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Verification Code
            </label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
              maxLength={6}
              className="w-full px-3 py-2 bg-[#091631] border border-[#1f315c] rounded-md focus:ring-2 focus:ring-[#e3b874] outline-none placeholder-gray-500 tracking-widest text-white text-center font-mono text-lg"
              placeholder="123456"
            />
          </div>

          {/* Verify Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center gap-2 bg-gradient-to-b from-[#e3b874] to-[#c19a4a] text-[#091631] py-2 rounded-md font-semibold hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={18} /> Verifying...
              </>
            ) : (
              <>
                <CheckCircle2 size={18} /> Verify Email
              </>
            )}
          </button>
        </form>

        {/* Resend Section */}
        <div className="mt-6 text-center">
          <button
            onClick={handleResend}
            disabled={resending || cooldown > 0 || !email}
            className="text-[#e3b874] font-medium flex items-center justify-center mx-auto gap-2 hover:underline disabled:opacity-40"
          >
            <RefreshCcw size={16} />
            {resending
              ? "Sending..."
              : cooldown > 0
              ? `Resend in ${cooldown}s`
              : "Resend Code"}
          </button>
        </div>

        {/* Message Section */}
        {message && (
          <div
            className={`mt-5 text-center text-sm font-medium ${
              message.includes("Success:") || message.includes("verified")
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
}
