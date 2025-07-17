import { User } from "@/types/user";

// Получаем всех пользователей
export async function getUsers(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    // кеш только 60 с, чтобы не гонять API на каждый refresh в теории можно и больше на учебном 
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch users");
  // throw new Error("test crash");
  return res.json();
}

// Получаем одного пользователя
export async function getUser(id: string): Promise<User | null> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  // Если сервер вернул 404 — это «нет такого пользователя»
  if (res.status === 404) {
    return null; // вызываем notFound()
  }

  // Любой другой не-200 -> реальная ошибка
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  const data = (await res.json()) as User;
  // throw new Error("test crash");
  return data;
}