import React, { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex justify-between items-center px-8 sm:px-20 lg:px-32 xl:px-44 sticky top-0 z-20 backdrop-blur-xl font-medium bg-gray-200 dark:bg-gray-900/70">
      <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        className="w-28 sm:w-32 px-5.5 py-6"
        alt="logo"
      />

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

        <a onClick={() => setSidebarOpen(false)} href="#" className="sm:hover:border-b">
          Home
        </a>
        <a onClick={() => setSidebarOpen(false)} href="#study" className="sm:hover:border-b">
          Study
        </a>
        <a onClick={() => setSidebarOpen(false)} href="#progress" className="sm:hover:border-b">
          Progress
        </a>
        <a onClick={() => setSidebarOpen(false)} href="#get-help" className="sm:hover:border-b">
          Get Help
        </a>
        <a onClick={() => setSidebarOpen(false)} href="#about" className="sm:hover:border-b">
          About / Mission
        </a>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">

        <ThemeToggleBtn theme={theme} setTheme={setTheme}/>

        {!sidebarOpen && (
          <img
            src={theme === "dark" ? assets.menu_icon : assets.menu_icon_dark}
            alt="menu"
            onClick={() => setSidebarOpen(true)}
            className="block sm:hidden w-8 cursor-pointer"
          />
        )}

        <a
          href="#login"
          className="text-base max-sm:hidden flex items-center gap-2 bg-primary-500 text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all font-semibold"
        >
          Login <img src={assets.arrow_icon} width={14} alt="arrow" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
