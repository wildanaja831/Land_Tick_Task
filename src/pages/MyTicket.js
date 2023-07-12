import { Col, Container, Row } from "react-bootstrap"
import Navbars from "../components/navbar"
import "./Home.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import ModalPayment from "../components/modals/Payment"

const MyTicket = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [payed, setPayed] = useState(false);

    const handleNavigationToPay = () => {
        navigate("/Payment");
    }

    return (
        <div>
            <Navbars/>
            <Container>
                <div className="mt-5 font-all">
                    <h3 className="my-5">Tiket Saya</h3>
                    {payed ?
                        <div>
                            <button onClick={() => setOpen(true)} className="border rounded p-0" style={{ marginLeft: 80 }}>
                                <Row className="border rounded m-auto" style={{ height: 370, width: 1100 }}>
                                    <Col md={9} className="p-0">
                                        <div className="px-3" style={{ width: 170, backgroundColor: '#ED7A9D', borderEndEndRadius: 50, borderTopLeftRadius: 3  }}><img className="me-2" src="../assets/images/Land Tick White.svg"/><img src="../assets/images/train-facing-white.svg"/></div>
                                        <Row className="p-3">
                                            <Col md={2}>
                                                <h4>Argo Wilis</h4>
                                                <p>Eksekutif (H)</p>
                                                {payed ? <p className="p-2 text-center rounded" style={{ width: 80, backgroundColor: '#EBFCEB', color: '#28ED38', fontSize: 15 }}>Approve</p> :
                                                    <p className="p-2 text-center rounded" style={{ width: 80, backgroundColor: '#FDF2E7', color: '#EB8915', fontSize: 15 }}>Pending</p>
                                                }
                                            </Col>
                                            <Col md={7} className=" d-flex">
                                                <ul style={{ listStyle: "none" }}>
                                                    <p className="p-2 mb-0 mt-3 border border-2 rounded-circle border-warning"></p>
                                                    <div className="vertical-line my-1 ms-2" style={{ height: 50}}></div>
                                                    <p className="p-2 border border-2 rounded-circle bg-warning border-warning"></p>
                                                </ul>
                                                <ul style={{ listStyle: "none" }}>
                                                    <li className="mt-3">
                                                        <h5 style={{ lineHeight: 0.001 }}>05.00</h5>
                                                        <span className="text-secondary opacity-75">21 Februari 2023</span>
                                                    </li>
                                                    <li className="mt-5">
                                                        <h5 style={{ lineHeight: 0.001 }}>10.00</h5>
                                                        <span className="text-secondary opacity-75">21 Februari 2023</span>
                                                    </li>
                                                </ul>
                                                <ul className="ms-5" style={{ listStyle: "none" }}>
                                                    <li className="mt-3">
                                                        <h5 style={{ lineHeight: 0.001 }}>Jakarta (GMR)</h5>
                                                        <span className="text-secondary opacity-75">Stasiun Gambir</span>
                                                    </li>
                                                    <li className="mt-5">
                                                        <h5 style={{ lineHeight: 0.001 }}>Surabaya (SBY)</h5>
                                                        <span className="text-secondary opacity-75">Stasiun Surabaya</span>
                                                    </li>
                                                </ul>
                                            </Col>
                                        </Row>
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
                                    </Col>
                                    <Col md={3}>
                                        <div className="float-end p-2">
                                            <h1 className="float-end">Kereta Api</h1>
                                            <h5>Senin, <span className="text-secondary opacity-75">21 Februari 2023</span></h5>
                                            {payed ? 
                                                <div className="text-center mt-5">
                                                    <img style={{ width: 100 }} src="../assets/images/QR-code.svg"/>
                                                    <p>INV0101</p>
                                                </div> : null
                                            }
                                        </div>
                                        {payed ? null : <button className="border-0 text-white w-100 py-2 rounded" onClick={handleNavigationToPay} style={{ backgroundColor: '#ED7A9D', marginTop: 200, fontSize: 20 }}>Bayar Sekarang</button> }
                                    </Col>
                                </Row>
                            </button>
                            <ModalPayment show={open} onHide={() => setOpen(false)} />
                        </div>
                        :
                        <Row className="border rounded m-auto" style={{ height: 370, width: 1100 }}>
                            <Col md={9} className="p-0">
                                <div className="px-3" style={{ width: 170, backgroundColor: '#ED7A9D', borderEndEndRadius: 50, borderTopLeftRadius: 3  }}><img className="me-2" src="../assets/images/Land Tick White.svg"/><img src="../assets/images/train-facing-white.svg"/></div>
                                <Row className="p-3">
                                    <Col md={2}>
                                        <h4>Argo Wilis</h4>
                                        <p>Eksekutif (H)</p>
                                        {payed ? <p className="p-2 text-center rounded" style={{ width: 80, backgroundColor: '#EBFCEB', color: '#28ED38', fontSize: 15 }}>Approve</p> :
                                            <p className="p-2 text-center rounded" style={{ width: 80, backgroundColor: '#FDF2E7', color: '#EB8915', fontSize: 15 }}>Pending</p>
                                        }
                                    </Col>
                                    <Col md={7} className=" d-flex">
                                        <ul style={{ listStyle: "none" }}>
                                            <p className="p-2 mb-0 mt-3 border border-2 rounded-circle border-warning"></p>
                                            <div className="vertical-line my-1 ms-2" style={{ height: 50}}></div>
                                            <p className="p-2 border border-2 rounded-circle bg-warning border-warning"></p>
                                        </ul>
                                        <ul style={{ listStyle: "none" }}>
                                            <li className="mt-3">
                                                <h5 style={{ lineHeight: 0.001 }}>05.00</h5>
                                                <span className="text-secondary opacity-75">21 Februari 2023</span>
                                            </li>
                                            <li className="mt-5">
                                                <h5 style={{ lineHeight: 0.001 }}>10.00</h5>
                                                <span className="text-secondary opacity-75">21 Februari 2023</span>
                                            </li>
                                        </ul>
                                        <ul className="ms-5" style={{ listStyle: "none" }}>
                                            <li className="mt-3">
                                                <h5 style={{ lineHeight: 0.001 }}>Jakarta (GMR)</h5>
                                                <span className="text-secondary opacity-75">Stasiun Gambir</span>
                                            </li>
                                            <li className="mt-5">
                                                <h5 style={{ lineHeight: 0.001 }}>Surabaya (SBY)</h5>
                                                <span className="text-secondary opacity-75">Stasiun Surabaya</span>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
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
                            </Col>
                            <Col md={3}>
                                <div className="float-end p-2">
                                    <h1 className="float-end">Kereta Api</h1>
                                    <h5>Senin, <span className="text-secondary opacity-75">21 Februari 2023</span></h5>
                                    {payed ? 
                                        <div className="text-center mt-5">
                                            <img style={{ width: 100 }} src="../assets/images/QR-code.svg"/>
                                            <p>INV0101</p>
                                        </div> : null
                                    }
                                </div>
                                {payed ? null : <button className="border-0 text-white w-100 py-2 rounded" onClick={handleNavigationToPay} style={{ backgroundColor: '#ED7A9D', marginTop: 200, fontSize: 20 }}>Bayar Sekarang</button> }
                            </Col>
                        </Row>
                    }
                </div>
            </Container>
        </div>
    )
}

export default MyTicket