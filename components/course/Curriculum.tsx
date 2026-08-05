"use client";

import { BookOpen, Clock, PlayCircle } from "lucide-react";

const curriculum = [
  {
    module: "Module 1",
    title: "Introduction to Artificial Intelligence",
    lessons: 8,
    duration: "2 Hours",
  },
  {
    module: "Module 2",
    title: "Machine Learning Fundamentals",
    lessons: 12,
    duration: "4 Hours",
  },
  {
    module: "Module 3",
    title: "Deep Learning & Neural Networks",
    lessons: 10,
    duration: "5 Hours",
  },
  {
    module: "Module 4",
    title: "Real World AI Projects",
    lessons: 15,
    duration: "8 Hours",
  },
  {
    module: "Module 5",
    title: "Career & Certification",
    lessons: 5,
    duration: "1.5 Hours",
  },
];

export default function Curriculum() {
  return (
    <section className="border-b border-zinc-800 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-4xl font-bold text-white">
          Course Curriculum
        </h2>

        <p className="mt-3 text-zinc-400">
          Everything you'll learn throughout this course.
        </p>

        <div className="mt-10 space-y-5">

          {curriculum.map((item) => (
            <div
              key={item.module}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-cyan-500"
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                <div>

                  <div className="flex items-center gap-3">

                    <BookOpen className="h-6 w-6 text-cyan-400" />

                    <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-300">
                      {item.module}
                    </span>

                  </div>

                  <h3 className="mt-4 text-2xl font-semibold text-white">
                    {item.title}
                  </h3>

                </div>

                <div className="flex gap-8">

                  <div className="flex items-center gap-2 text-zinc-400">
                    <PlayCircle className="h-5 w-5 text-cyan-400" />
                    {item.lessons} Lessons
                  </div>

                  <div className="flex items-center gap-2 text-zinc-400">
                    <Clock className="h-5 w-5 text-cyan-400" />
                    {item.duration}
                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}