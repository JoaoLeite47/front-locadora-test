import React, { useState } from "react";

export default function FormModalCategoria() {
  const [descricao, setDescricao] = useState("");
  const [valor_diaria, setValor_diaria] = useState("");

  const submitHandler = () => {
    const data = { descricao, valor_diaria };
    try {
      fetch("http://localhost:5000/categoria/novo", {
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

  const teste = () => {
    console.log(valor_diaria, descricao);
  };

  return (
    <form onSubmit={submitHandler} onChange={teste}>
      <input
        type="text"
        name="descricao"
        value={descricao}
        onChange={(e) => {
          setDescricao(e.target.value);
        }}
        placeholder="Descrição"
        required
      />
      <input
        type="number"
        step="0.1"
        min="0"
        name="valor_diaria"
        value={valor_diaria}
        onChange={(e) => {
          setValor_diaria(e.target.value);
        }}
        placeholder="Valor da diária"
        required
      />
      <button className="singup" type="submit">
        Cadastrar
      </button>
    </form>
  );
}
