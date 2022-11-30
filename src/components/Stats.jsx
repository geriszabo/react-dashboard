import React from "react";
import { dataSum } from "../data/dataSum";
import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

let cardsInfo = dataSum.reduce(
  (obj, order) => {
    const { salespersonName, unitPrice, productName, quantitySold } = order;
    obj.orders += 1;
    obj.ordersValue += unitPrice * quantitySold;
    if (!obj.staff[salespersonName]) {
      obj.staff[salespersonName] = quantitySold;
    } else {
      obj.staff[salespersonName] += quantitySold;
    }
    if (!obj.bestSeller[productName])
      obj.bestSeller[productName] = quantitySold;
    else {
      obj.bestSeller[productName] += quantitySold;
    }
    return obj;
  },
  {
    staff: [],
    orders: 0,
    ordersValue: 0,
    bestSeller: [],
  }
);

console.log(cardsInfo);

export default function Stats() {
  return (
    <Container
      fluid
      className="text-center justify-content-center align-items-center"
    
    >
      <Row>
        <Col className="d-flex justify-content-center mb-5">
          <Card
            style={{ width: "18rem", height: "12rem" }}
            className="border-0 shadow"
          >
            <Card.Header
              style={{
                background:
                  "linear-gradient(130deg, mediumaquamarine, paleturquoise)",
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
            className="border-0 shadow"
          >
            <Card.Header
              style={{
                background:
                  "linear-gradient(130deg, mediumaquamarine, paleturquoise)",
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
      <Row>
        <Col className="d-flex justify-content-center mb-5">
          <Card
            style={{ width: "18rem", height: "12rem" }}
            className="border-0 shadow"
          >
            <Card.Header
              style={{
                background:
                  "linear-gradient(130deg, mediumaquamarine, paleturquoise)",
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
            className="border-0 shadow"
          >
            <Card.Header
              style={{
                background:
                  "linear-gradient(130deg, mediumaquamarine, paleturquoise)",
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
