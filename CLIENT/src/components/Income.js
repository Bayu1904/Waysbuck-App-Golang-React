import React from "react";
import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";
import Header from "./Header";

export default function Income() {
  return (
    <>
      <Header />
      <Container className="mt-4">
        <Table bordered style={{ borderColor: "#828282" }}>
          <thead style={{ backgroundColor: "#E5E5E5" }}>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Address</th>
              <th>Post Code</th>
              <th>Income</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Sugeng no Pants</td>
              <td>Cileungsi</td>
              <td>189728</td>
              <td>Rp.16.000</td>
              <td>On the Way</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}
