import { useState } from "react";
import { Award } from "lucide-react";

function StudentResults() {
  const [selectedClass, setSelectedClass] = useState("X");
  const classes = ["IX", "X", "XI", "XII"];

  const [results, setResults] = useState([
    {
      subject: "Mathematics",
      marks: 85,
      grade: "A",
      remarks: "Excellent performance",
    },
    {
      subject: "Science",
      marks: 78,
      grade: "B+",
      remarks: "Good understanding",
    },
    { subject: "English", marks: 92, grade: "A+", remarks: "Outstanding" },
    { subject: "History", marks: 75, grade: "B", remarks: "Satisfactory" },
  ]);

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Academic Results
          </h2>
          <div className="w-48">
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              {classes.map((cls) => (
                <option key={cls} value={cls}>
                  Class {cls}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4"
            >
              <div className="flex items-center mb-2">
                <Award className="h-5 w-5 text-indigo-600 mr-2" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {result.subject}
                </h3>
              </div>
              <div className="mt-2">
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {result.marks}%
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Grade: {result.grade}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {result.remarks}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Overall Performance
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Average Score
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {(
                  results.reduce((acc, curr) => acc + curr.marks, 0) /
                  results.length
                ).toFixed(1)}
                %
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Highest Grade
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {results.reduce(
                  (max, curr) => (curr.grade < max ? max : curr.grade),
                  "F"
                )}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Total Subjects
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {results.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentResults;
