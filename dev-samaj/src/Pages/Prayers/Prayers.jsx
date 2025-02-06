import { useState } from "react";
// import { AArrowDown as Om } from "lucide-react";
import { PrayerCard } from "./PrayerCard";
import { prayers } from "../../mockdata/prayers";

const Prayers = () => {
  //   const [showEnglish, setShowEnglish] = useState(false);
  const [selectedDay, setSelectedDay] = useState(
    new Date().getDay() === 0 ? 6 : new Date().getDay() - 1
  );
  console.log(prayers);
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 mt-[80px]">
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* <div className="flex items-center gap-4">
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
        </div> */}
        {/* Day Selection */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {days.map((day, index) => (
            <button
              key={day}
              onClick={() => setSelectedDay(index)}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedDay === index
                  ? "bg-orange-600 text-white"
                  : "bg-white text-orange-600 hover:bg-orange-100"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Prayer Display */}
        <div className="grid gap-8">
          <PrayerCard prayer={prayers[selectedDay]} />
        </div>
      </main>
    </div>
  );
};

export default Prayers;
