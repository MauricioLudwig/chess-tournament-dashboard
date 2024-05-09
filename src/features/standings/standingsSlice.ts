import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Match } from "../../types/index.ts";

export interface StandingsState {
  players: Record<string, Match[]>;
}

const initialState: StandingsState = {
  players: {},
};

export const standingsSlice = createSlice({
  name: "standings",
  initialState,
  reducers: {
    setupPlayers(state, action: PayloadAction<string[]>) {
      const sortedPlayers = [...action.payload].sort();
      state.players = sortedPlayers.reduce(
        (acc, curr) => ({
          ...acc,
          [curr]: [],
        }),
        {} as Record<string, Match[]>
      );
    },
    addResult() {},
  },
});

export const { addResult, setupPlayers } = standingsSlice.actions;

export default standingsSlice.reducer;
