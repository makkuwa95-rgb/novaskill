"use client";

import Link from "next/link";
import { GraduationCap } from "lucide-react";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function AuthLayout({
  title,
  subtitle,
  children,
}: AuthLayoutProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-zinc-950 to-black px-6 py-12">
      <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-2xl backdrop-blur-xl">

        <Link
          href="/"
          className="mb-8 flex items-center justify-center gap-2"
        >
          <GraduationCap className="h-8 w-8 text-cyan-400" />
          <span className="text-3xl font-bold text-white">
            Nova<span className="text-cyan-400">Skill</span>
          </span>
        </Link>

        <h1 className="text-center text-3xl font-bold text-white">
          {title}
        </h1>

        <p className="mt-2 text-center text-zinc-400">
          {subtitle}
        </p>

        <div className="mt-8">
          {children}
        </div>
      </div>
    </main>
  );
}