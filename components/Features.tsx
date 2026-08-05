"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  ShieldCheck,
  Database,
} from "lucide-react";


const features = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "Master AI, Machine Learning, and Generative AI through practical projects and industry-focused training.",
  },

  {
    icon: Code2,
    title: "Web Development",
    description:
      "Build modern applications with React, Next.js, Node.js, and professional development workflows.",
  },

  {
    icon: ShieldCheck,
    title: "Cyber Security",
    description:
      "Learn ethical hacking, security fundamentals, penetration testing, and modern protection techniques.",
  },

  {
    icon: Database,
    title: "Data Science",
    description:
      "Analyze data, create predictive models, and develop Python-powered data solutions.",
  },
];


const container = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.15,
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



export default function Features() {

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
        from-cyan-500/5
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
            Why Choose NovaSkill
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
            Learn Skills That Shape The Future
          </h2>


          <p
            className="
            mt-6
            text-lg
            leading-relaxed
            text-gray-400
            "
          >
            Develop career-ready skills with expert instructors,
            hands-on projects, and learning paths designed for the
            modern technology industry.
          </p>


        </div>





        {/* Cards */}

        <motion.div

          variants={container}

          initial="hidden"

          whileInView="show"

          viewport={{
            once: true,
            amount: 0.2,
          }}

          className="
          mt-16
          grid
          gap-8
          md:grid-cols-2
          lg:grid-cols-4
          "

        >


          {features.map((feature)=>{

            const Icon = feature.icon;


            return (

              <motion.div

                key={feature.title}

                variants={item}

                className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-cyan-400/50
                "

              >


                <div
                  className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-cyan-400/10
                  transition
                  group-hover:bg-cyan-400/20
                  "
                >

                  <Icon
                    className="
                    h-8
                    w-8
                    text-cyan-400
                    "
                  />

                </div>



                <h3
                  className="
                  mt-8
                  text-2xl
                  font-semibold
                  "
                >
                  {feature.title}
                </h3>



                <p
                  className="
                  mt-4
                  leading-7
                  text-gray-400
                  "
                >
                  {feature.description}
                </p>



              </motion.div>

            );

          })}


        </motion.div>


      </div>

    </section>

  );
}