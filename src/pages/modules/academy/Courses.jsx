








// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { PlayCircle, Lock } from "lucide-react";

// export default function Course() {
//   const lessons = [
//     {
//       id: 1,
//       title: "Introduction to online Forex trading",
//       videoUrl: "https://www.youtube.com/embed/0j8J7HXvR4Y",
//       duration: "10:00",
//     },
//     {
//       id: 2,
//       title: "Terminologies in Forex Trading",
//       videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
//       duration: "10:00",
//     },
//     {
//       id: 3,
//       title: "Brokers Services and platforms",
//       videoUrl: "https://www.youtube.com/embed/lTTajzrSkCw",
//       duration: "10:00",
//     },
//     {
//       id: 4,
//       title: "Technical analysis and fundamental analysis",
//       videoUrl: "https://www.youtube.com/embed/3fumBcKC6RE",
//       duration: "10:00",
//     },
//     {
//       id: 5,
//       title: "Forex trading times and sessions",
//       videoUrl: "https://www.youtube.com/embed/VYOjWnS4cMY",
//       duration: "10:00",
//     },
//     {
//       id: 6,
//       title:
//         "Buying and selling currencies, types of orders and how to place them",
//       videoUrl: "https://www.youtube.com/embed/IcrbM1l_BoI",
//       duration: "10:00",
//     },
//     {
//       id: 7,
//       title:
//         "Order types and users",
//       videoUrl: "https://www.youtube.com/embed/IcrbM1l_BoI",
//       duration: "10:00",
//     },
//   ];

//   const [selectedLesson, setSelectedLesson] = useState(null);

//   // Default Landing UI
//   if (!selectedLesson) {
//     return (
//       <div className="min-h-screen dark:bg-neutral-900 dark:text-white bg-white flex flex-col items-center py-12 px-6 md:px-20 text-gray-800">
//         {/* HEADER SECTION */}
//         <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 w-full max-w-5xl mb-10">
//           <div className="flex flex-col items-center">
//             <div className="w-40 h-40 rounded-full bg-gradient-to-b from-teal-500 to-yellow-400 flex items-center justify-center shadow-lg">
//               <img
//                 src="https://i.pinimg.com/1200x/f4/e0/a2/f4e0a27ff4e330887be183d088863629.jpg"
//                 alt="badge"
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </div>
//           </div>

//           <div className="text-center md:text-left max-w-md">
//             <p className="text-sm dark:bg-neutral-900 dark:text-white text-gray-500 font-semibold mb-1">
//               Course 1 of 11
//             </p>
//             <h2 className="text-4xl dark:bg-neutral-900 dark:text-white font-extrabold text-gray-800 mb-3">
//               Preschool
//             </h2>
//             <p className="text-gray-600 dark:bg-neutral-900 dark:text-white mb-5">
//               Currency trading? Forex trading? FX trading? Totally clueless about
//               forex? Here’s an introduction to the foreign exchange market.
//             </p>
//             <button className="px-6 py-2 bg-gradient-to-r from-teal-500 to-yellow-400 text-white font-semibold rounded-full shadow-md hover:opacity-90 transition-all">
//               Start Course →
//             </button>
//           </div>
//         </div>

//         <hr className="w-full max-w-5xl border-gray-200 my-6" />

//         {/* PROGRESS + OUTLINE SECTION */}
//         <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
//           <div>
//             <h3 className="text-xl font-bold text-gray-800 mb-2 dark:bg-neutral-900 dark:text-white">Your Progress</h3>
//             <p className="text-sm dark:bg-neutral-900 dark:text-white text-teal-600 mb-4">
//               Sign in to unlock progress tracking.
//             </p>

//             <div className="flex items-center gap-3">
//               <div className="flex-1 bg-gray-200 rounded-full h-3 relative overflow-hidden">
//                 <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-teal-500 to-yellow-400 w-1/4 opacity-70"></div>
//               </div>
//               <div className="bg-teal-500 p-2 rounded-full text-white">
//                 <Lock size={18} />
//               </div>
//             </div>
//           </div>
          
//           <div >
//             <h3 className="text-xl font-bold text-gray-800 mb-4 dark:bg-neutral-900 dark:text-white">Course Outline</h3>
//             <div className="relative ml-4">
//               <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-300"></div>

//               {lessons.map((lesson) => (
//                 <div
//                   key={lesson.id}
//                   onClick={() => setSelectedLesson(lesson)}
//                   className="flex items-start mb-4 relative cursor-pointer"
//                 >
//                   <div className="z-10 bg-white">
//                     <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-teal-500 bg-white hover:bg-teal-100">
//                       <PlayCircle size={14} className="text-teal-500" />
//                     </div>
//                   </div>
//                   <p className="ml-4 dark:bg-neutral-900 dark:text-white text-gray-700 text-sm hover:text-yellow-500 transition">
//                     {lesson.title}
//                   </p>
//                 </div>
//               ))}
//             </div>
            
//           </div>
         


        

//         </div>
//       </div>
//     );
//   }

//   // Video Player UI
//   return (
//     <div className="min-h-screen bg-[#f9fafb] flex flex-col items-center py-10 px-6 md:px-16 text-gray-800">
//       <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* LEFT - VIDEO PLAYER */}
//         <motion.div
//           key={selectedLesson.id}
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
//         >
//           <div className="aspect-video bg-black">
//             <iframe
//               src={selectedLesson.videoUrl}
//               title={selectedLesson.title}
//               className="w-full h-full"
//               allowFullScreen
//             ></iframe>
//           </div>

//           <div className="p-6 flex justify-between items-center">
//             <div>
//               <h2 className="text-2xl font-bold text-gray-800 mb-2">
//                 {selectedLesson.title}
//               </h2>
//               <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
//                 Learn the fundamentals of forex trading — including what it is,
//                 how it works, and when to trade effectively.
//               </p>
//             </div>
//             <button
//               onClick={() => setSelectedLesson(null)}
//               className="px-4 py-2 flex justify-center items-center bg-gradient-to-r from-teal-500 to-yellow-400 text-white rounded-md font-medium shadow hover:opacity-90 transition-all"
//             >
//               ← Back
//             </button>
//           </div>
//         </motion.div>

//         {/* RIGHT - LESSON LIST */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="bg-white rounded-2xl shadow-lg border border-gray-200 p-5 flex flex-col"
//         >
//           <h3 className="text-xl font-semibold text-gray-800 mb-4">
//             Course Outline
//           </h3>
//           <div className="space-y-3 overflow-y-auto max-h-[70vh]">
//             {lessons.map((lesson) => (
//               <motion.div
//                 key={lesson.id}
//                 onClick={() => setSelectedLesson(lesson)}
//                 whileHover={{ scale: 1.02 }}
//                 className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer border transition-all ${
//                   selectedLesson.id === lesson.id
//                     ? "bg-gradient-to-r from-teal-500 to-yellow-400 text-white"
//                     : "bg-gray-50 hover:bg-gray-100"
//                 }`}
//               >
//                 <div className="flex items-center gap-3">
//                   <PlayCircle
//                     size={20}
//                     className={`${
//                       selectedLesson.id === lesson.id
//                         ? "text-white"
//                         : "text-teal-500"
//                     }`}
//                   />
//                   <span className="text-sm font-medium">
//                     {lesson.title.length > 45
//                       ? lesson.title.slice(0, 45) + "..."
//                       : lesson.title}
//                   </span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }












// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { PlayCircle, Lock, CheckCircle, AlertCircle } from "lucide-react";
// import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
// import { apiClient } from "../../../api/apiClient"; // Adjust path

// // ... (all imports same)

// export default function Course() {
//   const [selectedLesson, setSelectedLesson] = useState(null);
//   const [course, setCourse] = useState(null);
//   const [lessons, setLessons] = useState([]);
//   const [progress, setProgress] = useState({ percent: 0, completed: 0, total: 0 });
//   const [currentVideoId, setCurrentVideoId] = useState(null);
//   const [videoCompleted, setVideoCompleted] = useState({});
//   const [showSubscribeModal, setShowSubscribeModal] = useState(false);
//   const [nextLockedPackage, setNextLockedPackage] = useState("");
//   const iframeRef = useRef(null);

//   // Fetch course + lessons
//   useEffect(() => {
//     const fetchCourse = async () => {
//       try {
//         const res = await apiClient.get("/api/users/training/courses");
//         const courseData = res.data[0];
//         setCourse(courseData);
//         setProgress(courseData.progress || { percent: 0, completed: 0, total: 0 });

//         const lessonsRes = await apiClient.get(`/api/users/training/courses/${courseData.id}`);
//         const fetchedLessons = lessonsRes.data.lessons || [];

//         const lessonsWithPackage = fetchedLessons.map((l, i) => ({
//           ...l,
//           packageRequired: i < 2 ? "basic" : i < 5 ? "pro" : "premium",
//         }));

//         setLessons(lessonsWithPackage);
//         setProgress((p) => ({ ...p, total: lessonsWithPackage.length }));
//       } catch (err) {
//         console.error("Failed to load course:", err);
//       }
//     };
//     fetchCourse();
//   }, []);

//   // YouTube API setup (same)
//   useEffect(() => {
//     if (!selectedLesson || !iframeRef.current) return;

//     const tag = document.createElement("script");
//     tag.src = "https://www.youtube.com/iframe_api";
//     const firstScript = document.getElementsByTagName("script")[0];
//     firstScript.parentNode.insertBefore(tag, firstScript);

//     window.onYouTubeIframeAPIReady = () => {
//       new window.YT.Player(iframeRef.current, {
//         events: {
//           onStateChange: (event) => {
//             if (event.data === window.YT.PlayerState.ENDED) {
//               handleVideoComplete(selectedLesson.id);
//             }
//           },
//         },
//       });
//     };
//   }, [selectedLesson]);

//   const handleVideoComplete = async (videoId) => {
//     try {
//       await apiClient.post(`/api/users/training/videos/${videoId}/complete`);
//       setVideoCompleted((prev) => ({ ...prev, [videoId]: true }));

//       const newCompleted = progress.completed + 1;
//       const newPercent = Math.round((newCompleted / progress.total) * 100);
//       setProgress((prev) => ({ ...prev, completed: newCompleted, percent: newPercent }));

//       const currentIndex = lessons.findIndex((l) => l.id === videoId);
//       const nextLesson = lessons[currentIndex + 1];

//       if (nextLesson) {
//         if (hasAccessToPackage(nextLesson.packageRequired)) {
//           setTimeout(() => setSelectedLesson(nextLesson), 1000);
//         } else {
//           setNextLockedPackage(nextLesson.packageRequired);
//           setShowSubscribeModal(true);
//         }
//       }
//     } catch (err) {
//       console.error("Failed to mark video complete:", err);
//     }
//   };

//   const hasAccessToPackage = (pkg) => {
//     const userPackage = localStorage.getItem("userPackage") || "basic";
//     const levels = { basic: 1, pro: 2, premium: 3 };
//     return levels[userPackage] >= levels[pkg];
//   };

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs.toString().padStart(2, "0")}`;
//   };

//   const pieData = [
//     { name: "Completed", value: progress.percent },
//     { name: "Remaining", value: 100 - progress.percent },
//   ];
//   const COLORS = ["#14b8a6", "#e5e7eb"];

//   // ———— FIXED: Only show landing when course & lessons are loaded ————
//   if (!course || lessons.length === 0) {
//     return (
//       <div className="min-h-screen bg-white dark:bg-neutral-900 flex items-center justify-center">
//         <div className="text-gray-600">Loading course...</div>
//       </div>
//     );
//   }

//   // ———— LANDING UI (unchanged) ————
//   if (!selectedLesson) {
//     return (
//       <div className="min-h-screen dark:bg-neutral-900 dark:text-white bg-white flex flex-col items-center py-12 px-6 md:px-20 text-gray-800">
//         {/* HEADER SECTION */}
//         <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 w-full max-w-5xl mb-10">
//           <div className="flex flex-col items-center">
//             <div className="w-40 h-40 rounded-full bg-gradient-to-b from-teal-500 to-yellow-400 flex items-center justify-center shadow-lg">
//               <img
//                 src={course.thumbnail}
//                 alt="badge"
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </div>
//           </div>

//           <div className="text-center md:text-left max-w-md">
//             <p className="text-sm text-gray-500 font-semibold mb-1">
//               Course {course.order} of 11
//             </p>
//             <h2 className="text-4xl font-extrabold text-gray-800 mb-3">
//               {course.title}
//             </h2>
//             <p className="text-gray-600 mb-5">
//               {course.description}
//             </p>
//             <button
//               onClick={() => setSelectedLesson(lessons[0])}
//               className="px-6 py-2 bg-gradient-to-r from-teal-500 to-yellow-400 text-white font-semibold rounded-full shadow-md hover:opacity-90 transition-all"
//             >
//               Start Course
//             </button>
//           </div>
//         </div>

//         <hr className="w-full max-w-5xl border-gray-200 my-6" />

//         {/* PROGRESS + OUTLINE */}
//         <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
//           <div>
//             <h3 className="text-xl font-bold text-gray-800 mb-2">Your Progress</h3>
//             <p className="text-sm text-teal-600 mb-4">
//               {progress.completed} of {progress.total} videos completed
//             </p>

//             <div className="flex items-center gap-4">
//               <div className="w-32 h-32">
//                 <ResponsiveContainer>
//                   <PieChart>
//                     <Pie
//                       data={pieData}
//                       cx="50%"
//                       cy="50%"
//                       innerRadius={50}
//                       outerRadius={60}
//                       paddingAngle={0}
//                       dataKey="value"
//                     >
//                       {pieData.map((entry, index) => (
//                         <Cell key={`cell-${index}`} fill={COLORS[index]} />
//                       ))}
//                     </Pie>
//                     <text
//                       x="50%"
//                       y="50%"
//                       textAnchor="middle"
//                       dominantBaseline="middle"
//                       className="text-2xl font-bold fill-gray-800"
//                     >
//                       {progress.percent}%
//                     </text>
//                   </PieChart>
//                 </ResponsiveContainer>
//               </div>
//               <div className="bg-teal-500 p-2 rounded-full text-white">
//                 {progress.percent === 100 ? <CheckCircle size={18} /> : <Lock size={18} />}
//               </div>
//             </div>
//           </div>

//           <div>
//             <h3 className="text-xl font-bold text-gray-800 mb-4">Course Outline</h3>
//             <div className="relative ml-4">
//               <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-300"></div>

//               {lessons.map((lesson, i) => {
//                 const isLocked = i > 0 && !videoCompleted[lessons[i - 1].id];
//                 const hasAccess = hasAccessToPackage(lesson.packageRequired);

//                 return (
//                   <div
//                     key={lesson.id}
//                     onClick={() => {
//                       if (!isLocked && hasAccess) setSelectedLesson(lesson);
//                     }}
//                     className={`flex items-start mb-4 relative cursor-pointer ${
//                       isLocked || !hasAccess ? "opacity-50" : ""
//                     }`}
//                   >
//                     <div className="z-10 bg-white">
//                       <div
//                         className={`flex items-center justify-center w-5 h-5 rounded-full border-2 ${
//                           videoCompleted[lesson.id]
//                             ? "bg-teal-500 border-teal-500"
//                             : "border-teal-500 bg-white"
//                         }`}
//                       >
//                         {videoCompleted[lesson.id] ? (
//                           <CheckCircle size={14} className="text-white" />
//                         ) : (
//                           <PlayCircle size={14} className="text-teal-500" />
//                         )}
//                       </div>
//                     </div>
//                     <p className="ml-4 text-gray-700 text-sm hover:text-yellow-500 transition">
//                       {lesson.title}
//                       {!hasAccess && <Lock size={12} className="inline ml-1" />}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // ———— VIDEO PLAYER (unchanged) ————
//   return (
//     <div className="min-h-screen bg-[#f9fafb] flex flex-col items-center py-10 px-6 md:px-16 text-gray-800">
//       <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* VIDEO PLAYER */}
//         <motion.div
//           key={selectedLesson.id}
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
//         >
//           <div className="aspect-video bg-black">
//             <iframe
//               ref={iframeRef}
//               src={selectedLesson.videoUrl + "?enablejsapi=1"}
//               title={selectedLesson.title}
//               className="w-full h-full"
//               allowFullScreen
//             ></iframe>
//           </div>

//           <div className="p-6 flex justify-between items-center">
//             <div>
//               <h2 className="text-2xl font-bold text-gray-800 mb-2">
//                 {selectedLesson.title}
//               </h2>
//               <p className="text-gray-600 text-sm">
//                 {formatTime(0)} / {selectedLesson.duration}
//               </p>
//             </div>
//             <button
//               onClick={() => setSelectedLesson(null)}
//               className="px-4 py-2 bg-gradient-to-r from-teal-500 to-yellow-400 text-white rounded-md font-medium shadow hover:opacity-90"
//             >
//               Back
//             </button>
//           </div>
//         </motion.div>

//         {/* LESSON LIST (same) */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="bg-white rounded-2xl shadow-lg border border-gray-200 p-5 flex flex-col"
//         >
//           <h3 className="text-xl font-semibold text-gray-800 mb-4">
//             Course Outline
//           </h3>
//           <div className="space-y-3 overflow-y-auto max-h-[70vh]">
//             {lessons.map((lesson) => {
//               const isLocked = lessons.indexOf(lesson) > 0 && !videoCompleted[lessons[lessons.indexOf(lesson) - 1].id];
//               const hasAccess = hasAccessToPackage(lesson.packageRequired);

//               return (
//                 <motion.div
//                   key={lesson.id}
//                   onClick={() => {
//                     if (!isLocked && hasAccess) setSelectedLesson(lesson);
//                   }}
//                   whileHover={{ scale: hasAccess && !isLocked ? 1.02 : 1 }}
//                   className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer border transition-all ${
//                     selectedLesson.id === lesson.id
//                       ? "bg-gradient-to-r from-teal-500 to-yellow-400 text-white"
//                       : isLocked || !hasAccess
//                       ? "bg-gray-100 opacity-60"
//                       : "bg-gray-50 hover:bg-gray-100"
//                   }`}
//                 >
//                   <div className="flex items-center gap-3">
//                     {videoCompleted[lesson.id] ? (
//                       <CheckCircle size={20} className="text-green-500" />
//                     ) : (
//                       <PlayCircle
//                         size={20}
//                         className={`${
//                           selectedLesson.id === lesson.id ? "text-white" : "text-teal-500"
//                         }`}
//                       />
//                     )}
//                     <span className="text-sm font-medium">
//                       {lesson.title.length > 45 ? lesson.title.slice(0, 45) + "..." : lesson.title}
//                     </span>
//                   </div>
//                   {!hasAccess && <Lock size={16} />}
//                 </motion.div>
//               );
//             })}
//           </div>
//         </motion.div>
//       </div>

//       {/* SUBSCRIBE MODAL (same) */}
//       {showSubscribeModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl"
//           >
//             <div className="flex items-center gap-3 mb-4">
//               <AlertCircle className="text-yellow-500" size={28} />
//               <h3 className="text-xl font-bold">Upgrade Required</h3>
//             </div>
//             <p className="text-gray-600 mb-4">
//               To continue, you need the <strong>{nextLockedPackage.toUpperCase()}</strong> package.
//             </p>
//             <div className="flex gap-3">
//               <button
//                 onClick={() => setShowSubscribeModal(false)}
//                 className="flex-1 py-2 border border-gray-300 rounded-md"
//               >
//                 Cancel
//               </button>
//               <button className="flex-1 py-2 bg-gradient-to-r from-teal-500 to-yellow-400 text-white rounded-md font-medium">
//                 Subscribe Now
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </div>
//   );
// }
















import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { PlayCircle, Lock, CheckCircle, AlertCircle } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import images from '../../../assets/ver.jpeg'

// DUMMY DATA (Replace with real API later)
const DUMMY_COURSE = {
  id: "507f1f77bcf86cd799439016",
  title: "Crypto Trading 101",
  description: "Learn the basics of crypto trading from scratch.",
  order: 1,
  thumbnail: "https://veloxcapital.com/courses/crypto101.jpg",
  progress: { percent: 40, completed: 2, total: 7 },
};

const DUMMY_LESSONS = [
  {
    id: "vid1",
    title: "Introduction to online Forex trading",
    videoUrl: "https://www.youtube.com/embed/0j8J7HXvR4Y",
    duration: "10:00",
    packageRequired: "basic",
  },
  {
    id: "vid2",
    title: "Terminologies in Forex Trading",
    videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
    duration: "10:00",
    packageRequired: "basic",
  },
  {
    id: "vid3",
    title: "Brokers Services and platforms",
    videoUrl: "https://www.youtube.com/embed/lTTajzrSkCw",
    duration: "10:00",
    packageRequired: "pro",
  },
  {
    id: "vid4",
    title: "Technical analysis and fundamental analysis",
    videoUrl: "https://www.youtube.com/embed/3fumBcKC6RE",
    duration: "10:00",
    packageRequired: "pro",
  },
  {
    id: "vid5",
    title: "Forex trading times and sessions",
    videoUrl: "https://www.youtube.com/embed/VYOjWnS4cMY",
    duration: "10:00",
    packageRequired: "premium",
  },
  {
    id: "vid6",
    title: "Buying and selling currencies, types of orders",
    videoUrl: "https://www.youtube.com/embed/IcrbM1l_BoI",
    duration: "10:00",
    packageRequired: "premium",
  },
  {
    id: "vid7",
    title: "Order types and users",
    videoUrl: "https://www.youtube.com/embed/IcrbM1l_BoI",
    duration: "10:00",
    packageRequired: "premium",
  },
];

export default function Course() {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [course, setCourse] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [progress, setProgress] = useState({ percent: 0, completed: 0, total: 0 });
  const [videoCompleted, setVideoCompleted] = useState({});
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [nextLockedPackage, setNextLockedPackage] = useState("");
  const iframeRef = useRef(null);

  // MOCK: Simulate API load
  useEffect(() => {
    setTimeout(() => {
      setCourse(DUMMY_COURSE);
      setLessons(DUMMY_LESSONS);
      setProgress(DUMMY_COURSE.progress);
    }, 800);
  }, []);

  // YouTube API to detect end
  useEffect(() => {
    if (!selectedLesson || !iframeRef.current) return;

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode.insertBefore(tag, firstScript);

    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player(iframeRef.current, {
        events: {
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              handleVideoComplete(selectedLesson.id);
            }
          },
        },
      });
    };
  }, [selectedLesson]);

  // MOCK: Mark video complete
  const handleVideoComplete = async (videoId) => {
    // Simulate API delay
    await new Promise((r) => setTimeout(r, 500));

    setVideoCompleted((prev) => ({ ...prev, [videoId]: true }));

    const newCompleted = progress.completed + 1;
    const newPercent = Math.round((newCompleted / progress.total) * 100);
    setProgress((prev) => ({ ...prev, completed: newCompleted, percent: newPercent }));

    const currentIndex = lessons.findIndex((l) => l.id === videoId);
    const nextLesson = lessons[currentIndex + 1];

    if (nextLesson) {
      if (hasAccessToPackage(nextLesson.packageRequired)) {
        setTimeout(() => setSelectedLesson(nextLesson), 1000);
      } else {
        setNextLockedPackage(nextLesson.packageRequired);
        setShowSubscribeModal(true);
      }
    }
  };

  // MOCK: User package (change this to test)
  const hasAccessToPackage = (pkg) => {
    const userPackage = "basic"; // Change to "pro" or "premium" to test
    const levels = { basic: 1, pro: 2, premium: 3 };
    return levels[userPackage] >= levels[pkg];
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const pieData = [
    { name: "Completed", value: progress.percent },
    { name: "Remaining", value: 100 - progress.percent },
  ];
  const COLORS = ["#14b8a6", "#e5e7eb"];

  // Loading state
  if (!course || lessons.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-neutral-900 flex items-center justify-center">
        <div className="text-gray-600">Loading course...</div>
      </div>
    );
  }

  // Landing UI
  if (!selectedLesson) {
    return (
      <div className="min-h-screen dark:bg-neutral-900 dark:text-white bg-white flex flex-col items-center py-12 px-6 md:px-20 text-gray-800">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 w-full max-w-5xl mb-10">
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full bg-gradient-to-b from-teal-500 to-yellow-400 flex items-center justify-center shadow-lg">
              <img
                src={course.thumbnail}
                alt="badge"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <div className="text-center md:text-left max-w-md">
            <p className="text-sm text-gray-500 font-semibold mb-1">
              Course {course.order} of 11
            </p>
            <h2 className="text-4xl font-extrabold text-gray-800 mb-3">
              {course.title}
            </h2>
            <p className="text-gray-600 mb-5">
              {course.description}
            </p>
            <button
              onClick={() => setSelectedLesson(lessons[0])}
              className="px-6 py-2 bg-gradient-to-r from-teal-500 to-yellow-400 text-white font-semibold rounded-full shadow-md hover:opacity-90 transition-all"
            >
              Start Course
            </button>
          </div>
        </div>

        <hr className="w-full max-w-5xl border-gray-200 my-6" />

        {/* PROGRESS + OUTLINE */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Your Progress</h3>
            <p className="text-sm text-teal-600 mb-4">
              {progress.completed} of {progress.total} videos completed
            </p>

            <div className="flex items-center gap-4">
              <div className="w-40 h-40">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      
                      innerRadius={50}
                      outerRadius={60}
                      paddingAngle={0}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                    </Pie>
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-2xl font-bold fill-gray-800"
                    >
                      {progress.percent}%
                    </text>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-teal-500 p-2 rounded-full text-white">
                {progress.percent === 100 ? <CheckCircle size={18} /> : <Lock size={18} />}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Course Outline</h3>
            <div className="relative ml-4">
              <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-300"></div>

              {lessons.map((lesson, i) => {
                const isLocked = i > 0 && !videoCompleted[lessons[i - 1].id];
                const hasAccess = hasAccessToPackage(lesson.packageRequired);

                return (
                  <div
                    key={lesson.id}
                    onClick={() => {
                      if (!isLocked && hasAccess) setSelectedLesson(lesson);
                    }}
                    className={`flex items-start mb-4 relative cursor-pointer ${
                      isLocked || !hasAccess ? "opacity-50" : ""
                    }`}
                  >
                    <div className="z-10 bg-white">
                      <div
                        className={`flex items-center justify-center w-5 h-5 rounded-full border-2 ${
                          videoCompleted[lesson.id]
                            ? "bg-teal-500 border-teal-500"
                            : "border-teal-500 bg-white"
                        }`}
                      >
                        {videoCompleted[lesson.id] ? (
                          <CheckCircle size={14} className="text-white" />
                        ) : (
                          <PlayCircle size={14} className="text-teal-500" />
                        )}
                      </div>
                    </div>
                    <p className="ml-4 text-gray-700 text-sm hover:text-yellow-500 transition">
                      {lesson.title}
                      {!hasAccess && <Lock size={12} className="inline ml-1" />}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Video Player
  return (
    <div className="min-h-screen bg-[#f9fafb] flex flex-col items-center py-10 px-6 md:px-16 text-gray-800">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* VIDEO PLAYER */}
        <motion.div
          key={selectedLesson.id}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
        >
          <div className="aspect-video bg-black">
            <iframe
              ref={iframeRef}
              src={selectedLesson.videoUrl + "?enablejsapi=1"}
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
              <p className="text-gray-600 text-sm">
                {formatTime(0)} / {selectedLesson.duration}
              </p>
            </div>
            <button
              onClick={() => setSelectedLesson(null)}
              className="px-4 py-2 bg-gradient-to-r from-teal-500 to-yellow-400 text-white rounded-md font-medium shadow hover:opacity-90"
            >
              Back
            </button>
          </div>
        </motion.div>

        {/* LESSON LIST */}
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
            {lessons.map((lesson) => {
              const isLocked = lessons.indexOf(lesson) > 0 && !videoCompleted[lessons[lessons.indexOf(lesson) - 1].id];
              const hasAccess = hasAccessToPackage(lesson.packageRequired);

              return (
                <motion.div
                  key={lesson.id}
                  onClick={() => {
                    if (!isLocked && hasAccess) setSelectedLesson(lesson);
                  }}
                  whileHover={{ scale: hasAccess && !isLocked ? 1.02 : 1 }}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer border transition-all ${
                    selectedLesson.id === lesson.id
                      ? "bg-gradient-to-r from-teal-500 to-yellow-400 text-white"
                      : isLocked || !hasAccess
                      ? "bg-gray-100 opacity-60"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {videoCompleted[lesson.id] ? (
                      <CheckCircle size={20} className="text-green-500" />
                    ) : (
                      <PlayCircle
                        size={20}
                        className={`${
                          selectedLesson.id === lesson.id ? "text-white" : "text-teal-500"
                        }`}
                      />
                    )}
                    <span className="text-sm font-medium">
                      {lesson.title.length > 45 ? lesson.title.slice(0, 45) + "..." : lesson.title}
                    </span>
                  </div>
                  {!hasAccess && <Lock size={16} />}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* SUBSCRIBE MODAL */}
      {showSubscribeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="text-yellow-500" size={28} />
              <h3 className="text-xl font-bold">Upgrade Required</h3>
            </div>
            <p className="text-gray-600 mb-4">
              To continue, you need the <strong>{nextLockedPackage.toUpperCase()}</strong> package.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowSubscribeModal(false)}
                className="flex-1 py-2 border border-gray-300 rounded-md"
              >
                Cancel
              </button>
              <button className="flex-1 py-2 bg-gradient-to-r from-teal-500 to-yellow-400 text-white rounded-md font-medium">
                Subscribe Now
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}