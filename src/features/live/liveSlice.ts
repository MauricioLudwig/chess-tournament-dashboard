import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LiveMatch } from "../../types";

export interface LiveState {
  matches: LiveMatch[];
}

const initialState: LiveState = {
  matches: [],
};

export const liveSlice = createSlice({
  name: "live",
  initialState,
  reducers: {
    addLiveMatch(state, action: PayloadAction<LiveMatch>) {
      state.matches.push(action.payload);
    },
  },
});

export const { addLiveMatch } = liveSlice.actions;

export default liveSlice.reducer;
