import { useState } from "react";
import { BarChart } from "./components/BarChart";
import { dataSum } from "./data/dataSum";

function App() {
  

let newArr = dataSum.sort((a,b) => b.orderPrice - a.orderPrice)
  console.log(newArr.slice(0,3));

  return (
    <div>
      {/* <BarChart products={products}></BarChart> */}
      {/* {salesperson.map(e => console.log(e))
      } */}
    </div>
  );
}

export default App;
