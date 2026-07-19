import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
/*import rehypeKatex from "rehype-katex";*/
import "katex/dist/katex.min.css";
import html2pdf from "html2pdf.js";
import { useRef } from "react";
import MainLayout from "../components/layout/MainLayout";
import api from "../api/api";
import { useState } from "react";
import {
  FilePlus2,
  BookOpen,
  BarChart3,
  GraduationCap,
} from "lucide-react";

function GeneratePaper() {
  const [formData, setFormData] = useState({
    className: "",
    subject: "",
    marks: 30,
    difficulty: "Easy",
  });

  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [paper, setPaper] = useState("");
  const paperRef = useRef(null);
  const [pdfUrl, setPdfUrl] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGenerate = async () => {
  try {
    setLoading(true);
    setGenerated(false);
    setPaper("");

    const response = await api.post("/generate-paper", {
      className: formData.className,
      subject: formData.subject,
      marks: Number(formData.marks),
      difficulty: formData.difficulty,
    });

    console.log("Response:", response.data);

    setPaper(response.data.paper);
    setPdfUrl(response.data.pdf_url);
    setGenerated(true);

  } catch (error) {
    console.error(error);
    alert("Something went wrong!");
  } finally {
    setLoading(false);
  }
};
const handleDownloadPDF = () => {

    if (!pdfUrl) return;

    window.open(
        `http://127.0.0.1:8000${pdfUrl}`,
        "_blank"
    );
};

 
  return (
    <MainLayout>

      {/* HEADER */}
      <div className="mb-10">

        <div className="flex items-center gap-2">
          <FilePlus2 className="text-purple-600" />
          <h1 className="text-3xl font-bold text-gray-800">
            Generate Question Paper
          </h1>
        </div>

        <p className="mt-2 text-gray-500">
          Fill details and generate AI-powered exam papers instantly
        </p>

      </div>

      {/* FORM CARD */}
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm border">

        <div className="grid gap-6">

          {/* CLASS */}
          <div>
            <label className="mb-2 flex items-center gap-2 font-medium text-gray-700">
              <GraduationCap size={18} />
              Class
            </label>

            <input
              name="className"
              value={formData.className}
              onChange={handleChange}
              placeholder="e.g. Class 10"
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-purple-400"
            />
          </div>

          {/* SUBJECT */}
          <div>
            <label className="mb-2 flex items-center gap-2 font-medium text-gray-700">
              <BookOpen size={18} />
              Subject
            </label>

            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. Science"
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-purple-400"
            />
          </div>

          {/* MARKS */}
          <div>
            <label className="mb-2 flex items-center gap-2 font-medium text-gray-700">
              <BarChart3 size={18} />
              Marks
            </label>

            <select
              name="marks"
              value={formData.marks}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-purple-400"
            >
              <option value={30}>30 Marks</option>
              <option value={50}>50 Marks</option>
              <option value={60}>60 Marks</option>
              <option value={80}>80 Marks</option>
            </select>
          </div>

          {/* DIFFICULTY */}
          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Difficulty Level
            </label>

            <div className="flex gap-3">

              {["Easy", "Medium", "Hard"].map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, difficulty: level })
                  }
                  className={`w-full rounded-xl border px-4 py-3 transition ${
                    formData.difficulty === level
                      ? "bg-purple-600 text-white"
                      : "hover:bg-purple-50"
                  }`}
                >
                  {level}
                </button>
              ))}

            </div>
          </div>

          {/* GENERATE BUTTON */}
          <button
            onClick={handleGenerate}
            disabled={loading}
            className={`w-full rounded-xl py-3 font-medium transition ${
              loading
                ? "bg-purple-300 cursor-not-allowed"
                : "bg-purple-600 text-white hover:bg-purple-700"
            }`}
          >
            {loading ? "Generating..." : "🚀 Generate Paper"}
          </button>

        </div>

        {/* LOADING STATE */}
        {loading && (
          <div className="mt-8 flex flex-col items-center justify-center rounded-xl border bg-purple-50 py-10">

            <div className="h-10 w-10 animate-spin rounded-full border-4 border-purple-300 border-t-purple-600"></div>

            <p className="mt-4 font-medium text-purple-700">
              Generating your question paper...
            </p>

            <p className="text-sm text-gray-500">
              AI is selecting best questions ✨
            </p>

          </div>
        )}

        {/* OUTPUT SECTION */}
       {/* OUTPUT SECTION */}
{generated && !loading && (
  <div className="mt-10">

    {/* Success Card */}
    <div className="mb-8 rounded-2xl border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 p-6 shadow-sm">

      <div className="flex items-center gap-3">

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-3xl">
          🎉
        </div>

        <div>
          <h2 className="text-2xl font-bold text-green-700">
            Question Paper Generated Successfully
          </h2>

          <p className="mt-1 text-gray-600">
            Your AI-generated question paper is ready. Review it below and download it as a PDF.
          </p>
        </div>

      </div>

    </div>

    {/* Paper Section */}
    <div className="rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 p-10">

      <div
  ref={paperRef}
  className="
    mx-auto
    max-w-5xl
    bg-white
    p-10
    border
    shadow-xl
    rounded-xl
    overflow-auto
    break-words
    whitespace-pre-wrap
  "
>
        <div className="mb-8 flex items-center justify-between border-b pb-5">

  <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
    📄 AI Generated Question Paper
  </span>

  <span className="text-sm text-gray-500">
    Generated by ExamGen AI
  </span>

</div>

        {/* Paper */}
        <div
  className="
prose
max-w-none
overflow-x-auto
break-words
whitespace-pre-wrap

prose-pre:overflow-x-auto

prose-table:block
prose-table:overflow-x-auto

prose-h1:text-3xl
prose-h1:text-center

prose-h2:text-2xl
prose-h2:text-center

prose-h3:text-xl

prose-p:text-[16px]
prose-p:leading-8

prose-li:text-[16px]
prose-li:leading-8

prose-hr:my-10

prose-strong:text-black
"
>
  <ReactMarkdown
  remarkPlugins={[remarkGfm]}
  /*rehypePlugins={[rehypeKatex]}*/
  components={{
    h1: ({ children }) => (
      <h1 className="text-center text-3xl font-bold uppercase my-3">
        {children}
      </h1>
    ),

    h2: ({ children }) => (
      <h2 className="mt-8 mb-4 text-center text-2xl font-bold">
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="mt-6 mb-3 text-xl font-bold">
        {children}
      </h3>
    ),

    p: ({ children }) => (
      <p className="my-3 leading-8">
        {children}
      </p>
    ),

    li: ({ children }) => (
      <li className="my-1">
        {children}
      </li>
    ),

    hr: () => (
      <hr className="my-8 border-gray-400" />
    )

  }}
>
  {paper}
</ReactMarkdown>
</div>

      </div>

    </div>

    {/* Download Button */}
    <div className="mt-8 flex justify-center">

      <button
  onClick={handleDownloadPDF}
  className="rounded-xl bg-green-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-green-700"
>
   Download Question Paper
</button>

    </div>

  </div>
)}
      </div>

    </MainLayout>
  );
}

export default GeneratePaper;