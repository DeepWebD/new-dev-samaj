/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, GraduationCap, LogOut } from "lucide-react";

function Sidebar({ open }) {
  const location = useLocation();

  const links = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/school-management/dashboard",
    },
    {
      name: "Students",
      icon: GraduationCap,
      path: "/school-management/students",
    },
    { name: "Teachers", icon: Users, path: "/school-management/teachers" },
    { name: "Logout", icon: Users, path: "/logout" },
  ];

  return (
    <div
      className={`${
        open ? "w-64" : "w-0"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="h-full bg-white dark:bg-gray-800 shadow-lg">
        <nav className="mt-5 px-2">
          <div className="space-y-1">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`${
                    location.pathname === link.path
                      ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                  } group flex items-center px-2 py-2 text-base font-medium rounded-md`}
                >
                  <Icon className="mr-4 h-6 w-6" />
                  {link.name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
