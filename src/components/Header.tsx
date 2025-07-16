"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  return (
    <header className="bg-white dark:bg-zinc-900 shadow-sm">
      <div className="mx-auto max-w-screen-xl px-6 flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-zinc-900 dark:text-zinc-100"
        >
          Users Viewer
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
