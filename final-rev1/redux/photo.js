import { createSlice } from '@reduxjs/toolkit';

export const photoSlice = createSlice({
  name: 'photo',
  initialState: {
    value: {}
  },
  reducers: {
    setPhotoValue: (state, action) => {
      state.value = { ...action.payload }
    }
  },
});

export const { setPhotoValue } = photoSlice.actions;
export const selectPhoto = (state) => state.photo.value;

export default photoSlice.reducer;
