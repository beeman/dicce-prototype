import { useMemo } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { PublicKey } from '@solana/web3.js'
import { LucideRefreshCw } from 'lucide-react'
import { ActionIcon, Avatar, Box, Card, Flex, Group, SimpleGrid, Skeleton, Text, Tooltip } from '@mantine/core'
import { AppToken, tokenSOL } from '@/app-config'
import { useAppConfig } from '@/app-config-provider'
import { useBalance, useTokenAccounts } from '@/features/account/data-access/use-token-accounts'
import { ExplorerIcon } from '@/features/cluster/ui'
import classes from './member-ui-token-list.module.css'

export function MemberUiTokenList() {
  const { tokens } = useAppConfig()
  const { publicKey } = useWallet()
  const queryTokenAccounts = useTokenAccounts()
  const queryBalance = useBalance()

  const accounts = useMemo(() => {
    if (!queryTokenAccounts.data) {
      return []
    }
    return queryTokenAccounts.data
  }, [queryTokenAccounts.data])

  const amount = useMemo(() => {
    if (!queryTokenAccounts.data) {
      return {}
    }
    return queryTokenAccounts.data.reduce(
      (acc, item) => {
        acc[item.account.data.parsed.info.mint] = item.account.data.parsed.info.tokenAmount.uiAmount
        return acc
      },
      {} as Record<string, string>,
    )
  }, [queryTokenAccounts.data])

  const isLoading = queryTokenAccounts.isLoading || queryBalance.isLoading

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Group justify="space-between">
        <Text fw={700}>Tokens</Text>
        <Tooltip label={isLoading ? 'Refreshing...' : 'Refresh balances'}>
          <ActionIcon
            loading={isLoading}
            size="xs"
            variant="light"
            onClick={() => Promise.all([queryTokenAccounts.refetch(), queryBalance.refetch()])}
          >
            <LucideRefreshCw size={12} />
          </ActionIcon>
        </Tooltip>
      </Group>
      <Skeleton visible={isLoading} radius="md" animate={false}>
        <SimpleGrid cols={1} mt="md">
          <TokenItem
            amount={queryBalance.data?.toString() || '0'}
            token={tokenSOL}
            decimal={9}
            pubkey={publicKey ?? undefined}
          />
          {tokens.map((item) => (
            <TokenItem
              key={item.address}
              amount={amount[item.address] || '0'}
              token={item}
              pubkey={accounts.find((a) => a.account.data.parsed.info.mint === item.address)?.pubkey ?? undefined}
            />
          ))}
        </SimpleGrid>
      </Skeleton>
    </Card>
  )
}

function TokenItem({
  pubkey,
  amount,
  decimal = 0,
  token,
}: {
  pubkey?: PublicKey
  amount: string
  decimal?: number
  token: AppToken
}) {
  return (
    <Flex key={token.address} className={classes.item} p="md" align="center" gap="md">
      <Avatar src={token.image} size={48} />
      <Group justify="space-between" style={{ flex: 1 }}>
        <Box>
          <Text size="md" fw={700}>
            {token.name}
          </Text>
          <Text size="sm" c="dimmed" fw={400}>
            {formatTokenAmount(Number(amount) / 10 ** decimal)} {token.symbol}
          </Text>
        </Box>
        {pubkey ? <ExplorerIcon path={`account/${pubkey}`} /> : null}
      </Group>
    </Flex>
  )
}

function formatTokenAmount(amount: number): string {
  if (amount >= 1_000_000_000) {
    return `${(amount / 1_000_000_000).toFixed(2)}B`
  }
  if (amount >= 1_000_000) {
    return `${(amount / 1_000_000).toFixed(2)}M`
  }
  if (amount >= 1_000) {
    return `${(amount / 1_000).toFixed(2)}K`
  }
  return amount.toFixed(2)
}
