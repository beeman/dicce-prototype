import { Outlet } from 'react-router-dom'
import { Alert } from '@mantine/core'
import { useIsAdmin } from '@/features/admin/data-access/use-is-admin'

export function AdminGuard() {
  const isAdmin = useIsAdmin()

  return isAdmin ? (
    <Outlet />
  ) : (
    <Alert title="Access denied" color="red">
      You are not an admin
    </Alert>
  )
}
