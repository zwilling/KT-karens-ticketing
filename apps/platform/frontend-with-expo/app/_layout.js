import Header from "../components/header";
import { View } from "react-native";
import { Slot } from "expo-router";
import "../styles/global.css";

import { NavigationProvider } from '../contexts/NavigationContext';


export default function Layout() {
  
  return (
    <NavigationProvider>
      <View style={[ { height: "100vh", width: "100%", background: 'linear-gradient(to bottom, #FFCDCD, #C6DFCA)' } ]}>
        <Header></Header>
        <Slot />
      </View>
    </NavigationProvider>
  )
}
