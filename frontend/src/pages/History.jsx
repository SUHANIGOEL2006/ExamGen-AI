import {useEffect, useState} from "react";
import MainLayout from "../components/layout/MainLayout";
import { Eye, Download, FileText } from "lucide-react";
import api from "../api/api";

function History() {
  const [historyData, setHistoryData] = useState([]);
  const [selectedPaper, setSelectedPaper] = useState(null);

  useEffect(() => {
    fetchPapers();
  }, []);

  const fetchPapers = async () => {
    try {
      const response = await api.get("/papers");
      setHistoryData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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

    {historyData.map((item) => (

      <tr
        key={item._id}
        className="border-b last:border-none transition duration-200 hover:bg-purple-50"
      >

        <td className="py-4">

          <div>

            <p className="font-semibold text-gray-800">
              {item.subject}
              <span className="ml-2 text-sm font-normal text-gray-500">
              ({item.className})
              </span>
            </p>

          </div>

        </td>

        <td>

          <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
            {item.difficulty}
          </span>

        </td>

        <td className="font-medium text-gray-700">
          {item.marks} Marks
        </td>

        <td className="text-gray-500">
          {new Date(item.created_at).toLocaleString()}
        </td>

        <td>

          <div className="flex justify-center gap-2">

            <button
              title="View Paper"
              onClick={() => setSelectedPaper(item)}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-700 transition hover:scale-105 hover:bg-purple-200"
            >
              <Eye size={16} />
            </button>

            <button
              title="Download PDF"
              onClick={() =>
                window.open(`http://127.0.0.1:8000/download-pdf/${item.pdf_name}`)
              }
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-700 transition hover:scale-105 hover:bg-green-200"
            >
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

    <div className="max-h-[85vh] w-11/12 max-w-4xl overflow-y-auto rounded-2xl bg-white p-6">

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

      <div className="mb-5 flex gap-3">

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

    </div>

  </div>
)}

    </MainLayout>
  );
}

export default History;