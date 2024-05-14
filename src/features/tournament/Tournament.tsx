import {
  Button,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
} from "@mui/material";
import { SetupMatch } from "../setup-match/SetupMatch";
import { Standings } from "../standings/Standings";
import { Live } from "../live/Live";
import { useAppDispatch } from "../../hooks/hooks";
import { setMatchDialogStatus } from "./tournamentSlice";
import * as styles from "./Tournament.styles";

export function Tournament() {
  const dispatch = useAppDispatch();

  const handleOnCreateMatch = () => {
    dispatch(setMatchDialogStatus("open"));
  };

  const handleOnStartOver = () => {
    // reset state
  };

  return (
    <styles.Container>
      <Grid container>
        <Grid item xs={6}>
          <Live />
        </Grid>
        <Grid item xs={6}>
          <Standings />
        </Grid>
      </Grid>
      <SetupMatch />
      <styles.StickyFooter>
        <Button onClick={handleOnCreateMatch}>Create match</Button>
        <Button onClick={handleOnStartOver}>Start over</Button>
        <FormGroup>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Auto-save"
          />
        </FormGroup>
      </styles.StickyFooter>
    </styles.Container>
  );
}
