"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { createCourse } from "@/lib/course-admin";
import type { Course } from "@/types/course";

export default function NewCoursePage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("AI");
  const [level, setLevel] = useState("Beginner");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      const slug = title
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");

      const course: Course = {
        id: slug,
        slug,
        title,
        description,
        category,
        level,
        duration,
        students: "0",
        rating: "0",
        price,
        image: "/images/courses/default.jpg",
        imageColor: "from-cyan-500 to-blue-600",
        featured: false,
        curriculum: [],
      };

      await createCourse(course);

      alert("✅ Course Added Successfully!");

      setTitle("");
      setCategory("AI");
      setLevel("Beginner");
      setPrice("");
      setDuration("");
      setDescription("");

      router.push("/admin/courses");
    } catch (error) {
      console.error(error);
      alert("❌ Failed to add course.");
    }

    setLoading(false);
  }

  return (
    <div className="mx-auto max-w-4xl p-8">

      <h1 className="mb-8 text-4xl font-bold text-white">
        Add New Course
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-2xl border border-zinc-800 bg-zinc-900 p-8"
      >

        {/* Course Title */}

        <div>
          <label className="mb-2 block text-sm text-zinc-300">
            Course Title
          </label>

          <input
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Artificial Intelligence"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 text-white outline-none focus:border-cyan-500"
          />
        </div>

        {/* Category & Level */}

        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <label className="mb-2 block text-sm text-zinc-300">
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 text-white"
            >
              <option>AI</option>
              <option>Web</option>
              <option>Cyber Security</option>
              <option>Data Science</option>
              <option>Cloud</option>
              <option>Design</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm text-zinc-300">
              Level
            </label>

            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 text-white"
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Professional</option>
            </select>
          </div>

        </div>

        {/* Price & Duration */}

        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <label className="mb-2 block text-sm text-zinc-300">
              Price
            </label>

            <input
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="$99"
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 text-white outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-zinc-300">
              Duration
            </label>

            <input
              required
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="12 Weeks"
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 text-white outline-none focus:border-cyan-500"
            />
          </div>

        </div>

        {/* Description */}

        <div>
          <label className="mb-2 block text-sm text-zinc-300">
            Description
          </label>

          <textarea
            required
            rows={6}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Course Description..."
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 text-white outline-none focus:border-cyan-500"
          />
        </div>

        {/* Button */}

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-white transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save Course"}
        </button>

      </form>

    </div>
  );
}