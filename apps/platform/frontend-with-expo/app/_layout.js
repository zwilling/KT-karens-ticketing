import Header from "../components/header";
import { View, StyleSheet } from "react-native";
import { Slot } from "expo-router";
import "../styles/global.css";

export default function Layout() {
  return (
    <View style={[ { background: 'linear-gradient(to bottom, #FFCDCD, #C6DFCA)' } ]}>
      <Header></Header>
      <Slot />
    </View>
  )
}
