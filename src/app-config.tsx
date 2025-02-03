export interface AppToken {
  address: string
  name: string
  symbol: string
  image: string
}

export interface AppConfig {
  name: string
  description: string
  admins: string[]
  tokens: AppToken[]
}

export const tokenSOL: AppToken = {
  address: 'So11111111111111111111111111111111111111112',
  name: 'SOL',
  symbol: 'SOL',
  image:
    'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
}
const tokens: AppToken[] = [
  {
    address: 'tokesT5zrhNLvci1gubDRaxHiaYvzjuRbGR4zJvQoFG',
    name: 'Tokes',
    symbol: 'TOKE',
    image: 'https://raw.githubusercontent.com/beeman/dicce-collections/refs/heads/main/token/dicce-token.png',
  },
  {
    address: 'HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr',
    name: 'EURO Coin',
    symbol: 'EURC',
    image: 'https://6778953.fs1.hubspotusercontent-na1.net/hubfs/6778953/Brand/EURC/EURC-icon_128x128.png',
  },
  {
    address: '4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU',
    name: 'USD Coin',
    symbol: 'USDC',
    image:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU/logo.png',
  },
]

export const appConfig = {
  name: 'DICCE',
  description: 'DICCE is a Work in Progress!',
  admins: [
    'FeeSoLT7WdoZVXsBPSZc7WKEuhVDVA1TKrNQoHacvxYm',
    'SAMUiSyBBr3UsjyzAQo4GWQ4wFr6VFYsUYcCZcBqR97',
    'DXppMQGNVnp3upWYzMoXiSDjZFfwbG7cUwVpzbbdpr1u',
  ],
  tokens,
}
