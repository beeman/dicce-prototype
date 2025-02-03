import { useMemo } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { useAppConfig } from '@/app-config-provider'

export function useIsAdmin() {
  const { admins } = useAppConfig()
  const { publicKey } = useWallet()

  return useMemo(() => (publicKey ? admins.includes(publicKey.toString()) : false), [publicKey])
}
