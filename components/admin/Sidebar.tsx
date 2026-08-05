"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  BookOpen,
  Users,
  BarChart3,
  Settings,
  Award,
  ShoppingCart,
  LogOut,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Courses",
    href: "/admin/courses",
    icon: BookOpen,
  },
  {
    title: "Students",
    href: "/admin/students",
    icon: Users,
  },
  {
    title: "Orders",
    href: "/admin/orders",
    icon: ShoppingCart,
  },
  {
    title: "Certificates",
    href: "/admin/certificates",
    icon: Award,
  },
  {
    title: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-72 border-r border-zinc-800 bg-zinc-950 lg:block">

      <div className="border-b border-zinc-800 p-8">

        <h1 className="text-3xl font-bold text-cyan-400">
          NovaSkill
        </h1>

        <p className="mt-2 text-sm text-zinc-500">
          Admin Dashboard
        </p>

      </div>

      <nav className="space-y-2 p-6">

        {menu.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 rounded-xl px-5 py-4 transition ${
                active
                  ? "bg-cyan-500 text-white"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
              }`}
            >
              <Icon size={20} />

              {item.title}
            </Link>
          );
        })}

      </nav>

      <div className="absolute bottom-8 left-6 right-6">

        <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-red-500 py-3 font-semibold text-white transition hover:bg-red-400">
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </aside>
  );
}