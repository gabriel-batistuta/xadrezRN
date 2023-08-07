import react, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

const ButtonSwitch = ({ active, onPress }) => {
  const [time, setTime] = useState(60);
  const [isActive, setIsActive] = useState(false);

  const buttonColor = active ? "#7FA751" : "#8A8987";

  const handleTimerToggle = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const resetTimer = () => {
    setTime(60);
    setIsActive(false);
  };

  // Efeito para atualizar o timer a cada segundo
  useEffect(() => {
    let interval = null;

    if (active === false) {
      resetTimer();
    }

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
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
      color: "white",
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={touchAction} style={styles.button}>
        <Text style={styles.text}>{time}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonSwitch;
