import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from '../assets/veloximg1.jpeg'
import img2 from '../assets/veloximg2.jpeg'
export default function PackageSelection({ onClose }) {
  const navigate = useNavigate();

  const packages = [
    {
      title: "Academy + Trading Pack (Most Popular)",
      details: [
        "Earn Trade Rewards",
        "Access to the Academy",
        "Includes Affiliate Program",
      ],
      buttonText: "Select Academy + Trading Pack",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      image: img1,
      route: "/dashboard/trading-pack",
    },
    {
      title: "Academy Pack",
      details: ["Access to the Academy", "Exclusive Learning Materials"],
      buttonText: "Select Academy Pack",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      image: img2,
      route: "/dashboard/academy-pack",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      {/* Container Card */}
      <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-6xl w-full relative border border-gray-700">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
        >
          ✕
        </button>

        <h1 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
          Choose Your VeloxCapital Package
        </h1>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packages.map((pack, index) => (
            <div
              key={index}
              className="bg-[#ffff] text-white rounded-xl shadow-lg overflow-hidden flex flex-col justify-between hover:shadow-xl border border-gray-800 transition-transform transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-start justify-center p-6 space-y-4 w-full">
                <img
                  src={pack.image}
                  alt={pack.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h2 className="text-xl font-semibold text-start">
                  {pack.title}
                </h2>
                <div className="text-gray-400 text-sm space-y-1 text-start">
                  {pack.details.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>

              {/* Button */}
              <div className="p-6 border-t border-gray-700">
                <button
                  onClick={() => navigate(pack.route)}
                  className={`${pack.buttonColor} text-white py-2 px-4 rounded-lg w-full font-medium transition duration-200`}
                >
                  {pack.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Section with Address */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>
            VeloxCapital Headquarters — 45B Admiralty Way, Lekki Phase 1, Lagos,
            Nigeria
          </p>
          <p>© {new Date().getFullYear()} VeloxCapital. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
