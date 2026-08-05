import { ArrowRight } from "lucide-react";

const courses = [
  {
    title: "Artificial Intelligence",
    progress: 72,
    image: "/images/courses/ai.jpg",
  },
  {
    title: "Full Stack Web Development",
    progress: 48,
    image: "/images/courses/web.jpg",
  },
  {
    title: "Cyber Security",
    progress: 90,
    image: "/images/courses/cyber.jpg",
  },
];

export default function ContinueLearning() {
  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">
          Continue Learning
        </h2>

        <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
          View All
          <ArrowRight size={18} />
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.title}
            className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition hover:border-cyan-500"
          >
            <img
              src={course.image}
              alt={course.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">
                {course.title}
              </h3>

              <div className="mt-5">
                <div className="mb-2 flex justify-between text-sm text-zinc-400">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>

                <div className="h-2 rounded-full bg-zinc-700">
                  <div
                    className="h-2 rounded-full bg-cyan-500"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>

              <button className="mt-6 w-full rounded-xl bg-cyan-500 py-3 font-semibold text-white hover:bg-cyan-400">
                Continue
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}