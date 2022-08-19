import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from 'sweetalert2'

// components
import InputText from "../../components/inputForm/InputText";
import ButtonSubmit from "../../components/inputForm/Button";
import Header from "../../components/Header";

// reactBootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Topping from "../../assets/Rectangle 4Addtopping.png";

export default function AddTopping() {
  const [addTopping, setAddTopping] = useState({
    titleProduct: '',
    price: ''
  })

  const { titleProduct, price } = addTopping

  const handleAddTopping = (e) => {
    setAddTopping({
      ...addTopping,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const addStaticProduct = {
      title: addTopping.titleProduct,
      price: addTopping.price
    }

    console.log(addStaticProduct);

    Swal.fire({
      title: `Berhasil`,
      text: `Topping ${addStaticProduct.title} senilai ${addStaticProduct.price} berhasil ditambahkan`,
      icon: 'success',
      confirmButtonText: 'OK'
    })

  }

  return (
    <>
      <Header className="mb-5" />

      <Container fluid className="w-75 mt-5">
        <Row>
          <Col sm={7} className="px-5">
            <form onSubmit={(e) => handleSubmit(e)}>
              <h1 className="mb-5">Add Topping</h1>
              <InputText type="text" placeholder="Product Title" name="titleProduct" onChange={handleAddTopping} value={`${titleProduct}`} />
              <InputText type="text" placeholder="Price" name="price" onChange={handleAddTopping} value={`${price}`} />
              <InputText type="file" />
              <ButtonSubmit type="submit" text="AddTopping" />
            </form>
          </Col>
          <Col sm={5} className="text-center">
            <img src={Topping} alt="" />
          </Col>
        </Row>
      </Container>
    </>
  );
}
