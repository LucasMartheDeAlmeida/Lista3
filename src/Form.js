import React from 'react';
import 'react-toastify/dist/ReactToastify.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Form.css'
import { useState } from 'react';
import  {toast} from 'react-toastify'

export default function Formulario(){


    const [Nome,setNome] = useState();
    const [Endereco,setEndereco] =useState();
    const [Cidade,setCidade] = useState();
    const [Numero,setNumero]= useState();
    const [Estado,setEstado] = useState();

    function nomeAlterar(e){
        setNome = (e.target.value);
    }
    
      function enderecoAlterar(e){
        setEndereco = (e.target.value);
      }
    
      function cidadeAlterar(e){
        setCidade = (e.target.value);
      }
      function numeroAlterar(e){
        setNumero = (e.target.value);
      }
      function estadoAlterar(e){
        setEstado = (e.target.value);
      }



    function enviarValidar(e){
        e.preventDefault()
        if(Nome === undefined){
            toast.error("Erro. Nome nao pode estar vazio");
        }
        else{

            
        toast.success("Dados cadastrados");
        }
        }

    return(
        


<div class="container" >   
<Form  className='Formulario' >


    <div class = "box" >
    <Form.Group className="mb-3" controlId="Text">
        <Form.Control type="text" placeholder="Nome" value= {Nome} onChange={nomeAlterar} />
        <Form.Text className="text-muted">
        </Form.Text>
    </Form.Group>
    </div>

    <div class = "box">
    <Form.Group className="mb-3" controlId="Text">
        <Form.Control type="text" placeholder="Endereco"  value= {Endereco} onChange={enderecoAlterar}/>
    </Form.Group>
    </div>

    <div class = "box">
    <Form.Group className="mb-3" controlId="Text">
        <Form.Control type="text" placeholder="Cidade" value= {Cidade} onChange={cidadeAlterar}/>
    </Form.Group>
    </div>

    <div class = "box">
    <Form.Group className="mb-3" controlId="Text">
        <Form.Control type="text" placeholder="Numero" value= {Cidade} onChange={numeroAlterar}/>
    </Form.Group>
    </div>

    <div class = "box">
    <Form.Select aria-label="Default select example" placeholder='Estado' value= {Cidade} onChange={estadoAlterar}>
        <option>Estado</option>
        <option value="1">SP</option>
        <option value="2">RJ</option>
        <option value="3">MG</option>
    </Form.Select>
    </div>



    <div class = "box">
    <Button variant="primary" type="submit" onClick = {enviarValidar}>
        Enviar
    </Button>
    </div>



</Form>
</div>

        


       
    )
}