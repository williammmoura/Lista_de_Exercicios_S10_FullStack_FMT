import React from "react";

function Endereco () {
    return(
        <form>
            {/* LOGRADOURO */}
            <label htmlFor="logradouro">Logradouro:</label>
            <input type="text" name="logradouro" id="logradouro" value={logradouro} placeholder="Digite o seu logradouro." />

            {/* NÚMERO */}
            <label htmlFor="numero">Número:</label>
            <input type="number" name="numero" id="numero" value={numero} placeholder="Digite o número do endereço." />

            {/* BAIRRO */}
            <label htmlFor="bairro">Bairro:</label>
            <input type="text" name="bairro" id="bairro" value={bairro} placeholder="Digite o nome do seu bairro." />

            {/* COMPLEMENTO */}
            <label htmlFor="complemento">Complemento:</label>
            <input type="text" name="complemento" id="complemento" value={complemento} />

            {/* CIDADE */}
            <label htmlFor="cidade">Cidade:</label>
            <input type="text" name="cidade" id="cidade" value={cidade} placeholder="Digite o nome da sua cidade." />

            {/* CEP */}
            <label htmlFor="cep">CEP:</label>
            <input type="number" name="cep" id="cep" value={cep} placeholder="Digite o seu CEP." />

            {/* ESTADO */}
            <label htmlFor="estado">Estado:</label>
            <input type="text" name="estado" id="estado" value={estado} placeholder="Digite o nome do seu Estado" />

            {/* BOTÃO */}
            <button color="primary" type="submit">Enviar</button>
        </form>
    );
}

export default Endereco;