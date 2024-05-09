import { SetupTournament } from "./features/setup-tournament/SetupTournament";
import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { setTournamentDialogStatus } from "./features/tournament/tournamentSlice";
import { Standings } from "./features/standings/Standings";
import { SetupMatch } from "./features/setup-match/SetupMatch";
import { Live } from "./features/live/Live";

function App() {
  const status = useAppSelector((state) => state.tournament.status);
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    dispatch(setTournamentDialogStatus("open"));
  };

  return (
    <>
      <h1>Make your own Chess Tournament</h1>
      <Button onClick={handleOnClick}>Start</Button>
      <SetupMatch open={status === "live"} />
      <Standings />
      <SetupTournament />
      <Live />
    </>
  );
}

export default App;
