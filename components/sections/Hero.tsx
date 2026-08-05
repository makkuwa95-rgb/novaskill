"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  Sparkles,
  Brain,
  Code2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),transparent_40%)]" />

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />


      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">


        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300"
        >
          <Sparkles className="h-4 w-4" />
          Future-ready skills for the digital world
        </motion.div>



        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-8 max-w-5xl text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl"
        >
          Master
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {" "}
            AI, Technology & Digital Skills
          </span>

          <br />

          Build Your Future Career
        </motion.h1>



        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl"
        >
          Learn from industry experts through practical courses,
          real-world projects, and career-focused learning paths
          designed for the future workforce.
        </motion.p>



        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >

          <Button
            size="lg"
            className="h-12 px-8 text-base"
          >
            <Link href="/courses">
              Explore Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>



          <Button
            variant="outline"
            size="lg"
            className="h-12 px-8 text-base"
          >
            <Link href="/about">

              <PlayCircle className="mr-2 h-5 w-5" />

              Watch Demo

            </Link>
          </Button>

        </motion.div>




        {/* Floating Cards */}
        <div className="relative mt-16 hidden md:block">

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute -left-52 top-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
          >
            <Brain className="mb-2 h-8 w-8 text-cyan-400" />

            <p className="font-semibold">
              AI Learning
            </p>

            <p className="text-sm text-gray-400">
              Future Technology
            </p>

          </motion.div>



          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute -right-52 top-10 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
          >

            <Code2 className="mb-2 h-8 w-8 text-blue-400" />

            <p className="font-semibold">
              Career Skills
            </p>

            <p className="text-sm text-gray-400">
              Build Real Projects
            </p>

          </motion.div>


        </div>




        {/* Stats */}

        <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:0.7 }}
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3"
        >

          {[
            ["50K+", "Active Students"],
            ["200+", "Expert Courses"],
            ["120+", "Industry Mentors"],
          ].map(([number,label]) => (

            <div key={label}>

              <h3 className="text-3xl font-bold text-cyan-400">
                {number}
              </h3>

              <p className="mt-1 text-gray-400">
                {label}
              </p>

            </div>

          ))}

        </motion.div>


      </div>

    </section>
  );
}