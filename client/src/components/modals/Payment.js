import { Modal } from "react-bootstrap";
import "../../pages/Home.css"
import { useQuery } from "react-query";
import { API } from "../../config/api";
import QrLogo from "../../assets/images/QR-code.svg"
import JamLogo from "../../assets/images/clock.svg"
import KtpLogo from "../../assets/images/ktp.svg"
import WarningLogo from "../../assets/images/warning.svg"
import NameLogo from "../../assets/images/Land Tick White.svg"
import Logo from "../../assets/images/train-facing-white.svg"


const ModalPayment = (props) => {
    let {data: transactions} = useQuery("transactionModalCache", async() => {
        const response = await API.get("/transactions")
        return response.data.data;
    })
    
    return (
        <Modal {...props} size="lg" centered>
            <div className="pt-4 font-all">
                {transactions?.filter((transaksi) => transaksi.id === props.id)?.map((data) => {
                    return (
                        <div>
                            <div className="d-flex justify-content-between">
                                <h3 className="fw-bold ps-3">E-Ticket</h3>
                                <div className="px-3" style={{ width: 170, backgroundColor: '#ED7A9D', borderBottomLeftRadius: 50 }}><img className="ms-3 me-2" src={NameLogo}/><img src={Logo}/></div>
                            </div>
                            <div className="d-flex justify-content-between ps-3 pb-3">
                                <div className="my-2" style={{ height: 300 }}>
                                    <div>
                                        <h4 className="fw-bold">Kereta Api</h4>
                                        <p className="fw-bold" style={{ fontSize: 15 }}>Senin, <span className="text-secondary opacity-75">{data.ticket.start_date}</span></p>
                                    </div>
                                    <div>
                                        <h5 className="fw-bold">{data.ticket.name_train}</h5>
                                        <p>{data.ticket.type_train}</p>
                                    </div>
                                    <div className="d-flex">
                                        <ul style={{ listStyle: "none" }}>
                                            <p className="p-2 mb-0 mt-3 border border-2 rounded-circle border-warning"></p>
                                            <div className="vertical-line my-1 ms-2" style={{ height: 73}}></div>
                                            <p className="p-2 border border-2 rounded-circle bg-warning border-warning"></p>
                                        </ul>
                                        <ul style={{ listStyle: "none" }}>
                                            <li className="mt-3 mb-5">
                                                <p style={{ lineHeight: 0.001 }}>{data.ticket.start_time}</p>
                                                <span className="text-secondary opacity-75">{data.ticket.start_date}</span>
                                            </li>
                                            <li className="mt-5 pt-4">
                                                <p style={{ lineHeight: 0.001 }}>{data.ticket.arrival_time}</p>
                                                <span className="text-secondary opacity-75">{data.ticket.start_date}</span>
                                            </li>
                                        </ul>
                                        <ul className="" style={{ listStyle: "none" }}>
                                            <li className="mt-3 mb-5">
                                                <p style={{ lineHeight: 0.001 }}>{data.ticket.start_station.name}</p>
                                                <span className="text-secondary opacity-75">Stasiun {data.ticket.start_station.name}</span>
                                            </li>
                                            <li className="mt-5 pt-4">
                                                <p style={{ lineHeight: 0.001 }}>{data.ticket.destination_station.name}</p>
                                                <span className="text-secondary opacity-75">Stasiun {data.ticket.destination_station.name}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="text-center mt-5 float-end p-5">
                                    <img style={{ width: 200 }} src={QrLogo}/>
                                    <p style={{ fontSize: 20 }}>TCK0101</p>
                                </div>
                            </div>
                            <hr className="text-black mx-1"/>
                            <ul className="d-flex">
                                <li className="d-flex me-3" style={{ width: 240 }}>
                                    <img className="me-3" style={{ width: 70 }} src={KtpLogo}/>
                                    <p className="my-auto">Tunjukkan e-ticket dan identitas para penumpang saat checkin</p>
                                </li>
                                <li className="d-flex me-3" style={{ width: 240 }}>
                                    <img className="me-3" style={{ width: 70 }} src={JamLogo}/>
                                    <p className="my-auto">Check-in paling lambat 90 menit sebelum keberangkatan</p>
                                </li>
                                <li className="d-flex" style={{ width: 240 }}>
                                    <img className="me-3" style={{ width: 70 }} src={WarningLogo}/>
                                    <p className="my-auto">Waktu tertera adalah waktu stasiun setempat</p>
                                </li>
                            </ul>
                            <hr className="text-black mx-1"/>
                            <div className="pb-2 ">
                                <ul className="d-flex px-3 mt-5" style={{ listStyle: "none" }}>
                                    <li className="me-5">No. Tanda Pengenal</li>
                                    <li className="mx-5">Nama Pemesan</li>
                                    <li className="mx-5">No. Handphone</li>
                                    <li className="ms-5">Email</li>
                                </ul>
                                <ul className="d-flex px-3 text-center" style={{ listStyle: "none", color: "grey" }}>
                                    <li className="me-5">321321050651065055</li>
                                    <li className="ms-4" style={{ width: 200 }}>{data.user.name}</li>
                                    <li className="px-3" style={{ width: 150 }}>{data.user.no_hp}</li>
                                    <li className="pe-2">{data.user.email}</li>
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Modal>
    );
}

export default ModalPayment