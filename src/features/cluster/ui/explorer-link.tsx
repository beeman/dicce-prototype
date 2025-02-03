import { LucideExternalLink } from 'lucide-react'
import { ActionIcon, ActionIconProps, Anchor, AnchorProps, Tooltip } from '@mantine/core'
import { useCluster } from '@/features/cluster/data-access/cluster-provider'

export function ExplorerLink({ path, label, ...props }: { path: string; label: string } & AnchorProps) {
  const { getExplorerUrl } = useCluster()
  return (
    <Anchor href={getExplorerUrl(path)} target="_blank" rel="noopener noreferrer" {...props}>
      {label}
    </Anchor>
  )
}

export function ExplorerIcon({ path, ...props }: { path: string } & ActionIconProps) {
  const { getExplorerUrl } = useCluster()
  return (
    <Tooltip label="View on Solana Explorer">
      <ActionIcon
        size="xs"
        variant="light"
        component="a"
        href={getExplorerUrl(path)}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        <LucideExternalLink size={12} />
      </ActionIcon>
    </Tooltip>
  )
}
