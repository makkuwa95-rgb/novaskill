"use client";

import Link from "next/link";
import Image from "next/image";
import { Clock3, Star, Users } from "lucide-react";

import WishlistButton from "@/components/wishlist/WishlistButton";

interface CourseCardProps {
  slug: string;
  title: string;
  level: string;
  duration: string;
  students: string;
  rating: string;
  price: string;
  image: string;
  imageColor?: string;
  featured?: boolean;
}

export default function CourseCard({
  slug,
  title,
  level,
  duration,
  students,
  rating,
  price,
  image,
}: CourseCardProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10">

      <WishlistButton slug={slug} />

      <Link href={`/courses/${slug}`}>

        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-500 hover:scale-110"
          />
        </div>

        <div className="p-6">

          <div className="mb-4 flex items-center justify-between">

            <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
              {level}
            </span>

            <span className="text-xl font-bold text-cyan-400">
              {price}
            </span>

          </div>

          <h3 className="line-clamp-2 text-2xl font-bold text-white">
            {title}
          </h3>

          <div className="mt-6 flex items-center justify-between text-sm text-zinc-400">

            <div className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-cyan-400" />
              <span>{duration}</span>
            </div>

            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-cyan-400" />
              <span>{students}</span>
            </div>

          </div>

          <div className="mt-4 flex items-center gap-2">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-white">
              {rating}
            </span>
          </div>

          <button className="mt-8 w-full rounded-xl bg-cyan-500 py-3 font-semibold text-white transition hover:bg-cyan-400">
            View Course
          </button>

        </div>

      </Link>

    </div>
  );
}