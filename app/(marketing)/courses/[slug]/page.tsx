import { courses } from "@/data/courses";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";

import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    return {};
  }

  return {
    title: course.title,
    description: course.description,

    openGraph: {
      title: course.title,
      description: course.description,
      images: [course.image],
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: course.title,
      description: course.description,
      images: [course.image],
    },
  };
}

export default async function CoursePage({
  params,
}: Props) {
  const { slug } = await params;

  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">

      <CourseJsonLd slug={slug} />

      <BreadcrumbJsonLd
        courseTitle={course.title}
        slug={slug}
      />

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-12 lg:grid-cols-2">

          <div className="relative h-[450px] overflow-hidden rounded-3xl">
            <Image
              src={course.image}
              alt={course.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div>

            <p className="uppercase tracking-widest text-cyan-400 font-semibold">
              {course.category}
            </p>

            <h1 className="mt-4 text-5xl font-bold">
              {course.title}
            </h1>

            <p className="mt-6 text-lg text-gray-400 leading-8">
              {course.description}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">

              <div className="rounded-xl bg-zinc-900 p-5">
                <p className="text-gray-400">Level</p>
                <p className="font-bold mt-1">{course.level}</p>
              </div>

              <div className="rounded-xl bg-zinc-900 p-5">
                <p className="text-gray-400">Duration</p>
                <p className="font-bold mt-1">{course.duration}</p>
              </div>

              <div className="rounded-xl bg-zinc-900 p-5">
                <p className="text-gray-400">Students</p>
                <p className="font-bold mt-1">{course.students}</p>
              </div>

              <div className="rounded-xl bg-zinc-900 p-5">
                <p className="text-gray-400">Rating</p>
                <p className="font-bold mt-1">
                  ⭐ {course.rating}
                </p>
              </div>

            </div>

            <div className="mt-10 flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

              <div>
                <p className="text-gray-400">
                  Course Price
                </p>

                <h2 className="text-4xl font-bold text-cyan-400">
                  ${course.price}
                </h2>
              </div>

              <button className="rounded-xl bg-cyan-500 px-7 py-3 font-semibold text-black hover:bg-cyan-400 transition">
                Enroll Now
              </button>

            </div>

          </div>

        </div>

        <section className="mt-24">

          <h2 className="text-4xl font-bold">
            Course Curriculum
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            {course.curriculum.map((item, index) => (

              <div
                key={index}
                className="rounded-xl border border-zinc-800 bg-zinc-900 p-5 hover:border-cyan-400 transition"
              >
                <span className="mr-2 text-cyan-400">
                  {index + 1}.
                </span>

                {item}
              </div>

            ))}

          </div>

        </section>

      </section>

    </main>
  );
}