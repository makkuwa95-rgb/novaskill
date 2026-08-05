"use client";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-16 flex justify-center gap-3">
      {Array.from({ length: totalPages }).map((_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`h-11 w-11 rounded-xl font-semibold transition ${
              currentPage === page
                ? "bg-cyan-500 text-white"
                : "border border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-cyan-500 hover:text-white"
            }`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}