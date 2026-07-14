import { Link } from "react-router-dom";
import { AlertTriangle, ArrowLeft } from "lucide-react";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-50 to-violet-100 px-6">

      <div className="max-w-md rounded-3xl bg-white p-10 text-center shadow-xl">

        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-purple-100">

          <AlertTriangle
            size={40}
            className="text-purple-600"
          />

        </div>

        <h1 className="text-6xl font-bold text-purple-600">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-500">
          Oops! The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          to="/dashboard"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-3 font-medium text-white transition hover:bg-purple-700"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

      </div>

    </div>
  );
}

export default NotFound;