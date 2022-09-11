import React, { useState, useEffect } from "react";
import "./ModalClienteUpdate.css";
export default function ModalClienteUpdate({ onClose = () => {}, cpfBase }) {
  const [Cliente, setCliente] = useState([]);
  const [rg, setRg] = useState("");
  const [dt_nascimento, setDt_nascimento] = useState("");
  const [cnh, setCnh] = useState("");
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");

  const getClienteUnique = () => {
    fetch(`http://localhost:5000/cliente/${cpfBase}`).then(async (res) =>
      setCliente(await res.json())
    );
  };

  useEffect(() => {
    getClienteUnique();
  }, []);

  const submitHandlerUpdate = () => {
    const data = { rg, dt_nascimento, cnh, nome, endereco };
    try {
      fetch(`http://localhost:5000/cliente/update/${cpfBase}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(() => {
        alert("Operação concluida!");
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="clienteModalUpdate">
      <div className="clienteModalUpdateContainer">
        <button className="clienteModalUpdateClose" onClick={onClose} />
        <div className="clienteModalUpdateContant">
          {Cliente.map(({ rg, dt_nascimento, cnh, nome, endereco, cpf }) => {
            return (
              <div className="formUpdateCliente">
                <form onSubmit={submitHandlerUpdate} key={cpf}>
                  <input
                    type="text"
                    name="rg"
                    placeholder="Rg"
                    Value={rg}
                    onChange={(e) => setRg(e.target.value)}
                    required
                  />
                  <input
                    type="date"
                    name="dt_nascimento"
                    placeholder="Data de Nascimento"
                    Value={dt_nascimento}
                    onChange={(e) => setDt_nascimento(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    name="cnh"
                    placeholder="Cnh"
                    Value={cnh}
                    onChange={(e) => setCnh(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    Value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    name="endereco"
                    placeholder="Endereço"
                    Value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                    required
                  />
                  <button className="update" type="submit">
                    Atualizar
                  </button>
                </form>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
