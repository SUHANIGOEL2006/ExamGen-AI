import { useState } from "react";
import Sidebar from "../dashboard/Sidebar";
import { Menu } from "lucide-react";

function MainLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Right */}
      <div className="flex flex-1 min-w-0 flex-col">

        {/* Mobile Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b bg-white px-4 py-4 lg:hidden">

          <button onClick={() => setSidebarOpen(true)}>
            <Menu size={28} />
          </button>

          <h1 className="text-lg font-bold text-purple-700">
            ExamGen AI
          </h1>

          <div className ="w-7"></div>

        </div>

        <main className="flex-1 p-4 sm:p-6">
          {children}
        </main>

      </div>

    </div>
  );
}

export default MainLayout;