import React from "react";
import { Form, Label, Input} from "reactstrap";

function Endereco () {

    return(
        <Form>
            {/* LOGRADOURO */}
            <Label htmlFor="logradouro">Logradouro:</Label>
            <Input type="text" name="logradouro" id="logradouro" value={logradouro} placeholder="Digite o seu logradouro." />

            {/* NÚMERO */}
            <Label htmlFor="numero">Número:</Label>
            <Input type="number" name="numero" id="numero" value={numero} placeholder="Digite o número do endereço." />

            {/* BAIRRO */}
            <Label htmlFor="bairro">Bairro:</Label>
            <Input type="text" name="bairro" id="bairro" value={bairro} placeholder="Digite o nome do seu bairro." />

            {/* COMPLEMENTO */}
            <Label htmlFor="complemento">Complemento:</Label>
            <Input type="text" name="complemento" id="complemento" value={complemento} />

            {/* CIDADE */}
            <Label htmlFor="cidade">Cidade:</Label>
            <Input type="text" name="cidade" id="cidade" value={cidade} placeholder="Digite o nome da sua cidade." />

            {/* CEP */}
            <Label htmlFor="cep">CEP:</Label>
            <Input type="number" name="cep" id="cep" value={cep} placeholder="Digite o seu CEP." />

            {/* ESTADO */}
            <Label htmlFor="estado">Estado:</Label>
            <Input type="text" name="estado" id="estado" value={estado} placeholder="Digite o nome do seu Estado" />
        </Form>
    );
}

export default Endereco;