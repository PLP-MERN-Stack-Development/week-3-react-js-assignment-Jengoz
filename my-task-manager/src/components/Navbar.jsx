import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-bold text-blue-600 dark:text-white"
        >
          TaskManager
        </Link>
        <div className="flex gap-4 items-center">
          <Link
            to="/"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            to="/tasks"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
          >
            Tasks
          </Link>
          <Link
            to="/about"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
          >
            About
          </Link>
          <button
            onClick={toggleTheme}
            className="ml-4 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm"
          >
            {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </div>
      </div>
    </nav>
  );
}
