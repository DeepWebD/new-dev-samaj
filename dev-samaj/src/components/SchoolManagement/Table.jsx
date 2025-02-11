/* eslint-disable react/prop-types */

import { Pencil, Trash2 } from "lucide-react";

function Table({ tableData, tableHeadTitle }) {
  return (
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
      <thead>
        <tr>
          {tableHeadTitle.map((item) => {
            return (
              <th
                key={item}
                className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                {item}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
        {tableData.map((teacher) => (
          <tr key={teacher.id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
              {teacher.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
              {teacher.subject}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
              {teacher.qualification}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
              {teacher.experience}
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
    </table>
  );
}

export default Table;
