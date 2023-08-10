import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "../components/navbar";
import Hero from "../components/hero";
import MainContents from "../components/mainContent";
import ListTicketPublic from "../components/listTicket";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { API } from "../config/api";
import { Container } from "react-bootstrap";

function Home() {
  const [form, setForm] = useState({
    start_station: "",
    destination_station: "",
    date: "",
    adult: 0,
    child: 0,
  });
  const [isSearch, setIsSearch] = useState(false);

  const handleSubmitSearchTicket = (data) => {
    setForm(data);
    setIsSearch(true);
  };

  const handleSubmitEmpty = (data) => {
    setForm(data);
    setIsSearch(false);
  };

  let { data: tickets, refetch } = useQuery("ticketsCache", async () => {
    const response = isSearch
      ? await API.get(
          `/ticket?date=${form.date}&startStation=${
            form.start_station
          }&destinationStation=${form.destination_station}&qty=${
            parseInt(form.adult) + parseInt(form.child)
          }`
        )
      : await API.get("/tickets");
    return response.data.data;
  });

  useEffect(() => {
    refetch();
  }, [isSearch, form]);

  return (
    <div
      className="font-all"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navbars />
      <Hero />
      <div className="bg-light">
        <MainContents
          submitData={handleSubmitSearchTicket}
          emptyData={handleSubmitEmpty}
        />
        <Container className="pb-4" style={{ paddingTop: 265 }}>
          <div className="d-flex">
            <ul className="d-flex" style={{ listStyle: "none" }}>
              <li className="mx-5">Nama Kereta</li>
              <li className="mx-5">Berangkat</li>
              <li className="mx-4"></li>
              <li className="mx-5">Tiba</li>
              <li className="mx-5">Durasi</li>
            </ul>
            <ul style={{ listStyle: "none" }}>
              <li className="" style={{ marginLeft: 300 }}>
                Harga Per Orang
              </li>
            </ul>
          </div>
          {tickets?.map((data) => (
            <ListTicketPublic
              id={data?.id}
              nameTrain={data?.name_train}
              typeTrain={data?.type_train}
              startDate={data?.start_date}
              startStation={data?.start_station.name}
              startTime={data?.start_time}
              destinationStation={data?.destination_station.name}
              arrivalTime={data?.arrival_time}
              price={data?.price}
            />
          ))}
        </Container>
      </div>
      <footer
        style={{ height: 50, backgroundColor: "#ED7A9D", marginTop: "auto" }}
      ></footer>
    </div>
  );
}

export default Home;
