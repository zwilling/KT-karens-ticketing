import { StyleSheet, View, Text } from "react-native"

import { eventsExample } from "../data/events"
import { useEffect, useState } from "react"
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import TicketListItem from "../components/ticket-list-item";

import { Urbanist_400Regular, Urbanist_500Medium, Urbanist_600SemiBold } from '@expo-google-fonts/urbanist';

// TODO: Hardcoded data to be replaced with actual data
const chainIDOpenSea = 'base_sepolia';
const contractDeployer = 'crypto-cinema';
const optionsOpenSeaAPI = { method: 'GET', headers: { accept: 'application/json' } };

export default function Discover() {
  let [fontsLoaded] = useFonts({
    Urbanist_400Regular,
    Urbanist_500Medium,
    Urbanist_600SemiBold
  });

  const [events, setEvents] = useState([]);

  useEffect(() => {
    console.log('Use Effect called');

    // get all available events
    fetch(`https://testnets-api.opensea.io/api/v2/collections?chain=${chainIDOpenSea}&creator_username=${contractDeployer}`, optionsOpenSeaAPI)
      .then(response => response.json())
      .then(response => setEvents(response['collections']))
      .catch(err => console.error(err));
  }, [])

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.trendingTitle}>Trending</Text>
        <Text style={{ fontSize: 16, fontFamily: 'Urbanist_400Regular', fontWeight: '400' }}>Coming Up</Text>

        <View>
          {events.slice(0, 3).map((event, index) => (
            <TicketListItem event={event} key={index} />
          ))}
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "80%",
    margin: "auto",
  },
  trendingTitle: {
    fontSize: 24,
    fontFamily: 'Urbanist_600SemiBold',
    fontWeight: '600',
    textAlign: 'start',
  },
  categoryHeader: {
    fontSize: 16,
    fontFamily: 'Urbanist_600SemiBold',
    fontWeight: '400',
    textAlign: 'start',
    marginTop: 10,
    color: "#58566A",
  }
})

