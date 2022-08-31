import React, { useState } from "react";
import "./FormModalCliente.css";

export default function FormModalCliente() {
  const [rg, setRg] = useState("");
  const [dt_nascimento, setDt_nascimento] = useState("");
  const [cnh, setCnh] = useState("");
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cpf, setCpf] = useState("");

  const submitHandler = () => {
    const data = { rg, dt_nascimento, cnh, nome, endereco, cpf };
    try {
      fetch("http://localhost:5000/cliente/novo", {
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
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="rg"
        value={rg}
        onChange={(e) => {
          setRg(e.target.value);
        }}
        placeholder="RG"
        required
      />
      <input
        type="date"
        name="dt_nascimento"
        value={dt_nascimento}
        onChange={(e) => {
          setDt_nascimento(e.target.value);
        }}
        placeholder="Data de Nascimento"
        required
      />
      <input
        type="text"
        name="cnh"
        value={cnh}
        onChange={(e) => {
          setCnh(e.target.value);
        }}
        placeholder="CNH"
        required
      />
      <input
        type="text"
        name="nome"
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
        placeholder="Nome"
        required
      />
      <input
        type="text"
        name="endereco"
        value={endereco}
        onChange={(e) => {
          setEndereco(e.target.value);
        }}
        placeholder="Endereço"
        required
      />
      <input
        type="text"
        name="cpf"
        value={cpf}
        onChange={(e) => {
          setCpf(e.target.value);
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
