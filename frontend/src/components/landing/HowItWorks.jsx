import {
  BookOpen,
  Settings2,
  Sparkles,
  Download,
} from "lucide-react";

function HowItWorks() {

  const steps = [
    {
      no: "01",
      icon: <BookOpen size={26} />,
      title: "Choose Subject",
      desc: "Select your class, subject and chapters.",
    },
    {
      no: "02",
      icon: <Settings2 size={26} />,
      title: "Customize",
      desc: "Choose marks and difficulty level.",
    },
    {
      no: "03",
      icon: <Sparkles size={26} />,
      title: "Generate",
      desc: "AI instantly creates a unique paper.",
    },
    {
      no: "04",
      icon: <Download size={26} />,
      title: "Download",
      desc: "Preview and download the PDF.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="bg-white py-16 md:py-24"
    >

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700">
            How It Works
          </span>

          <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Generate Your Paper in
            <span className="text-purple-600"> 4 Simple Steps</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            From selecting a subject to downloading a ready-to-print PDF,
            everything takes less than a minute.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

          {steps.map((step, index) => (

            <div
              key={step.no}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-purple-300 hover:bg-white hover:shadow-xl"
            >

              {/* Step Number */}

              <div className="absolute right-5 top-5 text-6xl font-extrabold text-gray-100 transition group-hover:text-purple-100">

                {step.no}

              </div>

              {/* Connector Line */}

              {index !== steps.length - 1 && (
                <div className="absolute right-[-35px] top-14 hidden h-[2px] w-16 bg-purple-200 xl:block"></div>
              )}

              {/* Icon */}

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 transition-transform duration-300 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white">

                {step.icon}

              </div>

              {/* Content */}

              <h3 className="mt-6 text-xl font-bold text-gray-900">

                {step.title}

              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">

                {step.desc}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;