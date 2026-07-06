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
      desc: "Select class, subject and chapters.",
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
      desc: "Preview and download PDF.",
    },
  ];

  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-gray-900">
            Generate Your Paper in 4 Simple Steps
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            From selecting a subject to downloading a ready-to-print PDF, everything takes less than a minute.
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step) => (

            <div
              key={step.no}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-purple-300 hover:bg-white hover:shadow-xl"
            >

              <span className="absolute right-5 top-5 text-5xl font-bold text-gray-100">

                {step.no}

              </span>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">

                {step.icon}

              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">

                {step.title}

              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">

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