import { Match } from "../types";

export const getStandings = (
  players: Record<string, Match[]>
): Array<{
  rank: number;
  player: string;
  matches: number;
  score: number;
  wins: number;
}> => {
  const currentStandings = Object.entries(players).map(([k, v]) => {
    const matches = v.length;
    const wins = v.filter((o) => o.outcome === "win").length;
    const score = v.reduce((acc, curr) => {
      if (curr.outcome === "win") {
        return acc + 1;
      } else if (curr.outcome === "draw") {
        return acc + 0.5;
      } else {
        return acc;
      }
    }, 0);

    return {
      player: k,
      matches,
      score,
      wins,
    };
  });

  currentStandings.sort((a, b) => {
    if (a.score > b.score) {
      return 1;
    } else if (b.score > a.score) {
      return -1;
    }

    return a.wins - b.wins;
  });

  return currentStandings.map((o, i) => ({
    ...o,
    rank: i + 1,
  }));
};
