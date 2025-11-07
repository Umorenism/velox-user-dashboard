import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../api/authApi";

// ─── Icons ────────────────────────────────
import {
  User,
  Mail,
  Phone,
  Lock,
  UserCircle,
  UserPlus,
  KeyRound,
  Gift,
} from "lucide-react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

// ─── Background Media ─────────────────────
import bg1 from "../assets/veloximg2.jpeg";
import bg2 from "../assets/veloxvid1.mp4";
import bg3 from "../assets/veloximg2.jpeg";
import bg4 from "../assets/veloxvid2.mp4";
import bg5 from "../assets/veloximg6.jpeg";
import bg6 from "../assets/veloximg7.jpeg";

const backgroundMedia = [
  { type: "image", src: bg1 },
  { type: "video", src: bg2 },
  { type: "image", src: bg3 },
  { type: "video", src: bg4 },
  { type: "image", src: bg5 },
  { type: "image", src: bg6 },
];

// ─── Background Switcher ──────────────────
function BackgroundSwitcher() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((i) => (i + 1) % backgroundMedia.length),
      8000
    );
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
      <div className="absolute inset-0 bg-[#07112b]/10 backdrop-brightness-105" />
    </div>
  );
}

// ─── Animated Input Wrapper ───────────────
function AnimatedInput({ icon: Icon, type = "text", index = 0, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="relative"
    >
      <motion.div
        animate={{
          scale: focused ? 1.2 : 1,
          color: focused ? "#e3b874" : "#9ca3af",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 12 }}
        className="absolute left-3 top-2.5"
      >
        <Icon className="h-5 w-5" />
      </motion.div>

      <motion.input
        type={type}
        {...props}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full pl-10 pr-3 py-2 rounded-md bg-[#091631] border border-[#1f315c] 
        focus:ring-2 focus:ring-[#e3b874] outline-none text-white placeholder-gray-400 
        transition-all duration-200`}
        whileFocus={{ scale: 1.02 }}
      />
    </motion.div>
  );
}

// ─── Animated Password Input ──────────────
function AnimatedPassword({ value, onChange, placeholder, name, index }) {
  const [show, setShow] = useState(false);
  const [focused, setFocused] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="relative"
    >
      <motion.div
        animate={{
          scale: focused ? 1.2 : 1,
          color: focused ? "#e3b874" : "#9ca3af",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 12 }}
        className="absolute left-3 top-2.5"
      >
        <Lock className="h-5 w-5" />
      </motion.div>

      <motion.input
        type={show ? "text" : "password"}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        whileFocus={{ scale: 1.02 }}
        className="w-full pl-10 pr-10 py-2 rounded-md bg-[#091631] border border-[#1f315c]
        focus:ring-2 focus:ring-[#e3b874] outline-none text-white placeholder-gray-400 transition-all duration-200"
      />
      <motion.button
        type="button"
        whileHover={{ scale: 1.2 }}
        onClick={() => setShow((s) => !s)}
        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-[#e3b874] transition"
      >
        {show ? (
          <EyeSlashIcon className="h-5 w-5" />
        ) : (
          <EyeIcon className="h-5 w-5" />
        )}
      </motion.button>
    </motion.div>
  );
}

// ─── Signup Component ──────────────────────
export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    ref: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (
      !form.firstName ||
      !form.lastName ||
      !form.username ||
      !form.email ||
      !form.phone ||
      !form.password ||
      !form.confirmPassword
    ) {
      setError("All required fields must be filled out.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    const payload = {
      email: form.email.trim(),
      password: form.password,
      username: form.username.trim(),
      phone: form.phone.trim(),
      name: `${form.firstName.trim()} ${form.middleName.trim()} ${form.lastName.trim()}`.trim(),
    };

    if (form.ref.trim()) payload.ref = form.ref.trim();

    try {
      const res = await signUpUser(payload);
      console.log("Signup success:", res);
      localStorage.setItem("pendingEmail", form.email);
      setTimeout(() => navigate("/verify-email"), 800);
    } catch (err) {
      console.error("Signup failed:", err);
      setError(err.response?.data?.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ─── Animations ─────────────────────────
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#07112b] text-white relative overflow-hidden p-4">
      <BackgroundSwitcher />

      <motion.div
        className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-16 lg:px-24"
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        {/* Left */}
        <motion.div
          variants={containerVariants}
          className="w-full md:w-1/2 mb-10 md:mb-0"
        >
          
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-snug">
            Start your journey to{" "}
            <span className="text-[#e3b874]">financial success.</span>
          </h2>
        </motion.div>

        {/* Right */}
        <motion.div
          variants={containerVariants}
          className="bg-[#00b4A1]/10 backdrop-blur-lg p-8 rounded-2xl w-full max-w-md shadow-xl border border-[#1f315c]"
        >
          <h2 className="text-2xl font-bold text-[#e3b874] mb-2 text-center">
           Create an account
          </h2>
          <p className="text-center text-sm text-gray-400 mb-6">
            Join our platform and explore next-level opportunities.
          </p>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            variants={containerVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <AnimatedInput
                icon={UserCircle}
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                required
                index={0}
              />
              <AnimatedInput
                icon={UserPlus}
                name="middleName"
                placeholder="Middle Name"
                value={form.middleName}
                onChange={handleChange}
                index={1}
              />
            </div>

            <AnimatedInput
              icon={User}
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              required
              index={2}
            />

            <AnimatedInput
              icon={User}
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              required
              index={3}
            />

            <AnimatedInput
              icon={Mail}
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              index={4}
            />

            <AnimatedInput
              icon={Phone}
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              index={5}
            />

            <AnimatedPassword
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              index={6}
            />
            <AnimatedPassword
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              index={7}
            />

            <AnimatedInput
              icon={Gift}
              name="ref"
              placeholder="Referral Code (Optional)"
              value={form.ref}
              onChange={handleChange}
              index={8}
            />

            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-sm text-center"
              >
                {error}
              </motion.p>
            )}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              className="w-full py-2 bg-gradient-to-b from-[#e3b874] to-[#c19a4a] text-[#091631] font-semibold rounded-md hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </motion.button>

            <div className="text-center text-sm text-gray-400 mt-2">
              Already have an account?{" "}
              <a href="/login" className="text-[#e3b874] hover:underline">
                Login
              </a>
            </div>
          </motion.form>

          <div className="text-center text-xs text-gray-400 mt-6">
            Need Help?{" "}
            <a
              href="mailto:contact@veloxcapital.com"
              className="text-[#e3b874] hover:underline"
            >
              contact@veloxcapitalmarket.ai
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
