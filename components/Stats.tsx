"use client";

import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  BookOpen,
  Trophy,
} from "lucide-react";


const stats = [
  {
    number: "50K+",
    label: "Active Students",
    icon: Users,
  },

  {
    number: "120+",
    label: "Expert Instructors",
    icon: GraduationCap,
  },

  {
    number: "200+",
    label: "Online Courses",
    icon: BookOpen,
  },

  {
    number: "95%",
    label: "Success Rate",
    icon: Trophy,
  },
];


export default function Stats() {

  return (

    <section
      className="
      relative
      overflow-hidden
      bg-[#0f172a]
      py-24
      text-white
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
        max-w-7xl
        px-6
        "
      >


        <motion.div

          initial={{
            opacity:0,
            y:30,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

          viewport={{
            once:true,
          }}

          className="
          grid
          grid-cols-2
          gap-6
          md:grid-cols-4
          "

        >


          {stats.map((stat)=>{

            const Icon = stat.icon;


            return (

              <motion.div

                key={stat.label}

                whileHover={{
                  y:-8,
                }}

                transition={{
                  duration:0.2,
                }}

                className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.05]
                p-8
                text-center
                backdrop-blur-xl
                "

              >

                <div
                  className="
                  mx-auto
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-cyan-400/10
                  "
                >

                  <Icon
                    className="
                    h-7
                    w-7
                    text-cyan-400
                    "
                  />

                </div>


                <h2
                  className="
                  mt-6
                  text-4xl
                  font-bold
                  text-cyan-400
                  "
                >
                  {stat.number}
                </h2>


                <p
                  className="
                  mt-2
                  text-sm
                  text-gray-300
                  "
                >
                  {stat.label}
                </p>


              </motion.div>

            );

          })}


        </motion.div>


      </div>


    </section>

  );
}