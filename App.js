import react from "react";
import { StyleSheet, View } from "react-native";
import TopSide from "./src/components/top-side";
import BotSide from "./src/components/bot-side";
import MenuSide from "./src/components/menu-side";

export default function App() {
  return (
    <View style={styles.container}>
      <TopSide />
      <MenuSide />
      <BotSide />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  top: {
    width: "100vw",
    height: "45vh",
  },
  bot: {
    width: "100vw",
    height: "45vh",
  },
});
