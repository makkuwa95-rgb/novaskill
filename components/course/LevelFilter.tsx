"use client";

interface LevelFilterProps {
  levels: string[];
  active: string;
  onChange: (level: string) => void;
}

export default function LevelFilter({
  levels,
  active,
  onChange,
}: LevelFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {levels.map((level) => (
        <button
          key={level}
          onClick={() => onChange(level)}
          className={`rounded-xl px-5 py-2 font-medium transition ${
            active === level
              ? "bg-cyan-500 text-white"
              : "border border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-cyan-500 hover:text-white"
          }`}
        >
          {level}
        </button>
      ))}
    </div>
  );
}