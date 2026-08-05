"use client";

import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

import { auth } from "@/lib/firebase";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    try {
      await signOut(auth);
      router.replace("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  return (
    <button
      onClick={handleLogout}
      className="rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-500"
    >
      Logout
    </button>
  );
}