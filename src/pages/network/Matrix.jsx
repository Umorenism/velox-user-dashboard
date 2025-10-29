// src/pages/dashboard/network/Matrix.jsx
import React from "react";
import { Grid3x3, Lock, Users } from "lucide-react";

export default function Matrix() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 p-8 rounded-2xl text-center">
        <Grid3x3 size={48} className="mx-auto text-purple-600 dark:text-purple-400 mb-3" />
        <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200">3x10 Forced Matrix</h2>
        <p className="text-lg mt-2 text-purple-700 dark:text-purple-300">Spillover + Compression = Fast Growth</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <h3 className="font-bold text-lg mb-4 text-center">Matrix Structure</h3>
        <div className="grid grid-cols-3 gap-3 text-center text-sm">
          <div className="col-span-3 bg-purple-100 dark:bg-purple-800 p-3 rounded">You (Level 1)</div>
          <div className="bg-purple-50 dark:bg-purple-700 p-3 rounded">3</div>
          <div className="bg-purple-50 dark:bg-purple-700 p-3 rounded">3</div>
          <div className="bg-purple-50 dark:bg-purple-700 p-3 rounded">3</div>
          <div className="bg-purple-50 dark:bg-purple-700 p-3 rounded">9</div>
          <div className="bg-purple-50 dark:bg-purple-700 p-3 rounded">9</div>
          <div className="bg-purple-50 dark:bg-purple-700 p-3 rounded">9</div>
          <div className="col-span-3 text-xs text-gray-600 dark:text-gray-400 mt-2">
            Total: <strong>29,523</strong> positions
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-50 dark:bg-green-900 p-5 rounded-xl">
          <Lock className="text-green-600 mb-2" size={24} />
          <h4 className="font-bold">Forced Placement</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">New members fill from top-left</p>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900 p-5 rounded-xl">
          <Users className="text-blue-600 mb-2" size={24} />
          <h4 className="font-bold">Spillover</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">Upline helps fill your matrix</p>
        </div>
      </div>
    </div>
  );
}