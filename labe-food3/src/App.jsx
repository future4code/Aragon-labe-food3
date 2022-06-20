import GlobalState from "./globalState/GlobalState"
import Router from "./routes/Router"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: 100%;
    width: 100%
  }

`
function App() {
  return (
    <>
      <GlobalStyle/>
      <GlobalState>
      <Router />
      </GlobalState>
    </>    
  )
}

export default App