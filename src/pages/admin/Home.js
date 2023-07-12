import { Container } from "react-bootstrap";
import Navbars from "../../components/navbar";
import { useState } from "react";
import DetailTicketModal from "../../components/modals/DetailTicket-modal";
import EditStatusModal from "../../components/modals/EditStatus-modal";

const AdminHome = (props) => {
    const [modalDetailTransaksi, setModalDetailTransaksi] = useState(false);
    const [modalEditStatus, setModalEditStatus] = useState(false);
    const [open, setOpen] = useState(false);

    const HandleOpenDetailModal = () => {
        setOpen(true)
    }

    return (
        <div className='bg pb-5'>
            <Navbars data={props.data}/>
            <div className="" style={{ backgroundColor: "white" }}>
                <Container className="py-4">
                    <h2>List Transaksi</h2>
                    <ul className="d-flex p-0" style={{ listStyle: "none" }}>
                        <li className="ms-2 me-5 my-2">No</li>
                        <li className="my-2" style={{ marginLeft: 90, marginRight: 90 }}>Users</li>
                        <li className="my-2" style={{ marginLeft: 90, marginRight: 90}}>Tiket</li>
                        <li className="mx-5 my-2">Bukti Transfer</li>
                        <li className="mx-5 my-2">Status Payment</li>
                        <li className="my-2" style={{ marginLeft: 110}}>Action</li>
                    </ul>
                    <ul className="d-flex border-top border-bottom border-2 px-0 py-4" style={{ listStyle: "none", backgroundColor: "#F8F8F9" }}>
                        <li className="ms-2 me-5 my-2">1</li>
                        <li className="mx-5 my-2">Muhamamd Wildan</li>
                        <li className="mx-5 my-2">Jakarta - Bogor</li>
                        <li className="my-2" style={{ marginLeft: 70, marginRight: 70 }}>Ada.png</li>
                        <li className="my-2" style={{ color: '#28ED38', marginLeft : 70, marginRight: 80 }}>Approve</li>
                        <li className="mx-5 my-2 d-flex">
                            <button className="border-0 mx-2 bg-transparent" onClick={() => setModalDetailTransaksi(true)}><img src="./assets/images/detail-ticket.svg"/></button>
                            <button className="border-0 mx-2 bg-transparent" onClick={() => setModalEditStatus(true)}><img src="./assets/images/edit.svg"/></button>
                            <button className="border-0 mx-2 bg-transparent"><img src="./assets/images/delete.svg"/></button>
                        </li>
                    </ul>
                    <ul className="d-flex border-top border-bottom border-2 px-0 py-4" style={{ listStyle: "none", backgroundColor: "#F8F8F9" }}>
                        <li className="ms-2 me-5 my-2">1</li>
                        <li className="mx-5 my-2">Muhamamd Wildan</li>
                        <li className="mx-5 my-2">Jakarta - Bogor</li>
                        <li className="my-2" style={{ marginLeft: 70, marginRight: 70 }}>Ada.png</li>
                        <li className="my-2" style={{ color: '#28ED38', marginLeft : 70, marginRight: 80 }}>Approve</li>
                        <li className="mx-5 my-2 d-flex">
                            <button className="border-0 mx-2 bg-transparent" onClick={() => setModalDetailTransaksi(true)}><img src="./assets/images/detail-ticket.svg"/></button>
                            <button className="border-0 mx-2 bg-transparent" onClick={() => setModalEditStatus(true)}><img src="./assets/images/edit.svg"/></button>
                            <button className="border-0 mx-2 bg-transparent"><img src="./assets/images/delete.svg"/></button>
                        </li>
                    </ul>
                    <ul className="d-flex border-top border-bottom border-2 px-0 py-4" style={{ listStyle: "none", backgroundColor: "#F8F8F9" }}>
                        <li className="ms-2 me-5 my-2">1</li>
                        <li className="mx-5 my-2">Muhamamd Wildan</li>
                        <li className="mx-5 my-2">Jakarta - Bogor</li>
                        <li className="my-2" style={{ marginLeft: 70, marginRight: 70 }}>Ada.png</li>
                        <li className="my-2" style={{ color: '#28ED38', marginLeft : 70, marginRight: 80 }}>Approve</li>
                        <li className="mx-5 my-2 d-flex">
                            <button className="border-0 mx-2 bg-transparent" onClick={() => setModalDetailTransaksi(true)}><img src="./assets/images/detail-ticket.svg"/></button>
                            <button className="border-0 mx-2 bg-transparent" onClick={() => setModalEditStatus(true)}><img src="./assets/images/edit.svg"/></button>
                            <button className="border-0 mx-2 bg-transparent"><img src="./assets/images/delete.svg"/></button>
                        </li>
                    </ul>
                    <ul className="d-flex border-top border-bottom border-2 px-0 py-4" style={{ listStyle: "none", backgroundColor: "#F8F8F9" }}>
                        <li className="ms-2 me-5 my-2">1</li>
                        <li className="mx-5 my-2">Muhamamd Wildan</li>
                        <li className="mx-5 my-2">Jakarta - Bogor</li>
                        <li className="my-2" style={{ marginLeft: 70, marginRight: 70 }}>Ada.png</li>
                        <li className="my-2" style={{ color: '#28ED38', marginLeft : 70, marginRight: 80 }}>Approve</li>
                        <li className="mx-5 my-2 d-flex">
                            <button className="border-0 mx-2 bg-transparent" onClick={() => setModalDetailTransaksi(true)}><img src="./assets/images/detail-ticket.svg"/></button>
                            <button className="border-0 mx-2 bg-transparent" onClick={() => setModalEditStatus(true)}><img src="./assets/images/edit.svg"/></button>
                            <button className="border-0 mx-2 bg-transparent"><img src="./assets/images/delete.svg"/></button>
                        </li>
                    </ul>
                    <ul className="d-flex border-top border-bottom border-2 px-0 py-4" style={{ listStyle: "none", backgroundColor: "#F8F8F9" }}>
                        <li className="ms-2 me-5 my-2">1</li>
                        <li className="mx-5 my-2">Muhamamd Wildan</li>
                        <li className="mx-5 my-2">Jakarta - Bogor</li>
                        <li className="my-2" style={{ marginLeft: 70, marginRight: 70 }}>Ada.png</li>
                        <li className="my-2" style={{ color: '#28ED38', marginLeft : 70, marginRight: 80 }}>Approve</li>
                        <li className="mx-5 my-2 d-flex">
                            <button className="border-0 mx-2 bg-transparent" onClick={() => setModalDetailTransaksi(true)}><img src="./assets/images/detail-ticket.svg"/></button>
                            <button className="border-0 mx-2 bg-transparent" onClick={() => setModalEditStatus(true)}><img src="./assets/images/edit.svg"/></button>
                            <button className="border-0 mx-2 bg-transparent"><img src="./assets/images/delete.svg"/></button>
                        </li>
                    </ul> 
                </Container>
                <EditStatusModal show={modalEditStatus} onHide={setModalEditStatus} />
                <DetailTicketModal show={modalDetailTransaksi} onHide={() => setModalDetailTransaksi(false)}/>
            </div>
        </div>
    );
}

export default AdminHome