import React from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import formatPrice from "../utils/formatPrice";
// import { UserContext } from "../utils/CreateContext";
// import LandingPage from "../pages/Landingpages";

export default function ListCard(props) {
  // const [state] = useContext(UserContext);
  // let isLogin = state.isLogin;

  return (
    <Container className="my-5">
      <h1 className="mt-5">Lets Order </h1>
      <Row>
        {props.boba.map((items, index) => (
          <Col className="mt-4">
            <Link to={`/Detail/${index}`} className=" text-decoration-none">
              <Card
                key={index}
                className="pe-auto"
                style={{
                  width: "15.063rem",
                  border: 0,
                  borderRadius: 10,
                  backgroundColor: "#F6DADA",
                }}
              >
                <Card.Img
                  variant="top"
                  src={items.image}
                  className="rounded"
                  style={{ height: "19.5rem" }}
                />
                <Card.Body>
                  <p
                    className="fw-bold text-danger"
                    style={{ fontSize: "18px", margin: 0 }}
                  >
                    {items.title}
                  </p>
                  <p style={{ color: "#974A4A", margin: 0 }}>
                    {formatPrice(items.price)}
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
