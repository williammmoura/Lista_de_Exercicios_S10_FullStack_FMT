import React from "react";  
import {Form, Label, Input} from 'reactstrap'

function DadosPessoais(){
    return(
        <Form>
            {/* NOME */}
            <Label htmlFor="inputNome">Nome:</Label>
            <Input type="text" name="nome" id="inputName" placeholder="Nome Completo" value={nome} />
            
            {/* EMAIL */}
            <Label htmlFor="inputEmail">Email:</Label>
            <Input type="email" name="email" id="imputEmail" value={email} />
        </Form>
    );
}

export default DadosPessoais;