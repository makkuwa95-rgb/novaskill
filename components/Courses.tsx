"use client";

import { motion } from "framer-motion";
import {
  Award,
  Users,
  Rocket,
} from "lucide-react";

import CourseCard from "@/components/cards/CourseCard";
import { courses } from "@/data/courses";


const container = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.12,
    },
  },
};


const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  show: {
    opacity: 1,
    y: 0,
  },
};



export default function Courses() {

  return (

    <section
      className="
      relative
      overflow-hidden
      bg-black
      py-24
      text-white
      "
    >

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-b
        from-blue-500/10
        via-transparent
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

        <div
          className="
          mx-auto
          max-w-3xl
          text-center
          "
        >

          <p
            className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.3em]
            text-cyan-400
            "
          >
            Popular Courses
          </p>


          <h2
            className="
            mt-5
            text-4xl
            font-bold
            tracking-tight
            md:text-5xl
            "
          >
            Master Skills Employers Need
          </h2>


          <p
            className="
            mt-6
            text-lg
            leading-relaxed
            text-gray-400
            "
          >
            Learn AI, software development, cybersecurity,
            and data skills through practical courses designed
            for real-world careers.
          </p>


        </div>





        {/* Courses */}

        <motion.div

          variants={container}

          initial="hidden"

          whileInView="show"

          viewport={{
            once:true,
            amount:0.15,
          }}

          className="
          mt-16
          grid
          gap-8
          md:grid-cols-2
          lg:grid-cols-3
          "

        >

          {courses.map((course)=>(

            <motion.div
              key={course.id}
              variants={item}
            >

              <CourseCard

                slug={course.slug}

                title={course.title}

                level={course.level}

                duration={course.duration}

                students={course.students}

                rating={course.rating.toString()}

                price={course.price.toString()}

                image={course.image}

                imageColor={course.imageColor}

                featured={course.featured}

              />

            </motion.div>

          ))}


        </motion.div>





        {/* Trust Bar */}

        <div
          className="
          mt-20
          grid
          gap-6
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          p-8
          backdrop-blur-xl
          md:grid-cols-3
          "
        >

          {[
            {
              icon: Award,
              title:"Industry Certificates",
              text:"Earn certificates recognized by employers",
            },

            {
              icon: Users,
              title:"Expert Mentors",
              text:"Learn from experienced professionals",
            },

            {
              icon: Rocket,
              title:"Career Growth",
              text:"Build projects and advance your career",
            },

          ].map((item)=>{

            const Icon=item.icon;


            return (

              <div
                key={item.title}
                className="
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
                  rounded-xl
                  bg-cyan-400/10
                  "
                >

                  <Icon
                    className="
                    h-6
                    w-6
                    text-cyan-400
                    "
                  />

                </div>


                <div>

                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {item.text}
                  </p>

                </div>


              </div>

            );

          })}


        </div>


      </div>


    </section>

  );
}