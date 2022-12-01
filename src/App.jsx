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
    gradient: "linear-gradient(to right, #26ab2f, #98e063)",
    font: "lightgray",
    header: "black",
    chart: "#19f02f",
  },
  light: {
    gradient: "linear-gradient(to right, mediumaquamarine, paleturquoise)",
    font: "black",
    header: "black",
    chart: "#B6E2D3",
  },
};

function App() {
  const [darkModeOn, setDarkModeOn] = useState(false);

  return (
    <div className={`bg-${darkModeOn ? "dark" : "light"}`}>
      <AppContext.Provider value={{ darkModeOn, setDarkModeOn, colorTheme }}>
        <NavBar></NavBar>
        <Container className="vh-100">
          <Routes>
            <Route
              path="/barchart"
              element={<BarChart dataSum={dataSum}></BarChart>}
            ></Route>
            <Route path="/table" element={<Table></Table>}></Route>
            <Route path="/" element={<Home></Home>}></Route>
          </Routes>
        </Container>
      </AppContext.Provider>
    </div>
  );
}

export default App;
