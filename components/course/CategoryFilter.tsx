"use client";

interface CategoryFilterProps {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  active,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`rounded-full px-5 py-2 font-medium transition ${
            active === category
              ? "bg-cyan-500 text-white"
              : "border border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-cyan-500 hover:text-white"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}