import Header from "../components/header";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Slot } from "expo-router";
import "../styles/global.css";


export default function Layout() {
  const Stack = createStackNavigator();
  
  return (
    <View style={[ { height: "100vh", width: "100%", background: 'linear-gradient(to bottom, #FFCDCD, #C6DFCA)' } ]}>
      <Header></Header>
      <Slot />
    </View>
  )
}
