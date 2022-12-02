import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AppContext } from "../App";
import { cardsInfo } from "../data/helpers";
//For charts
import { Line } from "react-chartjs-2";
import { stockGenerator } from "../data/helpers";
import { elements } from "chart.js";

export default function Stats() {
  const { darkModeOn, colorTheme } = useContext(AppContext);

  const cardStyle = {
    background: darkModeOn
      ? colorTheme.dark.gradient
      : colorTheme.light.gradient,
    colorHeader: colorTheme.dark.header,
  };

  return (
    <Container
      fluid
      className={`justify-content-center align-items-center ${
        darkModeOn && "bg-dark"
      }`}
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
              Staff
            </Card.Header>
            <Card.Body>
              {/* <Card.Title> Staff Count </Card.Title> */}
              <Card.Text>
                <Line
                  datasetIdKey="id"
                  data={{
                    labels: Array(8).fill(""),
                    datasets: [
                      {
                        id: 1,
                        label: "Pieces Sold",
                        data: stockGenerator(8),
                        backgroundColor: darkModeOn
                          ? colorTheme.dark.chart
                          : colorTheme.light.chart,
                          borderColor: darkModeOn
                          ? colorTheme.dark.chart
                          : colorTheme.light.chart,
                          borderWidth: 3,
                          
                          // borderCapStyle: "round",
                          // fill: true
                      },
                    ],
                  }}
                  style={{
                    backgroundColor: `${darkModeOn ? "#333333" : ""}`,
                    color: `${darkModeOn ? "white" : "black"}`,
                    // maxHeight: "60vh",
                  }}
                  options={{
                    elements: {
                      line: {
                        tension: 0.5
                      }
                    }}
                  }
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
              Staff
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
              Orders
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
              Orders
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
              Product
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
    </Container>
  );
}
