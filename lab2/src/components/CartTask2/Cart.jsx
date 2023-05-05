import React, { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableRow,
} from "grommet";

import CartCounter from "./CartCounter";

const propertyRow = ["Name", "Price", "Quantity", "Total"];

const cartBody = [
  { id: 1, name: "Constructor LEGO", price: 300, min: 0, max: 7 },
  { id: 2, name: "Train Station", price: 200, min: 0, max: 6 },
  { id: 3, name: "Hot Wheels Track", price: 150, min: 0, max: 5 },
];

function Cart() {
  const [total, setTotal] = useState({ totalQuantity: 0, totalPrice: 0 });

  const updateTotal = (quantity, price) => {
    setTotal({
      totalQuantity: total.totalQuantity + quantity,
      totalPrice: total.totalPrice + price,
    });
  };

  return (
    <div>
      Cart
      <Table>
        <TableHeader>
          <TableRow>
            {propertyRow.map((property) => (
              <TableCell key={property}>{property}</TableCell>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {cartBody.map((item) => (
            <CartCounter key={item.id} item={item} updateTotal={updateTotal} />
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Totals</TableCell>
            <TableCell>{total.totalQuantity}</TableCell>
            <TableCell>{total.totalPrice}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

export default Cart;
