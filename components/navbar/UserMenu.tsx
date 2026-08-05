"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import {
  ChevronDown,
  LayoutDashboard,
  Heart,
  User,
  LogOut,
} from "lucide-react";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { auth } from "@/lib/firebase";
import { useAuth } from "@/components/auth/AuthProvider";

export default function UserMenu() {
  const { user } = useAuth();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  async function handleLogout() {
    try {
      setOpen(false);
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error(error);
    }
  }

  if (!user) {
    return (
      <Link
        href="/login"
        className="rounded-xl bg-cyan-500 px-5 py-2 font-semibold text-white transition hover:bg-cyan-400"
      >
        Login
      </Link>
    );
  }

  return (
    <div
      ref={menuRef}
      className="relative"
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 text-white transition hover:border-cyan-500"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500 font-semibold text-white">
          {(user.displayName?.charAt(0) ||
            user.email?.charAt(0) ||
            "U").toUpperCase()}
        </div>

        <span className="hidden md:block">
          {user.displayName || "My Account"}
        </span>

        <ChevronDown
          size={18}
          className={`transition ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-64 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl">
          <div className="border-b border-zinc-800 p-4">
            <p className="font-semibold text-white">
              {user.displayName || "NovaSkill Student"}
            </p>

            <p className="truncate text-sm text-zinc-400">
              {user.email}
            </p>
          </div>

          <Link
            href="/dashboard"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-3 text-white hover:bg-zinc-900"
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>

          <Link
            href="/profile"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-3 text-white hover:bg-zinc-900"
          >
            <User size={18} />
            Profile
          </Link>

          <Link
            href="/wishlist"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-3 text-white hover:bg-zinc-900"
          >
            <Heart size={18} />
            Wishlist
          </Link>

          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 px-4 py-3 text-left text-red-400 hover:bg-zinc-900"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}