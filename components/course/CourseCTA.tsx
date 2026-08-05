"use client";

import { Button } from "@/components/ui/button";
import type { Course } from "@/types/course";

interface CourseCTAProps {
  course: Course;
}

export default function CourseCTA({
  course,
}: CourseCTAProps) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">

        <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-12 text-center">

          <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-300">
            {course.level}
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Enroll in {course.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Start your learning journey today and master{" "}
            <span className="font-semibold text-cyan-400">
              {course.title}
            </span>{" "}
            through hands-on projects, expert guidance, and industry-ready
            skills.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">

            <span className="text-4xl font-bold text-cyan-400">
              {course.price}
            </span>

            <Button className="h-14 px-10 text-lg">
              Enroll Now
            </Button>

          </div>

        </div>

      </div>
    </section>
  );
}