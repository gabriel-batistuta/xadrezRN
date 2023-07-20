import { StyleSheet, Text, View } from 'react-native';
import TopSide from './src/components/top-side';
import BotSide from './src/components/bot-side';
import MenuSide from './src/components/menu-side';

export default function App() {
  return (
    <View>
      <TopSide/>
      <MenuSide/>
      <BotSide/>
    </View>
  );
}