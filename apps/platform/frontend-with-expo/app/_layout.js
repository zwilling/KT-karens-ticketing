import Header from "../components/header";
import { View } from "react-native";
import { Slot } from "expo-router";
import "../styles/global.css";

import {
  EthersExtension,
  DynamicContextProvider,
  EthereumWalletConnectors
} from "../lib/dynamic";

import { SdkViewSectionType, SdkViewType } from "@dynamic-labs/sdk-api";

export default function Layout() {
  // useEffect(async () => {
  //   const signer = await primaryWallet.connector.ethers?.getSigner();
  //   console.log("Signer: ", signer);
  // }, []);

  return (
    <DynamicContextProvider settings={{
      environmentId: "20c52e9d-ac24-44d6-b10a-6754d033224e",
      walletConnectors: [EthereumWalletConnectors],
      walletConnectorExtensions: [EthersExtension],
      overrides: {
      views: [
        {
          type: SdkViewType.Login,
          sections: [
            {
              type: SdkViewSectionType.Email,
            },
          ],
        },
      ]
    }
    }}>
      <View style={[{ height: "100vh", width: "100%", background: 'linear-gradient(to bottom, #FFCDCD, #C6DFCA)' }]}>
        <Header></Header>
        <Slot />
      </View>
    </DynamicContextProvider>

  )
}
