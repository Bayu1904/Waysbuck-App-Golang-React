import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useQuery, useMutation } from "react-query";
import Swal from "sweetalert2";

// components
import InputText from "../../components/inputForm/InputText";
import ButtonSubmit from "../../components/inputForm/Button";
import Header from "../../components/Header";

// reactBootstrap
import { Container, Row, Col } from "react-bootstrap";

import Boba from "../../assets/Rectangle 4boba-1.png";
import { API } from "../../config/api";
// import { UserContext } from "../../utils/CreateContext";

export default function AddProduct() {
  const navigate = useNavigate();

  const [preview, setPreview] = useState(null);
  const [nameUrl, setNameUrl] = useState();
  const [addProduct, setAddProduct] = useState({
    titleProduct: "",
    price: "",
    image: "",
  });

  const { titleProduct, price, image } = addProduct;

  const handleChange = (e) => {
    setAddProduct({
      ...addProduct,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
      setNameUrl(e.target.name[0]);
    }
  };
  console.log(addProduct);

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Store data with FormData as object
      const formData = new FormData();
      formData.set("image", addProduct.image[0], addProduct.image[0].name);
      // console.log(image);
      formData.set("name", addProduct.titleProduct);
      formData.set("price", addProduct.price);

      console.log(formData);
      // Configuration
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      // Insert product data
      const response = await API.post("/product", formData, config);
      console.log(response);
      // console.log(response);
      // navigate("/");
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      <Header className="mb-5" />
      <Container fluid className="w-75 mt-5">
        <Row>
          <Col sm={7} className="px-5">
            <form onSubmit={(e) => handleSubmit.mutate(e)}>
              <h1 className="mb-5">Add Product</h1>

              <InputText
                type="text"
                placeholder="Product Title"
                name="titleProduct"
                onChange={handleChange}
                value={`${titleProduct}`}
              />
              <InputText
                type="text"
                placeholder="Price"
                name="price"
                onChange={handleChange}
                value={`${price}`}
              />
              <InputText
                type="file"
                name="image"
                onChange={handleChange}
                // value={nameUrl}
              />
              <ButtonSubmit type="submit" text="AddProduct" />
            </form>
          </Col>
          <Col sm={5} className="text-center">
            {preview && (
              <div>
                <img
                  src={preview}
                  style={{
                    maxWidth: "150px",
                    maxHeight: "150px",
                    objectFit: "cover",
                  }}
                  alt={preview}
                />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
