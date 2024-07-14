import { StyleSheet } from "react-native"
import { useState } from "react"

export default function SearchBar({ handleSearch }) {
  const [query, setQuery] = useState("");

  const onChange = (e) => {
    const value = e.target.value;
    setQuery(e.target.value);
    handleSearch(value);
  }

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search..."
        style={styles.searchBar}
        value={query}
        onChange={ onChange } />
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