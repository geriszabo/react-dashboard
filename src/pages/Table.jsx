import React from "react";
import TableRevenue from "../components/TableRevenue";
import TableSales from "../components/TableSales";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton } from "react-bootstrap";
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import SplitButton from 'react-bootstrap/SplitButton';

export function Table() {
  return (
    <div> 
      
      <DropdownButton as={ButtonGroup} size="sm" title="Filter">
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownButton>
      <TableRevenue></TableRevenue>
      <TableSales></TableSales>
    </div>
  );
}
