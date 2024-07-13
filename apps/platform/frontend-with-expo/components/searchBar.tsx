import { StyleSheet } from "react-native"

export default function SearchBar() {
  return (
    <div style={styles.container}>
      <input type="text" placeholder="Search..." style={styles.searchBar} />
    </div>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
  searchBar: {
    width: "80%",
    fontSize: 18,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 10,
  },
})