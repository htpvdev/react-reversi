import { configureStore } from '@reduxjs/toolkit';

import { commonSlice } from 'redux/common';
import { reversiSlice } from 'redux/reversi';

export const store = configureStore({
  reducer: {
    common: commonSlice.reducer,
    reversi: reversiSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
