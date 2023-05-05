import React from "react";
import CardItem from "./CardItem";
import TaskTitle from "../TaskTitle";

const dumbList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Cards = () => {
  return (
    <div>
      <TaskTitle taskNumber="4" taskName="Cards" />
      <div className="task-content">
        {dumbList.map((item) => (
          <CardItem key={item} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
