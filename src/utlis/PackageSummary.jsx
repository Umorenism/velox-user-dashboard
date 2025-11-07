






import React, { useEffect, useState } from "react";
import DonutProgress from "./PieChartIcons"; // Donut chart
import { apiClient } from "../api/apiClient";

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

  const [bullChart, setBullChart] = useState(null);
  const [bearChart, setBearChart] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await apiClient.get("/api/users/profile");
        const data = response.data;
        console.log("✅ User Profile Data:", data);

        if (data) {
          // Extract ROI data
          const roi = data.packageROI || {};
          setPackageROI({
            name: roi.name || "$0_Package",
            price: roi.price || 0,
            cap: roi.cap || 0,
            earned: roi.earned || 0,
            percent: isNaN(parseFloat(roi.percent)) ? 0 : parseFloat(roi.percent),
            status: roi.status || "inactive",
            daysActive: roi.daysActive || 0,
          });

          // Set Bull & Bear chart data
          if (data.bullChart) setBullChart(data.bullChart);
          if (data.bearChart) setBearChart(data.bearChart);
        }
      } catch (error) {
        console.error("❌ Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="h-auto w-full max-w-md mx-auto bg-white dark:bg-neutral-900 rounded-2xl shadow-lg border border-teal-200 dark:border-teal-700 p-6 flex flex-col items-center">
      {loading ? (
        <div className="text-gray-500 dark:text-gray-300">Loading...</div>
      ) : (
        <>
          {/* ─── BULL CHART ───────────────────────────── */}
          {bullChart && (
            <div className="w-full mb-10">
              <div className="text-center mb-5">
                <h1 className="text-2xl font-semibold text-teal-700 dark:text-teal-300">
                  Bull Chart
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
                <DonutProgress
                  percentage={packageROI.percent || 0}
                  label={bullChart.labels?.[0] || "Bull Wallet"}
                />
              </div>

              <div className="w-full bg-gradient-to-br from-teal-50 to-amber-50 dark:from-neutral-800 dark:to-neutral-700 rounded-xl p-4 text-center shadow-inner">
                <div className="grid grid-cols-2 gap-y-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                  <div className="text-start text-teal-700 dark:text-teal-300">
                    Locked Trading Profit:
                  </div>
                  <div className="text-end text-amber-600 dark:text-amber-400">
                    ${bullChart.datasets?.[0]?.data?.[0] ?? 0}
                  </div>
                </div>
              </div>
            </div>
          )}

          <hr className="h-[0.1px] w-full bg-gray-500 mb-5" />

          {/* ─── BEAR CHART ───────────────────────────── */}
          {bearChart && (
            <div className="w-full mb-10">
              <div className="text-center mb-5">
                <h1 className="text-2xl font-semibold text-red-700 dark:text-red-300">
                  Bear Chart
                </h1>
                <p className="mt-1 text-sm">
                  Locked Profit from Bear Wallet
                </p>
              </div>

              <div className="w-full flex justify-center mb-6">
                <DonutProgress
                  percentage={bearChart.datasets?.[0]?.data?.[0] || 0}
                  label={bearChart.labels?.[0] || "Bear Wallet"}
                />
              </div>

              <div className="w-full bg-gradient-to-br from-red-50 to-amber-50 dark:from-neutral-800 dark:to-neutral-700 rounded-xl p-4 text-center shadow-inner">
                <div className="grid grid-cols-2 gap-y-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                  <div className="text-start text-red-700 dark:text-red-300">
                    Locked Trading Profit:
                  </div>
                  <div className="text-end text-amber-600 dark:text-amber-400">
                    ${bearChart.datasets?.[0]?.data?.[0] ?? 0}
                  </div>
                </div>
              </div>
            </div>
          )}

          <hr className="h-[0.1px] w-full bg-gray-500 mb-5" />

          {/* ─── ROI SUMMARY ───────────────────────────── */}
          {/* <div className="text-center mb-5">
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
          </div> */}
        </>
      )}
    </div>
  );
};

export default PackageSummary;
