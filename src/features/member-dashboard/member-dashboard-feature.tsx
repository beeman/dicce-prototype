import { Box, Container, Grid, Stack, Text, Title } from '@mantine/core'
import { MemberUiAssets } from '@/features/member-dashboard/ui/member-ui-assets'
import { MemberUiTokenList } from '@/features/member-dashboard/ui/member-ui-token-list'

export function MemberDashboardFeature() {
  return (
    <Container py="xl">
      <Stack gap="xl">
        <Stack gap="xl" align="center">
          <Title>Member Dashboard</Title>
          <Text c="dimmed">Manage your DICCE tokens and assets</Text>
        </Stack>
        <Box>
          <MemberDashboardGrid />
        </Box>
      </Stack>
    </Container>
  )
}

export function MemberDashboardGrid() {
  return (
    <Grid gutter="md">
      <Grid.Col span={{ base: 12, sm: 8 }}>
        <MemberUiAssets />
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 4 }}>
        <MemberUiTokenList />
      </Grid.Col>
    </Grid>
  )
}
