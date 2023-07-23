import { Button, Container } from "react-bootstrap";
import React, { useContext, useState } from "react";
import { API, setAuthToken } from "../config/api";
import { UserContext } from "./context/UserContext";
import ModalLogin from "./modals/Login-modal";
import PopUpListTicket from "./modals/PopUp-ListTicket"
import ArrowLogo from '../assets/images/Arrow.svg'

function ListTicketPublic(props) {
  const [state] = useContext(UserContext);
  const [modalLoginShow, setModalLoginShow] = useState(false);
  const [myTicketShow, setMyTicketShow] = useState(false);

  setAuthToken(localStorage.token);

  const handleBuy = async (id) => {
    try {
      let form = new FormData();
      form.set("ticket_id", id);
      const response = await API.post("/transaction", form);
      console.log(response);
      return response.data.data;
    } catch (error) {
      console.log("Gagal Membeli!!", error);
    }
  };

  return (
    <Container className="mt-4">
        <div
            className="d-flex border border-3 align-items-center my-4 rounded justify-content-between"
            onClick={() => { !state.isLogin ? setModalLoginShow(true) : setMyTicketShow(true); handleBuy(props.id) }}
            key={props.id}
            style={{ cursor: "pointer", height: 100 }}
        >
            <ul className="d-flex p-0 m-0" style={{ listStyle: "none" }}>
            <div className="text-center ms-4" style={{ width: 200 }}>
                <li className="px-4 pt-4 mt-1 h-[10px]">
                <p style={{ lineHeight: 0.001 }}>{props.nameTrain}</p>
                <span className="text-secondary opacity-75">
                    {props.typeTrain}
                </span>
                </li>
            </div>
            <div className="text-center ms-3" style={{ width: 120 }}>
                <li className="p-4">
                <p style={{ lineHeight: 0.001 }}>{props.startTime}</p>
                <span className="text-secondary opacity-75">
                    {props.startStation}
                </span>
                </li>
            </div>
            <li className="p-4">
                <img src={ArrowLogo} />
            </li>
            <div className="text-center ms-3" style={{ width: 110 }}>
                <li className="p-4">
                <p style={{ lineHeight: 0.001 }}>{props.arrivalTime}</p>
                <span className="text-secondary opacity-75">
                    {props.destinationStation}
                </span>
                </li>
            </div>
            <div className=" ms-4 mt-1">
                <li className="p-4">5j 05m</li>
            </div>
            </ul>
            <ul
            className="text-center mt-2"
            style={{ listStyle: "none", width: 200, marginRight: 120 }}
            >
            <li className="p-4" style={{ color: "#ED7A9D" }}>
                Rp. {props.price}
            </li>
            </ul>
        </div>
        <PopUpListTicket show={myTicketShow} setShow={setMyTicketShow} myTicketShow={setMyTicketShow} />
        <ModalLogin show={modalLoginShow} showLogin={setModalLoginShow} />
    </Container>
  );
}

export default ListTicketPublic;
