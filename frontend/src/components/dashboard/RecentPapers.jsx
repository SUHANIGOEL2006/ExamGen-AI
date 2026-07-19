import {
  Eye,
  Download,
  FileText,
  Calendar,
  GraduationCap,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useState } from "react";
function RecentPapers({ papers }) {
  const recentPapers = [...papers]
  .reverse()
  .slice(0, 5);

  const [selectedPaper, setSelectedPaper] = useState(null);

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
    <>
    <div className="mt-10 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">

  <div className="flex items-center gap-3">

    <div className="rounded-xl bg-purple-100 p-2">
      <FileText
        className="text-purple-700"
        size={22}
      />
    </div>

    <div>

      <h2 className="text-xl font-bold text-gray-800">
        Recently Generated Papers
      </h2>

      <p className="text-sm text-gray-500">
        Your latest AI generated question papers
      </p>

    </div>

  </div>

  <Link
    to="/history"
    className="rounded-lg bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 transition hover:bg-purple-200"
  >
    View All →
  </Link>

</div>

      {/* Table */}
      <div className="overflow-x-auto">

        <table className="w-full text-sm">

          <thead className="bg-gray-50 text-gray-600">

            <tr>

              <th className="py-3 text-left font-medium">Subject</th>
              <th className="text-left font-medium">Difficulty</th>
              <th className="text-left font-medium">Marks</th>
              <th className="text-left font-medium">Date</th>
              <th className="text-center font-medium">Actions</th>

            </tr>

          </thead>

          <tbody>

            {recentPapers.map((paper, index) => (

              <tr
                key={index}
                className="border-b last:border-none transition duration-200 hover:bg-purple-50"
              >

                {/* Subject */}
               <td className="py-4">

  <div className="flex items-center gap-3">

   <p className="font-semibold text-gray-800">
  {paper.subject}
  <span className="ml-2 text-sm font-normal text-gray-500">
    ({paper.className})
  </span>
</p>

  </div>

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
                <td>

  <div className="flex items-center gap-2 text-gray-500">

    <Calendar size={15} />

    {new Date(paper.created_at).toLocaleString()}

  </div>

</td>

                {/* Actions */}
                <td className="py-3">
                  <div className="flex justify-center gap-2">

                  {/* View */}
                  <button title="View Paper" onClick={() => setSelectedPaper(paper)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-700 transition hover:scale-105 hover:bg-purple-200"
>
                    <Eye size={16} />
                  </button>

                  {/* Download */}
                  <button onClick={() =>
                  window.open("http://127.0.0.1:8000/download-pdf")
                  }title="Download PDF"
  className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-700 transition hover:scale-105 hover:bg-green-200">
                    <Download size={16} />
                  </button>
                </div>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

    {selectedPaper && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

    <div className="relative max-h-[85vh] w-11/12 max-w-4xl overflow-y-auto rounded-2xl bg-white p-6">

      {/* Sticky Header */}
      <div className="sticky top-0 z-10 -mx-6 -mt-6 mb-6 flex items-center justify-between border-b bg-white px-6 py-4">

        <h2 className="text-2xl font-bold text-purple-700">
          {selectedPaper.subject} Question Paper
        </h2>

        <button
          onClick={() => setSelectedPaper(null)}
          className="rounded-lg bg-red-100 px-4 py-2 text-red-600 hover:bg-red-200"
        >
          Close
        </button>

      </div>

      {/* Details */}
      <div className="mb-5 flex flex-wrap gap-3">

        <span className="rounded-full bg-purple-100 px-3 py-1">
          {selectedPaper.className}
        </span>

        <span className="rounded-full bg-green-100 px-3 py-1">
          {selectedPaper.marks} Marks
        </span>

        <span className="rounded-full bg-yellow-100 px-3 py-1">
          {selectedPaper.difficulty}
        </span>

      </div>

      <pre className="whitespace-pre-wrap rounded-xl bg-gray-100 p-5 leading-8">
        {selectedPaper.paper}
      </pre>

      {/* Bottom Close */}
      <div className="mt-6 flex justify-end">

        <button
          onClick={() => setSelectedPaper(null)}
          className="rounded-lg bg-red-100 px-4 py-2 text-red-600 hover:bg-red-200"
        >
          Close
        </button>

      </div>

    </div>

  </div>
)}
</>
  );
}

export default RecentPapers;