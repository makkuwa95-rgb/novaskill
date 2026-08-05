"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Williams",
    role: "Frontend Developer",
    image: "/images/reviews/review1.jpg",
    rating: 5,
    review:
      "One of the best AI courses I've taken. The projects are practical and the explanations are crystal clear.",
  },
  {
    name: "Michael Brown",
    role: "Software Engineer",
    image: "/images/reviews/review2.jpg",
    rating: 5,
    review:
      "Excellent curriculum with real-world examples. Highly recommended for anyone starting in AI.",
  },
  {
    name: "Emma Johnson",
    role: "Computer Science Student",
    image: "/images/reviews/review3.jpg",
    rating: 5,
    review:
      "Amazing instructor and beautifully structured lessons. I built my first AI project after this course.",
  },
];

export default function Reviews() {
  return (
    <section className="border-b border-zinc-800 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-white">
            Student Reviews
          </h2>

          <p className="mt-4 text-zinc-400">
            Trusted by thousands of learners around the world.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2">

            <Star className="h-7 w-7 fill-yellow-400 text-yellow-400" />

            <span className="text-3xl font-bold text-white">
              4.9
            </span>

            <span className="text-zinc-400">
              (12,500+ Reviews)
            </span>

          </div>

        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">

          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition hover:border-cyan-500"
            >

              <div className="flex items-center gap-4">

                <div className="relative h-16 w-16 overflow-hidden rounded-full">

                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />

                </div>

                <div>

                  <h3 className="font-semibold text-white">
                    {review.name}
                  </h3>

                  <p className="text-sm text-zinc-400">
                    {review.role}
                  </p>

                </div>

              </div>

              <div className="mt-6 flex gap-1">

                {Array.from({ length: review.rating }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              <p className="mt-6 leading-8 text-zinc-300">
                "{review.review}"
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}