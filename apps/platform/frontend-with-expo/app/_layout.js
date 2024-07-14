import Header from "../components/header";
import { View } from "react-native";
import { Slot } from "expo-router";
import "../styles/global.css";
import Toast from 'react-native-toast-message';


import {
  EthersExtension,
  DynamicContextProvider,
  EthereumWalletConnectors
} from "../lib/dynamic";

import { SdkViewSectionType, SdkViewType } from "@dynamic-labs/sdk-api";
import { baseSepolia } from "viem/chains";

export default function Layout() {
  // useEffect(async () => {
  //   const signer = await primaryWallet.connector.ethers?.getSigner();
  //   console.log("Signer: ", signer);
  // }, []);

  const evmNetworks = [
    {
      blockExplorerUrls: ['https://etherscan.io/'],
      chainId: 1,
      chainName: 'Ethereum Mainnet',
      iconUrls: ['https://app.dynamic.xyz/assets/networks/eth.svg'],
      name: 'Ethereum',
      nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
      },
      networkId: 1,

      rpcUrls: ['https://mainnet.infura.io/v3/'],
      vanityName: 'ETH Mainnet',
    },
    {
      blockExplorerUrls: ['https://base-sepolia.blockscout.com'],
      chainId: 84532,
      chainName: 'Base Sepolia',
      iconUrls: ['https://app.dynamic.xyz/assets/networks/eth.svg'],
      name: 'Base Sepolia',
      nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
      },
      networkId: 84532,
      rpcUrls: ['https://sepolia.base.org'],

      vanityName: 'Base Sepolia',
    },
  ];


  return (
    <DynamicContextProvider settings={{
      environmentId: "20c52e9d-ac24-44d6-b10a-6754d033224e",
      walletConnectors: [EthereumWalletConnectors],
      walletConnectorExtensions: [EthersExtension],
      overrides: {
        evmNetworks,
        // views: [
        //   {
        //     type: SdkViewType.Login,
        //     sections: [
        //       {
        //         type: SdkViewSectionType.Email,
        //       },
        //     ],
        //   },
        // ]
      },
      walletConnectPreferredChains: [`eip155:${baseSepolia.id}`],
    }}>
      <View style={[{ height: "100vh", width: "100%", background: 'linear-gradient(to bottom, #FFCDCD, #C6DFCA)' }]}>
        <Header></Header>
        <Slot />
      </View>
      <Toast/>
    </DynamicContextProvider>

  )
}
