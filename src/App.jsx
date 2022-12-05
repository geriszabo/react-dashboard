import React, { useState, createContext } from "react";
import { Home } from "./pages/Home";
import { BarChart } from "./pages/BarChart";
import { NavBar } from "./components/Navbar";
import { Table } from "./pages/Table";
import { dataSum } from "./data/dataSum";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

export const AppContext = createContext();

const colorTheme = {
  dark: {
    gradient: "linear-gradient(0.1turn, #26ab2f, #98e063)",
    font: "lightgray",
    header: "black",
    chart: "#19f02f",
  },
  light: {
    gradient:
      "linear-gradient(to right, rgba(101,204,170, 0.6), paleturquoise)",
    font: "black",
    header: "black",
    chart: "#B6E2D3",
  },
};

function App() {
  const [darkModeOn, setDarkModeOn] = useState(false);

  return (
    <div id="outer" className={` h-100 bg-${darkModeOn ? "dark" : "light"}`}>
      <AppContext.Provider value={{ darkModeOn, setDarkModeOn, colorTheme }}>
        <NavBar></NavBar>
        <Routes>
          <Route
            path="/barchart"
            element={<BarChart dataSum={dataSum}></BarChart>}
          ></Route>
          <Route path="/table" element={<Table></Table>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
