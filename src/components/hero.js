import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React from 'react';


function Hero(){
    return (
        <div>
            <Container >
                <Row className='align-items-center' style={{ height: 300}}>
                    <Col md={6} className="mb-2">
                        <div className="text-white">
                            <h3 style={{ lineHeight: 2 }} className="fw-bold">Selamat Datang, Ticket Seekers!</h3>
                            <p>Ingin Pulkam Dengan Good Deal?</p>
                            <p style={{ lineHeight: 0.05 }}>Masuk atau Daftar Sekarang!</p>
                        </div>
                    </Col>
                    <Col md={6} className="mb-2">
                        <div>
                            <img src="./assets/images/iklan.png" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Hero;