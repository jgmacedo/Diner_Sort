import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import styles from "./AndroidLarge1.module.css";
import { useState } from "react";

const AndroidLarge1 = () => {

  const [primeiroNome, setPrimeiroNome] = useState("");
  const [ultimoSobrenome, setUltimoSobrenome] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Fazer a requisição para o backend
    fetch("URL_DO_BACKEND", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        primeiroNome: primeiroNome,
        ultimoSobrenome: ultimoSobrenome,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Verificar a resposta do backend
        if (data.existeUsuario) {
          alert("Usuário encontrado no backend.");
        } else {
          alert("Usuário não encontrado no backend.");
        }
      })
      .catch((error) => {
        console.error("Ocorreu um erro:", error);
      });
  };


  return (
    <div className={styles.androidLarge1}>
      <div className={styles.frameBemVindo}>
        <div className={styles.bemVindoAo}>Bem vindo ao</div>
        <div className={styles.dinersort}>DinerSort</div>
      </div>
      <div className={styles.opesParaLogin}>
        <div className={styles.espaoNome}>
          <Form.Group
            className={styles.seuPrimeiroNomeContainer}
            id="primeiro_nome"
          >
            <Form.Label>Seu primeiro nome</Form.Label>
            <Form.Control
              type="text"
              name="primeiro_nome"
              id="primeiro_nome"
              placeholder="Seu primeiro nome"
            />
          </Form.Group>
        </div>
        <div className={styles.espaoNome}>
          <Form.Group
            className={styles.seuLtimoSobrenomeContainer}
            id="ultimo_sobrenome"
          >
            <Form.Label>Seu último sobrenome</Form.Label>
            <Form.Control
              type="text"
              name="ultimo_sobrenome"
              id="ultimo_sobrenome"
              placeholder="Seu ultimo sobrenome"
            />
          </Form.Group>
        </div>
        <Button variant="primary" name="Entrar" id="entrar" style={{margin: 10}}>
          Entrar
        </Button>
      </div>
    </div>
  );
};

export default AndroidLarge1;