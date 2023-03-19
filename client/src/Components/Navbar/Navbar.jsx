import React, {useState} from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isPageActive = (pathname) => {
    return location.pathname === pathname
      ? "text-indigo-600"
      : "text-gray-600";
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-bold font-serif text-4xl text-indigo-500 hover:text-slate-400">
              WCE Portal
            </Link>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={toggleSidebar}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:block my-auto">
            <div className="flex items-center">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-xl font-medium ${isPageActive(
                  "/"
                )} hover:text-gray-900 hover:bg-gray-50`}
              >
                Home
              </Link>
              <Link
                to="/course"
                className={`px-3 py-2 rounded-md text-xl font-medium ${isPageActive(
                  "/course"
                )} hover:text-gray-900 hover:bg-gray-50`}
              >
                Course
              </Link>
              <Link
                to="/test"
                className={`px-3 py-2 rounded-md text-xl font-medium ${isPageActive(
                  "/test"
                )} hover:text-gray-900 hover:bg-gray-50`}
              >
                Test 
              </Link>
              <Link
                to="/results"
                className={`px-3 py-2 rounded-md text-xl font-medium ${isPageActive(
                  "/results"
                )} hover:text-gray-900 hover:bg-gray-50`}
              >
                Results
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className={`block px-3 py-2 rounded-md text-base font-medium ${isPageActive(
              "/"
            )} hover:text-gray-900 hover:bg-gray-50`}
          >
            Home
          </Link>
          <Link
            to="/course"
            className={`block px-3 py-2 rounded-md text-base font-medium ${isPageActive(
              "/course"
            )} hover:text-gray-900 hover:bg-gray-50`}
          >
            Course
          </Link>
          <Link
            to="/test"
            className={`block px-3 py-2 rounded-md text-base font-medium ${isPageActive(
              "/test"
            )} hover:text-gray-900 hover:bg-gray-50`}
          >
            Test
          </Link>
          <Link
            to="/results"
            className={`block px-3 py-2 rounded-md text-base font-medium ${isPageActive(
              "/test"
            )} hover:text-gray-900 hover:bg-gray-50`}
          >
            Results
          </Link>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
