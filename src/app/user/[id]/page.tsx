import { getUser } from '@/services/users'
import { notFound } from 'next/navigation'
import UserDetailContent from '@/components/UserDetailContent'

export default async function UserPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const user = await getUser(id)
  if (!user) {
    notFound()
  }

  return <UserDetailContent user={user} />
}
