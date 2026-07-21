import { GraduationCap, Menu } from "lucide-react";
import {useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const [menuOpen , setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">

        {/* Logo */}

        <div onClick={() => navigate("/")} className="flex cursor-pointer items-center gap-3">

          <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
            <GraduationCap size={24} />
          </div>

          <div>
            <h1 className="text-xl sm: text-2xl font-bold text-gray-900">
              ExamGen AI
            </h1>

            <p className="text-xs text-gray-500">
              AI Question Paper Generator
            </p>
          </div>

        </div>

        {/* Desktop Menu */}

        <ul className="hidden items-center gap-10 text-sm font-medium text-gray-700 lg:flex">

          <li onClick={() => navigate("/")} className="cursor-pointer transition hover:text-purple-600">
            Home
          </li>

          <li onClick={() => scrollToSection("features")} className="cursor-pointer transition hover:text-purple-600">
            Features
          </li>

          <li onClick={() => scrollToSection("how-it-works")} className="cursor-pointer transition hover:text-purple-600">
            How It Works
          </li>

        </ul>

        {/* Buttons */}

        <div className="hidden items-center gap-4 lg:flex">

          <button onClick={() => navigate("/login")} className="rounded-xl px-5 py-2.5 font-medium text-gray-700 transition hover:bg-gray-100">
            Login
          </button>

          <button onClick={() => {
            if (token) {
              navigate("/dashboard");
            } else {
              navigate("/signup");
            }}}className="rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            Get Started
          </button>

        </div>

        {/* Mobile */}

        <button onClick={()=> setMenuOpen(!menuOpen)}className="rounded-lg p-2 lg:hidden">
          <Menu size={28} />
        </button>

      </div>

      {menuOpen && (
  <div className="border-t bg-white lg:hidden">

    <div className="flex flex-col px-6 py-5 space-y-5">

      <button
        onClick={() => {
          navigate("/");
          setMenuOpen(false);
        }}
        className="text-left font-medium hover:text-purple-600"
      >
        Home
      </button>

      <button
        onClick={() => {
          scrollToSection("features");
          setMenuOpen(false);
        }}
        className="text-left font-medium hover:text-purple-600"
      >
        Features
      </button>

      <button
        onClick={() => {
          scrollToSection("how-it-works");
          setMenuOpen(false);
        }}
        className="text-left font-medium hover:text-purple-600"
      >
        How It Works
      </button>

      <hr />

      <button
        onClick={() => {
          navigate("/login");
          setMenuOpen(false);
        }}
        className="rounded-xl border py-3"
      >
        Login
      </button>

      <button
        onClick={() => {
          if (token) {
            navigate("/dashboard");
          } else {
            navigate("/signup");
          }
          setMenuOpen(false);
        }}
        className="rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 py-3 font-semibold text-white"
      >
        Get Started
      </button>

    </div>

  </div>
)}
    </nav>
  );
}

export default Navbar;