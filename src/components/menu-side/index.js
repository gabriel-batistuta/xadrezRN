import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import styles from "./style";

const playImage = require("../assets/play.png");
const pauseImage = require("../assets/pause.png");

const TimerComponent = () => {
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

  return (
    <View style={styles.container}>
      <Text>Tempo restante: {seconds} segundos</Text>
      <TouchableOpacity onPress={handleTimerToggle} style={styles.button}>
        <Image
          source={isActive ? pauseImage : playImage}
          style={styles.buttonImageIconStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TimerComponent;
