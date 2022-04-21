import React from 'react';
import './index.css';
import './Header.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { DiFirefox } from "react-icons/di";

export default function Header(){
    return(
        <header>
            <div className="Cabecalho" >
            
                <h1 className="Logo">Cadastro Clientes <DiFirefox  color="#00FF22" /> </h1>
        
            </div>

        </header>
    )
}