import { StyleSheet, Text, View, Image } from "react-native";
import { useFonts } from 'expo-font';
import { Urbanist_400Regular, Urbanist_500Medium, Urbanist_600SemiBold } from '@expo-google-fonts/urbanist';

import {ticketData} from "../data/ticketData";
import { useEffect } from "react";

import { formatDate } from "../utils/formatDate";

export default function Tickets() {
  let [fontsLoaded] = useFonts({
    Urbanist_400Regular,
    Urbanist_500Medium,
    Urbanist_600SemiBold
  });

  useEffect(() => {
    console.log("Ticket data: ", ticketData);
  }, []); 

  if (!fontsLoaded) {
    return <></>;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.childComponent}>
          <Image source={{ uri: ticketData.nft.display_image_url }} style={{ width: 400, height: 300, borderRadius: 10 }} alt={ticketData.nft.name}></Image>
        </View>

        <View style={styles.childComponent}>
          <Text style={styles.title}>{ticketData.nft.name}</Text>
        </View>

        <View style={styles.childComponent}>
          <Text style={{ fontSize: 16, fontWeight: "semibold" }}>{formatDate(ticketData.nft.traits[2].value)}</Text>
        </View>

        <View style={styles.childComponent}>
          <Text style={{ fontSize: 16, fontWeight: "semibold" }}>{ticketData.nft.traits[0].value}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 24,
    height: "100vh",
    flexDirection: "column",
    flexGap: 10,
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