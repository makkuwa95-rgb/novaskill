"use client";

import Link from "next/link";

import CourseCard from "@/components/cards/CourseCard";
import type { Course } from "@/types/course";

interface RelatedCoursesProps {
  courses: Course[];
}

export default function RelatedCourses({
  courses,
}: RelatedCoursesProps) {
  if (!courses || courses.length === 0) {
    return null;
  }

  return (
    <section className="border-b border-zinc-800 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-4xl font-bold text-white">
          Related Courses
        </h2>

        <p className="mt-3 text-zinc-400">
          Continue your learning journey with these courses.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              slug={course.slug}
              title={course.title}
              level={course.level}
              duration={course.duration}
              students={course.students}
              rating={course.rating}
              price={course.price}
              image={course.image}
              imageColor={course.imageColor}
              featured={course.featured}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/courses"
            className="inline-flex rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white transition hover:bg-cyan-400"
          >
            View All Courses
          </Link>
        </div>

      </div>
    </section>
  );
}