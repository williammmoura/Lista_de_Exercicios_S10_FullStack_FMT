import { DadosPessoais } from './components/DadosPessoais'
import { Endereco } from './components/Endereco'
import { Agradecimento } from './components/Agradecimento'
import { Passo } from './components/Passo'
import { usePasso } from './hooks/usePasso'
import { GrFormNextLink, GrFormPrevious} from 'react-icon/gr'
import { FiSend } from 'react-icon/fi'
import { SCHeader, SCFormContainer, SCButton } from './styles'


function App() {

  //Criando a variável "componentes" para receber os três componentes do formulário.
  const componentes = [<DadosPessoais/>,<Endereco/>,<Agradecimento/>];

  //A função "usePasso" gerencia o progresso do formulário
  const {passoAtual, componenteAtual, mudaPasso, UltimoPasso} = usePasso(componentes);

  //Rotorno da função "App"
  return (
    <div className="App">
      
      {/* CABEÇALHO */}
      <SCHeader>
        <h1>Cadastra-se aqui!</h1>
        <p>Faça o seu cadastro, gratuitamente, para ter acesso a todos os recursos do nosso site.</p>
      </SCHeader>

      {/* FORMULARIO */}
      <SCFormContainer>
        <form onSubmit={(evento) => mudarPasso(passoAtual + 1, evento)}>
          <Passo passoAtual={passoAtual}/>
          <div className='inputs-container'>
            {componenteAtual}
          </div>
          <div className='acoes'>
            {!passoAtual == 0 &&
            <SCButton type="button" onClick={(e) => mudaPasso(passoAtual - 1, evento)}>
              <GrFormPrevious /><b>Voltar</b>  
            </SCButton>}
            {UltimoPasso ? (
              <SCButton type="submit"><span>Enviar</span><FiSend /></SCButton>
              ) : (
              <SCButton type="submit"><span>Avançar</span><GrFormNextLink /></SCButton>
            )}
          </div>
        </form>
      </SCFormContainer>      
    </div>
  );
}

export default App
