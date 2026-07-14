import Sidebar from "../dashboard/Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* Sidebar */}
      <Sidebar />

      {/* Right side */}
      <div className="flex flex-1 flex-col">

        {/* YOUR EXISTING NAVBAR */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 p-6">
          {children}
        </main>

        {/* YOUR EXISTING FOOTER */}
        <Footer />

      </div>
    </div>
  );
}

export default MainLayout;