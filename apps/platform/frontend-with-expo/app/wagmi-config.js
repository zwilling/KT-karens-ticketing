import { http, createConfig } from 'wagmi'
import { sepolia, baseSepolia } from 'wagmi/chains'

export const wagmiConfig = createConfig({
  chains: [sepolia, baseSepolia],
  transports: {
    [baseSepolia.id]: http(),
    [sepolia.id]: http(),
  },
})