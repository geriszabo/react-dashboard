import { useState, useContext, useRef } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { dataSum } from "../data/dataSum";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton } from "react-bootstrap";
import { AppContext } from "../App";
import { MONTHS } from "../data/helpers";
import Form from "react-bootstrap/Form";

export function Diagram() {
  const { darkModeOn, colorTheme } = useContext(AppContext);

  const [customerFilter, setCustomerFilter] = useState("All");
  const [filteredOrders, setFilteredOrders] = useState(
    dataSum.map((e) => e.account)
  );
 

  const inputRef = useRef();

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
    <>
      <DropdownButton
        as={ButtonGroup}
        size="sm"
        title="Filter By"
        className="float-end"
        autoClose={true}
        onClick={() => setTimeout(() => inputRef.current.focus(), 10)}
      >
        <Dropdown.Item
         style={{width: "20rem"}}>
          <Form.Control
            ref={inputRef}
            autoFocus
            className="mx-3 my-2 w-auto "
            placeholder="Type to filter..."
            onChange={(e) => {
              setFilteredOrders(
                new Set(
                  dataSum
                    .filter((order) =>
                      order.account
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase())
                    )
                    .map((order) => order.account)
                )
              );
            }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        </Dropdown.Item>
        <Dropdown.Item
        style={{width: "20rem"}}
          onClick={() => {
            setCustomerFilter("All"),
              (inputRef.current.value = ""),
              setFilteredOrders(dataSum.map((e) => e.account));
          }}
        >
          All
        </Dropdown.Item>
        {Array.from(new Set(filteredOrders))
          .map((e) => e)
          .sort()
          .map((e, i) => (
            <Dropdown.Item
            style={{width: "20rem"}}
              key={i}
              onClick={() => {
                setCustomerFilter(e), (inputRef.current.value = "");
                setFilteredOrders(dataSum.map((e) => e.account));
              }}
            >
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
              data: Object.values({
                1: 0,
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
                12: 0,
                ...monthlySales,
              }),
              backgroundColor: darkModeOn
                ? colorTheme.dark.chart
                : colorTheme.light.chart,
            },
          ],
        }}
        style={{
          backgroundColor: `${darkModeOn ? "rgb(33,37,41)" : ""}`,
          color: `${darkModeOn ? "white" : "black"}`,
          maxHeight: "60vh",
        }}
      ></Bar>
    </>
  );
}
