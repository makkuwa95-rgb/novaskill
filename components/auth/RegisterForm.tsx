"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import {
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

import { auth } from "@/lib/firebase";
import { db } from "@/lib/firestore";

export default function RegisterForm() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    console.log("Register button clicked");

    setError("");

    if (!fullName.trim() || !email.trim() || !password.trim()) {
      setError("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      console.log("Step 1");

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      console.log("Step 2");

      await updateProfile(userCredential.user, {
        displayName: fullName,
      });

      console.log("Step 3");

      await setDoc(
        doc(db, "users", userCredential.user.uid),
        {
          uid: userCredential.user.uid,
          name: fullName,
          email: userCredential.user.email,
          role: "student",
          wishlist: [],
          createdAt: serverTimestamp(),
        }
      );

      console.log("Step 4");

      router.push("/dashboard");
    } catch (err: any) {
      console.error(err);

      switch (err.code) {
        case "auth/email-already-in-use":
          setError("Email already exists.");
          break;

        case "auth/invalid-email":
          setError("Invalid email.");
          break;

        case "auth/weak-password":
          setError("Password should be at least 6 characters.");
          break;

        default:
          setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {error && (
        <div className="rounded-xl bg-red-500/10 border border-red-500 p-3 text-red-400 text-sm">
          {error}
        </div>
      )}

      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Full Name
        </label>

        <input
          type="text"
          value={fullName}
          onChange={(e) =>
            setFullName(e.target.value)
          }
          placeholder="John Doe"
          className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-cyan-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Email Address
        </label>

        <input
          type="email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          placeholder="you@example.com"
          className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-cyan-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Password
        </label>

        <div className="relative">
          <input
            type={
              showPassword ? "text" : "password"
            }
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            placeholder="Create password"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 pr-12 text-white outline-none focus:border-cyan-500"
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400"
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        </div>
      </div>

      <label className="flex items-center gap-2 text-sm text-zinc-400">
        <input
          type="checkbox"
          required
        />
        I agree to the Terms & Conditions
      </label>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-cyan-500 py-3 font-semibold text-white hover:bg-cyan-400 disabled:opacity-50"
      >
        {loading
          ? "Creating Account..."
          : "Create Account"}
      </button>

      <p className="text-center text-sm text-zinc-400">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-cyan-400 font-semibold hover:underline"
        >
          Login
        </Link>
      </p>
    </form>
  );
}