import { BadgeCheck } from "lucide-react";

function Preview() {
  const features = [
    "Latest CBSE Pattern",
    "AI Generated Questions",
    "Chapter-wise Papers",
    "Custom Difficulty Levels",
    "Printable PDF",
    "Answer Key Included",
  ];

  return (
    <section className="bg-gradient-to-b from-white to-purple-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-4xl font-bold text-gray-900">
            See What You'll Generate
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Preview a beautifully formatted AI-generated question paper
            designed according to the latest CBSE board pattern.
          </p>

        </div>

        {/* Content */}

        <div className="mt-20 grid items-center gap-14 lg:grid-cols-2">

          {/* ========================= */}
          {/* Left Side - Question Paper */}
          {/* ========================= */}

          <div className="mx-auto w-full max-w-lg rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">

            {/* Top */}

            <div className="flex items-start justify-between">

              <div>

                <h3 className="text-2xl font-bold text-gray-900">
                  ExamGen AI
                </h3>

                <p className="text-sm text-gray-500">
                  AI Generated Question Paper
                </p>

              </div>

              <span className="rounded-full bg-purple-100 px-4 py-2 text-xs font-semibold text-purple-700">
                AI Generated
              </span>

            </div>

            <div className="my-6 border-t"></div>

            {/* Title */}

            <h2 className="text-center text-xl font-bold tracking-wide text-gray-900">
              CBSE SAMPLE QUESTION PAPER
            </h2>

            <div className="mt-6 flex justify-between text-sm text-gray-700">

              <span>
                <strong>Class:</strong> XII
              </span>

              <span>
                <strong>Subject:</strong> Physics
              </span>

            </div>

            <div className="mt-2 flex justify-between text-sm text-gray-700">

              <span>
                <strong>Marks:</strong> 70
              </span>

              <span>
                <strong>Time:</strong> 3 Hours
              </span>

            </div>

            <div className="my-6 border-t"></div>

            {/* Instructions */}

            <h4 className="font-semibold uppercase tracking-wide text-gray-900">
              General Instructions
            </h4>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-gray-600">

              <li>All questions are compulsory.</li>

              <li>Read each question carefully before answering.</li>

              <li>Use neat diagrams wherever required.</li>

            </ul>

            <div className="my-6 border-t"></div>

            {/* Questions */}

            <h4 className="font-semibold text-gray-900">
              Section A
            </h4>

            <div className="mt-5 space-y-4 text-sm text-gray-700">

              <div className="flex justify-between">
                <span>Q1. Define Electric Flux.</span>
                <span>2</span>
              </div>

              <div className="flex justify-between">
                <span>Q2. State Gauss's Law.</span>
                <span>2</span>
              </div>

              <div className="flex justify-between">
                <span>Q3. Explain Coulomb's Law.</span>
                <span>3</span>
              </div>

              <div className="flex justify-between">
                <span>Q4. Draw Electric Field Lines for a Dipole.</span>
                <span>3</span>
              </div>

            </div>

            <button
              disabled
              className="mt-10 w-full cursor-not-allowed rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 py-3 font-semibold text-white opacity-80"
            >
              Download PDF
            </button>

          </div>

          {/* ========================= */}
          {/* Right Side */}
          {/* ========================= */}

          <div>

            <h3 className="text-4xl font-bold leading-tight text-gray-900">
              Everything You Need
              <br />
              to Prepare Smarter
            </h3>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              ExamGen AI creates professional board-level question papers
              tailored to your preferences, helping you practice more
              efficiently and confidently.
            </p>

            <div className="mt-10 space-y-5">

              {features.map((feature) => (

                <div
                  key={feature}
                  className="flex items-center gap-4 rounded-2xl border border-purple-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-lg"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-100 text-purple-600">

                    <BadgeCheck size={22} />

                  </div>

                  <p className="font-medium text-gray-700">
                    {feature}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Preview;