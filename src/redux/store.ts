import { combineReducers, configureStore } from '@reduxjs/toolkit';
import artworksReducer from './reducers/artworkSlice';
const rootReducer = combineReducers({
  artworks: artworksReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
