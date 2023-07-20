import styles from "./style";
import { View, Text, Button, TouchableOpacity } from "react-native";

export default function MenuSide() {
    return (
      <View styles={styles.side}>
        <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}>
          <Image
          source={{ uri : '.../assets/pause.png' }}
          style={styles.ImageIconStyle}
          />
          <View style={styles.SeparatorLine} />
          <Text style={styles.TextStyle}> Login Using Facebook </Text>
        </TouchableOpacity>
        {/* <Button>
            <Image source={{ uri:".../assets/pause.png" }}/>
        </Button> */}
      </View>
    );
  }