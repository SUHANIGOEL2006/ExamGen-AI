import {
  FileText,
  Target,
  Zap,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

function Hero() {
  return (
    <section className="bg-white">

      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-center justify-center px-6 py-16 text-center">

        
        {/* Heading */}

        <h1 className="mt-8 max-w-5xl text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">

          Generate

          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            {" "}
            Board-Level{" "}
          </span>

          Question Papers in Seconds


        </h1>

        {/* Description */}

        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600">

          Create unlimited CBSE practice papers using Artificial Intelligence.

          Select your class, subject, chapters, marks and difficulty level,

          then download a beautifully formatted PDF instantly.

        </p>

        {/* Buttons */}

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          <button className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">

            Generate Paper

            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

          </button>

          <button className="rounded-xl border border-purple-300 px-8 py-4 font-semibold text-purple-700 transition duration-300 hover:bg-purple-50">
            Learn More
          </button>

        </div>

        {/* Highlights */}

        {/* Highlights */}

<div className="mt-16 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">

  {/* Card 1 */}

  <div className="group rounded-2xl border border-purple-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-purple-400 hover:shadow-xl">

    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
      <FileText size={28} />
    </div>

    <h3 className="mt-5 text-xl font-bold text-gray-900">
      Unlimited Papers
    </h3>

    <p className="mt-2 leading-7 text-gray-600">
      Generate unlimited board-level practice papers whenever you need.
    </p>

  </div>

  {/* Card 2 */}

  <div className="group rounded-2xl border border-purple-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-purple-400 hover:shadow-xl">

    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
      <Target size={28} />
    </div>

    <h3 className="mt-5 text-xl font-bold text-gray-900">
      Custom Difficulty
    </h3>

    <p className="mt-2 leading-7 text-gray-600">
      Create Easy, Medium or Hard papers based on your preparation.
    </p>

  </div>

  {/* Card 3 */}

  <div className="group rounded-2xl border border-purple-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-purple-400 hover:shadow-xl">

    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
      <Zap size={28} />
    </div>

    <h3 className="mt-5 text-xl font-bold text-gray-900">
      Instant PDF
    </h3>

    <p className="mt-2 leading-7 text-gray-600">
      Download beautifully formatted question papers as PDFs in seconds.
    </p>

  </div>

</div>

       
      </div>

    </section>
  );
}

export default Hero;