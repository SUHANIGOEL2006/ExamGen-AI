import MainLayout from "../components/layout/MainLayout";
import { Eye, Download, FileText } from "lucide-react";

function History() {
  const historyData = [
    {
      subject: "DBMS",
      className: "B.Tech 3rd Year",
      marks: 30,
      difficulty: "Easy",
      date: "Today",
    },
    {
      subject: "Operating System",
      className: "B.Tech 2nd Year",
      marks: 50,
      difficulty: "Medium",
      date: "Yesterday",
    },
    {
      subject: "Computer Networks",
      className: "B.Tech 3rd Year",
      marks: 80,
      difficulty: "Hard",
      date: "18 July",
    },
  ];

  return (
    <MainLayout>

      {/* HEADER */}
      <div className="mb-8 flex items-center gap-3">
        <FileText className="text-purple-600" />
        <h1 className="text-3xl font-bold text-gray-800">
          Generated Papers History
        </h1>
      </div>

      {/* TABLE CARD */}
      <div className="rounded-2xl bg-white p-6 shadow border">

        <div className="overflow-x-auto">

          <table className="w-full">

            {/* HEAD */}
            <thead>
              <tr className="border-b text-left text-gray-600">

                <th className="py-3">Subject</th>
                <th>Class</th>
                <th>Marks</th>
                <th>Difficulty</th>
                <th>Date</th>
                <th className="text-center">Actions</th>

              </tr>
            </thead>

            {/* BODY */}
            <tbody>

              {historyData.map((item, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-purple-50 transition"
                >

                  <td className="py-4 font-medium text-gray-800">
                    {item.subject}
                  </td>

                  <td className="text-gray-600">
                    {item.className}
                  </td>

                  <td>{item.marks}</td>

                  <td>
                    <span className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-700">
                      {item.difficulty}
                    </span>
                  </td>

                  <td className="text-gray-500">
                    {item.date}
                  </td>

                  {/* ACTIONS */}
                  <td className="flex justify-center gap-3 py-3">

                    <button className="flex items-center gap-1 rounded-lg bg-blue-100 px-3 py-1 text-blue-700 hover:bg-blue-200">
                      <Eye size={16} />
                      View
                    </button>

                    <button className="flex items-center gap-1 rounded-lg bg-green-100 px-3 py-1 text-green-700 hover:bg-green-200">
                      <Download size={16} />
                      Download
                    </button>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </MainLayout>
  );
}

export default History;