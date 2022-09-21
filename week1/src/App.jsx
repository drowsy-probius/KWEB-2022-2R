import { registerRootComponent } from 'expo';

import {
  Platform, 
  StyleSheet, 
  View,
} from 'react-native';
import List from './List';

const App = () => {
  return (
    <View style={styles.container}>
      <List />
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
