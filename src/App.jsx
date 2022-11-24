import { useState } from "react";
import { Home } from "./pages/Home";
import { BarChart } from "./pages/BarChart";
import { Navbar } from "./components/Navbar";
import { Table } from "./pages/Table";
import { dataSum } from "./data/dataSum";
import { Routes, Route } from "react-router-dom"

function App() {
  

let newArr = dataSum.sort((a,b) => b.orderPrice - a.orderPrice)
  console.log(newArr.slice(0,3));

  return (
    <div>
        <Navbar></Navbar>
      <Routes>
        <Route path="/barchart" element={<BarChart dataSum={{dataSum}}></BarChart>}></Route>
        <Route path="/table" element={<Table></Table>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>

     
    </div>
  );
}

export default App;
