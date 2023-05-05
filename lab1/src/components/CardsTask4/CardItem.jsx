import React, { useState } from "react";
import CardContainer from "./CardContainer";

const CardItem = () => {
  const [iconColor, setIconColor] = useState("white");

  const colorHandler = () => {
    iconColor === "white" ? setIconColor("red") : setIconColor("white");
  };

  return (
    <div className="card">
      <CardContainer>
        <i
          className="fa fa-heart icon"
          style={{ color: iconColor }}
          onClick={colorHandler}
        ></i>
        <img
          alt="img"
          src="https://o.qoo-img.com/storage.qoo-img.com/game/13858/HiEFB2wjU5HDifEztDI9LlQ2II7UF2do.png"
        />
        <h3 className="title">Some title</h3>
        <h1 className="price">666 $</h1>
      </CardContainer>
    </div>
  );
};

export default CardItem;
