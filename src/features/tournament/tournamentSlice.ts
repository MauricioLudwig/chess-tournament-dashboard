import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TournamentDialogStatus, TournamentStatus } from "../../types";

export interface TournamentState {
  status: TournamentStatus;
  title: string;
  tournamentDialogStatus: TournamentDialogStatus;
}

const initialState: TournamentState = {
  status: "pending",
  title: "",
  tournamentDialogStatus: "close",
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
    setTournamentDialogStatus(
      state,
      action: PayloadAction<TournamentDialogStatus>
    ) {
      state.tournamentDialogStatus = action.payload;
    },
  },
});

export const { startTournament, setTournamentDialogStatus } =
  tournamentSlice.actions;

export default tournamentSlice.reducer;
