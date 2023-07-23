import { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { API } from "../../config/api";

const AddNewStation = ({ show, setStation }) => {
    const [form, setForm] = useState({
        name : ""
      })
    
      const handleChange = (e) => {
        setForm({
          ...form, [e.target.name] : e.target.value,
        })
      }
      
      const handleClose = () => {
        setStation(false)
      }
    
      const handleSubmit = useMutation(async (e) => {
        try {
          e.preventDefault();
    
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
    
          const response = await API.post("/station", form, config);
    
          setForm({
            name: ""
          });
          alert("Create Station Success!!");
          handleClose();
        } catch (err) {
          console.log("Create Station Failed : ", err);
        }
      });

    return (
        <Modal show={show} onHide={handleClose}>
        <div className="bg-light pt-5 rounded">
            <Container>
            <div className="px-4 font-all">
                <h3 className="mb-5">Tambah Station</h3>
                <Form className="text-center" onSubmit={(e) => handleSubmit.mutate(e)}>
                    <Form.Control
                        onChange={handleChange}
                        type="text"
                        name="name"
                        className="mb-3"
                        placeholder="Nama Kereta"
                    />
                    <Button
                        type="submit"
                        className="btn btn-success my-5 w-50 border-0"
                    >
                        Save
                    </Button>
                </Form>
            </div>
            </Container>
        </div>
        </Modal>
    );
};

export default AddNewStation;
