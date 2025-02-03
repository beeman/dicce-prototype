import { lazy } from 'react'
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'
import { Group } from '@mantine/core'
import { AppLayout } from '@/app-layout'
import { AdminCollectionsFeature } from '@/features/admin-collections/admin-collections-feature'
import { AdminDashboardFeature } from '@/features/admin-dashboard/admin-collections-feature'
import { AdminGuard } from '@/features/admin/data-access'
import { ClusterUiSelect } from '@/features/cluster/ui/cluster-ui-select'
import { MemberDashboardFeature } from '@/features/member-dashboard/member-dashboard-feature'
import { WalletButton } from '@/features/solana/solana-provider'
import { UiThemeToggler } from '@/ui/ui-theme-toggler'
import { HomeFeature } from './features/home/home.feature'

const AccountList = lazy(() => import('@/features/account/account-feature-list'))
const AccountDetail = lazy(() => import('@/features/account/account-feature-detail'))
const ClusterFeature = lazy(() => import('@/features/cluster/cluster-feature'))
const CollectionDetailFeature = lazy(() => import('@/features/collection/collection-detail-feature'))
const CollectionGridFeature = lazy(() => import('@/features/collection/collection-grid-feature'))

const headerLinks = [
  { label: 'Home', to: '/home' },
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Account', to: '/account' },
  { label: 'Collections', to: '/collections' },
]

const router = createBrowserRouter([
  {
    element: (
      <AppLayout
        headerLinks={headerLinks}
        profile={
          <Group>
            <UiThemeToggler />
            <WalletButton />
            <ClusterUiSelect />
          </Group>
        }
      >
        <Outlet />
      </AppLayout>
    ),
    children: [
      { index: true, element: <Navigate to="./home" replace /> },
      { path: '/home', element: <HomeFeature /> },
      { path: '/dashboard', element: <MemberDashboardFeature /> },
      { path: '/account', element: <AccountList /> },
      { path: '/account/:address', element: <AccountDetail /> },
      { path: '/clusters', element: <ClusterFeature /> },
      { path: '/collections', element: <CollectionGridFeature /> },
      { path: '/collections/:collection', element: <CollectionDetailFeature /> },
    ],
  },
  {
    path: '/admin/*',
    element: <AdminGuard />,
    children: [
      {
        path: '*',
        element: (
          <AppLayout
            headerLinks={headerLinks}
            navbarLinks={[
              { label: 'Dashboard', to: '/admin/dashboard' },
              { label: 'Collections', to: '/admin/collections' },
              // { label: 'Clusters', to: '/clusters' },
            ]}
            profile={
              <Group>
                <UiThemeToggler />
                <WalletButton />
                <ClusterUiSelect />
              </Group>
            }
          >
            <Outlet />
          </AppLayout>
        ),
        children: [
          { index: true, element: <Navigate to="./dashboard" replace /> },
          { path: 'dashboard', element: <AdminDashboardFeature /> },
          { path: 'collections', element: <AdminCollectionsFeature /> },
        ],
      },
    ],
  },
])

export function AppRoutes() {
  return <RouterProvider router={router} />
}
