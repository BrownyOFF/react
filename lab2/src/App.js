import "./App.css";
import "@fontsource/roboto/700.css";
import { Grommet } from "grommet";

import Game from "./components/GameTask3/Game";
import Counters from "./components/CounterTask1/Counters";
import Cart from "./components/CartTask2/Cart";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

function App() {
  return (
    <Grommet theme={theme} full>
      <div className="App">
        <Counters />
        <Cart />
        <Game />
      </div>
    </Grommet>
  );
}

export default App;
