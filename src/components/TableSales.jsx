import Table from "react-bootstrap/Table";
import { dataSum } from "../data/dataSum";
import React, { useContext } from "react";
import { AppContext } from "../App";

let soldQuantities = dataSum.reduce((obj, order) => {
  if (!obj[order.salespersonName]) {
    obj[order.salespersonName] = order.quantitySold;
  } else {
    obj[order.salespersonName] += order.quantitySold;
  }

  return obj;
}, {});

let soldQuantitiesSorted = Object.entries(soldQuantities).sort(
  (a, b) => b[1] - a[1]
);

function TableSales() {
  const { darkModeOn, colorTheme } = useContext(AppContext);

  return (
    <>
      <Table striped bordered hover variant={darkModeOn && "dark"}>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Items Sold</th>
          </tr>
        </thead>
        <tbody>
          {soldQuantitiesSorted.slice(0, 3).map((element, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{element[0].split(" ")[0]}</td>
              <td>{element[0].split(" ")[1]}</td>
              <td>{new Intl.NumberFormat().format(element[1]) + " pieces"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default TableSales;
