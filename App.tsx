import react, { useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import ButtonPlayer from "./src/components/button";
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

  // reload do menu - desativa os dois botões
  const desactiveComponents = () => {
    setComponentAActive(false);
    setComponentBActive(false);
  };

  // pause geral
  // const pauseComponents = () {

  // }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={true}
        backgroundColor="black"
        networkActivityIndicatorVisible={true}
      />
      <ButtonPlayer
        active={componentAActive}
        onPress={activateComponentA}
        rotate={true}
      />
      <Menu onPress={desactiveComponents} />
      <ButtonPlayer
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
