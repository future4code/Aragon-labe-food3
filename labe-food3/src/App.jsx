import GlobalState from "./globalState/GlobalState";
import Router from "./routes/Router";
// import {createGlobalStyle} from "styled-components"

// const GlobalStyle = createGlobalStyle`
//   body{
    
  
//   }
//   img{
//     width: 5px;
//   height: 2px;
//   }
 

  

function App() {
  return (
   
   <GlobalState>
    <Router />
    </GlobalState>
  );
}

export default App;
