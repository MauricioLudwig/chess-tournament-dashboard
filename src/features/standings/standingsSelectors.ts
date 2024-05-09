import { RootState } from "../../store";

export const selectPlayersStandings = (state: RootState) =>
  state.standings.players;
