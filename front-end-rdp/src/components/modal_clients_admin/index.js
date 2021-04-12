import React, { useState } from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";
import api from "../../service/api";

export default function ClientModalComponent() {
  const [show, setShow] = useState(false);

  let [cpf, setCpf] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const data = api.post("/user", { cpf, password, email });
      handleClose();
      return data;
    } catch (error) {
      alert("Algo deu errado ao salvar os dados.");
    }
  }

  return (
    <>
      <Button style={{ margin: "20px" }} variant="primary" onClick={handleShow}>
        Novo Cadastro de Usuario
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        size="xl"
        id="modalstyle"
      >
        <Modal.Header closeButton>
          <Modal.Title>Novo Registro de Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>CPF</Form.Label>
                <Form.Control
                  value={cpf}
                  onChange={(event) => {
                    setCpf(event.target.value);
                  }}
                />

                <Form.Label>Email</Form.Label>
                <Form.Control
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />

                <Form.Label>Senha</Form.Label>
                <Form.Control
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </Form.Group>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
