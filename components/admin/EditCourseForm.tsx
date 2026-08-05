"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { updateCourse } from "@/lib/course-admin";
import type { Course } from "@/types/course";

interface Props {
  course: Course;
}

export default function EditCourseForm({ course }: Props) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState(course.title);
  const [category, setCategory] = useState(course.category);
  const [level, setLevel] = useState(course.level);
  const [price, setPrice] = useState(course.price);
  const [duration, setDuration] = useState(course.duration);
  const [description, setDescription] = useState(course.description);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      await updateCourse(course.slug, {
        title,
        category,
        level,
        price,
        duration,
        description,
      });

      alert("Course Updated Successfully!");

      router.push("/admin/courses");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to update course.");
    }

    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-zinc-800 bg-zinc-900 p-8"
    >
      <div>
        <label className="mb-2 block text-sm text-zinc-300">
          Course Title
        </label>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 text-white"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-zinc-300">
            Category
          </label>

          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 text-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-300">
            Level
          </label>

          <input
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 text-white"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-zinc-300">
            Price
          </label>

          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 text-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-300">
            Duration
          </label>

          <input
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 text-white"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm text-zinc-300">
          Description
        </label>

        <textarea
          rows={6}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 text-white"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-white hover:bg-cyan-400 disabled:opacity-50"
      >
        {loading ? "Updating..." : "Update Course"}
      </button>
    </form>
  );
}