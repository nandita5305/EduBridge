import React, { useState, useEffect } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { Link, useNavigate } from "react-router-dom";


const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showRolePopup, setShowRolePopup] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleRoleSelect = (role) => {
    navigate(`/${role}`);
    setShowRolePopup(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className="flex justify-between items-center px-4 sm:px-20 lg:px-32 xl:px-44 sticky top-0 z-20 backdrop-blur-xl font-medium bg-gray-200 dark:bg-gray-900/70 shadow-sm text-lg">
      {/* ✅ Role Popup */}
      {showRolePopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center space-y-4 w-72">
            <h2 className="text-lg font-bold dark:text-white">Login as</h2>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
              onClick={() => handleRoleSelect("student")}
            >
              Student
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600"
              onClick={() => handleRoleSelect("parent")}
            >
              Parent
            </button>
            <button
              className="text-gray-500 mt-2 hover:underline"
              onClick={() => setShowRolePopup(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* ✅ Logo */}
      <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        className="w-28 sm:w-32 py-1 cursor-pointer"
        alt="logo"
        onClick={() => navigate("/")}
      />

      {/* ✅ Nav Links */}
      <div
        className={`text-gray-700 dark:text-white sm:text-base max-sm:text-lg font-semibold max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary-800 max-sm:text-white max-sm:pt-20 flex items-center gap-10 transition-all duration-300 ease-in-out ${
          sidebarOpen
            ? "max-sm:w-60 max-sm:translate-x-0"
            : "max-sm:w-0 max-sm:translate-x-full"
        } overflow-hidden`}
      >
        <img
          src={assets.close_icon}
          alt="close"
          className={`w-5 absolute right-4 top-4 sm:hidden cursor-pointer transition-opacity ${
            sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setSidebarOpen(false)}
        />

        <Link to="/#hero" onClick={() => setSidebarOpen(false)} className="sm:hover:border-b">
          Home
        </Link>
       <a href="/learning-modes" onClick={() => setSidebarOpen(false)} className="sm:hover:border-b">
  Study
</a>

        <Link to="/progress" onClick={() => setSidebarOpen(false)} className="sm:hover:border-b">
          Progress
        </Link>
        <a href="/SuccessStories" onClick={() => setSidebarOpen(false)} className="sm:hover:border-b">
          Get Help
        </a>
        <a href="/#HowItWorks" onClick={() => setSidebarOpen(false)} className="sm:hover:border-b">
          About / Mission
        </a>
      </div>

      {/* ✅ Right Side Controls */}
      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        {!sidebarOpen && (
          <img
            src={theme === "dark" ? assets.menu_icon : assets.menu_icon_dark}
            alt="menu"
            onClick={() => setSidebarOpen(true)}
            className="block sm:hidden w-8 cursor-pointer"
          />
        )}

        {user ? (


          <div className="flex items-center gap-3">
            <span className="text-gray-800 dark:text-white font-semibold text-lg">
              Hi, {user.name.split(" ")[0]}
            </span>
            <button
              onClick={handleLogout}
              className="text-lg text-red-500 hover:underline"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <button
              onClick={() => navigate("/auth")}
              className="text-base max-sm:hidden flex items-center gap-2 bg-primary-500 text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all font-semibold"
            >
              Login <img src={assets.arrow_icon} width={14} alt="arrow" />
            </button>
           
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
