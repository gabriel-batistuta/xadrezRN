import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './style';

export default function MenuSide() {
    return (
      <View style={styles.container}>
        <Text style={styles.timer}>{`${minutes}:${seconds}`}</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={toggle} style={[styles.button, styles.startButton]}>
            <Text style={styles.buttonText}>{isActive ? 'Pause' : 'Start'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={reset} style={[styles.button, styles.reloadButton]}>
            <Text style={styles.buttonText}>Reload</Text>
          </TouchableOpacity>      
        </View>
      </View>
    );
  }