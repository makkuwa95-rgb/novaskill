import Link from "next/link";
import Image from "next/image";

import { courses } from "@/data/courses";

export const metadata = {
  title: "Courses | NovaSkill",
  description:
    "Explore AI, Web Development, Cyber Security and professional technology courses.",
};

export default function CoursesPage() {
  return (
    <section className="bg-[#020617] min-h-screen py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="text-cyan-400 uppercase tracking-widest">
            NovaSkill Courses
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            Master Future Skills
          </h1>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Learn industry-ready skills from expert instructors.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.slug}`}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden hover:border-cyan-400 transition"
            >
              <div className="relative h-52">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold">
                  {course.title}
                </h2>

                <p className="mt-3 text-gray-400">
                  {course.description.slice(0, 120)}...
                </p>

                <div className="mt-5 flex justify-between text-sm">
                  <span>{course.level}</span>

                  <span className="text-cyan-400">
                    {course.price}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}