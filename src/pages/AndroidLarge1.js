import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";

const BemVindoAo = styled.div`
  align-self: stretch;
  position: relative;
`;
const Dinersort = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 4rem;
`;
const FrameBemVindo = styled.div`
  position: absolute;
  top: -0.62rem;
  left: -1.75rem;
  border-radius: 0px 0px var(--br-81xl) var(--br-81xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 25rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 4.44rem 4.75rem;
  align-items: center;
  justify-content: flex-start;
`;
const SeuPrimeiroNomeContainer = styled(Form.Group)`
  width: 12.69rem;
  border: none;
  background-color: transparent;
  position: relative;
`;
const EspaoNome = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`;
const Senha = styled.div`
  position: relative;
`;
const SeuLtimoSobrenomeContainer = styled(Form.Group)`
  border: none;
  background-color: transparent;
  align-self: stretch;
  position: relative;
`;
const OpesParaLogin = styled.div`
  position: absolute;
  top: 26.25rem;
  left: 3.25rem;
  border-radius: 21px;
  background-color: rgba(63, 4, 191, 0.5);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 1.63rem 0.5rem;
  align-items: center;
  justify-content: flex-start;
  gap: 1.06rem;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-white);
`;
const AndroidLarge1Root = styled.div`
  position: relative;
  background-color: #291340;
  width: 100%;
  height: 50rem;
  overflow: hidden;
  text-align: center;
  font-size: 2.5rem;
  color: var(--color-black);
  font-family: var(--font-montserrat);
`;
const AndroidLarge1 = () => {
  return (
    <AndroidLarge1Root>
      <FrameBemVindo>
        <BemVindoAo>Bem vindo ao</BemVindoAo>
        <Dinersort>DinerSort</Dinersort>
      </FrameBemVindo>
      <OpesParaLogin>
        <EspaoNome>
          <BemVindoAo>login</BemVindoAo>
          <SeuPrimeiroNomeContainer id="primeiro_nome">
            <Form.Label>Seu primeiro nome</Form.Label>
            <Form.Control
              type="text"
              name="primeiro_nome"
              id="primeiro_nome"
              placeholder="Seu primeiro nme"
            />
          </SeuPrimeiroNomeContainer>
        </EspaoNome>
        <EspaoNome>
          <Senha>senha</Senha>
          <SeuLtimoSobrenomeContainer id="ultimo_sobrenome">
            <Form.Label>Seu último sobrenome</Form.Label>
            <Form.Control
              type="text"
              name="ultimo_sobrenome"
              id="ultimo_sobrenome"
              placeholder="Seu ultimo sobrenome"
            />
          </SeuLtimoSobrenomeContainer>
        </EspaoNome>
        <Button variant="primary" name="Entrar" id="entrar">
          Entrar
        </Button>
      </OpesParaLogin>
    </AndroidLarge1Root>
  );
};

export default AndroidLarge1;
