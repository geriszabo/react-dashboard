import Table from "react-bootstrap/Table";
import { dataSum, salesperson } from "../data/dataSum";

let revenues = dataSum.reduce((obj, order) => {
  if (!obj[order.salespersonName]) {
    obj[order.salespersonName] = order.orderValue
  
  } else {
    obj[order.salespersonName] += order.orderValue;
   
  }
  return obj;
}, {})

let revenuesSorted = Object.entries(revenues).sort((a,b) => b[1] - a[1]).reduce((acc, [k, v]) => ({...acc, [k]: v}), {})
// console.log(Object.entries(revenuesSorted));

function TableRevenue() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Revenue</th>
        </tr>
      </thead>
      <tbody>
     
        {Object.entries(revenuesSorted).slice(0, 3).map((element, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{element[0].split(" ")[0]}</td>
            <td>{element[0].split(" ")[1]}</td>
            <td>{element[1]}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableRevenue;
