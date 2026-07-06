import {
  Brain,
  BookOpen,
  FileDown,
  Clock,
  Target,
  ShieldCheck,
} from "lucide-react";

function Feature() {
  const features = [
    {
      icon: <Brain size={26} />,
      title: "AI Powered Generation",
      desc: "Generate unlimited board-level question papers in seconds.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <BookOpen size={26} />,
      title: "Latest CBSE Pattern",
      desc: "Questions follow the newest board exam pattern.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Target size={26} />,
      title: "Custom Difficulty",
      desc: "Choose Easy, Medium or Hard according to your preparation.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: <Clock size={26} />,
      title: "Instant Generation",
      desc: "No waiting. Papers are ready within seconds.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <FileDown size={26} />,
      title: "Download PDF",
      desc: "Beautiful printable PDFs with proper formatting.",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: <ShieldCheck size={26} />,
      title: "Safe & Secure",
      desc: "Your generated papers remain saved in your account.",
      color: "bg-indigo-100 text-indigo-600",
    },
  ];

  return (
    <section className="bg-gray-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-gray-900">
            Everything You Need to Ace Your Exams
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Powerful AI tools designed to help you practice smarter, save time, and boost your confidence.
          </p>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {features.map((item) => (

            <div
  key={item.title}
  className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-lg"
>

  <div
    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.color}`}
  >
    {item.icon}
  </div>

  <div>

    <h3 className="text-lg font-semibold text-gray-900">
      {item.title}
    </h3>

    <p className="mt-2 text-sm leading-6 text-gray-600">
      {item.desc}
    </p>

  </div>

</div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Feature;