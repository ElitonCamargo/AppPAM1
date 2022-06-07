import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import styles from './AppEstilo';
import Titulo from './components/Titulo';

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo/>     
      <StatusBar style="auto" />
    </View>
  );
}
