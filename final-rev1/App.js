import React from 'react';
import { StatusBar } from 'react-native';
import NavigationStack from './Components/NavigationStack';

export default function App() {

  StatusBar.setBackgroundColor('black');
  StatusBar.setTranslucent(true);
  StatusBar.setBarStyle('light-content');

    return (
      <>
        <NavigationStack/>
      </>
      
    )
}
