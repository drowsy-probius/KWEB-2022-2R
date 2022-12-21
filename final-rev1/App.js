import React from 'react';
import { StatusBar } from 'react-native';
import NavigationStack from './Components/NavigationStack';

import { Provider } from 'react-redux';
import store from './redux/store';

export default function App() {

  StatusBar.setBackgroundColor('black');
  StatusBar.setTranslucent(true);
  StatusBar.setBarStyle('light-content');

    return (
      <Provider store={store}>
        <NavigationStack/>
      </Provider>
    )
}

