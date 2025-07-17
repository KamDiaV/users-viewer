import { getUser } from '@/services/users'
import { notFound } from 'next/navigation'
import UserDetailContent from '@/components/UserDetailContent'

interface UserPageProps {
  params: { id: string }
  searchParams: Record<string, any>
}

export default async function UserPage({
  params,
  searchParams,      // мы его берём, но можем не использовать
}: UserPageProps) {
  const user = await getUser(params.id)

  if (!user) {
    notFound()
  }

  return <UserDetailContent user={user} />
}
