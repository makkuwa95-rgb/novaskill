"use client";

import Link from "next/link";

export default function ForgotPasswordForm() {
  return (
    <form className="space-y-6">
      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Email Address
        </label>

        <input
          type="email"
          placeholder="you@example.com"
          className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-cyan-500 py-3 font-semibold text-white transition hover:bg-cyan-400"
      >
        Send Reset Link
      </button>

      <p className="text-center text-sm text-zinc-400">
        Remember your password?{" "}
        <Link
          href="/login"
          className="font-semibold text-cyan-400 hover:underline"
        >
          Back to Login
        </Link>
      </p>
    </form>
  );
}