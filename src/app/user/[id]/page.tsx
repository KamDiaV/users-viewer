import { getUser } from "@/services/users";
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
    // Если getUser выбросит (404 или другая ошибка), показываем 404
    notFound();
  }

  // Передаём данные в клиентский компонент с анимацией
  return <UserDetailContent user={user} />;
}
