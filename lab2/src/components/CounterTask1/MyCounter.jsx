import React, { useState } from "react";

import { Button } from "grommet";

const MyCounter = ({ initial = 0, min = -10, max = 10 }) => {
  const [currentValue, setCurrentValue] = useState(initial);

  return (
    <div>
      Поточний рахунок: {currentValue}
      <Button
        style={{ marginLeft: 10 }}
        label="+"
        onClick={() =>
          setCurrentValue(currentValue < max ? currentValue + 1 : max)
        }
      />
      <Button
        style={{ marginLeft: 10 }}
        label="-"
        onClick={() =>
          setCurrentValue(currentValue > min ? currentValue - 1 : min)
        }
      />
      <Button
        style={{ marginLeft: 5 }}
        label="Reset"
        onClick={() => setCurrentValue(initial)}
      />
    </div>
  );
};

export default MyCounter;
