import styled from "styled-components";

//Usando CCS como componente
const SCPassoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`;

const ScPasso = styled.span`
    color: ${props => `${props.ativo ? '#c71d81' : '#868584'}`};
    font-weight: ${props => `${props.ativo ? 'bold' : 'regular'}`};
`;

export default {SCPassoContainer, ScPasso}