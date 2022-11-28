import { useState } from "react";
import { Home } from "./pages/Home";
import { BarChart } from "./pages/BarChart";
import { NavBar } from "./components/Navbar";
import { Table } from "./pages/Table";
import { dataSum } from "./data/dataSum";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route
          path="/barchart"
          element={<BarChart dataSum={dataSum}></BarChart>}
        ></Route>
        <Route path="/table" element={<Table></Table>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
