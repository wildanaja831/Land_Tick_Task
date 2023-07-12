import { Button, Container, Form } from "react-bootstrap";
import Navbars from "../../components/navbar";
import "../Home.css"

const AddNewTicket = () => {
    return (
        <div className="bg pb-5">
            <Navbars/>
            <div className="bg-light pt-5">
                <Container>
                    <div>
                        <h3 className="mb-5">Tambah Ticket</h3>
                        <Form className="text-center">
                            <Form.Control className="mb-3" placeholder="Nama Kereta"/>
                            <Form.Select className="mb-3" >
                                <option>Jakarta</option>
                            </Form.Select>
                            <Form.Control className="mb-3" placeholder="Tanggal Keberangkatan"/>
                            <Form.Control className="mb-3" placeholder="Stasiun Keberangkatan"/>
                            <Form.Control className="mb-3" placeholder="Jam Keberangkatan"/>
                            <Form.Control className="mb-3"placeholder="Stasiun Tujuan"/>
                            <Form.Control className="mb-3"placeholder="Jam Tiba"/>
                            <Form.Control className="mb-3"placeholder="Harga Ticket"/>
                            <Form.Control className="mb-3"placeholder="Qty"/>
                            <Button className="my-5 w-50 border-0" style={{ backgroundColor: '#0ACF83' }}>Save</Button>
                        </Form>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default AddNewTicket