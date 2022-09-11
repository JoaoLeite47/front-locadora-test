import React, { useState } from "react";

export default function FormModalCategoria() {
  const [newDescricao, setNewDescricao] = useState("");
  const [newValor_diaria, setNewValor_diaria] = useState("");

  const submitHandler = () => {
    const dataCreateCategoria = {
      descricao: newDescricao,
      valor_diaria: newValor_diaria,
    };
    try {
      fetch("http://localhost:5000/categoria/novo", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataCreateCategoria),
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
        name="descricao"
        value={newDescricao}
        onChange={(e) => {
          setNewDescricao(e.target.value);
        }}
        placeholder="Descrição"
        required
      />
      <input
        type="number"
        step="0.1"
        min="0"
        name="valor_diaria"
        value={newDescricao}
        onChange={(e) => {
          setNewValor_diaria(e.target.value);
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
