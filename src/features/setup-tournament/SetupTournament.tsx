import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  TextField,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  setTournamentDialogStatus,
  startTournament,
} from "../tournament/tournamentSlice";
import { useState } from "react";
import { PlayerList } from "./components/PlayerList";
import { setupPlayers } from "../standings/standingsSlice";

export function SetupTournament() {
  const [title, setTitle] = useState("Trial of the Olympians"); // TODO: remove
  const [player, setPlayer] = useState("");
  const [players, setPlayers] = useState<string[]>([
    "Mauricio",
    "Jose",
    "Asitha",
    "Pelle",
    "Pierre",
    "Stefanos",
    "Arloys",
    "Daniel",
    "Kurt",
  ]); // TODO: remove

  const dialogStatus = useAppSelector(
    (state) => state.tournament.tournamentDialogStatus
  );
  const dispatch = useAppDispatch();

  const handleAddPlayer = () => {
    if ((player?.length ?? 0) === 0) {
      return;
    }
    setPlayers((prev) => [...prev, player]);
    setPlayer("");
  };

  const handleRemovePlayer = (value: string) => {
    const filteredPlayers = players.filter((o) => o !== value);
    setPlayers(filteredPlayers);
  };

  const handleOnCreateTournament = () => {
    dispatch(startTournament(title));
    dispatch(setupPlayers(players));
  };

  return (
    <Dialog open={dialogStatus === "open"}>
      <DialogTitle alignSelf="center">Create Tournament</DialogTitle>
      <DialogContent>
        <Grid mt={2} container>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                label="Title"
                variant="outlined"
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid mt={2} container spacing={2} alignItems="center">
          <Grid item>
            <TextField
              value={player}
              onChange={(e) => setPlayer(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleAddPlayer();
                }
              }}
              label="Player"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <Button onClick={handleAddPlayer}>Add</Button>
          </Grid>
        </Grid>
        <FormControl></FormControl>
        <PlayerList players={players} removePlayer={handleRemovePlayer} />
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <Button onClick={handleOnCreateTournament}>Create</Button>
        <Button onClick={() => dispatch(setTournamentDialogStatus("close"))}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
