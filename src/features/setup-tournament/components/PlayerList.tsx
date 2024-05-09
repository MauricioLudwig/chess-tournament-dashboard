import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export function PlayerList({
  players,
  removePlayer,
}: {
  players: string[];
  removePlayer: (value: string) => void;
}) {
  return (
    <List>
      {[...players].sort().map((player) => (
        <ListItem
          key={player}
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => removePlayer(player)}
            >
              <CloseIcon />
            </IconButton>
          }
        >
          <ListItemText primary={player} />
        </ListItem>
      ))}
    </List>
  );
}
