import React from 'react';
import './index.css';
import './Header';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Header from './Header.js'
const root = createRoot(document.getElementById('root'));


root.render(
  <>
  <ToastContainer autoClose={false}/>
  <App tab="home"/>
  
  
  </>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
