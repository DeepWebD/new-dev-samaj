import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Users, UserCheck, ChevronRight } from "lucide-react";

function Dashboard() {
  const stats = [
    { name: "Total Students", value: 1234, icon: Users },
    { name: "Total Teachers", value: 56, icon: UserCheck },
  ];

  const genderData = [
    { name: "Boys", value: 60, color: "#3B82F6" },
    { name: "Girls", value: 35, color: "#EC4899" },
    { name: "Others", value: 5, color: "#10B981" },
  ];

  const topPerformers = [
    { name: "John Doe", class: "X-A", percentage: 98 },
    { name: "Jane Smith", class: "IX-B", percentage: 97 },
    { name: "Mike Johnson", class: "XII-A", percentage: 96 },
  ];

  const needsImprovement = [
    { name: "Alex Wilson", class: "XI-C", percentage: 35 },
    { name: "Sarah Brown", class: "X-B", percentage: 40 },
    { name: "Tom Davis", class: "IX-A", percentage: 42 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.name}
              className="bg-white dark:bg-gray-800 overflow-hidden rounded-lg shadow"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Icon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                        {stat.name}
                      </dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900 dark:text-white">
                          {stat.value}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="bg-white dark:bg-gray-800 overflow-hidden rounded-lg shadow">
          <div className="p-5">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Gender Distribution
            </h3>
            <div className="mt-4" style={{ height: "200px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={genderData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {genderData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 flex justify-center space-x-4">
              {genderData.map((item) => (
                <div key={item.name} className="flex items-center">
                  <div
                    className="h-3 w-3 rounded-full mr-2"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {item.name} ({item.value}%)
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Top Performers
            </h3>
            <div className="mt-6 flow-root">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {topPerformers.map((student) => (
                  <li key={student.name} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                          {student.name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Class: {student.class}
                        </p>
                      </div>
                      <div className="inline-flex items-center text-sm font-semibold text-green-600 dark:text-green-400">
                        {student.percentage}%
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Needs Improvement
            </h3>
            <div className="mt-6 flow-root">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {needsImprovement.map((student) => (
                  <li key={student.name} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                          {student.name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Class: {student.class}
                        </p>
                      </div>
                      <div className="inline-flex items-center text-sm font-semibold text-red-600 dark:text-red-400">
                        {student.percentage}%
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
