import React from "react";
import { Form, Label, Input } from "reactstrap";

function Agradecimento () {
    return(
        <div>
            <h1>Obrigado pelo seu cadastro!</h1>

            <Form>
                {/*OPÇÕES PARA SELEÇÃO*/}
                <Label htmlFor="selectOption"> Onde você nos conheceu?</Label>
                <Input type="select" name="selectOption" id="selectOption" value={selectOption}>
                    <option defaultValue>--Selecione uma opção--</option>
                    <option value="linkedin">Linkedin</option>
                    <option value="instagram">Instagram</option>
                </Input>
            </Form>
        </div>
    );
};

export default Agradecimento;