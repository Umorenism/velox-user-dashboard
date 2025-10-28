// import React from "react";
// import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
// import getDevice from "../../styles/devices";

// const renderActiveShape = (props) => {
//   const {
//     cx,
//     cy,
//     startAngle,
//     endAngle,
//     payload,
//     innerRadius,
//     outerRadius,
//     cornerRadius,
//     value,
//   } = props;

//   return (
//     <g>
//       {/* Value Text */}
//       <text
//         x={cx}
//         y={cy - 20}
//         dy={8}
//         fontSize="20px"
//         textAnchor="middle"
//         fill="#001233"
//         fontWeight="bold"
//       >
//         {value < 1000 ? value : `${(value / 1000).toFixed(1)}K`}
//       </text>

//       {/* Label Text */}
//       <text
//         x={cx}
//         y={cy + 10}
//         dy={8}
//         fontSize="12px"
//         textAnchor="middle"
//         fill="#5C677D"
//       >
//         {payload.name}
//       </text>

//       {/* Active Outer Ring */}
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={outerRadius + 20}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill="#12A4ED"
//         cornerRadius={payload.name === "Deposit" ? cornerRadius : 0}
//       />

//       {/* Inner Accent Ring */}
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius - 18}
//         outerRadius={innerRadius - 10}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill="#7674740f"
//       />
//     </g>
//   );
// };

// export default function PieChartIcons({ data }) {
//   const { isMobile } = getDevice();

//   return (
//     <div className="w-full flex justify-center items-center">
//       <ResponsiveContainer width={isMobile ? 280 : 400} height={isMobile ? 280 : 350}>
//         <PieChart>
//           <Pie
//             activeIndex={1}
//             activeShape={renderActiveShape}
//             data={data}
//             cx="50%"
//             cy="50%"
//             innerRadius={isMobile ? 60 : 80}
//             outerRadius={isMobile ? 100 : 120}
//             cornerRadius={isMobile ? 5 : 10}
//             fill="#7DC762"
//             dataKey="value"
//           />
//         </PieChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }




import React from "react";

export default function PieChartIcons({ percentage = 46 }) {
  const radius = 50;
  const strokeWidth = 12;
  const normalizedRadius = radius - strokeWidth * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (percentage / 100) * circumference;

  return (
    <div className="flex justify-center items-center p-6 bg-[#f8f9fa]">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="transform -rotate-90"
      >
        {/* Background Circle (Gray) */}
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        {/* Progress Circle (Teal → Gold Gradient) */}
        <defs>
          <linearGradient id="tealGold" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#14b8a6" />  {/* Teal */}
            <stop offset="100%" stopColor="#eab308" /> {/* Gold */}
          </linearGradient>
        </defs>

        <circle
          stroke="url(#tealGold)"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference + " " + circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="transition-all duration-700 ease-in-out drop-shadow-md"
        />

        {/* Inner White Arch */}
        <circle
          stroke="#ffffff"
          fill="transparent"
          strokeWidth={strokeWidth - 4}
          r={normalizedRadius - 4}
          cx={radius}
          cy={radius}
        />
      </svg>

      {/* Percentage Text positioned inside the gradient area */}
      <div
        className="absolute text-[20px] font-semibold"
        style={{
          color: "#14b8a6", // teal for now, will sit within gradient arc
          transform: `translate(${Math.cos((percentage / 100) * 2 * Math.PI - Math.PI / 2) * 35}px, 
                               ${Math.sin((percentage / 100) * 2 * Math.PI - Math.PI / 2) * 35}px)`
        }}
      >
        {percentage}%
      </div>
    </div>
  );
}

