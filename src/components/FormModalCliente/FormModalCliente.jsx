import React, { useState } from "react";
import "./FormModalCliente.css";

export default function FormModalCliente() {
  const [newRg, setNewRg] = useState("");
  const [newDt_nascimento, setNewDt_nascimento] = useState("");
  const [newCnh, setNewCnh] = useState("");
  const [newNome, setNewNome] = useState("");
  const [newEndereco, setNewEndereco] = useState("");
  const [newCpf, setNewCpf] = useState("");

  const submitHandlerCreate = () => {
    const dataCreateClientes = {
      rg: newRg,
      dt_nascimento: newDt_nascimento,
      cnh: newCnh,
      nome: newNome,
      endereco: newEndereco,
      cpf: newCpf,
    };
    try {
      fetch("http://localhost:5000/cliente/novo", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataCreateClientes),
      }).then(() => {
        alert("Operação concluida!");
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form onSubmit={submitHandlerCreate}>
      <input
        type="text"
        name="rg"
        value={newRg}
        onChange={(e) => {
          setNewRg(e.target.value);
        }}
        placeholder="RG"
        required
      />
      <input
        type="date"
        name="dt_nascimento"
        value={newDt_nascimento}
        onChange={(e) => {
          setNewDt_nascimento(e.target.value);
        }}
        placeholder="Data de Nascimento"
        required
      />
      <input
        type="text"
        name="cnh"
        value={newCnh}
        onChange={(e) => {
          setNewCnh(e.target.value);
        }}
        placeholder="CNH"
        required
      />
      <input
        type="text"
        name="nome"
        value={newNome}
        onChange={(e) => {
          setNewNome(e.target.value);
        }}
        placeholder="Nome"
        required
      />
      <input
        type="text"
        name="endereco"
        value={newEndereco}
        onChange={(e) => {
          setNewEndereco(e.target.value);
        }}
        placeholder="Endereço"
        required
      />
      <input
        type="text"
        name="cpf"
        value={newCpf}
        onChange={(e) => {
          setNewCpf(e.target.value);
        }}
        placeholder="Cpf"
        required
      />
      <button className="singup" type="submit">
        Cadastrar
      </button>
    </form>
  );
}
