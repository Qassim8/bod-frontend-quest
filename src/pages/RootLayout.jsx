import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import { useState } from "react";

const RootLayout = () => {
      const [isOpen, setIsOpen] = useState(false);

      const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <SideBar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {/* Main */}
      <div className="flex-1 flex flex-col">
        <TopBar toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
