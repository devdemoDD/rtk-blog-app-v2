import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import authSlice from './slices/auth';
import postsSlice from './slices/posts';

const { MODE } = import.meta.env;

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  posts: postsSlice.reducer,
});

export const configure = () => {
  const getMiddlewares = (getDefaultMiddleware) =>
    MODE !== 'production'
      ? getDefaultMiddleware().concat(logger)
      : getDefaultMiddleware();

  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getMiddlewares(getDefaultMiddleware),
    devTools: MODE !== 'production',
  });
};
