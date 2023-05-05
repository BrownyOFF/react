import React from "react";
import City from "./City";
import TaskTitle from "../TaskTitle";

const cities = [
  { id: 1, name: "Chicago" },
  { id: 2, name: "Los Angelos" },
  { id: 3, name: "New York" },
];

const CityList = () => {
  return (
    <div>
      <TaskTitle taskNumber="5" taskName="Cities array" />
      <select
        name="cities"
        id="cities"
        onChange={(e) => console.log(e.target.value)}
      >
        {cities.map((city) => (
          <City key={city.id} cityName={city.name} />
        ))}
      </select>
    </div>
  );
};

export default CityList;
