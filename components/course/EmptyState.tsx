export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-zinc-800 bg-zinc-900 py-24 text-center">
      <h2 className="text-3xl font-bold text-white">
        No Courses Found
      </h2>

      <p className="mt-4 max-w-md text-zinc-400">
        We couldn't find any courses matching your search or filters.
        Try changing the filters and search again.
      </p>
    </div>
  );
}