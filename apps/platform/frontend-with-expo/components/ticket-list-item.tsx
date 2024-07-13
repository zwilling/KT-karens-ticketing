import { View, Image, Text, Pressable, StyleSheet, } from "react-native";
import { Link } from "expo-router";
import Clamp from 'react-multiline-clamp';


export default function TicketListItem({ event }) {
  return (
    <View style={{ paddingTop: 20, display: "flex", flexDirection: "row", alignItems: "center" }}>
      <Image source={{ uri: event.image_url }} style={{ width: 100, height: 100, borderRadius: 10 }} alt={event.name}></Image>
      <View style={{ padding: 20, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Clamp lines={3}>
          <Text style={{ fontSize: 16, fontWeight: "semibold" }}>{event.name}</Text>
        </Clamp>
        <Text style={{ fontSize: 12, color: "#888" }}>22 July, 2024</Text>
      </View>
      <Pressable style={styles.goToTicketsButton}>
        <Link href="/tickets">
          <Text style={{ color: "#fff" }}>Get Tickets</Text>
        </Link>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  goToTicketsButton: {
    backgroundColor: "#282739",
    padding: 10,
    borderRadius: 10,
  }
});