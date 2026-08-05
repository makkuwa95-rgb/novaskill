"use client";

interface SortCoursesProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SortCourses({
  value,
  onChange,
}: SortCoursesProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-zinc-400">Sort By</span>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 text-white outline-none focus:border-cyan-500"
      >
        <option value="featured">Featured</option>
        <option value="rating">Highest Rating</option>
        <option value="low-price">Lowest Price</option>
        <option value="high-price">Highest Price</option>
        <option value="students">Most Students</option>
      </select>
    </div>
  );
}