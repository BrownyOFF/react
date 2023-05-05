import React, { useState } from "react";

import { Button, TableCell, TableRow } from "grommet";

const CartCounter = ({ item, updateTotal }) => {
  const [quantity, setQuantity] = useState(0);

  const plus = () => {
    quantity < item.max && setQuantity((prev) => prev + 1);
    quantity > item.max && setQuantity(item.max);
    quantity < item.max && updateTotal(1, item.price);
  };

  const minus = () => {
    quantity > item.min && setQuantity((prev) => prev - 1);
    quantity < item.min && setQuantity(item.min);
    quantity > item.min && updateTotal(-1, -item.price);
  };

  return (
    <TableRow>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.price}</TableCell>
      <TableCell>
        <Button style={{ marginRight: 10 }} label="+" onClick={plus} />
        {quantity}
        <Button style={{ marginLeft: 10 }} label="-" onClick={minus} />
      </TableCell>
      <TableCell>{quantity * item.price}</TableCell>
    </TableRow>
  );
};

export default CartCounter;
