import { configureStore } from '@reduxjs/toolkit';
import dlswmdReducer from './dlswmd';
import photoReducer from './photo';

export default configureStore({
  reducer: {
    dlswmd: dlswmdReducer,
    photo: photoReducer,
  }
});
