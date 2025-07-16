import { getUser } from "@/lib/fetchUsers";
import { notFound } from "next/navigation";
import UserDetailContent from "@/components/UserDetailContent";

type PageProps = {
  params: { id: string };
};

export default async function UserPage({ params }: PageProps) {
  const { id } = await params;
  let user;

  try {
    user = await getUser(id);
  } catch (error) {
    // Если пользователь не найден или другой сбой — показываем 404
    notFound();
  }

  // Передаём данные в клиентский компонент с анимацией
  return <UserDetailContent user={user} />;
}
