import { ReactNode, Suspense } from 'react'
import { NavLink as Link } from 'react-router-dom'
import { AppShell, Loader, NavLink } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { AppLayoutHeader, AppLayoutHeaderLink } from '@/app-layout-header'
import { ClusterUiChecker } from '@/features/cluster/ui'

export interface AppLayoutLink {
  label: string
  to: string
}

export function AppLayout({
  children,
  headerLinks = [],
  navbarLinks = [],
  profile,
}: {
  children: ReactNode
  headerLinks?: AppLayoutHeaderLink[]
  navbarLinks?: AppLayoutLink[]
  profile: ReactNode
}) {
  const [opened, { toggle, close }] = useDisclosure()
  const hasNavbar = navbarLinks.length > 0

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={
        hasNavbar
          ? {
              width: 300,
              breakpoint: 'sm',
              collapsed: { mobile: !opened },
            }
          : undefined
      }
      padding="md"
    >
      <AppShell.Header>
        <AppLayoutHeader hasNavbar={hasNavbar} links={headerLinks} profile={profile} opened={opened} toggle={toggle} />
      </AppShell.Header>

      {hasNavbar ? (
        <AppShell.Navbar p="md">
          {navbarLinks.map((link) => (
            <NavLink
              key={link.to}
              component={Link}
              to={link.to}
              label={link.label}
              onClick={() => {
                close()
              }}
            />
          ))}
        </AppShell.Navbar>
      ) : null}

      <AppShell.Main>
        <Suspense fallback={<Loader />}>
          <ClusterUiChecker>
            <div />
          </ClusterUiChecker>
          {children}
        </Suspense>
      </AppShell.Main>
    </AppShell>
  )
}
