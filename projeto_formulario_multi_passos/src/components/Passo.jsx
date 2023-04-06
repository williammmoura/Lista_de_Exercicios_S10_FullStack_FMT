function Passo (){
    return(
        <SCPassoContainer>
            {/* Primeiro passo (SCPasso) com o atributo "ativo" (booleano), que determina se o passo está tivo ou não */}
            <SCPasso ativo={passoAtual == 0 ? true : false}>
                {/* Renderizando o icone, que é parteda biblioteca "react-icon/ai" */}
                <AiOutlineUserAdd /> Dados pessoais
            </SCPasso>
            {/* Segundo passo */}
            <SCPasso ativo={passoAtual == 1 ? true : false}>
                <BsHouseAdd /> Endereço
            </SCPasso>
            <SCPasso ativo={passoAtual == 2 ? true : false}>
                <BiHappyHeartEyes /> Agradecimento
            </SCPasso>
        </SCPassoContainer>
    );
}

export default Passo;