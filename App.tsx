import react, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import ButtonSwitch from "./src/components/button";

function Menu() {
  const [seconds, setSeconds] = useState(60);
  const [isActive, setIsActive] = useState(false);

  // Função para lidar com o clique no botão de pausar/iniciar o timer
  const handleTimerToggle = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  // Função para reiniciar o timer quando chegar a zero
  const resetTimer = () => {
    setSeconds(60);
    setIsActive(false);
  };

  // Efeito para atualizar o timer a cada segundo
  useEffect(() => {
    let interval = null;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      resetTimer();
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      padding: 8,
      width: "100%",
      backgroundColor: "black",
    },
    text: {
      fontSize: 20,
      fontWeight: "bold",
      color: "white",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{seconds}</Text>
      <TouchableOpacity onPress={handleTimerToggle}>
        {isActive ? (
          <Entypo name="controller-paus" size={30} color="white" />
        ) : (
          <Entypo name="controller-play" size={30} color="white" />
        )}
      </TouchableOpacity>
    </View>
  );
}

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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "darkgray",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <View style={styles.container}>
      <ButtonSwitch active={componentAActive} onPress={activateComponentA} />
      <Menu />
      <ButtonSwitch active={componentBActive} onPress={activateComponentB} />
    </View>
  );
}
