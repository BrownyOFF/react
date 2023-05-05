import "./App.css";

import { Grommet } from "grommet";
import MessageForm from "./components/MessageForm";

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
        <h1>Lab5</h1>
        <MessageForm />
      </div>
    </Grommet>
  );
}

export default App;
