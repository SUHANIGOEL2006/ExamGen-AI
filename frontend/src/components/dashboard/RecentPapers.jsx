import { Eye, Download, FileText } from "lucide-react";

function RecentPapers() {
  const papers = [
    {
      subject: "DBMS",
      difficulty: "Easy",
      marks: 30,
      date: "Today",
    },
    {
      subject: "Operating System",
      difficulty: "Medium",
      marks: 50,
      date: "Yesterday",
    },
    {
      subject: "Computer Networks",
      difficulty: "Hard",
      marks: 80,
      date: "18 Jul",
    },
  ];

  const getDifficultyStyle = (level) => {
    switch (level) {
      case "Easy":
        return "bg-green-100 text-green-700";
      case "Medium":
        return "bg-yellow-100 text-yellow-700";
      case "Hard":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="mt-10 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <FileText className="text-purple-600" size={22} />

          <h2 className="text-xl font-semibold text-gray-800">
            Recent Papers
          </h2>
        </div>

        <span className="text-sm text-gray-500">
          Last generated papers history
        </span>

      </div>

      {/* Table */}
      <div className="overflow-x-auto">

        <table className="w-full text-sm">

          <thead className="text-gray-500">

            <tr className="border-b bg-gray-50">

              <th className="py-3 text-left font-medium">Subject</th>
              <th className="text-left font-medium">Difficulty</th>
              <th className="text-left font-medium">Marks</th>
              <th className="text-left font-medium">Date</th>
              <th className="text-center font-medium">Actions</th>

            </tr>

          </thead>

          <tbody>

            {papers.map((paper, index) => (

              <tr
                key={index}
                className="border-b last:border-none hover:bg-purple-50 transition"
              >

                {/* Subject */}
                <td className="py-4 font-medium text-gray-800">
                  {paper.subject}
                </td>

                {/* Difficulty badge */}
                <td>
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${getDifficultyStyle(paper.difficulty)}`}>
                    {paper.difficulty}
                  </span>
                </td>

                {/* Marks */}
                <td className="text-gray-700 font-medium">
                  {paper.marks} Marks
                </td>

                {/* Date */}
                <td className="text-gray-500">
                  {paper.date}
                </td>

                {/* Actions */}
                <td className="flex justify-center gap-2 py-3">

                  {/* View */}
                  <button className="flex items-center gap-1 rounded-lg bg-purple-100 px-3 py-1 text-purple-700 hover:bg-purple-200 transition">
                    <Eye size={16} />
                    View
                  </button>

                  {/* Download */}
                  <button className="flex items-center gap-1 rounded-lg bg-green-100 px-3 py-1 text-green-700 hover:bg-green-200 transition">
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
  );
}

export default RecentPapers;