"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Menu,
  ArrowRight,
} from "lucide-react";

import UserMenu from "@/components/navbar/UserMenu";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";


const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Courses",
    href: "/courses",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];


export default function Navbar() {

  return (

    <header
      className="
      sticky
      top-0
      z-50
      border-b
      border-white/10
      bg-black/70
      backdrop-blur-xl
      "
    >

      <div
        className="
        mx-auto
        flex
        h-20
        max-w-7xl
        items-center
        justify-between
        px-6
        "
      >


        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-3"
        >

          <motion.div
            whileHover={{
              rotate: 8,
              scale: 1.08,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
          >

            <GraduationCap
              className="
              h-9
              w-9
              text-cyan-400
              "
            />

          </motion.div>


          <span
            className="
            text-2xl
            font-bold
            tracking-tight
            text-white
            "
          >

            Nova
            <span className="text-cyan-400">
              Skill
            </span>

          </span>

        </Link>




        {/* Desktop Navigation */}

        <nav
          className="
          hidden
          items-center
          gap-8
          md:flex
          "
        >

          {navItems.map((item)=>(

            <Link
              key={item.name}
              href={item.href}
              className="
              relative
              text-sm
              font-medium
              text-gray-300
              transition
              hover:text-cyan-400
              "
            >

              {item.name}

            </Link>

          ))}


        </nav>





        {/* Desktop Actions */}

        <div
          className="
          hidden
          items-center
          gap-4
          md:flex
          "
        >

          <UserMenu />


          <Button
            size="sm"
            className="gap-2"
          >

            <Link
              href="/courses"
              className="flex items-center"
            >

              Start Learning

              <ArrowRight
                className="
                ml-2
                h-4
                w-4
                "
              />

            </Link>


          </Button>


        </div>





        {/* Mobile */}

        <div className="md:hidden">

          <Sheet>


            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                >

                  <Menu
                    className="
                    h-7
                    w-7
                    text-white
                    "
                  />

                </Button>
              }
            />



            <SheetContent
              side="right"
              className="
              border-zinc-800
              bg-black
              text-white
              "
            >


              <div
                className="
                mt-12
                flex
                flex-col
                gap-7
                "
              >


                {navItems.map((item)=>(

                  <Link
                    key={item.name}
                    href={item.href}
                    className="
                    text-xl
                    font-medium
                    text-gray-300
                    transition
                    hover:text-cyan-400
                    "
                  >

                    {item.name}

                  </Link>

                ))}


                <Button
                  className="mt-4"
                >

                  Start Learning

                </Button>


                <UserMenu />


              </div>


            </SheetContent>


          </Sheet>


        </div>


      </div>


    </header>

  );
}