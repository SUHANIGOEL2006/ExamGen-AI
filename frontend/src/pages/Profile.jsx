import MainLayout from "../components/layout/MainLayout";
import { User, Mail, BookUser, Save } from "lucide-react";
import { useState, useEffect } from "react";
import api from "../api/api";

function Profile() {
  const [profile, setProfile] = useState({
  name: "",
  email: "",
});

useEffect(() => {
  fetchProfile();
}, []);

const fetchProfile = async () => {
  try {
    const response = await api.get("/auth/profile");
    setProfile(response.data);
  } catch (error) {
    console.log(error);
  }
};

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
  try {
    await api.put("/auth/profile", {
      name: profile.name,
    });
    localStorage.setItem("name", profile.name);
    alert("Profile Updated Successfully 🎉");
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

  return (
    <MainLayout>

      {/* HEADER */}
      <div className="mb-8 flex items-center gap-3">
        <User className="text-purple-600" />
        <h1 className="text-3xl font-bold text-gray-800">
          My Profile
        </h1>
      </div>

      {/* CARD */}
      <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow border">

        <div className="space-y-6">

          {/* NAME */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-gray-700 font-medium">
              <BookUser size={18} />
              Full Name
            </label>

            <input
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3 focus:border-purple-400 outline-none"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-gray-700 font-medium">
              <Mail size={18} />
              Email
            </label>

            <input
              name="email"
              value={profile.email}
              readOnly
              className="w-full rounded-xl border bg-gray-100 px-4 py-3 outline-none cursor-not-allowed"
            />
          </div>

          {/* SAVE BUTTON */}
          <button
            onClick={handleSave}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-purple-600 py-3 text-white font-medium hover:bg-purple-700 transition"
          >
            <Save size={18} />
            Save Profile
          </button>

        </div>

      </div>

    </MainLayout>
  );
}

export default Profile;