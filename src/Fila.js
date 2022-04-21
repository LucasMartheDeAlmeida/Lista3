import React from 'react';

export default function Fila ({conteudo}){
return(
    <ul>
        {conteudo.map(dados => {return <li>{dados.nome} - {dados.endereco}- {dados.numero} - {dados.cidade} - {dados.estado}</li>} )}
    </ul>
)
}