import { getUser } from "@/services/users";
import { notFound } from "next/navigation";
import UserDetailContent from "@/components/UserDetailContent";

type UserPageProps = {
  params: {
    id: string;
  };
};

export default async function UserPage({ params }: UserPageProps) {
  const { id } = params;

  const user = await getUser(id).catch((error) => {
    throw error;
  });

  if (!user) {
    notFound();
  }

  return <UserDetailContent user={user} />;
}