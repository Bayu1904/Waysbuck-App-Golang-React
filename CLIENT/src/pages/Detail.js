import React from "react";
import Header from "../components/Header";
import { useParams, useNavigate } from "react-router-dom";
import formatPrice from "../utils/formatPrice";
import { API } from "../config/api";
import { useQuery } from "react-query";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Toping from "../components/ListTopping";

export default function Detail() {
  let navigate = useNavigate();
  const { id } = useParams();

  let { data: product } = useQuery("product", async () => {
    const response = await API.get("/product/" + id);
    // console.log(response);
    return response.data.data;
  });
  return (
    <div>
      <Header />
      <Container className="w-75 mt-5">
        <Row>
          <Col md={5}>
            <img src={product?.image} alt="" className="w-100" />
          </Col>
          <Col md={7}>
            <h1 style={{ color: "#BD0707" }}>{product?.name}</h1>
            <h4 style={{ color: "#974A4A" }}>{formatPrice(product?.price)}</h4>
            <Toping product={product} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
