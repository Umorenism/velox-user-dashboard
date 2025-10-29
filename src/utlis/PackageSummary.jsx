import React from "react";

import DonutProgress from "./PieChartIcons";
import DonutProgressTwo from "./DountChartTwo";

const PackageSummary = () => {
  return (
   
    <div className=" h-full rounded-2xl flex flex-col justify-center items-center p-6 bg-white dark:bg-neutral-800 shadow-sm border border-gray-100">
     <DonutProgressTwo percentage={90} />
    <hr />
     <div className="mt-4">
      <DonutProgress percentage={60} />
     </div>
    </div>
  );
};

export default PackageSummary;
