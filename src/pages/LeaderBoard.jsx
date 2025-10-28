// // import React, { useState, useEffect } from "react";

// // const Leaderboard = () => {
// //   const [leaders, setLeaders] = useState([]);

// //   // Simulated fetch
// //   useEffect(() => {
// //     const mockData = [
// //       { rank: 1, username: "******888", country: "South Korea", flag: "🇰🇷", sales: 1525000, id: "****322" },
// //       { rank: 2, username: "******s30", country: "Philippines", flag: "🇵🇭", sales: 1320000, id: "****050" },
// //       { rank: 3, username: "******e02", country: "South Korea", flag: "🇰🇷", sales: 1313000, id: "****501" },
// //       { rank: 4, username: "******3cs", country: "South Korea", flag: "🇰🇷", sales: 900000, id: "****873" },
// //       { rank: 5, username: "******um1", country: "Indonesia", flag: "🇮🇩", sales: 880000, id: "****834" },
// //       { rank: 6, username: "******882", country: "China", flag: "🇨🇳", sales: 852000, id: "****487" },
// //       { rank: 7, username: "******059", country: "Taiwan", flag: "🇹🇼", sales: 770000, id: "****418" },
// //       { rank: 8, username: "******391", country: "Taiwan", flag: "🇹🇼", sales: 580000, id: "****166" },
// //       { rank: 9, username: "******ng8", country: "China", flag: "🇨🇳", sales: 565000, id: "****359" },
// //       { rank: 10, username: "You", country: "Nigeria", flag: "🇳🇬", sales: 0, id: "***04531" },
// //     ];
// //     setLeaders(mockData);
// //   }, []);

// //   const getRankStyle = (rank) => {
// //     switch (rank) {
// //       case 1:
// //         return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-yellow-400/50";
// //       case 2:
// //         return "bg-gradient-to-r from-gray-300 to-gray-400 text-black shadow-gray-400/50";
// //       case 3:
// //         return "bg-gradient-to-r from-orange-400 to-orange-600 text-black shadow-orange-500/50";
// //       default:
// //         return "bg-gradient-to-r from-[#3a2a1d] to-[#2b1b12]";
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-[#0a0e2a] text-white flex flex-col items-center p-6 font-[Poppins]">
// //       {/* Header */}
// //       <div className="relative mb-12 text-center">
// //         <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 blur-xl opacity-30 rounded-full"></div>
// //         <h1 className="relative z-10 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600 uppercase tracking-wider">
// //           Top 30 IB Porsche Challenge
// //         </h1>
// //       </div>

// //       {/* Table */}
// //       <div className="w-full max-w-6xl rounded-2xl bg-gradient-to-b from-[#3e2615] via-[#2a1a0e] to-[#1a120b] p-6 shadow-2xl border border-yellow-700/30">
// //         <div className="grid grid-cols-5 text-sm font-semibold uppercase text-yellow-400 border-b border-yellow-700/40 pb-2">
// //           <span>Ranking</span>
// //           <span>Username</span>
// //           <span>Country</span>
// //           <span>Personal Sales (USD)</span>
// //           <span>User ID</span>
// //         </div>

// //         <div className="mt-3 space-y-2">
// //           {leaders.map((user) => (
// //             <div
// //               key={user.rank}
// //               className={`grid grid-cols-5 items-center text-sm rounded-xl px-4 py-3 shadow-md transition-transform hover:scale-[1.01] ${getRankStyle(
// //                 user.rank
// //               )}`}
// //             >
// //               <span className="font-bold">{user.rank}</span>
// //               <span>{user.username}</span>
// //               <span>
// //                 {user.flag} {user.country}
// //               </span>
// //               <span>${user.sales.toLocaleString()}</span>
// //               <span>{user.id}</span>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Footer Section */}
// //       <div className="mt-12 text-center text-sm text-yellow-500 opacity-80">
// //         © {new Date().getFullYear()} Velox — Leaderboard Challenge
// //       </div>
// //     </div>
// //   );
// // };

// // export default Leaderboard;










// // import React from "react";
// // import { Crown, Gift, Medal } from "lucide-react";

// // const leaders = [
// //   { rank: 1, username: "******888", country: "South Korea", sales: "$1,525,000", userId: "****322" },
// //   { rank: 2, username: "******s30", country: "Philippines", sales: "$1,320,000", userId: "****050" },
// //   { rank: 3, username: "******e02", country: "South Korea", sales: "$1,313,000", userId: "****501" },
// //   { rank: 4, username: "******3cs", country: "South Korea", sales: "$900,000", userId: "****873" },
// //   { rank: 5, username: "******um1", country: "Indonesia", sales: "$880,000", userId: "****834" },
// //   { rank: 6, username: "******882", country: "China", sales: "$852,000", userId: "****487" },
// //   { rank: 7, username: "******059", country: "Taiwan", sales: "$770,000", userId: "****418" },
// // ];

// // const Leaderboard = () => {
// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-[#08102a] to-[#1a1a1a] flex flex-col items-center justify-center px-4 py-10 relative overflow-hidden">
// //       {/* Confetti ribbons */}
// //       <div className="absolute top-10 left-10 w-12 h-12 bg-yellow-400 rounded-full blur-2xl opacity-30"></div>
// //       <div className="absolute top-20 right-20 w-16 h-16 bg-yellow-300 rounded-full blur-2xl opacity-40"></div>
// //       <div className="absolute bottom-16 left-1/4 w-10 h-10 bg-yellow-500 rounded-full blur-2xl opacity-20"></div>

// //       {/* Crown and title */}
// //       <div className="relative flex flex-col items-center mb-6">
// //         <div className="absolute -top-10">
// //           <Crown className="text-yellow-400 w-16 h-16 drop-shadow-[0_0_20px_rgba(255,215,0,0.6)]" />
// //         </div>
// //         <div className="bg-gradient-to-r from-[#c8a463] via-[#f7e3b0] to-[#c8a463] px-10 py-3 rounded-lg shadow-lg border border-yellow-300 text-center">
// //           <h1 className="text-lg md:text-2xl font-bold tracking-wider text-[#1b1b1b] uppercase">
// //             Top 30 IB Lamborghini Challenge
// //           </h1>
// //         </div>
// //       </div>

// //       {/* Leaderboard Card */}
// //       <div className="bg-gradient-to-b from-[#3c2b1b] to-[#1a0f07] w-full max-w-5xl rounded-2xl shadow-xl p-6 border border-yellow-700">
// //         <div className="flex justify-between items-center mb-3">
// //           <h2 className="text-lg tracking-widest text-[#d7c7a2] uppercase">Leaderboard</h2>
// //           <Gift className="text-yellow-400 w-6 h-6" />
// //         </div>

// //         {/* Table Header */}
// //         <div className="grid grid-cols-5 text-sm font-semibold uppercase text-[#c1a875] border-b border-yellow-800 pb-2">
// //           <span>Ranking</span>
// //           <span>Username</span>
// //           <span>Country</span>
// //           <span>Personal Sales (USD)</span>
// //           <span>User ID</span>
// //         </div>

// //         {/* Table Rows */}
// //         <div className="mt-2 space-y-2">
// //           {leaders.map((leader) => (
// //             <div
// //               key={leader.rank}
// //               className={`grid grid-cols-5 items-center py-3 px-3 rounded-lg transition-all ${
// //                 leader.rank === 1
// //                   ? "bg-gradient-to-r from-yellow-600/30 to-yellow-800/10 border border-yellow-500"
// //                   : leader.rank === 2
// //                   ? "bg-gradient-to-r from-gray-400/30 to-gray-700/10 border border-gray-400"
// //                   : leader.rank === 3
// //                   ? "bg-gradient-to-r from-[#b87333]/40 to-[#603311]/20 border border-[#b87333]"
// //                   : "bg-[#2a1e13]/50 border border-[#3e2a1b]"
// //               }`}
// //             >
// //               <div className="flex items-center gap-2 font-bold text-[#f7e7b7]">
// //                 {leader.rank <= 3 && <Medal className="text-yellow-400 w-5 h-5" />}
// //                 <span>{leader.rank}</span>
// //               </div>
// //               <span className="text-white">{leader.username}</span>
// //               <span className="text-[#f5deb3]">{leader.country}</span>
// //               <span className="text-[#fcd977]">{leader.sales}</span>
// //               <span className="text-[#c6b37d]">{leader.userId}</span>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Leaderboard;



// import React from "react";
// import { Crown, Gift, Medal } from "lucide-react";


// const leaders = [
//   { rank: 1, username: "******888", country: "South Korea", sales: "$1,525,000", userId: "****322" },
//   { rank: 2, username: "******s30", country: "Philippines", sales: "$1,320,000", userId: "****050" },
//   { rank: 3, username: "******e02", country: "South Korea", sales: "$1,313,000", userId: "****501" },
//   { rank: 4, username: "******3cs", country: "South Korea", sales: "$900,000", userId: "****873" },
//   { rank: 5, username: "******um1", country: "Indonesia", sales: "$880,000", userId: "****834" },
//   { rank: 6, username: "******882", country: "China", sales: "$852,000", userId: "****487" },
//   { rank: 7, username: "******059", country: "Taiwan", sales: "$770,000", userId: "****418" },
// ];

// const Leaderboard = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 relative overflow-hidden bg-cover bg-center bg-no-repeat"
//       >
//       {/* Background Confetti */}
//       <div className="absolute top-10 left-10 w-12 h-12 bg-yellow-400 rounded-full blur-2xl opacity-30"></div>
//       <div className="absolute top-20 right-20 w-16 h-16 bg-yellow-300 rounded-full blur-2xl opacity-40"></div>
//       <div className="absolute bottom-16 left-1/4 w-10 h-10 bg-yellow-500 rounded-full blur-2xl opacity-20"></div>

//       {/* Main Leaderboard Card */}
//       <div className="relative bg-gradient-to-b from-[#3c2b1b] to-[#1a0f07] w-full max-w-5xl rounded-2xl shadow-2xl border border-yellow-700 p-8 mt-10">
//         {/* Title Banner */}
//         <div className="absolute -top-14 left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
//           {/* Left Gift */}
//           <div className="absolute -left-12 -top-2 rotate-[-20deg]">
//             <Gift className="text-yellow-400 w-10 h-10 drop-shadow-[0_0_10px_rgba(255,215,0,0.6)]" />
//           </div>

//           {/* Right Gift */}
//           <div className="absolute -right-12 -top-2 rotate-[20deg]">
//             <Gift className="text-yellow-400 w-10 h-10 drop-shadow-[0_0_10px_rgba(255,215,0,0.6)]" />
//           </div>

//           {/* Crown (top left corner) */}
//           <div className="absolute -top-12 -left-16 rotate-[-10deg]">
//             <Crown className="text-yellow-400 w-16 h-16 drop-shadow-[0_0_20px_rgba(255,215,0,0.7)]" />
//           </div>

//           {/* Zigzag Banner */}
//           <div className="relative bg-gradient-to-r from-[#c9a563] via-[#f7e3b0] to-[#c9a563] shadow-[0_4px_20px_rgba(255,215,0,0.4)] border border-yellow-300 px-10 py-3 rounded-md clip-banner">
//             <h1 className="text-lg md:text-2xl font-bold tracking-wider text-[#1b1b1b] uppercase">
//               Top 30 IB Lamborghini Challenge
//             </h1>
//           </div>
//         </div>

//         {/* Leaderboard Header */}
//         <div className="flex justify-between items-center mb-4 mt-10">
//           <h2 className="text-lg tracking-widest text-[#d7c7a2] uppercase">Leaderboard</h2>
//           <Gift className="text-yellow-400 w-6 h-6" />
//         </div>

//         {/* Table Header */}
//         <div className="grid grid-cols-5 text-sm font-semibold uppercase text-[#c1a875] border-b border-yellow-800 pb-2">
//           <span>Ranking</span>
//           <span>Username</span>
//           <span>Country</span>
//           <span>Personal Sales (USD)</span>
//           <span>User ID</span>
//         </div>

//         {/* Table Rows */}
//         <div className="mt-2 space-y-2">
//           {leaders.map((leader) => (
//             <div
//               key={leader.rank}
//               className={`grid grid-cols-5 items-center py-3 px-3 rounded-lg transition-all ${
//                 leader.rank === 1
//                   ? "bg-gradient-to-r from-yellow-600/30 to-yellow-800/10 border border-yellow-500"
//                   : leader.rank === 2
//                   ? "bg-gradient-to-r from-gray-400/30 to-gray-700/10 border border-gray-400"
//                   : leader.rank === 3
//                   ? "bg-gradient-to-r from-[#b87333]/40 to-[#603311]/20 border border-[#b87333]"
//                   : "bg-[#2a1e13]/50 border border-[#3e2a1b]"
//               }`}
//             >
//               <div className="flex items-center gap-2 font-bold text-[#f7e7b7]">
//                 {leader.rank <= 3 && <Medal className="text-yellow-400 w-5 h-5" />}
//                 <span>{leader.rank}</span>
//               </div>
//               <span className="text-white">{leader.username}</span>
//               <span className="text-[#f5deb3]">{leader.country}</span>
//               <span className="text-[#fcd977]">{leader.sales}</span>
//               <span className="text-[#c6b37d]">{leader.userId}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Leaderboard;





// import React from 'react'

// export default function LeaderBoard() {
//   return (
//     <div>
      
//     </div>
//   )
// }






import React from "react";

export default function LeaderBoard() {
  return (
    <div className="main-content container-fluid px-1 px-lg-5">
      <hr className="horizontal-line mt-0 mb-4" />

      {/* Page Title */}
      <div className="page-title mb-3">
        <h4 className="d-flex align-items-center text_gold text-capitalize">
          <img
            src="https://portal.internationalfinanceasia.com/assets/ifa_icon/leaderboard/crown.png"
            alt="Crown"
          />{" "}
          Leaderboard
        </h4>
      </div>

      {/* Section */}
      <section className="section">
        <div className="card card-event card-form">
          <div className="px-lg-5">
            <img
              className="flying_deco"
              src="https://portal.internationalfinanceasia.com/assets/ifa_icon/leaderboard/porsche/All_1.png"
              alt="deco"
            />

            {/* Header gifts */}
            <div className="row align-items-center justify-content-between">
              <div className="col-12 col-lg-5">
                <img
                  className="header_gift"
                  src="https://portal.internationalfinanceasia.com/assets/ifa_icon/leaderboard/porsche/gift.png"
                  alt="gift"
                />
              </div>
              <div className="col-lg-5 d-none d-lg-block text-end">
                <img
                  className="header_double_gift"
                  src="https://portal.internationalfinanceasia.com/assets/ifa_icon/leaderboard/porsche/double_gift.png"
                  alt="double gift"
                />
              </div>
            </div>

            {/* Header title */}
            <div className="leaderboard_header">
              <p className="leaderboard_header_title">
                Top 30 IB Porsche Challenge
              </p>
            </div>

            {/* Leaderboard */}
            <div className="leaderboard">
              <div className="leaderboard_background">
                <div className="leaderboard_body">
                  <p className="leaderboard_body_title text_gold">Leaderboard</p>

                  {/* Decorative Images */}
                  {["pearl_1", "pearl_2", "pearl_3", "pearl_4"].map((cls, i) => (
                    <img
                      key={i}
                      className={cls}
                      src="https://portal.internationalfinanceasia.com/assets/ifa_icon/leaderboard/porsche/pearl.png"
                      alt="pearl"
                    />
                  ))}
                  <img
                    className="flying"
                    src="https://portal.internationalfinanceasia.com/assets/ifa_icon/leaderboard/porsche/flying.png"
                    alt="flying"
                  />
                  <img
                    className="flying_2"
                    src="https://portal.internationalfinanceasia.com/assets/ifa_icon/leaderboard/porsche/flying.png"
                    alt="flying"
                  />
                  {["gift_1", "gift_2", "gift_3", "gift_4"].map((cls, i) => (
                    <img
                      key={i}
                      className={cls}
                      src="https://portal.internationalfinanceasia.com/assets/ifa_icon/leaderboard/porsche/gift.png"
                      alt="gift"
                    />
                  ))}

                  {/* Table */}
                  <div className="leaderboard_table_div table-responsive">
                    <table className="leaderboard_table">
                      <thead>
                        <tr>
                          <td className="text_gold">Ranking</td>
                          <td className="text_gold">Username</td>
                          <td className="text_gold">Country</td>
                          <td className="text_gold">Personal Sales (USD)</td>
                          <td className="text_gold">User ID</td>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Example Row - 1st */}
                        <tr className="leaderboard_first">
                          <td>
                            <img
                              src="https://portal.internationalfinanceasia.com/assets/ifa_icon/leaderboard/porsche/1st.png"
                              className="leaderboard_upper_badge"
                              alt="1st"
                            />
                          </td>
                          <td>*****888</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://portal.internationalfinanceasia.com/assets/images/flag/1x1/kr.svg"
                                className="leaderboard_flag"
                                alt="flag"
                              />
                              <span className="d-none d-md-inline-block">
                                South Korea
                              </span>
                            </div>
                          </td>
                          <td>$1,525,000</td>
                          <td>****322</td>
                        </tr>

                        {/* Example Row - 2nd */}
                        <tr className="leaderboard_second">
                          <td>
                            <img
                              src="https://portal.internationalfinanceasia.com/assets/ifa_icon/leaderboard/porsche/2nd.png"
                              className="leaderboard_upper_badge"
                              alt="2nd"
                            />
                          </td>
                          <td>*******s30</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://portal.internationalfinanceasia.com/assets/images/flag/1x1/ph.svg"
                                className="leaderboard_flag"
                                alt="flag"
                              />
                              <span className="d-none d-md-inline-block">
                                Philippines
                              </span>
                            </div>
                          </td>
                          <td>$1,320,000</td>
                          <td>****050</td>
                        </tr>

                        {/* Example Row - You */}
                        <tr className="leaderboard_user">
                          <td>
                            <p className="mb-0 ms-4">-</p>
                          </td>
                          <td>You</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://portal.internationalfinanceasia.com/assets/images/flag/1x1/ng.svg"
                                className="leaderboard_flag"
                                alt="flag"
                              />
                              <span className="d-none d-md-inline-block">
                                Nigeria
                              </span>
                            </div>
                          </td>
                          <td>$0</td>
                          <td>
                            ***04531
                            <img
                              className="you_star d-none d-lg-block"
                              src="https://portal.internationalfinanceasia.com/assets/ifa_icon/leaderboard/porsche/star_1.png"
                              alt="star"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
