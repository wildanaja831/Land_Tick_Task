import { Button, Form, Modal } from "react-bootstrap";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { API } from "../../config/api";

function ModalRegister(props){
  const [form, setForm] = useState({
    fullname : "",
    username : "",
    email : "",
    password : "",
  })

  const handleChange = (e) => {
    setForm({
      ...form, [e.target.name] : e.target.value,
    })
  }

  const handleSwitchRegister = () => {
    props.showRegister(false)
    props.showLogin(true)
  }
  
  const navigate = useNavigate();

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await API.post("/register", form, config);
      console.log("Register Success : ", response);

      setForm({
        fullname: "",
        username: "",
        email: "",
        password: "",
      });
      alert("Berhasil Register!!");
      navigate("/");
    } catch (err) {
      console.log("Register Failed : ", err);
    }
  });

    return (
        <Modal
          {...props}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <h3 className="text-center pt-5 pb-3" style={{ color: '#ED7A9D' }}>Daftar</h3>
          <Form className="p-4" onSubmit={(e) => handleSubmit.mutate(e)}>
            <Form.Control onChange={handleChange} value={form.fullname} className="mb-4 border-3" name="fullname" placeholder="Nama Lengkap"/>
            <Form.Control onChange={handleChange} value={form.username} className="mb-4 border-3" name="username" placeholder="Username"/>
            <Form.Control onChange={handleChange} value={form.email} className="mb-4 border-3" name="email" placeholder="Email"/>
            <Form.Control onChange={handleChange} value={form.password} type="password" className="border-3" name="password" placeholder="Password"/>
            <Button type="submit" onClick={handleSwitchRegister} className="fw-bold border-0 w-100 rounded-pill mt-5 mb-3 fs-5" style={{ backgroundColor: '#ED7A9D' }}>Daftar</Button>
          </Form>
        </Modal>
      );
}

export default ModalRegister;