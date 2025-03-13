import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textinho}>EU SOU SP</Text>
      <Text style={styles.textinho}>VAI SÂO PAULO</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 200
  },
  textinho:{
    color: 'white',
    fontSize: 30,
    transform: [{rotate: '90deg'}]
  }
});
