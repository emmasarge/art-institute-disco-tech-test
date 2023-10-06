import { combineReducers, configureStore } from '@reduxjs/toolkit';
import artworksReducer from './reducers/artworkSlice';
import singleArtworkReducer from './reducers/singleArtworkSlice';
const rootReducer = combineReducers({
  artworks: artworksReducer,
  artwork: singleArtworkReducer

});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
