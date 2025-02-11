import { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import Table from "../../components/SchoolManagement/Table";

function Admins() {
  const [admins, setAdmins] = useState([
    {
      id: 1,
      name: "Dr. Robert Brown",
      subject: "Mathematics",
      qualification: "Ph.D",
      experience: "10 years",
    },
    {
      id: 2,
      name: "Ms. Sarah Wilson",
      subject: "English",
      qualification: "M.A.",
      experience: "8 years",
    },
    // Add more sample data as needed
  ]);

  const tableHeadTitle = [
    "Name",
    "Subject",
    "Qualification",
    "Experience",
    "Actions",
  ];

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Teachers
          </h2>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            <Plus className="h-5 w-5 mr-2" />
            Add Teacher
          </button>
        </div>

        <div className="overflow-x-auto">
          <Table tableData={admins} tableHeadTitle={tableHeadTitle} />
        </div>
      </div>
    </div>
  );
}

export default Admins;
