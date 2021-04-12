import React, { useState } from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";

import api from "../../service/api";

export default function ModalComponent(props) {
  const [show, setShow] = useState(false);
  let [nome_da_empresa, setNomeEmpresa] = useState("");
  let [nome_radar, setNomeRadar] = useState("");
  let [atividade, setAtividade] = useState("");
  let [robo_servicos_tomados, setRoboServicosTomados] = useState("");
  let [robo_notas_entrada, setRoboNotasEntradas] = useState("");
  let [robo_servicos_prestados, setroboServicosPrestados] = useState("");
  let [sefaz_user, setSefazUser] = useState("");
  let [sefaz_password, setSefazPassword] = useState("");
  let [ncms_revenda, setNcmsRevenda] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleSubmit(event) {
    event.preventDefault();
    let data = {
      nome_da_empresa,
      nome_radar,
      atividade,
      robo_servicos_tomados,
      robo_notas_entrada,
      robo_servicos_prestados,
      sefaz_user,
      sefaz_password,
      ncms_revenda,
    };
    await api.post("/bots", data);
    await handleClose();
    props.inserNewData();
  }

  return (
    <>
      <Button style={{ margin: "20px" }} variant="primary" onClick={handleShow}>
        Novo Registro
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        size="xl"
        id="modalstyle"
      >
        <Modal.Header closeButton>
          <Modal.Title>Novo Registro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Nome da empresa</Form.Label>
                <Form.Control
                  value={nome_da_empresa}
                  onChange={(event) => {
                    setNomeEmpresa(event.target.value);
                  }}
                />

                <Form.Label>Nome Radar</Form.Label>
                <Form.Control
                  value={nome_radar}
                  onChange={(event) => {
                    setNomeRadar(event.target.value);
                  }}
                />

                <Form.Label>NCMS</Form.Label>
                <Form.Control
                  value={ncms_revenda}
                  onChange={(event) => {
                    setNcmsRevenda(event.target.value);
                  }}
                />

                <Form.Label>Atividade</Form.Label>
                <Form.Control
                  value={atividade}
                  onChange={(event) => {
                    setAtividade(event.target.value);
                  }}
                />

                <Form.Label>Serviços Tomados</Form.Label>
                <Form.Control
                  value={robo_servicos_tomados}
                  onChange={(event) => {
                    setRoboServicosTomados(event.target.value);
                  }}
                />

                <Form.Label>Notas Entradas</Form.Label>
                <Form.Control
                  value={robo_notas_entrada}
                  onChange={(event) => {
                    setRoboNotasEntradas(event.target.value);
                  }}
                />

                <Form.Label>Usuario Sefaz</Form.Label>
                <Form.Control
                  value={sefaz_user}
                  onChange={(event) => {
                    setSefazUser(event.target.value);
                  }}
                />

                <Form.Label>Senha Sefaz</Form.Label>
                <Form.Control
                  value={sefaz_password}
                  onChange={(event) => {
                    setSefazPassword(event.target.value);
                  }}
                />

                <Form.Label>Serviços Prestados</Form.Label>
                <Form.Control
                  value={robo_servicos_prestados}
                  onChange={(event) => {
                    setroboServicosPrestados(event.target.value);
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
