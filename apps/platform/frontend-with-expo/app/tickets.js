import { StyleSheet, Text, View, Image } from "react-native";
import { useFonts } from 'expo-font';
import { Urbanist_400Regular, Urbanist_500Medium, Urbanist_600SemiBold } from '@expo-google-fonts/urbanist';

import { useEffect, useState } from "react";

import { WagmiProvider } from 'wagmi'
import { wagmiConfig } from './wagmi-config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { formatDate } from "../utils/formatDate";
import TicketForSaleItem from "../components/ticket-for-sale";

import { useRoute } from '@react-navigation/native';

import { chainIDOpenSea, optionsOpenSeaAPI, defaultTicketTypeID } from "./parameters"

export default function Tickets() {
  const route = useRoute();
  const eventId = route.params?.eventID;
  const eventAddress = route.params?.eventAddress;

  const [nftData, setNftData] = useState(undefined);
  const [saleListings, setSellListings] = useState([]);

  let [fontsLoaded] = useFonts({
    Urbanist_400Regular,
    Urbanist_500Medium,
    Urbanist_600SemiBold
  });

  const queryClient = new QueryClient()

  useEffect(() => {
    // get event data
    fetch(`https://testnets-api.opensea.io/api/v2/chain/${chainIDOpenSea}/contract/${eventAddress}/nfts/${defaultTicketTypeID}`, optionsOpenSeaAPI)
      .then(response => response.json())
      .then(response => setNftData(response['nft']))
      .catch(err => console.error(err));

    // get ticket sell listings
    fetch(`https://testnets-api.opensea.io/api/v2/listings/collection/${eventId}/all`, optionsOpenSeaAPI)
      .then(response => response.json())
      .then(response => setSellListings(response['listings']))
      .catch(err => console.error(err));
  }, []);

  if (!fontsLoaded || !nftData) {
    return <></>;
  } else {
    return (
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <View style={styles.container}>
            <View>
              <View style={styles.childComponent}>
                <Image source={{ uri: nftData.display_image_url }} style={{ width: 400, height: 300, borderRadius: 10 }} alt={nftData.name}></Image>
              </View>

              <View style={styles.childComponent}>
                <Text style={styles.title}>{nftData.name}</Text>
              </View>

              <View style={styles.childComponent}>
                <Text style={{ fontSize: 16, fontWeight: "semibold" }}>{formatDate(nftData.traits[2].value)}</Text>
              </View>

              <View style={styles.childComponent}>
                <Text style={{ fontSize: 16, fontWeight: "semibold" }}>{nftData.traits[0].value}</Text>
              </View>
            </View>

            <View>
              {saleListings.slice(0, 3).map((listing, index) => (
                <TicketForSaleItem listing={listing} key={index} />
              ))}
            </View>

          </View>
        </QueryClientProvider>
      </WagmiProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 24,
    height: "100vh",
    width: "80%",
    position: "relative",
    flexDirection: "column",
    flexGap: 10,
    margin: "auto",
  },
  title: {
    fontSize: 24,
    fontFamily: 'Urbanist_600SemiBold',
    fontWeight: '600',
    textAlign: 'start'
  },
  childComponent: {
    marginBottom: 10,
  }
});