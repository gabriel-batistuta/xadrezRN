import react, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";

function ButtonTop() {
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
    <View
      style={StyleSheet.create({
        flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        margin: 0,
      })}
    >
      <TouchableOpacity
        onPress={pressEvent}
        style={{
          backgroundColor: buttonColor,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Text
          style={StyleSheet.create({
            fontSize: 70,
            color: "white",
          })}
        >
          {time}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

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

  return (
    <View
      style={StyleSheet.create({
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 8,
        width: "100%",
        backgroundColor: "black",
      })}
    >
      <Text
        style={StyleSheet.create({
          fontSize: 20,
          fontWeight: "bold",
          color: "white",
        })}
      >
        {seconds}
      </Text>
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

function ButtonBot() {
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
    <View
      style={StyleSheet.create({
        flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        margin: 0,
      })}
    >
      <TouchableOpacity
        onPress={pressEvent}
        style={StyleSheet.create({
          backgroundColor: buttonColor,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
        })}
      >
        <Text
          style={StyleSheet.create({
            fontSize: 70,
            color: "white",
          })}
        >
          {time}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  const [topMove, setTopMove] = useState("false");

  function enemyMove(enemy) {
    if (enemy == top) {
      //
    } else {
      //
    }
  }

  return (
    <View
      style={StyleSheet.create({
        flex: 1,
        backgroundColor: "darkgray",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      <ButtonTop onPress={enemyMove()} />
      <Menu />
      <ButtonBot onPress={enemyMove()} />
    </View>
  );
}
