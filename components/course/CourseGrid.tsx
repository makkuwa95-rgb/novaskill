"use client";

import CourseCard from "@/components/cards/CourseCard";
import EmptyState from "@/components/course/EmptyState";

interface CourseGridProps {
  courses: any[];
  search: string;
  category: string;
  level: string;
  sort: string;
  page: number;
  perPage: number;
}

export default function CourseGrid({
  courses,
  search,
  category,
  level,
  sort,
  page,
  perPage,
}: CourseGridProps) {
  const filteredCourses = [...courses]
    .filter((course) => {
      const matchesSearch = course.title
        ?.toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        course.category?.toLowerCase() === category.toLowerCase();

      const matchesLevel =
        level === "All" ||
        course.level?.toLowerCase() === level.toLowerCase();

      return (
        matchesSearch &&
        matchesCategory &&
        matchesLevel
      );
    })
    .sort((a, b) => {
      switch (sort) {
        case "rating":
          return (
            parseFloat(b.rating || "0") -
            parseFloat(a.rating || "0")
          );

        case "low-price":
          return (
            parseFloat(
              (a.price || "$0").replace("$", "")
            ) -
            parseFloat(
              (b.price || "$0").replace("$", "")
            )
          );

        case "high-price":
          return (
            parseFloat(
              (b.price || "$0").replace("$", "")
            ) -
            parseFloat(
              (a.price || "$0").replace("$", "")
            )
          );

        case "students":
          return (
            parseFloat(
              (b.students || "0").replace(/[^0-9.]/g, "")
            ) -
            parseFloat(
              (a.students || "0").replace(/[^0-9.]/g, "")
            )
          );

        default:
          return Number(b.featured) - Number(a.featured);
      }
    });

  if (filteredCourses.length === 0) {
    return <EmptyState />;
  }

  const startIndex = (page - 1) * perPage;

  const paginatedCourses = filteredCourses.slice(
    startIndex,
    startIndex + perPage
  );

  return (
    <>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-3xl font-bold text-white">
          Available Courses
        </h2>

        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
          {filteredCourses.length} Course
          {filteredCourses.length !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {paginatedCourses.map((course) => (
          <CourseCard
            key={course.id}
            {...course}
          />
        ))}
      </div>
    </>
  );
}