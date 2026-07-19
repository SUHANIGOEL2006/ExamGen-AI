import { BadgeCheck, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Preview() {
  const features = [
    "Latest CBSE Pattern",
    "Competency Based Questions",
    "AI Generated Papers",
    "Chapter-wise Papers",
    "Printable PDF",
    "Answer Key Included",
  ];
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-700 via-indigo-700 to-purple-900 py-24">

      {/* Background Blur */}

      <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-pink-500/30 blur-[120px]" />

      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-medium text-white backdrop-blur">

            AI Powered Question Paper Generator

          </span>

          <h2 className="mt-8 text-5xl font-extrabold leading-tight text-white">

            Generate Beautiful
            <br />
            CBSE Question Papers

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-purple-100">

            Generate professional competency-based question papers
            with beautiful formatting and one-click PDF export.

          </p>

        </div>

        {/* Main Grid */}

        <div className="mt-24 grid items-center gap-20 lg:grid-cols-2">

          {/* ================= LEFT ================= */}

          <div className="relative flex justify-center">

            {/* Purple Glow */}

            <div className="absolute top-10 h-[92%] w-[92%] rounded-3xl bg-gradient-to-br from-purple-300 via-fuchsia-200 to-indigo-200 opacity-50 blur-3xl"></div>

            {/* Paper */}

            <div
              className="
              relative
              aspect-[1/1.414]
              w-[480px]
              rotate-2
              rounded-md
              bg-white
              p-10
              shadow-[0_30px_60px_rgba(0,0,0,0.25)]
              transition-all
              duration-500
              hover:rotate-0
              hover:scale-[1.02]
              "
            >

              {/* Top */}

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-2xl font-bold">

                    ExamGen AI

                  </h3>

                  <p className="text-sm text-gray-500">

                    AI Generated Question Paper

                  </p>

                </div>

                <span className="rounded-full bg-purple-100 px-4 py-2 text-xs font-semibold text-purple-700">

                  CBSE 2026

                </span>

              </div>

              <hr className="my-6" />

              {/* Header */}

              <div className="text-center">


                <h1 className="text-xl font-extrabold uppercase tracking-widest">

                  Central Board of

                </h1>

                <h1 className="text-xl font-extrabold uppercase tracking-widest">

                  Secondary Education

                </h1>

                <h2 className="mt-3 text-lg font-bold">

                  SAMPLE QUESTION PAPER

                </h2>

                <p className="mt-2 text-sm text-gray-500">

                  Academic Session 2026–27

                </p>

              </div>

              <hr className="my-6" />

              {/* Details */}

              <div className="grid grid-cols-2 gap-3 text-sm">

                <p>
                  <strong>Class :</strong> XII
                </p>

                <p className="text-right">
                  <strong>Subject :</strong> Physics
                </p>

                <p>
                  <strong>Time :</strong> 3 Hours
                </p>

                <p className="text-right">
                  <strong>Marks :</strong> 70
                </p>

              </div>

              <hr className="my-6" />

              {/* Instructions */}

              <h3 className="text-center text-lg font-bold uppercase">

                General Instructions

              </h3>

              <ol className="mt-5 list-decimal space-y-2 pl-6 text-sm text-gray-700">

                <li>All questions are compulsory.</li>

                <li>Read every question carefully.</li>

                <li>Draw neat labelled diagrams wherever required.</li>

                <li>Follow CBSE competency-based pattern.</li>

              </ol>

              <hr className="my-6" />

              {/* Continue in Part 2 */}
                            {/* Section */}

              <div className="mt-6">

                <h3 className="rounded bg-purple-700 py-2 text-center text-base font-bold uppercase text-white">

                  SECTION A

                </h3>

                <p className="mt-2 text-center text-xs italic text-gray-500">
                  Multiple Choice Questions (1 Mark Each)
                </p>

                <div className="mt-5 space-y-4 text-sm">

                  <div className="flex justify-between">
                    <p><strong>Q1.</strong> Define Electric Flux.</p>
                    <strong>1</strong>
                  </div>

                  <div className="flex justify-between">
                    <p><strong>Q2.</strong> State Gauss's Law.</p>
                    <strong>1</strong>
                  </div>

                  <div className="flex justify-between">
                    <p><strong>Q3.</strong> What is Electric Dipole?</p>
                    <strong>1</strong>
                  </div>

                  <div className="flex justify-between">
                    <p><strong>Q4.</strong> Draw Electric Field Lines.</p>
                    <strong>2</strong>
                  </div>

                </div>

              </div>

              <div className="mt-8 border-t pt-5">

                <p className="text-center text-xs text-gray-500">
                  Generated using <strong>ExamGen AI</strong>
                </p>

              </div>

              <button
                disabled
                className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-purple-700 to-indigo-700 py-3 font-semibold text-white opacity-90"
              >
                <Download size={18} />
                Download PDF
              </button>

            </div>

          </div>

                        {/* ================= RIGHT ================= */}

          <div>

            <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-md">
              Built for Students & Teachers
            </span>

            <h2 className="mt-8 text-5xl font-extrabold leading-tight text-white">
              Create Board-Level
              <br />
              Question Papers
              <br />
              in Seconds
            </h2>

            <p className="mt-8 text-lg leading-8 text-purple-100">
              ExamGen AI generates professional CBSE question papers with
              beautiful formatting, competency-based questions, proper
              sections, case studies and printable PDF output.
            </p>

            <div className="mt-12 space-y-5">

              {features.map((feature) => (

                <div
                  key={feature}
                  className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md transition-all duration-300 hover:translate-x-2 hover:bg-white/20"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-purple-700">

                    <BadgeCheck size={22} />

                  </div>

                  <p className="text-lg font-medium text-white">
                    {feature}
                  </p>

                </div>

              ))}

            </div>

            <div className="mt-12 flex gap-5">

              <button onClick={() => token ? navigate("/dashboard") : navigate("/signup")}
              className="rounded-xl bg-white px-8 py-4 font-semibold text-purple-700 transition hover:scale-105">

                Generate Paper

              </button>

              <button onClick={() => { document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });}}
              className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/10">

                Learn More

              </button>

            </div>

          </div>

        </div>

      </div>

       </section>
  );
}

export default Preview;