import { useState } from "react";

function usePasso(passos){
    
    //Usando o "useState" para definir o estado "passoAtual" com valor inicial 0. "setPassoAtual" atualiza o estado do "passoAtual"
    const [passoAtual, setPassoAtual] = useState(0)


    function mudaPasso(inicio, evento) {
        evento.preventDefault()

        // Verifica se o valor de "inicio" entá dentro do intervalo de índices do array "passos".
        if(inicio < 0 || inicio >= passos.length){
            return
        }
        setPassoAtual
    }
    // Retorna um objeto
    return{
        passoAtual,
        componenteAtual: passos[passoAtual],
        mudaPasso,
        //Atribuindo um valor (booleano) para a propriedade "UltimoPasso"
        UltimoPasso: passoAtual + 1 == passos.length ? true : false
    };
}

export default usePasso;