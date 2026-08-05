export default function AboutStats() {
  const stats = [
    {
      number: "50K+",
      label: "Students Enrolled",
    },
    {
      number: "200+",
      label: "Professional Courses",
    },
    {
      number: "120+",
      label: "Expert Instructors",
    },
    {
      number: "95%",
      label: "Career Success Rate",
    },
  ];

  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-white">
            Our Impact
          </h2>

          <p className="mt-5 text-gray-400">
            Numbers that reflect the success of the NovaSkill community.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-4">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-10 text-center transition hover:border-cyan-400"
            >
              <h3 className="text-5xl font-bold text-cyan-400">
                {stat.number}
              </h3>

              <p className="mt-4 text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}