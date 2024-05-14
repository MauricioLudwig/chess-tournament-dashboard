import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DialogStatus, TournamentStatus } from "../../types";

export interface TournamentState {
  status: TournamentStatus;
  title: string;
  tournamentDialogStatus: DialogStatus;
  matchDialogStatus: DialogStatus;
}

const initialState: TournamentState = {
  status: "pending",
  title: "",
  tournamentDialogStatus: "close",
  matchDialogStatus: "close",
};

export const tournamentSlice = createSlice({
  name: "tournament",
  initialState,
  reducers: {
    startTournament(state, action: PayloadAction<string>) {
      state.title = action.payload;
      state.status = "live";
      state.tournamentDialogStatus = "close";
    },
    setTournamentDialogStatus(state, action: PayloadAction<DialogStatus>) {
      state.tournamentDialogStatus = action.payload;
    },
    setMatchDialogStatus(state, action: PayloadAction<DialogStatus>) {
      state.matchDialogStatus = action.payload;
    },
  },
});

export const {
  startTournament,
  setTournamentDialogStatus,
  setMatchDialogStatus,
} = tournamentSlice.actions;

export default tournamentSlice.reducer;
