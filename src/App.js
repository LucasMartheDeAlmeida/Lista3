
import './App.css';
import Header from './Header';
import Formulario from './Form'
import { useState } from 'react';
import  {toast} from 'react-toastify'
import Relogio from './Relogio';
import { ReactDOM } from 'react';

function App() {


    return (
    <div>
    <Header/>
    <Formulario/>
    <Relogio data = {new Date()}></Relogio>
    </div>
  
  );
}

export default App;
