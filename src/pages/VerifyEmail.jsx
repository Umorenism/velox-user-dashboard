
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

const backgroundMedia = [
  { type: "image", src: bg1 },
  { type: "video", src: bg2 },
  { type: "image", src: bg3 },
  { type: "video", src: bg4 },
];

/* -------------------------------------------------------------
   2. BackgroundSwitcher Component
   ------------------------------------------------------------- */
function BackgroundSwitcher() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgroundMedia.length);
    }, 8000);
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
      <div className="absolute inset-0 bg-[#07112b]/70" />
    </div>
  );
}

/* -------------------------------------------------------------
   3. VerifyEmail Component (FIXED)
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

  // Handle verification (FIXED LOGIC)
  const handleVerify = async (e) => {
    e.preventDefault();
    if (!email || !code) {
      setMessage("Please fill in both fields.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await verifyEmail({ email: email.trim(), code: code.trim() });
      
      // DEBUG: Log full response
      console.log("🔍 API Response:", response);

      // FIXED: Robust success detection (handles multiple response formats)
      const isSuccess = 
        response?.success === true ||           // { success: true }
        response?.verified === true ||          // { verified: true }
        (response?.message && response.message.toLowerCase().includes("verified")) ||  // "Email verified"
        (response?.data?.success === true) ||   // { data: { success: true } }
        response?.status === 200;               // HTTP status

      if (isSuccess) {
        setMessage("✅ Email verified successfully!");
        localStorage.removeItem("pendingEmail");
        
        // FORCE NAVIGATION after 2 seconds
        setTimeout(() => {
          console.log("Navigating to /login");
    navigate("/login", { replace: true });
        }, 2000);
      } else {
        // Handle specific error messages
        const errorMsg = 
          response?.error || 
          response?.message || 
          response?.data?.error ||
          "Invalid verification code. Please try again.";
        setMessage(`❌ ${errorMsg}`);
      }
    } catch (error) {
      console.error("❌ Verification error:", error);
      
      const errorMsg = 
        error?.response?.data?.error ||
        error?.response?.data?.message ||
        error?.message ||
        "Verification failed. Please try again.";
      setMessage(`❌ ${errorMsg}`);
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
      setMessage("✅ Code resent successfully!");
      setCooldown(30);
    } catch (error) {
      setMessage(`❌ ${error.response?.data?.error || "Failed to resend code."}`);
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#07112b] text-white relative overflow-hidden p-4">
      <BackgroundSwitcher />

      <div className="max-w-md w-full bg-[#0a1a3a]/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-[#1f315c] text-white z-10">
        <h2 className="text-2xl font-bold text-center text-[#e3b874] mb-3 tracking-wide">
          Verify Your Email
        </h2>
        <p className="text-center text-sm text-gray-400 mb-6">
          Enter the 6-digit code sent to {email || "your email"}.
        </p>

        <form onSubmit={handleVerify} className="space-y-5">
          {/* Email Input (readonly if auto-filled) */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 bg-[#091631] border border-[#1f315c] rounded-md focus:ring-2 focus:ring-[#e3b874] outline-none text-white"
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
              onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))} // Only numbers
              required
              maxLength={6}
              className="w-full px-3 py-2 bg-[#091631] border border-[#1f315c] rounded-md focus:ring-2 focus:ring-[#e3b874] outline-none tracking-widest text-white text-center font-mono text-lg"
              placeholder="123456"
            />
          </div>

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
            className={`mt-5 text-center text-sm font-medium p-3 rounded-lg ${
              message.includes("✅")
                ? "bg-green-900/50 text-green-400 border border-green-500/30"
                : "bg-red-900/50 text-red-400 border border-red-500/30"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
}