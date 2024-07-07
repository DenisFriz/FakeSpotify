import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ICurrentTrack {
  title: string;
  track_name: string;
  names_authors: string;
  img: string;
  isShow: boolean;
}

const initialState: ICurrentTrack = {
  title: "",
  track_name: "",
  names_authors: "",
  img: "",
  isShow: false,
};

export const CurrentTrackSlice = createSlice({
  name: "userPlaylist",
  initialState,
  reducers: {
    changeCurrentTrack: (state, action: PayloadAction<ICurrentTrack>) => {
      state.title = action.payload.title;
      state.track_name = action.payload.track_name;
      state.names_authors = action.payload.names_authors;
      state.img = action.payload.img;
      state.isShow = action.payload.isShow;
    },
  },
});

export const { changeCurrentTrack } = CurrentTrackSlice.actions;

export default CurrentTrackSlice.reducer;
