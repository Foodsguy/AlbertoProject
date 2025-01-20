import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Left from './Left';
import Footer from './Footer';
import Body from './Body';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Left/>
    <Body/>
    <Footer/>
  </React.StrictMode>
);

reportWebVitals();
