import react, { useState, useEffect } from "react";
import styles from "./style";
import { View, Text, TouchableOpacity } from "react-native";

export default function TopSide() {
  const [time, setTime] = useState(60);
  const [isActive, setIsActive] = useState(false);

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

  const [buttonColor, setButtonColor] = useState("gray");

  function pressEvent() {
    if (isActive != false) {
      setButtonColor("green");
    } else {
      setButtonColor("gray");
    }
    handleTimerToggle();
  }

  return (
    <View>
      <TouchableOpacity
        onPress={pressEvent}
        style={{ backgroundColor: buttonColor, flex: 1, alignItems: "center" }}
      >
        <Text style={styles.time}>{time}</Text>
      </TouchableOpacity>
    </View>
  );
}
