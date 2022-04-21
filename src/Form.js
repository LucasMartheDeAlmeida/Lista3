import React from 'react';
import 'react-toastify/dist/ReactToastify.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Form.css'
import { useState } from 'react';
import  {toast} from 'react-toastify'
import Fila from './Fila';

export default function Formulario(){
    
const [Nome, setNome] = useState();
const [Endereco, setEndereco] = useState();
const [Cidade, setCidade] = useState();
const [Numero, setNumero] = useState();
const [Estado, setEstado] = useState();
const [Clientes, setClientes]= useState([]);



function cadastraFila(e){

}
function enviarValidar(e){
    e.preventDefault()

    let novo = {nome: Nome, endereco: Endereco, cidade: Cidade, numero: Numero, estado: Estado};
    setClientes([...Clientes,novo]);

    if(Nome === undefined){
        toast.error("Erro, nome nao pode estar vazio");
        
    }
    else{
    toast.success("Dados enviados");
    window.alert(Nome)
    }
}

function nomeAlterar(e){
    setNome(e.target.value);
}
function cidadeAlterar(e){
    setCidade(e.target.value);
}
function enderecoAlterar(e){
    setEndereco(e.target.value)

}
function numeroAlterar(e){
    setNumero(e.target.value);
}
function estadoAlterar(e){
    setEstado(e.target.value);
}




    return(



<div class="container" >   
<Form  className='Formulario' onSubmit={enviarValidar} >


    <div class = "box" >
    <Form.Group className="mb-3" controlId="Text">
        <Form.Control type="text" placeholder="Nome"  value = {Nome} onChange={nomeAlterar}/>
        <Form.Text className="text-muted">
        </Form.Text>
    </Form.Group>
    </div>

    <div class = "box">
    <Form.Group className="mb-3" controlId="Text">
        <Form.Control type="text" placeholder="Endereco" value = {Endereco} onChange= {enderecoAlterar}/>
    </Form.Group>
    </div>

    <div class = "box">
    <Form.Group className="mb-3" controlId="Text">
        <Form.Control type="text" placeholder="Cidade" value = {Cidade} onChange = {cidadeAlterar}/>
    </Form.Group>
    </div>

    <div class = "box">
    <Form.Group className="mb-3" controlId="Text">
        <Form.Control type="text" placeholder="Numero" value = {Numero} onChange={numeroAlterar}/>
    </Form.Group>
    </div>

    <div class = "box">
    <Form.Select aria-label="Default select example" placeholder='Estado' value = {Estado} onChange={estadoAlterar}>
        <option>Estado</option>
        <option value="SP">SP</option>
        <option value="RJ">RJ</option>
        <option value="MG">MG</option>
    </Form.Select>
    </div>



    <div class = "box">
    {<Button  type="submit" value="Enviar" onClick={enviarValidar}>
        Enviar
    </Button>}


    </div>



</Form>

<div>
    <Fila conteudo={Clientes}></Fila>
</div>


</div>

        


       
    )
}