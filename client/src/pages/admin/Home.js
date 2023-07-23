import { Button, Container } from "react-bootstrap";
import Navbars from "../../components/navbar";
import { useEffect, useState } from "react";
import DetailTicketModal from "../../components/modals/DetailTicket-modal";
import { useMutation, useQuery } from "react-query";
import { API } from "../../config/api";
import DeleteData from "../../components/modals/DeleteTransaction";
import DetailLogo from '../../assets/images/detail-ticket.svg'
import DeleteLogo from '../../assets/images/delete.svg'
import AddNewStation from "../../components/modals/AddNewStation";

const AdminHome = (props) => {
    const [modalDetailTransaksi, setModalDetailTransaksi] = useState(false);
    const [transactionId, setTransactionId] = useState();
    const [deleteId, setDeleteId] = useState(null);
    const [confirmDelete, setConfirmDelete] = useState(null);
    const [showStation, setShowStation] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = (id) => {
        setDeleteId(id);
        handleShow();
    };

    const deleteById = useMutation(async(id) => {
        try {
            await API.delete(`/transaction/${id}`)
            refetch()
        } catch (error) {
            console.log(error)
        }
    });


    let {data: transactions, refetch} = useQuery("transactionCache", async() => {
        const response = await API.get("/transactions")
        return response.data.data;
    });
    
    useEffect(() => {
        if(confirmDelete) {
            handleClose();
            deleteById.mutate(deleteId);
            setConfirmDelete(null);
        }
    }, [confirmDelete]);

    return (
        <div className="font-all" style={{ minHeight: '100vh', display: "flex", flexDirection: "column" }}>
            <Navbars data={props.data}/>
            <div style={{ backgroundColor: "white" }}>
                <Container className="py-4 w-100"  >
                    <div className="d-flex justify-content-between py-3">
                        <h2>List Transaksi</h2>
                        <Button className="btn btn-success border-0" style={{ backgroundColor: "#0ACF83" }} onClick={() => setShowStation(true)}>Add Station</Button>
                    </div>
                    <ul className="d-flex p-0 text-center justify-content-between" style={{ listStyle: "none" }}>
                        <div className="d-flex">
                            <li className="ps-3 pe-5 py-2">No</li>
                            <li className="py-2 ps-5 pe-3" style={{ marginLeft: 90, marginRight: 90 }}>Users</li>
                            <li className="py-2" style={{ marginLeft: 90, marginRight: 90}}>Tiket</li>
                            <li className="px-5 py-2 ms-3">Status Payment</li>
                        </div>
                        <div>
                            <li className="px-5 py-2" style={{ width: 200, marginRight: 130 }}>Action</li>
                        </div>
                    </ul>
                    {transactions?.map((data, index) => (
                        <ul key={data?.id} className="d-flex border-top text-center border-bottom border-2 px-0 py-4 justify-content-between" style={{ listStyle: "none", backgroundColor: "#F8F8F9" }}>
                            <div className="d-flex">
                                <li className="pe-3 ps-4 me-5 my-2">{index + 1}</li>
                                <li className="px-5 py-3 ms-5 me-3" style={{ width: 200 }}>{data?.user.name}</li>
                                <li className="px-4 py-3 ms-3 me-4" style={{ width: 200 }}>{data?.ticket.start_station.name} - {data?.ticket.destination_station.name}</li>
                                {data?.Status == "Approve" ? 
                                    <li className="px-4 py-3 ms-3 me-4" style={{ color: '#28ED38', width: 150 }}>{data?.Status}</li>
                                    :
                                    <li className="px-4 py-3 ms-3 me-4" style={{ color: '#EB8915', width: 150 }}>{data?.Status}</li>
                                }
                            </div>
                            <div className="d-flex">
                                <li className="px-5 py-2 d-flex" style={{ marginRight: 125 }}>
                                    <button className="border-0 mx-2 bg-transparent" onClick={() => {setModalDetailTransaksi(true); setTransactionId(data?.id)}}><img src={DetailLogo}/></button>
                                    <button onClick={() => handleDelete(data?.id)} className="border-0 mx-2 bg-transparent"><img src={DeleteLogo}/></button>
                                </li>
                            </div>
                        </ul>
                    ))}
                </Container>
            </div>
            <footer className="" style={{ height: 50, backgroundColor: '#ED7A9D', marginTop: 'auto' }}></footer>
            <AddNewStation show={showStation} setStation={setShowStation} />
            <DeleteData show={show} setConfirmDelete={setConfirmDelete} handleClose={handleClose}/>
            <DetailTicketModal show={modalDetailTransaksi} transaction={transactionId} onHide={() => setModalDetailTransaksi(false)}/>
        </div>
    );
}

export default AdminHome