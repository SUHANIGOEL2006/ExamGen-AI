import MainLayout from "../components/layout/MainLayout";
import { User, Mail, BookUser, Save } from "lucide-react";
import { useState } from "react";

function Profile() {
  const [profile, setProfile] = useState({
    name: "Suhani Goel",
    email: "suhani@example.com",
    role: "Student",
    college: "B.Tech Computer Science",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    alert("Profile updated successfully 🎉");
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
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3 focus:border-purple-400 outline-none"
            />
          </div>

          {/* ROLE */}
          <div>
            <label className="text-gray-700 font-medium">Role</label>

            <input
              name="role"
              value={profile.role}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border px-4 py-3"
            />
          </div>

          {/* COLLEGE */}
          <div>
            <label className="text-gray-700 font-medium">
              College / University
            </label>

            <input
              name="college"
              value={profile.college}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border px-4 py-3"
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