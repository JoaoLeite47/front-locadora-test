import React, { useState } from "react";
import "./FormModalAlocacao.css";

export default function FormModalAlocacao() {
  const [cpf_fk, setCpf_fk] = useState("");
  const [chassi_fk, setChassi_fk] = useState("");
  const [dt_saida, setDt_saida] = useState("");
  const [dt_entrega, setDt_entrega] = useState("");

  const submitHandler = () => {
    const data = { cpf_fk, chassi_fk, dt_saida, dt_entrega };
    try {
      fetch("http://localhost:5000/alocacao/novo", {
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
        name="cpf_fk"
        value={cpf_fk}
        onChange={(e) => {
          setCpf_fk(e.target.value);
        }}
        placeholder="Cpf"
        required
      />
      <input
        type="text"
        name="chassi_fk"
        value={chassi_fk}
        onChange={(e) => {
          setChassi_fk(e.target.value);
        }}
        placeholder="Chassi"
        required
      />
      <input
        type="date"
        name="dt_saida"
        value={dt_saida}
        onChange={(e) => {
          setDt_saida(e.target.value);
        }}
        placeholder="Data de saída"
        required
      />
      <input
        type="date"
        name="dt_entrega"
        value={dt_entrega}
        onChange={(e) => {
          setDt_entrega(e.target.value);
        }}
        placeholder="Data de entrega"
        required
      />
      <button className="singup" type="submit">
        Cadastrar
      </button>
    </form>
  );
}
