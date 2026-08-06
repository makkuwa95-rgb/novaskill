import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | NovaSkill",
  description:
    "Explore AI, technology, programming, cybersecurity and career development articles from NovaSkill.",
};

const posts = [
  {
    slug: "getting-started-with-ai",
    title: "Getting Started with Artificial Intelligence",
    description:
      "Learn AI fundamentals, machine learning basics and how beginners can start their AI journey.",
    category: "Artificial Intelligence",
    date: "August 2026",
    readTime: "6 min read",
  },
  {
    slug: "full-stack-roadmap-2026",
    title: "Complete Full Stack Developer Roadmap 2026",
    description:
      "A complete roadmap to become a professional full stack developer.",
    category: "Web Development",
    date: "August 2026",
    readTime: "8 min read",
  },
  {
    slug: "cybersecurity-career-guide",
    title: "Cybersecurity Career Guide",
    description:
      "Skills, certifications and career opportunities in cybersecurity.",
    category: "Cyber Security",
    date: "August 2026",
    readTime: "7 min read",
  },
];

export default function BlogsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">

      <section className="text-center">
        <h1 className="text-5xl font-bold">
          NovaSkill Blog
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Learn AI, technology, programming and career skills
          through expert articles.
        </p>
      </section>


      <section className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-2xl border p-6 shadow-sm"
          >

            <span className="text-sm text-primary">
              {post.category}
            </span>

            <h2 className="mt-3 text-2xl font-bold">
              {post.title}
            </h2>

            <p className="mt-3 text-muted-foreground">
              {post.description}
            </p>


            <div className="mt-5 text-sm text-muted-foreground">
              {post.date} • {post.readTime}
            </div>


            <Link
              href={`/blogs/${post.slug}`}
              className="mt-5 inline-block font-semibold text-primary"
            >
              Read Article →
            </Link>

          </article>
        ))}

      </section>

    </main>
  );
}