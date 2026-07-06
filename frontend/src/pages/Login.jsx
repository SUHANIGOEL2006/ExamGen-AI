import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-violet-100">

        {/* Background Blobs */}

        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-purple-300/20 blur-3xl"></div>

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-indigo-300/20 blur-3xl"></div>

        <div className="relative flex items-center justify-center px-6 py-20">

          <div className="w-full max-w-md rounded-3xl border border-purple-100 bg-white p-10 shadow-[0_20px_60px_rgba(124,58,237,0.15)]">

            {/* Logo */}

            <div className="flex justify-center">

              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-purple-600 text-4xl text-white shadow-lg">

                🎓

              </div>

            </div>

            {/* Heading */}

            <div className="mt-8 text-center">

              <h1 className="text-3xl font-bold text-gray-900">
                Sign in to your account
              </h1>

              <p className="mt-3 text-gray-500">
                Continue your exam preparation with ExamGen AI.
              </p>

            </div>

            {/* Form */}

            <form className="mt-10 space-y-6">

              {/* Email */}

              <div>

                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition-all focus:border-purple-600 focus:ring-4 focus:ring-purple-100"
                />

              </div>

              {/* Password */}

              <div>

                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Password
                </label>

                <div className="relative">

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-gray-300 py-3 pl-4 pr-12 outline-none transition-all focus:border-purple-600 focus:ring-4 focus:ring-purple-100"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-purple-600"
                  >
                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>

                </div>

              </div>

              {/* Remember & Forgot */}

              <div className="flex items-center justify-between text-sm">

                <label className="flex items-center gap-2 text-gray-600">

                  <input
                    type="checkbox"
                    className="accent-purple-600"
                  />

                  Remember me

                </label>

                <button
                  type="button"
                  className="font-medium text-purple-600 hover:underline"
                >
                  Forgot Password?
                </button>

              </div>

              {/* Button */}

              <button
                type="submit"
                className="w-full rounded-xl bg-purple-600 py-3 font-semibold text-white transition-all hover:bg-purple-700 hover:shadow-lg"
              >
                Sign In
              </button>

            </form>

            {/* Bottom */}

            <p className="mt-8 text-center text-sm text-gray-600">

              Don't have an account?{" "}

              <Link
                to="/signup"
                className="font-semibold text-purple-600 hover:underline"
              >
                Create Account
              </Link>

            </p>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Login;