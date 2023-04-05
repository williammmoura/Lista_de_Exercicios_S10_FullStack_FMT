import { useState } from "react";
import { Form, Label, Input, Button } from "reactstrap";

function Agradecimento () {
    //Definindo o estado do selectOption e a função para sua atualização (setSelectOption).
    const[selectOption, setSelectOption] = useState("")
    
    return(
        <div>
            <h1>Obrigado pelo seu cadastro!</h1>

            <Form>
                {/*OPÇÕES PARA SELEÇÃO*/}
                <Label htmlFor="selectOption"> Onde você nos conheceu?</Label>
                <Input type="select" name="selectOption" id="selectOption" value={selectOption} onChange={(e) => setSelectOption(e.target.value)}>{/*onChange atualiza o estado do selectOption*/}
                <option value="">--Selecione uma opção--</option>
                <option value="Linkedin">Linkedin</option>
                <option value="Instagram">Instagram</option>
                </Input>

                {/*BOTÃO*/} 
                <Button color="primary">Enviar</Button>
            </Form>
        </div>
    );
};

export default Agradecimento;