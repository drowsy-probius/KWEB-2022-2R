import { configureStore } from '@reduxjs/toolkit'

import friendsReducer from './friends';
import postsReducer from "./posts";

export default configureStore({
  reducer: {
    friends: friendsReducer,
    posts: postsReducer,
  }
});