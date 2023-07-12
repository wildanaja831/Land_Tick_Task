import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from '../components/navbar'
import Hero from '../components/hero'
import MainContents from '../components/mainContent';
import ListTicketPublic from '../components/listTicket';
import React from 'react';

function Home() {
  return (
      <div className='bg pb-5'>
        <Navbars/>
        <Hero/>
        <div className='bg-light'>
          <MainContents/>
          <ListTicketPublic/>
        </div>
      </div>
  );
}

export default Home;
