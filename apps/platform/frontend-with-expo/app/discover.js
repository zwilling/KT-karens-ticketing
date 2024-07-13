import { StyleSheet, View } from "react-native"

export default function Discover() {
  return (
    <div style={styles.container}>
      <div style={styles.trending}>
        <h1>Trending</h1>
      </div>
    </div>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
  },
  trending: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  }
})

