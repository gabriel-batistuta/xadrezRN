import react, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ButtonSwitch from "./src/components/button";
import Menu from "./src/components/menu";

export default function App() {
  // para desativar e ativar componentes entre si
  const [componentAActive, setComponentAActive] = useState(false);
  const [componentBActive, setComponentBActive] = useState(false);

  // ativa o botão do jogador de cima e desativa o de baixo 
  const activateComponentA = () => {
    setComponentAActive(true);
    setComponentBActive(false);
  };

  // o inverso ><
  const activateComponentB = () => {
    setComponentAActive(false);
    setComponentBActive(true);
  };

  // reload
  const desactiveComponents = () => {
    setComponentAActive(false);
    setComponentBActive(false);
  };

  // pause geral
  const pauseComponents = () {

  }

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
