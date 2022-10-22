import { configureStore } from '@reduxjs/toolkit'

import friendsReducer from './friends';

export default configureStore({
  reducer: {
    friends: friendsReducer,
  }
})