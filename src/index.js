import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { apiSlice } from './features/api/apiSlice'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './context/cart';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <CartProvider>
        <App />
      </CartProvider>
    </ApiProvider>
  </React.StrictMode>
);

reportWebVitals();
