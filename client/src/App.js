import MyTicket from "./pages/MyTicket";
import Payment from "./pages/Payment";
import AdminHome from "./pages/admin/Home";
import AddNewTicket from "./pages/admin/AddNewTicket";
import Home from "./pages/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./components/context/UserContext";
import { API, setAuthToken } from "./config/api";
import {
  PrivateRouteAdmin,
  PrivateRouteUser,
} from "./components/private-route";

const App = () => {
  const [state, dispatch] = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const checkUser = async () => {
    try {
      const response = await API.get("/check/auth");
      let payload = response.data.data.user;
      payload.token = localStorage.token;

      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
      setIsLoading(false);
    } catch (err) {
      console.log("Check user failed : ", err);
      dispatch({
        type: "AUTH_ERROR",
      });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      checkUser();
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!isLoading && !state.isLogin) {
      navigate("/");
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? null : (
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route element={<PrivateRouteUser />}>
              <Route exact path="/admin" element={<AdminHome />} />
              <Route path="/Add-New-Ticket" element={<AddNewTicket />} />
            </Route>
            <Route element={<PrivateRouteAdmin />}>
              <Route path="/MyTicket" element={<MyTicket />} />
              <Route path="/Payment/:id" element={<Payment />} />
            </Route>
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;
