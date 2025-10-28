// import React from "react";
// import { PlayCircle, Lock } from "lucide-react";

// export default function Course() {
//   const lessons = [
//     "What is Forex?",
//     "How Do You Trade Forex?",
//     "When Can You Trade Forex?",
//     "Who Trades Forex?",
//     "Why Trade Forex?",
//     "Margin Trading 101: Understand How Your Margin Account Works",
//   ];

//   return (
//     <div className="min-h-screen bg-white flex flex-col items-center py-12 px-6 md:px-20 text-gray-800">
//       {/* HEADER SECTION */}
//       <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 w-full max-w-5xl mb-10">
//         {/* LEFT BADGE */}
//         <div className="flex flex-col items-center">
//           <div className="w-40 h-40 rounded-full bg-gradient-to-b from-teal-500 to-yellow-400 flex items-center justify-center shadow-lg">
//             <img
//               src="https://i.pinimg.com/1200x/f4/e0/a2/f4e0a27ff4e330887be183d088863629.jpg"
//               alt="badge"
//               className="w-full h-full object-cover rounded-full"
//             />
//           </div>
          
//         </div>

//         {/* RIGHT DETAILS */}
//         <div className="text-center md:text-left max-w-md">
//           <p className="text-sm text-gray-500 font-semibold mb-1">
//             Course 1 of 11
//           </p>
//           <h2 className="text-4xl font-extrabold text-gray-800 mb-3">
//             Preschool
//           </h2>
//           <p className="text-gray-600 mb-5">
//             Currency trading? Forex trading? FX trading? Totally clueless about
//             forex? Here’s an introduction to the foreign exchange market.
//           </p>
//           <button className="px-6 py-2 bg-gradient-to-r from-teal-500 to-yellow-400 text-white font-semibold rounded-full shadow-md hover:opacity-90 transition-all">
//             Start Course →
//           </button>
//         </div>
//       </div>

//       <hr className="w-full max-w-5xl border-gray-200 my-6" />

//       {/* PROGRESS + OUTLINE SECTION */}
//       <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
//         {/* LEFT - PROGRESS */}
//         <div>
//           <h3 className="text-xl font-bold text-gray-800 mb-2">
//             Your Progress
//           </h3>
//           <p className="text-sm text-teal-600 mb-4">
//             Sign in to unlock progress tracking.
//           </p>

//           {/* Locked Progress Bar */}
//           <div className="flex items-center gap-3">
//             <div className="flex-1 bg-gray-200 rounded-full h-3 relative overflow-hidden">
//               <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-teal-500 to-yellow-400 w-1/4 opacity-70"></div>
//             </div>
//             <div className="bg-teal-500 p-2 rounded-full text-white">
//               <Lock size={18} />
//             </div>
//           </div>
//         </div>

//         {/* RIGHT - COURSE OUTLINE */}
//         <div>
//           <h3 className="text-xl font-bold text-gray-800 mb-4">
//             Course Outline
//           </h3>
//           <div className="relative ml-4">
//             {/* Vertical line */}
//             <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-300"></div>

//             {lessons.map((lesson, i) => (
//               <div key={i} className="flex items-start mb-4 relative">
//                 <div className="z-10 bg-white">
//                   <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-teal-500 bg-white">
//                     <PlayCircle size={14} className="text-teal-500" />
//                   </div>
//                 </div>
//                 <p className="ml-4 text-gray-700 text-sm hover:text-yellow-500 transition cursor-pointer">
//                   {lesson}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }









import React, { useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle, Lock } from "lucide-react";

export default function Course() {
  const lessons = [
    {
      id: 1,
      title: "Introduction to online Forex trading",
      videoUrl: "https://www.youtube.com/embed/0j8J7HXvR4Y",
    },
    {
      id: 2,
      title: "Terminologies in Forex Trading",
      videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
    },
    {
      id: 3,
      title: "Brokers Services and platforms",
      videoUrl: "https://www.youtube.com/embed/lTTajzrSkCw",
    },
    {
      id: 4,
      title: "Technical analysis and fundamental analysis",
      videoUrl: "https://www.youtube.com/embed/3fumBcKC6RE",
    },
    {
      id: 5,
      title: "Forex trading times and sessions",
      videoUrl: "https://www.youtube.com/embed/VYOjWnS4cMY",
    },
    {
      id: 6,
      title:
        "Buying and selling currencies, types of orders and how to place them",
      videoUrl: "https://www.youtube.com/embed/IcrbM1l_BoI",
    },
    {
      id: 7,
      title:
        "Order types and users",
      videoUrl: "https://www.youtube.com/embed/IcrbM1l_BoI",
    },
  ];

  const [selectedLesson, setSelectedLesson] = useState(null);

  // Default Landing UI
  if (!selectedLesson) {
    return (
      <div className="min-h-screen dark:bg-neutral-900 dark:text-white bg-white flex flex-col items-center py-12 px-6 md:px-20 text-gray-800">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 w-full max-w-5xl mb-10">
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full bg-gradient-to-b from-teal-500 to-yellow-400 flex items-center justify-center shadow-lg">
              <img
                src="https://i.pinimg.com/1200x/f4/e0/a2/f4e0a27ff4e330887be183d088863629.jpg"
                alt="badge"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <div className="text-center md:text-left max-w-md">
            <p className="text-sm dark:bg-neutral-900 dark:text-white text-gray-500 font-semibold mb-1">
              Course 1 of 11
            </p>
            <h2 className="text-4xl dark:bg-neutral-900 dark:text-white font-extrabold text-gray-800 mb-3">
              Preschool
            </h2>
            <p className="text-gray-600 dark:bg-neutral-900 dark:text-white mb-5">
              Currency trading? Forex trading? FX trading? Totally clueless about
              forex? Here’s an introduction to the foreign exchange market.
            </p>
            <button className="px-6 py-2 bg-gradient-to-r from-teal-500 to-yellow-400 text-white font-semibold rounded-full shadow-md hover:opacity-90 transition-all">
              Start Course →
            </button>
          </div>
        </div>

        <hr className="w-full max-w-5xl border-gray-200 my-6" />

        {/* PROGRESS + OUTLINE SECTION */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 dark:bg-neutral-900 dark:text-white">Your Progress</h3>
            <p className="text-sm dark:bg-neutral-900 dark:text-white text-teal-600 mb-4">
              Sign in to unlock progress tracking.
            </p>

            <div className="flex items-center gap-3">
              <div className="flex-1 bg-gray-200 rounded-full h-3 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-teal-500 to-yellow-400 w-1/4 opacity-70"></div>
              </div>
              <div className="bg-teal-500 p-2 rounded-full text-white">
                <Lock size={18} />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 dark:bg-neutral-900 dark:text-white">Course Outline</h3>
            <div className="relative ml-4">
              <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-300"></div>

              {lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  onClick={() => setSelectedLesson(lesson)}
                  className="flex items-start mb-4 relative cursor-pointer"
                >
                  <div className="z-10 bg-white">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-teal-500 bg-white hover:bg-teal-100">
                      <PlayCircle size={14} className="text-teal-500" />
                    </div>
                  </div>
                  <p className="ml-4 dark:bg-neutral-900 dark:text-white text-gray-700 text-sm hover:text-yellow-500 transition">
                    {lesson.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Video Player UI
  return (
    <div className="min-h-screen bg-[#f9fafb] flex flex-col items-center py-10 px-6 md:px-16 text-gray-800">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* LEFT - VIDEO PLAYER */}
        <motion.div
          key={selectedLesson.id}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
        >
          <div className="aspect-video bg-black">
            <iframe
              src={selectedLesson.videoUrl}
              title={selectedLesson.title}
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>

          <div className="p-6 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {selectedLesson.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                Learn the fundamentals of forex trading — including what it is,
                how it works, and when to trade effectively.
              </p>
            </div>
            <button
              onClick={() => setSelectedLesson(null)}
              className="px-4 py-2 flex justify-center items-center bg-gradient-to-r from-teal-500 to-yellow-400 text-white rounded-md font-medium shadow hover:opacity-90 transition-all"
            >
              ← Back
            </button>
          </div>
        </motion.div>

        {/* RIGHT - LESSON LIST */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-5 flex flex-col"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Course Outline
          </h3>
          <div className="space-y-3 overflow-y-auto max-h-[70vh]">
            {lessons.map((lesson) => (
              <motion.div
                key={lesson.id}
                onClick={() => setSelectedLesson(lesson)}
                whileHover={{ scale: 1.02 }}
                className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer border transition-all ${
                  selectedLesson.id === lesson.id
                    ? "bg-gradient-to-r from-teal-500 to-yellow-400 text-white"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center gap-3">
                  <PlayCircle
                    size={20}
                    className={`${
                      selectedLesson.id === lesson.id
                        ? "text-white"
                        : "text-teal-500"
                    }`}
                  />
                  <span className="text-sm font-medium">
                    {lesson.title.length > 45
                      ? lesson.title.slice(0, 45) + "..."
                      : lesson.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
