import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  movies: any;
  featuredMovie: any;
}

const initialState: CounterState = {
  movies: [],
  featuredMovie: {},
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    setFeaturedMovie: (state, action) => {
      state.featuredMovie = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMovies, setFeaturedMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
