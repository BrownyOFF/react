import "./App.css";
import Cards from "./components/CardsTask4/Cards";
import CityList from "./components/CitiesTask5/CityList";
import ColorList from "./components/ColorsTask6/ColorList";

import TableTask2 from "./components/TableTask2";
import TaskTitle from "./components/TaskTitle";

function App() {
  return (
    <div>
      <TableTask2 />
      <TaskTitle taskNumber="3" taskName="Let it be task3" />
      <Cards />
      <CityList />
      <ColorList />
    </div>
  );
}

export default App;
