import {
  LucideBanknote,
  LucideCoins,
  LucideCreditCard,
  LucideFileArchive,
  LucidePiggyBank,
  LucideReceipt,
  LucideReceiptText,
  LucideRepeat,
} from 'lucide-react'
import { Anchor, Card, Group, SimpleGrid, Text, UnstyledButton, useMantineTheme } from '@mantine/core'
import classes from './member-ui-dashboard.module.css'

const mockdata = [
  { title: 'Credit cards', icon: LucideCreditCard, color: 'violet' },
  { title: 'Banks nearby', icon: LucidePiggyBank, color: 'indigo' },
  { title: 'Transfers', icon: LucideRepeat, color: 'blue' },
  { title: 'Refunds', icon: LucideReceiptText, color: 'green' },
  { title: 'Receipts', icon: LucideReceipt, color: 'teal' },
  { title: 'Taxes', icon: LucideReceipt, color: 'cyan' },
  { title: 'Reports', icon: LucideFileArchive, color: 'pink' },
  { title: 'Payments', icon: LucideCoins, color: 'red' },
  { title: 'Cashback', icon: LucideBanknote, color: 'orange' },
]

export function MemberUiDashboard() {
  const theme = useMantineTheme()

  const items = mockdata.map((item) => (
    <UnstyledButton key={item.title} className={classes.item}>
      <item.icon color={theme.colors[item.color][6]} size={32} />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ))

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Group justify="space-between">
        <Text className={classes.title}>Services</Text>
        <Anchor size="xs" c="dimmed" style={{ lineHeight: 1 }}>
          + 21 other services
        </Anchor>
      </Group>
      <SimpleGrid cols={3} mt="md">
        {items}
      </SimpleGrid>
    </Card>
  )
}
