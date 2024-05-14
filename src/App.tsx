import { useAppSelector } from "./hooks/hooks";
import { Welcome } from "./features/welcome/Welcome";
import { Tournament } from "./features/tournament/Tournament";

function App() {
  const { status } = useAppSelector((state) => state.tournament);

  if (status === "pending") {
    return <Welcome />;
  }

  return <Tournament />;
}

export default App;
