import react, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

const ButtonPlayer = ({ active, onPress, rotate }) => {
  // tempo de cada jogador
  const initialTime = 120;

  const [time, setTime] = useState(initialTime);
  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");
  const [isActive, setIsActive] = useState(false);

  const buttonColor = active ? "#7FA751" : "#8A8987";
  const textColor = active ? "white" : "black";

  const handleTimerToggle = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const resetTimer = () => {
    setTime(initialTime);
    setIsActive(false);
  };

  // Efeito para atualizar o timer a cada segundo
  useEffect(() => {
    if (active === false) {
      resetTimer();
    }

    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time === 0) {
      resetTimer();
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  function touchAction() {
    onPress(onPress);
    handleTimerToggle();
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      margin: 0,
    },
    buttonRotate: {
      backgroundColor: buttonColor,
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      width: "100%",
      transform: [{ rotate: "180deg" }],
    },
    button: {
      backgroundColor: buttonColor,
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      width: "100%",
    },
    text: {
      fontSize: 70,
      color: textColor,
      fontWeight: "bold",
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={touchAction}
        style={rotate ? styles.buttonRotate : styles.button}
      >
        <Text style={styles.text}>{`${minutes}:${seconds}`}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonPlayer;
