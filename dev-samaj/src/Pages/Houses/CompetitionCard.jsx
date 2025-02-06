/* eslint-disable react/prop-types */

import { Calendar, Users } from "lucide-react";

export const CompetitionCard = ({ competition }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{competition.title}</h3>
      <p className="text-gray-600 mb-4">{competition.description}</p>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-gray-500">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">
            {new Date(competition.date).toLocaleDateString()}
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <Users className="w-4 h-4" />
          <span className="text-sm">
            {competition.participants} participants
          </span>
        </div>
      </div>
    </div>
  );
};
