import { GraduationCap, Menu } from "lucide-react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}

        <div className="flex items-center gap-3 cursor-pointer">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
            <GraduationCap size={24} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              ExamGen AI
            </h1>

            <p className="text-xs text-gray-500">
              AI Question Paper Generator
            </p>
          </div>

        </div>

        {/* Desktop Menu */}

        <ul className="hidden items-center gap-10 text-sm font-medium text-gray-700 lg:flex">

          <li className="cursor-pointer transition hover:text-purple-600">
            Home
          </li>

          <li className="cursor-pointer transition hover:text-purple-600">
            Features
          </li>

          <li className="cursor-pointer transition hover:text-purple-600">
            How It Works
          </li>

          <li className="cursor-pointer transition hover:text-purple-600">
            Contact
          </li>

        </ul>

        {/* Buttons */}

        <div className="hidden items-center gap-4 lg:flex">

          <button className="rounded-xl px-5 py-2.5 font-medium text-gray-700 transition hover:bg-gray-100">
            Login
          </button>

          <button className="rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            Get Started
          </button>

        </div>

        {/* Mobile */}

        <button className="rounded-lg p-2 lg:hidden">
          <Menu size={28} />
        </button>

      </div>
    </nav>
  );
}

export default Navbar;