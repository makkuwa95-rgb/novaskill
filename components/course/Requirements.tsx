"use client";

import { Laptop, Wifi, BookOpen, Lightbulb } from "lucide-react";

const requirements = [
  {
    icon: Laptop,
    title: "Laptop or Desktop",
    description: "Windows, macOS or Linux computer.",
  },
  {
    icon: Wifi,
    title: "Internet Connection",
    description: "Stable internet for videos and projects.",
  },
  {
    icon: BookOpen,
    title: "Basic Computer Skills",
    description: "No programming experience required.",
  },
  {
    icon: Lightbulb,
    title: "Passion to Learn",
    description: "Curiosity and consistency are enough.",
  },
];

export default function Requirements() {
  return (
    <section className="border-b border-zinc-800 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-4xl font-bold text-white">
          Course Requirements
        </h2>

        <p className="mt-3 text-zinc-400">
          Everything you need before starting this course.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          {requirements.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-cyan-500"
              >
                <Icon className="h-8 w-8 text-cyan-400" />

                <h3 className="mt-5 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}