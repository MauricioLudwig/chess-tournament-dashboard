import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useAppSelector } from "../../hooks/hooks";
import { getStandings } from "../../utils/standings";
import { selectPlayersStandings } from "./standingsSelectors";

export function Standings() {
  const matches = useAppSelector(selectPlayersStandings);
  const liveStandings = getStandings(matches);
  const maxGames = liveStandings.length - 1;

  const formatMaxStat = (value: string | number) => {
    return [value, maxGames].join("/");
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>Player</TableCell>
            <TableCell>Matches</TableCell>
            <TableCell>Score</TableCell>
            <TableCell>Wins</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {liveStandings.map((o) => (
            <TableRow key={o.rank}>
              <TableCell>{o.rank}</TableCell>
              <TableCell>{o.player}</TableCell>
              <TableCell>{formatMaxStat(o.matches)}</TableCell>
              <TableCell>{formatMaxStat(o.score)}</TableCell>
              <TableCell>{o.wins}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
