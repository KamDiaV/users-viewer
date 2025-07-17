import { getUser } from "@/services/users";
import { notFound } from "next/navigation";
import UserDetailContent from "@/components/UserDetailContent";

export default async function UserPage({
  params,
}: {
  params: { id: string };
}) {
  const user = await getUser(params.id);  

  if (!user) {
    notFound();                           
  }

  return <UserDetailContent user={user} />;
}
