import { Link } from "react-router-dom";
import { Mail, GraduationCap } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-[#0f172a] text-gray-300">

      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}

          <div>

            <div className="mb-4 flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                <GraduationCap size={22} />
              </div>

              <h2 className="text-2xl font-bold text-white">
                ExamGen AI
              </h2>

            </div>

            <p className="max-w-sm leading-7 text-gray-400">
              Generate AI-powered question papers instantly for smarter
              preparation. Customize subject, difficulty level and marks
              within seconds.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="/"
                className="transition hover:text-purple-400"
              >
                Home
              </Link>

              <a
                href="#features"
                className="transition hover:text-purple-400"
              >
                Features
              </a>

              <a
                href="#how-it-works"
                className="transition hover:text-purple-400"
              >
                How It Works
              </a>

              <Link
                to="/login"
                className="transition hover:text-purple-400"
              >
                Login
              </Link>

            </div>

          </div>

          {/* Connect */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Connect
            </h3>

            <div className="space-y-4">

              <a
                href="mailto:suhanigoel2006@gmail.com"
                className="flex items-center gap-3 transition hover:text-purple-400"
              >
                <Mail size={18} />
                suhanigoel2006@gmail.com
              </a>

              <a
                href="https://github.com/SUHANIGOEL2006"
                target="_blank"
                rel="noreferrer"
                className="block transition hover:text-purple-400"
              >
                GitHub →
              </a>

              <a
                href="https://www.linkedin.com/in/suhani-goel-2b1a12278/"
                target="_blank"
                rel="noreferrer"
                className="block transition hover:text-purple-400"
              >
                LinkedIn →
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gray-700 pt-6 text-sm text-gray-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} ExamGen AI. All rights reserved.
          </p>

          <p>
            Built with <span className="text-red-400">❤</span> using React, FastAPI & MongoDB
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;