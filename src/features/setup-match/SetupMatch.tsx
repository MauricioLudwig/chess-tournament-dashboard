import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useMemo, useState } from "react";
import { addLiveMatch } from "../live/liveSlice";
import { getRandomPieces } from "../../utils/rand";
import { LiveMatch } from "../../types";
import { setMatchDialogStatus } from "../tournament/tournamentSlice";

export function SetupMatch() {
  const [nextPlayer, setNextPlayer] = useState<string | null>(null);
  const [opponent, setOpponent] = useState<string | null>(null);

  const standings = useAppSelector((state) => state.standings.players);
  const dispatch = useAppDispatch();

  const dialogStatus = useAppSelector(
    (state) => state.tournament.matchDialogStatus
  );

  const allPlayers = Object.keys(standings);

  const availableOpponentsOptions = useMemo(() => {
    if (!nextPlayer) {
      return [];
    }
    const alreadyPlayedAgainst = standings[nextPlayer].map((o) => o.opponent);
    const dismissPlayers = [...alreadyPlayedAgainst, nextPlayer];
    return allPlayers.filter((o) => !dismissPlayers.includes(o));
  }, [allPlayers, nextPlayer, standings]);

  const handleCreateMatch = () => {
    if (nextPlayer && opponent) {
      const [piece1, piece2] = getRandomPieces();
      dispatch(
        addLiveMatch({
          [piece1]: nextPlayer,
          [piece2]: opponent,
        } as unknown as LiveMatch)
      );
      dispatch(setMatchDialogStatus("close"));
    }
  };

  return (
    <Dialog open={dialogStatus === "open"}>
      <DialogTitle alignSelf="center">Setup Match</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Black & white pieces will be randomized.
        </DialogContentText>
        <Grid mt={2} container spacing={2}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Select player
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={nextPlayer}
                label="Select player"
                onChange={(e) => setNextPlayer(e.target.value)}
              >
                {allPlayers.map((player) => (
                  <MenuItem key={player} value={player}>
                    {player}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Select opponent
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={opponent}
                label="Select opponent"
                onChange={(e) => setOpponent(e.target.value)}
              >
                {availableOpponentsOptions.map((ap) => (
                  <MenuItem key={ap} value={ap}>
                    {ap}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <Button onClick={handleCreateMatch}>Create</Button>
        <Button>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
