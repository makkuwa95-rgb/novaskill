import Link from "next/link";

import { getAllCourses } from "@/lib/course-admin";
import DeleteCourseButton from "@/components/admin/DeleteCourseButton";

export default async function AdminCoursesPage() {
  const courses: any[] = await getAllCourses();

  return (
    <div className="mx-auto max-w-7xl p-8">

      {/* Header */}

      <div className="mb-10 flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold text-white">
            Courses
          </h1>

          <p className="mt-2 text-zinc-400">
            Manage all courses from your admin dashboard.
          </p>

        </div>

        <Link
          href="/admin/courses/new"
          className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-400"
        >
          + Add Course
        </Link>

      </div>

      {/* Empty State */}

      {courses.length === 0 ? (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 py-20 text-center">

          <h2 className="text-2xl font-semibold text-white">
            No Courses Found
          </h2>

          <p className="mt-3 text-zinc-400">
            Add your first course to Firestore.
          </p>

        </div>
      ) : (

        <div className="overflow-hidden rounded-2xl border border-zinc-800">

          <table className="w-full">

            <thead className="bg-zinc-900">

              <tr>

                <th className="px-6 py-5 text-left text-sm font-semibold text-zinc-300">
                  Title
                </th>

                <th className="px-6 py-5 text-left text-sm font-semibold text-zinc-300">
                  Category
                </th>

                <th className="px-6 py-5 text-left text-sm font-semibold text-zinc-300">
                  Level
                </th>

                <th className="px-6 py-5 text-left text-sm font-semibold text-zinc-300">
                  Price
                </th>

                <th className="px-6 py-5 text-left text-sm font-semibold text-zinc-300">
                  Students
                </th>

                <th className="px-6 py-5 text-left text-sm font-semibold text-zinc-300">
                  Rating
                </th>

                <th className="px-6 py-5 text-center text-sm font-semibold text-zinc-300">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {courses.map((course) => (

                <tr
                  key={course.id}
                  className="border-t border-zinc-800 hover:bg-zinc-900/60"
                >

                  <td className="px-6 py-5 font-medium text-white">
                    {course.title}
                  </td>

                  <td className="px-6 py-5 text-zinc-400">
                    {course.category}
                  </td>

                  <td className="px-6 py-5 text-zinc-400">
                    {course.level}
                  </td>

                  <td className="px-6 py-5 text-cyan-400">
                    {course.price}
                  </td>

                  <td className="px-6 py-5 text-zinc-400">
                    {course.students}
                  </td>

                  <td className="px-6 py-5 text-yellow-400">
                    ⭐ {course.rating}
                  </td>

                  <td className="px-6 py-5">

                    <div className="flex items-center justify-center gap-5">

                      <Link
                        href={`/admin/courses/${course.slug}/edit`}
                        className="font-medium text-cyan-400 hover:text-cyan-300"
                      >
                        Edit
                      </Link>

                      <DeleteCourseButton
                        slug={course.slug}
                      />

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );
}