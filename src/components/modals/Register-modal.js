import { Button, Form, Modal } from "react-bootstrap";
import React from 'react';

function ModalRegister(props){
    return (
        <Modal
          {...props}
          style={{ width: 419, marginLeft: 550 }}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <h3 className="text-center pt-5 pb-3" style={{ color: '#ED7A9D' }}>Daftar</h3>
          <Form className="p-4">
            <Form.Control className="mb-4 border-3" placeholder="Nama Lengkap"/>
            <Form.Control className="mb-4 border-3" placeholder="Username"/>
            <Form.Control className="mb-4 border-3" placeholder="Email"/>
            <Form.Control className="border-3" placeholder="Password"/>
            <Button className="fw-bold border-0 w-100 rounded-pill mt-5 mb-3 fs-5" style={{ backgroundColor: '#ED7A9D' }}>Daftar</Button>
          </Form>
        </Modal>
      );
}

export default ModalRegister;