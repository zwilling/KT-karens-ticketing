import React, { useEffect } from "react"
import Image from "next/image"
import { StyleSheet } from "react-native"
import SearchBar from "./searchBar"

import { Link, usePathname } from 'expo-router';

const logo = "../assets/logo.svg"

export default function Header() {
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  useEffect(() => {
    console.log(pathname);
  })

  return (
    <div style={styles.header}>
      <Link href="/">
        <Image src={logo} width={100} height={100} alt="Karen Tickets" />
      </Link>
      {isHomePage && <SearchBar />}
    </div>
  )
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2, // Specify the width of the bottom border
    borderBottomColor: "#000", // Specify the color of the bottom border
  },
})