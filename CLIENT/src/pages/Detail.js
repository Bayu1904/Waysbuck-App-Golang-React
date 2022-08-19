import React from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import formatPrice from "../utils/formatPrice";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListTopping from "../components/ListTopping";

export default function Detail(props) {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <Container className="w-75 mt-5">
        <Row>
          <Col md={5}>
            <img src={props.data[id].image} alt="" className="w-100" />
          </Col>
          <Col md={7}>
            <h1 style={{ color: "#BD0707" }}>{props.data[id].title}</h1>
            <h4 style={{ color: "#974A4A" }}>
              {formatPrice(props.data[id].price)}
            </h4>
            <ListTopping ProductPrice={props.data[id].price} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
