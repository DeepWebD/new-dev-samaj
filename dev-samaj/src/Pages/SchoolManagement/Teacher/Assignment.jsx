import { useState } from "react";
import { Upload, Plus, FileText, Trash2 } from "lucide-react";

function Assignment() {
  const [selectedClass, setSelectedClass] = useState("X");
  const [selectedSection, setSelectedSection] = useState("A");
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [subject, setSubject] = useState("Mathematics");

  const classes = ["IX", "X", "XI", "XII"];
  const sections = ["A", "B", "C"];
  const subjects = [
    "Mathematics",
    "Science",
    "English",
    "History",
    "Geography",
  ];

  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: "Mathematics Assignment 1",
      dueDate: "2024-03-25",
      subject: "Mathematics",
      class: "X",
      section: "A",
    },
    {
      id: 2,
      title: "Science Project",
      dueDate: "2024-03-28",
      subject: "Science",
      class: "X",
      section: "B",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAssignment = {
      id: Date.now(),
      title,
      dueDate,
      subject,
      class: selectedClass,
      section: selectedSection,
    };
    setAssignments([...assignments, newAssignment]);
    // Reset form
    setTitle("");
    setDueDate("");
  };

  const handleDelete = (id) => {
    setAssignments(assignments.filter((assignment) => assignment.id !== id));
  };

  const filteredAssignments = assignments.filter(
    (assignment) =>
      assignment.class === selectedClass &&
      assignment.section === selectedSection
  );

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Upload Assignment
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Class
              </label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                {classes.map((cls) => (
                  <option key={cls} value={cls}>
                    Class {cls}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Section
              </label>
              <select
                value={selectedSection}
                onChange={(e) => setSelectedSection(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                {sections.map((sec) => (
                  <option key={sec} value={sec}>
                    Section {sec}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Subject
              </label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                {subjects.map((sub) => (
                  <option key={sub} value={sub}>
                    {sub}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Due Date
              </label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="sm:col-span-2 lg:col-span-3">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Assignment Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Enter assignment title"
                required
              />
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Upload File
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                    <span>Upload a file</span>
                    <input type="file" className="sr-only" required />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PDF, DOC up to 10MB</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <Plus className="h-5 w-5 mr-2" />
              Upload Assignment
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Assignments for Class {selectedClass}-{selectedSection}
          </h2>
          <div className="text-sm text-gray-500">
            Total: {filteredAssignments.length} assignments
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredAssignments.map((assignment) => (
            <div
              key={assignment.id}
              className="border rounded-lg p-4 relative group"
            >
              <div className="flex items-start">
                <FileText className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {assignment.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Due: {assignment.dueDate}
                  </p>
                  <p className="text-sm text-gray-500">{assignment.subject}</p>
                  <p className="text-sm text-gray-500">
                    Class {assignment.class}-{assignment.section}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(assignment.id)}
                  className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredAssignments.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No assignments found for Class {selectedClass}-{selectedSection}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Assignment;
