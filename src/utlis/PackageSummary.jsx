// import React from "react";

// import DonutProgress from "./PieChartIcons";
// import DonutProgressTwo from "./DountChartTwo";

// const PackageSummary = () => {
//   return (
   
//     <div className=" h-full rounded-2xl flex flex-col justify-center items-center p-6 bg-white dark:bg-neutral-800 shadow-sm border border-gray-100">
//      <DonutProgressTwo percentage={90} />
//     <hr />
//      <div className="mt-5">
//       <h1>Package RI</h1>
//       <DonutProgress percentage={60} />
//      </div>
//     </div>
//   );
// };

// export default PackageSummary;







// import React, { useEffect, useState } from "react";
// import DonutProgress from "./PieChartIcons"; // Donut chart
// import { apiClient } from "../api/apiClient"; // API client

// const PackageSummary = () => {
//   const [packageROI, setPackageROI] = useState({
//     name: "$0_Package",
//     price: 0,
//     cap: 0,
//     earned: 0,
//     percent: 0,
//     status: "active",
//     daysActive: 0,
//   });

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const response = await apiClient.get("/api/users/profile");
//         const data = response.data?.packageROI;

//         if (data) {
//           setPackageROI({
//             name: data.name,
//             price: data.price,
//             cap: data.cap,
//             earned: data.earned,
//             percent: isNaN(parseFloat(data.percent))
//               ? 0
//               : parseFloat(data.percent),
//             status: data.status,
//             daysActive: data.daysActive,
//           });
//         }
//       } catch (error) {
//         console.error("❌ Error fetching package ROI:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);

//   return (
//     <div className="h-full w-full max-w-md mx-auto bg-white dark:bg-neutral-900 rounded-2xl shadow-lg border border-teal-200 dark:border-teal-700 p-6 flex flex-col items-center">
//       {loading ? (
//         <div className="text-gray-500 dark:text-gray-300">Loading...</div>
//       ) : (
//         <>

//         <div className="text-center mb-5">
//             <h1 className="text-2xl font-semibold text-teal-700 dark:text-teal-300">
//               Referral Chart
//             </h1>
//             <div>
//               hhhh
//             </div>
            
//           </div>
//           <hr className="h-[0.1px] w-full bg-gray-500"/>
//           {/* Header */}
//           <div className="text-center mt-4 mb-5">
//             <h1 className="text-2xl font-semibold text-teal-700 dark:text-teal-300">
//               {packageROI.name}
//             </h1>
//             <p className="mt-1 text-sm">
//               Status:{" "}
//               <span
//                 className={`font-semibold px-2 py-1 rounded-md ${
//                   packageROI.status === "active"
//                     ? "bg-teal-100 text-teal-700 dark:bg-teal-800 dark:text-teal-200"
//                     : "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200"
//                 }`}
//               >
//                 {packageROI.status}
//               </span>
//             </p>
//           </div>

//           {/* Donut Chart */}
//           <div className="w-full flex justify-center mb-6">
//             <DonutProgress percentage={packageROI.percent} />
//           </div>

//           {/* Info Card */}
//           <div className="w-full bg-gradient-to-br from-teal-50 to-amber-50 dark:from-neutral-800 dark:to-neutral-700 rounded-xl p-4 text-center shadow-inner">
//             <div className="grid grid-cols-2 gap-y-3 text-sm font-medium text-gray-700 dark:text-gray-300">
//               <div className="text-start text-teal-700 dark:text-teal-300">
//                 Price:
//               </div>
//               <div className="text-end text-amber-600 dark:text-amber-400">
//                 ${packageROI.price}
//               </div>

//               <div className="text-start text-teal-700 dark:text-teal-300">
//                 Cap:
//               </div>
//               <div className="text-end text-amber-600 dark:text-amber-400">
//                 ${packageROI.cap}
//               </div>

//               <div className="text-start text-teal-700 dark:text-teal-300">
//                 Earned:
//               </div>
//               <div className="text-end text-amber-600 dark:text-amber-400">
//                 ${packageROI.earned}
//               </div>

//               <div className="text-start text-teal-700 dark:text-teal-300">
//                 Days Active:
//               </div>
//               <div className="text-end text-amber-600 dark:text-amber-400">
//                 {packageROI.daysActive}
//               </div>
//             </div>
//           </div>

//           {/* Footer Label */}
//           <div className="mt-5 text-sm font-semibold text-teal-600 dark:text-teal-400 tracking-wide">
//             ROI Progress
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default PackageSummary;







import React, { useEffect, useState } from "react";
import DonutProgress from "./PieChartIcons"; // Donut chart
import { apiClient } from "../api/apiClient";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#0d9488", "#14b8a6", "#2dd4bf", "#99f6e4",
  "#fde68a", "#fbbf24", "#f59e0b", "#d97706",
  "#b45309", "#a16207"
];

const PackageSummary = () => {
  const [packageROI, setPackageROI] = useState({
    name: "$0_Package",
    price: 0,
    cap: 0,
    earned: 0,
    percent: 0,
    status: "active",
    daysActive: 0,
  });

  const [referralData, setReferralData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await apiClient.get("/api/users/profile");
        const data = response.data;

        if (data) {
          // ROI data
          const roi = data.packageROI;
          setPackageROI({
            name: roi.name,
            price: roi.price,
            cap: roi.cap,
            earned: roi.earned,
            percent: isNaN(parseFloat(roi.percent))
              ? 0
              : parseFloat(roi.percent),
            status: roi.status,
            daysActive: roi.daysActive,
          });

          // Referral chart data
          const unilevel = data.unilevelByLevel || {};
          const chartData = Object.entries(unilevel).map(([level, info]) => ({
            name: level,
            members: info.members,
          }));

          setReferralData(chartData);
        }
      } catch (error) {
        console.error("❌ Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const hasReferralData = referralData.some((item) => item.members > 0);

  return (
    <div className="h-full w-full max-w-md mx-auto bg-white dark:bg-neutral-900 rounded-2xl shadow-lg border border-teal-200 dark:border-teal-700 p-6 flex flex-col items-center">
      {loading ? (
        <div className="text-gray-500 dark:text-gray-300">Loading...</div>
      ) : (
        <>
          {/* Referral Chart Section */}
          <div className="text-center mb-6 w-full">
            <h1 className="text-2xl font-semibold text-teal-700 dark:text-teal-300">
              Referral Chart
            </h1>

            <div className="w-full h-64 mt-3 flex justify-center items-center">
              {hasReferralData ? (
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={referralData}
                      dataKey="members"
                      nameKey="name"
                      outerRadius={90}
                      label
                    >
                      {referralData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#fff",
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                      }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-teal-50 to-amber-50 dark:from-neutral-800 dark:to-neutral-700 border border-teal-200 dark:border-teal-700">
                  <p className="text-teal-700 dark:text-teal-300 font-medium text-sm">
                    No referral data available yet.
                  </p>
                  <p className="text-amber-600 dark:text-amber-400 text-xs mt-1">
                    Start referring to see your network grow!
                  </p>
                </div>
              )}
            </div>
          </div>

          <hr className="h-[0.1px] w-full bg-gray-500 mb-5" />

          {/* ROI Summary */}
          <div className="text-center mb-5">
            <h1 className="text-2xl font-semibold text-teal-700 dark:text-teal-300">
              {packageROI.name}
            </h1>
            <p className="mt-1 text-sm">
              Status:{" "}
              <span
                className={`font-semibold px-2 py-1 rounded-md ${
                  packageROI.status === "active"
                    ? "bg-teal-100 text-teal-700 dark:bg-teal-800 dark:text-teal-200"
                    : "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200"
                }`}
              >
                {packageROI.status}
              </span>
            </p>
          </div>

          <div className="w-full flex justify-center mb-6">
            <DonutProgress percentage={packageROI.percent} />
          </div>

          <div className="w-full bg-gradient-to-br from-teal-50 to-amber-50 dark:from-neutral-800 dark:to-neutral-700 rounded-xl p-4 text-center shadow-inner">
            <div className="grid grid-cols-2 gap-y-3 text-sm font-medium text-gray-700 dark:text-gray-300">
              <div className="text-start text-teal-700 dark:text-teal-300">
                Price:
              </div>
              <div className="text-end text-amber-600 dark:text-amber-400">
                ${packageROI.price}
              </div>

              <div className="text-start text-teal-700 dark:text-teal-300">
                Cap:
              </div>
              <div className="text-end text-amber-600 dark:text-amber-400">
                ${packageROI.cap}
              </div>

              <div className="text-start text-teal-700 dark:text-teal-300">
                Earned:
              </div>
              <div className="text-end text-amber-600 dark:text-amber-400">
                ${packageROI.earned}
              </div>

              <div className="text-start text-teal-700 dark:text-teal-300">
                Days Active:
              </div>
              <div className="text-end text-amber-600 dark:text-amber-400">
                {packageROI.daysActive}
              </div>
            </div>
          </div>

          <div className="mt-5 text-sm font-semibold text-teal-600 dark:text-teal-400 tracking-wide">
            ROI Progress
          </div>
        </>
      )}
    </div>
  );
};

export default PackageSummary;
