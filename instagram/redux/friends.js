import { createSlice } from "@reduxjs/toolkit"

export const friendsSlice = createSlice({
  name: 'friends',
  initialState: {
    value: []
  },
  reducers: {
    setFriendsValue: (state, action) => {
      state.value = [ ...action.payload ]
    }
  }
});

export const { setFriendsValue } = friendsSlice.actions;
export const selectFriends = (state) => state.friends.value;

export default friendsSlice.reducer;

