"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";


const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer",
    initials: "SJ",
    review:
      "NovaSkill completely transformed my career. The AI and Full Stack courses were practical, structured, and easy to follow.",
  },

  {
    name: "Michael Chen",
    role: "Cyber Security Analyst",
    initials: "MC",
    review:
      "The instructors are outstanding and the hands-on projects helped me build real confidence and land better opportunities.",
  },

  {
    name: "Emily Davis",
    role: "Data Scientist",
    initials: "ED",
    review:
      "One of the best online learning platforms. Modern content, expert mentors, and excellent learning support.",
  },
];


export default function Testimonials() {

  return (

    <section
      className="
      relative
      overflow-hidden
      bg-[#030712]
      py-24
      text-white
      "
    >

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-b
        from-transparent
        via-cyan-500/5
        to-transparent
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


        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p
            className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.3em]
            text-cyan-400
            "
          >
            Testimonials
          </p>


          <h2
            className="
            mt-5
            text-4xl
            font-bold
            md:text-5xl
            "
          >
            Loved By Learners Worldwide
          </h2>


          <p
            className="
            mt-6
            text-lg
            text-gray-400
            "
          >
            Thousands of students trust NovaSkill to build
            valuable skills and advance their careers.
          </p>

        </div>




        {/* Cards */}

        <div
          className="
          mt-16
          grid
          gap-8
          md:grid-cols-3
          "
        >

          {testimonials.map((item,index)=>(


            <motion.div

              key={item.name}

              initial={{
                opacity:0,
                y:30,
              }}

              whileInView={{
                opacity:1,
                y:0,
              }}

              transition={{
                delay:index * 0.15,
              }}

              viewport={{
                once:true,
              }}

              whileHover={{
                y:-8,
              }}

              className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.04]
              p-8
              backdrop-blur-xl
              transition
              "

            >


              {/* Stars */}

              <div className="flex gap-1">

                {Array.from({
                  length:5,
                }).map((_,i)=>(

                  <Star
                    key={i}
                    className="
                    h-5
                    w-5
                    fill-yellow-400
                    text-yellow-400
                    "
                  />

                ))}

              </div>



              {/* Review */}

              <p
                className="
                mt-6
                leading-7
                text-gray-300
                "
              >
                "{item.review}"
              </p>




              {/* User */}

              <div
                className="
                mt-8
                flex
                items-center
                gap-4
                "
              >

                <div
                  className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-cyan-400/10
                  font-semibold
                  text-cyan-400
                  "
                >
                  {item.initials}
                </div>


                <div>

                  <h3
                    className="
                    font-semibold
                    "
                  >
                    {item.name}
                  </h3>


                  <p
                    className="
                    text-sm
                    text-gray-400
                    "
                  >
                    {item.role}
                  </p>

                </div>


              </div>


            </motion.div>


          ))}


        </div>


      </div>


    </section>

  );
}