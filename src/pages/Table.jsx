import React, { useState } from "react";
import TableRevenue from "../components/TableRevenue";
import TableSales from "../components/TableSales";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton } from "react-bootstrap";

export function Table() {
  const [showRevenue, setShowRevenue] = useState(true);

  return (
    <div>
      <DropdownButton
        as={ButtonGroup}
        size="sm"
        title="Filter By"
        className="mb-3 float-end"
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
    </div>
  );
}
