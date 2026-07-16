import MainLayout from "../components/layout/MainLayout";
import DashboardCards from "../components/dashboard/DashboardCards";
import RecentPapers from "../components/dashboard/RecentPapers";
import { useEffect, useState } from "react";
import api from "../api/api";

function Dashboard() {
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
  return (
    <MainLayout>

      {/* HEADER */}
      <div className="mb-8 flex items-center justify-between">

        {/* Left side */}
        <div>

          {/* LONG BADGE */}
          <div className="mb-3 inline-flex items-center rounded-full bg-purple-100 px-5 py-2 text-sm font-medium text-purple-700">
            Welcome back, {name} 👋
          </div>


          {/* Subtitle */}
          <p className="text-gray-500">
            Manage your generated question papers here
          </p>

        </div>

        {/* Right button */}
        <button className="rounded-xl bg-purple-200 px-6 py-3 text-purple-800 font-medium shadow-sm hover:bg-purple-300 transition">
          + Generate Paper
        </button>

      </div>

      {/* DASHBOARD CARDS */}
      <DashboardCards papers={papers} />

      {/* RECENT PAPERS */}
      <RecentPapers papers={papers} />

    </MainLayout>
  );
}

export default Dashboard;