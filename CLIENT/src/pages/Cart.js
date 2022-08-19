import React from 'react'
// import ListOrder from '../components/listOrder'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import img1 from '../assets/Rectangle 4boba-1.png'
import Delete from '../assets/bin 1.png'
import Button from '../components/inputForm/Button'
import Header from '../components/Header'

export default function Cart() {
    return (
        <>
            <Header />
            <Container style={{ color: "#BD0707" }}>
                <h2 className="fw-bold">My Order</h2>
                <p>Review Your Order</p>
                <Row className="justify-content-between" >
                    <Col md={8} >
                        <hr />
                        <Container className="justify-content-between " >
                            <Row style={{ fontSize: 14 }}>
                                <Col md={8} className="d-flex">
                                    <div className="rounded" style={{ width: 80, height: 80, marginRight: 13, marginBottom: 29 }}>
                                        <img src={img1} alt="img" style={{ width: "100%" }} />
                                    </div>
                                    <div>
                                        <p style={{ fontWeight: 900 }}>Ice Coffe Palm Sugar</p>
                                        <p style={{ fontSize: 14 }}><span style={{ color: "#974A4A", fontWeight: 800 }}>Toping </span>: Bill Berry Boba, Bubble Tea Gelatin</p>
                                    </div>
                                </Col>
                                <Col md={4} className="justify-content-end" style={{ textAlign: "end" }}>
                                    <p>Rp.33.000</p>
                                    <img src={Delete} alt="img" style={{ width: 16, height: 20 }} />
                                </Col>
                            </Row>
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
                                <p>69.000</p>
                                <p>2</p>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col>
                                <p>Total</p>
                            </Col>
                            <Col>
                                <p>69.000</p>
                            </Col>
                        </Row>
                        <Button text={"Pay"} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
