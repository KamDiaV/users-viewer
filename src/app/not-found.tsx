"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center space-y-6 px-6">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl">Страница не найдена.</p>
      <Link
        href="/"
        className="text-sm text-black dark:text-white hover:underline"
      >
        ← Вернуться на главную
      </Link>
    </main>
  );
}
