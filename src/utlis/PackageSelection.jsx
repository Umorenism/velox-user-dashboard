// src/utlis/PackageSelection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from '../assets/veloximg1.jpeg';
import img2 from '../assets/veloximg2.jpeg';

export default function PackageSelection({ onClose }) {
  const navigate = useNavigate();

  const packages = [
    {
      id: "trading",
      title: "Academy + Trading Pack",
      subtitle: "Most Popular",
      details: ["Earn cash back", "Full Academy Access", "Affiliate Program","certifications"],
      buttonText: "Select Pack",
      buttonColor: "bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800",
      image: img1,
    },
    {
      id: "academy",
      title: "Academy Pack",
      subtitle: "Learn & Grow",
      details: ["Full Academy Access", "No cash back", "No affiliate program","Certification"],
      buttonText: "Select Pack",
      buttonColor: "bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800",
      image: img2,
    },
  ];

  const handleSelectPackage = () => {
  onClose?.();
  navigate("/dashboard/users"); // ✅ Correct absolute path
};


  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-gray-900 rounded-2xl shadow-2xl p-5 max-w-2xl w-full relative border border-gray-700">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-800 transition"
        >
          ×
        </button>

        <h1 className="text-xl md:text-2xl font-bold text-center text-white mb-6">
          Choose Your Package
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {packages.map((pack) => (
            <div
              key={pack.id}
              className="bg-white text-gray-900 rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 border border-gray-200"
            >
              <div className="h-32 overflow-hidden">
                <img src={pack.image} alt={pack.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-base font-bold text-gray-800">{pack.title}</h2>
                  {pack.subtitle && (
                    <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                      {pack.subtitle}
                    </span>
                  )}
                </div>

                <ul className="text-xs text-gray-600 space-y-1 mb-4 flex-grow">
                  {pack.details.map((line, i) => (
                    <li key={i} className="flex items-center gap-1">
                      Check {line}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleSelectPackage}
                  className={`${pack.buttonColor} text-white py-2 px-3 rounded-lg text-sm font-medium shadow-sm transition duration-200 w-full`}
                >
                  {pack.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center text-gray-500 text-xs">
          <p>VeloxCapital — Lagos, Nigeria</p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}