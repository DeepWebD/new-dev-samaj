import { useState } from "react";
import { Plus } from "lucide-react";

import Table from "../../components/SchoolManagement/Table";

function Students() {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", class: "X-A", rollNo: "001", gender: "Male" },
    {
      id: 2,
      name: "Jane Smith",
      class: "IX-B",
      rollNo: "002",
      gender: "Female",
    },
    // Add more sample data as needed
  ]);

  const tableHeadTitle = ["Name", "Class", "Roll No", "Gender", "Actions"];

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Students
          </h2>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            <Plus className="h-5 w-5 mr-2" />
            Add Student
          </button>
        </div>

        <div className="overflow-x-auto">
          <Table tableData={students} tableHeadTitle={tableHeadTitle} />
          {/* <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Class
                </th>
                <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Roll No
                </th>
                <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Gender
                </th>
                <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {students.map((student) => (
                <tr key={student.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {student.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {student.class}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {student.rollNo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {student.gender}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 mr-4">
                      <Pencil className="h-5 w-5" />
                    </button>
                    <button className="text-red-600 dark:text-red-400 hover:text-red-900">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
        </div>
      </div>
    </div>
  );
}

export default Students;
