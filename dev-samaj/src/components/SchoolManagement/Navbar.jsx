/* eslint-disable react/prop-types */
import { Bell, Sun, Moon, Menu } from "lucide-react";

function Navbar({ sidebarOpen, setSidebarOpen, darkMode, setDarkMode }) {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="px-4 text-gray-500 dark:text-gray-400 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=128&h=128&fit=crop"
                alt="School Logo"
                className="h-8 w-8 rounded-full"
              />
              <div className="ml-4">
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Dev Samaj School
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Nehru Nagar,Delhi
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
              <Bell className="h-6 w-6" />
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            >
              {darkMode ? (
                <Sun className="h-6 w-6" />
              ) : (
                <Moon className="h-6 w-6" />
              )}
            </button>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop"
                alt="Admin"
                className="h-8 w-8 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
