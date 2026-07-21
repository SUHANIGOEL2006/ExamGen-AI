import { useNavigate } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import DashboardCards from "../components/dashboard/DashboardCards";
import RecentPapers from "../components/dashboard/RecentPapers";
import { useEffect, useState } from "react";
import api from "../api/api";
import { Plus, CalendarDays } from "lucide-react";

function Dashboard() {
  const navigate = useNavigate();

  const name = localStorage.getItem("name");

  const [papers, setPapers] = useState([]);

  useEffect(() => {
    fetchPapers();
  }, []);

  const fetchPapers = async () => {
    try {
      const response = await api.get("/papers");
      setPapers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <MainLayout>
      {/* ================= HEADER ================= */}

      <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div>

          <div className="mb-4 inline-flex items-center rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 px-5 py-2 text-sm font-medium text-purple-700 shadow-sm">

            👋 Welcome back, {name}

          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            Dashboard
          </h1>

          <p className="mt-2 max-w-xl text-gray-500">
            Generate, manage and download your AI-powered question papers from one place.
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">

            <CalendarDays size={16} />

            {today}

          </div>

        </div>

        {/* Right */}

        <button
  onClick={() => navigate("/generate-paper")}
  className="flex w-full items-center justify-center gap-2 rounded-xl bg-purple-200 px-5 py-3 font-medium text-purple-800 transition hover:bg-purple-300 sm:w-fit"
>
  <Plus size={20} />
  Generate Paper
</button>

      </div>

      {/* Cards */}

      <DashboardCards papers={papers} />

      {/* Recent */}

      <RecentPapers papers={papers} />

    </MainLayout>
  );
}

export default Dashboard;