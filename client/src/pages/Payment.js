import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import { useNavigate, useParams } from "react-router-dom";
import Navbars from "../components/navbar";
import { useMutation, useQuery } from "react-query";
import { API } from "../config/api";
import LogoName from "../assets/images/Land Tick White.svg";
import Logo from "../assets/images/train-facing-white.svg";
import QrLogo from "../assets/images/QR-code.svg";
import { useEffect } from "react";
import Format from "../utilities/formatDate";

const Payment = () => {
  const navigate = useNavigate();

  let p = useParams();
  let id = parseInt(p.id);

  let { data: mytransaction } = useQuery("transactionIdCache", async () => {
    const response = await API.get(`/transaction/${id}`);
    return response.data.data;
  });

  const handleBuy = useMutation(async (id) => {
    try {
      const response = await API.get(`/getpayment/${id}`);
      console.log("ini response", response);

      const token = response.data.data.token;
      console.log("ini token", token);

      window.snap.pay(token, {
        onSuccess: function (result) {
          console.log(result);
          navigate("/MyTicket");
        },
        onPending: function (result) {
          console.log(result);
          navigate("/MyTicket");
        },
        onError: function (result) {
          console.log(result);
          navigate("/MyTicket");
        },
        onClose: function () {
          alert("Close popup Cuy");
        },
      });
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    const myMidtransClientKey = process.env.REACT_APP_MIDTRANS_CLIENT_KEY;

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;

    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  return (
    <div className="font-all">
      <Navbars />
      <Container>
        <div className="mb-5">
          <h3 className="my-5">Invoice</h3>
          <Row>
            <Col md={8}>
              <div>
                <div className="border rounded">
                  <div
                    className="px-3"
                    style={{
                      width: 170,
                      backgroundColor: "#ED7A9D",
                      borderEndEndRadius: 50,
                      borderTopLeftRadius: 3,
                    }}
                  >
                    <img className="me-2" src={LogoName} />
                    <img src={Logo} />
                  </div>
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
                    <li className="px-4 ms-2" style={{ width: 180 }}>
                      {mytransaction?.user?.name}
                    </li>
                    <li className="px-4 ms-4" style={{ width: 180 }}>
                      {mytransaction?.user?.no_hp}
                    </li>
                    <li className="pe-4" style={{ width: 200 }}>
                      {mytransaction?.user?.email}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <h3>Rincian Harga</h3>
                <div className="border rounded mt-3" style={{ width: 500 }}>
                  <ul
                    className="d-flex p-4 justify-content-between"
                    style={{ listStyle: "none" }}
                  >
                    <li className="me-5">
                      {mytransaction?.ticket?.name_train} (Dewasa) x1
                    </li>
                    <li className="me-3">Rp. {mytransaction?.ticket?.price}</li>
                  </ul>
                  <ul
                    className="d-flex px-4 py-2 my-0 rounded-bottom justify-content-between"
                    style={{ listStyle: "none", backgroundColor: "#E6E7E7" }}
                  >
                    <li className="fw-bold" style={{ fontSize: 20 }}>
                      Total
                    </li>
                    <li className="me-3 fw-bold" style={{ fontSize: 20 }}>
                      Rp. {mytransaction?.ticket?.price}
                    </li>
                  </ul>
                </div>
              </div>
              <button
                className="border-0 text-white py-2 rounded my-3 fw-bold"
                onClick={() => handleBuy.mutate(id)}
                style={{ width: 500, backgroundColor: "#ED7A9D" }}
              >
                Bayar Sekarang
              </button>
            </Col>
            <Col md={4}>
              <div
                className="d-flex justify-content-between px-3 pt-3"
                style={{ backgroundColor: "#D1D1D0" }}
              >
                <div>
                  <h2 className="fw-bold">Kereta Api</h2>
                  <p style={{ fontSize: 18 }}>
                    Senin,{" "}
                    <span className="text-secondary opacity-75">
                      Format({mytransaction?.ticket?.start_date})
                    </span>
                  </p>
                </div>
                <div>
                  <img src={QrLogo} />
                  <p>INV0101</p>
                </div>
              </div>
              <div
                className="p-3"
                style={{ backgroundColor: "#F4F5F4", height: 300 }}
              >
                <div>
                  <h4 className="fw-bold">
                    {mytransaction?.ticket?.name_train}
                  </h4>
                  <p>{mytransaction?.ticket?.type_train}</p>
                </div>
                <div className="d-flex">
                  <ul style={{ listStyle: "none" }}>
                    <p className="p-2 mb-0 mt-3 border border-2 rounded-circle border-warning"></p>
                    <div
                      className="vertical-line my-1 ms-2"
                      style={{ height: 73 }}
                    ></div>
                    <p className="p-2 border border-2 rounded-circle bg-warning border-warning"></p>
                  </ul>
                  <ul style={{ listStyle: "none" }}>
                    <li className="mt-3 mb-5">
                      <h5 style={{ lineHeight: 0.001 }}>
                        {mytransaction?.ticket?.start_time}
                      </h5>
                      <span className="text-secondary opacity-75">
                        {mytransaction?.ticket?.start_date}
                      </span>
                    </li>
                    <li className="mt-5 pt-4">
                      <h5 style={{ lineHeight: 0.001 }}>
                        {mytransaction?.ticket?.arrival_time}
                      </h5>
                      <span className="text-secondary opacity-75">
                        {mytransaction?.ticket?.start_date}
                      </span>
                    </li>
                  </ul>
                  <ul className="" style={{ listStyle: "none" }}>
                    <li className="mt-3 mb-5">
                      <h5 style={{ lineHeight: 0.001 }}>
                        {mytransaction?.ticket?.start_station.name}
                      </h5>
                      <span className="text-secondary opacity-75">
                        Stasiun {mytransaction?.ticket?.start_station.name}
                      </span>
                    </li>
                    <li className="mt-5 pt-4">
                      <h5 style={{ lineHeight: 0.001 }}>
                        {mytransaction?.ticket?.destination_station.name}
                      </h5>
                      <span className="text-secondary opacity-75">
                        Stasiun {mytransaction?.ticket?.start_station.name}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Payment;
