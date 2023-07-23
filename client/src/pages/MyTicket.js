import { Col, Container, Row } from "react-bootstrap";
import Navbars from "../components/navbar";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ModalPayment from "../components/modals/Payment";
import { useQuery } from "react-query";
import { API } from "../config/api";
import LogoName from '../assets/images/Land Tick White.svg'
import Logo from '../assets/images/train-facing-white.svg'
import QrLogo from '../assets/images/QR-code.svg'

const MyTicket = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [transactionId, setTransactionId] = useState();

  let { data: transaction } = useQuery("myTicketCache", async () => {
    const response = await API.get("/mytransaction");
    return response.data.data;
  });

  const handleBuy = async(id) => {
    try {
      const response = await API.get(`/transaction/${id}`);
      navigate(`/Payment/${id}`);
      return response.data.data;
    } catch (error) {
      console.log("Ini Error Ke Payment", error);
    }
  };

  return (
    <div className="font-all">
      <Navbars />
      <Container>
        <div className="mt-5 font-all">
          <h3 className="my-5">Tiket Saya</h3>
          {transaction?.map((data) => (
            <div>
              {data?.Status == "Approve" ? (
                <div className="ms-3 mb-5">
                  <button
                    onClick={() => {setOpen(true); setTransactionId(data.id)}}
                    className="border rounded p-0 bg-light"
                    style={{ marginLeft: 80 }}
                  >
                    <Row
                      className="border rounded m-auto"
                      style={{ height: 370, width: 1100 }}
                    >
                      <Col md={9} className="p-0">
                        <div
                          className="px-3"
                          style={{
                            width: 170,
                            backgroundColor: "#ED7A9D",
                            borderEndEndRadius: 50,
                            borderTopLeftRadius: 3,
                          }}
                        >
                          <img
                            className="me-2"
                            src={LogoName}
                          />
                          <img src={Logo} />
                        </div>
                        <Row className="p-3">
                          <Col md={2}>
                            <h4>{data.ticket.name_train}</h4>
                            <p>{data.ticket.type_train}</p>
                            <p
                              className="p-2 rounded"
                              style={{
                                width: 80,
                                backgroundColor: "#E8FCED",
                                color: "#25EB3D",
                                fontSize: 15,
                              }}
                            >
                              Approve
                            </p>
                          </Col>
                          <Col md={7} className=" d-flex">
                            <ul style={{ listStyle: "none" }}>
                              <p className="p-2 mb-0 mt-3 border border-2 rounded-circle border-warning"></p>
                              <div
                                className="vertical-line my-1 ms-2"
                                style={{ height: 50 }}
                              ></div>
                              <p className="p-2 border border-2 rounded-circle bg-warning border-warning"></p>
                            </ul>
                            <ul style={{ listStyle: "none" }}>
                              <li className="mt-3">
                                <h5 style={{ lineHeight: 0.001 }}>
                                  {data.ticket.start_time}
                                </h5>
                                <span className="text-secondary opacity-75">
                                  {data.ticket.start_date}
                                </span>
                              </li>
                              <li className="mt-5">
                                <h5 style={{ lineHeight: 0.001 }}>
                                  {data.ticket.arrival_time}
                                </h5>
                                <span className="text-secondary opacity-75">
                                  {data.ticket.start_date}
                                </span>
                              </li>
                            </ul>
                            <ul className="ms-5" style={{ listStyle: "none" }}>
                              <li className="mt-3">
                                <h5 style={{ lineHeight: 0.001 }}>
                                  {data.ticket.start_station.name}
                                </h5>
                                <span className="text-secondary opacity-75">
                                  Stasiun {data.ticket.start_station.name}
                                </span>
                              </li>
                              <li className="mt-5">
                                <h5 style={{ lineHeight: 0.001 }}>
                                  {data.ticket.destination_station.name}
                                </h5>
                                <span className="text-secondary opacity-75">
                                  Stasiun {data.ticket.destination_station.name}
                                </span>
                              </li>
                            </ul>
                          </Col>
                        </Row>
                        <ul
                          className="d-flex px-3 mt-5"
                          style={{ listStyle: "none" }}
                        >
                          <li className="me-5">No. Tanda Pengenal</li>
                          <li className="mx-5">Nama Pemesan</li>
                          <li className="mx-5">No. Handphone</li>
                          <li className="ms-5 ps-4">Email</li>
                        </ul>
                        <hr />
                        <ul
                          className="d-flex px-3"
                          style={{ listStyle: "none", color: "grey" }}
                        >
                          <li className="me-2">321321050651065055</li>
                          <li className="ms-5" style={{ width: 180 }}>{data.user.name}</li>
                          <li className="ms-3" style={{ width: 200 }}>{data.user.no_hp}</li>
                          <li className="" style={{ width: 200 }}>{data.user.email}</li>
                        </ul>
                      </Col>
                      <Col md={3}>
                        <div className="float-end p-2">
                          <h1 className="float-end">Kereta Api</h1>
                          <h5>
                            Senin,{" "}
                            <span className="text-secondary opacity-75">
                              {data.ticket.start_date}
                            </span>
                          </h5>
                          {data.Status === "Approve" ? (
                            <div className="text-center mt-5">
                              <img
                                style={{ width: 100 }}
                                src={QrLogo}
                              />
                              <p>INV0101</p>
                            </div>
                          ) : null}
                        </div>
                      </Col>
                    </Row>
                  </button>
                </div>
              ) : (
                <Row
                  className="border rounded m-auto mb-5"
                  style={{ height: 370, width: 1100 }}
                >
                  <Col md={9} className="p-0">
                    <div
                      className="px-3"
                      style={{
                        width: 170,
                        backgroundColor: "#ED7A9D",
                        borderEndEndRadius: 50,
                        borderTopLeftRadius: 3,
                      }}
                    >
                      <img
                        className="me-2"
                        src={LogoName}
                      />
                      <img src={Logo} />
                    </div>
                    <Row className="p-3">
                      <Col md={2}>
                        <h4>{data.ticket.name_train}</h4>
                        <p>{data.ticket.type_train}</p>
                        <p
                          className="p-2 text-center rounded"
                          style={{
                            width: 80,
                            backgroundColor: "#FDF2E7",
                            color: "#EB8915",
                            fontSize: 15,
                          }}
                        >
                          Pending
                        </p>
                      </Col>
                      <Col md={7} className=" d-flex">
                        <ul style={{ listStyle: "none" }}>
                          <p className="p-2 mb-0 mt-3 border border-2 rounded-circle border-warning"></p>
                          <div
                            className="vertical-line my-1 ms-2"
                            style={{ height: 50 }}
                          ></div>
                          <p className="p-2 border border-2 rounded-circle bg-warning border-warning"></p>
                        </ul>
                        <ul style={{ listStyle: "none" }}>
                          <li className="mt-3">
                            <h5 style={{ lineHeight: 0.001 }}>
                              {data.ticket.start_time}
                            </h5>
                            <span className="text-secondary opacity-75">
                              {data.ticket.start_date}
                            </span>
                          </li>
                          <li className="mt-5">
                            <h5 style={{ lineHeight: 0.001 }}>
                              {data.ticket.arrival_time}
                            </h5>
                            <span className="text-secondary opacity-75">
                              {data.ticket.start_date}
                            </span>
                          </li>
                        </ul>
                        <ul className="ms-5" style={{ listStyle: "none" }}>
                          <li className="mt-3">
                            <h5 style={{ lineHeight: 0.001 }}>
                              {data.ticket.start_station.name}
                            </h5>
                            <span className="text-secondary opacity-75">
                              Stasiun {data.ticket.start_station.name}
                            </span>
                          </li>
                          <li className="mt-5">
                            <h5 style={{ lineHeight: 0.001 }}>
                              {data.ticket.destination_station.name}
                            </h5>
                            <span className="text-secondary opacity-75">
                              Stasiun {data.ticket.destination_station.name}
                            </span>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                    <ul
                      className="d-flex px-3 mt-5"
                      style={{ listStyle: "none" }}
                    >
                      <li className="me-5">No. Tanda Pengenal</li>
                      <li className="mx-5">Nama Pemesan</li>
                      <li className="mx-5">No. Handphone</li>
                      <li className="ms-5">Email</li>
                    </ul>
                    <hr />
                    <ul
                      className="d-flex px-3 text-center"
                      style={{ listStyle: "none", color: "grey" }}
                    >
                      <li className="me-5">321321050651065055</li>
                      <li className="px-3 ms-2 " style={{ width: 180 }}>
                        {data.user.name}
                      </li>
                      <li className="ms-4" style={{ width: 180 }}>
                        {data.user.no_hp}
                      </li>
                      <li className="" style={{ width: 180 }}>
                        {data.user.email}
                      </li>
                    </ul>
                  </Col>
                  <Col md={3}>
                    <div className="float-end p-2">
                      <h1 className="float-end">Kereta Api</h1>
                      <h5>
                        Senin,{" "}
                        <span className="text-secondary opacity-75">
                          {data.ticket.start_date}
                        </span>
                      </h5>
                      {data.Status === "Approve" ? (
                        <div className="text-center mt-5">
                          <img
                            style={{ width: 100 }}
                            src="../assets/images/QR-code.svg"
                          />
                          <p>INV0101</p>
                        </div>
                      ) : null}
                    </div>
                    <button
                      className="border-0 text-white w-100 py-2 rounded"
                      onClick={() => handleBuy(data.id)}
                      style={{
                        backgroundColor: "#ED7A9D",
                        marginTop: 200,
                        fontSize: 20,
                      }}
                    >
                      Bayar Sekarang
                    </button>
                  </Col>
                </Row>
              )}
            </div>
          ))}
        </div>
        <ModalPayment show={open} id={transactionId} onHide={() => setOpen(false)} />
      </Container>
    </div>
  );
};

export default MyTicket;
