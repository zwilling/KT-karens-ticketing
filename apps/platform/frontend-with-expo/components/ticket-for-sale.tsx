import { useState, useEffect } from "react";
import { View, Text, Image, Pressable, Modal, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { formatUnits } from 'ethers';

import { DynamicWidget } from "../lib/dynamic";

import { useEnsName, useEnsAvatar } from "wagmi";
import { sepolia } from 'wagmi/chains'
import { normalize } from 'viem/ens'

import { prepareBuyTx } from "../app/prepareBuyTx";


export default function TicketForSaleItem({ listing }) {
  const [isModalVisible, setModalVisibility] = useState(false);
  let avatarURL = "https://i.imgur.com/m0w4b4C.png";

  const amount =
      Number.parseInt(listing.protocol_data.parameters.totalOriginalConsiderationItems)
    - Number.parseInt(listing.protocol_data.parameters.counter);
  
  const price = formatUnits(listing.price.current.value, listing.price.current.decimals);
  const currency = listing.price.current.currency;
  const offerer = listing.protocol_data.parameters.offerer;

  const { data: ensNameData, error: ensNameError } = useEnsName({ address: offerer, chainId: sepolia.id });
  if (ensNameError) {
    console.error('ensNameError', ensNameError);
  }

  const { data: ensAvatarData, error: ensAvatarError } = useEnsAvatar({ name: normalize(ensNameData), chainId: sepolia.id });
  if (ensNameData) {
      if (ensAvatarError) {
          console.error('ensAvatarError', ensAvatarError);
      }
      if (ensAvatarData) {
          avatarURL = ensAvatarData;
      }
  }

  const toggleModal = () => {
    if (!isModalVisible) {
      preSignUpWallet();
    } 
    setModalVisibility(!isModalVisible);

    // TODO: move after wallet connection
    prepareBuyTx({
        listingHash: listing.order_hash,
        protocolAddr: listing.protocol_address,
        fulfillerAddr: '0xCAEf9F8701aA4A1a8D8564D6871bf5bf8ACA9c1e',
    });
  }

  const preSignUpWallet = () => {
    const options = {
      method: "POST",
      headers: { Authorization: 'Bearer <token>', 'Content-Type': 'application/json' },
      body: '{"identifier":"mpascualacheson1@gmail.com","type":"email", "chain":"ETH", ,"socialProvider":"emailOnly"}'
    }

    fetch(`https://app.dynamicauth.com/api/v0/environments/${'20c52e9d-ac24-44d6-b10a-6754d033224e'}/embeddedWallets`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  }

  return (
    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10, width: "100%" }}>
      <Image source={{ uri: avatarURL }} style={{ width: 80, height: 80, borderRadius: "100%" }} alt="ticket" />
      <View style={{ flexGrow: 1, padding: 10 }}>
        <Text>{`${amount} Tickets`}</Text>
        <Text>{ensNameData ?? "..."}</Text>
      </View>
      <Pressable onPress={toggleModal} style={{ backgroundColor: "black", padding: 10, borderRadius: 10 }}>
          <Text style={{ color: "white" }}>{`${price} ${currency}`}</Text>
      </Pressable>

      {/* Modal */}
      <Modal
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setModalVisibility(!isModalVisible);
        }}>
    
        <TouchableOpacity activeOpacity={1} onPress={toggleModal} style={styles.overlay}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Icon name="times" size={30} color="#000" style={{ position: 'absolute', top: 10, right: 10 }} />

              <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 10, marginBottom: 20 }}>
                <Text style={[styles.textStyle, { fontSize: 20, fontWeight: "bold" }]}>Smart Wallet Flow</Text>
                <Text style={[styles.textStyle, { fontSize: 18, color: "#58566A" }]}>Smart wallet flow starts here</Text>
              </View>
            
              <DynamicWidget />
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