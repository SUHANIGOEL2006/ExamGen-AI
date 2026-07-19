import {
  LayoutDashboard,
  FileText,
  History,
  User,
  LogOut,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";

function Sidebar() {

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

  const navigate = useNavigate();

  const name = localStorage.getItem("name") || "User";
  const email = localStorage.getItem("email") || "user@example.com";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");

    navigate("/login");
  };

  return (
    <aside className="flex min-h-screen w-72 flex-col border-r border-purple-100 bg-white p-6">

      {/* Logo */}

      <h1 className="mb-8 text-3xl font-bold text-purple-700">
        ExamGen AI
      </h1>

      {/* User Card */}

      <div className="mb-8 rounded-3xl bg-gradient-to-br from-purple-600 to-violet-700 p-6 text-white shadow-xl">

        <div className="flex items-center gap-4">

          <div className="relative">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl font-bold text-purple-700 shadow-md">

              {name.charAt(0).toUpperCase()}

            </div>

            <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-green-400"></span>

          </div>

          <div>
        
            <h2 className="text-lg font-semibold">
              {name}
            </h2>

            <p className="text-sm text-purple-100 break-all">
              {email}
            </p>

          </div>

        </div>

      </div>

      {/* Menu */}

      <nav className="space-y-2">

        {menu.map((item) => {

          const Icon = item.icon;

          return (

            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-purple-100 font-semibold text-purple-700 shadow-sm"
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

      {/* Bottom */}

      <div className="mt-6 pt-6">

        <div className="mb-5 border-t border-gray-200"></div>

        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl border border-red-200 px-4 py-3 text-red-500 transition hover:bg-red-50"
        >

          <LogOut size={18} />

          Logout

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;