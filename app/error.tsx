"use client";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold">
            Something went wrong
          </h2>

          <button
            onClick={() => reset()}
            className="mt-4 rounded-lg bg-primary px-5 py-2 text-white"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}