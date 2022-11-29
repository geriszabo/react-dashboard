import { useState } from "react";
import { Home } from "./pages/Home";
import { BarChart } from "./pages/BarChart";
import { NavBar } from "./components/Navbar";
import { Table } from "./pages/Table";
import { dataSum } from "./data/dataSum";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <Routes>
          <Route
            path="/barchart"
            element={<BarChart dataSum={dataSum}></BarChart>}
          ></Route>
          <Route path="/table" element={<Table></Table>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
