import React, { useState, useContext } from "react";
import TableRevenue from "../components/TableRevenue";
import TableSales from "../components/TableSales";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton, Container } from "react-bootstrap";
import App, { AppContext } from "../App";

export function Table() {
  const [showRevenue, setShowRevenue] = useState(true);

  const {darkModeOn} = useContext(AppContext)

  return (
    <Container className={ `vh-100 ${darkModeOn ? "text-light" : "text-dark"}`}>
      <DropdownButton
      variant="custom"
        as={ButtonGroup}
        size="sm"
        title="Filter By"
        className="mb-3 float-end"
        style={{background: `${darkModeOn ? "#19f02f" : "#B6E2D3"}`}}
      >
        <Dropdown.Item eventKey="1" onClick={() => setShowRevenue(true)}>
          Revenue
        </Dropdown.Item>
        <Dropdown.Item eventKey="2" onClick={() => setShowRevenue(false)}>
          Items Sold
        </Dropdown.Item>
      </DropdownButton>
      {showRevenue ? <h4>Yearly Revenue</h4> : <h4>Yearly Items Sold</h4>}
      {showRevenue ? <TableRevenue></TableRevenue> : <TableSales></TableSales>}
    </Container>
  );
}
