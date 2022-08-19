import React from "react";
import Transaction from "./Transaction";

import profile from "../assets/Rectangle 12profile.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ProfileComp() {
  return (
    <Container fluid className="w-75 m-auto mt-5">
      <Row>
        <Col>
          <Row>
            <Col>
              <h3 className="mb-4" style={{ color: "#BD0707" }}>
                My Profile
              </h3>
              <img src={profile} alt="Foto Profile" className="w-100 rounded" />
            </Col>
            <Col>
              <h3 className="mb-5" style={{ color: "white" }}>
                New
              </h3>
              <div className="fw-semibold">
                <p className="mb-0" style={{ color: "#613D2B", fontSize: 25 }}>
                  Full Name
                </p>
                <p>Dandi Saputra</p>
              </div>
              <div className="fw-semibold">
                <p className="mb-0" style={{ color: "#613D2B", fontSize: 25 }}>
                  Email
                </p>
                <p>Dandi@mail.com</p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={7}>
          <h3 className="mb-4" style={{ color: "#613D2B" }}>
            My Transaction
          </h3>
          <Transaction />
        </Col>
      </Row>
    </Container>
  );
}
