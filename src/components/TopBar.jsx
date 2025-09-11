import { useLocation } from "react-router-dom";
import { useState } from "react";
import "boxicons/css/boxicons.min.css";

export default function TopBar({ toggleSidebar }) {
  const location = useLocation();
  const [search, setSearch] = useState("");

  // نحدد العنوان حسب الـ route
  const titles = {
    "/": "Dashboard",
    "/tasks": "Tasks",
    "/users": "Users",
    "/settings": "Settings",
  };

  return (
    <header className="flex items-center justify-between bg-white shadow px-4 py-3 md:px-6 sticky top-0 z-30">
      {/* زر الموبايل */}
      <button
        onClick={toggleSidebar}
        className="md:hidden text-2xl text-gray-600"
      >
        <i className="bx bx-menu"></i>
      </button>

      {/* عنوان الصفحة */}
      <h1 className="text-lg md:text-xl font-semibold">
        {titles[location.pathname] || "Page"}
      </h1>

      {/* Search + Icons */}
      <div className="flex items-center space-x-3 md:space-x-6">
        {/* Search box */}
        <div className="hidden sm:flex items-center bg-gray-100 rounded-lg px-2">
          <i className="bx bx-search text-gray-500"></i>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none px-2 py-1 text-sm"
          />
        </div>

        {/* Notifications */}
        <button className="relative text-2xl text-gray-600">
          <i className="bx bx-bell"></i>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
            3
          </span>
        </button>

        {/* صورة البروفايل */}
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-9 h-9 rounded-full border"
        />
      </div>
    </header>
  );
}
