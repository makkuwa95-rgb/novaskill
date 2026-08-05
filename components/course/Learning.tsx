"use client";

import { CheckCircle2 } from "lucide-react";

const learningPoints = [
  "Understand Artificial Intelligence fundamentals",
  "Build Machine Learning models from scratch",
  "Master Deep Learning and Neural Networks",
  "Work with real-world datasets",
  "Build AI-powered web applications",
  "Learn Prompt Engineering",
  "Use ChatGPT and modern AI tools professionally",
  "Deploy AI projects to production",
  "Create an impressive portfolio",
  "Prepare for AI job interviews",
  "Earn an industry-recognized certificate",
  "Become job-ready as an AI Engineer",
];

export default function Learning() {
  return (
    <section className="border-b border-zinc-800 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-4xl font-bold text-white">
          What You'll Learn
        </h2>

        <p className="mt-3 text-zinc-400">
          Skills you'll gain after completing this course.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          {learningPoints.map((point) => (
            <div
              key={point}
              className="flex items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-cyan-500"
            >
              <CheckCircle2 className="mt-1 h-6 w-6 text-green-400" />

              <p className="text-zinc-300 leading-7">
                {point}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}