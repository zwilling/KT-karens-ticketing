import { StyleSheet, Text, View, Image } from "react-native";
import { useFonts } from 'expo-font';
import { Urbanist_400Regular, Urbanist_500Medium, Urbanist_600SemiBold } from '@expo-google-fonts/urbanist';

import { useEffect, useState } from "react";

import { formatDate } from "../utils/formatDate";
import TicketForSale from "../components/ticket-for-sale";

import { useRoute } from '@react-navigation/native';

import { chainIDOpenSea, optionsOpenSeaAPI, defaultTicketTypeID } from "./parameters"

export default function Tickets() {
  const route = useRoute();
  const eventId = route.params?.eventId;
  const eventAddress = route.params?.eventAddress;

  const [nftData, setNftData] = useState(undefined);

  let [fontsLoaded] = useFonts({
    Urbanist_400Regular,
    Urbanist_500Medium,
    Urbanist_600SemiBold
  });

  useEffect(() => {
    // API Call to get event data
    fetch(`https://testnets-api.opensea.io/api/v2/chain/${chainIDOpenSea}/contract/${eventAddress}/nfts/${defaultTicketTypeID}`, optionsOpenSeaAPI)
      .then(response => response.json())
      .then(response => setNftData(response['nft']))
      .catch(err => console.error(err));
  }, []);

  if (!fontsLoaded || !nftData) {
    return <></>;
  } else {
    return (
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

        <TicketForSale></TicketForSale>

      </View>
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