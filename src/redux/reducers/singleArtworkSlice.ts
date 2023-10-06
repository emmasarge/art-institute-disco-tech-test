// singleArtworkSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface Artwork {
    id: number;
    title: string;
    image_id: string;
    artist_title:string;
    artwork_type_title: string;
    department_title: string;
    description: string;
    date_display: string;
    dimensions: string;
    medium_display: string;
    exhibition_history: string;
    classification_titles: string[];
    category_titles: string[];
    copyright_notice: string;
    credit_line: string;
    // Add other artwork properties here
    }
interface SingleArtworkState {
  artwork: Artwork | null;
  loading: boolean;
  error: string | null;
}

const initialState: SingleArtworkState = {
  artwork: null,
  loading: false,
  error: null,
};

const singleArtworkSlice = createSlice({
  name: 'singleArtwork',
  initialState,
  reducers: {
    fetchSingleArtworkStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchSingleArtworkSuccess(state, action: PayloadAction<Artwork>) {
      state.loading = false;
      state.artwork = action.payload;
    },
    fetchSingleArtworkFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchSingleArtworkStart,
  fetchSingleArtworkSuccess,
  fetchSingleArtworkFailure,
} = singleArtworkSlice.actions;

export default singleArtworkSlice.reducer;
