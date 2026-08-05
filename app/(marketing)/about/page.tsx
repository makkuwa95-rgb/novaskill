import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, BookOpen, Globe, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About NovaSkill",
  description:
    "Learn more about NovaSkill, our mission, vision, and commitment to helping learners build future-ready skills through high-quality online education.",
};

const stats = [
  {
    title: "50K+",
    subtitle: "Active Students",
  },
  {
    title: "120+",
    subtitle: "Expert Instructors",
  },
  {
    title: "250+",
    subtitle: "Professional Courses",
  },
  {
    title: "98%",
    subtitle: "Student Satisfaction",
  },
];

const values = [
  {
    icon: BookOpen,
    title: "Quality Learning",
    description:
      "Industry-focused courses designed to build real-world skills through practical projects.",
  },
  {
    icon: Users,
    title: "Expert Mentors",
    description:
      "Learn directly from experienced professionals working in leading technology companies.",
  },
  {
    icon: Globe,
    title: "Global Community",
    description:
      "Join learners from around the world and grow with an international learning network.",
  },
  {
    icon: Award,
    title: "Career Growth",
    description:
      "Develop in-demand skills that help you secure better career opportunities.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#020617] text-white">
      {/* Hero */}
      <section className="border-b border-zinc-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            About NovaSkill
          </span>

          <h1 className="mt-8 max-w-4xl text-5xl font-bold leading-tight md:text-6xl">
            Empowering People With
            <span className="text-cyan-400"> Future-Ready Skills</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            NovaSkill is a modern online learning platform helping students,
            professionals, and organizations master Artificial Intelligence,
            Web Development, Cyber Security, Cloud Computing, Data Science,
            Design, and other in-demand technologies.
          </p>

          <div className="mt-10">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-4 font-semibold text-black transition hover:bg-cyan-400"
            >
              Explore Courses
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold">
              Our Mission
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              We believe education should be practical, affordable, and
              accessible. Our mission is to help learners gain the skills
              employers actually need through hands-on, project-based learning.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              Every course at NovaSkill is designed with career outcomes in
              mind, helping learners build confidence and prepare for modern
              technology careers.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10">
            <h3 className="text-2xl font-bold">
              Why Choose NovaSkill?
            </h3>

            <ul className="mt-8 space-y-5 text-gray-300">
              <li>✔ Industry-focused curriculum</li>
              <li>✔ Hands-on real-world projects</li>
              <li>✔ Expert instructors</li>
              <li>✔ Career-oriented learning paths</li>
              <li>✔ Professional certificates</li>
              <li>✔ Lifetime access to learning materials</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-zinc-800 bg-zinc-950">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.subtitle}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-center"
            >
              <h3 className="text-4xl font-bold text-cyan-400">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-400">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Our Core Values
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-gray-400">
            Everything we build is guided by quality education, innovation,
            learner success, and continuous improvement.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition hover:border-cyan-400"
              >
                <Icon className="h-12 w-12 text-cyan-400" />

                <h3 className="mt-6 text-2xl font-bold">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h2 className="text-4xl font-bold">
            Start Your Learning Journey Today
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Build practical skills, earn professional certificates, and prepare
            for the careers of tomorrow with NovaSkill.
          </p>

          <Link
            href="/courses"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400"
          >
            Browse Courses
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}