import React from "react";
import { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { DataTopping } from "../API/DummyTopping";
import formatPrice from "../utils/formatPrice";
import "../assets/Topping/StyleToping.css";

import ButtonSubmit from "../components/inputForm/Button";

export default function ListTopping(props) {
  // topingHandler
  const [toping, setToping] = useState([]);
  const handleChange = (e) => {
    let updateToping = [...toping];
    if (e.target.checked) {
      updateToping = [...toping, e.target.value];
    } else {
      updateToping.splice(toping.indexOf(e.target.value));
    }
    setToping(updateToping);
  };

  let resultTotal = toping.reduce((a, b) => {
    return a + parseInt(b);
  }, 0);

  // function Add() {
  //   // console.log(id);
  //   return setTotal(Number(total) + Number(DataTopping[0].price));
  // }
  return (
    <Container className="mt-5">
      <h4 className="mb-4" style={{ color: "#974A4A" }}>
        Toping
      </h4>
      <Row>
        {DataTopping.map((items, index) => (
          <Col md={3} className="text-center mb-3" key={index}>
            <input
              type="checkbox"
              id={items.id}
              onChange={handleChange}
              className="toppingCeckbox"
              value={items.price}
            />
            <label htmlFor={items.id}>
              <img
                src={items.image}
                alt="123"
                id="toping"
                style={{ cursor: "pointer" }}
              />
            </label>
            <p htmlFor="toping">{items.name}</p>
          </Col>
        ))}
      </Row>
      <Row className="mt-5">
        <Col>
          <h4 style={{ color: "#974A4A" }}>Total</h4>
        </Col>
        <Col>
          <h4 className="text-end" style={{ color: "#974A4A" }}>
            {formatPrice(resultTotal + props.ProductPrice)}
          </h4>
        </Col>
      </Row>
      <ButtonSubmit text="Add to Cart" />
    </Container>
  );
}
