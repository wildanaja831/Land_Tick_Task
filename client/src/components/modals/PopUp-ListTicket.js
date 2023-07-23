import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import '../../pages/Home.css'

const PopUpListTicket = ({show, setShow}) => {
    const navigate = useNavigate();

    return (
        <Modal className="font-all" show={show} onHide={setShow}>
            <div className="p-3 text-center">
                <p>Tiket anda berhasil ditambahkan silahkan melakukan pembayaran</p>
                <p style={{ lineHeight: 0.01, cursor: "pointer" }}>Klik <span className="fw-bold" onClick={() => navigate('/MyTicket')}>disini</span></p>
            </div>
        </Modal>
    );
}

export default PopUpListTicket