import { useState } from "react";
import { View, Text, Image, Pressable, Modal, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

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
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setModalVisibility(!isModalVisible);
        }}
      >
        <TouchableOpacity activeOpacity={1} onPress={toggleModal} style={styles.overlay}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Icon name="times" size={30} color="#000" style={{ position: 'absolute', top: 10, right: 10 }} />

              <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 10, marginBottom: 20 }}>
                <Text style={[styles.textStyle, { fontSize: 20, fontWeight: "bold" }]}>Smart Wallet Flow</Text>
                <Text style={[styles.textStyle, { fontSize: 18, color: "#58566A" }]}>Smart wallet flow starts here</Text>
              </View>
              <Pressable
                style={[styles.button, styles.signUpButton]}
                onPress={() => setModalVisibility(!isModalVisible)}
              >
                <Text style={styles.textStyle}>Sign Up</Text>
              </Pressable>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisibility(!isModalVisible)}
              >
                <Text style={[styles.textStyle, { color: "white" }]}>Log In</Text>
              </Pressable>
            </View>
          </View>
        </TouchableOpacity>

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
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent black overlay
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
    width: "80%",
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
    width: "80%",
  },
  signUpButton: {
    backgroundColor: "transparent",
    borderColor: "#282739",
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonClose: {
    backgroundColor: "#58566A",
    padding: 10,
    borderRadius: 10,
  },
  textStyle: {
    color: "black",
    fontSize: 18,
    textAlign: "center",
  },
});