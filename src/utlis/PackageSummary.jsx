import React from "react";

import DonutProgress from "./PieChartIcons";

const PackageSummary = () => {
  return (
   
    <div className=" h-full rounded-2xl flex flex-col justify-center items-center p-6 shadow-md">
     <DonutProgress percentage={60} />
    </div>
  );
};

export default PackageSummary;
