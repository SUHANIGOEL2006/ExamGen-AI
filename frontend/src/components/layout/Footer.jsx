function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">

      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}

          <div>

            <h2 className="text-2xl font-bold text-white">
              🎓 ExamGen AI
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              AI-powered question paper generator built to help students
              practice smarter, faster, and with confidence.
            </p>

          </div>

          {/* Links */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li className="cursor-pointer transition hover:text-purple-400">
                Home
              </li>

              <li className="cursor-pointer transition hover:text-purple-400">
                Features
              </li>

              <li className="cursor-pointer transition hover:text-purple-400">
                How It Works
              </li>

              <li className="cursor-pointer transition hover:text-purple-400">
                Login
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-3">

              <p className="transition hover:text-purple-400">
                📧 support@examgen.ai
              </p>

              <p className="transition hover:text-purple-400">
                💻 GitHub
              </p>

              <p className="transition hover:text-purple-400">
                💼 LinkedIn
              </p>

            </div>

          </div>

        </div>

        <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-gray-500">

          Built for Students • Powered by AI ❤️

          <br />

          © {new Date().getFullYear()} ExamGen AI. All rights reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;