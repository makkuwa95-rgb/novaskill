import {
  BookOpen,
  GraduationCap,
  Heart,
  Trophy,
} from "lucide-react";

const stats = [
  {
    title: "Enrolled Courses",
    value: "12",
    icon: BookOpen,
    color: "text-cyan-400",
  },
  {
    title: "Completed",
    value: "5",
    icon: GraduationCap,
    color: "text-green-400",
  },
  {
    title: "Certificates",
    value: "3",
    icon: Trophy,
    color: "text-yellow-400",
  },
  {
    title: "Wishlist",
    value: "8",
    icon: Heart,
    color: "text-pink-400",
  },
];

export default function DashboardStats() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-cyan-500"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-400">
                  {item.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-white">
                  {item.value}
                </h2>
              </div>

              <Icon className={`h-9 w-9 ${item.color}`} />
            </div>
          </div>
        );
      })}
    </section>
  );
}