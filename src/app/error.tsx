"use client";

import { Button } from "@/components/ui/button";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <main className="flex h-screen flex-col items-center justify-center space-y-4 p-6">
      <p className="text-center text-red-600">
        Что-то пошло не так: {error.message}
      </p>
      <Button onClick={() => reset()}>
        Попробовать снова
      </Button>
    </main>
  );
}
