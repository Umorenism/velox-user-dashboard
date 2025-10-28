import React from "react";

const DonutChart = ({ percentage = 60 }) => {
  const strokeWidth = 20;
  const radius = 60;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-56 h-56">
  <div className="relative flex items-center justify-center w-56 h-56">
 <div className="relative flex items-center justify-center w-60 h-60">
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 240 240"
    className="transform -rotate-90"
  >
    {/* Background ring - gold */}
    <circle
      cx="120"
      cy="120"
      r={90}
      fill="none"
      stroke="teal"
      strokeWidth="30"
    />

    {/* Thicker progress ring */}
    <circle
      cx="120"
      cy="120"
      r={95}
      fill="none"
      stroke="url(#gradient)"
      strokeWidth="50"  // increased thickness
      strokeDasharray={2 * Math.PI * 95}
      strokeDashoffset={(1 - percentage / 100) * 2 * Math.PI * 95}
      strokeLinecap="50%"
      className="transition-all  duration-1000 ease-out drop-shadow-md"
    />

    {/* Gradient definition */}
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="200%" y2="0%">
        
        <stop offset="100%" stopColor="#2563eb" /> 
      </linearGradient>
    </defs>
  </svg>
</div>

</div>


  {/* Center percentage text */}
  <div className="absolute right-2 flex items-center justify-end inset-0">
    <div className="text-[15px]  font-bold text-white drop-shadow-sm">
      {percentage}%
    </div>
  </div>
</div>

  );
};

export default DonutChart;
