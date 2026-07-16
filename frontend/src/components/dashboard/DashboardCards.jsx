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
    icon: FileText,
  },
  {
    title: "Subjects",
    value: totalSubjects,
    icon: BookOpen,
  },
  {
    title: "Downloads",
    value: totalDownloads,
    icon: Download,
  },
  {
    title: "This Month",
    value: thisMonth,
    icon: Trophy,
  },
];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => {

        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border border-purple-100 bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-xl"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-500">
                  {card.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold">
                  {card.value}
                </h2>

              </div>

              <div className="rounded-xl bg-purple-100 p-4">

                <Icon
                  className="text-purple-700"
                  size={28}
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