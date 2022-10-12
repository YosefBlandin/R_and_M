import type { AppProps } from "next/app";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import "../styles/globals.css";
import { moviesSlice as moviesReducer } from "../store/reducer/moviesReducer";

const store = configureStore({
  reducer: {
    movies: moviesReducer.reducer,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
