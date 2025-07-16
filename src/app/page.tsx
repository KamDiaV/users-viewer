import { User } from "@/types/user";
import { getUsers } from "@/lib/fetchUsers";
import { SearchableUserList } from "@/components/SearchableUserList";

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

  return <SearchableUserList users={users} />;
}
