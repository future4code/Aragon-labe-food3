import GlobalState from "./globalState/GlobalState"
import Router from "./routes/Router"

function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

export default App