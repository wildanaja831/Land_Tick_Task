import { Button, Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function MainContents(){
    return (
        <Container style={{ bottom: 200, left: 100}} className="position-absolute">
            <div>
                <Row style={{ height: 250, backgroundColor: 'white' }} className="shadow rounded mx-2">
                    <Col md={3} className="bg-secondary bg-opacity-25 rounded-start p-0">
                        <div className="mt-3 border-start border-5 border-warning p-2" style={{ backgroundColor: 'white' }}><img src="./assets/images/train.png" /> Tiket Kereta Api</div>
                    </Col>
                    <Col md={9} className="p-3">
                        <h4>Tiket Kereta Api</h4>
                        <div>
                            <Form className="w-100">
                                <div className="align-items-center d-flex justify-content-between mb-4">
                                    <div className="" style={{ width: '45%' }}>
                                        <Form.Label htmlFor="input-asal" className="fw-bolder">Asal</Form.Label>
                                        <Form.Control id="input-asal" type="text" placeholder="Asal.."/>
                                    </div>
                                    <button className="mx-4 mt-3 rounded-5 border-0" style={{ width: 50, height: 50, backgroundColor: '#ED7A9D' }}><img src="./assets/images/reverse.svg"/></button>
                                    <div className="" style={{ width: '50%' }}>
                                        <Form.Label htmlFor="input-tujuan" className="fw-bolder">Tujuan</Form.Label>
                                        <Form.Control id="input-tujuan" type="text" placeholder="Tujuan.."/>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex w-50 justify-content-between">
                                        <div className="">
                                            <Form.Label htmlFor="input-tanggal-otw" className="fw-bolder">Tanggal Berangkat</Form.Label>
                                            <Form.Control id="input-tanggal-otw" type="date"/>
                                        </div>
                                        <div className="d-flex" style={{ marginRight: 40 }}>
                                            <Form.Check className="me-2" id="input-check-pulang" />
                                            <Form.Label htmlFor="input-check-pulang" className="fw-bolder">Pulang Pergi</Form.Label>
                                        </div>
                                    </div>
                                    <div className="d-flex ms-5">
                                        <div style={{ width: 150, marginLeft: 10 }}>
                                            <Form.Label htmlFor="input-jumlah-dewasa" className="fw-bolder">Dewasa</Form.Label>
                                            <Form.Control id="input-jumlah-dewasa" type="number" placeholder="jumlah.."/>
                                        </div>
                                        <div style={{ width: 150, marginLeft: 15 }} className="me-4">
                                            <Form.Label htmlFor="input-jumlah-bayi" className="fw-bolder">Bayi</Form.Label>
                                            <Form.Control id="input-jumlah-bayi" type="number" placeholder="jumlah.."/>
                                        </div>
                                        <div className="" style={{ width: 100 }}>
                                            <Button className="border-0" style={{ backgroundColor: '#ED7A9D', marginTop: 32 }}>Cari Tiket</Button>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default MainContents;
