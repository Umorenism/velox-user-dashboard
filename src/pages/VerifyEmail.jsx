import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";
import { verifyEmail, resendVerificationEmail } from "../api/authApi";

export default function VerifyEmail() {
  const navigate = useNavigate();
  const email = localStorage.getItem("pendingEmail");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // "success" | "error"

  useEffect(() => {
    if (!email) {
      navigate("/signup");
    }
  }, [email, navigate]);

  const handleVerify = async () => {
    if (!code.trim()) {
      setMessage("Please enter the verification code.");
      setStatus("error");
      return;
    }

    setLoading(true);
    setMessage("");
    setStatus("");

    try {
      const res = await verifyEmail({ email, code });
      console.log("✅ Verification success:", res);

      localStorage.removeItem("pendingEmail");
      setMessage("Email verified successfully! Redirecting...");
      setStatus("success");

      setTimeout(() => navigate("/login"), 1500);
    } catch (error) {
      console.error("❌ Verification failed:", error);
      setMessage(error.response?.data?.message || "Verification failed. Try again.");
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setResending(true);
    setMessage("");
    setStatus("");

    try {
      await resendVerificationEmail({ email });
      setMessage("Verification email resent successfully!");
      setStatus("success");
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to resend email.");
      setStatus("error");
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md border border-gray-100">
        <h2 className="text-2xl font-bold text-center mb-2 text-gray-900">Verify Your Email</h2>
        <p className="text-gray-500 text-center mb-6">
          A verification code has been sent to <b>{email}</b>
        </p>

        {message && (
          <div
            className={`flex items-center justify-center gap-2 text-sm mb-4 ${
              status === "success" ? "text-green-600" : "text-red-500"
            }`}
          >
            {status === "success" ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
            <span>{message}</span>
          </div>
        )}

        <input
          type="text"
          placeholder="Enter verification code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full border px-4 py-2 rounded mb-4 focus:ring-2 focus:ring-[#00A991] focus:outline-none"
        />

        <button
          onClick={handleVerify}
          disabled={loading}
          className={`w-full py-3 rounded font-semibold flex items-center justify-center ${
            loading ? "bg-gray-400" : "bg-[#00A991] hover:bg-green-600 text-white"
          }`}
        >
          {loading && <Loader2 className="animate-spin mr-2" size={18} />}
          {loading ? "Verifying..." : "Verify Email"}
        </button>

        <div className="text-center mt-5">
          <button
            onClick={handleResend}
            disabled={resending}
            className="text-sm text-blue-500 hover:underline"
          >
            {resending ? "Resending..." : "Resend Verification Email"}
          </button>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => navigate("/signup")}
            className="text-xs text-gray-500 hover:underline"
          >
            Back to Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
