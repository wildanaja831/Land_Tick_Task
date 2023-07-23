import { Button, Container, Form } from "react-bootstrap";
import Navbars from "../../components/navbar";
import "../Home.css"
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { API, setAuthToken } from "../../config/api";
import { useState } from "react";

const AddNewTicket = () => {
    const navigate = useNavigate();
    let { data: stations } = useQuery("stationsCache", async () => {
        const response = await API.get("/stations");
        return response.data.data.stations;
    });

    const [form, setForm] = useState({
        name_train: "",
        type_train: "",
        start_date: "",
        start_station_id: 0,
        start_time: "",
        destination_station_id: 0,
        arrival_time: "",
        price: 0,
        qty: 0,
      });

      setAuthToken(localStorage.token)

      const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };

      const handleSubmit = useMutation(async (e) => {
        try {
          e.preventDefault();
    
          const config = {
            headers: "application/json",
          };
    
          const response = await API.post("/ticket", form, config);
          console.log("Create ticket success", response);
    
          setForm({
            name_train: "",
            type_train: "",
            start_date: "",
            start_station_id: 0,
            start_time: "",
            destination_station_id: 0,
            arrival_time: "",
            price: 0,
            qty: 0,
          });
    
          navigate("/admin");
        } catch (err) {
          console.log(form);
          console.log("Create ticket failed : ", err);
        }
      });

    return (
        <div className="bg pb-5">
            <Navbars/>
            <div className="bg-light pt-5">
                <Container>
                    <div>
                        <h3 className="mb-5">Tambah Ticket</h3>
                        <Form className="text-center" onSubmit={(e) => handleSubmit.mutate(e)}>
                            <Form.Control onChange={handleChange} type="text" name="name_train" className="mb-3" placeholder="Nama Kereta"/>
                            <Form.Select onChange={handleChange} name="type_train" className="mb-3" >
                                <option hidden>Tipe</option>
                                <option value="Eksekutif">Eksekutif</option>
                                <option value="Ekonomi">Ekonomi</option>
                                <option value="Luxury">Luxury</option>
                            </Form.Select>
                            <Form.Control onChange={handleChange} name="start_date" type="date" className="mb-3" placeholder="Tanggal Keberangkatan"/>
                            <Form.Select onChange={handleChange} name="start_station_id" className="mb-3">
                              <option hidden>Statiun Keberangkatan</option>
                              {stations?.map((data) => {
                                return (
                                  <option key={data.id} value={data.id} >{data.name}</option>
                                )
                              })}
                            </Form.Select>
                            <Form.Control onChange={handleChange} type="time" name="start_time" className="mb-3" placeholder="Jam Keberangkatan"/>
                            <Form.Select onChange={handleChange} name="destination_station_id" className="mb-3">
                              <option hidden>Statiun Tujuan</option>
                              {stations?.map((data) => {
                                return (
                                  <option key={data.id} value={data.id} >{data.name}</option>
                                )
                              })}
                            </Form.Select>
                            <Form.Control onChange={handleChange} type="time" name="arrival_time" className="mb-3"placeholder="Jam Tiba"/>
                            <Form.Control onChange={handleChange} type="number" name="price" className="mb-3"placeholder="Harga Ticket"/>
                            <Form.Control onChange={handleChange} type="number" name="qty" className="mb-3"placeholder="Qty"/>
                            <Button type="submit" className="my-5 w-50 border-0" style={{ backgroundColor: '#0ACF83' }}>Save</Button>
                        </Form>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default AddNewTicket