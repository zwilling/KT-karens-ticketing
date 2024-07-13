import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { config as dotenvConfig } from "dotenv";

dotenvConfig();

// accounts to use for deploying
const accounts = [
  process.env.DeployerPrivateKey!,
  process.env.OrganizerPrivateKey!,
  process.env.BuyerPrivateKey!,
]

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: accounts,
    },
    zircuit: {
      url: `https://zircuit1.p2pify.com`,
      accounts: accounts,
    },
    baseSepolia: {
      url: 'https://sepolia.base.org',
      accounts: accounts,
      gasPrice: 1000000000,
    },
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.ETHERSCAN_API_KEY!,
      zircuit: process.env.ZIRCUIT_EXPLORER_API_KEY!,
      baseSepolia: process.env.BASE_BLOCKSCOUT_API_KEY!,
    },
    customChains: [
      {
        network: "sepolia",
        chainId: 11155111,
        urls: {
          apiURL: "https://api-sepolia.etherscan.io/api",
          browserURL: "https://sepolia.etherscan.io/"
        }
      },
      {
        network: "zircuit",
        chainId: 48899,
        urls: {
          apiURL: "https://explorer.zircuit.com/api/contractVerifyHardhat",
          browserURL: "https://explorer.zircuit.com"
        }
      },
      {
        network: "baseSepolia",
        chainId: 84532,
        urls: {
          // Using BlockScout here
          apiURL: "https://base-sepolia.blockscout.com/api",
          browserURL: "https://base-sepolia.blockscout.com"
        }
      },
    ]
  },

};

export default config;
