import { useState } from "react";
import { View, Text, Image, Pressable, Modal, StyleSheet } from "react-native";

export default function TicketForSale() {
  const [isModalVisible, setModalVisibility] = useState(false);
  
  const toggleModal = () => {
    setModalVisibility(!isModalVisible);
  }

  return (
    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10, width: "100%" }}>
      <Image source={{ uri: "https://i.imgur.com/m0w4b4C.png" }} style={{ width: 80, height: 80, borderRadius: "100%" }} alt="ticket" />
      <View style={{ flexGrow: 1, padding: 10 }}>
        <Text>1 ticket</Text>
        <Text>Official Organizer</Text>
      </View>
      <Pressable onPress={toggleModal} style={{ backgroundColor: "black", padding: 10, borderRadius: 10 }}>
        <Text style={{ color: "white" }}>Buy for 19,65</Text>
      </Pressable>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setModalVisibility(!isModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Your Custom Modal Content</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setIsModalVisible(!isModalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    textAlign: "center",
    color: "black",
    fontSize: 18,
  },
  button: {
    backgroundColor: "#FF9900",
    padding: 10,
    borderRadius: 10,
  },
  buttonClose: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  textStyle: {
    color: "black",
    fontSize: 18,
  },
});