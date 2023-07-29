import react from 'react';
import styles from "./style";
import { View, Text } from "react-native";

export default function TopSide() {
    return (
      <View style={styles.side}>
        <Text style={styles.text}>24:00</Text>
      </View>
    );
  }