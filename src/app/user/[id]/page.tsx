import { getUser } from "@/services/users";
import { notFound } from "next/navigation";
import UserDetailContent from "@/components/UserDetailContent";

type UserPageProps = {
  params: {
    id: string;
  };
};

export default async function UserPage({ params }: UserPageProps) {
  // Получаем пользователя по id
  const userData = await getUser(params.id).catch((error) => {
    // Если это не 404, а, например, сетевой таймаут — пробрасываем дальше,
    // чтобы отобразился компонент error.tsx
    throw error;
  });

  // Если API вернул null (пользователь не найден) — показываем кастомную 404 страницу
  if (!userData) {
    notFound();
  }

  // Передаём данные в клиентский компонент с анимацией
  return <UserDetailContent user={userData} />;
}