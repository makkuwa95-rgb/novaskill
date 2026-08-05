"use client";

import Link from "next/link";
import { GraduationCap } from "lucide-react";
import {
  FaFacebook,
  FaXTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blogs" },
];

const categories = [
  "Artificial Intelligence",
  "Web Development",
  "Cyber Security",
  "Data Science",
];

export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-zinc-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-cyan-400" />
              <span className="text-2xl font-bold">
                NovaSkill
              </span>
            </div>

            <p className="mt-5 text-gray-400 leading-7">
              Learn AI, Web Development, Cyber Security,
              Data Science and future technologies with
              industry experts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-cyan-400 transition"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Categories
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              {categories.map((item) => (
                <p key={item}>
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Follow Us
            </h3>

            <div className="flex gap-5 text-2xl">

              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                <FaFacebook />
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                <FaXTwitter />
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>

            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-gray-500">
          © {new Date().getFullYear()} NovaSkill. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}