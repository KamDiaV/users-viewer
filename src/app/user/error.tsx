"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function UserError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <main className="flex h-screen flex-col items-center justify-center space-y-6 px-6">
      <p className="text-2xl font-semibold text-red-600">Что-то пошло не так.</p>

      <div className="flex space-x-4">
        <Button onClick={() => reset()}>Попробовать снова</Button>
        <Button variant="outline" onClick={() => setShowDetails((prev) => !prev)}>
          Подробнее
        </Button>
      </div>

      {showDetails && (
        <div className="max-w-screen-md w-full bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm whitespace-pre-wrap">
          {error.message}
        </div>
      )}

      <Link href="/" className="mt-4 text-black dark:text-white hover:underline">
        ← На главную
      </Link>
    </main>
  );
}
