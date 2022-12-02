import { useState, useContext } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { dataSum } from "../data/dataSum";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton } from "react-bootstrap";
import { AppContext } from "../App";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dez",
];

export function Diagram() {
  const [customerFilter, setCustomerFilter] = useState("All");

  const { darkModeOn, colorTheme } = useContext(AppContext);

  let monthlySales;

  if (customerFilter !== "All") {
    monthlySales = dataSum
      .filter((e) => e.account === customerFilter)
      .reduce((obj, order) => {
        if (!obj[order.dateMonth]) {
          obj[order.dateMonth] = order.quantitySold;
        } else {
          obj[order.dateMonth] += order.quantitySold;
        }

        return obj;
      }, {});
  } else {
    monthlySales = dataSum.reduce((obj, order) => {
      if (!obj[order.dateMonth]) {
        obj[order.dateMonth] = order.quantitySold;
      } else {
        obj[order.dateMonth] += order.quantitySold;
      }

      return obj;
    }, {});
  }


  return (
    <div>
      <DropdownButton
        as={ButtonGroup}
        size="sm"
        title="Filter By"
        className="float-end"
      >
        <Dropdown.Item onClick={() => setCustomerFilter("All")}>
          All
        </Dropdown.Item>
        {Array.from(new Set(dataSum.map((e) => e.account)))
          .sort()
          .map((e, i) => (
            <Dropdown.Item key={i} onClick={() => setCustomerFilter(e)}>
              {e}
            </Dropdown.Item>
          ))}
      </DropdownButton>

      <h5 className={darkModeOn ? "text-light" : "text-dark"}>
        Customer: {customerFilter}
      </h5>
      <Bar
        datasetIdKey="id"
        data={{
          labels: MONTHS,
          datasets: [
            {
              id: 1,
              label: "Pieces Sold",
              data: Object.values({  1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
                10: 0,
                11: 0,
                12: 0, ...monthlySales}),
              backgroundColor: darkModeOn
                ? colorTheme.dark.chart
                : colorTheme.light.chart,
            },
          ],
        }}
        style={{
          backgroundColor: `${darkModeOn ? "#333333" : ""}`,
          color: `${darkModeOn ? "white" : "black"}`,
          maxHeight: "60vh",
        }}
      ></Bar>
    </div>
  );
}
