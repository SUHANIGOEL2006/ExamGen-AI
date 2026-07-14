import {
  FileText,
  BookOpen,
  Download,
  Trophy,
} from "lucide-react";

function DashboardCards() {

  const cards = [
    {
      title: "Papers Generated",
      value: 24,
      icon: FileText,
    },
    {
      title: "Subjects",
      value: 6,
      icon: BookOpen,
    },
    {
      title: "Downloads",
      value: 15,
      icon: Download,
    },
    {
      title: "This Month",
      value: 9,
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