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
interface ArtworksState {
artworks: Artwork[];
loading: boolean;
error: string | null;
}
const initialState: ArtworksState = {
artworks: [],
loading: false,
error: null,
};

const artworksSlice = createSlice({
name: 'artworks',
initialState,
reducers: {
fetchArtworksStart(state) {
state.loading = true;
state.error = null;
},
fetchArtworksSuccess(state, action: PayloadAction<Artwork[]>) {
state.loading = false;
state.artworks = action.payload;
},
fetchArtworksFailure(state, action: PayloadAction<string>) {
state.loading = false;
state.error = action.payload;
},
},
});

export const {
fetchArtworksStart,
fetchArtworksSuccess,
fetchArtworksFailure,
} = artworksSlice.actions;

export default artworksSlice.reducer;