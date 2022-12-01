import { useState, useContext } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { dataSum } from "../data/dataSum";
import { Colors, plugins } from "chart.js";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton } from "react-bootstrap";
import {AppContext} from "../App"

Chart.register(Colors);

export function Diagram() {
  const [customerFilter, setCustomerFilter] = useState("All");
  // Will be used for the second filter
  const [orderStatusFilter, setOrderStatusFilter] = useState("All");


  const {darkModeOn} = useContext(AppContext)

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

  console.log(monthlySales)

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

      {/* Button for second filter */}

      {/* <DropdownButton
        as={ButtonGroup}
        size="sm"
        title="Filter By"
        className="float-end"
        variant="secondary"
      >
        <Dropdown.Item onClick={() => setOrderStatusFilter("All")}>
          All
        </Dropdown.Item>
        {Array.from(new Set(dataSum.map((e) => e.orderStatus)))
          .sort()
          .map((e, i) => (
            <Dropdown.Item key={i} onClick={() => setOrderStatusFilter(e)}>
              {e}
            </Dropdown.Item>
          ))}
      </DropdownButton> */}
      <h5>Customer: {customerFilter}</h5>
      <Bar
        datasetIdKey="id"
        data={{
          labels: Object.keys(monthlySales).map((e) =>
            Intl.DateTimeFormat("en", { month: "short" }).format(
              new Date(e.toString())
            )
          ),
          datasets: [
            {
              id: 1,
              label: "",
              data: Object.values(monthlySales),
              backgroundColor: "#B6E2D3",
              
              
            },
          ],
        }}
        
        style={{backgroundColor: `${darkModeOn ? "#333333" : ""}`, color: `${darkModeOn ? "white" : "black"}`}}
       
      ></Bar>
    </div>
  );
}
