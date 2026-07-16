import {
  LayoutDashboard,
  FileText,
  History,
  User,
  LogOut,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const menu = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Generate Paper", icon: FileText, path: "/generate-paper" },
    { name: "History", icon: History, path: "/history" },
    { name: "My Profile", icon: User, path: "/profile" },
  ];
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");

    navigate("/login");
  };

  return (
    <aside className="flex min-h-screen w-64 flex-col border-r bg-white p-6">

      {/* Logo */}
      <h1 className="mb-10 text-2xl font-bold text-purple-700">
        ExamGen AI
      </h1>

      {/* Menu */}
      <nav className="space-y-2">

        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-gray-600 transition hover:bg-purple-50 ${
                  isActive
                    ? "bg-purple-100 text-purple-700 font-semibold"
                    : ""
                }`
              }
            >
              <Icon size={20} />
              {item.name}
            </NavLink>
          );
        })}

      </nav>

      {/* Logout (NOW FIXED 👇) */}
      <div className="my-6 border-t border-gray-300"></div>
      <button onClick={handleLogout} className="flex items-center gap-3 rounded-xl border px-4 py-3 text-red-500 transition hover:bg-red-50">
        <LogOut size={18} />
        Logout
      </button>

    </aside>
  );
}

export default Sidebar;