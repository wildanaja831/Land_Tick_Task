import MyTicket from './pages/MyTicket';
import Payment from './pages/Payment';
import AdminHome from './pages/admin/Home';
import AddNewTicket from './pages/admin/AddNewTicket';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './components/context/UserContext';

const App = () => {
    const [state, dispatch] = useContext(UserContext)

    return (
        <>
        {state.status ? 
          <Routes>
            <Route path='/' element={<AdminHome/>}/>
            <Route path='/Add-New-Ticket' element={<AddNewTicket/>}/>
          </Routes>:
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/MyTicket' element={<MyTicket/>}/>
            <Route path='/Payment' element={<Payment/>}/>
          </Routes> 
        }
        </>
    );
}

export default App
