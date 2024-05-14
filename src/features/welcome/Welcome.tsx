import { Button, Typography } from "@mui/material";
import { useAppDispatch } from "../../hooks/hooks";
import { setTournamentDialogStatus } from "../tournament/tournamentSlice";
import { SetupTournament } from "../setup-tournament/SetupTournament";
import * as styles from "./Welcome.styles";

export function Welcome() {
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    dispatch(setTournamentDialogStatus("open"));
  };

  return (
    <>
      <styles.Container>
        <styles.Box>
          <Typography variant="h4" mb={3}>
            The Chess Tournament Dashboard
          </Typography>
          <Button variant="contained" onClick={handleOnClick}>
            Start
          </Button>
        </styles.Box>
      </styles.Container>
      <SetupTournament />
    </>
  );
}
