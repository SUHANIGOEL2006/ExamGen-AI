import {
  LayoutDashboard,
  FileText,
  History,
  User,
  LogOut,
  GraduationCap,
  X,
} from "lucide-react";
import logo from "../../assets/logo_examgen AI.png";
import { NavLink, useNavigate } from "react-router-dom";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();

  const menu = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      name: "Generate Paper",
      icon: FileText,
      path: "/generate-paper",
    },
    {
      name: "History",
      icon: History,
      path: "/history",
    },
    {
      name: "My Profile",
      icon: User,
      path: "/profile",
    },
  ];

  const name = localStorage.getItem("name") || "User";
  const email = localStorage.getItem("email") || "user@example.com";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");

    navigate("/login");
  };

  return (
    <aside
      className={`
      fixed top-0 left-0 z-50
      flex h-screen w-72 flex-col
      border-r border-purple-100
      bg-white p-6
      transition-transform duration-300

      ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}

      lg:static
      lg:translate-x-0
      `}
    >
      {/* Mobile Close */}

      <button
        onClick={() => setSidebarOpen(false)}
        className="absolute right-4 top-4 rounded-lg p-2 hover:bg-gray-100 lg:hidden"
      >
        <X size={22} />
      </button>

      {/* Logo */}

      <div className="mb-8 flex items-center gap-3">
        <img
    src={logo}
    alt="ExamGen AI"
    className="h-18 w-18 rounded-2xl shadow-sm"
  />

        <div>
          <h1 className="text-2xl font-bold text-purple-700">
            ExamGen AI
          </h1>

          <p className="text-xs text-gray-500">
            AI Question Paper Generator
          </p>
        </div>
      </div>

      {/* User */}

      <div className="mb-8 rounded-3xl bg-gradient-to-br from-purple-600 to-violet-700 p-5 text-white shadow-lg">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-xl font-bold text-purple-700">
              {name.charAt(0).toUpperCase()}
            </div>

            <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-green-400"></span>
          </div>

          <div className="min-w-0">
            <h2 className="truncate text-lg font-semibold">
              {name}
            </h2>

            <p className="truncate text-sm text-purple-100">
              {email}
            </p>
          </div>
        </div>
      </div>

      {/* Menu */}

      <nav className="flex flex-col gap-2">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-purple-100 font-semibold text-purple-700"
                    : "text-gray-600 hover:bg-purple-50 hover:text-purple-700"
                }`
              }
            >
              <Icon size={20} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

      {/* Logout */}

      <div className="mt-auto border-t pt-6">
        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-3 rounded-xl border border-red-200 px-4 py-3 font-medium text-red-500 transition hover:bg-red-50"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;