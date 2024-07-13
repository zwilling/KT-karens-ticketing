import Image from "next/image"
import { StyleSheet } from "react-native"
import SearchBar from "./searchBar"

const logo = "../assets/logo.svg"

export default function Header() {
  return (
    <div style={styles.header}>
      <Image src={logo} width={100} height={100} alt="Karen Tickets" />
      <SearchBar />
    </div>
  )
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
})