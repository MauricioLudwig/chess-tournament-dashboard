import { configureStore } from "@reduxjs/toolkit";
import standings from "./features/standings/standingsSlice";
import tournament from "./features/tournament/tournamentSlice";
import live from "./features/live/liveSlice";

export const store = configureStore({
  reducer: {
    standings,
    tournament,
    live,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
