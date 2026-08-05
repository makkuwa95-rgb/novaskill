"use client";

import { useAuth } from "@/components/auth/AuthProvider";

export default function DashboardHero() {
  const { user } = useAuth();

  return (
    <section className="rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-700 p-8 text-white shadow-xl">
      <h1 className="text-4xl font-bold">
        Welcome back,
        <span className="text-cyan-200">
          {" "}
          {user?.displayName || "Student"}
        </span>
        👋
      </h1>

      <p className="mt-4 max-w-2xl text-cyan-100">
        Continue learning, track your progress, earn certificates,
        and master future-ready skills with NovaSkill.
      </p>
    </section>
  );
}