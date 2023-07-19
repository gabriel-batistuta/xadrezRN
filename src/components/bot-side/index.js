import styles from "./style";
import { Text, Button } from "react-native";

export default function menuSide() {
    return (
      <View styles={styles.top}>
        <Button>
            <Image></Image>
        </Button>
      </View>
    );
  }