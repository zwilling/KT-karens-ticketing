import { useState } from "react";
import { View, Text, Image, Pressable, Modal } from "react-native";

export default function TicketForSale() {
  const [isModalVisible, setModalVisibility] = useState(false);

  return (
    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10, width: "100%" }}>
      <Image source={{ uri: "https://i.imgur.com/m0w4b4C.png" }} style={{ width: 80, height: 80, borderRadius: "100%" }} alt="ticket" />
      <View style={{ flexGrow: 1, padding: 10 }}>
        <Text>1 ticket</Text>
        <Text>Official Organizer</Text>
      </View>
      <Pressable style={{ backgroundColor: "black", padding: 10, borderRadius: 10 }}>
        <Text style={{ color: "white" }}>Buy for 19,65</Text>
      </Pressable>
    </View> 
  )
}