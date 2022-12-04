import React, { useContext, useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AppContext } from "../App";
import { cardsInfo } from "../data/helpers";
//For charts
import { Line } from "react-chartjs-2";
import { stockGenerator2 } from "../data/helpers";
import { elements } from "chart.js";
//Icons
import { BiLineChart } from "react-icons/bi";
import { CgPill } from "react-icons/cg";
import { BsClipboardCheck, BsPeople } from "react-icons/bs";

export default function Stats() {
  const { darkModeOn, colorTheme } = useContext(AppContext);
  const [stockData, setStockData] = useState([]);

  let arr = [];

  useEffect(() => {
    let timer = setInterval(() => {
      let randomNum = Math.floor(Math.random() * 100) + 30;
      if (arr.length > 9) {
        arr.shift();
      } else {
        arr = [...arr, randomNum];
        setStockData(arr);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const cardStyle = {
    background: darkModeOn
      ? colorTheme.dark.gradient
      : colorTheme.light.gradient,
    colorHeader: colorTheme.dark.header,
  };

  return (
    <div
      
      className={darkModeOn ? "bg-dark" : "bg-light"}
      style={{
        color: darkModeOn ? colorTheme.dark.font : colorTheme.light.font,
      }}
    >
      <Row className="d-flex justify-content-around">
        <Col className="d-flex justify-content-center mb-5">
          <Card
            style={{ width: "18rem", height: "12rem" }}
            className={`border-0 shadow ${darkModeOn && "bg-dark"}`}
          >
            <Card.Header
              style={{
                background: cardStyle.background,
                color: cardStyle.colorHeader,
              }}
            >
              <Card.Title>
                Stock <BiLineChart></BiLineChart>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              {/* <Card.Title> Staff Count </Card.Title> */}
              <Card.Text>
                <Line
                  datasetIdKey="id"
                  data={{
                    labels: Array(10).fill(""),
                    datasets: [
                      {
                        id: 1,
                        label: "Value in USD",
                        data: stockData,
                        backgroundColor: darkModeOn
                          ? colorTheme.dark.chart
                          : colorTheme.light.chart,
                        borderColor: darkModeOn
                          ? colorTheme.dark.chart
                          : colorTheme.light.chart,
                        borderWidth: 2,
                      },
                    ],
                  }}
                  style={{
                    backgroundColor: `${darkModeOn ? "rgb(33,37,41)" : ""}`,
                    color: `${darkModeOn ? "white" : "black"}`,
                    // maxHeight: "60vh",
                  }}
                  options={{
                    elements: {
                      line: {
                        tension: 0.5,
                      },
                    },
                    plugins: {
                      legend: {
                        display: false,
                        position: "right",
                      },
                    },
                    scales: {
                      y: {
                        min: 0,
                        max: 200,
                      },
                    },
                  }}
                ></Line>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center mb-5">
          <Card
            style={{ width: "18rem", height: "12rem" }}
            className={`border-0 shadow ${darkModeOn && "bg-dark"}`}
          >
            <Card.Header
              style={{
                background: cardStyle.background,
                color: cardStyle.colorHeader,
              }}
            >
              <Card.Title>
                {" "}
                Staff <BsPeople />
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Title> Staff Count </Card.Title>
              <Card.Text>
                You have {Object.keys(cardsInfo.staff).length} people working in
                your sales team.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center mb-5">
          <Card
            style={{ width: "18rem", height: "12rem" }}
            className={`border-0 shadow ${darkModeOn && "bg-dark"}`}
          >
            <Card.Header
              style={{
                background: cardStyle.background,
                color: cardStyle.colorHeader,
              }}
            >
              <Card.Title>
                {" "}
                Orders <BsClipboardCheck />{" "}
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Title> OrdersCount </Card.Title>
              <Card.Text>
                You have had {cardsInfo.orders} number of orders to this day in
                this year.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex justify-content-around">
        <Col className="d-flex justify-content-center mb-5">
          <Card
            style={{ width: "18rem", height: "12rem" }}
            className={`border-0 shadow ${darkModeOn && "bg-dark"}`}
          >
            <Card.Header
              style={{
                background: cardStyle.background,
                color: cardStyle.colorHeader,
              }}
            >
              <Card.Title>
                {" "}
                Orders <BsClipboardCheck />{" "}
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Title>Orders Value </Card.Title>
              <Card.Text>
                You had{" "}
                {new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "EUR",
                }).format(cardsInfo.ordersValue)}{" "}
                worth of orders to this day in this year.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center mb-5">
          <Card
            style={{ width: "18rem", height: "12rem" }}
            className={`border-0 shadow ${darkModeOn && "bg-dark"}`}
          >
            <Card.Header
              style={{
                background: cardStyle.background,
                color: cardStyle.colorHeader,
              }}
            >
              <Card.Title>
                {" "}
                Product <CgPill />
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Title> Best Seller</Card.Title>
              <Card.Text>
                Your best selling product this year is{" "}
                {
                  Object.entries(cardsInfo.bestSeller).sort(
                    (a, b) => b[1] - a[1]
                  )[0][0]
                }{" "}
                with{" "}
                {
                  Object.entries(cardsInfo.bestSeller).sort(
                    (a, b) => b[1] - a[1]
                  )[0][1]
                }{" "}
                pieces sold.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
