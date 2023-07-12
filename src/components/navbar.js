import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ModalLogin from './modals/Login-modal';
import React, { useContext } from 'react';
import ModalRegister from './modals/Register-modal';
import { Link } from 'react-router-dom';
import { UserContext } from './context/UserContext';

function Navbars (){
    const [modalLoginShow, setModalLoginShow] = React.useState(false);
    const [modalRegisterShow, setModalRegisterShow] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [state, dispatch] = useContext(UserContext);

    const logout = () => {
        dispatch({
          type: "LOGOUT",
        });
    };

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
            <Navbar className="bg-body-tertiary shadow">
                <Container>
                    <Navbar.Brand ><Link to="/" style={{ textDecoration: 'none' }}><img src='./assets/images/Land Tick.svg' alt='..' style={{ width: 100 }} /> <img src='./assets/images/train-facing-right.svg' alt='..' style={{ width: 55 }}/></Link></Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        {state.isLogin ?
                            <div>
                                {state.status ?
                                    <div>
                                        <Button onClick={handleOpen} className='border-0' style={{ backgroundColor: 'transparent', color: '#ED7A9D' }}>Admin <img className='p-2 ms-1 rounded-circle border border-2' alt='..' style={{ width: 40, borderColor: '#ED7A9D' }} src='./assets/images/boy.svg'/></Button>
                                        {open &&
                                            <div>
                                                <ul className='position-absolute shadow bg-light p-1 rounded' style={{ top: 80, listStyle: 'none' }}>
                                                    <li className='px-4 pt-2 '><Link style={{ textDecoration: 'none', color: 'black' }} to="/Add-New-Ticket"><img className='me-2' style={{ width: 35 }} alt='..' src='./assets/images/myticket.svg'/> Tambah Ticket</Link></li>
                                                    <hr/>
                                                    <li className='px-3 pb-2'><Button className='bg-transparent text-black border-0' onClick={logout}><img className='me-2 ms-2' style={{ width: 27 }} alt='..' src='./assets/images/logout.svg'/> Logout</Button></li>
                                                </ul>
                                            </div> 
                                        }
                                    </div>
                                    :
                                    <div>
                                        <Button onClick={handleOpen} className='border-0' style={{ backgroundColor: 'transparent', color: '#ED7A9D' }}>User <img className='p-2 ms-1 rounded-circle border border-2' alt='..' style={{ width: 40, borderColor: '#ED7A9D' }} src='./assets/images/boy.svg'/></Button>
                                        {open &&
                                            <div>
                                                <ul className='position-absolute shadow bg-light p-1 rounded' style={{ top: 80, listStyle: 'none' }}>
                                                    <li className='px-4 pt-2 pb-2 '><Link style={{ textDecoration: 'none', color: 'black' }} to="/MyTicket"><img className='me-2' style={{ width: 35 }} alt='..' src='./assets/images/myticket.svg'/> Ticket Saya</Link></li>
                                                    <li className='px-4 pt-2 pb-3 border-bottom border-3' style={{ borderColor: '#ED7A9D' }}><Link style={{ textDecoration: 'none', color: 'black' }} to="/Payment"><img className='me-2 ms-1' alt='..' style={{ width: 30}} src='./assets/images/payment.svg'/> Payment</Link></li>
                                                    <li className='pb-3 pt-2 ps-3'><Button className='bg-transparent text-black border-0' onClick={logout}><img className='me-2 ms-2' style={{ width: 27 }} alt='..' src='./assets/images/logout.svg'/> Logout</Button></li>
                                                </ul>
                                            </div> 
                                        } 
                                    </div> 
                                }
                            </div> 
                            : 
                            <div>
                                <Button style={{ backgroundColor: 'white', color: '#ED7A9D', borderColor: '#ED7A9D' }} className='me-2 border-2' onClick={() => setModalRegisterShow(true)}>Daftar</Button>
                                <Button style={{ backgroundColor: '#ED7A9D' }} className='border-0 py-2 px-3' onClick={() => setModalLoginShow(true)}>Login</Button>
                            </div>
                        }
                        <ModalLogin show={modalLoginShow} showLogin={setModalLoginShow} showRegister={setModalRegisterShow} onHide={() => setModalLoginShow(false)} />
                        <ModalRegister show={modalRegisterShow} onHide={() => setModalRegisterShow(false)} />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}

export default Navbars;