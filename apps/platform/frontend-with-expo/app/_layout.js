import Header from "../components/header";
import { View, StyleSheet } from "react-native";

export default function Layout() {
  return (
    <View style={[styles.body, { background: 'linear-gradient(to bottom, #FFCDCD, #C6DFCA)' }]}>
      <Header></Header>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    height: "100vh",
    width: "100%",
  }
})