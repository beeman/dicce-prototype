import { ReactNode, useMemo } from 'react'
import { LucideShield } from 'lucide-react'
import { NavLink as Link, useLocation } from 'react-router-dom'
import { ActionIcon, Burger, Button, Group, Text } from '@mantine/core'
import { useIsAdmin } from '@/features/admin/data-access'

export interface AppLayoutHeaderLink {
  label: string
  to: string
}

export function AppLayoutHeader({
  profile,
  hasNavbar,
  links = [],
  opened,
  toggle,
}: {
  profile: ReactNode
  hasNavbar: boolean
  links?: AppLayoutHeaderLink[]
  opened: boolean
  toggle: () => void
}) {
  const isAdmin = useIsAdmin()
  const { pathname } = useLocation()

  const linksWithAdmin = useMemo(
    () =>
      isAdmin
        ? [
            ...links,
            {
              label: 'Admin',
              to: '/admin',
            },
          ]
        : links,
    [isAdmin, links],
  )

  return (
    <Group justify="space-between" align="center" h="100%" px="md">
      <Group justify="center" align="center" wrap="nowrap">
        {hasNavbar ? <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" /> : null}
        <Text component={Link} to="/" size="xl" fw={700}>
          🍀 DICCE
        </Text>
        {linksWithAdmin.length ? (
          <Group>
            {linksWithAdmin.map((link) => (
              <Button
                key={link.to}
                component={Link}
                to={link.to}
                variant={pathname.startsWith(link.to) ? 'filled' : 'light'}
              >
                {link.label}
              </Button>
            ))}
          </Group>
        ) : null}
      </Group>
      <Group justify="center" align="center">
        {isAdmin ? (
          <ActionIcon variant="light" component={Link} to="/admin">
            <LucideShield size={20} />
          </ActionIcon>
        ) : null}
        {profile}
      </Group>
    </Group>
  )
}
