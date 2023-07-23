import React, { useContext, useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useMutation } from "react-query";
import { API, setAuthToken } from "../../config/api";

function ModalLogin(props){
  const [_, dispatch] = useContext(UserContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const switchModal = () => {
    props.showLogin();
    props.showRegister(true);
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = useMutation(async(e) => {
    try {
        e.preventDefault();
    
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
    
        const response = await API.post("/login", form, config);
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data,
        });

        setAuthToken(localStorage.token);
    
        if (response.data.data.role == "admin") {
          alert("Selamat Datang Admin!!");
          navigate("/admin");  
        } else {
          alert("Selamat Datang User!!");
          navigate("/");
        }
    
        setForm({
          username: "",
          password: "",
        });
    }catch (err) {
      console.log("login failed : ", err);
    }
  });

    return (
        <Modal
          {...props}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <h3 className="text-center pt-5 pb-3" style={{ color: '#ED7A9D' }}>Login</h3>
          <Form className="p-4"  onSubmit={(e) => handleSubmit.mutate(e)}>
            <Form.Control onChange={handleChange} value={form.username} className="mb-4 border-3" name="username" placeholder="Username" required/>
            <Form.Control onChange={handleChange} value={form.password} type="password" className="border-3" name="password" placeholder="Password" required/>
            <Button className="fw-bold border-0 w-100 rounded-pill mt-5 fs-5" type="submit" style={{ backgroundColor: '#ED7A9D' }} onClick={() => props.showLogin(false)}>Login</Button>
            <p className="text-center my-2">Belum Punya Akun? Klik <a onClick={switchModal} style={{  cursor: "pointer" }}>disini</a></p>
          </Form>
        </Modal>
      );
}

export default ModalLogin;