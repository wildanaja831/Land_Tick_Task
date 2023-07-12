import { Modal } from "react-bootstrap";
import "../../pages/Home.css"

const DetailTicketModal = (props) => {
    return (
        <Modal {...props} size="lg" centered >
            <div className=" font-all">
                <Modal.Header className="p-0 me-4 border-0" closeButton>
                    <div className="px-3" style={{ width: 170, backgroundColor: '#ED7A9D', borderEndEndRadius: 50, borderTopLeftRadius: 3  }}><img className="me-2" src="../assets/images/Land Tick White.svg"/><img src="../assets/images/train-facing-white.svg"/></div>
                </Modal.Header>
                <div className="d-flex justify-content-between ps-3 pb-3">
                    <div className="my-2" style={{ height: 300 }}>
                        <div>
                            <h1 className="fw-bold">Invoice</h1>
                            <p style={{ fontSize: 15, lineHeight: 0.1 }}>Kode Invoice : INV0101</p>
                        </div>
                        <div>
                            <h4 className="fw-bold">Kereta Api</h4>
                            <p className="fw-bold" style={{ fontSize: 15 }}>Senin, <span className="text-secondary opacity-75">21 Februari 2023</span></p>
                        </div>
                        <div className="mt-4">
                            <h5 className="fw-bold">Argo Wilis</h5>
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
                                    <p style={{ lineHeight: 0.001 }}>05.00</p>
                                    <span className="text-secondary opacity-75">21 Februari 2023</span>
                                </li>
                                <li className="mt-5 pt-4">
                                    <p style={{ lineHeight: 0.001 }}>10.00</p>
                                    <span className="text-secondary opacity-75">21 Februari 2023</span>
                                </li>
                            </ul>
                            <ul className="" style={{ listStyle: "none" }}>
                                <li className="mt-3 mb-5">
                                    <p style={{ lineHeight: 0.001 }}>Jakarta (GMR)</p>
                                    <span className="text-secondary opacity-75">Stasiun Gambir</span>
                                </li>
                                <li className="mt-5 pt-4">
                                    <p style={{ lineHeight: 0.001 }}>Surabaya (SBY)</p>
                                    <span className="text-secondary opacity-75">Stasiun Surabaya</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center mt-5 float-end p-5">
                        <img style={{ width: 200 }} src="../assets/images/QR-code.svg"/>
                        <p style={{ fontSize: 20 }}>TCK0101</p>
                    </div>
                </div>
                <hr className="text-black mx-1"/>
                <div className="">
                    <ul className="d-flex px-3" style={{ listStyle: "none" }}>
                        <li className="me-5">No. Tanda Pengenal</li>
                        <li className="mx-5">Nama Pemesan</li>
                        <li className="mx-5">No. Handphone</li>
                        <li className="ms-5">Email</li>
                    </ul>
                    <ul className="d-flex px-3" style={{ listStyle: "none", color: "grey" }}>
                        <li className="me-5">321321050651065055</li>
                        <li className="mx-5">Muhammad Wildan</li>
                        <li className="mx-3">080550550505</li>
                        <li className="ms-5">wildanaja@gmail.com</li>
                    </ul>
                </div>
                <hr className="text-black mx-1"/>
                <div className="d-flex justify-content-between m-2 px-2 pt-2 rounded" style={{ backgroundColor: "#E7E7E6" }}>
                    <h4 className="ms-2">Total</h4>
                    <h4 className="me-4" style={{ color: '#ED7A9D' }}>Rp. 250.000</h4>
                </div>
            </div>
        </Modal>
    );
}

export default DetailTicketModal