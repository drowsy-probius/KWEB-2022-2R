import { registerRootComponent } from 'expo';

import { StatusBar } from 'expo-status-bar';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  TextInput,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Text>{JSON.stringify(Platform)}</Text> */}
      <TextInput style={{
        minWidth: 100,
        height: 50,
        borderColor: "grey",
        borderWidth: 2
      }} 
      autoFocus={true}
      defaultValue="asdfasdf"
      />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default registerRootComponent(App);
