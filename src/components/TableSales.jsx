import Table from "react-bootstrap/Table";
import { dataSum, salesperson } from "../data/dataSum";

let soldQuantities = dataSum.reduce((obj, order) => {
    if(!obj[order.salespersonName]) {
        obj[order.salespersonName] = order.quantitySold
    } else {
        obj[order.salespersonName] += order.quantitySold
    }

    return obj
}, {})

let soldQuantitiesSorted = Object.entries(soldQuantities).sort((a,b) => b[1] - a[1])


function TableSales() {
  return (
    <>
    <h4>Items Sold</h4>
    <Table striped bordered hover>
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
            <td>{element[1]}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </>
  );
}

export default TableSales;
