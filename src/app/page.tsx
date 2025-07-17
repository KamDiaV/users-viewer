import { User } from "@/types/user";
import { getUsers } from "@/services/users";
import SearchableUserList from "@/components/SearchableUserList"; 

export const revalidate = 60;

export default async function HomePage() {
  let users: User[];
  try {
    users = await getUsers();
  } catch (error: any) {
    return (
      <main className="py-6">
        <p className="text-red-600 text-center">
          Ошибка при загрузке пользователей: {error.message}
        </p>
      </main>
    );
  }

  return <SearchableUserList users={users} />;
}
