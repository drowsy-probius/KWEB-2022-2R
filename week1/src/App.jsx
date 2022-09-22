import { registerRootComponent } from 'expo';
import React from 'react';
import {
  StyleSheet, 
  View,
} from 'react-native';
import TodoList from './components/TodoList';


const App = () => {
  return (
    <View style={styles.container}>
      <TodoList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c1efff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default registerRootComponent(App);
