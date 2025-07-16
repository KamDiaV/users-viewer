import { User } from "@/types/user";                     
import { getUsers } from "@/lib/fetchUsers";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const revalidate = 60; // SSG + ISR: пересобираем раз в 60 сек

export default async function HomePage() {
  let users: User[];
  try {
    users = await getUsers();
  } catch (error: any) {
    return (
      <main className="container mx-auto p-6">
        <p className="text-red-600">
          Ошибка при загрузке пользователей: {error.message}
        </p>
      </main>
    );
  }

  return (
    <main className="container mx-auto grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
      {users.map((u) => (
        <Card key={u.id}>
          <Link href={`/user/${u.id}`} className="block hover:opacity-90">
            <CardHeader>
              <CardTitle>{u.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 text-sm">
              <p>
                <span className="font-medium">Email:</span> {u.email}
              </p>
              <p>
                <span className="font-medium">Company:</span> {u.company.name}
              </p>
              <p className="text-blue-600 underline">Подробнее →</p>
            </CardContent>
          </Link>
        </Card>
      ))}
    </main>
  );
}