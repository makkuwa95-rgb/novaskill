"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";


export default function CTA() {

  return (

    <section
      className="
      relative
      overflow-hidden
      bg-black
      py-24
      "
    >

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-cyan-500/10
        via-transparent
        to-blue-500/10
        "
      />


      <div
        className="
        relative
        mx-auto
        max-w-6xl
        px-6
        "
      >


        <motion.div

          initial={{
            opacity:0,
            y:40,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

          viewport={{
            once:true,
          }}

          className="
          relative
          overflow-hidden
          rounded-[2rem]
          border
          border-white/10
          bg-gradient-to-br
          from-cyan-600
          via-blue-600
          to-indigo-700
          p-10
          text-center
          text-white
          md:p-16
          "

        >


          {/* Glow */}

          <div
            className="
            absolute
            -right-20
            -top-20
            h-64
            w-64
            rounded-full
            bg-white/20
            blur-3xl
            "
          />



          <div
            className="
            relative
            "
          >


            <div
              className="
              mx-auto
              flex
              w-fit
              items-center
              gap-2
              rounded-full
              bg-white/10
              px-4
              py-2
              text-sm
              backdrop-blur
              "
            >

              <Sparkles
                className="
                h-4
                w-4
                "
              />

              Start Your Learning Journey

            </div>




            <h2
              className="
              mt-8
              text-4xl
              font-bold
              tracking-tight
              md:text-5xl
              "
            >
              Ready to Build Your
              <br />
              Tech Career?
            </h2>



            <p
              className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              text-cyan-100
              "
            >
              Join thousands of learners building
              AI, Web Development, Cyber Security,
              and future-ready technology skills.
            </p>




            <Link
              href="/courses"
              className="
              mt-10
              inline-flex
              items-center
              justify-center
              rounded-md
              bg-white
              px-4
              py-2
              text-sm
              font-medium
              text-blue-700
              transition-colors
              hover:bg-gray-100
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-white
              focus-visible:ring-offset-2
              focus-visible:ring-offset-black
              md:px-6
              md:py-3
              md:text-base
              "
            >

              Explore Courses

              <ArrowRight
                className="
                ml-2
                h-5
                w-5
                "
              />

            </Link>


          </div>


        </motion.div>


      </div>


    </section>

  );
}