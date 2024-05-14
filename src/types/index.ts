export type MatchOutcome = "win" | "loss" | "draw";

export type TournamentStatus = "pending" | "live" | "finished";

export type DialogStatus = "open" | "close";

export type Match = {
  opponent: string;
  outcome: MatchOutcome;
  round: number;
};

export type Piece = "white" | "black";

export type LiveMatch = Record<Piece, string>;
