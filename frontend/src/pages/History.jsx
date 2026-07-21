import {useEffect, useState} from "react";
import MainLayout from "../components/layout/MainLayout";
import { Eye, Download, FileText, Search, ArrowUpDown} from "lucide-react";
import api from "../api/api";

function History() {
  const [historyData, setHistoryData] = useState([]);
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    fetchPapers();
  }, []);

  const filteredData = [...historyData]
  .filter((item) => {
    const value = search.toLowerCase();

    return (
      item.subject.toLowerCase().includes(value) ||
      item.className.toLowerCase().includes(value) ||
      item.difficulty.toLowerCase().includes(value) ||
      item.marks.toString().includes(value)
    );
  })
  .sort((a, b) => {
    switch (sortBy) {
      case "marksLow":
        return a.marks - b.marks;

      case "marksHigh":
        return b.marks - a.marks;

      case "easy":
        return a.difficulty.localeCompare(b.difficulty);

      case "hard":
        return b.difficulty.localeCompare(a.difficulty);

      case "latest":
        return new Date(b.created_at) - new Date(a.created_at);

      case "oldest":
        return new Date(a.created_at) - new Date(b.created_at);

      default:
        return 0;
    }
  });

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

      <div className="mb-7 flex items-center gap-3">

  {/* Search */}

  <div className="relative flex-1">

    <Search
      size={18}
      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
    />

    <input
      type="text"
      placeholder="Search by subject, class, marks..."
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 shadow-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
    />

  </div>

  {/* Sort */}

  <div className="relative">

    <select
      value={sortBy}
      onChange={(e)=>setSortBy(e.target.value)}
      className="
      appearance-none
      rounded-xl
      border
      border-gray-200
      bg-white
      py-3
      pl-11
      pr-9
      shadow-sm
      cursor-pointer
      hover:border-purple-400
      focus:border-purple-500
      focus:ring-2
      focus:ring-purple-100
      "
    >

      <option value="">Sort By</option>
      <option value="latest">Latest</option>
      <option value="oldest">Oldest</option>
      <option value="marksHigh">Highest Marks</option>
      <option value="marksLow">Lowest Marks</option>
      <option value="easy">Easy First</option>
      <option value="hard">Hard First</option>

    </select>

    <ArrowUpDown
      size={17}
      className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-600"
    />

  </div>

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

    {filteredData.map((item) => (

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
  <span
    className={`rounded-full px-3 py-1 text-xs font-medium ${getDifficultyStyle(
      item.difficulty
    )}`}
  >
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

        <span
  className={`rounded-full px-3 py-1 text-sm font-medium ${getDifficultyStyle(
    selectedPaper.difficulty
  )}`}
>
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