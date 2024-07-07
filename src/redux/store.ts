import { configureStore } from "@reduxjs/toolkit";
import { SpotifyAPI } from "./SpotifyAPI";
import CurrentTrackSlice from "./CurrentTrackSlice";

export const store = configureStore({
  reducer: {
    currentTrack: CurrentTrackSlice,
    [SpotifyAPI.reducerPath]: SpotifyAPI.reducer,
  },
  middleware: (getDefault) => getDefault().concat(SpotifyAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
