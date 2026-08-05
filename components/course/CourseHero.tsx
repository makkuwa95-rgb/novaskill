"use client";

import Image from "next/image";
import {
  Star,
  Users,
  Clock3,
  GraduationCap,
} from "lucide-react";

interface CourseHeroProps {
  title: string;
  description: string;
  image: string;
  level: string;
  duration: string;
  students: string;
  rating: string;
  price: string;
}

export default function CourseHero({
  title,
  description,
  image,
  level,
  duration,
  students,
  rating,
  price,
}: CourseHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-zinc-800 bg-gradient-to-br from-zinc-950 via-black to-zinc-900">

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            {level}
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            {description}
          </p>

          <div className="mt-10 flex flex-wrap gap-6">

            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span>{rating} Rating</span>
            </div>

            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-cyan-400" />
              <span>{students} Students</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock3 className="h-5 w-5 text-cyan-400" />
              <span>{duration}</span>
            </div>

            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-cyan-400" />
              <span>{level}</span>
            </div>

          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6">

            <div className="text-5xl font-bold text-cyan-400">
              {price}
            </div>

            <button className="rounded-2xl bg-cyan-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-cyan-400">
              Enroll Now
            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative">

          <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl">

            <Image
              src={image}
              alt={title}
              width={700}
              height={450}
              className="h-auto w-full object-cover"
              priority
            />

          </div>

        </div>

      </div>

    </section>
  );
}