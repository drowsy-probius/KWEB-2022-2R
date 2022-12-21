import React, { useEffect } from 'react';

import NavigationStack from './Components/NavigationStack';

import { Provider } from 'react-redux';
import store from './redux/store';

export default function App() {
    return (
      <Provider store={store}>
        <NavigationStack/>
      </Provider>
    )
}

