import { Form, Modal, Button } from "react-bootstrap";

const EditStatusModal = (props) => {
    return (
        <Modal
          {...props}
          style={{ width: 419, marginLeft: 550 }}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
            <Modal.Header className="p-0 me-4 border-0" closeButton>
                <div className="px-3" style={{ width: 170, backgroundColor: '#ED7A9D', borderEndEndRadius: 50, borderTopLeftRadius: 3  }}><img className="me-2" src="../assets/images/Land Tick White.svg"/><img src="../assets/images/train-facing-white.svg"/></div>
            </Modal.Header>
            <Form className="pt-5 pb-3 px-3 text-center">
                <Form.Control className="mb-4 border-3" name="" placeholder="1" disabled/>
                <Form.Control className="mb-4 border-3" name="" placeholder="Muhamamd Wildan" disabled/>
                <Form.Control className="mb-4 border-3" name="" placeholder="Surabaya - Jakarta" disabled/>
                <Form.Control className="mb-4 border-3" name="" placeholder="bca.jpg" disabled/>
                <Form.Select className="border-3" name="status-trans" placeholder="Password">
                    <option hidden>Status</option>
                    <option >UnApprove</option>
                    <option>Approve</option>
                </Form.Select>
                <Button className="fw-bold border-0 rounded mt-5 px-5" type="submit" style={{ backgroundColor: '#0ACF83' }}>Login</Button>
            </Form>
        </Modal>
    );
}

export default EditStatusModal