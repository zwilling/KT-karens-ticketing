import { StyleSheet, View, Text } from "react-native"

import { eventsExample } from "../data/events"
import { useEffect } from "react"
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { Urbanist_400Regular, Urbanist_500Medium, Urbanist_600SemiBold } from '@expo-google-fonts/urbanist';

export default function Discover() {
  let [fontsLoaded] = useFonts({
    Urbanist_400Regular,
    Urbanist_500Medium,
    Urbanist_600SemiBold
  });

  useEffect(() => {
    console.log("Events example: ", eventsExample)
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.trendingTitle}>Trending</Text>
        <Text style={{ fontSize: 16, fontFamily: 'Urbanist_400Regular', fontWeight: '400' }}>Coming Up</Text>
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

