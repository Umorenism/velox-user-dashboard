import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Loader2, CheckCircle2, RefreshCcw, Mail } from "lucide-react";
import { verifyEmail, resendVerificationEmail } from "../api/authApi";

/* ──────────────────────────────
   Background Media
──────────────────────────────── */
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

function BackgroundSwitcher() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setIndex((prev) => (prev + 1) % backgroundMedia.length), 8000);
    return () => clearInterval(interval);
  }, []);

  const current = backgroundMedia[index];
  return (
    <div className="absolute inset-0 overflow-hidden">
      {current.type === "image" ? (
        <img src={current.src} alt="" className="w-full h-full object-cover transition-opacity duration-1000" />
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

/* ──────────────────────────────
   OTP Input Component
──────────────────────────────── */
function OTPInput({ value, onChange }) {
  const inputs = useRef([]);
  const handleChange = (index, val) => {
    const digits = value.split("");
    digits[index] = val.slice(-1).replace(/\D/, "");
    const newValue = digits.join("");
    onChange(newValue);

    // Auto focus next box
    if (val && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex justify-center gap-3 mt-3">
      {Array(6)
        .fill("")
        .map((_, i) => (
          <motion.input
            key={i}
            ref={(el) => (inputs.current[i] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={value[i] || ""}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            className="w-12 h-12 text-center rounded-md bg-[#091631] border border-[#1f315c]
                       text-xl text-white font-semibold focus:ring-2 focus:ring-[#e3b874]
                       outline-none transition-all duration-200"
            whileFocus={{ scale: 1.1 }}
          />
        ))}
    </div>
  );
}

/* ──────────────────────────────
   Verify Email Page
──────────────────────────────── */
export default function VerifyEmail() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  // Load email from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("pendingEmail");
    if (stored) setEmail(stored);
  }, []);

  // Countdown for resend
  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown((c) => c - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  /* ─── Verify OTP ─────────────────────────── */
  const handleVerify = async (e) => {
    e.preventDefault();
    if (!email || code.length !== 6) {
      setMessage("❌ Please enter your email and 6-digit code.");
      return;
    }

    setLoading(true);
    setMessage("");
    try {
      const res = await verifyEmail({ email: email.trim(), code: code.trim() });
      const isSuccess =
        res?.success ||
        res?.verified ||
        res?.message?.toLowerCase().includes("verified") ||
        res?.status === 200;

      if (isSuccess) {
        setMessage("✅ Email verified successfully!");
        localStorage.removeItem("pendingEmail");
        setTimeout(() => navigate("/login", { replace: true }), 2000);
      } else {
        setMessage(`❌ ${res?.message || "Invalid code, try again."}`);
      }
    } catch (err) {
      const msg =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        "Verification failed. Please try again.";
      setMessage(`❌ ${msg}`);
    } finally {
      setLoading(false);
    }
  };

  /* ─── Resend Verification ───────────────── */
  const handleResend = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("❌ Please enter your email first.");
      return;
    }
    if (cooldown > 0) return;

    setResending(true);
    try {
      await resendVerificationEmail({ email: email.trim() });
      setMessage("✅ Code resent successfully!");
      setCooldown(30);
    } catch (err) {
      setMessage(`❌ ${err?.response?.data?.error || "Failed to resend code."}`);
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-[#07112b] text-white p-4 overflow-hidden">
      <BackgroundSwitcher />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 w-full max-w-md bg-[#0a1a3a]/80 border border-[#1f315c]
                   p-8 rounded-2xl backdrop-blur-xl shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-center text-[#e3b874] mb-2">
          Verify Your Email
        </h2>
        <p className="text-center text-gray-400 text-sm mb-6">
          Enter the 6-digit code sent to <span className="text-[#e3b874]">{email || "your email"}</span>.
        </p>

        {/* Verification Form */}
        <form onSubmit={handleVerify} className="space-y-5">
          {/* OTP Input */}
          <OTPInput value={code} onChange={setCode} />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            disabled={loading}
            className="w-full flex justify-center items-center gap-2 py-2
                       bg-gradient-to-b from-[#e3b874] to-[#c19a4a] text-[#091631]
                       font-semibold rounded-md hover:opacity-90 transition disabled:opacity-50"
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
          </motion.button>
        </form>

        {/* Divider */}
        <div className="my-6 border-t border-[#1f315c]" />

        {/* Resend Form */}
        <form onSubmit={handleResend} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            <input
              type="email"
              placeholder="Enter your email to resend code"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-3 py-2 bg-[#091631] border border-[#1f315c]
                         rounded-md text-white placeholder-gray-400 focus:ring-2
                         focus:ring-[#e3b874] outline-none"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            disabled={resending || cooldown > 0}
            className="w-full flex justify-center items-center gap-2 text-[#e3b874]
                       font-medium hover:underline disabled:opacity-40"
          >
            <RefreshCcw size={16} />
            {resending
              ? "Sending..."
              : cooldown > 0
              ? `Resend in ${cooldown}s`
              : "Resend Verification Code"}
          </motion.button>
        </form>

        {/* Redirect to Login */}
        <div className="text-center text-sm text-gray-400 mt-6">
          Already verified?{" "}
          <a href="/login" className="text-[#e3b874] hover:underline">
            Go to Login
          </a>
        </div>

        {/* Message Box */}
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-5 text-center text-sm font-medium p-3 rounded-lg ${
              message.includes("✅")
                ? "bg-green-900/40 text-green-400 border border-green-500/30"
                : "bg-red-900/40 text-red-400 border border-red-500/30"
            }`}
          >
            {message}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
