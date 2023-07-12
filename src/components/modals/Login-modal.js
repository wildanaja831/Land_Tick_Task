import React, { useContext } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function ModalLogin(props){
  const switchModal = () => {
    props.showLogin();
    props.showRegister(true);
  }
  const navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    // let status; 
    if ((username === "admin" && password === "admin")) {
      dispatch({
        type: "ADMIN_LOGIN_SUCCESS",
        status: true,
        payload: username,
      });
      alert("Selamat Datang Admin!!");
      navigate("/");
    } else if ((username === "user" && password === "user")) {
      dispatch({
        type: "USER_LOGIN_SUCCESS",
        status: false,
        payload: username,
      });
      alert("Selamat Datang User!!");
      navigate("/");
    }
  };

    return (
        <Modal
          {...props}
          style={{ width: 419, marginLeft: 550 }}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <h3 className="text-center pt-5 pb-3" style={{ color: '#ED7A9D' }}>Login</h3>
          <Form className="p-4"  onSubmit={handleSubmit}>
            <Form.Control className="mb-4 border-3" name="username" placeholder="Username" required/>
            <Form.Control className="border-3" name="password" placeholder="Password" required/>
            <Button className="fw-bold border-0 w-100 rounded-pill mt-5 fs-5" type="submit" style={{ backgroundColor: '#ED7A9D' }} onClick={() => props.showLogin(false)}>Login</Button>
            <p className="text-center my-2">Belum Punya Akun? Klik <a onClick={switchModal} style={{  cursor: "pointer" }}>disini</a></p>
          </Form>
        </Modal>
      );
}

export default ModalLogin;