"use client";

import { useRouter } from "next/navigation";

import { deleteCourse } from "@/lib/course-admin";

interface DeleteCourseButtonProps {
  slug: string;
}

export default function DeleteCourseButton({
  slug,
}: DeleteCourseButtonProps) {
  const router = useRouter();

  async function handleDelete() {
    const confirmDelete = confirm(
      "Are you sure you want to delete this course?"
    );

    if (!confirmDelete) return;

    try {
      await deleteCourse(slug);

      alert("Course deleted successfully.");

      router.refresh();
    } catch (error) {
      console.error(error);

      alert("Failed to delete course.");
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="text-red-500 hover:text-red-400"
    >
      Delete
    </button>
  );
}