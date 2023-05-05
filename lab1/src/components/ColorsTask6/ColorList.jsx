import React, { useState } from "react";
import Color from "./Color";
import TaskTitle from "../TaskTitle";

const colorsList = [
  { id: "c1", name: "green" },
  { id: "c2", name: "black" },
  { id: "c3", name: "grey" },
];

const ColorList = () => {
  const [color, setColor] = useState("green");

  return (
    <div>
      <TaskTitle taskNumber="6" taskName="Colors state" />
      <h2 style={{ color: color }}>I'm {color} Color!</h2>
      <select onChange={(event) => setColor(event.target.value)}>
        {colorsList.map((color) => (
          <Color key={color.id} colorName={color.name} />
        ))}
      </select>
    </div>
  );
};

export default ColorList;
