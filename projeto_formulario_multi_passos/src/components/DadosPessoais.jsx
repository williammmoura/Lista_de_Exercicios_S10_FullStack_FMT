import React from "react";
import {Form, Label, Input, Button} from 'reactstrap'

function DadosPessoais(){
    return(
        <Form >
            {/* NOME */}
            <Label htmlFor="inputNome">Nome:</Label>
            <Input type="text" name="nome" id="inputName" placeholder="Nome Completo" value={nome}/>
            
            {/* EMAIL */}
            <Label htmlFor="inputEmail">Email:</Label>
            <Input type="email" name="email" id="imputEmail" value={email}/>

            {/* BOTÃO */}
            <Button color="primary" type="submit">Enviar</Button>
        </Form>
    );
}

export default DadosPessoais;