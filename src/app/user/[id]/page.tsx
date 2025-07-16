import { getUser } from "@/lib/fetchUsers";
import { notFound } from "next/navigation";
import Link from "next/link";

type PageProps = {
  params: { id: string };
};

export default async function UserPage({ params }: PageProps) {
  const { id } = await params;
  let user;

  try {
    user = await getUser(id);
  } catch (error) {
    // если getUser выбросит (404 или другая ошибка), показываем 404
    notFound();
  }

  return (
    <main className="mx-auto max-w-xl space-y-4 p-6">
      <h1 className="text-2xl font-bold">{user.name}</h1>

      <div className="space-y-1 text-sm">
        <Info label="Username" value={user.username} />
        <Info label="Email" value={user.email} />
        <Info
          label="Address"
          value={`${user.address.street}, ${user.address.city}`}
        />
        <Info label="Phone" value={user.phone} />
        <Info label="Website" value={user.website} />
        <Info label="Company" value={user.company.name} />
      </div>

      <Back />
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <p>
      <span className="font-medium">{label}:</span> {value}
    </p>
  );
}

function Back() {
  return (
    <Link
      href="/"
      className="inline-block rounded-md bg-zinc-800 px-4 py-2 text-white hover:bg-zinc-700"
    >
      ← Назад
    </Link>
  );
}
