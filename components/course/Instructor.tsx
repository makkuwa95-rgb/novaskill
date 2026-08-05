"use client";

import Image from "next/image";
import { Award, BookOpen, Users, Star } from "lucide-react";

export default function Instructor() {
  return (
    <section className="py-20 border-b border-zinc-800">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-4xl font-bold text-white">
          Meet Your Instructor
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-[300px_1fr]">

          {/* Instructor Image */}
          <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">

            <div className="relative h-[360px] w-full">

              <Image
                src="/images/instructor.jpg"
                alt="Instructor"
                fill
                className="object-cover"
              />

            </div>

          </div>

          {/* Instructor Info */}
          <div>

            <h3 className="text-3xl font-bold text-white">
              Dr. Alex Johnson
            </h3>

            <p className="mt-2 text-cyan-400">
              AI Researcher & Senior Software Engineer
            </p>

            <p className="mt-6 leading-8 text-zinc-400">
              Dr. Alex Johnson has over 12 years of experience in
              Artificial Intelligence, Machine Learning and Software
              Engineering. He has trained thousands of students
              worldwide and worked with leading technology companies
              on real-world AI solutions.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-center">
                <Users className="mx-auto h-8 w-8 text-cyan-400" />
                <h4 className="mt-4 text-2xl font-bold text-white">
                  120K+
                </h4>
                <p className="text-zinc-400">
                  Students
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-center">
                <BookOpen className="mx-auto h-8 w-8 text-cyan-400" />
                <h4 className="mt-4 text-2xl font-bold text-white">
                  25+
                </h4>
                <p className="text-zinc-400">
                  Courses
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-center">
                <Star className="mx-auto h-8 w-8 fill-yellow-400 text-yellow-400" />
                <h4 className="mt-4 text-2xl font-bold text-white">
                  4.9
                </h4>
                <p className="text-zinc-400">
                  Rating
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-center">
                <Award className="mx-auto h-8 w-8 text-cyan-400" />
                <h4 className="mt-4 text-2xl font-bold text-white">
                  12+
                </h4>
                <p className="text-zinc-400">
                  Years Experience
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}