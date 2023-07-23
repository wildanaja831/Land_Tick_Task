import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './components/context/UserContext';
import { QueryClient, QueryClientProvider } from "react-query";
import App from './App';

const client = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
const admin = false;
root.render(
  <React.StrictMode>
      <UserContextProvider>
        <QueryClientProvider client={client}>
          <BrowserRouter>
            <App/>
          </BrowserRouter>
        </QueryClientProvider>
      </UserContextProvider>
  </React.StrictMode>
);