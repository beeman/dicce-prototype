import { LucideLeaf, LucideLeafyGreen, LucidePiggyBank, LucideSunrise } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Anchor, Card, Flex, Group, SimpleGrid, Text, useMantineTheme } from '@mantine/core'
import classes from './member-ui-assets.module.css'

const options = [
  { title: 'Haymaker Haze', icon: LucideLeafyGreen, color: 'violet' },
  { title: 'Sativa Sunrise', icon: LucideSunrise, color: 'indigo' },
  { title: 'DICCE Presale 1', icon: LucideLeaf, color: 'green' },
  { title: 'DICCE Yield Farm', icon: LucidePiggyBank, color: 'teal' },
  // { title: 'Transfers', icon: LucideRepeat, color: 'blue' },
  // { title: 'Refunds', icon: LucideReceiptText, color: 'green' },
  // { title: 'Receipts', icon: LucideReceipt, color: 'teal' },
  // { title: 'Taxes', icon: LucideReceipt, color: 'cyan' },
  // { title: 'Whitepaper', icon: LucideFileArchive, color: 'pink' },
  // { title: 'Manage Tokens', icon: LucideCoins, color: 'red' },
  // { title: 'Discounts', icon: LucideBanknote, color: 'orange' },
]

export function MemberUiAssets() {
  const theme = useMantineTheme()

  const items = options.map((item) => (
    <Flex key={item.title} className={classes.item} p="md" direction="column" align="center" gap="md" py={28}>
      <item.icon color={theme.colors[item.color][6]} size={64} />
      <Text size="xl" mt={7} fw={700}>
        {item.title}
      </Text>
    </Flex>
  ))

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Group justify="space-between">
        <Text className={classes.title}>Assets</Text>
        <Anchor component={Link} to="#" size="xs" c="dimmed" style={{ lineHeight: 1 }}>
          See all assets
        </Anchor>
      </Group>
      <SimpleGrid cols={2} mt="md">
        {items}
      </SimpleGrid>
    </Card>
  )
}
