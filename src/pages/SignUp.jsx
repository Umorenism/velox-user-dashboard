







import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { Eye, EyeOff, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import pic from "../assets/logovelox.svg";
import { signUpUser } from "../api/authApi"; // ✅ Signup API

export default function SignUp() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    prefix: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // "error" | "success"

  useEffect(() => {
    gsap.fromTo(containerRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" });
    gsap.fromTo(formRef.current.children, { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, delay: 0.3 });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { name, email, phone, password, prefix } = formData;

    // ✅ Validate prefix requirement
    if (!prefix || prefix.trim().length < 3) {
      setMessage("Prefix is required (minimum 3 characters).");
      setStatus("error");
      return;
    }

    setIsLoading(true);
    setMessage("");
    setStatus("");

    try {
      const res = await signUpUser(formData);
      console.log("✅ Signup success:", res);

      setMessage("Signup successful! Please verify your email.");
      setStatus("success");

      // Save email temporarily for verification step
      localStorage.setItem("pendingEmail", formData.email);

      setTimeout(() => navigate("/verify-email"), 1500);
    } catch (error) {
      console.error("❌ Signup failed:", error);
      setMessage(error.response?.data?.message || "Signup failed, please try again.");
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
        {/* Left Image Section */}
        <div className="hidden lg:flex flex-1 rounded-2xl overflow-hidden shadow-xl relative bg-white">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${pic})` }}></div>
        </div>

        {/* Right Form Section */}
        <div className="flex flex-1 items-center justify-center">
          <form ref={formRef} onSubmit={handleSignUp} className="w-full max-w-md bg-white p-8 rounded-xl border shadow-md">
            <h2 className="text-3xl font-bold text-black mb-2">Create Account</h2>
            <p className="text-gray-500 mb-6">Sign up to start using your dashboard</p>

            {/* ✅ Feedback Message */}
            {message && (
              <div
                className={`flex items-center gap-2 mb-4 text-sm ${
                  status === "success" ? "text-green-600" : "text-red-500"
                }`}
              >
                {status === "success" ? (
                  <CheckCircle2 size={18} />
                ) : (
                  <AlertCircle size={18} />
                )}
                <span>{message}</span>
              </div>
            )}

            {/* Prefix Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Enter Prefix</label>
              <input
                name="prefix"
                onChange={handleChange}
                value={formData.prefix}
                type="text"
                placeholder="e.g. VX-SEC-2025"
                className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-[#00A991] focus:outline-none"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Prefix uniquely identifies your organization or project.
              </p>
            </div>

            {/* Full Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                name="name"
                onChange={handleChange}
                value={formData.name}
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-[#00A991] focus:outline-none"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                name="email"
                onChange={handleChange}
                value={formData.email}
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-[#00A991] focus:outline-none"
                required
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input
                name="phone"
                onChange={handleChange}
                value={formData.phone}
                type="tel"
                placeholder="+234 800 000 0000"
                className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-[#00A991] focus:outline-none"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-6 relative">
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                name="password"
                onChange={handleChange}
                value={formData.password}
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full px-4 py-2 border rounded pr-10 focus:ring-2 focus:ring-[#00A991] focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 rounded font-semibold ${
                isLoading ? "bg-gray-400" : "bg-[#00A991] hover:bg-green-600 text-white"
              }`}
            >
              {isLoading ? "Creating account..." : "Sign Up"}
            </button>

            {/* Login Link */}
            <div className="mt-4 text-center">
              <button
                onClick={() => navigate("/login")}
                type="button"
                className="text-sm text-blue-500 hover:underline"
              >
                Already have an account? Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
