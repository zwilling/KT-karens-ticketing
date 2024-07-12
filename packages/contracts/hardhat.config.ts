import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { config as dotenvConfig } from "dotenv";

dotenvConfig();


const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    zircuit: {
      url: `https://zircuit1.p2pify.com`,
      accounts: [
        process.env.DeployerPrivateKey!,
        process.env.OrganizerPrivateKey!,
        process.env.BuyerPrivateKey!,
      ],
    },
  },
  etherscan: {
    apiKey: {
      zircuit: process.env.ZIRCUIT_EXPLORER_API_KEY!,
    },
    customChains: [
      {
        network: "zircuit",
        chainId: 48899,
        urls: {
          apiURL: "https://explorer.zircuit.com/api",
          browserURL: "https://explorer.zircuit.com"
        }
      }
    ]
  },

};

export default config;
