import { createSlice } from '@reduxjs/toolkit';

export const dlswmdSlice = createSlice({
  name: 'dlswmd',
  initialState: {
    value: {
      status: 0,
      date: Date.now(),
    }
  },
  reducers: {
    setDlswmdValue: (state, action) => {
      state.value = { ...action.payload }
    }
  },
});

export const { setDlswmdValue } = dlswmdSlice.actions;
export const selectDlswmd = (state) => state.dlswmd.value;

export default dlswmdSlice.reducer;
