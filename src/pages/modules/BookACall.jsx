import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, Send, CheckCircle, XCircle } from "lucide-react";

export default function BookACall() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    goal: "",
    experience: "",
    topic: "",
    date: "",
    time: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [showCard, setShowCard] = useState(true);

  const handleChange = (field, value) => {
    setAnswers({ ...answers, [field]: value });
  };

  const handleNext = () => {
    if (step === 1) {
      if (answers.goal && answers.experience && answers.topic) setStep(2);
    } else if (step === 2) {
      if (answers.date && answers.time) setSubmitted(true);
    }
  };

  const handleClose = () => {
    setShowCard(false);
    setStep(1);
    setAnswers({ goal: "", experience: "", topic: "", date: "", time: "" });
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-neutral-900 dark:to-neutral-950 flex flex-col items-center justify-center p-6">
      {showCard ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-6xl bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 relative"
        >
          {/* Close Button */}
          {submitted && (
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
            >
              <XCircle size={22} />
            </button>
          )}

          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            {submitted
              ? "Call Scheduled!"
              : step === 1
              ? "AI Mentor Assistant"
              : "Book a Live Mentorship Call"}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            {submitted
              ? "Your mentorship session has been successfully booked."
              : step === 1
              ? "Let's get to know you before connecting you to a mentor."
              : "Select your date and time for a live mentorship call with VeloxCapital experts."}
          </p>

          {/* Step 1 - AI QUESTIONS */}
          <AnimatePresence>
            {step === 1 && !submitted && (
              <motion.div
                key="ai-questions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4"
              >
                <div>
                  <label className="text-gray-700 dark:text-gray-200 text-sm font-medium">
                    🤖 What is your main financial goal?
                  </label>
                  <input
                    type="text"
                    value={answers.goal}
                    onChange={(e) => handleChange("goal", e.target.value)}
                    placeholder="e.g. Build a passive income portfolio"
                    className="w-full mt-2 px-4 py-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="text-gray-700 dark:text-gray-200 text-sm font-medium">
                    📈 What is your current trading experience level?
                  </label>
                  <select
                    value={answers.experience}
                    onChange={(e) => handleChange("experience", e.target.value)}
                    className="w-full mt-2 px-4 py-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="">Select one</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
                <div>
                  <label className="text-gray-700 dark:text-gray-200 text-sm font-medium">
                    💬 Which topic would you like to discuss?
                  </label>
                  <select
                    value={answers.topic}
                    onChange={(e) => handleChange("topic", e.target.value)}
                    className="w-full mt-2 px-4 py-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="">Choose a topic</option>
                    <option value="Investment Strategies">Investment Strategies</option>
                    <option value="Crypto Trading">Crypto Trading</option>
                    <option value="Risk Management">Risk Management</option>
                    <option value="Financial Planning">Financial Planning</option>
                  </select>
                </div>
                <button
                  onClick={handleNext}
                  disabled={!answers.goal || !answers.experience || !answers.topic}
                  className="w-full mt-4 py-2 bg-teal-600 hover:bg-teal-700 disabled:bg-gray-400 text-white rounded-lg transition"
                >
                  Continue to Booking →
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Step 2 - BOOKING FORM */}
          <AnimatePresence>
            {step === 2 && !submitted && (
              <motion.div
                key="booking-form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4"
              >
                <div>
                  <label className="text-gray-700 dark:text-gray-200 text-sm font-medium flex items-center gap-2">
                    <User size={16} /> Preferred Mentor
                  </label>
                  <select className="w-full mt-2 px-4 py-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white focus:ring-2 focus:ring-teal-500">
                    <option>Choose a mentor</option>
                    <option>Dr. Samuel Owolabi — Senior Investment Coach</option>
                    <option>Amaka Uzo — Crypto Analyst</option>
                    <option>James White — Risk Management Expert</option>
                  </select>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="text-gray-700 dark:text-gray-200 text-sm font-medium flex items-center gap-2">
                      <Calendar size={16} /> Date
                    </label>
                    <input
                      type="date"
                      value={answers.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                      className="w-full mt-2 px-4 py-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-gray-700 dark:text-gray-200 text-sm font-medium flex items-center gap-2">
                      <Clock size={16} /> Time
                    </label>
                    <input
                      type="time"
                      value={answers.time}
                      onChange={(e) => handleChange("time", e.target.value)}
                      className="w-full mt-2 px-4 py-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <button
                  onClick={handleNext}
                  disabled={!answers.date || !answers.time}
                  className="w-full mt-4 py-2 bg-teal-600 hover:bg-teal-700 disabled:bg-gray-400 text-white rounded-lg transition flex justify-center items-center gap-2"
                >
                  <Send size={16} /> Book Call
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Confirmation */}
          {submitted && (
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center flex flex-col items-center justify-center py-8"
            >
              <CheckCircle size={60} className="text-teal-500 mb-4" />
              <p className="text-lg font-semibold text-gray-800 dark:text-white">
                Great! Your mentorship call is booked.
              </p>
              <p className="text-gray-500 mt-2">
                We’ll send you a confirmation email with meeting details shortly.
              </p>

              <button
                onClick={handleClose}
                className="mt-6 px-6 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg flex items-center gap-2 transition"
              >
                <XCircle size={18} /> Close
              </button>
            </motion.div>
          )}
        </motion.div>
      ) : (
        // After Close — Address Section
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-8 bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 max-w-md"
        >
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
            VeloxCapital Headquarters
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            12 Marina Street, Victoria Island, Lagos, Nigeria
          </p>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            📞 +234 (0) 908 555 2040
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            ✉️ support@veloxcapital.ng
          </p>
          <button
            onClick={() => setShowCard(true)}
            className="mt-6 px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition"
          >
            Book Another Call
          </button>
        </motion.div>
      )}

      <p className="text-gray-400 text-xs mt-6">
        Powered by <span className="text-teal-500 font-semibold">VeloxCapital Mentorship AI</span>
      </p>
    </div>
  );
}
