"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function UserError({ error, reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="flex h-screen flex-col items-center justify-center space-y-4 p-6">
      <p className="text-center text-red-600">
        Не удалось загрузить данные пользователя: {error.message}
      </p>
      <Button onClick={() => reset()}>
        Попробовать снова
      </Button>
      <Link href="/" className="mt-2 underline">
        ← На главную
      </Link>
    </main>
  );
}
