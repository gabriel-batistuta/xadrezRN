import react, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ButtonSwitch from "./src/components/button";
import Menu from "./src/components/menu";

export default function App() {
  const [componentAActive, setComponentAActive] = useState(false);
  const [componentBActive, setComponentBActive] = useState(false);

  const activateComponentA = () => {
    setComponentAActive(true);
    setComponentBActive(false);
  };

  const activateComponentB = () => {
    setComponentAActive(false);
    setComponentBActive(true);
  };

  const desactiveComponents = () => {
    setComponentAActive(false);
    setComponentBActive(false);
  };

  return (
    <View style={styles.container}>
      <ButtonSwitch
        active={componentAActive}
        onPress={activateComponentA}
        rotate={true}
      />
      <Menu onPress={desactiveComponents} />
      <ButtonSwitch
        active={componentBActive}
        onPress={activateComponentB}
        rotate={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkgray",
    alignItems: "center",
    justifyContent: "center",
  },
});
