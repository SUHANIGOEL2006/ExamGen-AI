import {
  FileText,
  BookOpen,
  Download,
  Trophy,
} from "lucide-react";

function DashboardCards({ papers }) {

  const totalPapers = papers.length;

  const totalSubjects = new Set(
    papers.map((paper) => paper.subject)
  ).size;

  const totalDownloads = papers.length;

  const thisMonth = papers.filter((paper) => {
    const created = new Date(paper.created_at);
    const today = new Date();

    return (
      created.getMonth() === today.getMonth() &&
      created.getFullYear() === today.getFullYear()
    );
  }).length;

  const cards = [
    {
      title: "Papers Generated",
      value: totalPapers,
      subtitle: "Total question papers",
      icon: FileText,
    },
    {
      title: "Subjects",
      value: totalSubjects,
      subtitle: "Different subjects",
      icon: BookOpen,
    },
    {
      title: "Downloads",
      value: totalDownloads,
      subtitle: "PDF downloads",
      icon: Download,
    },
    {
      title: "This Month",
      value: thisMonth,
      subtitle: "Generated this month",
      icon: Trophy,
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => {

        const Icon = card.icon;

        return (

          <div
            key={card.title}
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-gray-500">
                  {card.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
                  {card.value}
                </h2>

                <p className="mt-2 text-sm text-gray-400">
                  {card.subtitle}
                </p>

              </div>

              <div className="rounded-xl bg-purple-100 p-4">

                <Icon
                  size={28}
                  className="text-purple-700"
                />

              </div>

            </div>

          </div>

        );

      })}

    </div>
  );
}

export default DashboardCards;