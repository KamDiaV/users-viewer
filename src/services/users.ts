import { User } from "@/types/user";

// Получаем всех пользователей
export async function getUsers(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    // кеш только 60 с, чтобы не гонять API на каждый refresh в теории можно и больше на учебном 
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

// Получаем одного пользователя
export async function getUser(id: string): Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!res.ok) throw new Error("User not found");
  return res.json();
}