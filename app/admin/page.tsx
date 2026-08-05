export default function AdminPage() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-white">
        Admin Dashboard
      </h1>

      <p className="mt-3 text-zinc-400">
        Welcome to NovaSkill Admin Panel.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h3 className="text-zinc-400">Total Courses</h3>
          <p className="mt-2 text-3xl font-bold text-cyan-400">
            0
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h3 className="text-zinc-400">Students</h3>
          <p className="mt-2 text-3xl font-bold text-green-400">
            0
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h3 className="text-zinc-400">Orders</h3>
          <p className="mt-2 text-3xl font-bold text-yellow-400">
            0
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h3 className="text-zinc-400">Revenue</h3>
          <p className="mt-2 text-3xl font-bold text-pink-400">
            $0
          </p>
        </div>

      </div>
    </div>
  );
}