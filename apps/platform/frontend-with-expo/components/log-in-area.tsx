import { StyleSheet, Text, View } from "react-native";

export default function LogInArea() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    height: "100vh",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
});