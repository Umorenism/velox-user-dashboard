// // import React from "react";

// // const UsersPackagesGrid = () => {
// //   const packages = [
// //     {
// //       title: "Opix Algo Lite",
// //       return: "Projected Monthly Return: 6% – 11%",
// //       description:
// //         "Fully automated algorithmic trading that uses advanced order flow strategy, money management and probabilistic analysis. Most effective in the price consolidation stages that occupy the bulk of the market time.",
// //     },
// //     {
// //       title: "Opix Algo Pro",
// //       return: "Projected Monthly Return: 8% – 13%",
// //       description:
// //         "Fine-tuned automated algorithmic trading that improves as it learns through its unique self-optimization. Strict rule-based approach to trading that fits most of the market time. Equity protection, order flow strategy, money management and probabilistic analysis.",
// //     },
// //     {
// //       title: "Opix Algo Expert",
// //       return: "Projected Monthly Return: 10% – 16%",
// //       description:
// //         "Next generation algorithmic trading providing an edge of trading opportunity with exceptional analysis and data finding to anticipate future price movements. Includes order flow system, transaction cost analysis, equity strategy, money management & probabilistic analysis.",
// //     },
// //   ];

// //   return (
// //     <div className=" rounded-xl p-2 dark:bg-neutral-800 dark:text-white  mx-auto">
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //         {packages.map((pkg, index) => (
// //           <div
// //             key={index}
// //             className="flex bg-white dark:bg-neutral-800 dark:text-white  flex-col justify-between border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
// //           >
// //             {/* Content */}
// //             <div className="p-5">
// //               <h3 className="text-lg dark:bg-neutral-800 dark:text-white  font-semibold text-gray-900 mb-3">
// //                 {pkg.title}
// //               </h3>

// //               <div className="inline-block bg-gray-100 text-gray-600 dark:bg-neutral-800 dark:text-white  text-sm px-3 py-1 rounded-full mb-4">
// //                 {pkg.return}
// //               </div>

// //               <hr className="my-3 border-gray-200" />

// //               <p className="text-sm dark:bg-neutral-800 dark:text-white  text-gray-600 leading-relaxed">
// //                 {pkg.description}
// //               </p>
// //             </div>

// //             {/* Subscribe Button */}
// //             <button className="bg-[#F8983B] text-white font-medium text-sm py-3 w-full hover:bg-[#e1862f] transition-colors">
// //               Subscribe
// //             </button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default UsersPackagesGrid;







// import React, { useEffect, useState } from "react";
// import { buyUserPackage, getUserPackages } from "../api/userPackageApi";
// import { Loader2, CheckCircle2, XCircle } from "lucide-react";

// // Simple debounce utility to prevent rapid clicks
// const debounce = (func, wait) => {
//   let timeout;
//   return (...args) => {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func(...args), wait);
//   };
// };

// const UsersPackagesGrid = () => {
//   const [packages, setPackages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [submitting, setSubmitting] = useState({}); // Per-package loading state
//   const [messages, setMessages] = useState({}); // Per-package messages

//   // Fetch packages on mount
//   useEffect(() => {
//     const fetchPackages = async () => {
//       try {
//         const data = await getUserPackages();
//         setPackages(Array.isArray(data) ? data : []);
//       } catch (error) {
//         console.error("Failed to load packages:", error);
//         setPackages([]);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPackages();
//   }, []);

//   // Handle Subscribe with debounce
//   const handleSubscribe = debounce(async (packageId) => {
//     setSubmitting((prev) => ({ ...prev, [packageId]: true }));
//     setMessages((prev) => ({ ...prev, [packageId]: null }));

//     try {
//       await buyUserPackage(packageId);
//       setMessages((prev) => ({
//         ...prev,
//         [packageId]: { type: "success", text: "Package subscribed successfully!" },
//       }));
//       // Update package state to reflect subscription
//       setPackages((prev) =>
//         prev.map((pkg) =>
//           pkg.id === packageId ? { ...pkg, isSubscribed: true } : pkg
//         )
//       );
//       // Clear message after 5 seconds
//       setTimeout(() => {
//         setMessages((prev) => ({ ...prev, [packageId]: null }));
//       }, 5000);
//     } catch (error) {
//       setMessages((prev) => ({
//         ...prev,
//         [packageId]: {
//           type: "error",
//           text: error.response?.data?.message || "Failed to subscribe to package.",
//         },
//       }));
//       // Clear error message after 5 seconds
//       setTimeout(() => {
//         setMessages((prev) => ({ ...prev, [packageId]: null }));
//       }, 5000);
//     } finally {
//       setSubmitting((prev) => ({ ...prev, [packageId]: false }));
//     }
//   }, 300);

//   // Global loading state for initial fetch
//   if (loading) {
//     return (
//       <div className="flex justify-center items-center p-6">
//         <Loader2 className="animate-spin text-[#F8983B]" size={26} />
//         <p className="ml-3 text-gray-600 dark:text-gray-300">Loading packages...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="rounded-xl p-2 dark:bg-neutral-800 dark:text-white mx-auto">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {packages.length === 0 ? (
//           <p className方className="text-center text-gray-500 dark:text-gray-300">
//             No packages available.
//           </p>
//         ) : (
//           packages.map((pkg) => {
//             const isLoading = submitting[pkg.id] || false;
//             const message = messages[pkg.id];
//             const isSubscribed = pkg.isSubscribed || false;

//             return (
//               <div
//                 key={pkg.id}
//                 className="flex bg-white dark:bg-neutral-800 flex-col justify-between border border-gray-200 dark:border-neutral-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
//               >
//                 {/* Package Content */}
//                 <div className="p-5">
//                   <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
//                     {pkg.name}
//                   </h3>
//                   <div className="inline-block bg-gray-100 dark:bg-neutral-700 text-gray-600 dark:text-gray-200 text-sm px-3 py-1 rounded-full mb-4">
//                     {pkg.isFree ? "Free Package" : `$${pkg.price}`}
//                   </div>
//                   <hr className="my-3 border-gray-200 dark:border-neutral-700" />
//                   <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
//                     Subscribe to access exclusive trading features and returns.
//                   </p>
//                   {/* Per-package message */}
//                   {message && (
//                     <div
//                       role="alert"
//                       className={`flex items-center gap-2 mt-4 px-3 py-2 rounded-md text-sm font-medium ${
//                         message.type === "success"
//                           ? "bg-green-100 text-green-700"
//                           : "bg-red-100 text-red-700"
//                       }`}
//                     >
//                       {message.type === "success" ? (
//                         <CheckCircle2 size={16} />
//                       ) : (
//                         <XCircle size={16} />
//                       )}
//                       {message.text}
//                     </div>
//                   )}
//                 </div>
//                 {/* Subscribe Button */}
//                 <button
//                   onClick={() => handleSubscribe(pkg.id)}
//                   disabled={isLoading || isSubscribed}
//                   aria-label={
//                     isLoading
//                       ? `Subscribing to ${pkg.name}`
//                       : isSubscribed
//                       ? `${pkg.name} is already subscribed`
//                       : `Subscribe to ${pkg.name}`
//                   }
//                   className={`flex justify-center items-center gap-2 bg-[#F8983B] text-white font-medium text-sm py-3 w-full hover:bg-[#e1862f] transition-colors ${
//                     isLoading || isSubscribed ? "opacity-70 cursor-not-allowed" : ""
//                   }`}
//                 >
//                   {isLoading ? (
//                     <>
//                       <Loader2 size={18} className="animate-spin" />
//                       Subscribing...
//                     </>
//                   ) : isSubscribed ? (
//                     "Subscribed"
//                   ) : (
//                     "Subscribe"
//                   )}
//                 </button>
//               </div>
//             );
//           })
//         )}
//       </div>
//     </div>
//   );
// };

// export default UsersPackagesGrid;






import React, { useEffect, useState } from "react";
import { buyUserPackage, getUserPackages } from "../api/userPackageApi";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";

const UsersPackagesGrid = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState({}); // per-package loading
  const [messages, setMessages] = useState({}); // per-package messages

  // Fetch user packages from API
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const data = await getUserPackages();
        setPackages(data || []);
      } catch (error) {
        console.error("Failed to load packages:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
  }, []);

  // Handle subscription (only affects the clicked package)
  const handleSubscribe = async (packageId) => {
    setSubmitting((prev) => ({ ...prev, [packageId]: true }));
    setMessages((prev) => ({ ...prev, [packageId]: null }));

    try {
      await buyUserPackage(packageId);
      setMessages((prev) => ({
        ...prev,
        [packageId]: {
          type: "success",
          text: "Package subscribed successfully!",
        },
      }));
    } catch (error) {
      setMessages((prev) => ({
        ...prev,
        [packageId]: {
          type: "error",
          text: error.response?.data?.message || "Failed to subscribe to package.",
        },
      }));
    } finally {
      setSubmitting((prev) => ({ ...prev, [packageId]: false }));
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-6">
        <Loader2 className="animate-spin text-[#F8983B]" size={26} />
        <p className="ml-3 text-gray-600 dark:text-gray-300">
          Loading packages...
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl p-2 dark:bg-neutral-800 dark:text-white mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {packages.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-300">
            No packages available.
          </p>
        ) : (
          packages.map((pkg) => {
            const isLoading = submitting[pkg._id];
            const message = messages[pkg._id];
            return (
              <div
                key={pkg._id}
                className="flex flex-col justify-between bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Image */}
                {pkg.image && (
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-auto object-cover"
                  />
                )}

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {pkg.name}
                    </h3>

                    <div className="inline-block bg-gray-100 dark:bg-neutral-700 text-gray-600 dark:text-gray-200 text-sm px-3 py-1 rounded-full mb-4">
                      {pkg.isFree ? "Free Package" : `$${pkg.price}`}
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {pkg.description || "No description provided."}
                    </p>

                    {/* Local success/error message */}
                    {message && (
                      <div
                        className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${
                          message.type === "success"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {message.type === "success" ? (
                          <CheckCircle2 size={16} />
                        ) : (
                          <XCircle size={16} />
                        )}
                        {message.text}
                      </div>
                    )}
                  </div>
                </div>

                {/* Subscribe Button */}
                <button
                  onClick={() => handleSubscribe(pkg._id)}
                  disabled={isLoading}
                  className={`flex justify-center items-center gap-2 bg-[#F8983B] text-white font-medium text-sm py-3 w-full hover:bg-[#e1862f] transition-colors ${
                    isLoading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading && <Loader2 size={18} className="animate-spin" />}
                  {isLoading ? "Subscribing..." : "Subscribe"}
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default UsersPackagesGrid;

