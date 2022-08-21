import React from "react";
import { API } from "../config/api";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
// import ListOrder from '../components/listOrder'
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import formatPrice from "../utils/formatPrice";
import Delete from "../assets/bin 1.png";
import Button from "../components/inputForm/Button";
import Header from "../components/Header";

export default function Cart() {
  let navigate = useNavigate();
  // Get data transaction by ID
  let { data: transaction, refetch } = useQuery("transCache", async () => {
    const response = await API.get("/transaction-id");
    return response.data.data;
  });

  let handleDelete = async (id) => {
    await API.delete(`cart/${id}`);
    refetch();
  };

  let Total = transaction?.carts?.reduce((a, b) => {
    return a + b.sub_amount;
  }, 0);

  // pay Handler
  const form = {
    status: "Waiting for Payment",
    total: Total,
  };

  const handleSubmit = useMutation(async (e) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    // Insert transaction data
    const body = JSON.stringify(form);

    const response = await API.patch("/transaction", body, config);
    console.log(response);

    const token = response.data.token;
    console.log(token);
    navigate("/profile");
  });

  return (
    <>
      <Header />
      <Container style={{ color: "#BD0707" }}>
        <h2 className="fw-bold">My Order</h2>
        <p>Review Your Order</p>
        <Row className="justify-content-between">
          <Col md={8}>
            <hr />
            <Container className="justify-content-between ">
              {transaction?.carts?.map((item, index) => (
                <Row style={{ fontSize: 14 }}>
                  <Col md={8} className="d-flex">
                    <div
                      className="rounded"
                      style={{
                        width: 80,
                        height: 80,
                        marginRight: 13,
                        marginBottom: 29,
                      }}
                    >
                      <img
                        src={
                          "http://localhost:5000/uploads/" + item.product.image
                        }
                        alt="img"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div>
                      <p style={{ fontWeight: 900 }}>{item.product.name}</p>
                      <p style={{ fontSize: 14 }}>
                        <span style={{ color: "#974A4A", fontWeight: 800 }}>
                          Toping{" "}
                        </span>
                        :{" "}
                        {item.toping
                          .map((items, index) => items.name)
                          .join(", ")}
                      </p>
                    </div>
                  </Col>
                  <Col
                    md={4}
                    className="justify-content-end"
                    style={{ textAlign: "end" }}
                  >
                    <p>{formatPrice(item.sub_amount)}</p>
                    <img
                      src={Delete}
                      alt="img"
                      style={{ cursor: "pointer", width: 16, height: 20 }}
                      onClick={() => handleDelete(item.id)}
                    />
                  </Col>
                </Row>
              ))}
            </Container>
            <hr />
          </Col>

          <Col md={4}>
            <hr />
            <Row>
              <Col>
                <p>Subtotal</p>
                <p>QTY</p>
              </Col>
              <Col>
                <p>{formatPrice(Total)}</p>
                <p>{transaction?.carts?.length}</p>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <p>Total</p>
              </Col>
              <Col>
                <p>{formatPrice(Total)}</p>
              </Col>
            </Row>
            <Button text={"Pay"} onClick={(e) => handleSubmit.mutate(e)} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
