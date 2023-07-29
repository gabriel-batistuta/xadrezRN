import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './style';

export default function MenuSide() {
  
  const [time, setTime] = useState(60)

  const [imagePlay, setImagePlay] = useState('../assets/play.png')

  function changeImage() {
    if (imagePlay != "../assets/play.png") {
      setImagePlay("../assets/play.png")
    } else {
      setImagePlay("../assets/pause.png")
    }
  }

  return (
    <View>
      <TouchableOpacity  onPress={changeImage} style={styles.buttonStyle} activeOpacity={0.5}> 
        <Image 
          source={require({imagePlay})} 
          style={styles.buttonImageIconStyle} 
        /> 
      </TouchableOpacity>
    </View>
  )
}