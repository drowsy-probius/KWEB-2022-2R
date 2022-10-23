import { createSlice} from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    value: []
  },
  reducers: {
    setPostsValue: (state, action) => {
      state.value = [ ...action.payload ]
    }
  }
});

export const { setPostsValue } = postsSlice.actions;
export const selectPosts = (state) => state.posts.value;

export default postsSlice.reducer;