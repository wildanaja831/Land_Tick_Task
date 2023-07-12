import { Col, Container, Row } from "react-bootstrap"
import Navbars from "../components/navbar"
import "./Home.css"
import { useNavigate } from "react-router-dom"

const Payment = () => {
    const navigate = useNavigate();

    const handleNavigationToTicket = () => {
        navigate("/MyTicket")
    }

    return (
        <div>
            <Navbars/>
            <Container>
                <div className="mb-5 font-all">
                    <h3 className="my-5">Invoice</h3>
                    <Row>
                        <Col md={8}>
                            <div>
                            <div className="border rounded">
                                <div className="px-3" style={{ width: 170, backgroundColor: '#ED7A9D', borderEndEndRadius: 50, borderTopLeftRadius: 3  }}><img className="me-2" src="../assets/images/Land Tick White.svg"/><img src="../assets/images/train-facing-white.svg"/></div>
                                    <ul className="d-flex px-3 mt-5" style={{ listStyle: "none" }}>
                                        <li className="me-5">No. Tanda Pengenal</li>
                                        <li className="mx-5">Nama Pemesan</li>
                                        <li className="mx-5">No. Handphone</li>
                                        <li className="ms-5">Email</li>
                                    </ul>
                                    <hr/>
                                    <ul className="d-flex px-3" style={{ listStyle: "none", color: "grey" }}>
                                        <li className="me-5">321321050651065055</li>
                                        <li className="mx-5">Muhammad Wildan</li>
                                        <li className="mx-3">080550550505</li>
                                        <li className="ms-5">wildanaja@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h3>Rincian Harga</h3>
                                <div className="border rounded mt-3" style={{ width: 500 }}>
                                    <ul className="d-flex p-4 justify-content-between" style={{ listStyle: "none" }}>
                                        <li className="me-5">Argo Wilis (Dewasa) x1</li>
                                        <li className="me-3">Rp. 250.000</li>
                                    </ul>
                                    <ul className="d-flex px-4 py-2 my-0 rounded-bottom justify-content-between" style={{ listStyle: "none", backgroundColor: '#E6E7E7' }}>
                                        <li className="fw-bold" style={{ fontSize: 20 }}>Total</li>
                                        <li className="me-3 fw-bold" style={{ fontSize: 20 }}>Rp. 250.000</li>
                                    </ul>
                                </div>
                            </div>
                            <button className="border-0 text-white py-2 rounded my-3 fw-bold" onClick={handleNavigationToTicket} style={{ width: 500, backgroundColor: '#ED7A9D' }}>Bayar Sekarang</button>
                        </Col>
                        <Col md={4}>
                            <div className="d-flex justify-content-between px-3 pt-3" style={{ backgroundColor: "#D1D1D0" }}>
                                <div>
                                    <h2 className="fw-bold">Kereta Api</h2>
                                    <p style={{ fontSize: 18 }}>Senin, <span className="text-secondary opacity-75">21 Februari 2023</span></p>
                                </div>
                                <div>
                                    <img src="../assets/images/QR-code.svg"/>
                                    <p>INV0101</p>
                                </div>
                            </div>
                            <div className="p-3" style={{ backgroundColor: '#F4F5F4', height: 300 }}>
                                <div>
                                    <h4 className="fw-bold">Argo Wilis</h4>
                                    <p>Eksekutif (H)</p>
                                </div>
                                <div className="d-flex">
                                    <ul style={{ listStyle: "none" }}>
                                        <p className="p-2 mb-0 mt-3 border border-2 rounded-circle border-warning"></p>
                                        <div className="vertical-line my-1 ms-2" style={{ height: 73}}></div>
                                        <p className="p-2 border border-2 rounded-circle bg-warning border-warning"></p>
                                    </ul>
                                    <ul style={{ listStyle: "none" }}>
                                        <li className="mt-3 mb-5">
                                            <h5 style={{ lineHeight: 0.001 }}>05.00</h5>
                                            <span className="text-secondary opacity-75">21 Februari 2023</span>
                                        </li>
                                        <li className="mt-5 pt-4">
                                            <h5 style={{ lineHeight: 0.001 }}>10.00</h5>
                                            <span className="text-secondary opacity-75">21 Februari 2023</span>
                                        </li>
                                    </ul>
                                    <ul className="" style={{ listStyle: "none" }}>
                                        <li className="mt-3 mb-5">
                                            <h5 style={{ lineHeight: 0.001 }}>Jakarta (GMR)</h5>
                                            <span className="text-secondary opacity-75">Stasiun Gambir</span>
                                        </li>
                                        <li className="mt-5 pt-4">
                                            <h5 style={{ lineHeight: 0.001 }}>Surabaya (SBY)</h5>
                                            <span className="text-secondary opacity-75">Stasiun Surabaya</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Payment