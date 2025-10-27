








import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { Eye, EyeOff, Loader2, XCircle, CheckCircle2, RefreshCcw } from "lucide-react";

import pic from "../assets/logovelox.svg";
import { loginUser } from "../api/authApi";

export default function Login() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const formRef = useRef(null);

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    prefix: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  // ✅ Generate CAPTCHA
  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    const randomText = Array.from({ length: 5 }, () =>
      chars[Math.floor(Math.random() * chars.length)]
    ).join("");
    setCaptcha(randomText);
    setCaptchaInput("");
  };

  useEffect(() => {
    generateCaptcha();

    // Animate in
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
    gsap.fromTo(
      formRef.current.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, delay: 0.3 }
    );
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });





  const handleLogin = async () => {
  const { prefix, email, password } = formData;
  if (!prefix || !email || !password) {
    setMessage("All fields are required.");
    setStatus("error");
    return;
  }

  if (captchaInput.trim().toUpperCase() !== captcha) {
    setMessage("Incorrect CAPTCHA. Please try again.");
    setStatus("error");
    generateCaptcha();
    return;
  }

  setIsLoading(true);
  setMessage("");
  setStatus("");

  try {
    const res = await loginUser({ prefix, email, password });
    console.log("✅ Login success:", res);

    localStorage.setItem("token", res?.token);
    setMessage("Login successful! Redirecting...");
    setStatus("success");

    setTimeout(() => navigate("/dashboard"), 1200);
  } catch (error) {
    console.error("❌ Login failed:", error);
    setMessage(error.response?.data?.message || "Login failed. Please check your credentials.");
    setStatus("error");
  } finally {
    setIsLoading(false);
  }
};


  return (
    <div className="relative flex min-h-screen items-center justify-center bg-white px-4">
      {isLoading && (
        <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-50">
          <Loader2 className="animate-spin text-[#00A991]" size={50} />
        </div>
      )}

      <div ref={containerRef} className="flex flex-col lg:flex-row gap-2 w-full max-w-7xl">
        {/* Left Side */}
        <div className="hidden lg:flex flex-1 rounded-2xl overflow-hidden shadow-xl relative bg-white">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${pic})` }}
          ></div>
        </div>

        {/* Right Side */}
        <div className="flex flex-1 items-center justify-center">
          <div ref={formRef} className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md border">
            <h2 className="text-3xl font-bold text-black mb-2">Welcome Back!</h2>
            <p className="text-gray-500 mb-6">
              By logging in, you agree to the terms and conditions. <br />
              <span>Don't have an account? </span>
              <a href="/signup" className="text-blue-500 hover:underline">
                Sign up
              </a>
            </p>

            {/* Message feedback */}
            {message && (
              <div
                className={`flex items-center gap-2 mb-4 text-sm ${
                  status === "success" ? "text-green-600" : "text-red-500"
                }`}
              >
                {status === "success" ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
                <span>{message}</span>
              </div>
            )}

            {/* Prefix */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#101928] mb-1">Enter Prefix</label>
              <input
                type="text"
                name="prefix"
                placeholder="e.g. VELOX"
                value={formData.prefix}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-[6px] focus:ring-2 focus:ring-blue-500 focus:outline-none border-[#D0D5DD]"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#101928] mb-1">Enter Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-[6px] focus:ring-2 focus:ring-blue-500 focus:outline-none border-[#D0D5DD]"
              />
            </div>

            {/* Password */}
            <div className="mb-4 relative">
              <label className="block text-sm font-medium text-[#101928] mb-1">Enter Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-[6px] pr-10 focus:ring-2 focus:ring-blue-500 focus:outline-none border-[#D0D5DD]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* ✅ CAPTCHA */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#101928] mb-1">CAPTCHA</label>
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-gray-100 border border-gray-300 text-lg font-mono font-semibold px-4 py-2 rounded select-none tracking-widest">
                  {captcha}
                </div>
                <button
                  type="button"
                  onClick={generateCaptcha}
                  className="flex items-center gap-1 text-blue-500 hover:text-blue-700"
                >
                  <RefreshCcw size={16} /> Refresh
                </button>
              </div>

              <input
                type="text"
                placeholder="Enter the CAPTCHA"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none border-[#D0D5DD]"
              />
            </div>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              disabled={isLoading}
              className={`w-full py-3 rounded-[8px] font-semibold transition-all ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#00A991] hover:bg-green-600 text-white"
              }`}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>

            {/* Forgot Password */}
            <div className="mt-4 text-center">
              <button
                onClick={() => navigate("/forgot-password")}
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot password?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
