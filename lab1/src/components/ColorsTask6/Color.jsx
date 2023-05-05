import React from "react";

const Color = ({ colorName }) => {
  return (
    <option style={{ color: colorName }} value={colorName}>
      {colorName}
    </option>
  );
};

export default Color;
