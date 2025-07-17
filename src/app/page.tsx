import { getUsers } from "@/services/users";
import SearchableUserList from "@/components/SearchableUserList";

export const revalidate = 60;

export default async function HomePage() {
  const users = await getUsers();       
  return <SearchableUserList users={users} />;
}
