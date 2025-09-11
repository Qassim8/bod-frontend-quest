import { NavLink } from "react-router-dom";
import "boxicons/css/boxicons.min.css";

const SideBar = ({ isOpen, toggleSidebar }) => {
  const links = [
    { to: "/", label: "Dashboard", icon: "bx bx-grid-alt" },
    { to: "/users", label: "Users", icon: "bx bx-user" },
    { to: "/tasks", label: "Tasks", icon: "bx bx-task" },
    { to: "/settings", label: "Settings", icon: "bx bx-cog" },
  ];

  return (
    <>
      <div
        onClick={toggleSidebar}
        className={`fixed inset-0 bg-black/50 z-20 md:hidden transition ${
          isOpen ? "block" : "hidden"
        }`}
      ></div>

      <aside
        className={`fixed md:static z-30 top-0 left-0 h-screen w-64 bg-gradient-to-b from-blue-700 to-blue-900 text-white p-4 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold"><i className="bx bx-home me-5"></i>Logo</h2>
          <button
            onClick={toggleSidebar}
            className="md:hidden text-2xl text-white"
          >
            <i className="bx bx-x"></i>
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-3">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                  isActive
                    ? "bg-white/20 text-white font-semibold"
                    : "hover:bg-white/10 text-gray-200"
                }`
              }
            >
              <i className={link.icon}></i>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default SideBar;
