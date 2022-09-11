import React, { useState } from "react";
import "./FormModalAlocacao.css";

export default function FormModalAlocacao() {
  const [Newcpf_fk, setNewCpf_fk] = useState("");
  const [Newchassi_fk, setNewChassi_fk] = useState("");
  const [Newdt_saida, setNewDt_saida] = useState("");
  const [Newdt_entrega, setNewDt_entrega] = useState("");

  const submitHandler = () => {
    const dataCreateAlocacao = {
      cpf_fk: Newcpf_fk,
      chassi_fk: Newchassi_fk,
      dt_saida: Newdt_saida,
      dt_entrega: Newdt_entrega,
    };
    try {
      fetch("http://localhost:5000/alocacao/novo", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataCreateAlocacao),
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
        value={Newcpf_fk}
        onChange={(e) => {
          setNewCpf_fk(e.target.value);
        }}
        placeholder="Cpf"
        required
      />
      <input
        type="text"
        name="chassi_fk"
        value={Newchassi_fk}
        onChange={(e) => {
          setNewChassi_fk(e.target.value);
        }}
        placeholder="Chassi"
        required
      />
      <input
        type="date"
        name="dt_saida"
        value={Newdt_saida}
        onChange={(e) => {
          setNewDt_saida(e.target.value);
        }}
        placeholder="Data de saída"
        required
      />
      <input
        type="date"
        name="dt_entrega"
        value={Newdt_entrega}
        onChange={(e) => {
          setNewDt_entrega(e.target.value);
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
