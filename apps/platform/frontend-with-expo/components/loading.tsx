import { Image } from "react-native";

export default function Loading() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Image source={{ uri: "../assets/gifs/loading.gif" }} style={{ width: 100, height: 100 }} alt="Loading..."/>
    </div>
  );
}