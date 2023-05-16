import GlobalStyle from "./styles/globalStyle"
import RouteApp from "./routes";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <RouteApp />
    </Router>
  );
}

export default App;
