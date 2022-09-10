import React, { useState, useEffect } from "react";
import "./ModalClienteUpdate.css";
export default function ModalClienteUpdate({ onClose = () => {}, cpfBase }) {
  const [Cliente, setCliente] = useState([]);

  const getClienteUnique = () => {
    fetch(`http://localhost:5000/cliente/${cpfBase}`).then(async (res) =>
      setCliente(await res.json())
    );
  };

  useEffect(() => {
    getClienteUnique();
  }, []);

  const teste = (rg) => {
    const data = {rg}
    console.log(data)
  }

  return (
    <div className="clienteModalUpdate">
      <div className="clienteModalUpdateContainer">
        <button className="clienteModalUpdateClose" onClick={onClose} />
        <div className="clienteModalUpdateContant">
          {Cliente.map(({ rg, dt_nascimento, cnh, nome, endereco, cpf }) => {
            return (
              <div className="formUpdateCliente">
                <form>
                  <input
                    type="text"
                    name="rg"
                    placeholder="Rg"
                    Value={rg}
                    onChange={(e) => teste(e.target.value)}
                    required
                  />
                  <input
                    type="date"
                    name="dt_nascimento"
                    placeholder="Data de Nascimento"
                    Value={dt_nascimento}
                    required
                  />
                  <input
                    type="text"
                    name="cnh"
                    placeholder="Cnh"
                    Value={cnh}
                    required
                  />
                  <input
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    Value={nome}
                    required
                  />
                  <input
                    type="text"
                    name="endereco"
                    placeholder="Endereço"
                    Value={endereco}
                    required
                  />
                  <input
                    type="text"
                    name="cpf"
                    placeholder="Cpf"
                    Value={cpf}
                    key={cpf}
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
