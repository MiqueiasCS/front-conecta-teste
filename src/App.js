import { Navheader } from "./components";
import { Pages } from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navheader />
      <Pages />
    </div>
  );
}

export default App;
