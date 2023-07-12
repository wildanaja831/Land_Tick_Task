import { Container } from "react-bootstrap";
import React from 'react';


function ListTicketPublic(){
    return (
        <Container style={{ paddingTop: 245 }} className="mt-4 pb-5">
            <div className="d-flex">
                <ul className="d-flex" style={{ listStyle: "none" }}>
                    <li className="mx-5">Nama Kereta</li>
                    <li className="mx-5">Berangkat</li>
                    <li className="mx-4"></li>
                    <li className="mx-5">Tiba</li>
                    <li className="mx-5">Durasi</li>
                </ul>
                <ul style={{ listStyle: "none" }}>
                    <li className="" style={{ marginLeft: 300 }}>Harga Per Orang</li>
                </ul>
            </div>
            <div className="d-flex border border-3 align-items-center my-4 rounded pt-2" style={{ height: 100 }}>
                <ul className="d-flex" style={{ listStyle: "none" }}>
                    <a>
                        <div className="text-center">
                            <li className="mx-5 mt-3">
                                <p style={{ lineHeight: 0.001 }}>Argo Wilis</p>
                                <span className="text-secondary opacity-75">Eksekutif(H)</span>
                            </li>
                        </div>
                    </a>
                    <div className="text-center mx-3">
                        <li className="mx-5 mt-3">
                            <p style={{ lineHeight: 0.001 }}>05.00</p>
                            <span className="text-secondary opacity-75">Gambir</span>
                        </li>
                    </div>
                    <li className="mt-3 me-4"><img src="./assets/images/Arrow.svg"/></li>
                    <div className="text-center">
                        <li className="mx-4 mt-3">
                            <p style={{ lineHeight: 0.001 }}>10.05</p>
                            <span className="text-secondary opacity-75">Surabaya</span>
                        </li>
                    </div>
                    <div className="ms-2">
                        <li className="mx-5 mt-3">5j 05m</li>
                    </div>
                </ul>
                <ul style={{ listStyle: "none" }}>
                    <li className="p-3" style={{ marginLeft: 300, color: '#ED7A9D' }}>Rp. 250.000</li>
                </ul>
            </div>
            <div className="d-flex border border-3 align-items-center my-4 rounded pt-2" style={{ height: 100 }}>
                <ul className="d-flex" style={{ listStyle: "none" }}>
                    <div className="text-center">
                        <li className="mx-5 mt-3">
                            <p style={{ lineHeight: 0.001 }}>Argo Wilis</p>
                            <span className="text-secondary opacity-75">Eksekutif(H)</span>
                        </li>
                    </div>
                    <div className="text-center mx-3">
                        <li className="mx-5 mt-3">
                            <p style={{ lineHeight: 0.001 }}>05.00</p>
                            <span className="text-secondary opacity-75">Gambir</span>
                        </li>
                    </div>
                    <li className="mt-3 me-4"><img src="./assets/images/Arrow.svg"/></li>
                    <div className="text-center">
                        <li className="mx-4 mt-3">
                            <p style={{ lineHeight: 0.001 }}>10.05</p>
                            <span className="text-secondary opacity-75">Surabaya</span>
                        </li>
                    </div>
                    <div className="ms-2">
                        <li className="mx-5 mt-3">5j 05m</li>
                    </div>
                </ul>
                <ul style={{ listStyle: "none" }}>
                    <li className="p-3" style={{ marginLeft: 300, color: '#ED7A9D' }}>Rp. 250.000</li>
                </ul>
            </div>
            <div className="d-flex border border-3 align-items-center my-4 rounded pt-2" style={{ height: 100 }}>
                <ul className="d-flex" style={{ listStyle: "none" }}>
                    <div className="text-center">
                        <li className="mx-5 mt-3">
                            <p style={{ lineHeight: 0.001 }}>Argo Wilis</p>
                            <span className="text-secondary opacity-75">Eksekutif(H)</span>
                        </li>
                    </div>
                    <div className="text-center mx-3">
                        <li className="mx-5 mt-3">
                            <p style={{ lineHeight: 0.001 }}>05.00</p>
                            <span className="text-secondary opacity-75">Gambir</span>
                        </li>
                    </div>
                    <li className="mt-3 me-4"><img src="./assets/images/Arrow.svg"/></li>
                    <div className="text-center">
                        <li className="mx-4 mt-3">
                            <p style={{ lineHeight: 0.001 }}>10.05</p>
                            <span className="text-secondary opacity-75">Surabaya</span>
                        </li>
                    </div>
                    <div className="ms-2">
                        <li className="mx-5 mt-3">5j 05m</li>
                    </div>
                </ul>
                <ul style={{ listStyle: "none" }}>
                    <li className="p-3" style={{ marginLeft: 300, color: '#ED7A9D' }}>Rp. 250.000</li>
                </ul>
            </div>
        </Container>
    );
}

export default ListTicketPublic;