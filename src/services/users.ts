import { User } from "@/types/user";

export async function getUsers(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

export async function getUser(id: string): Promise<User | null> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  if (res.status === 404) {
    return null; // вызываем notFound()
  }

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  const data = (await res.json()) as User;
  return data;
}