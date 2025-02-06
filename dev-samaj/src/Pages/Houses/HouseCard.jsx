/* eslint-disable react/prop-types */
import { Trophy } from "lucide-react";

export const HouseCard = ({ house }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105`}
    >
      <div className="relative h-48">
        <div className={`absolute inset-0 bg-${house.color}-600/20`}></div>
        <img
          src={house.image}
          alt={house.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{house.name}</h3>
        <p className="text-gray-600 mb-4">{house.ideology}</p>
        <div className="space-y-2">
          <h4 className="font-semibold flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            Achievements
          </h4>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {house.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
