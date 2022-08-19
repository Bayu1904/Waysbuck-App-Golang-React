import React from "react";

import Logo from "../assets/logo-brand.png";
import Gambar from "../assets/Rectangle 4boba-1.png";
import Barcode from "../assets/Groupbarcode.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Transaction() {
  return (
    <Container
      className="p-4 overflow-auto rounded-4"
      style={{ backgroundColor: "#F6DADA" }}
    >
      <Row>
        <Col md={8}>
          <Row className="mb-3">
            <Col sm={4}>
              <img src={Gambar} alt="aa" style={{ width: 100 }} />
            </Col>
            <Col sm={8}>
              <div>
                <h5>Coffe Palm</h5>
                <p>Saturday - 6 Aug 2022</p>
              </div>
              <div className="mt-1" style={{ fontSize: 15 }}>
                <p className="my-1">Topping : Grass Sugar, Grass Jelly</p>
                <p className="my-1">Price : 60.000</p>
              </div>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={4}>
              <img src={Gambar} alt="aa" style={{ width: 100 }} />
            </Col>
            <Col sm={8}>
              <div>
                <h5>Coffe Palm</h5>
                <p>Saturday - 6 Aug 2022</p>
              </div>
              <div className="mt-1" style={{ fontSize: 15 }}>
                <p className="my-1">Topping : Grass Sugar, Grass Jelly</p>
                <p className="my-1">Price : 60.000</p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={4} className="text-center">
          <img className="w-50" src={Logo} alt="" />
          <br />
          <br />
          <img src={Barcode} alt="" />
          <div
            className="text-center w-75 m-auto my-3 fw-semibold"
            style={{
              backgroundColor: "rgba(0, 209, 255, .3)",
              color: "#00D1FF",
            }}
          >
            On The Way
          </div>
          <div className="text-center w-75 m-auto my-3 fw-normal">
            Subtotal:Rp.69.000
          </div>
        </Col>
      </Row>
    </Container>
  );
}
