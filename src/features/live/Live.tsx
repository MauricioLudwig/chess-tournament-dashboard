import { IconButton, List, ListItem } from "@mui/material";
import { useAppSelector } from "../../hooks/hooks";
import SquareOutlinedIcon from "@mui/icons-material/SquareOutlined";
import StopCircleOutlinedIcon from "@mui/icons-material/StopCircleOutlined";

export function Live() {
  const { matches } = useAppSelector((state) => state.live);

  return (
    <div>
      <List>
        {matches.map((o, i) => (
          <ListItem
            key={i}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => alert("")}
              >
                <StopCircleOutlinedIcon />
              </IconButton>
            }
          >
            <SquareOutlinedIcon />
            <p>{[o.white, o.black].join(" vs. ")}</p>
            <SquareOutlinedIcon />
            <div></div>
            <div></div>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
