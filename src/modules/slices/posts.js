import { createSlice } from '@reduxjs/toolkit';
import * as posts from '../actions/posts';

const initialState = {
  error: null,
  message: '',
  data: null, // object element in array : { id, author, title, description, date }
};

const isPendingAction = (action) => action.type.endsWith('pending');
const isRejectedAction = (action) => action.type.endsWith('rejected');

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    clearMessage: (state) => {
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(posts.getPosts.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(posts.addPost.fulfilled, (state) => {
        state.message = 'Created';
      })
      .addCase(posts.editPost.fulfilled, (state) => {
        state.message = 'Edited';
      })
      .addCase(posts.deletePost.fulfilled, (state) => {
        state.message = 'Deleted';
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.error = action.error;
      })
      .addMatcher(isPendingAction, (state) => {
        // 로직 추가 필요!
        return state;
      })
      .addDefaultCase((state) => {
        return state;
      });
  },
});

export default postsSlice;
