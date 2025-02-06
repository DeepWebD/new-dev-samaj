/* eslint-disable react/prop-types */
import React, { useState } from "react";

export function PrayerCard({ prayer }) {
  const [showEnglish, setShowEnglish] = useState(false);
  console.log("prayer", prayer.title);
  console.log("showEnglish", showEnglish);
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="relative  h-[500px] overflow-hidden">
        <img
          src={prayer.image}
          alt={prayer.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
          {prayer.title}
        </h2>
      </div>
      <div className="p-10 relative">
        <div className="space-y-4">
          <p className="text-lg leading-relaxed font-medium text-gray-800">
            {showEnglish ? prayer.english : prayer.hindi}
          </p>
          <p className="text-sm text-gray-600">
            {showEnglish ? prayer.meaningEnglish : prayer.meaningHindi}
          </p>
        </div>
        <div className="absolute left-8 top-2 flex items-center gap-4">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={showEnglish}
              onChange={() => setShowEnglish(!showEnglish)}
            />
            <div className="w-11 h-6 bg-orange-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-800"></div>
            <span className="ms-3 text-sm font-medium">
              {showEnglish ? "English" : "हिंदी"}
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
