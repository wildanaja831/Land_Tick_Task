import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './components/context/UserContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const admin = false;
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <UserContextProvider>
        <App/>
      </UserContextProvider>
      </BrowserRouter>
  </React.StrictMode>
);