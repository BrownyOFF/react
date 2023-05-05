import React from "react";
import MyCounter from "./MyCounter";

const counters = [
  { id: 1, initial: 6, min: -5, max: 10 },
  { id: 2, initial: 5 },
  { id: 3 },
];

const Counters = () => {
  return (
    <div>
      {counters.map((item) => (
        <MyCounter
          key={item.id}
          initial={item.initial}
          min={item.min}
          max={item.max}
        />
      ))}
    </div>
  );
};

export default Counters;
