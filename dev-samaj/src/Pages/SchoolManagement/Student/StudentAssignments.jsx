import { useState } from "react";
import { FileText, Upload } from "lucide-react";

function StudentAssignments() {
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: "Mathematics Assignment 1",
      subject: "Mathematics",
      dueDate: "2024-03-25",
      status: "pending",
    },
    {
      id: 2,
      title: "Science Project",
      subject: "Science",
      dueDate: "2024-03-28",
      status: "submitted",
    },
  ]);

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        My Assignments
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {assignments.map((assignment) => (
          <div key={assignment.id} className="border rounded-lg p-4">
            <div className="flex items-start">
              <FileText className="h-6 w-6 text-indigo-600 mr-3" />
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {assignment.title}
                </h3>
                <p className="text-sm text-gray-500">{assignment.subject}</p>
                <p className="text-sm text-gray-500">
                  Due: {assignment.dueDate}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      assignment.status === "submitted"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {assignment.status === "submitted"
                      ? "Submitted"
                      : "Pending"}
                  </span>
                  {assignment.status === "pending" && (
                    <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                      <Upload className="h-4 w-4 mr-2" />
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentAssignments;
