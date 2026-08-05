"use client";

const team = [
  {
    name: "John Anderson",
    role: "Founder & CEO",
  },
  {
    name: "Sarah Johnson",
    role: "Lead AI Instructor",
  },
  {
    name: "Michael Chen",
    role: "Cyber Security Mentor",
  },
  {
    name: "Emily Davis",
    role: "Full Stack Engineer",
  },
];

export default function Team() {
  return (
    <section className="bg-[#030712] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-cyan-400">
            Our Team
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Meet Our Experts
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Learn from experienced professionals passionate about helping
            students succeed.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-center transition hover:-translate-y-2 hover:border-cyan-400"
            >
              <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-3xl font-bold">
                {member.name.charAt(0)}
              </div>

              <h3 className="text-2xl font-semibold text-white">
                {member.name}
              </h3>

              <p className="mt-2 text-cyan-400">
                {member.role}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}