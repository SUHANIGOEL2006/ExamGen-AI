import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import GeneratePaper from "../pages/GeneratePaper";
import History from "../pages/History";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../components/auth/ProtectedRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
        <Route path="/generate-paper" element={<ProtectedRoute><GeneratePaper /></ProtectedRoute>}/>
        <Route path="/history" element={<ProtectedRoute><History /></ProtectedRoute>}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;