import React from "react";
import {Form, Label, Input, Button} from 'reactstrap'

function DadosPessoais(){
    return(
        <form >
            {/* NOME */}
            <label htmlFor="inputNome">Nome:</label>
            <input type="text" name="nome" id="inputName" placeholder="Nome Completo" value={nome}/>
            
            {/* EMAIL */}
            <label htmlFor="inputEmail">Email:</label>
            <input type="email" name="email" id="imputEmail" value={email}/>

            {/* BOTÃO */}
            <button color="primary" type="submit">Enviar</button>
        </form>
    );
}

export default DadosPessoais;